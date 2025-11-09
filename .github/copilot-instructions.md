## Purpose
Help an AI coding agent be productive in this repository: a minimal React + Vite personal website

## Quick start (commands)
- Start dev server (HMR):
  - npm run dev
- Build for production:
  - npm run build
- Preview production build locally:
  - npm run preview
- Run linter:
  - npm run lint

These commands come from `package.json` scripts. The dev server uses Vite (default port 5173).

## High-level architecture
- Single-page React app (client-side rendering) built with Vite.
- Entry: `index.html` loads `/src/main.jsx` which mounts `src/App.jsx` into the DOM root.
- Vite configuration: `vite.config.js` with `@vitejs/plugin-react` for Fast Refresh/HMR.
- Static/public assets served from `public/` or imported directly in `src/`.

Why this structure: Vite provides a fast dev loop; small component tree keeps the site simple and file-based.

## Key files and what to edit
- `index.html` — page shell and script entry. Change title/meta here.
- `src/main.jsx` — app bootstrap (createRoot + StrictMode). Avoid changing the mount point unless you also update `index.html`.
- `src/App.jsx` — top-level React component. Implement site content or import a router here.
- `src/index.css` — global styles loaded by `main.jsx`.
- `vite.config.js` — Vite plugin configuration (React plugin is enabled).
- `package.json` — scripts and dependency versions. Keep `type: "module"` (ESM) intact.
- `eslint.config.js` — project lint rules (project includes ESLint-related deps).

Examples from this repo:
- `main.jsx` uses createRoot(document.getElementById('root')).render(...)
- Imports use explicit `.jsx` extensions (e.g. `import App from './App.jsx'`). Follow that style when moving/renaming files.

## Project-specific conventions & gotchas
- Files use ESM (`type: "module"` in `package.json`) and `*.jsx` extensions. Use import paths with the extension when editing examples in this repo.
- The project currently depends on React 19 and `@vitejs/plugin-react` (see `package.json`). Fast Refresh is enabled by that plugin.
- Linting: run `npm run lint` before opening PRs. The repo includes ESLint devDependencies and an `eslint.config.js` file.
- App.jsx currently contains a small syntax bug (discoverable): the component is declared as `const App () =>` — the expected form is `const App = () => { ... }`. Fix this if you need to run the app locally.
- There are TypeScript type packages (`@types/react`, `@types/react-dom`) in devDependencies even though this is a JS project. Do not convert files to TypeScript without coordinating—there is no TS config.

## Developer workflows & debugging tips
- Dev: run `npm run dev` and open the browser at http://localhost:5173. Use the browser console and Vite terminal output for runtime errors.
- Lint: `npm run lint` will surface formatting/JSX/lint issues.
- Build/preview: `npm run build` produces `dist/`; `npm run preview` runs a local static server from that build.
- When editing components, Vite HMR should update the page automatically. If HMR fails, restart `npm run dev`.

## Integration points
- No backend/API integrations are present in the checked-in files. If you add network calls, prefer the Fetch API (client-side) and place environment-dependent endpoints in a `.env` file referenced by Vite (Vite env docs).

## What to avoid / safe defaults for automated edits
- Avoid large, opinionated refactors (e.g., switching to TypeScript or adding a test framework) unless the PR is small and accompanied by install/update instructions.
- Preserve `package.json` script names and `type: "module"` unless you update all imports and build tooling accordingly.
- Keep UI changes isolated to `src/` and static assets to `public/`.

## Suggested examples to include in PRs from an AI agent
- Small fix PR (example):
  - Fix `src/App.jsx` syntax `const App = () => { return <div>App</div> }
  - Run `npm run lint` and `npm run dev` locally to confirm no runtime errors.

## Where to look next (useful files)
- `package.json` — scripts & deps
- `vite.config.js` — plugin config
- `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css`

If anything in this doc is unclear or you want more detail about a specific workflow (e.g., testing, CI, or deploying the site), tell me which area and I'll expand or adjust the instructions.
