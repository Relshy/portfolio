# Relshy — Commission Site

Commission portfolio for Relshy, Roblox systems developer.
Built with Next.js 15, React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

## Pages

- `/` — hero, services teaser, featured work, contact CTA
- `/work` — all projects
- `/services` — commission offerings
- `/experience` — background
- `/process` — the four commission steps
- `/contact` — Discord contact card

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
```

The site is configured for static export (`output: "export"` in
`next.config.ts`), so the build writes a fully static site to `out/`
(one folder per route, e.g. `out/work/index.html`). Deploy `out/` to any
static host: GitHub Pages, Cloudflare Pages, Vercel, Netlify. For the
existing GitHub Pages setup (relshy.nl), copy the contents of `out/` to
the repository root (plus the `CNAME` file) or point Pages at this
folder's build output.

## Editing content

- **Contact details / Discord** — `lib/site.ts` (`discordHandle`,
  `discordUrl`). Replace `discordUrl` with a server invite
  (`https://discord.gg/...`) if preferred.
- **Avatar** — `public/pfp.png` (used in the hero and contact card).
- **Navigation** — `lib/site.ts` (`navLinks`).
- **Services, experience, projects, process steps** — data arrays at the top
  of the matching component in `components/`.
- **Colors and theme tokens** — `@theme` block in `app/globals.css`.

## Structure

```
app/
  layout.tsx        root layout: fonts, metadata, header, footer
  page.tsx          home page composition
  globals.css       theme tokens, buttons, cards, ambient animations
  icon.svg          favicon (R monogram)
  work/page.tsx     /work
  services/page.tsx /services
  experience/...    /experience
  process/...       /process
  contact/...       /contact
components/
  Header.tsx        sticky glass nav, active route state, mobile menu
  Hero.tsx          avatar, headline, CTAs, trust row, animated backdrop
  Services.tsx      commission offerings
  Experience.tsx    background cards
  Work.tsx          project data, ProjectCard, motifs, work page section
  Process.tsx       four-step commission flow
  Contact.tsx       glass contact card, Discord CTA, copy-handle button
  Footer.tsx
  Card.tsx          glass card with cursor-following glow
  Reveal.tsx        fade-up on scroll (respects reduced motion)
  Icons.tsx         custom SVG icon set
lib/
  site.ts           site config: name, links, contact
public/
  pfp.png           avatar
```
