# Mavverik — Typography & Color Critique

**Scope:** `app/globals.css`, `tailwind.config.ts`, `app/layout.tsx`, and all live sections (`Hero`, `Founders`, `Services`, `Contact`) plus chrome (`Navigation`, `Footer`, `SignalGraph`).

**Date:** 2026-06-20

**Context:** Single-page AI-native consulting site for regulated enterprise. Design system codename: **Signal Slate** — cool zinc surfaces, deep slate ink, teal “regulatory go” accent (`#00A88E`).

---

## Overall Scores

| Dimension | Score | Notes |
|-----------|------:|-------|
| **Font pairing (IBM Plex trio)** | **8 / 10** | Coherent, enterprise-credible; slightly conservative for “AI-native” positioning |
| **Typographic hierarchy** | **6.5 / 10** | Strong token foundation undermined by semantic/size drift in sections |
| **Color palette (Signal Slate)** | **8.5 / 10** | Distinctive, restrained, well-tokenized; avoids generic AI purple/gradient cliché |
| **Contrast & accessibility** | **6 / 10** | Primary text passes; muted/faint tiers and dark-band secondary text fail WCAG AA |
| **Accent usage (#00A88E)** | **7.5 / 10** | Disciplined and on-brand; primary accent sometimes too light for text |
| **Readability (body & UI)** | **7 / 10** | Good line heights and prose widths; mono micro-labels push legibility limits |
| **Professional AI-native consulting fit** | **7.5 / 10** | Reads credible and governed; could signal “cutting-edge AI” more without losing trust |

### Composite: **7.4 / 10**

The system is materially better than a default Tailwind marketing page. Signal Slate + IBM Plex communicates institutional seriousness appropriate for regulated enterprise AI. The main gaps are hierarchy consistency, a few failing contrast pairs, and mono-label fragmentation — not a broken palette.

---

## Strengths

### 1. IBM Plex pairing is intentional and on-brief

The three-font stack is loaded correctly in `layout.tsx` and wired through CSS variables:

- **IBM Plex Serif** (`--font-display`) — headings; editorial weight without startup-display excess
- **IBM Plex Sans** (`--font-sans`) — body and UI; neutral, readable at small sizes
- **IBM Plex Mono** — labels, nav, buttons, metadata; “systems / governance / audit trail” semantics

This trio is IBM’s own design language — a strong fit for “production AI the regulators sign off on.” It signals engineering rigor over marketing gloss.

### 2. Signal Slate is a coherent, differentiated palette

`globals.css` defines a complete semantic surface system:

| Layer | Tokens | Effect |
|-------|--------|--------|
| Light band | `--surface`, `--surface-raised`, `--surface-sunken` | Clear vertical rhythm; sunken Services vs raised Contact |
| Ink scale | `--ink` → `--ink-faint` | Four-step neutral hierarchy |
| Accent | `--accent`, `--accent-deep`, `--accent-bright`, `--accent-tint` | Teal reads “approved / live / signal,” not generic tech blue |
| Dark band | `--slate-deep`, `--on-slate*` | Founders section creates credible “institutional proof” moment |

The teal accent avoids the overused purple-to-cyan AI gradient trope. `#00A88E` on cool zinc feels distinctive and defensible for a governance-first brand.

### 3. Typography tokens are well-specified at the foundation

`tailwind.config.ts` defines a proper scale:

- Body: `caption` → `body-lg` with generous line heights (1.55–1.65)
- Headings: responsive `h1`/`h2` clamps, dedicated `display` step for hero
- Mono: `mono-sm` / `mono` with explicit tracking for uppercase labels

Base styles in `globals.css` apply serif to `h1–h4`, sans to body, negative tracking on display headings, and `text-wrap: balance` — all appropriate for a minimal professional site.

### 4. Accent usage is mostly restrained

Accent appears where it should:

- Section tags (`.section-tag`) with pulsing dot
- Primary CTAs (`btn-primary` → `--accent-deep`)
- Active journey node, featured capability rail, nav indicator
- Hover affordances (row titles, email domain underline)
- Focus rings and selection highlights

It does **not** flood backgrounds or body copy. The hero’s third headline line (`text-accent-deep`) is the one deliberate accent-in-display moment — acceptable emphasis.

### 5. Dark/light cadence supports narrative

Page flow: light Hero → dark Founders (credibility) → sunken Services → raised Contact → light Footer. Typography adapts (`text-on-slate*`, `section-tag` override in Founders). This is editorial, not accidental.

### 6. Readability fundamentals are solid

- Body default: `text-body` (16px / 1.65 LH) on `--surface`
- Prose capped at `max-w-prose` (38rem) in key blocks
- `text-pretty` on long lines; `antialiased` on body
- Reduced-motion respected globally

---

## Issues

### P0 — Accessibility failures on live text

| Pair | Ratio | Used for | WCAG AA (normal) |
|------|------:|----------|------------------|
| `--ink-faint` on `--surface` / `--surface-raised` | **2.35–2.56:1** | Row indices, footer copyright, icon hints, figcaption-adjacent metadata | **Fail** |
| `--accent` on `--surface` | **2.75:1** | Decorative dots, SVG stroke, some hover text | **Fail** (if used as text) |
| `--on-slate-muted` on `--slate-deep` | **2.79:1** | Founder org detail lines, panel header labels | **Fail** |
| `--ink-muted` on `--surface` | **4.36:1** | Section metadata, nav inactive | **AA Large only** |

**Impact:** Footer legal line (`text-ink-faint` at 10px uppercase), Services row numbers, and Founders credential details are below AA for normal text. For an enterprise/regulatory brand, this is a credibility and compliance risk.

### P1 — Hierarchy drift breaks the type system

The token scale exists but sections override it inconsistently:

| Location | Element | Applied class | Expected |
|----------|---------|---------------|----------|
| `Services.tsx` | Section `h2` | `text-h1` | `text-h2` |
| `Services.tsx` | Featured `h3` | `text-h2` | `text-h3` |
| `Founders.tsx` | Section `h2` | `text-h1` | `text-h2` |
| `Contact.tsx` | Section `h2` | `text-h2` | ✓ correct |
| `Contact.tsx` | Email display | ad-hoc `clamp(1.75rem, 4.5vw, 3rem)` | `text-display` or new `text-display-sm` token |
| `Navigation.tsx` | Logo | `text-[1.25rem]` | token (e.g. `text-h4` or `text-brand`) |
| `Footer.tsx` | Logo | `text-[1.35rem]` | same as nav |

**Impact:** Capabilities and Founders headings compete with the hero for visual weight. The page lacks a clear **display → h1 → h2 → h3 → body** ladder; users perceive section titles as same-tier.

### P1 — Mono label size fragmentation

At least **six** distinct mono sizes appear in components, many below 12px:

| Size | Examples |
|------|----------|
| `0.625rem` (10px) | Hero journey index, Services mobile meta, Footer copyright |
| `0.68rem` (~10.9px) | Nav email, Contact LinkedIn, Footer links |
| `0.7rem` (11.2px) | Desktop nav links |
| `0.72rem` (~11.5px) | `.btn-primary`, mobile nav |
| `0.6875rem` (11px) | `--type-label-size`, `.mono-label`, `.section-tag` |
| `0.75rem` (12px) | `text-mono` token |

Uppercase + wide tracking at 10–11px is stylistically “Swiss technical” but strains readability, especially on mobile and for users over 40 (core enterprise buyer demographic).

### P1 — Primary accent vs deep accent confusion

Two teal tiers serve overlapping roles:

- `--accent` (#00A88E) — decorative dots, SVG, some icons
- `--accent-deep` (#007A68) — buttons, section tags, emphasized text

`--accent` fails contrast on light backgrounds as text. Components sometimes use `--accent` where `--accent-deep` would be safer (e.g. status strip dots are fine; text hovers to `text-accent` in Services). **Rule needed:** accent = non-text signal; accent-deep = text and interactive fill.

### P2 — Serif on everything blurs display vs section heading

All `h1–h4` use IBM Plex Serif at 500–600 weight. At `h4` (1.125rem) in dense lists (Services rows, Founder org names), serif at semibold feels heavy compared to the sans body — the “registry” rows might read cleaner with sans semibold or serif at 500 only.

### P2 — AI-native vs institutional balance

The current system skews **institutional consulting** (IBM, serif headlines, mono registry labels, slate bands) over **AI-native** (velocity, model/system vocabulary, sharper geometric sans). This is acceptable for regulated enterprise — but competitors like Palantir-adjacent or AI labs use colder sans-only display. Mavverik risks blending with McKinsey Digital / Accenture AI pages unless accent and mono signals stay prominent.

### P2 — Inline styles bypass tokens

`Contact.tsx` contact card uses inline `borderColor`, `background` gradient, and `boxShadow`. These duplicate `.cap-card-featured` / `--shadow-signal` patterns already in `globals.css`. Not a color problem per se, but increases drift risk.

### P2 — `themeColor` mismatch on dark scroll

`layout.tsx` sets `themeColor: "#f3f5f8"` (light surface). When users scroll through Founders (`--slate-deep`), mobile browser chrome stays light. Minor polish gap.

---

## Contrast Reference (computed)

| Pair | Ratio | Verdict |
|------|------:|---------|
| `--ink` on `--surface` | 14.45:1 | Pass |
| `--ink-soft` on `--surface` | 6.89:1 | Pass |
| `--ink-muted` on `--surface-raised` | 4.76:1 | Pass |
| `--accent-deep` on `--surface` | 4.83:1 | Pass |
| White on `--accent-deep` (buttons) | 5.27:1 | Pass |
| `--on-slate` on `--slate-deep` | 12.12:1 | Pass |
| `--on-slate-soft` on `--slate-deep` | 5.18:1 | Pass |
| `--accent-bright` on `--slate-deep` | 7.03:1 | Pass |
| `--ink-faint` on `--surface` | 2.35:1 | **Fail** |
| `--on-slate-muted` on `--slate-deep` | 2.79:1 | **Fail** |
| `--accent` on `--surface` | 2.75:1 | **Fail** (text) |

---

## Recommendations for Modern Minimal Professional AI-Native Look

### Typography

1. **Lock a strict type ramp and enforce it in sections**
   - Hero `h1` → `text-display` only
   - Section titles → `text-h2` (never `text-h1`)
   - Card/row titles → `text-h3` or `text-h4`
   - Add `text-display-sm` for Contact email instead of inline clamp

2. **Consolidate mono to two sizes**
   - **Labels:** `mono-sm` (11px) — section tags, metadata
   - **UI chrome:** `mono` (12px) — nav, buttons, footer
   - Eliminate 0.625rem / 0.68rem / 0.7rem one-offs

3. **Consider sans for h4/list titles in registries**
   - Keep serif for hero + section headers only
   - Services row titles and Founder org names → `font-sans font-semibold` for a more “system UI / product spec” AI-native feel

4. **Optional: single display weight tweak**
   - Hero `font-semibold` (600) is good; section h2 at `font-medium` (500) would increase step-down from hero without shrinking size

### Color

5. **Fix P0 contrast — adjust tokens, not just usage**
   - Raise `--ink-faint` from `#94a3b8` → `#7b8da3` (~3.5:1 on surface) or restrict to decorative non-text
   - Raise `--on-slate-muted` from `#64748b` → `#8b9cb3` on dark bands (~4.5:1)
   - Document: **`--accent` never for text on light**; use `--accent-deep` minimum

6. **Tighten accent budget**
   - Keep accent on: CTAs, active states, section tags, one hero line, focus/selection
   - Replace hover `text-accent` with `text-accent-deep` in Services rows
   - Reduce Contact background glow opacity (currently `opacity-40` blur) — slightly undermines “minimal”

7. **Signal Slate polish**
   - `--surface-sunken` (#e8ecf2) vs `--surface` (#f3f5f8) delta is subtle (~1.05:1) — consider slightly more separation for Services band or rely on dot-grid alone
   - Align `themeColor` with scroll: `#243044` or `media` query for dark sections

### AI-native consulting positioning (visual)

8. **Lean into “signal / telemetry” without adding noise**
   - Mono labels already do heavy lifting — unify them
   - Accent dot + grid backdrop = enough “system” metaphor; avoid adding gradients or glass effects

9. **Preserve institutional trust, sharpen one moment**
   - Founders dark band is the trust anchor — keep serif h2 here
   - Hero could use sans for line 1–2 and serif only for “sign off on” (split display) to hybridize AI velocity + regulatory weight

10. **Button typography**
    - Uppercase mono buttons are distinctive but loud; for “modern minimal,” test sentence-case sans on secondary CTAs while keeping mono on primary “Start a brief”

---

## Priority Action Matrix

| Priority | Action | Effort | Impact |
|----------|--------|--------|--------|
| **P0** | Fix `--ink-faint` and `--on-slate-muted` contrast or demote to decorative-only | Low | High (a11y + trust) |
| **P0** | Ban `--accent` for text on light backgrounds | Low | High |
| **P1** | Normalize section headings to `text-h2`; featured card to `text-h3` | Low | High (hierarchy) |
| **P1** | Consolidate mono sizes to 2 tokens; floor at 11px for uppercase labels | Medium | Medium |
| **P1** | Tokenize Contact email size; align nav/footer logotype | Low | Medium |
| **P2** | Sans for registry row titles | Low | Medium (AI-native tone) |
| **P2** | Replace Contact inline styles with utility classes | Low | Low (maintainability) |
| **P2** | Dynamic or dark `themeColor` for Founders scroll | Low | Low (polish) |

---

## Summary

Mavverik’s Signal Slate palette and IBM Plex hierarchy form a **credible, differentiated foundation** for regulated enterprise AI consulting — cooler and more governed than typical AI landing pages. The teal accent is well-chosen and mostly well-applied.

The site falls short of excellent primarily on **execution consistency**: heading sizes jump between sections, mono labels sprawl across six sizes, and two muted ink tiers fail accessibility on live copy. Fixing contrast (P0) and enforcing the type ramp (P1) would move the composite score toward **8.5–9 / 10** without changing the brand direction.

For a modern minimal AI-native look, **do not swap fonts or add gradients** — tighten the existing system: fewer mono sizes, stricter hierarchy, safer accent tier for text, and optional sans in data-dense registries.
