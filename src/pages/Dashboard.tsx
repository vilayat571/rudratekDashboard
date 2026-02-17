import { useState } from "react";
import { Project } from "../types/project";
import { PROJECTS } from "../data/projects";
import { useProjectFilters } from "../hooks/useProjectFilters";
import { FilterBar } from "../components/FilterBar";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetailPanel } from "../components/ProjectDetailPanel";
import { EmptyState } from "../components/EmptyState";

export function Dashboard() {
  // selectedProject drives the detail panel - null means panel is closed
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const {
    filters,
    filteredProjects,
    handleSearchChange,
    handleStatusToggle,
    clearFilters,
    hasActiveFilters,
  } = useProjectFilters(PROJECTS);

  function handleProjectClick(project: Project) {
    setSelectedProject(project);
  }

  function handleClosePanel() {
    setSelectedProject(null);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top navbar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          {/* Simple logo placeholder */}
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">R</span>
          </div>
          <div>
            <h1 className="text-base font-semibold text-slate-800">
              Rudratek
            </h1>
            <p className="text-xs text-slate-400">Project Dashboard</p>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        {/* Page heading */}
        <div>
          <h2 className="text-xl font-bold text-slate-900">All Projects</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Track and manage all active, on-hold, and completed projects.
          </p>
        </div>

        {/* Filters section */}
        <FilterBar
          filters={filters}
          onSearchChange={handleSearchChange}
          onStatusToggle={handleStatusToggle}
          onClearFilters={clearFilters}
          hasActiveFilters={hasActiveFilters}
          totalCount={PROJECTS.length}
          filteredCount={filteredProjects.length}
        />

        {/* Project list or empty states */}
        {PROJECTS.length === 0 ? (
          // The raw data itself is empty (no projects at all)
          <EmptyState type="no-projects" />
        ) : filteredProjects.length === 0 ? (
          // Projects exist but filters filtered them all out
          <EmptyState type="no-results" onClearFilters={clearFilters} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>
        )}
      </main>

      {/* Detail panel - only renders when a project is selected */}
      <ProjectDetailPanel
        project={selectedProject}
        onClose={handleClosePanel}
      />
    </div>
  );
}
