# Proof Section — Design Review

**File:** `app/sections/Proof.tsx`  
**Reviewed:** 2026-06-19  
**Scope:** Split panel, client names, differentiators, approach timeline, industry tags, dark band, tone, mobile, Hero redundancy

---

## DESIGN SCORE: **5.5 / 10**

Proof is a competent consolidation of four legacy sections (Customers, WhyMaverick, Approach, Industries) into one scroll unit. The editorial section header and split card show intent. Execution falls short: the content reads like interchangeable consulting copy, the dark band delivers half the impact the design system promises, and the section repeats Hero’s credibility pattern without adding a distinct proof layer. It functions; it does not persuade.

---

## Weaknesses

### Split panel — **Priority: P1**

- The 5/12 dark + 7/12 light card is the right *idea* but the proportions fight the content. Four dense differentiator rows need horizontal space; the trust panel gets 42% width for three names and one line of copy — visually overweight for thin substance.
- The card is a box inside a box (`rounded-xl border` on `bg-surface`). On a page that already uses borders and grid rhythm (Hero aside, Services grid), this reads as “component library demo” rather than editorial layout.
- Left and right panels share one container with no vertical rhythm link — the dark panel’s bottom tagline (`max-w-[16rem]`) floats in dead space while the right panel runs long.

### Client names (JPMorgan, Barclays, Almaghreb Bank) — **Priority: P0**

- **Credibility gap:** Text-only names with no logos, no engagement type (client / partner / project), and no supporting detail. Enterprise buyers assume logo walls or case-study links; bare names invite “did they actually work there?”
- **Naming inconsistency:** “JPMorgan” without “Chase” or “J.P. Morgan” looks casual next to “Barclays.” Pick the formal brand form and stick to it.
- **Weak third:** Almaghreb Bank is unknown to most visitors. Next to two global Tier-1 names it reads as geographic padding, not peer proof.
- **Hero echo:** Hero already name-drops Microsoft, OpenAI, Google as founder credentials. Proof immediately repeats the “big names in a vertical list” pattern three sections later. Same device, different label (“Founded by” vs “Trusted by”) — user learns the trick twice.
- **Unused design system:** `globals.css` defines `.proof-clients`, `.proof-client-name`, `.section-impact` — none are used. The partial `bg-foreground` panel is an ad-hoc dark band, not the impact section the tokens describe.

### Differentiators copy — **Priority: P0**

- **Generic to the point of invisible:** “Intelligence embedded from strategy through implementation,” “compliance-ready architecture,” “outcome-focused sprints,” “business impact — revenue, efficiency, and resilience” could appear on any Big Four slide deck unchanged.
- **Recycled from WhyMaverick:** Four of seven legacy value props survive verbatim in title and near-verbatim in body. Consolidation should have *tightened* messaging, not relocated it.
- **Misaligned with Hero:** Hero promises “AI-Native & Cloud-First.” Differentiators lead with “AI-First Delivery” and omit cloud entirely — a messaging fracture on a four-section page.
- **No proof in “Proof”:** Nothing here is evidenced (metrics, outcomes, named programs). The section title promises justification; the body delivers positioning.

### Approach timeline — **Priority: P2**

- **Labels without substance:** Discover → Design → Build → Scale is agency-template vocabulary. The legacy `Approach.tsx` at least had one-line descriptions per step; this version stripped them and added nothing back.
- **Orphan block:** Sitting below the main card with only a top border, it feels appended — a fourth mini-section inside a section already doing three jobs.
- **Animation theater:** The accent progress line runs on `lg+` only; mobile gets numbered dots in a 2×2 grid with no connectors and no copy. Desktop gets arrows *and* a line — redundant connectors.
- **Subtitle dead weight:** “End-to-end partnership, one disciplined rhythm” asserts rhythm without showing it.

### Industry tags — **Priority: P2**

- **Decorative, not informative:** Non-interactive `<span>` pills with `hover:` states imply clickability they don’t have — minor UX lie.
- **Redundant with clients:** “Financial Services” tag directly below a panel naming two global banks. Say something the client list doesn’t already say.
- **Truncated vs legacy:** Five tags vs eight in `Industries.tsx` — reads arbitrary, not curated.
- **Lowest visual investment on the page:** Caption-sized pills after two stronger blocks. Capstone should land; this fizzles.

### Dark band impact — **Priority: P1**

- **Half-measure:** Only the left column is `bg-foreground`. The section wrapper stays `bg-surface`. Contact gets a full `#050505` band; Proof gets a postcard-sized dark rectangle — maximum contrast, minimum commitment.
- **Underwhelming relative to tokens:** CSS comments literally say “Impact section — dark band for Proof,” but the component ignores `.section-impact`. Visual language is defined and abandoned.
- **Text hierarchy on dark:** Client names at `text-background/80` on hover soften instead of sharpen. Supporting copy at `text-background/45` is near illegible on some displays. The dark panel should feel premium; it feels muted.

### Text tone — **Priority: P1**

- **Headline vs overline conflict:** Overline says “Proof”; H2 says “Why Organizations Choose Us”; right-rail says “Trust, differentiation, and a proven delivery rhythm”; differentiator subhead says “Why Maverick.” Four labels, one job — none of them say *what was proven*.
- **Corporate passive voice:** “Why Organizations Choose Us” is third-person market research, not Maverick speaking. Hero is direct (“We help forward-thinking organizations…”); Proof retreats into brochure-speak.
- **Hidden context on mobile:** The only synthesizing sentence (“Trust, differentiation…”) is `hidden lg:block`. Mobile users get the headline with no framing line.

### Mobile — **Priority: P1**

- **Long vertical stack:** Dark trust block → four divided differentiator rows → 2×2 approach → wrapped tags. Proof is easily the longest single section on mobile despite being section 03 of 04.
- **Split panel collapse:** Stacking dark-on-top is conventional but puts the weakest content (three names) first and forces scroll before value props — inverted priority for small screens.
- **Density without relief:** No imagery, no pull quotes, no single stat break. Four `divide-y` rows on a phone is a wall of sameness.
- **Touch targets:** Industry pills use `text-caption` padding — below comfortable tap size if they ever become links.

### Redundancy with Hero — **Priority: P0**

| Element | Hero | Proof | Problem |
|--------|------|-------|---------|
| Name list | Microsoft, OpenAI, Google | JPMorgan, Barclays, Almaghreb | Same typographic trust device twice |
| AI positioning | “AI-Native” headline | “AI-First Delivery” | Synonym stacking, no new angle |
| Security / enterprise | “forward-thinking organizations,” enterprise consulting overline | “Enterprise Security,” “Global institutions” | Same audience, same adjectives |
| Credential framing | Founder experience | Client trust | User can’t tell which names matter more |

Hero establishes *who built the firm*; Proof should establish *what the firm delivered*. Today both are name lists plus adjectives.

---

## Proposed Design + Text Improvements

| # | Area | Proposal | Priority |
|---|------|----------|----------|
| 1 | **Section strategy** | Split Proof into two beats: (A) **Evidence** — clients + one quantified outcome each, (B) **Method** — 3 differentiators max + approach. Drop industry tags from this section or merge into Services. One section should not carry four narratives. | **P0** |
| 2 | **Client panel** | Use formal names + logos (monochrome SVG) or remove logos and add one concrete line per client (“Core banking modernization,” “Risk platform on Azure,” etc.). Replace Almaghreb with a recognizable name or drop to two clients — two strong beats three weak. Add footnote: “Selected engagements” if legal requires. | **P0** |
| 3 | **Differentiators** | Cut to **3** items tied to Hero: **AI-Native delivery**, **Cloud-first architecture**, **Measurable outcomes**. Each body line must include a *specific* — e.g. “Production LLM deployments in 90-day cycles, not slide decks.” Retire “Enterprise Security” as a standalone pillar; fold one sentence into a client proof point if compliance matters. | **P0** |
| 4 | **Headline + tone** | Replace “Why Organizations Choose Us” with outcome-led copy: **“Built for institutions that cannot afford experiments.”** or **“Results at enterprise scale.”** Match Hero’s first-person voice: “We’ve delivered…” not “Organizations choose…” | **P0** |
| 5 | **Dark band** | Commit fully: either apply `.section-impact` to the **entire** split card (both panels on dark, differentiators in `impact-muted` text) *or* drop the dark panel and use Hero-style accent border on a light client list. Half-dark is the worst of both. | **P1** |
| 6 | **Split panel layout** | Flip ratio to **4/8 or 3/9** — give differentiators room. Or stack horizontally on desktop: client names as a single row *above* the card (like a slim trust strip), card dedicated entirely to differentiators. | **P1** |
| 7 | **Approach timeline** | Restore one verb-led clause per step (max 8 words) or remove the block and link to a case study. If kept, integrate *inside* the right panel as a footer row — not a third bordered zone. Kill the animated line; use a simple numbered list on mobile and desktop. | **P2** |
| 8 | **Industry tags** | Remove from Proof **or** show 3 industries with icons matching Services/Hero visual language, tied to client examples (“Financial Services — JPMorgan, Barclays”). Delete hover on non-links. | **P2** |
| 9 | **Mobile order** | On `max-lg`, show differentiators **before** client names, or collapse clients to a single horizontal scroll strip at the bottom. Lead with substance, not logos/names. Surface the synthesizing tagline at all breakpoints. | **P1** |
| 10 | **Hero de-duplication** | Differentiate the trust mechanisms: Hero = **founder pedigree** (people); Proof = **client outcomes** (work). Never reuse vertical name-list layout — use logos, metrics, or a single client quote in Proof. | **P0** |
| 11 | **Proof-specific content** | Add at least one hard proof element: deployment stat, compliance badge, client quote, or before/after metric. Without it, rename the section “Why Maverick” and stop pretending “Proof” means proof. | **P0** |
| 12 | **Design system cleanup** | Either wire up `.proof-clients` / `.section-impact` tokens or delete dead CSS. Consistency matters when Contact uses the full dark treatment. | **P2** |

---

## Sample Copy Direction (not final)

**Headline:** Results at enterprise scale  
**Subhead (visible all breakpoints):** Selected clients, how we work, and where we’ve delivered.

**Clients (with substance):**
- J.P. Morgan — *[specific program or outcome]*
- Barclays — *[specific program or outcome]*

**Differentiators (3):**
1. **AI-Native from day one** — Production models and agents, not pilot purgatory.  
2. **Cloud-first architecture** — Azure, AWS, and hybrid — built to pass enterprise review.  
3. **Outcomes, not outputs** — Measured on uptime, revenue lift, and time-to-production.

**Approach (inline, optional):**  
Assess → Architect → Ship → Operate — with one line each, or cut entirely.

---

## Summary

Proof is structurally ambitious but content-poor. The split panel and section numbering show editorial awareness; the copy and partial dark band undo it. The highest-leverage fixes are **P0**: make “Proof” actually prove something, deduplicate Hero’s name-list pattern, and rewrite differentiators with specifics tied to the AI-Native / Cloud-First promise. Without that, this section is a compressed WhyMaverick with a black sidebar — not a credibility engine.
