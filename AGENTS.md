<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio site

Personal portfolio for Hilal — Next.js 16 (App Router) + Tailwind v4 + TypeScript.

- **All content lives in `src/data/site.ts`.** Edit that file to update text, projects, skills,
  links, stats. Components read from it and should not hardcode copy.
- Sections are in `src/components/` and composed in `src/app/page.tsx`.
- Theme: class-based dark mode (`.dark` on `<html>`), default is dark. No-flash script in
  `src/app/layout.tsx`; toggle in `ThemeToggle.tsx`. Colors are CSS vars in `globals.css`.
- The hero code snippet in `site.ts` must be real, compilable Java.
- `profile.resumes` lists CV files in `public/` (e.g. TR + EN). Empty array hides the button;
  one entry renders a link; two or more render a dropdown (`ResumeMenu.tsx`).
- Deploy target: Vercel.
