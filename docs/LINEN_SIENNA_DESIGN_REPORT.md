# Linen & Sienna Design Report

Date: 2026-11-09 · Primary: `D:\MY PORTFOLIO` · Local: `http://localhost:3000/`

## Final palette (exact, verified in prod CSS)
`--background #F4EFE7`, `--surface #FBF9F5`, `--foreground #28221E`, `--secondary-text #756B62`, `--primary #28221E`, `--primary-foreground #FFFFFF`, `--accent #B64A32`, `--accent-hover #963A27`, `--accent-soft #F1E2DA`, `--accent-foreground #FFFFFF`, `--sand #D8C8B8` (reserved), `--border #E3D9CF`, `--muted #EEE8E0`, `--focus-ring #B64A32`. Prod CSS: `body{background:#f4efe7}`, `--background:#f4efe7`. No green/rose/purple old classes (`Select-String F6F3EE/714052/pre-hue` = 0).

## Components modified
`globals.css`, `ui/button.tsx` (primary espresso 46–50px, secondary porcelain, accent sienna, tertiary arrow, icon; hover 1.015/−1px, active 0.98, ring sienna, spring-like, reduced-motion), `Navbar.tsx` (SB. + About/Work/Skills/Experience/Contact + Let’s Talk → Contact, floating translucent), `HeroSection.tsx` (label AI/ML·SOFTWARE·RESEARCH, H1 name uppercase 5xl–7xl, headline “Building ideas into meaningful technology.”, Explore My Work→#featured, About Me→#about), `About/Projects/Featured01 Chitralaya/02 Saarathi/Additional Krishi+Hub/Partnership/Skills/Experience/Interests`, `ContactSection.tsx` (espresso `#28221E` bg, sienna accent CTA, Let’s Connect + copy), `Footer.tsx`, `Chatbot.tsx`, `layout.tsx` (skip link sienna), `projects.ts`, `socialLinks.ts` + `api/contact/route.ts` (email → `submmb06@gmail.com` per profile README + user instruction).

## Portrait verification — FAILED (diagnosed, not substituted)
`public/image-of-mine.jpg` exists (132,373 B) but bytes are all `0xFF` (no `FFD8` JPEG header) in every copy; direct GET 200, Next Image optimizer 400, hero `naturalWidth=0`. Path/CSS/config correct (`<Image src="/image-of-mine.jpg" priority alt=…>`). Root cause = corrupt supplied source, untracked in Git. No AI/stock/avatar/Hampi replacement created. Needs valid JPEG.

## Featured verification
01 CHITRALAYA AI (`CHITRALAYA_AI`, OpenMontage workflow) before 02 SAARATHIVAANI AI (`SaarathiVaani_AI`) — browser `bodyText` order verified; live null (no homepage); screenshots TODO (no synthetic).

## Profile links
GitHub/LinkedIn/Portfolio `https://my-portfolio-jn1z.vercel.app/`/Email `mailto:submmb06@gmail.com`/Contributions/SceneSense/Hub — all from `socialLinks.ts` (README inspected; badge/tracker excluded).

## Button interactions
Variants above; hover/tap/focus/disabled/loading, 44px+ targets, touch tap feedback, reduced-motion in CSS. Passed lint+build.

## Responsive tests
Code: grids collapse `md:`/`lg:`, nav mobile menu, 44px targets — **PASSED** (code). Screenshots at 1440/1280/768/390: **NOT TESTED** (dev `.next` flaky; prod CSS verified, browser H1/bg checked).

## Lint / build
- `npm run lint` — **PASSED**
- `npm run build` — **PASSED** (Next 15.5.19, 8 routes, First Load ~175 kB)

## Deployment status
Git push: **NOT TESTED** (no credentials verified). Vercel live: **NOT TESTED** — still old portfolio; do not claim updated until live inspected.
