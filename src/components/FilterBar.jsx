const FILTERS = [
  { value: "all", label: "すべて" },
  { value: "active", label: "未完了" },
  { value: "completed", label: "完了済み" },
];

function FilterBar({ currentFilter, onFilterChange, activeCount }) {
  return (
    <div>
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={currentFilter === value ? "filter-btn active" : "filter-btn"}
        >
          {label}
        </button>
      ))}
      <span>{activeCount}件未完了</span>
    </div>
  );
}

export default FilterBar;