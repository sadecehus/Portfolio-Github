const stylesByCategory = {
  technical: 'bg-blue-100 text-blue-700 border-blue-300',
  soft: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  tool: 'bg-amber-100 text-amber-700 border-amber-300',
  language: 'bg-violet-100 text-violet-700 border-violet-300',
};

function SkillBadge({ skill, onClick, active = false }) {
  const style = stylesByCategory[skill.category] || stylesByCategory.technical;

  return (
    <button
      type="button"
      onClick={() => onClick?.(skill)}
      className={`rounded-full border px-3 py-1 text-xs font-semibold transition sm:text-sm ${style} ${
        active ? 'ring-2 ring-olive/40' : 'hover:-translate-y-0.5'
      }`}
    >
      {skill.displayName || skill.name}
      {typeof skill.score === 'number' ? ` • ${skill.score}` : ''}
    </button>
  );
}

export default SkillBadge;
