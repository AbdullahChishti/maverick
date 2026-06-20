# Hero — Design Critique v2 (Video + QuantumBlack Pass)

**Date:** 2026-06-20  
**Scope:** `app/sections/Hero.tsx`, `app/components/HeroVideoBackground.tsx`, `app/components/SignalGraph.tsx`, `#hero` rules in `app/globals.css`, `Navigation.tsx` overlay integration  
**Method:** Code + token audit (dev server at `localhost:3000` present; browser capture unavailable in this pass)  
**Review only — no code changes, no commit**

---

## Overall Score: **7.6 / 10**

The hero has successfully pivoted from a widget-heavy SaaS layout to a **QuantumBlack-style immersive band**: full-bleed motion field, bottom-left serif promise, transparent nav, single conversion path. Architecture and stacking are sound. The main gaps are **brand copy drift** (hero vs metadata/regulatory positioning), **CTA inconsistency** with nav, **video performance weight**, and **under-developed supporting copy** relative to McKinsey Digital reference patterns.

---

## Per-Dimension Scores

| Dimension | Score | One-line read |
|-----------|------:|---------------|
| **Video visibility** | 7.0 | Video path is wired and fallback is thoughtful; filters + vignette + 11MB asset dim impact and slow first paint. |
| **Text / video overlap & legibility** | 8.0 | Local scrim + text-shadow + bottom placement work; accent line contrast is nearly invisible. |
| **Headline copy** | 5.5 | QB-generic transformation language; conflicts with site metadata and Mavverik regulatory differentiation. |
| **QuantumBlack alignment** | 7.5 | Layout, type weight, and dark immersive rhythm match; missing kicker/subhead and CTA weight vs reference. |
| **Typography & spacing** | 8.0 | Serif display clamp and bottom grid padding feel editorial; H1 may wrap awkwardly on narrow mobile. |
| **CTA placement & conversion** | 6.5 | Above-fold text link is correct pattern but visually weaker than nav CTA and splits intent (#contact vs mailto). |
| **Navigation integration** | 8.5 | Overlay theme, scroll-spy, and token remapping are clean; pause control competes with copy band on small widths. |
| **Mobile experience** | 7.5 | Stronger mobile scrim and dvh height help legibility; upper viewport feels empty; long H1 lines stack heavily. |
| **Motion & accessibility** | 8.5 | Reduced-motion → SignalGraph, pause control, aria labels, and global drift disable are well implemented. |
| **Minimalism / message discipline** | 9.0 | Promise + one CTA only — major improvement over prior journey/strip/graph-caption stack. |

---

## Current State Summary

### Layer stack (as implemented)

```
z-0  HeroVideoBackground — hero-wave.mp4 (or SignalGraph fallback)
z-1  .hero-edge-vignette + #hero::after bottom fade → slate-deep
z-2  .hero-content → .hero-text-zone (local scrim ::before)
z-3  .hero-video-control (pause/play, bottom-right)
```

Nav sits at `z-50`, transparent overlay theme while `#hero` is active.

### Copy inventory (live in `Hero.tsx`)

| Element | Content |
|---------|---------|
| H1 line 1 | People and AI, working as one. |
| H1 line 2 (accent) | Turn change into advantage. |
| CTA | Start a brief → `#contact` (text link + arrow) |

**Not present:** category overline, subhead, secondary CTA, journey widgets, status strip, SignalGraph caption.

### Metadata / elsewhere (still regulatory)

| Location | Copy frame |
|----------|------------|
| `layout.tsx` title / OG | Production AI the regulators sign off on. |
| `layout.tsx` description | architecture review → governed production AI |
| Nav category | Enterprise AI |

---

## Strengths

1. **QuantumBlack layout pattern is correctly executed.** Full-viewport dark band, bottom-weighted copy in `container-wide`, transparent nav with white type — matches McKinsey Digital / QuantumBlack editorial hero grammar without copying their asset pipeline.

2. **Message discipline restored.** Prior critique’s P0 clutter (journey timeline, status strip, figcaption, dual narrators) is gone. Hero now owns promise + CTA only — appropriate section ownership.

3. **Video integration architecture is clean.** `hero-has-video` disables static `#hero::before` gradient; video sits at z-0; vignette preserves a readable center; `SignalGraph` fallback covers both `prefers-reduced-motion` and `onError`.

4. **Local scrim is the right legibility strategy.** `.hero-text-zone::before` applies a directional gradient (~40% width max on desktop) instead of a full-screen wash — keeps the wave field visible while anchoring copy.

5. **Typography tokens are cohesive.** `#hero h1` binds to `--hero-display-size` / leading / tracking; IBM Plex Serif at semibold reads institutional, not startup-display.

6. **Motion is professional.** Staggered Framer reveal with `useReducedMotion()` zeroing delay/transform; global CSS disables `.hero-wave-drift-*` under reduced motion.

7. **Nav overlay integration is mature.** `getNavTheme()` returns `overlay` on hero; `.nav-surface-overlay` remaps `text-ink*` to `--nav-hero-fg*`; category label “Enterprise AI” frames the practice without repeating the wordmark in hero.

8. **Accessibility basics present.** `aria-labelledby`, decorative layers `aria-hidden`, video control `aria-label`, skip link in layout.

---

## Issues (P0 / P1 / P2)

### P0 — Brand, conversion, performance

| # | Issue | Evidence | Impact |
|---|-------|----------|--------|
| P0-1 | **Hero copy contradicts site positioning.** H1 is generic transformation (“People and AI… Turn change into advantage”) while metadata, OG, and prior brand work sell **regulated production AI**. | `Hero.tsx` L9–11 vs `layout.tsx` L26–31 | Enterprise visitor sees McKinsey boilerplate, then Founders/Services imply governance — trust fracture. |
| P0-2 | **Split CTA destinations.** Hero “Start a brief” scrolls to `#contact`; nav “Start a brief” opens `BRIEF_MAILTO`. Same label, different actions. | `Hero.tsx` L71 vs `Navigation.tsx` L256–258 | Conversion analytics and user expectation break; nav outranks hero visually *and* behaviorally. |
| P0-3 | **Video asset weight without poster.** `hero-wave.mp4` ≈ **11 MiB**, `preload="auto"`, no `poster` attribute. | `HeroVideoBackground.tsx` L53–58; filesystem | Slow LCP on mobile/corporate networks; blank/dark flash before decode; hurts professional first impression. |

### P1 — Layout, legibility, QB fidelity

| # | Issue | Evidence | Impact |
|---|-------|----------|--------|
| P1-1 | **Accent line treatment is ineffective.** Line 2 uses `text-white/90` on white video scrim — nearly indistinguishable from line 1. | `Hero.tsx` L55 | Two-line hierarchy reads as one block; “accent” flag wasted. |
| P1-2 | **No supporting line (subhead or kicker).** QB heroes typically pair category kicker + headline + one supporting sentence. Hero is H1-only. | `Hero.tsx` structure | Upper ~55–65% of viewport is motion-only; promise lacks context for cold traffic / SEO snippet mismatch. |
| P1-3 | **Video focal point vs copy anchor misaligned.** CSS keeps center clear (`object-position: 50% 45%`, radial vignette at 50% 45%) but copy is **bottom-left**. | `globals.css` L458–481, `Hero.tsx` L42–43 | Wave energy may sit center-right while copy sits in the heaviest stacked scrim (bottom fade + text-zone); visual interest doesn’t guide eye to message. |
| P1-4 | **Hero CTA visually subordinate to nav CTA.** Hero: plain text link. Nav: `nav-cta-link` with `ArrowUpRight`, same label. | `Hero.tsx` L70–81 vs `Navigation.tsx` L255–261 | Primary on-page action looks secondary; QB pattern often inverts this (hero CTA = strongest). |
| P1-5 | **Pause control placement risk on narrow viewports.** Fixed `bottom-grid-6 right-[var(--container-x)]` at z-3 shares bottom band with left-aligned copy block. | `HeroVideoBackground.tsx` L68 | On ~320–390px widths, control may sit near or over CTA row depending on line wraps. |
| P1-6 | **Long H1 lines on mobile.** Line 1 is 34 characters; at `clamp(2.75rem, …)` may become 3–4 lines before CTA. | `Hero.tsx` L10; `--hero-display-size` | Push CTA lower; headline rhythm feels paragraph-like, not poster-like. |

### P2 — Polish

| # | Issue | Evidence | Impact |
|---|-------|----------|--------|
| P2-1 | **Redundant type class.** `text-display-xl` on H1 while `#hero h1` already sets `--hero-display-size`. | `Hero.tsx` L46; `globals.css` L567–573 | Minor drift risk if tokens diverge. |
| P2-2 | **No `text-balance` / `text-pretty` on headline.** | `Hero.tsx` h1 | Orphan words possible on mid breakpoints. |
| P2-3 | **Hover on hero link fades to white/75** while `#hero a:not(.btn-primary):hover` sets accent — specificity/order may conflict. | `Hero.tsx` L72; `globals.css` L609–611 | Inconsistent micro-interaction. |
| P2-4 | **SignalGraph fallback diverges from video color grade.** Video uses `saturate(0.92) brightness(0.9)`; fallback SVG/gradients are static, slightly brighter/teal-forward. | `globals.css` L458–461; `SignalGraph.tsx` | Reduced-motion users see a different mood than video users. |
| P2-5 | **Category label only in nav, not hero.** Nav shows “Enterprise AI”; hero has no mono kicker. | `Navigation.tsx` L8 | Missed QB pattern: `[CATEGORY]` above serif headline. |

---

## Video Visibility — Focused Assessment

| Aspect | Assessment |
|--------|------------|
| **Playback path** | Autoplay + muted + loop + `playsInline` — correct for background hero video. |
| **Visibility** | `brightness(0.9)` + edge vignette + bottom `#hero::after` fade intentionally subdue the field — video reads as atmosphere, not hero subject. Appropriate for QB style; may feel *too* dim on calibrated displays. |
| **Framing** | `object-cover` with center-weighted `object-position` — crop-stable; may clip wave peaks on ultrawide. |
| **Fallback** | SignalGraph is a credible static substitute; drift animations respect reduced motion globally. |
| **Controls** | Pause/play is good practice; many QB sites omit — acceptable differentiator for a11y. |
| **Performance** | 11 MiB is high for a looping background; no WebM/AV1 alternate, no lazy strategy, no poster frame. |

**Score rationale (7.0):** Technically visible and integrated, but performance and grading choices limit impact.

---

## Headline Copy — Focused Assessment

| Line | Text | Read |
|------|------|------|
| 1 | People and AI, working as one. | Familiar Big-4 / QB transformation trope; could belong to any AI practice landing page. |
| 2 | Turn change into advantage. | Classic consulting payoff; no regulatory, production, or accountability hook. |

**Alignment gap**

| Frame | Hero (live) | Metadata / brand |
|-------|-------------|------------------|
| Primary promise | Human + AI unity, change → advantage | Production AI regulators sign off on |
| Tone | Aspirational, generic | Specific, governance-led, enterprise |

**Recommendation direction (copy only, not implemented):** Either commit fully to QB-generic and rewrite metadata/site-wide — **or** (recommended for Mavverik) restore regulatory differentiation in hero while keeping the minimal two-line + CTA structure.

Example reading-driven breaks (regulatory-led, two lines):

- Line 1: `Production AI` / Line 2: `the regulators sign off on.`
- Line 1: `Governed AI systems` / Line 2: `built for production.`

Optional mono kicker above H1: `Enterprise AI` (matches nav) or `Regulated industries`

Optional one-line subhead (max ~90 chars): *One senior team accountable from architecture review to sign-off.*

---

## QuantumBlack Alignment — Gap Analysis

| QB / McKinsey Digital pattern | Mavverik status | Gap |
|-------------------------------|-----------------|-----|
| Full-bleed dark motion field | ✅ Video + fallback | Asset weight |
| Bottom-left or bottom-weighted serif headline | ✅ | — |
| Transparent nav over hero | ✅ | — |
| Category kicker (mono, muted) | ❌ Nav only | Add above H1 |
| One supporting sentence | ❌ Removed with prior clutter | Re-add **one** sentence only |
| Primary CTA with clear weight | ⚠️ Text link only | Promote hero CTA or demote nav duplicate |
| Light editorial section below | ✅ Founders | Seam `#hero::after` helps |
| Restrained palette, no glow orbs | ✅ | — |
| Transformation / industry voice | ⚠️ Generic copy | Needs Mavverik-specific angle |

---

## Concrete Reimplementation Spec

### 1. Layout (structure unchanged; tune placement)

**Keep:** `#hero.hero-has-video`, bottom-aligned `.hero-content`, z-index stack, `min-h-hero` / `100dvh`.

**Adjust:**

| Property | Current | Target |
|----------|---------|--------|
| Copy anchor | `justify-end`, bottom-left | Keep; add `lg:max-w-[min(44rem,42vw)]` only if subhead added |
| Content padding bottom | `pb-grid-8` → `lg:pb-grid-12` | Reduce to `pb-grid-6` / `lg:pb-grid-10` if subhead restores vertical stack — keep CTA above fold on 768×1024 |
| Optional desktop rhythm | — | Add mono kicker + subhead between nav clearance and H1 with `mt-grid-4` / `mt-grid-6` spacing |

**DOM target:**

```html
<section id="hero" class="hero-has-video …">
  <HeroVideoBackground />
  <div class="hero-edge-vignette" />
  <div class="hero-content container-wide …">
    <div class="hero-text-zone">
      <p class="hero-kicker">Enterprise AI</p>   <!-- new -->
      <h1>…</h1>
      <p class="hero-subhead">…</p>              <!-- new, one sentence -->
      <a class="hero-cta">Start a brief</a>
    </div>
  </div>
</section>
```

### 2. Video (`HeroVideoBackground.tsx` + asset)

| Change | Spec |
|--------|------|
| **Compress asset** | Target ≤ 2–3 MiB: H.264 1080p, 24fps, 6–8s seamless loop; optional WebM sibling. |
| **Poster** | Add `poster="/hero-wave-poster.jpg"` (~40–80 KB, frame at legible wave peak). |
| **Preload** | Change to `preload="metadata"`; consider `fetchpriority="low"` on video (not LCP candidate — text is). |
| **Framing** | Shift `object-position` toward copy anchor: `42% 48%` (mobile), `38% 45%` (lg+) so wave luminance sits center-right, copy left. |
| **Grade** | Slightly lift visibility: `brightness(0.94) saturate(0.95) contrast(1.04)` — A/B against current 0.9 brightness. |
| **Pause control** | Move to `top: calc(var(--nav-h) + 1rem); right: var(--container-x)` or tuck into nav utility cluster on `sm+` to clear copy band. |

### 3. Scrim & legibility (`globals.css`)

**Keep:** Local `.hero-text-zone::before` (not full-screen wash).

**Revise:**

```css
/* Shift vignette focal ellipse toward center-right so bottom-left copy sits on darker pool */
.hero-edge-vignette {
  background:
    radial-gradient(
      ellipse 100% 90% at 62% 40%,
      transparent 38%,
      color-mix(in srgb, var(--hero-bg) 32%, transparent) 100%
    ),
    linear-gradient(
      to bottom,
      transparent 50%,
      color-mix(in srgb, var(--hero-bg) 28%, transparent) 100%
    );
}

/* Strengthen text-zone scrim slightly on mobile only */
@media (max-width: 639px) {
  .hero-text-zone::before {
    background: linear-gradient(
      to top,
      color-mix(in srgb, var(--hero-bg) 82%, transparent) 0%,
      color-mix(in srgb, var(--hero-bg) 48%, transparent) 45%,
      transparent 100%
    );
  }
}

/* New kicker + subhead tokens */
.hero-kicker {
  font-family: var(--font-mono);
  font-size: var(--type-label-size);
  letter-spacing: var(--type-label-tracking);
  text-transform: uppercase;
  color: var(--hero-text-muted);
  margin-bottom: 1rem;
}

.hero-subhead {
  font-family: var(--font-sans);
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.55;
  color: var(--hero-text-soft);
  max-width: 36rem;
  margin-top: 1.25rem;
  text-shadow: 0 1px 16px color-mix(in srgb, var(--hero-bg) 50%, transparent);
}

/* Accent line — use semantic tier, not opacity hack */
#hero h1 .hero-line-accent {
  color: var(--hero-text-soft); /* or var(--accent-bright) at 0.92 opacity for brand signal */
}
```

**`#hero::after` bottom fade:** Keep for Founders seam; optionally reduce height from `10rem` → `8rem` if bottom copy feels muddy.

### 4. Copy placement & content spec

| Element | Rule | Example (regulatory-led) |
|---------|------|--------------------------|
| Kicker | Mono, uppercase, 1 line, matches nav category | `Enterprise AI` |
| H1 | Max 2 lines, reading-driven breaks, `text-balance` | L1: `Production AI` · L2: `the regulators sign off on.` |
| Subhead | Exactly 1 sentence, no journey map / no client names | `One senior team accountable from architecture review to sign-off.` |
| CTA | One primary; same action site-wide | `Start a brief` → **`BRIEF_MAILTO`** or **`#contact`** — pick one |

**Accent line treatment:** Second line uses `--hero-text-soft` or last 2–3 words in `--accent-bright` — not `text-white/90`.

### 5. CTA & nav unification

| Decision | Spec |
|----------|------|
| **Single action** | Align hero + nav “Start a brief” to the same `href` (recommend `#contact` for on-page flow, mailto for nav utility only with different label e.g. `Email us`). |
| **Hero CTA style** | Upgrade to `nav-cta-link` parity or `.btn-primary` ghost-on-dark: 44px min height, arrow icon, underline on hover optional. |
| **Hierarchy** | Hero CTA = primary; nav brief = duplicate only if identical behavior. |

### 6. Typography & spacing tokens

| Token | Current | Proposed |
|-------|---------|----------|
| H1 class | `text-display-xl` + `#hero h1` | Use `text-hero-display` only (single source) |
| H1 → subhead | — | `mt-grid-4` (mobile) / `mt-grid-5` (sm+) |
| Subhead → CTA | `mt-grid-6` (H1→CTA today) | `mt-grid-6` subhead→CTA; tighten if 4-line H1 on mobile |
| Line height | `1.02` | Keep for poster feel; ensure max 2 visual lines on `≥768px` via copy edits |

### 7. Mobile experience

| Issue | Fix |
|-------|-----|
| Empty upper viewport | Acceptable for QB — but add kicker + subhead to balance |
| Long H1 wraps | Shorten line 1 to ≤24 chars or use display-sm breakpoint override: `@media (max-width: 639px) { --hero-display-size: clamp(2.25rem, 8vw, 2.75rem); }` |
| Scrim | Already stronger at `max-width: 639px` — keep |
| Video control overlap | Relocate to top-right below nav on `<sm` |
| Touch targets | CTA min-height 44px; increase hit area with padding |

### 8. SignalGraph fallback parity

Apply equivalent CSS filter wrapper on fallback container:

```css
.hero-video-bg .hero-video,
.hero-video-bg .signal-graph-fallback {
  filter: saturate(0.95) brightness(0.94) contrast(1.04);
}
```

Wrap `<SignalGraph className="signal-graph-fallback" />` for consistent grade.

---

## Navigation Integration — Verification Checklist

- [ ] Overlay theme: white logo/links readable over video’s top third (bright wave peaks).
- [ ] Scroll handoff: at Founders seam, nav morphs to light surface without flash.
- [ ] Mobile drawer open over hero: switches to dark surface — already implemented.
- [ ] Active section `hero` until threshold passes — confirm with bottom-weighted copy (tall hero keeps overlay longer — ** desirable**).
- [ ] Unify CTA destinations after hero copy fix.

---

## Priority Roadmap

| Priority | Action | Expected lift |
|----------|--------|---------------|
| **P0** | Reconcile hero H1 with regulatory metadata **or** rewrite metadata to match QB-generic | Copy + brand trust +++ |
| **P0** | Unify “Start a brief” destination hero ↔ nav | Conversion ++ |
| **P0** | Compress video + add poster + `preload="metadata"` | Video visibility + performance ++ |
| **P1** | Add kicker + one subhead; fix accent line color | QB alignment ++, legibility + |
| **P1** | Promote hero CTA visual weight; relocate pause control | CTA placement ++ |
| **P1** | Shift `object-position` / vignette focal point toward copy-aware composition | Video visibility + |
| **P2** | `text-balance`, fallback color parity, token class cleanup | Polish + |

**Projected score after P0 + P1:** **8.6 / 10** — same structural wins, with brand coherence and conversion path aligned to the rest of the site.

---

## Reference — File Map

| Concern | Primary file(s) |
|---------|-----------------|
| Copy & layout | `app/sections/Hero.tsx` |
| Video / fallback | `app/components/HeroVideoBackground.tsx`, `public/hero-wave.mp4` |
| Static fallback art | `app/components/SignalGraph.tsx` |
| Scrim, vignette, type | `app/globals.css` `#hero`, `.hero-*` |
| Nav overlay | `app/components/Navigation.tsx`, `.nav-surface-overlay` in `globals.css` |
| Tokens | `:root --hero-*`, `tailwind.config.ts` `hero-display`, `min-h-hero` |

---

## Changelog vs `critique-hero.md` (v1)

| v1 issue | v2 status |
|----------|-----------|
| Journey timeline, status strip, figcaption | ✅ Removed |
| SignalGraph as bordered widget in hero | ✅ Moved to video fallback only |
| Dual CTAs in hero | ✅ Single text CTA |
| Copy duplication inside hero | ✅ Resolved |
| Hero density / minimalism | ✅ Strong |
| **New focus** | Video visibility, scrim layering, QB copy alignment, nav CTA split, 11MB asset |
