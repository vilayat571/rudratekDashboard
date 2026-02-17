import { useState, useMemo } from "react";
import { Project, Filters, ProjectStatus } from "../types/project";

// This hook handles all filter state and filtering logic
// Kept separate from components so filtering logic is easy to test and reuse
export function useProjectFilters(allProjects: Project[]) {
  const [filters, setFilters] = useState<Filters>({
    searchQuery: "",
    selectedStatuses: [],
  });

  // useMemo so we don't re-filter on every render, only when data or filters change
  const filteredProjects = useMemo(() => {
    let result = allProjects; // never mutate allProjects directly

    // Apply search filter - checks both project name and client name
    if (filters.searchQuery.trim() !== "") {
      const query = filters.searchQuery.toLowerCase().trim();
      result = result.filter(
        (project) =>
          project.name.toLowerCase().includes(query) ||
          project.clientName.toLowerCase().includes(query)
      );
    }

    // Apply status filter - if no statuses selected, show all
    if (filters.selectedStatuses.length > 0) {
      result = result.filter((project) =>
        filters.selectedStatuses.includes(project.status)
      );
    }

    return result;
  }, [allProjects, filters]);

  function handleSearchChange(query: string) {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }

  function handleStatusToggle(status: ProjectStatus) {
    setFilters((prev) => {
      const alreadySelected = prev.selectedStatuses.includes(status);
      if (alreadySelected) {
        // Remove the status from selected
        return {
          ...prev,
          selectedStatuses: prev.selectedStatuses.filter((s) => s !== status),
        };
      } else {
        // Add the status to selected
        return {
          ...prev,
          selectedStatuses: [...prev.selectedStatuses, status],
        };
      }
    });
  }

  function clearFilters() {
    setFilters({ searchQuery: "", selectedStatuses: [] });
  }

  const hasActiveFilters =
    filters.searchQuery.trim() !== "" || filters.selectedStatuses.length > 0;

  return {
    filters,
    filteredProjects,
    handleSearchChange,
    handleStatusToggle,
    clearFilters,
    hasActiveFilters,
  };
}
