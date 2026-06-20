# Critique: Services & Contact

**Date:** 2026-06-20  
**Scope:** `app/sections/Services.tsx`, `app/sections/Contact.tsx`  
**Lens:** Layout patterns, scannability, visual hierarchy, minimalism, conversion design (Contact), professional AI-native aesthetic  
**Context:** Four-section page flow — Hero → Founders (dark slate band) → Services (`#capabilities`) → Contact → Footer

---

## Executive Summary

Services has graduated from the broken bento era into a **registry catalog** with sticky editorial intro, a featured AI card, and linked practice rows. It is the strongest mid-page section for scan rhythm and token discipline. Contact is a **competent light conversion close** — email-as-hero typography, trust bullets, and a signal-gradient action card — but it under-delivers on mobile conversion order and finale hierarchy relative to Services.

**Combined funnel score: 8.0 / 10**

| Section | Overall | Layout | Scannability | Hierarchy | Minimalism | Conversion | AI-native aesthetic |
|---------|---------|--------|--------------|-----------|------------|------------|---------------------|
| **Services** | **8.2** | 8.5 | 8.0 | 7.5 | 8.5 | 7.0 | 8.5 |
| **Contact** | **7.8** | 7.5 | 8.0 | 7.0 | 8.0 | 7.5 | 8.5 |

---

## Services — 8.2 / 10

### Strengths

1. **Registry layout beats bento for enterprise scanning.** The 5+7 sticky-sidebar grid (`lg:col-span-5` intro + `lg:col-span-7` registry) mirrors editorial catalogs (Linear docs, Stripe product index). Dividers, mono indices (`01`–`05`), and right-aligned meta on desktop create a **system-of-record** feel appropriate for regulated buyers.

2. **Featured card earns hierarchy without noise.** The AI practice gets a raised surface, left accent bar, `text-h2` title, and `text-body-lg` tagline — size and surface differentiation, not decorative pills or ghost numerals. The `lineReveal` divider before the list adds a deliberate “registry opens here” beat.

3. **Interaction model is present.** Every practice links to `#contact` with `aria-label`, hover color shifts on indices/titles, and `ArrowUpRight` affordances on featured + mobile rows. This fixes the prior conversion dead zone.

4. **Copy voice is differentiated.** Taglines like *“built for the risk review, not the pilot deck”* and *“not another quarterly report”* carry unmistakable Mavverik tone. Meta labels (`Live in regulated finance`, `Phased, no cutover`) compress proof into mono scan lines.

5. **AI-native aesthetic is coherent.** Signal Slate tokens (`bg-surface-sunken`, dot-grid at 15% opacity, IBM Plex mono labels, accent-deep indices) read as **instrument panel**, not marketing brochure. `section-tag` accent dot matches Hero/Contact chrome.

6. **Accessibility posture is solid.** `aria-labelledby`, semantic `<ol>`, `useReducedMotion`, and focus-visible tokens from globals are wired correctly.

### Issues

#### P0 — None structural

The registry pattern is responsive-safe (no broken 12-col bento math). No layout bugs block shipping.

#### P1 — High impact

| # | Issue | Why it matters |
|---|-------|----------------|
| S1 | **Section heading outranks the Contact finale.** Services H2 uses `text-h1`; Contact H2 uses `text-h2`. The catalog reads louder than the close — inverted narrative weight for a single-page funnel. | Enterprise landing pages reserve the largest type scale for the conversion moment. |
| S2 | **Featured cell lacks a proof anchor.** After Founders names Microsoft / OpenAI / Google, the AI card has no bottom-anchored credibility line (e.g., regulated-finance production systems). The card’s extra padding reads as “important” but not “proven.” | J.P. Morgan–tier buyers need a proof beat between pedigree and pitch. |
| S3 | **All practice links land on generic `#contact`.** Clicking “Workflow Automation” and “AI & Intelligent Systems” opens the same destination with no subject prefill or scroll-to-context. Missed opportunity to continue the registry metaphor into the close. | Reduces felt specificity; weakens service → contact handoff. |
| S4 | **Text-only monotony across five rows.** Identical structure (index + title + tagline + meta) with no glyphs, subtle texture, or outcome metrics. Scan time ~400ms vs ~200ms for icon-anchored competitor catalogs. | Functional, not memorable. |
| S5 | **“5 practice areas” count is desktop-only.** `hidden lg:block` on the intro mono line removes a useful scan anchor on mobile where the list is longest. | Mobile users scroll ~900px of practices without a count cue. |

#### P2 — Polish

| # | Issue |
|---|-------|
| S6 | Intro sticky column (`lg:sticky lg:top-[calc(var(--nav-h)+2rem)]`) is elegant but the right column scrolls alone — on very tall viewports the intro can feel disconnected from the list tail. |
| S7 | Featured card always links to contact; registry rows hide `ArrowUpRight` on `lg` (opacity-0 until hover on mobile only). Desktop rows lack a persistent exit affordance. |
| S8 | `id="capabilities"` vs component name `Services` and nav label “Capabilities” — consistent with nav, but file/mental model split persists. |
| S9 | Cloud & Platform Engineering / Application Modernization titles remain category-generic at the **title** level (taglines rescue voice). |
| S10 | `bg-surface-sunken` → Contact `bg-surface-raised` is a good surface step; the transition could use a stronger seam cue (inset shadow or accent hairline) to mark “catalog → close.” |

### Recommendations

1. **Normalize section heading scale.** Demote Services H2 to `text-h2` (keep weight) or promote Contact H2 to `text-h1` so the finale matches or exceeds catalog prominence. Prefer promoting Contact — the close should win typographic priority.

2. **Add a featured proof footer.** One line below the AI tagline, `mt-auto` anchored:
   > *Production LLM systems for regulated financial institutions.*
   Do not name clients until legal clears.

3. **Deep-link handoff to Contact.** Append mailto query params or Contact URL hash fragments per practice, e.g. `#contact` with `?intent=ai-systems` reflected in a Contact subhead swap, or `mailto:...?subject=AI%20%26%20Intelligent%20Systems%20%E2%80%94%20Mavverik`.

4. **Add minimal scan glyphs (optional).** One 32px Lucide icon per row (`Brain`, `Database`, `Cloud`, `GitBranch`, `Layers`) at `strokeWidth={1.5}` in a bordered mono container — matches Signal Slate without reintroducing pill noise.

5. **Surface practice count on all breakpoints.** Move “5 practice areas” out of `lg:block` only; place under intro paragraph as `text-mono-sm` on mobile too.

6. **Label the featured card.** A single mono label — `Primary practice` — above the AI title closes the “why is this a card?” gap without badge clutter.

---

## Contact — 7.8 / 10

### Strengths

1. **Email-as-hero is the right conversion primitive.** Split display type (`contact@` / `mavverik.ai`) with accent underline on hover, plus `btn-primary` “Send an email,” gives both **parse** and **act** paths. Honest for a senior-team boutique — no fake form, no Calendly theater.

2. **Trust signals are well chosen.** “30-minute intro — no deck required,” “Senior engineers, not account managers,” “Reply within one business day” address enterprise objections (time, bait-and-switch, ghosting). Structure matches B2B best practice.

3. **Action card craft is on-brand.** Gradient fill, accent-mixed border, `--shadow-signal`, Mail icon in a bordered mono container, and `mono-label` “Email us directly” compose a **signal panel** — distinctly AI-native vs generic contact sections.

4. **Copy aligns with Hero promise.** “Talk to the team that ships” and “engineers who’d do the work” continue Hero’s production/regulatory narrative without repeating the headline verbatim.

5. **Intake hint is useful.** “Include your stack, timeline, and team size” replaces condescending “opens your mail client” copy — respects B2B literacy.

6. **Surface architecture supports the close.** `bg-surface-raised` on `section-seam` after Services’ sunken band creates a luminance lift. Accent glow (`--accent-glow`, blur 100px) adds depth without dark-band transplant.

### Issues

#### P0 — Conversion blockers

| # | Issue | Why it matters |
|---|-------|----------------|
| C1 | **Mobile buries the CTA.** Grid order is copy column first, action card second. On phone, users scroll through heading + lead + three trust bullets (~220–280px) before the email hero. For a section whose job is *one action*, the card should lead on small screens. | Direct revenue/leads impact on mobile traffic. |

#### P1 — High impact

| # | Issue | Why it matters |
|---|-------|----------------|
| C2 | **Hero CTA language diverges.** Hero primary: “Start a brief” → `#contact`. Contact offers “Send an email” and display mailto — no “brief” framing. Breaks narrative continuity at the handoff. | Micro-copy mismatch erodes trust at click-moment. |
| C3 | **Duplicate mailto targets.** Display email link and `btn-primary` both point to bare `mailto:contact@mavverik.ai` with no `subject` or `body` template. Two identical actions, no progressive specificity. | Wasted hierarchy; missed intake structuring. |
| C4 | **Heading scale under Services.** Contact H2 at `text-h2` vs Services at `text-h1` makes the finale feel like an appendix, not a destination. | See S1 — fix as a pair. |
| C5 | **Trust bullets compete at equal weight.** Three `text-body-sm` lines with identical dot markers — no primary vs supporting signal. “Reply within one business day” appears in trust list while footer repeats “Replies within one business day.” | Redundant proof; diluted hierarchy. |
| C6 | **Grid leaves an empty column.** `lg:col-span-5` + `lg:col-span-6 lg:col-start-7` = 11/12 cols. The missing column 6 gap may read as misalignment rather than intentional negative space. | Subtle “off-grid” feeling on wide screens. |

#### P2 — Polish

| # | Issue |
|---|-------|
| C7 | LinkedIn secondary CTA is appropriate but adds a second outbound path beside a section that should converge on email. Consider demoting to text link or footer-only if conversion analytics show split attention. |
| C8 | Email display hover reveals arrow at `opacity-0` — fine on desktop; on touch devices hover states don’t exist. `btn-primary` compensates, but the hero link may feel static on mobile. |
| C9 | Dot-grid at 12% + glow at 40% — both atmospheric elements at whisper strength. Commit to one (glow) or raise grid opacity; dual whispers read as unfinished texture. |
| C10 | No `prefilled mailto body` template despite hint copy asking for stack/timeline/team size — friction between instruction and action. |
| C11 | Motion is a single `fadeUp` on two columns — acceptable, not elevating. |

### Recommendations

1. **Mobile-first column order (P0).** On `< lg`, render the action card before the copy block:
   ```tsx
   className="flex flex-col-reverse lg:flex-col"
   ```
   Or reorder DOM with `order-2 lg:order-1` on copy and `order-1 lg:order-2` on card. Email hero should appear immediately after the section tag on phone.

2. **Unify Hero → Contact verb.** Either change Hero to “Send an email” or add Contact subhead / button variant “Start a brief” using the same `mailto:` with `?subject=Mavverik%20brief`.

3. **Differentiate the two mailto actions.**
   - Display link: plain `mailto:contact@mavverik.ai`
   - Primary button: `mailto:contact@mavverik.ai?subject=Mavverik%20intro&body=Stack%3A%0ATimeline%3A%0ATeam%20size%3A%0A`
   Pre-fill the intake fields the hint already requests.

4. **Promote Contact heading to `text-h1`.** Restore finale typographic priority over Services. Keep lead at `text-body` / `text-body-lg` so the scale jump lands on the headline, not the paragraph.

5. **Strengthen trust hierarchy.** Promote the strongest signal (“Senior engineers, not account managers”) to `text-body` weight; demote response-time to the hint/footer only — state it once.

6. **Resolve grid gap intentionally.** Either span action `lg:col-span-7 lg:col-start-6` for symmetry, or add a vertical accent rule in column 6 (`w-px bg-rule`) to make the gutter deliberate.

7. **Service → Contact continuity.** If Services implements intent handoff (S3), Contact should read the fragment and swap a mono label: `Discussing: Workflow Automation`.

---

## Cross-Section Observations

### Page rhythm (works)

```
Hero (surface) → Founders (slate-deep) → Services (surface-sunken) → Contact (surface-raised) → Footer (surface)
```

The dark Founders band provides punctuation. Services sunken → Contact raised is the correct light-mode cadence for a closing beat. Footer on `bg-surface` is close to Contact white — consider footer on `bg-surface-sunken` or a tighter `border-t border-rule-strong` to avoid a flat tail.

### Shared patterns (consistent)

- `section-tag` with accent dot
- `container-wide` + 12-col grid language
- Framer `fadeUp` + `useReducedMotion`
- `#contact` as universal conversion sink from nav, Hero, and Services

### Shared gaps

| Gap | Sections affected | Priority |
|-----|-------------------|----------|
| Typographic finale inversion | Services + Contact | **P1** |
| Service intent not carried to close | Services + Contact | **P1** |
| Mobile conversion order | Contact | **P0** |
| Proof density after Founders | Services (featured), Contact (lead) | **P1** |
| Mailto subject/body templates | Contact (+ Nav/Footer mailto) | **P1** |

---

## Priority Summary

| Priority | Services | Contact |
|----------|----------|---------|
| **P0** | — | Mobile CTA-first column order |
| **P1** | Heading scale vs Contact; featured proof line; practice-specific handoff; scan glyphs optional | Heading promotion; Hero verb alignment; differentiated mailto; trust hierarchy dedup; grid gap resolution |
| **P2** | Sticky intro disconnect; desktop row arrows; seam cue into Contact; title-level generic names | LinkedIn demotion; texture commit/cut; touch hover; mailto body template; motion |

---

## Target State

Fix **Contact P0** (mobile order) and **P1 pair** (heading scale + mailto handoff + Hero verb) first — that sequence moves the funnel from **competent** to **credible** without reintroducing bento complexity. Services is already at “ship it” quality for layout and voice; its highest ROI changes are a featured proof line and intent-aware links that make Contact feel like the natural next registry row, not a generic footer.

**Projected scores after P0+P1:** Services **8.7**, Contact **8.6**, Combined **8.7 / 10**
