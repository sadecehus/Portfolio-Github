import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SkillBadge from './SkillBadge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

function Chevron({ open }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.24 }}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-moss"
    >
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  );
}

function JobCard({ job, onJobUpdate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(Boolean(job.notes));
  const [applied, setApplied] = useState(Boolean(job.applied));
  const [notes, setNotes] = useState(job.notes || '');
  const [saving, setSaving] = useState(false);
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setApplied(Boolean(job.applied));
    setNotes(job.notes || '');
  }, [job.applied, job.notes]);

  const handleSave = async () => {
    if (!onJobUpdate) return;

    try {
      setSaving(true);
      setInfo('');
      setError('');
      await onJobUpdate(job.id, { applied, notes });
      setInfo('Takip bilgileri kaydedildi.');
    } catch (err) {
      setError(err.message || 'Guncelleme basarisiz oldu.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32 }}
    >
      <Card>
        <CardHeader className="p-0">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex w-full items-center justify-between px-4 py-4 text-left sm:px-5"
          >
            <div>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.company}</CardDescription>
            </div>

            <Chevron open={isOpen} />
          </button>
        </CardHeader>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <CardContent className="space-y-4 border-t border-olive/15 px-4 pb-4 pt-4 sm:px-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`rounded-full px-3 mt-4 py-1 text-xs font-semibold ${
                      applied
                        ? 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200'
                        : 'bg-amber-100 text-amber-700 ring-1 ring-amber-200'
                    }`}
                  >
                    {applied ? 'Basvuruldu' : 'Henuz Basvurulmadi'}
                  </span>

                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-moss hover:text-olive"
                    >
                      Ilani Ac
                    </a>
                  ) : null}
                </div>

                <p className="line-clamp-4 text-sm leading-relaxed text-muted">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.skills?.map((skill) => (
                    <SkillBadge key={`${job.id}-${skill.id}`} skill={skill} />
                  ))}
                </div>

                <div className="rounded-xl border border-olive/20 bg-[#f7f2e8] p-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <label className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                      <input
                        type="checkbox"
                        checked={applied}
                        onChange={(e) => setApplied(e.target.checked)}
                        className="h-4 w-4 rounded border-olive/35 text-moss focus:ring-olive/40"
                      />
                      Basvuru Yapildi
                    </label>

                    <button
                      type="button"
                      className="rounded-md bg-[#e8efdc] px-3 py-1.5 text-xs font-semibold text-moss transition hover:bg-[#dce7ca]"
                      onClick={() => setIsNotesOpen((prev) => !prev)}
                    >
                      {isNotesOpen ? 'Notu Gizle' : 'Not Ekle'}
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isNotesOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 space-y-3">
                          <textarea
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Not ekleyin: gorusme tarihi, takip adimi, maas notu..."
                            className="w-full rounded-lg border border-olive/25 bg-white/85 px-3 py-2 text-sm text-ink outline-none ring-olive/30 focus:ring"
                          />

                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              type="button"
                              onClick={handleSave}
                              disabled={saving}
                              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-md shadow-olive/25 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                              {saving ? 'Kaydediliyor...' : 'Takip Bilgisini Kaydet'}
                            </button>

                            {info ? <span className="text-xs text-emerald-700">{info}</span> : null}
                            {error ? <span className="text-xs text-red-700">{error}</span> : null}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </CardContent>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}

function JobList({ jobs, title, onJobUpdate }) {
  if (!jobs?.length) {
    return (
      <div className="rounded-xl border border-dashed border-olive/35 bg-[#fbf6ec] p-6 text-sm text-muted">
        Bu filtreye uygun ilan bulunamadi.
      </div>
    );
  }

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>

      <div className="grid gap-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onJobUpdate={onJobUpdate} />
        ))}
      </div>
    </section>
  );
}

export default JobList;
