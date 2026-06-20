# Design Review: Services Section (`app/sections/Services.tsx`)

**Reviewer lens:** Senior product/design critique for an enterprise technology consulting homepage.  
**Scope:** Bento layout, typography, copy, pills, section numbering, mobile, site consistency, enterprise clarity.  
**Date:** 2026-06-19

---

## DESIGN SCORE: **6 / 10**

The section shows editorial ambition — numbered header, bento grid, token discipline — and aligns with the Proof/Contact “chapter” pattern. But the bento math likely breaks on desktop, copy reads like a generic SI brochure, and the section competes with Proof instead of setting up a buyer journey. Visually competent; strategically undercooked for a JPMorgan/Barclays audience.

---

## Weaknesses

### Layout & bento grid

1. **Broken 12-column arithmetic (desktop).** The featured cell spans 7 columns × 2 rows. Row 1 correctly pairs it with Data (5 cols). Row 2 only has **5 free columns** (8–12), yet Cloud, Intelligent Automation, and Digital Transformation each declare `md:col-span-4` (12 cols total). CSS Grid will spill into an implicit third row or compress cells — the “two-row bento” is a layout bug, not a layout choice.
2. **Featured cell doesn’t earn its size.** Extra height and type scale are applied, but background, border treatment, and content depth are identical to siblings. The hero tile feels like “bigger box,” not “primary capability.”
3. **No escape hatch for content density.** Pill rows wrap unpredictably; cards with 4 tags (AI) vs 3 tags create uneven footer rhythm. No max-height or progressive disclosure — enterprise buyers scanning quickly get uneven visual weight at the bottom of each tile.
4. **Static tiles in an interactive site.** Industries uses `card-interactive`; Services articles have no hover affordance, no deep links, no “Learn more.” Dead-end cards after Hero’s strong CTA.

### Typography & visual hierarchy

5. **Display font is absent where it matters.** Hero and Proof use `--font-display` for high-impact type (headlines, client names, step indices). Service titles and ghost numbers use default semibold sans — the section feels like a component library demo, not the same brand voice.
6. **Triple redundancy on numbering.** Each card carries: (a) a giant ghost numeral at ~4% opacity, (b) an accent `01` in the meta row, and (c) the section header `02`. Three numeral systems in one viewport — decorative noise, not wayfinding.
7. **Inconsistent numeral opacity.** Section header ghost: `text-foreground/10`. Card ghost: `text-foreground/[0.04]`. Same motif, different commitment — reads unintentional.
8. **Weak h2 for the editorial system.** Proof: “Why Organizations Choose Us.” Contact: “Let’s build something great.” Services: **“What We Do”** — vendor-centric, vague, and the weakest headline in the numbered sequence.
9. **Featured vs standard type jump is modest.** Featured titles scale to ~2rem; standard use `text-h3` (1.5rem). The size delta doesn’t compensate for equal visual treatment elsewhere.

### Copy, naming & enterprise clarity

10. **Nav/overline mismatch.** Navigation anchor: “Services.” Overline: “Capabilities.” Users and SEO land on one label; the section introduces another.
11. **Mobile vs desktop intro copy diverge — badly.** Desktop aside: *“Five disciplines. One partner for enterprise transformation.”* Mobile-only paragraph: *“Comprehensive technology solutions to accelerate digital transformation and drive business innovation.”* The mobile string is longer, more cliché, and **contradicts** the tighter desktop line. Enterprise buyers on phones get the worst copy in the section.
12. **Service names are category labels, not buyer outcomes.**
    - *AI & Generative AI* — “Generative AI” redundant with “AI”; reads like a keyword stack.
    - *Cloud Solutions* — could be any MSP from 2018.
    - *Intelligent Automation* — fine, but paired with “RPA” pills signals legacy automation, not AI-native ops.
    - *Digital Transformation* — empty consulting filler; zero differentiation.
13. **Taglines mix strong and hollow lines.**
    - Strong-ish: *“Strategy through production — LLMs, agents, and enterprise AI at scale.”*
    - Weak: *“Modernize platforms, products, and architecture for what’s next.”* (“what’s next” is meaningless to a CIO approving budget.)
14. **Capability pills are feature nouns, not proof.** “Migration,” “Innovation,” “Integration,” “Warehousing” tell buyers **what bucket you have**, not risk reduced, time-to-value, or compliance posture. Compare Proof’s differentiator copy, which names outcomes (compliance-ready, business impact).
15. **Content duplication with Proof.** Proof already claims “AI-First Delivery,” “Accelerated Delivery,” “Outcome-Driven.” Services repeats the same territory with thinner pills — the homepage argues with itself.
16. **No enterprise trust signals in the section.** No mention of security, regulated industries, engagement models, or scale — all present elsewhere on the site or implied by Hero founders. Services reads like a capabilities slide, not a partner shortlist.

### Pills & micro-UI

17. **Pills are inert labels.** Same visual language as Proof’s industry tags (rounded-full, border-subtle, caption) but Proof tags hover; Services pills don’t. They look clickable and disappoint.
18. **Inconsistent abbreviation style.** “DevOps & K8s” next to spelled-out “Workflow Automation” — fine for engineers, uneven for a mixed executive/technical audience.
19. **Icon treatment is timid.** 16×16 muted stroke icons beside a 48px hairline divider — the icon doesn’t anchor the card; it’s visual lint.

### Section “02” header & site consistency

20. **Hero is unnumbered; Services is “02.”** Acceptable if intentional chapters, but Hero never establishes “01,” so “02” appears without context on first scroll — slightly arbitrary.
21. **Missing `aria-labelledby` on `<section>`.** Proof and Contact wire this; Services does not — inconsistent a11y pattern for the numbered-header family.
22. **No `useReducedMotion`.** Hero, Proof, and Contact respect reduced motion; Services always animates — inconsistent accessibility posture.
23. **Orphaned legacy sections.** Approach, WhyMaverick, Industries still exist with centered `section-header` pattern and overlapping copy. Services follows the newer editorial lane, but the **content model** across the repo is fragmented (not visible on homepage, but affects tone consistency if those sections return).

### Mobile

24. **Five full-height stacked cards = long scroll.** ~220–280px min-height × 5, plus header and mobile intro — heavy for a mid-page section before Proof.
25. **Featured hierarchy collapses on mobile.** `featured` only adds ~60px min-height and slightly larger type; the bento story disappears entirely — expected, but nothing replaces it (no “primary service” callout, no accordion, no swipe).
26. **Mobile intro placement.** Intro sits between header rule and grid; on desktop that slot is empty (aside is in header). Information architecture is split by breakpoint instead of unified.

---

## Proposed Design + Text Improvements

| # | Improvement | Specific recommendation | Priority |
|---|-------------|----------------------|----------|
| 1 | **Fix bento grid math** | Row 2: use three equal cells in the remaining 5 cols **or** change featured span to `md:col-span-6` with Data at 6, bottom row `4+4+4` beside a 6-col tall featured column — or move to a 6+6 top / 4+4+4 bottom layout that actually sums to 12. Verify at `md` and `lg` with no implicit row 3. | **P0 — Critical** |
| 2 | **Differentiate the featured tile** | Give AI cell subtle accent treatment: `bg-accent-subtle/40`, left accent bar, or display-font title. Add one proof line (“Deployed LLM systems for regulated financial institutions”) — even placeholder until case studies exist. | **P0 — Critical** |
| 3 | **Rewrite section headline + overline** | Overline: align with nav → **“Services”** (or nav → “Capabilities” — pick one). H2 options: **“Capabilities that ship in production”** / **“From strategy to production systems”** / **“What we build for enterprise teams.”** Drop “What We Do.” | **P0 — Critical** |
| 4 | **Unify mobile/desktop intro** | Single source string everywhere: e.g. *“Five integrated practices — AI, data, cloud, automation, and modernization — delivered by one team from discovery through scale.”* Remove the mobile-only boilerplate paragraph entirely. | **P0 — Critical** |
| 5 | **Rename services for buyer language** | AI & Generative AI → **“AI & Intelligent Systems”** · Data & Analytics → keep · Cloud Solutions → **“Cloud & Platform Engineering”** · Intelligent Automation → **“Automation & Workflow Intelligence”** · Digital Transformation → **“Application Modernization”** or **“Product & Platform Modernization”** | **P1 — High** |
| 6 | **Rewrite taglines for outcomes** | AI: *“From executive AI strategy to production LLMs and agents — governed, observable, and built for enterprise scale.”* Data: *“Pipelines and analytics that executives trust for daily decisions, not monthly reports.”* Cloud: *“Migrate, modernize, and operate cloud platforms with security and cost discipline built in.”* Automation: *“Replace manual handoffs with intelligent workflows integrated into your existing systems.”* Modernization: *“Rebuild legacy products and platforms without stopping the business.”* | **P1 — High** |
| 7 | **Upgrade capability pills to proof-oriented chips** | Replace thin nouns with scoped phrases: “AI Strategy & Roadmaps,” “Production LLM Apps,” “SOC 2–Aligned Data Pipelines,” “Zero-Downtime Migration,” “ERP + SaaS Integration.” Cap at 3 pills per card; link “+2 more” if needed. | **P1 — High** |
| 8 | **Collapse card numbering to one system** | Remove ghost numerals **or** remove accent meta numerals — not both. Prefer: small accent index in meta row only (matching Proof differentiators). Drop 5rem watermark unless used site-wide consistently. | **P1 — High** |
| 9 | **Apply display font to service titles** | `font-[family-name:var(--font-display)]` on h3, matching Proof step labels and Hero aside org names — instant brand cohesion. | **P2 — Medium** |
| 10 | **Add interaction model** | Whole card or pill row links to `#contact` with scoped subject, or to dedicated service anchors. Minimum: `card-interactive` + hover border/shadow consistent with Industries. | **P2 — Medium** |
| 11 | **De-duplicate vs Proof** | Map Services to **delivery domains** (what you build); keep Proof on **why you** (differentiators + clients). Remove overlapping themes: don’t repeat “AI-first” in both — Services should show stack depth; Proof shows trust. | **P2 — Medium** |
| 12 | **Strengthen meta row** | Replace hairline + tiny icon with: `[01] — AI & Intelligent Systems` in one line; move icon to 20px in a soft circle (`bg-surface-subtle border`) like Approach step circles — clearer scan path. | **P2 — Medium** |
| 13 | **Mobile: compress or prioritize** | Option A: show AI + accordion for 02–05. Option B: horizontal scroll snap row of cards with visible peek. Option C: 2-up grid on `sm` with AI full-width first. Reduce min-heights to ~180px for non-featured on mobile. | **P2 — Medium** |
| 14 | **Accessibility parity** | Add `aria-labelledby="services-heading"` on section; `id` on h2; respect `useReducedMotion` for fadeUp; ensure article headings describe service (already h3 — good). | **P2 — Medium** |
| 15 | **Section “02” context** | Either add subtle “01” treatment to Hero (scroll cue chapter) or renumber Services to “01” in the post-Hero sequence. If keeping 02, add screen-reader-only “Section 2 of 4.” | **P3 — Low** |
| 16 | **Pill hover honesty** | If non-clickable, remove hover-like border styling from pills; if clickable, add `role="list"` + links. Match Proof industry tag interaction model. | **P3 — Low** |
| 17 | **Enterprise footer line on grid** | Below bento, one line: *“Engagements range from 90-day pilots to multi-year platform programs — security, compliance, and knowledge transfer included.”* Bridges Services → Proof → Contact. | **P3 — Low** |

---

## Summary judgment

Services is the right **container** (editorial header, wide container, hairline bento frame) in the wrong **content and grid execution**. For an enterprise audience that Hero and Proof already prime with founder pedigree and named clients, this section must answer: *“What exactly will you build for us, and how is it different from every other AI/cloud shop?”* Today it answers with five interchangeable tiles, duplicated themes, and copy that could sit on any mid-tier consultancy site.

Fix the grid first — a broken bento undermines design credibility immediately. Then unify copy across breakpoints, sharpen names and taglines toward outcomes, and give the AI tile real visual and textual primacy. That moves the section from “capabilities checklist” to “credible enterprise partner menu.”
