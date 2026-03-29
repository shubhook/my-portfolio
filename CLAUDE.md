# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

Requires Node v20.19.0+. No test suite.

## Architecture

React 19 SPA built with Vite, React Router v6, Tailwind CSS v4, and component-scoped CSS files.

**Routing** (`App.jsx`):
- `/` → `Home` — main portfolio page
- `/blog` → `Blog` — blog listing
- `/blog/:slug` → `BlogPost` — individual post

**Components** live in `src/components/`. Each page component (`Home`, `Blog`, `BlogPost`) is self-contained with its own `.css` file alongside it.

**Blog system**: No backend. Markdown files in `src/blogs/` are loaded at runtime via Vite's `import.meta.glob()`. Frontmatter is parsed with a custom YAML-like parser. `react-markdown` + `remark-gfm` handles rendering.

## Dark Mode

State is stored in `localStorage` under key `"darkMode"`. The root container gets a `.dark` or `.light` class, and component CSS defines styles for both. Dark mode state is managed locally in each page component and passed as props — there is no global state/context.

## Styling

Dual approach: component-scoped `.css` files (primary) + Tailwind utilities. Colors use RGBA values with theme-aware opacity. Max-width container is 880px; 768px is the mobile breakpoint.

## Starry Background

`StarryBackground.jsx` renders a fixed HTML5 Canvas element at the app root with a parallax star effect driven by mouse movement. Star count is calculated from canvas area (`width * height / 10000`).
