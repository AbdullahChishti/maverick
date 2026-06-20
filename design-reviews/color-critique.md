# Maverick — Black / Near-Black Text Color Critique

**Scope:** Light sections (Hero, Services), dark impact bands (Founders, Contact, Footer), Navigation chrome, and the shared token system in `globals.css` / `tailwind.config.ts`.

**Verdict:** The site uses competent, accessible near-black neutrals — but they read as *default Tailwind*, not as a deliberate premium AI-native palette. The black is not broken; it is under-designed relative to the blue accent, display typography, and enterprise positioning.

---

## 1. Current State Audit

### 1.1 Core tokens (`app/globals.css`)

| Token | Hex | Role |
|-------|-----|------|
| `--background` | `#ffffff` | Page + Hero surface |
| `--surface` | `#ffffff` | Cards, nav fallback |
| `--surface-subtle` | `#fafafa` | Services section bg |
| `--foreground` | `#171717` | Primary text (≈ Tailwind `neutral-900`) |
| `--foreground-secondary` | `#525252` | Secondary text (≈ `neutral-600`) |
| `--foreground-muted` | `#737373` | Muted / overline (≈ `neutral-500`) |
| `--accent` | `#2563eb` | Brand blue — CTAs, indicators |
| `--impact-bg` | `#0a0a0a` | Dark band background (≈ `neutral-950`) |
| `--impact-fg` | `#fafafa` | Dark band primary text (≈ `neutral-50`) |
| `--impact-muted` | `#a3a3a3` | Dark band secondary (≈ `neutral-400`) |
| `--impact-accent` | `#3b82f6` | Dark band accent (lighter blue) |

**Note:** No literal `#000000` appears in live code. The system uses two near-blacks: `#171717` (light-mode ink) and `#0a0a0a` (dark-mode surface). `layout.tsx` sets `themeColor: "#0a0a0a"`.

### 1.2 Tailwind mapping (`tailwind.config.ts`)

```
foreground        → var(--foreground)
muted             → var(--foreground-muted)
muted.foreground  → var(--foreground-secondary)
impact.bg / fg / muted / accent → impact tokens
```

Utility classes in use: `text-foreground`, `text-muted-foreground`, `text-muted`, `text-impact`, `text-impact-muted`, `text-impact-accent`.

### 1.3 Typography defaults (`globals.css` `@layer base`)

| Element | Default color |
|---------|---------------|
| `body` | `text-foreground` (`#171717`) |
| `h1–h4` | `text-foreground` |
| `p` | `text-muted-foreground` (`#525252`) |
| `.overline` | `text-muted` (`#737373`) |
| `.lead` | `text-muted-foreground` |
| `.display`, `.section-title` | Inherit `text-foreground` unless overridden |

### 1.4 Section-by-section usage

#### Hero (`app/sections/Hero.tsx`)
- **Surface:** `bg-white` (same as `--background`)
- **H1 (Instrument Sans, up to ~5rem):** `text-foreground` → `#171717`
- **Overline:** `.overline` → `#737373`
- **Lead paragraph:** `text-muted-foreground` → `#525252`
- **CTA:** `bg-accent text-white` — accent-owned, not black

#### Founders (`app/sections/Founders.tsx`) — dark impact band
- **Surface:** `.section-impact` → `#0a0a0a`
- **H2, org names (large display):** `text-impact` → `#fafafa`
- **Overline, lead, org details, footer line:** `text-impact-muted` → `#a3a3a3`
- **Accent highlight span:** `text-impact-accent` → `#3b82f6`

#### Services (`app/sections/Services.tsx`) — light gray band
- **Surface:** `bg-surface-subtle` → `#fafafa`
- **Section header H2, card H3s:** `text-foreground` → `#171717`
- **Overline:** `#737373`
- **Card taglines:** `text-muted-foreground` → `#525252`
- **Featured card bg:** `bg-accent-subtle/40` — blue tint; headings still `#171717`

#### Contact (`app/sections/Contact.tsx`) — dark impact band
- **Surface:** `.contact-close` → `#0a0a0a`
- **Heading, email hero:** `text-impact` → `#fafafa`
- **Lead, trust items, hints, LinkedIn:** `text-impact-muted` → `#a3a3a3`
- **Email domain tint:** `color-mix(impact-fg 92%, impact-accent)` — subtle blue shift

#### Navigation (`app/components/Navigation.tsx`)
- **Light sections:** logo + active link → `text-foreground` (`#171717`); inactive → `text-muted-foreground` (`#525252`)
- **Dark sections:** logo + active → `var(--impact-fg)` (`#fafafa`); inactive → `var(--impact-muted)` (`#a3a3a3`)
- **Nav surface (scrolled):** `color-mix(background 90%, transparent)` on white

#### Footer (`app/components/Footer.tsx`)
- **Surface:** `.footer-coda` → `#0a0a0a`
- **Brand wordmark:** `text-impact` → `#fafafa`
- **Links, copyright:** `text-impact-muted` → `#a3a3a3`

### 1.5 Page rhythm (light vs dark text)

```
Hero        [white]     #171717 headings
Founders    [#0a0a0a]   #fafafa headings
Services    [#fafafa]   #171717 headings
Contact     [#0a0a0a]   #fafafa headings
Footer      [#0a0a0a]   #fafafa wordmark
```

The structural alternation works. The *character* of the ink does not differentiate Maverick from any neutral SaaS landing page.

---

## 2. Problems with Current Black

### 2.1 Feels harsh on light sections

`#171717` at display sizes (Hero H1 up to 5rem, Services featured H3 up to 2rem) produces **17.9:1 contrast** on white — far beyond WCAG AAA. That is good for accessibility but creates a *visual* effect: large, tight-tracked Instrument Sans in near-black on pure white reads as stark and flat, especially next to the soft blue glow (`bg-accent-subtle/25`) in Hero.

The hierarchy jumps from `#171717` (headings) to `#525252` (body) in one step. There is no intermediate "display ink" tone — common in premium editorial sites where headlines use a softer charcoal than UI labels.

### 2.2 Feels cold and generic, not premium AI-native

The palette is **achromatic neutral** (Tailwind `neutral-*` equivalents). The brand accent is **blue** (`#2563eb`), which signals intelligence, trust, and technology. Primary text ignores that axis entirely.

Compare to peers in enterprise AI / premium tech:
- Apple uses `#1d1d1f` — a warm, slightly soft black
- Linear, Vercel, and similar use **cool slate or blue-gray ink**, not neutral-900
- McKinsey / BCG editorial sites use **warm charcoal** for gravitas

Maverick's current ink says "default design system," not "frontier AI consultancy."

### 2.3 Flat on dark impact sections

`#0a0a0a` is functionally pure black. Combined with `#fafafa` text, the band is high-contrast but **dimensionless** — no subtle warmth, no blue undertone tying back to accent. The Founders → Contact → Footer run is three consecutive slabs of the same black with only spacing and a blue glow to differentiate them.

`#a3a3a3` muted text on `#0a0a0a` (7.85:1) is safe but reads **ashy** rather than refined. Premium dark UIs often use blue-gray muted tones (`#94a3b8`, `#8b95a8`) that harmonize with accent color.

### 2.4 Mismatch with typography pairing

**Instrument Sans** (display) + **DM Sans** (body) is a modern, slightly geometric pairing. Neutral-900 ink on Instrument Sans at `-0.035em` tracking can feel **mechanical** — the font wants a softer or cooler ink to feel editorial. DM Sans body at `#525252` is fine; the heading/body gap is more about heading ink being too absolute.

### 2.5 Secondary/muted grays are neutral, not brand-aware

| Pair | Contrast | WCAG AA (normal text) |
|------|----------|----------------------|
| `#171717` on `#ffffff` | 17.93:1 | Pass (AAA) |
| `#171717` on `#fafafa` | 17.18:1 | Pass (AAA) |
| `#525252` on `#ffffff` | 7.81:1 | Pass (AAA) |
| `#737373` on `#ffffff` | 4.74:1 | Pass (barely) |
| `#737373` on `#fafafa` | 4.54:1 | Pass (barely) |
| `#fafafa` on `#0a0a0a` | 18.97:1 | Pass (AAA) |
| `#a3a3a3` on `#0a0a0a` | 7.85:1 | Pass (AAA) |

Accessibility is **not the problem** for primary text. The muted tier (`#737373`) sits at the edge of AA on both white and `#fafafa` — if softened further for aesthetic reasons, it would need to stay ≥ `#767676` on white.

### 2.6 Incidental black elsewhere

- Shadow tokens: `rgba(0, 0, 0, 0.04–0.06)` — fine, standard
- `.contact-grid-fade` mask uses CSS keyword `black` — not text, no issue
- Selection highlight mixes accent with `var(--foreground)` — keeps near-black selected text

---

## 3. Alternative Palettes

Each palette includes **light-section ink**, **light-section muted tiers**, **dark-section background**, **dark-section foreground**, and **dark-section muted** — with contrast ratios on their intended surfaces.

---

### Palette A — Apple-Style Warm Ink

*"Confident, product-grade, slightly softer than neutral-900."*

| Role | Token suggestion | Hex | Contrast |
|------|----------------|-----|----------|
| Primary (light) | `--foreground` | `#1d1d1f` | 16.83:1 on white ✓ |
| Secondary (light) | `--foreground-secondary` | `#515154` | ~7.5:1 ✓ |
| Muted (light) | `--foreground-muted` | `#6e6e73` | ~5.0:1 ✓ |
| Dark bg | `--impact-bg` | `#1d1d1f` | — |
| Primary (dark) | `--impact-fg` | `#f5f5f7` | 16.21:1 on `#1d1d1f` ✓ |
| Muted (dark) | `--impact-muted` | `#a1a1a6` | ~6.5:1 ✓ |

**Pros:** Instantly reads as premium consumer-tech; warm undertone softens large display type; dark bg is softer than `#0a0a0a` while still feeling "pro."  
**Cons:** Very Apple — may feel derivative; dark bg `#1d1d1f` is lighter than current `#0a0a0a`, reducing dramatic impact-band separation from white sections; less distinctively "AI."

---

### Palette B — Cool Ink Slate *(recommended)*

*"Enterprise AI — ties primary ink to the blue accent axis."*

| Role | Token suggestion | Hex | Contrast |
|------|----------------|-----|----------|
| Primary (light) | `--foreground` | `#0f172a` | 17.06:1 on white ✓ |
| Display (light) | `--foreground-display` | `#1e293b` | 14.63:1 on white ✓ |
| Secondary (light) | `--foreground-secondary` | `#475569` | 7.58:1 ✓ |
| Muted (light) | `--foreground-muted` | `#64748b` | 5.48:1 ✓ |
| Dark bg | `--impact-bg` | `#0b1120` | — |
| Primary (dark) | `--impact-fg` | `#f1f5f9` | ~17.5:1 on `#0b1120` ✓ |
| Muted (dark) | `--impact-muted` | `#94a3b8` | ~8.5:1 on `#0b1120` ✓ |

**Pros:** Blue-gray ink harmonizes with `#2563eb` accent; still high-contrast but *feels* less harsh than neutral-900; dark band gains subtle navy depth instead of flat black; differentiates Maverick from generic SaaS.  
**Cons:** Slightly cooler tone may feel less "warm/trustworthy" to traditional enterprise buyers; requires updating all `--impact-*` tokens together for cohesion.

---

### Palette C — Warm Charcoal Editorial

*"McKinsey-meets-startup — gravitas without coldness."*

| Role | Token suggestion | Hex | Contrast |
|------|----------------|-----|----------|
| Primary (light) | `--foreground` | `#2c2c2e` | 13.94:1 on white ✓ |
| Secondary (light) | `--foreground-secondary` | `#545456` | ~7.2:1 ✓ |
| Muted (light) | `--foreground-muted` | `#6c6c70` | ~5.3:1 ✓ |
| Dark bg | `--impact-bg` | `#1c1c1e` | — |
| Primary (dark) | `--impact-fg` | `#f2f2f7` | ~15.5:1 on `#1c1c1e` ✓ |
| Muted (dark) | `--impact-muted` | `#98989d` | ~6.8:1 ✓ |

**Pros:** Softer on large headings — the reduced contrast (still AAA) feels editorial and human; warm undertone suits "senior team / accountable" messaging; dark bg is rich charcoal, not void black.  
**Cons:** Furthest from current values — biggest visual shift; may feel less "tech/AI" and more "strategy consultancy"; blue accent becomes the sole tech signal.

---

### Palette D — Soft Graphite (Minimal Change)

*"Keep structure, soften the edges — lowest migration cost."*

| Role | Token suggestion | Hex | Contrast |
|------|----------------|-----|----------|
| Primary (light) | `--foreground` | `#262626` | 15.5:1 on white ✓ |
| Secondary (light) | `--foreground-secondary` | `#525252` | 7.81:1 ✓ (unchanged) |
| Muted (light) | `--foreground-muted` | `#737373` | 4.74:1 ✓ (unchanged) |
| Dark bg | `--impact-bg` | `#141414` | — |
| Primary (dark) | `--impact-fg` | `#f5f5f5` | ~17.5:1 on `#141414` ✓ |
| Muted (dark) | `--impact-muted` | `#a3a3a3` | ~7.2:1 ✓ (unchanged) |

**Pros:** Smallest diff from current; slightly lifts the oppressive `#0a0a0a` void; heading ink marginally softer.  
**Cons:** Still achromatic — does not solve the "generic / cold / disconnected from blue accent" problem; incremental, not transformative.

---

### Palette E — Deep Navy Ink

*"Premium enterprise — authority + technology."*

| Role | Token suggestion | Hex | Contrast |
|------|----------------|-----|----------|
| Primary (light) | `--foreground` | `#0c1222` | 17.5:1 on white ✓ |
| Secondary (light) | `--foreground-secondary` | `#3d4f6f` | ~7.8:1 ✓ |
| Muted (light) | `--foreground-muted` | `#5a6b85` | ~5.5:1 ✓ |
| Dark bg | `--impact-bg` | `#060a14` | — |
| Primary (dark) | `--impact-fg` | `#e8edf5` | ~16.8:1 on `#060a14` ✓ |
| Muted (dark) | `--impact-muted` | `#8494ad` | ~7.5:1 ✓ |

**Pros:** Strongest brand alignment with AI/enterprise positioning; navy dark bands feel intentional, not template; accent blue feels native rather than bolted on.  
**Cons:** Risk of feeling "corporate bank" if pushed too far; needs restraint in secondary tones to avoid murky body copy; boldest identity statement.

---

## 4. Recommended Direction

### **Palette B — Cool Ink Slate**

**Rationale:**

1. **Accent coherence.** Maverick already commits to blue (`#2563eb` / `#3b82f6`). Cool slate ink creates a single hue family from heading text through accent to dark-band glow — the page reads as one system, not "black text + blue decoration."

2. **Premium without Apple cosplay.** `#1e293b` display ink on white is still AAA (14.6:1) but *perceptually* softer than `#171717` at large sizes — especially with Instrument Sans tight tracking. It achieves editorial refinement without copying Apple's exact values.

3. **Dark bands gain depth.** Replacing `#0a0a0a` with `#0b1120` (slate-950 navy) makes Founders and Contact feel like deliberate "impact chapters" rather than CSS defaults. Muted text `#94a3b8` on dark bg ties to the accent instead of reading as neutral ash.

4. **Enterprise AI positioning.** Cool slate is the dominant ink choice among modern infra/AI brands (Vercel, Supabase-adjacent aesthetics, developer-premium). Warm charcoal (Palette C) skews strategy-consulting; Apple ink (Palette A) skews consumer product; navy (Palette E) skews financial services.

5. **Accessibility headroom.** All proposed pairs exceed WCAG AA with margin. Muted tier improves from 4.74:1 → 5.48:1 on white, reducing the "barely passes" risk of current `#737373`.

### Implementation notes (for future, not in scope now)

- Use `--foreground-display` (`#1e293b`) for Instrument Sans headings only; keep `--foreground` (`#0f172a`) for nav, buttons, and UI chrome — creates subtle hierarchy without extra font weights.
- On `#fafafa` (Services), verify `#1e293b` still exceeds 14:1 (it will).
- Consider lifting `--surface-subtle` to `#f8fafc` (slate-50) so the Services band harmonizes with slate ink rather than neutral gray.

---

## 5. Specific Token Rename Suggestions for `globals.css`

Current names are functional but conflate "foreground" (light-mode text) with "impact" (dark-mode everything). Renaming clarifies intent and supports split heading/body ink.

### Proposed renames (Palette B values)

```css
:root {
  /* Surfaces — unchanged names OK */
  --background: #ffffff;
  --surface: #ffffff;
  --surface-subtle: #f8fafc;          /* was #fafafa — slate-tinted */

  /* Text — renamed for clarity */
  --text-primary: #0f172a;            /* was --foreground */
  --text-display: #1e293b;            /* NEW — Instrument Sans headings */
  --text-secondary: #475569;          /* was --foreground-secondary */
  --text-muted: #64748b;              /* was --foreground-muted */

  /* Accent — unchanged */
  --accent: #2563eb;
  --accent-hover: #1d4ed8;
  --accent-subtle: #eff6ff;

  /* Inverse / impact band — renamed */
  --surface-inverse: #0b1120;         /* was --impact-bg */
  --text-inverse: #f1f5f9;            /* was --impact-fg */
  --text-inverse-muted: #94a3b8;      /* was --impact-muted */
  --border-inverse: rgba(255, 255, 255, 0.08);  /* was --impact-border */
  --accent-inverse: #3b82f6;          /* was --impact-accent */
}
```

### Tailwind alias strategy

Keep backward-compatible aliases during migration:

```ts
// tailwind.config.ts — transitional
foreground: "var(--text-primary)",
"foreground-display": "var(--text-display)",  // new utility
muted: {
  DEFAULT: "var(--text-muted)",
  foreground: "var(--text-secondary)",
},
impact: {
  bg: "var(--surface-inverse)",
  fg: "var(--text-inverse)",
  muted: "var(--text-inverse-muted)",
  // ...
},
```

### Class-level guidance

| Current | Proposed | Where |
|---------|----------|-------|
| `text-foreground` on H1/H2/H3 | `text-foreground-display` | Hero, Services headings |
| `text-foreground` on nav logo | `text-primary` | Navigation |
| `text-impact` | `text-inverse` | Founders, Contact, Footer |
| `text-impact-muted` | `text-inverse-muted` | Dark band secondary |
| `bg-impact` / `--impact-bg` | `bg-inverse` / `--surface-inverse` | Section backgrounds |

### `@layer base` heading update (future)

```css
h1, h2, h3, h4 {
  color: var(--text-display);   /* softer than UI primary */
}
body {
  color: var(--text-primary);
}
```

---

## 6. Summary Table — Current vs Recommended

| Surface | Current | Recommended (Palette B) | Why |
|---------|---------|-------------------------|-----|
| Hero H1 | `#171717` | `#1e293b` | Softer at display size; blue-gray coherence |
| Services H2/H3 | `#171717` | `#1e293b` | Same |
| Body / lead | `#525252` | `#475569` | Slate secondary — slightly cooler, same tier |
| Overline | `#737373` | `#64748b` | Better AA margin; brand-aware muted |
| Founders bg | `#0a0a0a` | `#0b1120` | Navy depth vs flat black |
| Founders H2 | `#fafafa` | `#f1f5f9` | Slate-tinted white — less sterile |
| Founders muted | `#a3a3a3` | `#94a3b8` | Harmonizes with accent |
| Nav (light) | `#171717` | `#0f172a` | UI ink — slightly deeper for small text |

---

*Critique only — no code changes applied.*
