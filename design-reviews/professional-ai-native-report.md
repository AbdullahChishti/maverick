# Mavverik — Professional AI-Native Design Critique (Master Report)

**Date:** 2026-06-20  
**Scope:** Full homepage — Signal Slate design system, four-section funnel, chrome (Navigation, Footer), metadata  
**Sources:** `critique-typography-color.md`, `critique-hero.md`, `critique-founders.md`, `critique-services-contact.md`, `critique-copy-sections.md`  
**Stack verified:** `app/page.tsx`, `globals.css`, `tailwind.config.ts`, `layout.tsx`, all section components  
**Review only — no code changes, no commit**

---

## Executive Summary

Mavverik has a **credible, differentiated foundation** for a regulated enterprise AI consultancy. The Signal Slate palette (cool zinc surfaces, deep slate ink, teal regulatory accent) and IBM Plex trio communicate institutional seriousness without the generic purple-gradient AI cliché. The four-section architecture — Hero → Founders → Capabilities → Contact — is the correct information budget for a senior, founder-led boutique.

The site falls short of world-class primarily on **execution consistency and narrative discipline**, not brand direction:

1. **Hero overload** — Four parallel narrators (subhead, journey timeline, SignalGraph caption, status strip) restate the same “architecture → production” arc before the user scrolls. The hero behaves like a compressed homepage instead of a promise surface.
2. **Credibility gap** — Founders owns pedigree correctly but shows org wordmarks without people, names, or verifiable artifacts. Enterprise procurement will stall here.
3. **Copy duplication** — Hero subhead ≈ footer tagline; “architecture review → production” appears 5+ times; “AI-native consulting” lives only in the footer coda while the page sells “Production AI the regulators sign off on.”
4. **Type system drift** — Token scale exists but Services/Founders use `text-h1` for section headings, inverting finale hierarchy vs Contact. Six mono sizes and failing contrast pairs (`--ink-faint`, `--on-slate-muted`) undermine accessibility and polish.
5. **Conversion friction** — Contact buries the action card on mobile; Hero pushes CTAs below the fold; mailto actions lack subject/body differentiation.

**Composite score: 7.5 / 10** — materially above a default Tailwind marketing page, not yet Linear/Stripe/Vercel tier.

**Target after P0 + P1 fixes: ~8.7 / 10** without changing fonts, palette, or section count.

---

## Overall Scores

| Dimension | Score | One-line read |
|-----------|------:|---------------|
| **Typography** | **7.3** | IBM Plex trio is premium; hierarchy drift and six mono sizes break the ramp |
| **Color** | **8.0** | Signal Slate is distinctive and well-tokenized; muted tiers fail WCAG AA |
| **Layout** | **7.8** | 12-col editorial grid is mature; hero density and Contact mobile order hurt |
| **Copy** | **7.1** | H1 and Services voice are strong; deduplication and split positioning weaken |
| **Sections** | **7.9** | Four-section funnel is correct; Founders thin for nav weight |
| **Visual appeal** | **7.5** | Restrained Swiss minimalism lands; hero widget framing and glow undercut |

### Per-section scores (synthesized)

| Section / Area | Overall | Layout | Visual appeal | Copy | Conversion |
|----------------|--------:|-------:|--------------:|-----:|-----------:|
| **Hero + SignalGraph** | 7.1 | 7.5 | 7.0 | 6.0 | 6.5 |
| **Founders** | 7.8 | 8.5 | 8.7 | 6.5 | — |
| **Services / Capabilities** | 8.2 | 8.5 | 8.5 | 8.0 | 7.0 |
| **Contact** | 7.8 | 7.5 | 8.5 | 7.0 | 7.5 |
| **Navigation** | 8.0 | — | — | 8.0 | 8.0 |
| **Footer** | 6.5 | — | — | 6.0 | — |
| **Design system (type + color)** | 7.4 | — | 8.0 | — | — |

---

## Cross-Cutting Themes

### 1. Narrative repetition without escalation

The “architecture review → production” arc and “accountable / one senior team” themes appear in Hero (×4), metadata, footer, Founders blockquote, Services intro, and Contact lead. Each section should **advance** the story, not restate it:

```
Hero      → promise (what)
Founders  → pedigree (who)
Services  → scope (how)
Contact   → action (start)
```

Current state: Hero and footer both own the same promise sentence; Hero internal widgets triple the journey metaphor.

### 2. Split brand frame: regulatory vs AI-native

| Frame | Where it lives | Strength |
|-------|----------------|----------|
| Production AI / regulators sign off | H1, title, OG | **Primary** — clear, differentiated |
| Governed / audit-ready | Hero strip, Services, Founders | Strong supporting proof |
| AI-native consulting | Footer coda, keywords only | **Orphan** — never argued on-page |

**Resolution:** Choose regulatory-led (recommended) or AI-native-led; make the subordinate frame explicit in one hero overline + footer coda + metadata — not two unconnected drafts.

### 3. Type hierarchy inversion

Hero `text-display` → section `text-h2` → card `text-h3` is the intended ramp. Services and Founders section headings use `text-h1`, making the catalog louder than the Contact finale. Contact email uses ad-hoc clamp instead of a token.

### 4. Accessibility vs aesthetic minimalism

`--ink-faint` (2.35:1) and `--on-slate-muted` (2.79:1) fail WCAG AA on live copy — footer copyright, Services row indices, Founders credential details. For a regulatory brand, this is a credibility risk, not a polish item.

### 5. Proof architecture ahead of content

Visual craft (dark band, registry panels, motion, a11y) exceeds content depth (no founder names, text-only org cards, no client proof). Design is production-grade; credibility content is pre-launch placeholder.

### 6. Conversion path fragmentation

- Hero: “Start a brief” → Contact: “Send an email”
- All Services rows → generic `#contact` (no intent handoff)
- Two identical bare mailto links in Contact
- Mobile: copy column before action card

### 7. What’s working — preserve these

- Signal Slate palette and teal accent discipline
- IBM Plex font pairing
- Four-section order (Founders before Capabilities)
- Services registry layout and copy voice
- Founders dark band as single punctuation beat
- Motion + `prefers-reduced-motion` baseline
- Nav IA (Founders · Capabilities · Contact)
- Hero H1: *“Production AI the regulators sign off on.”*

---

## Prioritized Fix List

### P0 — Fix before sharing with buyers or investors

| # | Issue | Location | Action |
|---|-------|----------|--------|
| P0-1 | Hero narrates journey four times | Hero | Remove journey timeline, status strip, and SignalGraph figcaption; keep one subhead |
| P0-2 | Hero subhead ≈ footer tagline | Hero, Footer | One canonical “one senior team…” line (Hero only); footer gets distinct positioning tagline |
| P0-3 | Split brand frame | Hero/H1 vs footer coda | Unify regulatory-led OR AI-native-led positioning across hero tag, footer, metadata |
| P0-4 | No founder names / titles | Founders | Add names + former titles, or monochrome logomarks + scoped roles; org-only fails procurement |
| P0-5 | Metadata pedigree leak | `layout.tsx` | Remove Microsoft/OpenAI/Google from description; align social preview with on-page story |
| P0-6 | WCAG AA failures on live text | `globals.css` tokens | Raise `--ink-faint` and `--on-slate-muted` contrast OR restrict to decorative-only |
| P0-7 | Contact mobile buries CTA | Contact | Action card first on `< lg`; email hero immediately after section tag |

### P1 — Materially improves clarity, trust, and conversion

| # | Issue | Location | Action |
|---|-------|----------|--------|
| P1-1 | Section headings use `text-h1` | Services, Founders | Demote to `text-h2`; promote Contact H2 to `text-h1` (finale wins) |
| P1-2 | CTAs below fold on hero | Hero | Move CTAs to `mt-grid-6` under subhead; remove journey gap |
| P1-3 | H1 orphan line break | Hero | Reading-driven breaks: `Production AI` / `the regulators sign off on.` |
| P1-4 | SignalGraph reads as widget | Hero, SignalGraph | Remove bordered card, glow, center checkmark, `signal-drift`; editorial figure on dot-grid |
| P1-5 | Org names stated 3× | Founders | Drop “Microsoft · OpenAI · Google” from panel header; cards carry weight |
| P1-6 | Org detail typography too quiet | Founders | Bump to `text-body` / `text-on-slate-soft`; fix muted contrast |
| P1-7 | Hero → Contact verb mismatch | Hero, Contact | Unify “Start a brief” with mailto `?subject=Mavverik%20brief` or align button copy |
| P1-8 | Duplicate mailto actions | Contact | Display link plain; button pre-fills subject + body template |
| P1-9 | “Reply within one business day” duplicated | Contact, Footer | Keep in Contact trust list only |
| P1-10 | Services featured lacks proof anchor | Services | One bottom-anchored line: production LLM systems for regulated finance |
| P1-11 | Practice links generic | Services → Contact | Intent hash or mailto subject per practice |
| P1-12 | Mono size fragmentation (6 sizes) | All chrome | Consolidate to two tokens: `mono-sm` (11px labels), `mono` (12px UI) |
| P1-13 | `--accent` used for text on light | Services hovers | Rule: accent = decorative; accent-deep = text and interactive fill |
| P1-14 | Hero section tag wastes a line | Hero | Replace `Mavverik` with category overline or remove |
| P1-15 | Founders blockquote echoes Hero | Founders | Rewrite to pedigree-specific close (see specs below) |
| P1-16 | “Meet the team” ≠ nav “Founders” | Hero CTA | Align to `Meet the founders` |

### P2 — Polish and differentiation

| # | Issue | Location | Action |
|---|-------|----------|--------|
| P2-1 | Sans for registry row titles | Services, Founders | `font-sans font-semibold` on dense list titles for AI-native system-UI feel |
| P2-2 | Contact inline styles | Contact | Replace with utility classes matching `.cap-card-featured` |
| P2-3 | `themeColor` stays light on Founders scroll | `layout.tsx` | Dynamic or dark value for slate band |
| P2-4 | Founders → Services transition | Founders | Bottom seam or gradient fade at band exit |
| P2-5 | Registry panel opacity invisible | Founders | `bg-slate-mid/55` or border-only |
| P2-6 | Practice count hidden on mobile | Services | Surface “5 practice areas” on all breakpoints |
| P2-7 | Optional scan glyphs on Services rows | Services | 32px Lucide icons in mono containers |
| P2-8 | Footer / Contact visual merge | Contact, Footer | Footer on sunken surface or stronger `border-t` |
| P2-9 | LinkedIn splits Contact attention | Contact | Demote to text link if analytics show split |
| P2-10 | Scroll-spy threshold (88) vs `--nav-h` (72) | Navigation | Align to token |
| P2-11 | Footer wordmark duplicates nav | Footer | Tagline-only left column |
| P2-12 | Dual atmospheric whispers | Contact | Commit to glow OR dot-grid, not both at low opacity |

---

## Design Direction Brief

**Target:** Modern, minimal, visually appealing, professional **AI-native company** for regulated enterprise buyers.

### Brand personality

| Attribute | Expression | Avoid |
|-----------|------------|-------|
| **Governed** | Teal accent as “signal / approved”; mono labels as audit trail | Purple gradients, glassmorphism, orb glows |
| **Senior** | IBM Plex serif for display; restrained motion; no stock photography | Startup display fonts, illustration clutter |
| **AI-native** | Registry/catalog layouts; system-of-record metaphors; LLM/agent vocabulary in copy | Generic “digital transformation” boilerplate |
| **Minimal** | One message per section; whitespace as confidence | Parallel widgets telling the same story |
| **Credible** | Named people, scoped roles, verifiable proof | Org keyword padding without identity |

### Visual language (keep)

- **Palette:** Signal Slate — `--surface` / `--surface-sunken` / `--surface-raised` light cadence; `--slate-deep` single dark band
- **Accent:** `#00A88E` decorative; `#007A68` (`accent-deep`) for text and buttons
- **Type:** IBM Plex Serif (display + section headers), Sans (body), Mono (labels, nav, buttons)
- **Layout:** 12-col `container-wide`, editorial sticky sidebar (Services), unified registry panels
- **Motion:** Staggered fade-up; line-draw on graph path; global reduced-motion respect
- **Texture:** Dot-grid at 15–25% opacity; rule borders; no glow blobs except Contact finale (subtle)

### Visual language (change)

- Hero: promise surface only — tag, H1, one subhead, CTAs, optional graph (no journey, strip, caption)
- Hierarchy: strict display → h2 → h3 → body ramp; Contact finale typographically loudest
- Proof: people-first in Founders; logos as secondary recognition
- Copy: one arc expression per section; deduplicated chrome

### Positioning recommendation (regulatory-led)

**Primary frame:** *Production AI the regulators sign off on.*  
**Supporting frame:** AI-native delivery (governed LLM agents, production systems — not pilot decks)  
**Hero overline:** `AI-native consulting` OR remove tag entirely  
**Footer coda:** `Governed AI for teams that answer to regulators.` — not a second hero subhead

### Reference bar

| Peer | What to borrow | What Mavverik already matches |
|------|----------------|-------------------------------|
| **Linear** | Single-message hero; strict type ramp | Token system, motion discipline |
| **Stripe** | Named leaders with titles | — (gap) |
| **Vercel** | Editorial section rhythm, dark band punctuation | Founders band, surface cadence |
| **Sierra / AI consultancies** | Founder-led narrative, specific product claims | Services copy voice |

---

## Per-Section Implementation Specs

Implementers should treat each block as a checklist. Copy strings marked **→** are suggested replacements.

---

### Global — Design system (`globals.css`, `tailwind.config.ts`)

| Task | Spec |
|------|------|
| Contrast fix | `--ink-faint`: `#94a3b8` → `#7b8da3` (~3.5:1) OR ban from text, decorative only |
| Dark band contrast | `--on-slate-muted`: `#64748b` → `#8b9cb3` (~4.5:1 on `--slate-deep`) |
| Accent rule | Document: `--accent` never for text on light; `--accent-deep` minimum for text/fills |
| Type ramp enforcement | Hero: `text-display` · Sections: `text-h2` · Cards/rows: `text-h3` or `text-h4` |
| New token | `text-display-sm` for Contact email (replace inline clamp) |
| Mono consolidation | Labels: `mono-sm` (11px) · UI chrome: `mono` (12px) · eliminate 10px/0.68rem/0.7rem one-offs |
| Optional | Sans semibold for registry row titles (`h4` in lists) |

---

### Navigation (`Navigation.tsx`)

| Element | Current | Target |
|---------|---------|--------|
| Links | Founders · Capabilities · Contact | **Keep** |
| CTA | Start a brief | **Keep** — align mailto with Contact brief template |
| Logo size | `text-[1.25rem]` ad-hoc | Tokenize (`text-h4` or `text-brand`) |
| Scroll spy | `rect.top <= 88` | `rect.top <= calc(var(--nav-h) + 16px)` |
| Email (lg+) | contact@mavverik.ai | **Keep** — optional hide if footer always visible (P2) |

---

### Hero (`Hero.tsx`, `SignalGraph.tsx`)

**Job:** Promise + primary CTA only. No vendor names, no pedigree, no scope lists.

#### Target structure

```
[category tag]          optional — "AI-native consulting" not "Mavverik"
[H1 promise]            2 lines max
[one subhead]             accountability — no journey verbs
[primary CTA]             + optional text-link secondary
[SignalGraph]             right column / mobile punctuation — no caption
```

#### Copy spec

| Element | Current | → Target |
|---------|---------|----------|
| Section tag | Mavverik | `AI-native consulting` or remove |
| H1 lines | Production AI / the regulators / sign off on. | `Production AI` / `the regulators sign off on.` |
| Subhead | One senior team, accountable from architecture review to production. | `One senior team. Accountable from first review to sign-off.` |
| Primary CTA | Start a brief → #contact | **Keep** |
| Secondary CTA | Meet the team → #founders | `Meet the founders` as text link, or remove |
| Journey timeline | 01 Start / 02 Live | **Remove** → relocate to Services intro if needed |
| Status strip | 3 uppercase chips | **Remove** → merge chips into Services/Founders headers (max 1 each) |
| Figcaption | Architecture review → production sign-off | **Remove** — node labels sufficient |

#### Layout spec

| Property | Current | Target |
|----------|---------|--------|
| CTA margin | `mt-grid-10` after journey | `mt-grid-6` directly under subhead |
| min-height | `min-h-[100dvh]` | Keep only if tag + H1 + subhead + CTA fit above fold at 768×1024 |
| Grid | 6+6 cols | **Keep** split; simplify copy column |

#### SignalGraph spec

| Change | Rationale |
|--------|-----------|
| Remove outer bordered card wrapper | Editorial figure, not dashboard widget |
| Remove `blur-3xl` accent glow | Align with hero backdrop restraint |
| Remove center checkmark (35% opacity) | Glyph noise |
| Keep `animate-line-draw` on path | Motion = data arriving |
| Drop `signal-drift` on SVG | Governance tone, not floating UI |
| Scale to `max-w-lg` on xl | Balance empty right column |
| `aria-hidden="true"` on decorative wrapper | **Keep** |

---

### Founders (`Founders.tsx`)

**Job:** Sole owner of Microsoft / OpenAI / Google pedigree. Dark band credibility moment.

#### Copy spec

| Element | Current | → Target |
|---------|---------|----------|
| Section tag | Founders | **Keep** |
| H2 | Built the systems your enterprise already runs on. | Soften if no names: `From the teams that built yours` |
| Lead paragraph | (current — strong) | **Keep** — best paragraph on page |
| Panel header right | Microsoft · OpenAI · Google | **Remove** — redundant with cards |
| Panel header left | Former leadership | `Where they built` or keep if names added |
| Org cards | Text-only org names | **Path A (preferred):** Name + Former Title + one artifact per column |
| Blockquote | One founding team — the engineers who… | `The same engineers who passed Fortune 100 security review now architect yours — no handoff, no junior bench.` |

#### Layout spec

| Property | Target |
|----------|--------|
| H2 scale | `text-h2` (demote from `text-h1`) |
| Org name (if people added) | `text-h4 font-display text-on-slate` |
| Org label (demoted) | `text-body-sm font-mono uppercase text-on-slate-muted` |
| Detail lines | `text-body font-medium text-on-slate-soft` |
| Indices 01–03 | **Remove** or switch to semantic `<ol>` |
| Band exit | Add `border-b border-[var(--rule-slate)]` or 24px gradient fade |
| Registry panel | Test `bg-slate-mid/55` or border-only (no fill) |
| Optional | 8–12% `--accent-glow` ellipse behind registry |

#### Metadata (`layout.tsx`)

| Field | Current | → Target |
|-------|---------|----------|
| description | …engineers from Microsoft, OpenAI, and Google… | `One senior team accountable from architecture review to governed production AI in regulated enterprises.` |
| OG description | brandTagline only | **Keep** tagline; remove org names from meta |

---

### Services / Capabilities (`Services.tsx`)

**Job:** Scope of work — “what we build.” Registry catalog for enterprise scanning.

#### Copy spec (keep — strongest section)

| Element | Assessment |
|---------|------------|
| Section tag | Capabilities — **keep** |
| H2 | What we build for enterprise teams. — **keep** (demote to `text-h2`) |
| Intro | Five practices, one accountable team… — **keep** |
| Featured AI | Built for the risk review, not the pilot deck — **keep** |
| Featured proof footer | **Add:** `Production LLM systems for regulated financial institutions.` |
| Featured label | **Add mono:** `Primary practice` |

#### Layout spec

| Property | Current | Target |
|----------|---------|--------|
| H2 | `text-h1` | `text-h2 font-semibold` |
| Featured h3 | `text-h2` | `text-h3` |
| Practice count | `hidden lg:block` | Visible all breakpoints under intro |
| Row links | `#contact` generic | `#contact?intent=ai-systems` or mailto subject per practice |
| Row titles | Serif h4 | Optional: `font-sans font-semibold` |
| Desktop row affordance | Arrow hidden until hover | Consider persistent subtle arrow (P2) |
| Seam into Contact | Color step only | Optional inset shadow or accent hairline at section bottom |

#### Optional enhancements (P2)

- 32px Lucide icon per row in bordered mono container
- Sticky intro disconnect on very tall viewports — acceptable

---

### Contact (`Contact.tsx`)

**Job:** Single conversion moment. Email-as-hero.

#### Copy spec

| Element | Current | → Target |
|---------|---------|----------|
| Section tag | Contact | **Keep** |
| H2 | Talk to the team that ships. | `Talk to the engineers who'd do the work.` |
| Lead | (current — strong) | **Keep** |
| Trust bullets | 3 equal-weight lines | Promote “Senior engineers…” to `text-body`; demote response-time |
| Response time | Contact + footer | **Contact only** |
| Primary button | Send an email | `Start a brief` OR keep with mailto template |
| Hint | Include stack, timeline, team size | **Keep** — wire into mailto body |

#### Layout spec

| Property | Current | Target |
|----------|---------|--------|
| H2 scale | `text-h2` | `text-h1` — finale wins typographic priority |
| Mobile column order | Copy first, card second | **Card first** on `< lg` via `flex-col-reverse` or `order-*` |
| Grid | 5 + 6 cols (11/12) | Span 7 cols or add vertical rule in gutter column |
| Email display | Inline clamp | `text-display-sm` token |
| Inline styles on card | borderColor, gradient, shadow | Replace with `.cap-card-featured` utilities |
| Intent label | — | If Services passes hash: mono `Discussing: {practice}` |

#### Mailto spec

| Action | URL |
|--------|-----|
| Display email link | `mailto:contact@mavverik.ai` |
| Primary button | `mailto:contact@mavverik.ai?subject=Mavverik%20brief&body=Stack%3A%0ATimeline%3A%0ATeam%20size%3A%0A` |
| Nav CTA | Same as primary button |

---

### Footer (`Footer.tsx`)

**Job:** Wayfinding + one positioning line. Not a second hero.

#### Copy spec

| Element | Current | → Target |
|---------|---------|----------|
| Tagline | One senior team, accountable from architecture review to governed systems in production. | `Governed AI for teams that answer to regulators.` |
| Direct line sub | Replies within one business day. | `Tell us your stack and timeline.` |
| Copyright coda | AI-native consulting for the enterprise | Merge with primary frame: `Production AI · governed by design` |
| Wordmark | Mavverik (duplicates nav) | Tagline-only column (P2) |

#### Layout spec

| Property | Target |
|----------|--------|
| Surface | `bg-surface-sunken` or stronger `border-t border-rule-strong` — distinct from Contact raised |
| Nav links | Founders · Capabilities · Contact — **keep** |
| LinkedIn | Contact only — **keep** dedup |

---

## Implementation Sequence

Recommended order for maximum ROI without rearchitecture:

```
Phase 1 — Narrative (P0 copy)
  ├── Hero: remove journey, strip, figcaption
  ├── Hero/footer dedup + positioning unification
  ├── layout.tsx metadata cleanup
  └── Founders: add names OR logomarks

Phase 2 — Conversion (P0 UX)
  ├── Contact mobile card-first
  ├── Mailto subject/body templates
  └── Hero CTA placement under subhead

Phase 3 — System (P0 a11y + P1 type)
  ├── Token contrast fixes
  ├── Section heading scale normalization
  └── Mono size consolidation

Phase 4 — Polish (P1 + P2)
  ├── SignalGraph de-card
  ├── Founders blockquote + org dedup
  ├── Services proof footer + intent links
  └── Footer surface + copy pass
```

**Projected outcome:** Composite **8.7 / 10** after Phases 1–3; **9.0+** with founder names and logos in Phase 1.

---

## Verdict

| Question | Answer |
|----------|--------|
| Is the design direction right? | **Yes.** Signal Slate + IBM Plex + registry layouts fit regulated AI-native consulting. |
| Is the section architecture right? | **Yes.** Four sections in current order — do not add or merge. |
| What’s the biggest gap? | **Content credibility** (no people) and **hero narrative discipline** (four widgets, one story). |
| Should fonts or palette change? | **No.** Tighten execution: hierarchy, contrast, deduplication. |
| Ship blockers? | P0 contrast, hero duplication, footer/hero promise overlap, Founders without names, Contact mobile order. |

---

*Consolidated from five parallel design critiques. Review only — no site components edited, no commit.*
