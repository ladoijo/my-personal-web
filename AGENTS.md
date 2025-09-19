# Repository Guidelines

## Project Structure & Module Organization
This Next.js 15 + TypeScript site keeps all application code under `src`. Route segments, layouts, and metadata live in `src/app`, while reusable UI blocks sit in `src/components` and page-level compositions in `src/sections`. Shared assets (`svg`, images) are in `src/assets`, configuration constants in `src/constants`, and type definitions in `src/types`. Client-side helpers live in `src/utils`. Publicly served static files belong in `public/`. Review `README.md` before adding new sections to stay aligned with the project's visual narrative.

## Build, Test, and Development Commands
- `pnpm install` - install dependencies; run this after pulling new code.
- `pnpm dev` - launch the Turbopack dev server at http://localhost:3000.
- `pnpm build` - create a production build; run before opening a PR.
- `pnpm start` - serve the last production build locally for smoke testing.
- `pnpm lint` / `pnpm lint:fix` - enforce the ESLint and Prettier ruleset, auto-fixing when possible.

## Coding Style & Naming Conventions
Use 2-space indentation and TypeScript's strict mode defaults. Components and sections should be named `PascalCase.tsx`, utility modules `camelCase.ts`, and asset files in `kebab-case` to prevent import ambiguity. Tailwind classes must remain sorted using the bundled `prettier-plugin-tailwindcss`; run `pnpm lint:fix` after styling changes. Prefer composition-friendly React patterns (hooks, props) over global mutation and colocate styles or helper functions near their consuming component.

## Testing Guidelines
There is no automated test harness yet; treat `pnpm lint` and `pnpm build` as the minimum acceptance gate. When adding tests, colocate them alongside the implementation using a `.test.ts(x)` suffix and document any manual verification steps directly in the PR. Snapshot-heavy components should include before and after screenshots to prevent regressions.

## Commit & Pull Request Guidelines
Follow the existing concise, imperative commits (`fix error build`, `rename temp_home folder to home`). Keep messages under 70 characters and describe what the change does. Each PR should include: a short summary, linked issue (if any), a checklist of commands executed (lint or build), and screenshots or GIFs for visual tweaks. Request review once the branch is rebased on `main` and all checks pass.

## Environment & Configuration
Copy `.env.example` to `.env.local` and populate EmailJS credentials before running `pnpm dev`. Never commit secrets; prefer using local `.env.local` or CI configuration. Document any new required variables by updating `.env.example` and mentioning them in the PR body.
