const path = require('path');
const dotenv = require('dotenv');

const envPaths = [
  path.join(__dirname, '..', '.env'),
  path.join(__dirname, '..', '.enve'),
  path.join(__dirname, '.env'),
  path.join(__dirname, '.enve'),
  path.join(process.cwd(), '.env'),
  path.join(process.cwd(), '.enve'),
];

for (const envPath of envPaths) {
  dotenv.config({ path: envPath, override: false });
}

const express = require('express');
const cors = require('cors');
const {
  initDB,
  saveJobWithSkills,
  getJobs,
  getSkills,
  deleteJob,
  updateJobTracking,
  getJobCountByUrl,
  getJobsBySkillName,
} = require('./db');
const { scrapeLinkedInJob } = require('./scraper');
const { extractSkillsFromText } = require('./openai');

const app = express();
const PORT = Number(process.env.PORT || 3001);

if (!process.env.OPENAI_API_KEY) {
  // eslint-disable-next-line no-console
  console.warn(
    'OPENAI_API_KEY bulunamadi. .env veya .enve dosyasina OPENAI_API_KEY ekleyip serveri yeniden baslatin.'
  );
}

initDB();

app.use(cors());
app.use(express.json({ limit: '5mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ success: true, status: 'ok' });
});

app.post('/api/jobs/scrape', async (req, res) => {
  const { url } = req.body || {};

  if (!url) {
    return res.status(400).json({
      success: false,
      message: 'URL zorunludur.',
    });
  }

  const scrapeResult = await scrapeLinkedInJob(url);
  return res.json(scrapeResult);
});

app.post('/api/jobs', async (req, res) => {
  try {
    const input = req.body || {};
    const url = String(input.url || '').trim();
    let title = String(input.title || '').trim();
    let company = String(input.company || '').trim();
    let description = String(input.description || '').trim();

    if (!description && url) {
      const scrapeResult = await scrapeLinkedInJob(url);

      if (scrapeResult.success) {
        title = title || scrapeResult.data.title;
        company = company || scrapeResult.data.company;
        description = scrapeResult.data.description;
      } else {
        return res.status(400).json({
          success: false,
          message: scrapeResult.message,
        });
      }
    }

    if (!description) {
      return res.status(400).json({
        success: false,
        message: 'İlan metni gereklidir.',
      });
    }

    const warning =
      url && getJobCountByUrl(url) > 0
        ? 'Bu URL daha önce eklenmiş. Yine de yeni kayıt olarak kaydedildi.'
        : null;

    const extractedSkills = await extractSkillsFromText(description);
    const jobId = saveJobWithSkills(
      {
        url: url || null,
        title: title || 'Untitled Job Posting',
        company: company || 'Unknown Company',
        description,
      },
      extractedSkills
    );

    return res.status(201).json({
      success: true,
      message: 'İlan analiz edilip kaydedildi.',
      warning,
      data: {
        jobId,
        extractedSkills,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'İlan kaydedilirken hata oluştu.',
      error: error.message,
    });
  }
});

app.get('/api/jobs', (_req, res) => {
  const jobs = getJobs();

  res.json({
    success: true,
    data: jobs,
  });
});

app.delete('/api/jobs/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Geçersiz ilan id.',
    });
  }

  const result = deleteJob(id);

  if (!result.changes) {
    return res.status(404).json({
      success: false,
      message: 'İlan bulunamadı.',
    });
  }

  return res.json({
    success: true,
    message: 'İlan silindi.',
  });
});

app.patch('/api/jobs/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Gecersiz ilan id.',
    });
  }

  const { applied, notes } = req.body || {};
  const normalizedPayload = {};

  if (typeof applied === 'boolean') {
    normalizedPayload.applied = applied;
  }

  if (typeof notes === 'string') {
    normalizedPayload.notes = notes;
  }

  if (!Object.keys(normalizedPayload).length) {
    return res.status(400).json({
      success: false,
      message: 'Guncellenecek alan bulunamadi.',
    });
  }

  const updated = updateJobTracking(id, normalizedPayload);

  if (!updated) {
    return res.status(404).json({
      success: false,
      message: 'Ilan bulunamadi.',
    });
  }

  return res.json({
    success: true,
    message: 'Ilan takip bilgileri guncellendi.',
    data: updated,
  });
});

app.get('/api/skills', (_req, res) => {
  const skills = getSkills();

  res.json({
    success: true,
    data: skills.map((skill) => ({
      id: skill.id,
      name: skill.name,
      displayName: skill.display_name,
      category: skill.category,
      score: Number(skill.score),
    })),
  });
});

app.get('/api/skills/top', (req, res) => {
  const n = Number(req.query.n || 20);
  const safeLimit = Number.isInteger(n) && n > 0 ? Math.min(n, 100) : 20;
  const topSkills = getSkills(safeLimit);

  res.json({
    success: true,
    data: topSkills.map((skill) => ({
      id: skill.id,
      name: skill.name,
      displayName: skill.display_name,
      category: skill.category,
      score: Number(skill.score),
    })),
  });
});

app.get('/api/skills/:name/jobs', (req, res) => {
  const { name } = req.params;
  const jobs = getJobsBySkillName(name);

  res.json({
    success: true,
    data: jobs,
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});
