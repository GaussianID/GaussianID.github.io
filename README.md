# Gaussian — Marketing Website

The marketing website for Gaussian, an agentic platform for intelligent
digital-twin simulation and autonomous cybersecurity. Built with Next.js,
TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15** (App Router) with Turbopack
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **lucide-react** for icons

## Getting Started

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:3000
```

## Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the development server (Turbopack) |
| `npm run build` | Create a production build                |
| `npm run start` | Serve the production build               |
| `npm run lint`  | Run ESLint                               |

## Project Structure

```
src/
├── app/                    # App Router — one folder per route
│   ├── about-us/
│   ├── contact-us/
│   ├── customer-support/
│   ├── privacy-policy/
│   ├── product/
│   ├── terms-conditions/
│   ├── under-construction/
│   ├── whitepaper/
│   ├── globals.css         # Global styles, theme tokens, animations
│   ├── layout.tsx          # Root layout, fonts, metadata
│   └── page.tsx            # Home page
└── components/             # Shared UI components
    ├── Button.tsx
    ├── Footer.tsx
    ├── NavBar.tsx
    └── Reveal.tsx          # Scroll-triggered reveal animation
public/img/                 # Images and icons
```

## Conventions

- **Routing** — file-based via the App Router; add a route by creating
  `src/app/<route>/page.tsx`.
- **Imports** — use the `@/` alias for `src/` (e.g. `@/components/NavBar`).
- **Styling** — Tailwind utilities, mobile-first. Brand colours and design
  tokens live in `src/app/globals.css`.
- **Motion** — wrap content in `<Reveal>` for a fade-up on scroll; all
  animations respect `prefers-reduced-motion`.

## Deployment

The site is optimised for [Vercel](https://vercel.com): connect the repository,
keep the default Next.js preset, and it deploys automatically on push. Any host
that supports Next.js works too — run `npm run build` followed by `npm run start`.

## License

Proprietary. © Gaussian. All rights reserved.
