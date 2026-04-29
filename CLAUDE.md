# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server with Turbopack at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint (next/core-web-vitals + TypeScript rules)
npm run start    # Start production server
```

No test runner is configured.

## Stack

- **Next.js 15** (App Router) with **React 19**
- **TypeScript** (strict mode, path alias `@/*` → `./src/*`)
- **Tailwind CSS v4** via PostCSS — design tokens are declared with `@theme` in `src/app/globals.css` (e.g. `bg-canvas`, `text-ink-soft`, `bg-accent`, `rounded-card`).

## Architecture

Multi-page portfolio with a fixed left sidebar and a white "page card" that fills the viewport. Each route is its own page; there is no global scroll/carousel.

```
src/
├── app/
│   ├── layout.tsx              # Renders <Sidebar/> + <main> with the page card
│   ├── page.tsx                # Home
│   ├── about/page.tsx
│   ├── projects/page.tsx       # Filterable list
│   ├── projects/[slug]/page.tsx# Project detail (SSG via generateStaticParams)
│   ├── skills/page.tsx
│   ├── experience/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── layout/                 # sidebar, page-card (shared chrome)
│   ├── ui/                     # primitives: button, icon, tech-badge, tile-icon,
│   │                           # avatar-slot, media-slot, decorations
│   ├── home/                   # hero, tech-stack, featured-projects, social-rail
│   ├── about/                  # about-intro, what-drives-me, education-section
│   ├── projects/               # project-card (grid), project-list-item (rows),
│   │                           # project-filter, project-meta, project-detail, cta-banner
│   ├── skills/                 # skill-category
│   ├── experience/             # timeline-item
│   └── contact/                # contact-info, contact-form, resume-cta
└── data/
    ├── site.ts                 # name, role, email, links, resumeUrl
    ├── tech.ts                 # central registry of tech badges (label + color)
    ├── projects.ts             # projects[] — see Project type for video/image fields
    ├── skills.ts               # categorised skill keys → tech.ts
    └── experience.ts           # experience[] + education[]
```

**Client vs server boundary:** Most pages are server components. `Sidebar` (uses `usePathname`), `ProjectFilter` (filter state), `ContactForm` (input state), and `MediaSlot` (sets `playbackRate` on a video) are client components.

### Adding / editing content

- **Add a project:** add an entry to `src/data/projects.ts`. The list page and home featured section pick it up automatically; a static detail page is generated at `/projects/<slug>`.
- **Add a project video:** drop a file in `public/videos/` and set `videoSrc: "/videos/foo.mp4"` on the project. `imageSrc` works as a fallback. If neither is set, the page shows an empty placeholder slot. Use `playbackRate` for slow-mo.
- **Add personal images:** drop into `public/images/` and reference via `AvatarSlot`'s `src` prop (Hero / About). With no `src` the slot renders an empty placeholder.
- **Add a tech:** add a key to `src/data/tech.ts`, then reference that key from any project, skill category, or home stack list.
- **Edit copy:** `src/data/site.ts` for top-level identity, `experience.ts` for jobs/education, page sections for body copy.

### Design tokens

Colour and radius tokens live in `globals.css` under `@theme`. To adjust the palette globally, edit there — Tailwind v4 picks them up at build time and exposes utility classes like `bg-accent`, `text-ink-soft`, `rounded-card`.
