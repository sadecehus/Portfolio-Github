import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const colorByCategory = {
  technical: '#60a5fa',
  soft: '#34d399',
  tool: '#fb923c',
  language: '#a78bfa',
};

function SkillChart({ data, onSkillClick }) {
  if (!data?.length) {
    return (
      <div className="rounded-xl border border-dashed border-olive/35 bg-[#f8f5ee] p-6 text-sm text-muted">
        Gosterilecek skill verisi yok.
      </div>
    );
  }

  return (
    <div className="h-[420px] w-full rounded-xl border border-olive/25 bg-[#fcf8f0] p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#cdd7c3" />
          <XAxis type="number" tick={{ fill: '#6f7463', fontSize: 12 }} />
          <YAxis
            type="category"
            dataKey="displayName"
            width={130}
            tick={{ fill: '#2f3a2f', fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: 'rgba(143,161,120,0.25)' }}
            contentStyle={{
              backgroundColor: '#fffaf1',
              border: '1px solid #cdd7c3',
              borderRadius: 10,
              color: '#2f3a2f',
            }}
          />
          <Bar dataKey="score" radius={[0, 6, 6, 0]} onClick={onSkillClick}>
            {data.map((entry) => (
              <Cell
                key={entry.name}
                cursor="pointer"
                fill={colorByCategory[entry.category] || colorByCategory.technical}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillChart;
