import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const colorByCategory = {
  technical: '#3b82f6',
  soft: '#10b981',
  tool: '#f59e0b',
  language: '#8b5cf6',
};

function CategoryDonutChart({ data }) {
  if (!data?.length) {
    return (
      <div className="rounded-xl border border-dashed border-olive/35 bg-[#f8f5ee] p-6 text-sm text-muted">
        Kategori grafigi icin yeterli veri yok.
      </div>
    );
  }

  return (
    <div className="h-[420px] w-full rounded-xl border border-olive/25 bg-[#fcf8f0] p-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={72}
            outerRadius={128}
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={colorByCategory[entry.key] || '#6b8f71'}
                stroke="#f6f1e8"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#fffaf1',
              border: '1px solid #cdd7c3',
              borderRadius: 10,
              color: '#2f3a2f',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryDonutChart;
