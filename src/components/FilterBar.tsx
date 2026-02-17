import { ProjectStatus, Filters } from "../types/project";

const ALL_STATUSES: ProjectStatus[] = ["Active", "On Hold", "Completed"];

interface FilterBarProps {
  filters: Filters;
  onSearchChange: (query: string) => void;
  onStatusToggle: (status: ProjectStatus) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  totalCount: number;
  filteredCount: number;
}

export function FilterBar({
  filters,
  onSearchChange,
  onStatusToggle,
  onClearFilters,
  hasActiveFilters,
  totalCount,
  filteredCount,
}: FilterBarProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-4">
      {/* Search input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by project or client name..."
          value={filters.searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Status filter buttons row */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-slate-500 mr-1">Status:</span>

        {ALL_STATUSES.map((status) => {
          const isSelected = filters.selectedStatuses.includes(status);
          return (
            <button
              key={status}
              onClick={() => onStatusToggle(status)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                isSelected
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-600 border-slate-300 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {status}
            </button>
          );
        })}

        {/* Clear filters button - only visible when filters are active */}
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="ml-auto text-xs text-slate-500 hover:text-red-500 underline transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Result count line */}
      <p className="text-xs text-slate-400">
        Showing{" "}
        <span className="font-semibold text-slate-600">{filteredCount}</span> of{" "}
        <span className="font-semibold text-slate-600">{totalCount}</span>{" "}
        projects
      </p>
    </div>
  );
}
