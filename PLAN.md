# Plan — Visitor website for 3D-Medical (ETH SPH startup)

## Context

You're building a visitor/marketing site for your ETH Student Project House startup focused on 3D machine learning for medical imaging — specifically, detection of intracranial aneurysms from CT angiography (inspired by the RSNA Kaggle benchmark). The repo (`/Users/shyngys/personal/3d-medical-web`) is currently empty: only `README.md`, `LICENSE`, `.gitignore` (already pre-configured for Next.js / Vercel). Goal is a small, mostly-static landing page with three sections — hero/mission, problem/approach, short about-me — that we can ship and iterate on.

## Decisions (from clarifying Qs)

- **Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS, static export (`output: 'export'`) — fits the existing `.gitignore` and hosts anywhere.
- **Style:** Modern startup-tech — dark hero with gradient/teal accents, Inter sans-serif, generous spacing, subtle motion on scroll.
- **Sections:** Hero/mission, Problem/approach, About-me (bottom).
- **Copy:** First-pass drafted from SPH context + RSNA aneurysm-detection context + your CV (you'll edit later).
- **Links/contact (footer + about):** LinkedIn (`shyngys-aitkazinov`), GitHub (handle TBD — placeholder `#`), `saitkazinov@3d-medical.ch`, `saitkazinov@ethz.ch`.
- **Open item:** GitHub handle (will leave a `TODO` placeholder).

## Execution order

1. **Mirror this plan into `PLAN.md` at the project root** so it's checked in alongside the code.
2. Scaffold Next.js + Tailwind project files (config + entrypoints).
3. Build sections in order: `Hero` → `Problem` → `About` → `Footer`.
4. Wire global styles and metadata.
5. Verify dev + production build (see Verification section).

## Files to create

```
PLAN.md                   # mirror of this planning doc, checked into repo
package.json
tsconfig.json
next.config.ts            # output: 'export', images.unoptimized: true, trailingSlash: true
postcss.config.mjs
tailwind.config.ts        # extend with brand teal + dark surface tokens
.eslintrc.json            # next/core-web-vitals
src/app/layout.tsx        # Inter font, metadata, <html lang="en"> + dark bg
src/app/page.tsx          # composes <Hero/> <Problem/> <About/> <Footer/>
src/app/globals.css       # Tailwind directives + radial-gradient hero bg
src/components/Hero.tsx
src/components/Problem.tsx
src/components/About.tsx
src/components/Footer.tsx
src/components/SectionHeading.tsx   # small reusable: eyebrow + h2
src/components/IconLink.tsx         # link with inline svg, used in About + Footer
public/favicon.svg        # simple monogram "3DM" in teal
```

No new utilities or abstractions beyond what's needed for these three sections — no CMS, no MDX, no animation library (use Tailwind transitions + a tiny CSS keyframe for the hero gradient).

## Component contracts

| Component | Responsibility | Notes |
| --- | --- | --- |
| `Hero` | Full-viewport top section: eyebrow, h1, subhead, two CTAs, gradient bg | No props; static content. |
| `Problem` | Section `#problem` — two-column "Why it matters" / "Our approach" | No props. |
| `About` | Section `#about` — bio paragraph + four `IconLink`s | No props. |
| `Footer` | Wordmark + four links + ETH SPH credit | No props. |
| `SectionHeading` | Renders eyebrow + `<h2>` for Problem & About | Props: `eyebrow`, `title`. |
| `IconLink` | `<a>` with inline svg, hover underline, opens external in new tab | Props: `href`, `label`, `icon`. |

## Section-by-section copy draft

### Hero
- **Eyebrow:** "ETH Zurich · Student Project House"
- **Headline:** "3D machine learning for medical imaging."
- **Subhead:** "We build vision models that read volumetric scans the way radiologists do — starting with intracranial aneurysm detection from CT angiography."
- **Primary CTA:** "Get in touch" → `mailto:saitkazinov@3d-medical.ch`
- **Secondary CTA:** "How it works" → anchors to `#problem`
- Visual: dark gradient (slate-950 → teal-900) with subtle radial glow.

### Problem / Approach (`#problem`)
Two short blocks side-by-side on desktop, stacked on mobile:

- **Why it matters.** Intracranial aneurysms are silent until they rupture — and rupture causes fatal subarachnoid hemorrhage in roughly half of cases. CT angiography is the front-line modality, but volumetric reads are slow and detection is highly experience-dependent.
- **Our approach.** We treat the CTA volume as a true 3D signal — not a stack of 2D slices. Our models combine 3D CNN backbones with attention over vessel-rich regions, benchmarked against the RSNA Intracranial Aneurysm Detection challenge, with the goal of giving radiologists a fast second-read they can trust.

### About (`#about`) — short, personal
- **Headline:** "About the founder"
- **Body (≤5 lines):** "I'm Shyngys Aitkazinov — M.Sc. Data Science at ETH Zurich, B.Sc. EECS at KAIST. I've spent the last four years shipping ML systems in production: 3D mesh learning for dental scans at Align Tech, GPU-resource prediction at Lyceum Technology, and anomaly detection on industrial sensor streams at Glassdome. 3D-Medical is where that work meets the clinic."
- **Links row:** LinkedIn · GitHub · saitkazinov@3d-medical.ch · saitkazinov@ethz.ch

### Footer
Compact: company name + year, repeat of the four links, "Built at ETH SPH".

## Visual / styling notes

- Tailwind tokens: brand `teal-400/500` for accents, `slate-50` text on `slate-950` background, `bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950` on `<body>`.
- Typography: Inter (via `next/font/google`), weight 400/600/700; tight tracking on the headline (`tracking-tight`).
- Section width: `max-w-5xl mx-auto px-6` consistently.
- Subtle hover states on links (teal underline animation).
- Fully responsive — single-column on mobile, two-column on `md:` for the Problem section.
- No JS interactivity needed beyond Next's defaults; works without JS.

## Build / config details

- `next.config.ts`: `{ output: 'export', images: { unoptimized: true }, trailingSlash: true }` so the `out/` directory drops into any static host (Vercel, GH Pages, Netlify, S3).
- `package.json` scripts: `dev`, `build`, `start`, `lint`. Pin Next 15, React 19, Tailwind 3.4, TypeScript 5.
- Metadata in `layout.tsx`: `title`, `description`, `openGraph` (title/description, no image yet — TODO).
- `lang="en"` and a single `<main>` for accessibility.

## Verification (end-to-end)

1. `npm install` — should resolve clean, no peer-dep warnings beyond the usual.
2. `npm run dev` → open http://localhost:3000 — confirm:
   - Hero renders with gradient + both CTAs.
   - "How it works" smooth-scrolls to `#problem`.
   - "Get in touch" opens the mailto.
   - Problem section reads on desktop two-col, mobile one-col.
   - About section shows bio + four links; LinkedIn / mailto links open correctly; GitHub link is a clearly visible TODO placeholder.
   - Footer present.
3. Resize to 375px / 768px / 1440px — no layout breakage, no horizontal scroll.
4. Lighthouse (Chrome devtools) — expect ≥95 on Performance / Accessibility / SEO for a site this small.
5. `npm run build` — confirm static export succeeds and `out/index.html` exists.
6. `npx serve out` — sanity-check the exported site loads identically.

## Out of scope (explicitly)

- No CMS, no blog, no contact-form backend (mailto only).
- No analytics yet (can add Plausible/Umami later in one line).
- No logo design — just a text wordmark + monogram favicon.
- No Kaggle profile link (you dropped it from the link list).

## Follow-ups to ask before/after build

- GitHub handle for the link placeholder.
- Whether to register `3d-medical.ch` and point it at the host (the email domain implies it's owned).
- Co-founders to add later? (currently solo bio.)
