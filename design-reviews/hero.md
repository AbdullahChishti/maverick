# Hero Section — Design Critique

**Component:** `app/sections/Hero.tsx`  
**Context:** 4-section homepage (Hero → Services → Proof → Contact)  
**Fonts:** DM Sans (body), Instrument Sans (display) via `app/layout.tsx`  
**Reviewed:** June 2025  
**Reviewer lens:** Apple / Linear / Stripe editorial minimalism

---

## DESIGN SCORE: **6.8 / 10**

The Hero has a competent foundation — full-viewport presence, motion with reduced-motion respect, 8px grid discipline, and a clear left-weighted editorial layout. It reads as a *good* B2B template, not a *defining* brand moment. To reach 9.5+, the section needs one unforgettable idea, tighter copy, and founder credibility that feels earned — not listed.

---

## Current Weaknesses

### Visual Hierarchy & Layout

- **No section index "01"** — Services, Proof, and Contact all open with oversized ghost numerals (`02`, `03`, `04`). Hero breaks the editorial system it establishes elsewhere. The page feels like four sections designed at different times.
- **Two competing focal points** — The headline column and founders aside both demand attention. On desktop they fight; on mobile the founders block becomes a second chapter separated by `border-t`, which kills the "single impactful statement" goal.
- **Headline weight is undercooked** — `font-medium` on a display headline while base `h1` and section `h2`s use `font-semibold`. The hero should be the loudest typographic moment on the page; it currently whispers relative to Proof's client names.
- **Opacity hierarchy is decorative, not semantic** — `text-foreground/75` on "& Cloud-First" creates visual rhythm but no meaning. Users cannot tell if it's de-emphasized intentionally or if it's secondary information.
- **Atmospheric layers feel stock** — Dual blur orbs + 72px grid + radial mask is the default "modern SaaS" recipe. It adds depth but not distinction. Linear and Stripe heroes are often *less* decorated, not more.
- **Scroll cue is orphaned** — "Explore" with a hairline gradient is visually weak and semantically empty. It doesn't anchor to `#services` or signal what comes next.

### Typography & Spacing

- **Mobile headline choke at `max-w-[14ch]`** — Forces "AI-Native" alone on line 1, which can look accidental rather than editorial. At `2.625rem`, three stacked lines feel cramped before the subhead even starts.
- **Overline / headline / subhead rhythm is loose** — `mb-grid-4` → headline → `mt-grid-5` → sub → `mt-grid-6` → CTA is fine mechanically, but the subhead (`max-w-md`) is visually narrower than the headline's implied width, creating a staggered silhouette that lacks Apple-level alignment precision.
- **Founders org type scale is timid** — `text-xl sm:text-2xl` for Microsoft/OpenAI/Google vs. Proof's client names at `1.625rem–2.25rem` on a high-contrast panel. The names that should carry the most trust are typographically smaller and lower-contrast than client names two sections down.
- **Inconsistent label tracking** — Overline uses `0.08em` (token); founders label uses `0.1em`; scroll cue uses `0.12em`. Micro-inconsistency erodes polish at premium tier.

### Copy & Messaging

- **Headline is interchangeable** — "AI-Native & Cloud-First Solutions" could belong to any of 500 consultancies. No audience, outcome, or Maverick-specific POV.
- **Overline adds no value** — "Enterprise Technology Consulting" duplicates `layout.tsx` metadata verbatim. In a minimal 4-section page, every word must earn its place; this one doesn't.
- **Subheadline is generic filler** — "Forward-thinking organizations," "intelligent systems," and "modern cloud architecture" are abstract nouns without proof, specificity, or tension. It describes a category, not Maverick.
- **Founders copy overclaims without evidence** — "Founded by leaders from" + company names alone reads like keyword stuffing. No names, roles, or accomplishments. Microsoft/OpenAI/Google as a vertical list feels like a LinkedIn headline, not institutional credibility.
- **CTA is passive and duplicated** — "Schedule a Consultation" appears again in Contact. Nav uses "Get in touch." Three different phrases for the same action fractures voice.
- **Founders supporting line is redundant** — "Our founders built AI and cloud systems at these companies — experience they bring to every engagement" repeats almost verbatim from the unused `Founders.tsx` section. Says *that* they have experience, not *what* that experience produced.

### Founders Panel — Professionalism

- **Text-only name-dropping fails the Microsoft/OpenAI/Google bar** — Those brands signal credibility through specificity (product, scale, role). A numbered list with no logos, no names, and no context reads aspirational at best, unverified at worst.
- **Numbered index styling (`01`, `02`, `03` at 0.625rem) skews agency-portfolio** — Proof uses the same index device but ties it to substance (differentiators with descriptions). Here it's ornament on three words.
- **Left accent border (`border-l-2 border-accent`) feels blog-sidebar** — Not wrong, but below Stripe/Linear restraint. The panel lacks the material quality of Proof's dark trust column (solid fill, generous padding, confident scale).
- **"Founded by leaders from" is legally and socially vague** — "Leaders" is doing heavy lifting. Enterprise buyers will ask: which leaders? current or former? advisors or operators?

### Mobile Experience

- **Vertical stack is too long for one idea** — `min-h-[100dvh]` + nav offset + headline block + founders panel + scroll cue pushes primary CTA and founders below the fold on iPhone SE / mini class devices.
- **Founders divider (`border-t mt-grid-10`) on mobile** — Creates a "Part 2" feeling. Users may bounce before reaching credentials that are meant to convert skeptics.
- **Scroll cue centers on mobile, left-aligns on desktop** — Breaks alignment relationship with the headline column for no clear reason.
- **No secondary action on mobile** — Single CTA only. For a consulting hero, a low-commitment path ("See our work → #proof") would reduce friction.

### Accessibility

- **Scroll cue is `aria-hidden`** — Sighted users get a hint; screen reader users get nothing about page structure below the fold.
- **Founders list uses decorative indices** — `aria-hidden` on numbers inside a `<ul>` loses ordered-list semantics. Should be `<ol>` or include visually hidden context.
- **Muted text ratios** — `text-muted/60` on index numbers and scroll cue may approach WCAG edge cases on white, especially at `0.6875rem`.
- **Focus ring on CTA uses `outline-foreground`** — Global `:focus-visible` uses `outline-accent`. Hero CTA overrides to foreground. Inconsistent focus language across the page.

### Alignment with 4-Section Minimal Vision

- **Hero violates "one idea per section"** — It's trying to be positioning statement *and* trust anchor. Proof already owns trust (JPMorgan, Barclays, Almaghreb). Founder cred belongs either woven into one headline line or deferred — not a sidebar novella.
- **Word budget too high** — ~45 words in hero proper + ~20 in founders panel. Linear/Stripe heroes often land under 25 words total.
- **Doesn't tee up the numbered narrative** — User lands, gets no "01," then scrolls into a suddenly systematic page. The Hero feels like a marketing splash; the rest feels like a design system demo.

---

## Proposed Improvements

### HIGH Priority

| # | Area | Current | Proposed | Rationale |
|---|------|---------|----------|-----------|
| 1 | **Headline** | "AI-Native & Cloud-First Solutions" | **"Enterprise AI, built by people who've shipped it."** or **"We build the AI systems enterprises bet on."** | Names outcome + credibility in one line. Drop hyphen-chained buzzwords. Single line preferred; two max. |
| 2 | **Subheadline** | Generic transformation copy | **"Former leaders from Microsoft, OpenAI, and Google — now your implementation partner for production-grade AI and cloud."** | Merge founders proof into the subhead; cut the aside. One column, one story. Specific > abstract. |
| 3 | **Founders panel** | Separate aside with name list | **Remove or collapse to one inline credential line** under subhead. If kept, add **founder names + titles** (e.g., "Sarah Chen, ex-Google Cloud") and drop numbered list. | Text-only org names fail enterprise sniff test. Names + roles = credible. Numbered list = startup cliché. |
| 4 | **Section index** | Missing | Add ghost **"01"** aligned with Services/Proof/Contact pattern — same scale, same `text-foreground/10`, paired with overline. | Restores editorial system; signals intentional design, not template. |
| 5 | **Mobile structure** | Headline → sub → CTA → divider → founders → scroll | **Headline → sub (with inline cred) → CTA → scroll.** Target: CTA visible without scroll on 667px height devices. | Minimal vision = one screen, one decision. |
| 6 | **CTA wording** | "Schedule a Consultation" (duplicated) | Hero: **"Talk to us"** or **"Start a project"** — Contact retains "Schedule a consultation." Nav: unify to **"Contact"** or **"Get in touch"** everywhere. | One primary verb per funnel stage. Reduce enterprise-formality fatigue above the fold. |

### MEDIUM Priority

| # | Area | Current | Proposed | Rationale |
|---|------|---------|----------|-----------|
| 7 | **Overline** | "Enterprise Technology Consulting" | **"Maverick"** or **"Technology consulting"** or remove entirely if "01" + headline suffice. | Stop duplicating metadata. Overline should orient, not repeat SEO title. |
| 8 | **Headline typography** | `font-medium`, custom sizes | **`font-semibold`**, use `text-display` token with responsive clamp: `clamp(2.75rem, 6vw, 5rem)`. Remove arbitrary `max-w-[14ch]` on mobile. | Stronger weight + fluid scale = premium. Let `text-balance` handle breaks. |
| 9 | **Visual decoration** | Grid + two blurs | **Remove grid OR reduce to single blur.** Keep one atmospheric element max. Consider pure white with a single accent line (like Proof's border language). | Premium reads as restraint. Stripe hero is often flat. |
| 10 | **Scroll cue** | "Explore" (decorative) | Replace with **"Capabilities ↓"** linking to `#services`, or remove. Not `aria-hidden` if it's a link. | Functional > decorative. Helps 4-section wayfinding. |
| 11 | **Headline structure** | 3 lines with opacity break | **1–2 lines, uniform color.** If emphasis needed, italicize one phrase or use accent on one word — not opacity on a line. | Opacity break without semantic meaning reads as Dribbble, not Apple. |
| 12 | **Founders (if kept)** | Left accent border + list | Match Proof trust panel language: **dark inset strip** or **simple horizontal wordmark row** (monochrome SVG logos at 20–24px height). | Visual parity with Proof's "Trusted by" treatment. Logos > text for MSFT/GOOG/OAI. |
| 13 | **Secondary CTA** | None | Add text link: **"See client work →"** to `#proof`. | Gives skeptics a path without commitment. Linear pattern. |

### LOW Priority

| # | Area | Current | Proposed | Rationale |
|---|------|---------|----------|-----------|
| 14 | **Subhead width** | `max-w-md` / `max-w-lg` | `max-w-content` (42rem) or match headline measure. | Optical alignment of text blocks. |
| 15 | **Animation** | Stagger + slide on founders | Shorten delays; animate headline + CTA only if founders panel removed. | Faster time-to-message. Premium sites don't make users wait. |
| 16 | **Focus styles** | CTA uses `outline-foreground` | Use global `outline-accent` for consistency. | One focus language sitewide. |
| 17 | **Founders label tracking** | `0.1em` | Align to overline token `0.08em`. | Micro-polish. |
| 18 | **Instrument Sans pairing** | Display on headline + org names | Reserve Instrument Sans for headline only; org names in DM Sans medium if inline. | Clear display/body roles. Display font on list items dilutes headline impact. |

---

## Copy Alternatives (Ready to Test)

### Option A — Credibility-forward (recommended for consulting)
- **Overline:** `01 — Maverick`
- **Headline:** We build enterprise AI that ships.
- **Subhead:** Our founders led AI and cloud platforms at Microsoft, OpenAI, and Google. Now we do the same for you — from strategy to production.
- **CTA:** Talk to us
- **Secondary:** See our work →

### Option B — Outcome-forward (Stripe energy)
- **Headline:** AI systems your business can run on.
- **Subhead:** Production-grade intelligence and cloud architecture — delivered by engineers who built at Microsoft, OpenAI, and Google.
- **CTA:** Start a project

### Option C — Ultra-minimal (Linear energy)
- **Headline:** Enterprise AI. Done right.
- **Subhead:** Built by alumni of Microsoft, OpenAI, and Google.
- **CTA:** Get in touch

---

## What 9.5+ Looks Like (Target State)

1. **One column, one idea** — Headline + one sentence + one button visible without scrolling on mobile.
2. **Credibility in the subhead, not a sidebar** — Founder/orgs mentioned once, specifically, without a separate panel.
3. **Editorial "01"** — Hero participates in the same numbering language as the rest of the page.
4. **Headline only Maverick could own** — Specific, confident, not category-generic.
5. **Visual restraint** — White field, tight type, maybe one accent. No grid-and-blur wallpaper.
6. **Functional scroll affordance** — Link to `#services`, not decorative "Explore."
7. **Voice consistency** — CTA labels harmonized across nav, hero, and contact.

---

## Summary

The Hero is structurally sound but strategically diluted. It prioritizes decoration and dual-column layout over the ruthless clarity the 4-section vision demands. The founders panel is the biggest liability: text-only org names without people, roles, or logos will not pass scrutiny from buyers who actually know Microsoft, OpenAI, and Google.

**Fix order:** Rewrite headline → merge/cut founders panel → add "01" → simplify background → unify CTAs → tighten mobile fold.

Estimated lift with copy + layout changes only (no new assets): **7.5–8.0**.  
Estimated lift with founder names, roles, and monochrome logos: **8.5–9.0**.  
Estimated lift with all above + ultra-minimal single-column mobile: **9.5+**.
