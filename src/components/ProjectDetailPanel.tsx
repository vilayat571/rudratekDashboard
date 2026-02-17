import { Project } from "../types/project";
import { StatusBadge } from "./StatusBadge";

interface ProjectDetailPanelProps {
  project: Project | null;
  onClose: () => void;
}

// Simple helper to format date strings
function formatDate(dateStr: string | null): string {
  if (!dateStr) return "No end date set";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// A detail row used inside the panel - keeps the layout consistent
function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-3 border-b border-slate-100 last:border-0">
      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="text-sm text-slate-800 font-medium break-words">{value}</p>
    </div>
  );
}

export function ProjectDetailPanel({ project, onClose }: ProjectDetailPanelProps) {
  // If no project selected, render nothing
  if (!project) return null;

  return (
    <>
      {/* Dark overlay behind the panel */}
      <div
        className="fixed inset-0 bg-black/30 z-20"
        onClick={onClose}
      />

      {/* Panel itself - slides in from the right */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-30 overflow-y-auto">
        {/* Panel header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-800">
            Project Details
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close panel"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Panel content */}
        <div className="px-6 py-5">
          {/* Project name + status at the top */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {project.name}
            </h3>
            <StatusBadge status={project.status} />
          </div>

          {/* All project fields */}
          <div>
            <DetailRow label="Client Name" value={project.clientName} />
            <DetailRow label="Start Date" value={formatDate(project.startDate)} />
            <DetailRow label="End Date" value={formatDate(project.endDate)} />
            {/* 
              Extra field: Project Manager
              This was added to show who is responsible for day-to-day project execution.
              It is documented in README.md under "Assumptions".
            */}
            <DetailRow label="Project Manager" value={project.projectManager} />
            <DetailRow label="Project ID" value={`#${project.id}`} />
          </div>
        </div>
      </div>
    </>
  );
}
