import { Project } from "../types/project";
import { StatusBadge } from "./StatusBadge";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

// Simple helper to format date strings like "2024-02-01" → "Feb 1, 2024"
function formatDate(dateStr: string | null): string {
  if (!dateStr) return "—"; // em-dash for missing end date
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={() => onClick(project)}
      className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md cursor-pointer transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        {/* Project name - truncates gracefully for very long names */}
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
            {project.name}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 truncate">
            {project.clientName}
          </p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      {/* Date row */}
      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div>
          <span className="text-slate-400">Start: </span>
          <span className="font-medium text-slate-600">
            {formatDate(project.startDate)}
          </span>
        </div>
        <div>
          <span className="text-slate-400">End: </span>
          <span className="font-medium text-slate-600">
            {formatDate(project.endDate)}
          </span>
        </div>
      </div>
    </div>
  );
}
