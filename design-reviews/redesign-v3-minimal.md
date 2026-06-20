# Mavverik redesign v3 — minimal integration pass

**Date:** 2026-06-20  
**Workspace:** `/Users/abdullah/maverick`  
**Commit:** none (per request)

---

## Sync with parallel agents

| Step | Result |
|------|--------|
| Poll interval | 30s |
| Diff churn | Stat footprint shifted once (~694 → 715 bytes) then held |
| Stability | **2 consecutive identical** snapshots at ~90s |
| Tracked diff | **12 files**, +948 / −735 lines |
| Untracked (integration-relevant) | `app/components/HeroVideoBackground.tsx`, `public/hero-wave.mp4`, `public/hero-wave-poster.jpg` |

---

## Typecheck / build

| Command | Result |
|---------|--------|
| `npx tsc --noEmit` | **Pass** (no diagnostics) |
| `npm run build` | **Skipped** — dev server listening on **:3000** (PID 67272); homepage and hero assets return **200** |

No critical integration conflicts required a code fix in this pass (imports, section IDs, shared mailto helpers, nav theme logic, and poster/video assets align).

---

## What changed (integrated surface)

### Visual story

1. **Dark immersive hero** — full-bleed wave field (`hero-wave.mp4` with `SignalGraph` fallback on error or `prefers-reduced-motion`), copy **bottom-left** on ~85vh band, white serif display type.
2. **Light editorial middle** — Founders registry and Capabilities index on raised/surface backgrounds with rules, mono labels, and registry-style rows (Services sticky intro retained).
3. **Dark conversion finale** — Contact on `slate-deep` with intent handoff from `?intent=` (Services mailto links).
4. **Light sunken footer** — compact bar (contrasts with prior dark footer band).

Page order unchanged: `Navigation` → `Hero` → `Founders` → `Services` → `Contact` → `Footer`.

### Typography & tokens

- **Fonts:** Syne / DM Sans / JetBrains Mono → **IBM Plex** Sans, Serif, Mono (`layout.tsx`, CSS fallbacks).
- **`data-design="quantum-hero"`** on `<html>`; viewport `themeColor` `#0a0f1a`.
- **Token layers:** hero (`--hero-*`), nav-over-hero, editorial surfaces, 8px grid spacing in Tailwind (`grid-*`, `min-h-hero`).
- **Accessibility polish:** lighter `--ink-faint` / `--on-slate-muted`; focus ring uses `--accent-deep`; accent usage documented (decorative vs interactive).

### Components (high level)

| Area | Direction |
|------|-----------|
| **Hero** | Removed light dot-grid, journey pipeline, dual CTAs, and inline `SignalGraph` widget; new H1 (*People and AI…* / *Turn change into advantage.*); single **Start a brief** → `BRIEF_MAILTO`. |
| **HeroVideoBackground** | Client video layer + fallback to simplified `SignalGraph`. |
| **Navigation** | Section-aware chrome (`overlay` / `light` / `dark`); scroll threshold tied to `--nav-h`; shared `BRIEF_MAILTO` / contact mailto. |
| **SignalGraph** | Static immersive backdrop (gradients + SVG waves), reused as hero fallback. |
| **Founders / Services / Contact** | Editorial/registry patterns, heading ramp utilities, dark Contact finale, mobile column order favors action card. |
| **Footer** | Minimal light footer vs previous dark marketing block. |
| **lib/utils.ts** | Layout/type presets, `CONTACT_*` / `BRIEF_MAILTO`, `getContactIntentLabel()`. |

---

## Design direction (v3)

**Positioning:** Regulated-enterprise consulting flagship — **QuantumBlack / McKinsey Digital editorial** rhythm (dark hero → light proof → dark close), not SaaS dashboard or startup gradient hero.

**Hero:** Cinematic **navy + teal wave** motion (with accessible static fallback), **bottom-weighted** serif headline, one conversion path (brief mailto).

**Middle:** **Registry and index** typography — mono section tags, numbered capability rows, founder org marks — credibility through structure rather than decorative UI chrome.

**System:** IBM Plex hierarchy, teal **regulatory “go”** accent used sparingly on light surfaces; shared conversion constants to keep nav, hero, services, and contact aligned.

---

## Follow-ups (non-blocking)

- Browser pass: hero video performance on low-end mobile, reduced-motion fallback aesthetics, nav overlay vs open mobile drawer.
- Copy alignment: metadata/tagline still emphasize *production AI / regulators* while hero H1 uses the newer *People and AI* frame — confirm intentional split brand story.
- Founders: org registry still without individual names/titles (open from prior reviews).

