# Rudratek Project Dashboard

A Project Dashboard built with React, TypeScript, and Tailwind CSS for the Rudratek Frontend Assignment.

---

## Setup Instructions

**Prerequisites:** Node.js 18+ and npm

```bash
# 1. Clone the repo or unzip the project
cd rudratekDashboard

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173`

To build for production:
```bash
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── EmptyState.tsx       # Handles "no projects" and "no results" states
│   ├── FilterBar.tsx        # Search input + status toggle buttons
│   ├── ProjectCard.tsx      # Individual project card in the list
│   ├── ProjectDetailPanel.tsx # Slide-in panel on project click
│   └── StatusBadge.tsx      # Colored badge for Active / On Hold / Completed
├── data/
│   └── projects.ts          # Mock project data (10 projects)
├── hooks/
│   └── useProjectFilters.ts # Custom hook: all filter state + filter logic
├── pages/
│   └── Dashboard.tsx        # Main page - composes all components
├── types/
│   └── project.ts           # TypeScript types (Project, Filters, ProjectStatus)
├── App.tsx
├── main.tsx
└── index.css
```

---

## Assumptions Made

1. **No routing library used** — A single-page layout with a slide-in detail panel was chosen over page navigation. For a real app with more pages, React Router would be added. The assignment only requires one screen, so this avoids over-engineering.

2. **Extra field: `projectManager`** — Added as the one required extra field. A project manager is the most natural real-world addition to a project record since it shows accountability. It is displayed in the detail panel under "Project Manager".

3. **`endDate` can be `null`** — Some projects (like ongoing IoT or support projects) may not have a fixed end date. The app handles this gracefully and shows "No end date set" in the detail panel, and "—" in the card.

4. **Filtering is purely client-side** — All 10 projects are loaded at once and filtered in-memory using `useMemo`. This is appropriate for the scope of this assignment. For thousands of records, server-side filtering would be needed.

5. **Status filter is multi-select** — You can select multiple statuses at once (e.g., Active + On Hold). No statuses selected = show all.

---

## Trade-offs

| Decision | Reason |
|---|---|
| Detail panel instead of separate page | Simpler UX for a single-page dashboard; avoids unnecessary routing complexity |
| Custom `useProjectFilters` hook | Keeps filter logic separate from UI; easier to test and extend |
| `useMemo` for filtered results | Avoids re-filtering on every render; good habit for derived state |
| No state management library | `useState` + `useMemo` is sufficient; adding Redux/Zustand would be over-engineering |
| Tailwind only, no component library | Assignment requirement; keeps logic visible and not hidden behind abstractions |

---

## AI Usage

See [AI_USAGE.md](./AI_USAGE.md)
