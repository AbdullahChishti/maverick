# Mavverik — QuantumBlack-Style Layout Integration Status

**Date:** 2026-06-20  
**Scope:** Integration pass after parallel implementers (layout, hero, chrome, sections)  
**Branch state:** Working tree only — **no commit** (per request)

---

## Wait / sync

| Step | Result |
|------|--------|
| Poll interval | 10s |
| Diff churn | Through ~90s (714 → 1262 insertions as Navigation, SignalGraph, and globals landed) |
| Stability | **3 consecutive identical** `git diff --stat` totals at ~100s |
| Final footprint | **11 files**, +1262 / −658 lines |

**Changed files:** `app/components/Footer.tsx`, `Navigation.tsx`, `SignalGraph.tsx`, `app/globals.css`, `app/layout.tsx`, `app/sections/Contact.tsx`, `Founders.tsx`, `Hero.tsx`, `Services.tsx`, `lib/utils.ts`, `tailwind.config.ts`

---

## Build

```text
npm run build → SUCCESS (Next.js 15.5.19)
✓ Compiled successfully (~1s)
✓ Lint and TypeScript clean
✓ Static prerender: / (53.2 kB), /_not-found
```

### Integration fix applied

| Issue | Fix |
|-------|-----|
| Scroll-spy nav theme did not match section surfaces | `getNavTheme()` in `Navigation.tsx`: **Founders** is now light (`bg-surface-raised`); **Contact** uses dark nav (`bg-slate-deep`). Previously Founders forced dark chrome on a light band; Contact stayed on light chrome over a dark finale. |

Second build after the nav fix: **green**.

---

## What was implemented (QuantumBlack-style layout)

### Page rhythm

1. **Dark immersive hero band** — full-width navy wave field, copy anchored **bottom-left** (~85vh), minimal CTA (text link → `#contact`).
2. **Light editorial middle** — Founders registry + Capabilities index on raised / surface backgrounds with rules, mono index labels, and sticky section intros (Services).
3. **Dark conversion finale** — Contact on `slate-deep` with dot grid and split grid (copy + action card).

`app/page.tsx` order unchanged: `Navigation` → `Hero` → `Founders` → `Services` → `Contact` → `Footer`.

### Design tokens & typography (`globals.css`, `tailwind.config.ts`, `layout.tsx`)

- **`data-design="quantum-hero"`** on `<html>`; viewport `themeColor` `#0a0f1a`.
- **Hero token set:** `--hero-bg`, wave teal/blue mixes, hero text tiers, display sizing, min-height.
- **Nav-over-hero tokens:** transparent bar, white/muted link colors, subtle border.
- **Editorial tokens:** `--editorial-surface` / `raised` / `ink` (+ `.editorial-body*` utilities; sections mostly use Tailwind `bg-surface*` directly).
- **IBM Plex** Sans / Serif / Mono via `next/font`; refined type ramp (display → h2 sections → cards → body); mono at **11px labels** and **12px UI**.
- **Contrast polish:** `--ink-faint`, `--on-slate-muted` lightened; `:focus-visible` uses `--accent-deep`.

### Components

| Area | Implementation notes |
|------|----------------------|
| **SignalGraph** | Rebuilt as static immersive backdrop: layered radial gradients + SVG wave paths with slow drift animations (`prefers-reduced-motion` respected in hero motion, not necessarily wave CSS — verify manually). |
| **Hero** | Removed light dot-grid / journey pipeline / dual CTAs; H1 two lines in white serif; subhead shortened; single “Start a brief” text CTA. |
| **Navigation** | Section-aware themes (`overlay` / `light` / `dark`); category label “AI Consulting”; desktop underline indicator; mail + brief CTAs via shared mailto helpers; mobile drawer on slate-deep. |
| **Founders** | Light editorial registry rows (logo + org + role + detail); display-sm heading; closing blockquote; no dark slate band. |
| **Services** | Sticky left intro + **registry-style** capability rows (index, meta, hover accent); featured card + divided list; intent mailto handoff preserved. |
| **Contact** | Dark slate finale; intent label from `?intent=`; mobile column order favors action card (`flex-col-reverse` pattern retained). |
| **Footer** | Compact sunken bar: logo, anchor links, mono copyright. |
| **lib/utils.ts** | Layout/type presets, `CONTACT_MAILTO` / `BRIEF_MAILTO`, `getContactIntentLabel()`. |

---

## Visual notes (code-level; not browser-verified in this pass)

**Strengths**

- Clear **dark → light → dark** vertical story matches QuantumBlack / McKinsey Digital editorial patterns.
- Hero **bottom-weighted** type and wave field read as “consulting flagship” rather than SaaS widget.
- Capabilities **index + rule** list feels like a practice registry, not a card grid.
- Nav **transparent-on-hero** with scroll morph is wired; post-fix theme mapping should keep contrast sane on Founders vs Contact.

**Watch / follow-up**

- **Hero CTA:** Text link only (no filled button); nav still exposes brief mailto — consider visual parity if conversion is a KPI.
- **Founders vs nav:** Confirm in browser that light Founders + light nav reads cleanly at the seam below the hero (top gradient hint only).
- **Contact nav:** Dark blurred bar over dark section — verify link contrast on `on-slate` tokens.
- **SignalGraph motion:** Wave drift runs unless global `prefers-reduced-motion` CSS is added for `.hero-wave-drift-*`.
- **Unused tokens:** `.editorial-body`, hero utility classes, and some Tailwind `hero.*` / `editorial.*` colors may be ahead of section class usage — harmless but worth pruning or wiring in a polish pass.
- **Content gaps** (not layout): founder names/titles, client proof — unchanged from prior professional-ai-native status.

---

## Related docs

- Prior copy/type integration: `design-reviews/professional-ai-native-implementation-status.md`
- Critique shards: `design-reviews/critique-*.md` (untracked)

---

## Summary

| Item | Status |
|------|--------|
| Git diff stable | Yes (~100s) |
| Production build | **Pass** |
| Integration edits | Nav scroll theme alignment (1 function) |
| Git commit | **None** (requested) |

---

## Integration pass — hero video + simplified copy (2026-06-20, ~04:01)

### Wait / sync (this pass)

| Step | Result |
|------|--------|
| Poll interval | 15s for ~2 min |
| Diff churn | 666 → 712 bytes in `git diff --stat` output as `HeroVideoBackground`, `public/hero-wave.mp4`, and `components/index.ts` landed |
| Stability | **5 consecutive identical** stat snapshots at 712 bytes (~75s mark) |
| Footprint after sync | **12 tracked files** (+1313 / −679); **untracked:** `app/components/HeroVideoBackground.tsx`, `public/hero-wave.mp4` (add before commit) |

### Build (this pass)

```text
npm run build → SUCCESS (Next.js 15.5.19)
✓ Compiled successfully (~822ms)
✓ Lint and TypeScript clean
✓ Static prerender: / (53.6 kB), /_not-found
```

No integration fixes required in this pass.

### Hero background video

| Item | Detail |
|------|--------|
| Asset | `public/hero-wave.mp4` — present (~6.3 MiB / 6,652,465 bytes) |
| Source URL | `/hero-wave.mp4` via `<source type="video/mp4">` in `HeroVideoBackground.tsx` |
| Behavior | Autoplay, muted, loop, `playsInline`, vignette overlay, pause/play control (bottom-right) |
| Fallback | **`SignalGraph`** when `prefers-reduced-motion: reduce` **or** `video` `onError` (missing/corrupt file, unsupported codec) |
| Hero shell | `#hero.hero-has-video` disables static `::before` gradient so video shows; `#hero::after` bottom fade to `slate-deep` unchanged |
| Copy layer | `Hero.tsx` uses `HeroVideoBackground` instead of inline `SignalGraph`; motion on headline/subhead/CTA unchanged |

**Verification (filesystem + code):** MP4 exists under `public/`; fallback path is documented in component logic — no separate markdown asset note required.

### Simplified hero copy (post–parallel agents)

| Element | Content |
|---------|---------|
| H1 line 1 | “Production AI” |
| H1 line 2 (accent) | “you can put in front of regulators.” |
| Subhead | “We help enterprises build AI that passes review.” (single sentence; prior journey/pipeline copy removed) |
| CTA | One text link: “Start a brief” → `#contact` (no secondary button in hero) |

Nav still exposes brief/contact mailto helpers per prior integration; hero itself stays minimal.

### Summary (this pass)

| Item | Status |
|------|--------|
| Git diff stable | Yes (~2 min poll) |
| Production build | **Pass** |
| `hero-wave.mp4` | **Present** |
| Video fallback | **SignalGraph** (a11y + error) |
| Git commit | **None** (requested) |

