import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/add', label: 'Ilan Ekle' },
];

function App() {
  const location = useLocation();

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-8 rounded-3xl border border-olive/25 bg-card/90 p-5 shadow-card backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="bg-accent bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
              LinkedIn Job Skill Analyzer
            </h1>
            <p className="mt-1 text-sm text-muted">
              Ilanlari analiz et, skill trendlerini anlik takip et.
            </p>
          </div>

          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-accent text-white shadow-lg shadow-olive/20'
                      : 'bg-[#eef1e5] text-ink hover:bg-[#dfe8d3]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddJob />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
