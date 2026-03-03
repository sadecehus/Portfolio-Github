const path = require('path');
const Database = require('better-sqlite3');

const dbPath = path.join(__dirname, 'jobs.db');
const db = new Database(dbPath);

db.pragma('foreign_keys = ON');

function initDB() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS job_postings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT,
      title TEXT,
      company TEXT,
      description TEXT,
      applied INTEGER DEFAULT 0,
      applied_at DATETIME,
      notes TEXT DEFAULT '',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL,
      display_name TEXT,
      category TEXT DEFAULT 'technical'
    );

    CREATE TABLE IF NOT EXISTS job_skills (
      job_id INTEGER REFERENCES job_postings(id) ON DELETE CASCADE,
      skill_id INTEGER REFERENCES skills(id) ON DELETE CASCADE,
      PRIMARY KEY (job_id, skill_id)
    );
  `);

  const columns = db.prepare('PRAGMA table_info(skills)').all();
  const hasDisplayName = columns.some((col) => col.name === 'display_name');

  if (!hasDisplayName) {
    db.exec('ALTER TABLE skills ADD COLUMN display_name TEXT');
  }

  const jobColumns = db.prepare('PRAGMA table_info(job_postings)').all();
  const hasApplied = jobColumns.some((col) => col.name === 'applied');
  const hasAppliedAt = jobColumns.some((col) => col.name === 'applied_at');
  const hasNotes = jobColumns.some((col) => col.name === 'notes');

  if (!hasApplied) {
    db.exec('ALTER TABLE job_postings ADD COLUMN applied INTEGER DEFAULT 0');
  }

  if (!hasAppliedAt) {
    db.exec('ALTER TABLE job_postings ADD COLUMN applied_at DATETIME');
  }

  if (!hasNotes) {
    db.exec("ALTER TABLE job_postings ADD COLUMN notes TEXT DEFAULT ''");
  }
}

function normalizeCategory(category) {
  const raw = String(category || 'technical').toLowerCase().trim();

  if (['technical', 'tech', 'framework', 'certificate', 'education'].includes(raw)) {
    return 'technical';
  }

  if (['soft', 'soft-skill', 'soft skill'].includes(raw)) {
    return 'soft';
  }

  if (['tool', 'tools'].includes(raw)) {
    return 'tool';
  }

  if (['language', 'programming language'].includes(raw)) {
    return 'language';
  }

  return 'technical';
}

function normalizeSkillName(name) {
  return String(name || '').trim().toLowerCase();
}

function getJobCountByUrl(url) {
  if (!url) return 0;
  const row = db
    .prepare('SELECT COUNT(*) AS count FROM job_postings WHERE url = ?')
    .get(url.trim());

  return row?.count || 0;
}

function upsertSkill(skill) {
  const normalizedName = normalizeSkillName(skill?.name);

  if (!normalizedName) {
    return null;
  }

  const category = normalizeCategory(skill?.category);
  const displayName = String(skill?.name || '').trim() || normalizedName;

  const existing = db
    .prepare('SELECT id, display_name FROM skills WHERE name = ?')
    .get(normalizedName);

  if (existing) {
    if (!existing.display_name) {
      db.prepare('UPDATE skills SET display_name = ? WHERE id = ?').run(displayName, existing.id);
    }

    return existing.id;
  }

  const result = db
    .prepare('INSERT INTO skills (name, display_name, category) VALUES (?, ?, ?)')
    .run(normalizedName, displayName, category);

  return result.lastInsertRowid;
}

const saveJobWithSkills = db.transaction((jobData, skills = []) => {
  const insertJob = db.prepare(
    `INSERT INTO job_postings (url, title, company, description, applied, applied_at, notes)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  );

  const jobResult = insertJob.run(
    jobData.url || null,
    jobData.title || 'Untitled Job Posting',
    jobData.company || 'Unknown Company',
    jobData.description || '',
    jobData.applied ? 1 : 0,
    jobData.applied ? new Date().toISOString() : null,
    String(jobData.notes || '').trim()
  );

  const jobId = Number(jobResult.lastInsertRowid);
  const insertLink = db.prepare('INSERT OR IGNORE INTO job_skills (job_id, skill_id) VALUES (?, ?)');

  for (const skill of skills) {
    const skillId = upsertSkill(skill);

    if (skillId) {
      insertLink.run(jobId, skillId);
    }
  }

  return jobId;
});

function getJobs() {
  const jobs = db
    .prepare('SELECT * FROM job_postings ORDER BY created_at DESC, id DESC')
    .all();

  const skillRows = db
    .prepare(
      `SELECT
         js.job_id,
         s.id AS skill_id,
         s.name,
         COALESCE(s.display_name, s.name) AS display_name,
         s.category
       FROM job_skills js
       JOIN skills s ON s.id = js.skill_id
       ORDER BY s.name ASC`
    )
    .all();

  const skillsByJobId = new Map();

  for (const row of skillRows) {
    if (!skillsByJobId.has(row.job_id)) {
      skillsByJobId.set(row.job_id, []);
    }

    skillsByJobId.get(row.job_id).push({
      id: row.skill_id,
      name: row.name,
      displayName: row.display_name,
      category: row.category,
    });
  }

  return jobs.map((job) => ({
    ...job,
    skills: skillsByJobId.get(job.id) || [],
  }));
}

function deleteJob(id) {
  return db.prepare('DELETE FROM job_postings WHERE id = ?').run(id);
}

function updateJobTracking(id, payload = {}) {
  const current = db.prepare('SELECT * FROM job_postings WHERE id = ?').get(id);

  if (!current) return null;

  const hasAppliedInput = typeof payload.applied === 'boolean';
  const hasNotesInput = typeof payload.notes === 'string';

  const nextApplied = hasAppliedInput ? (payload.applied ? 1 : 0) : current.applied ? 1 : 0;
  const nextNotes = hasNotesInput ? payload.notes.trim() : current.notes || '';

  db.prepare(
    `UPDATE job_postings
     SET applied = ?,
         applied_at = CASE
           WHEN ? = 1 THEN COALESCE(applied_at, CURRENT_TIMESTAMP)
           ELSE NULL
         END,
         notes = ?
     WHERE id = ?`
  ).run(nextApplied, nextApplied, nextNotes, id);

  return db.prepare('SELECT * FROM job_postings WHERE id = ?').get(id);
}

function getSkills(limit = null) {
  const hasLimit = Number.isInteger(limit) && limit > 0;
  const baseSql = `
    SELECT
      s.id,
      s.name,
      COALESCE(s.display_name, s.name) AS display_name,
      s.category,
      COUNT(DISTINCT js.job_id) AS score
    FROM skills s
    LEFT JOIN job_skills js ON js.skill_id = s.id
    GROUP BY s.id
    HAVING score > 0
    ORDER BY score DESC, s.name ASC
  `;

  if (hasLimit) {
    return db.prepare(`${baseSql} LIMIT ?`).all(limit);
  }

  return db.prepare(baseSql).all();
}

function getJobsBySkillName(skillName) {
  const normalized = normalizeSkillName(skillName);

  if (!normalized) return [];

  return db
    .prepare(
      `SELECT jp.*
       FROM job_postings jp
       JOIN job_skills js ON js.job_id = jp.id
       JOIN skills s ON s.id = js.skill_id
       WHERE s.name = ?
       ORDER BY jp.created_at DESC, jp.id DESC`
    )
    .all(normalized);
}

module.exports = {
  db,
  initDB,
  saveJobWithSkills,
  getJobs,
  getSkills,
  deleteJob,
  updateJobTracking,
  getJobCountByUrl,
  getJobsBySkillName,
  normalizeCategory,
};
