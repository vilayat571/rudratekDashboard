// All types used across the app are defined here

export type ProjectStatus = "Active" | "On Hold" | "Completed";

export interface Project {
  id: string;
  name: string;
  clientName: string;
  status: ProjectStatus;
  startDate: string; // ISO date string e.g. "2024-01-15"
  endDate: string | null; // null if project has no end date yet
  projectManager: string; // Extra field: who is managing this project
}

// Shape of filters applied on the project list
export interface Filters {
  searchQuery: string;
  selectedStatuses: ProjectStatus[];
}
