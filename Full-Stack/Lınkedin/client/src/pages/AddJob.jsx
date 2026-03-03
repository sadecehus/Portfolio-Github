import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';

const initialForm = {
  url: '',
  title: '',
  company: '',
  description: '',
};

function AddJob() {
  const [activeTab, setActiveTab] = useState('url');
  const [form, setForm] = useState(initialForm);
  const [loadingScrape, setLoadingScrape] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [warning, setWarning] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [extractedSkills, setExtractedSkills] = useState([]);

  const isSubmitDisabled = useMemo(() => {
    if (activeTab === 'url') {
      return !form.url.trim() || !form.description.trim();
    }

    return !form.title.trim() || !form.company.trim() || !form.description.trim();
  }, [activeTab, form]);

  const updateForm = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleScrape = async () => {
    try {
      if (!form.url.trim()) {
        setError('Lutfen LinkedIn URL girin.');
        return;
      }

      setLoadingScrape(true);
      setError('');
      setWarning('');
      setSuccess('');
      setExtractedSkills([]);

      const response = await fetch('/api/jobs/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: form.url.trim() }),
      });

      const json = await response.json();

      if (!json.success) {
        setWarning(
          json.message || 'LinkedIn bu URL\'yi engelledi. Lütfen ilanı aşağıya yapıştırın.'
        );
        return;
      }

      setForm((prev) => ({
        ...prev,
        title: json.data.title || prev.title,
        company: json.data.company || prev.company,
        description: json.data.description || prev.description,
      }));

      setSuccess('Ilan metni getirildi. Analiz edip kaydedebilirsiniz.');
    } catch (err) {
      setError(err.message || 'Scrape sirasinda hata olustu.');
    } finally {
      setLoadingScrape(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoadingSave(true);
      setError('');
      setWarning('');
      setSuccess('');

      const payload = {
        url: activeTab === 'url' ? form.url.trim() : '',
        title: form.title.trim(),
        company: form.company.trim(),
        description: form.description.trim(),
      };

      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await response.json();

      if (!json.success) {
        throw new Error(json.message || 'Kaydetme islemi basarisiz.');
      }

      if (json.warning) {
        setWarning(json.warning);
      }

      setExtractedSkills(json.data?.extractedSkills || []);
      setSuccess('Ilan analiz edildi ve kaydedildi.');
      setForm((prev) => ({ ...prev, title: '', company: '', description: '' }));
    } catch (err) {
      setError(err.message || 'Beklenmeyen bir hata olustu.');
    } finally {
      setLoadingSave(false);
    }
  };

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-olive/25 bg-card/90 p-4 shadow-card sm:p-6">
        <div className="mb-5 flex flex-wrap gap-2">
          <button
            type="button"
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              activeTab === 'url' ? 'bg-accent text-white' : 'bg-[#eef1e5] text-ink hover:bg-[#dfe8d3]'
            }`}
            onClick={() => setActiveTab('url')}
          >
            URL ile Ekle
          </button>

          <button
            type="button"
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              activeTab === 'text' ? 'bg-accent text-white' : 'bg-[#eef1e5] text-ink hover:bg-[#dfe8d3]'
            }`}
            onClick={() => setActiveTab('text')}
          >
            Metin ile Ekle
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {activeTab === 'url' ? (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-ink" htmlFor="url">
                LinkedIn Is Ilani URL
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="url"
                  type="url"
                  value={form.url}
                  onChange={(e) => updateForm('url', e.target.value)}
                  placeholder="https://www.linkedin.com/jobs/view/..."
                  className="w-full rounded-lg border border-olive/30 bg-white/80 px-3 py-2 text-sm text-ink outline-none ring-olive/30 focus:ring"
                />
                <button
                  type="button"
                  onClick={handleScrape}
                  disabled={loadingScrape}
                  className="rounded-lg bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-olive disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loadingScrape ? 'Getiriliyor...' : 'Getir'}
                </button>
              </div>
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-ink" htmlFor="title">
                Pozisyon
              </label>
              <input
                id="title"
                value={form.title}
                onChange={(e) => updateForm('title', e.target.value)}
                className="w-full rounded-lg border border-olive/30 bg-white/80 px-3 py-2 text-sm text-ink outline-none ring-olive/30 focus:ring"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-ink" htmlFor="company">
                Sirket
              </label>
              <input
                id="company"
                value={form.company}
                onChange={(e) => updateForm('company', e.target.value)}
                className="w-full rounded-lg border border-olive/30 bg-white/80 px-3 py-2 text-sm text-ink outline-none ring-olive/30 focus:ring"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-ink" htmlFor="description">
              Ilan Metni
            </label>
            <textarea
              id="description"
              rows="10"
              value={form.description}
              onChange={(e) => updateForm('description', e.target.value)}
              className="w-full rounded-lg border border-olive/30 bg-white/80 px-3 py-2 text-sm text-ink outline-none ring-olive/30 focus:ring"
              placeholder="Ilan metnini buraya yapistirin..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitDisabled || loadingSave}
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-olive/25 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loadingSave ? (
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ChatGPT ilani analiz ediyor...
              </span>
            ) : (
              'Analiz Et ve Kaydet'
            )}
          </button>
        </form>
      </section>

      {warning ? (
        <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-700">
          {warning || 'LinkedIn bu URL\'yi engelledi. Lütfen ilanı aşağıya yapıştırın.'}
        </div>
      ) : null}

      {error ? (
        <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {success ? (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          <p>{success}</p>
          <Link to="/" className="mt-2 inline-block font-semibold text-moss underline">
            Dashboard'a git
          </Link>
        </div>
      ) : null}

      {extractedSkills.length ? (
        <section className="rounded-2xl border border-olive/25 bg-card/90 p-4 shadow-card sm:p-5">
          <h2 className="mb-3 text-lg font-semibold text-ink">Extract Edilen Skill'ler</h2>
          <div className="flex flex-wrap gap-2">
            {extractedSkills.map((skill) => (
              <SkillBadge
                key={`${skill.name}-${skill.category}`}
                skill={{ ...skill, displayName: skill.name }}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default AddJob;
