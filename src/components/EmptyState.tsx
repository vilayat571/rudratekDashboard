interface EmptyStateProps {
  type: "no-projects" | "no-results";
  onClearFilters?: () => void;
}

export function EmptyState({ type, onClearFilters }: EmptyStateProps) {
  if (type === "no-projects") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 className="text-base font-semibold text-slate-700">
          No projects yet
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          Projects will appear here once they are added.
        </p>
      </div>
    );
  }

  // no-results state (filters applied but nothing matched)
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <h3 className="text-base font-semibold text-slate-700">
        No matching projects
      </h3>
      <p className="text-sm text-slate-400 mt-1">
        Try adjusting your filters or search term.
      </p>
      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="mt-4 text-sm text-blue-600 hover:text-blue-700 underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}
