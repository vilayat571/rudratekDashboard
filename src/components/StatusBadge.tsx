import { ProjectStatus } from "../types/project";

interface StatusBadgeProps {
  status: ProjectStatus;
}

// Color mapping for each status
const STATUS_STYLES: Record<ProjectStatus, string> = {
  Active: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  "On Hold": "bg-amber-100 text-amber-800 border border-amber-200",
  Completed: "bg-slate-100 text-slate-700 border border-slate-200",
};

const STATUS_DOT: Record<ProjectStatus, string> = {
  Active: "bg-emerald-500",
  "On Hold": "bg-amber-500",
  Completed: "bg-slate-400",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[status]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[status]}`} />
      {status}
    </span>
  );
}
