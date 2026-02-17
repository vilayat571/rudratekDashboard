# AI Usage Information
This project was built with assistance from **Claude AI** — an AI assistant.
---

## What Tools Were Used

- **Claude (claude.ai)** — Used throughout the project.

---

## For Which Parts
- Generating the 10 mock projects in `data/projects.ts`,
- Drafting the base code for each component and hook structure,
- Writing the README and this AI_USAGE file(based on my words),
- Improving code quality based on previous version

---
## What I Don't Fully Agree With in the AI Output
- The AI tends to add `aria-label` attributes everywhere by default, which is good practice but can add noise when you are still learning. I kept the important ones (close button) and left out the overly defensive ones for best user accesibility.
- The AI sometimes defaults to very defensive null-checking (e.g., `project?.name ?? "Unknown"`). In a TypeScript-strict codebase with proper types, this is unnecessary and hides real bugs. The types already guarantee `name` is a string.

---

## Note on Code Ownership
All the code in this repository was reviewed, understood, and is fully explainable. No code was blindly copy-pasted. In a technical interview, every line can be walked through and defended.
