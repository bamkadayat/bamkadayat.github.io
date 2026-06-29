# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — produce the static export (writes to `out/`, since `next.config.mjs` sets `output: 'export'`)
- `npm run lint` — run ESLint (`next/core-web-vitals`)
- `npm run start` — serve a production build

There is no test framework configured in this project.

## Deployment

Deployment is automatic: pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `yarn build` and publishes the static export from `./out` to GitHub Pages (site: https://bamkadayat.github.io).

Note two stale artifacts that do **not** drive deployment and reference a wrong `dist` directory — don't rely on them: the `deploy` npm script (`gh-pages -d dist`) and the root-level `workflows/deploy.yml` (which is outside `.github/` and therefore inert). The real output directory is `out`.

## Architecture

A bilingual (English / Norwegian) single-page portfolio built on the Next.js App Router, statically exported.

### Routing & i18n

- `app/page.tsx` redirects `/` → `/en`. All real content lives under `app/[lang]/`, where `[lang]` is `en` or `no`. `generateStaticParams` (in `app/[lang]/layout.tsx`) pre-renders both locales at build time.
- Translations are JSON dictionaries in `app/[lang]/dictionaries/{en,no}.json`, loaded server-side via `app/[lang]/dictionaries.ts` (`getDictionary`, marked `server-only`). When adding any user-facing copy, add the key to **both** dictionary files.
- `LanguageSwitcher` switches locales by linking to `/en` or `/no` (full route swap, not client state).

### Server/client split

- `app/[lang]/page.tsx` is a server component: it awaits the dictionary and passes the resolved `dict` object plus `lang` down as props.
- `app/[lang]/client-page.tsx` (`"use client"`) owns all interactivity — scroll-spy that drives the active nav section, smooth-scroll nav clicks, and the scroll-blur overlay. Section components (`About`, `Experience`, `Works`, `Sidebar`, `MobileHeader`) receive `dict`/`lang` as props and are presentational. The `dict` prop is typed as `any` throughout.

### Content data model

- Translatable copy lives only in the dictionary JSON.
- Non-translatable content (social links, work tags, image URLs, live/GitHub links) lives in `lib/data.ts` (e.g. `worksStaticData`, `socialLinks`, `currentCompany`). Components zip this static data together with the matching translated strings from `dict`. Project images are GIFs in `public/images/`.

## Conventions

- Import alias `@/*` maps to the repo root (e.g. `@/components/...`, `@/lib/data`).
- Styling is Tailwind utility classes; the brand accent color is `#FFA324`. SCSS is available but the app currently uses `app/globals.css`.
- Git commits are configured (via `.claude/settings.json`) to omit Claude attribution.
- `RESEND_API_KEY` is referenced via `.env.example` (Resend / react-email deps are installed), though no active contact-form route is wired into the current export.
