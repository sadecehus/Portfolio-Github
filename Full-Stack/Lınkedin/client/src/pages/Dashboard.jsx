import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import JobList from '../components/JobList';
import SkillBadge from '../components/SkillBadge';
import SkillChart from '../components/SkillChart';
import CategoryDonutChart from '../components/CategoryDonutChart';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Technical', value: 'technical' },
  { label: 'Soft', value: 'soft' },
  { label: 'Tool', value: 'tool' },
  { label: 'Language', value: 'language' },
];

function SummaryCard({ title, value, subtitle }) {
  return (
    <div className="rounded-2xl border border-olive/25 bg-card/90 p-4 shadow-card">
      <p className="text-xs uppercase tracking-wide text-muted">{title}</p>
      <p className="mt-2 text-2xl font-bold text-ink">{value}</p>
      <p className="mt-1 text-xs text-muted">{subtitle}</p>
    </div>
  );
}

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [skills, setSkills] = useState([]);
  const [topSkills, setTopSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError('');

        const [jobsRes, skillsRes, topSkillsRes] = await Promise.all([
          fetch('/api/jobs'),
          fetch('/api/skills'),
          fetch('/api/skills/top?n=20'),
        ]);

        const jobsJson = await jobsRes.json();
        const skillsJson = await skillsRes.json();
        const topSkillsJson = await topSkillsRes.json();

        if (!jobsJson.success || !skillsJson.success || !topSkillsJson.success) {
          throw new Error('Dashboard verileri alinamadi.');
        }

        setJobs(jobsJson.data || []);
        setSkills(skillsJson.data || []);
        setTopSkills(topSkillsJson.data || []);
      } catch (err) {
        setError(err.message || 'Beklenmeyen bir hata olustu.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleJobUpdate = async (jobId, payload) => {
    const response = await fetch(`/api/jobs/${jobId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const json = await response.json();

    if (!json.success) {
      throw new Error(json.message || 'Ilan bilgisi guncellenemedi.');
    }

    setJobs((prev) =>
      prev.map((job) => {
        if (job.id !== jobId) return job;

        return {
          ...job,
          ...json.data,
        };
      })
    );
  };

  const filteredSkills = useMemo(() => {
    if (activeFilter === 'all') return skills;
    return skills.filter((skill) => skill.category === activeFilter);
  }, [skills, activeFilter]);

  const chartSkills = useMemo(() => {
    if (activeFilter === 'all') return topSkills;
    return topSkills.filter((skill) => skill.category === activeFilter);
  }, [activeFilter, topSkills]);

  const categoryChartData = useMemo(() => {
    const totals = skills.reduce((acc, skill) => {
      const key = skill.category || 'technical';
      acc[key] = (acc[key] || 0) + Number(skill.score || 0);
      return acc;
    }, {});

    const labels = {
      technical: 'Technical',
      soft: 'Soft',
      tool: 'Tool',
      language: 'Language',
    };

    return Object.keys(totals)
      .map((key) => ({
        key,
        name: labels[key] || key,
        value: totals[key],
      }))
      .sort((a, b) => b.value - a.value);
  }, [skills]);

  const selectedJobs = useMemo(() => {
    if (!selectedSkill) return jobs;

    return jobs.filter((job) =>
      job.skills?.some(
        (skill) =>
          skill.name?.toLowerCase() === selectedSkill.name?.toLowerCase() ||
          skill.displayName?.toLowerCase() === selectedSkill.displayName?.toLowerCase()
      )
    );
  }, [jobs, selectedSkill]);

  const topSkill = skills[0];
  const appliedCount = jobs.filter((job) => Number(job.applied) === 1).length;

  if (loading) {
    return (
      <div className="rounded-xl border border-olive/25 bg-card/90 p-8 text-center text-ink">
        Dashboard yukleniyor...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-red-700">{error}</div>
    );
  }

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard title="Toplam Ilan" value={jobs.length} subtitle="Kayitli tum ilanlar" />
        <SummaryCard
          title="Unique Skill"
          value={skills.length}
          subtitle="Tekrar etmeyen toplam skill"
        />
        <SummaryCard
          title="En Cok Aranan"
          value={topSkill ? topSkill.displayName || topSkill.name : '-'}
          subtitle={topSkill ? `${topSkill.score} ilanda geciyor` : 'Henuz skill yok'}
        />
        <SummaryCard
          title="Basvurulan Ilan"
          value={appliedCount}
          subtitle={`${jobs.length ? Math.round((appliedCount / jobs.length) * 100) : 0}% tamamlandi`}
        />
      </section>

      <section className="rounded-2xl border border-olive/25 bg-card/90 p-4 shadow-card sm:p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => {
                setActiveFilter(filter.value);
                setSelectedSkill(null);
              }}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                activeFilter === filter.value
                  ? 'bg-accent text-white'
                  : 'bg-[#eef1e5] text-ink hover:bg-[#dfe8d3]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-ink">Skill Frekans Grafigi (Top 20)</h2>
            <SkillChart data={chartSkills} onSkillClick={(entry) => setSelectedSkill(entry || null)} />
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-ink">Kategori Dagilimi</h2>
            <CategoryDonutChart data={categoryChartData} />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-olive/25 bg-card/90 p-4 shadow-card sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-ink">Skill Skorlari</h2>
          {selectedSkill ? (
            <button
              type="button"
              className="rounded-md bg-[#eef1e5] px-3 py-1 text-xs text-ink hover:bg-[#dfe8d3]"
              onClick={() => setSelectedSkill(null)}
            >
              Secimi Temizle
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {filteredSkills.map((skill) => (
            <SkillBadge
              key={skill.id}
              skill={skill}
              active={selectedSkill?.id === skill.id}
              onClick={setSelectedSkill}
            />
          ))}
        </div>
      </section>

      <JobList
        jobs={selectedJobs}
        onJobUpdate={handleJobUpdate}
        title={
          selectedSkill
            ? `"${selectedSkill.displayName || selectedSkill.name}" skill'ini iceren ilanlar`
            : 'Tum Ilanlar'
        }
      />
    </motion.div>
  );
}

export default Dashboard;
