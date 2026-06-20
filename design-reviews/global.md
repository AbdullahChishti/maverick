# Global Design Review — Maverick

**Scope:** `app/globals.css`, `tailwind.config.ts`, `app/layout.tsx`, `app/page.tsx`, and cross-section flow (Hero → Services → Proof → Contact).

**Date:** 2026-06-19

---

## DESIGN SCORE: **6 / 10**

The site has a competent technical foundation — CSS variables, an 8px grid, section rhythm classes, accessible focus states, reduced-motion handling — but it reads like two different brands stitched together: an editorial AI-native hero and a generic enterprise consulting page below it. Typography and numbering systems are half-tokenized. Proof is doing four jobs at once. The global layer promises a design system; the section components mostly honor it, then break it with one-off sizes, inline styles, and competing voice.

---

## Weaknesses

### Design system

1. **Display font is loaded but not systematized.** Instrument Sans is registered as `--font-display` in `layout.tsx` but absent from `tailwind.config.ts` `fontFamily`. Every use is a verbose `font-[family-name:var(--font-display)]` escape hatch. Display sizes on the hero (`text-[4.5rem]`, `text-[5rem]`) bypass the `display` / `h1` scale entirely.

2. **Two styling paradigms.** Light sections use Tailwind + component classes; Contact leans on inline `style={{}` for borders, text, and buttons. Impact tokens exist in CSS (`--impact-*`) but Contact reimplements them ad hoc instead of reusable utilities (e.g. `.text-impact`, `.border-impact`).

3. **Dead CSS weight.** `globals.css` still ships `.proof-clients`, `.proof-pillars`, `.section-contact`, and `.contact-panel` / `.contact-email` from an earlier Proof/Contact pattern. Proof no longer uses the dark impact band; Contact uses `section-impact` only. The global sheet documents a site that is not the one live on `page.tsx`.

4. **Accent color is decorative, not structural.** `--accent` appears on small numerals, nav underline, and timeline fill — but every primary CTA is `bg-foreground` (near-black). For an AI-native brand, blue reads as an afterthought, not a conversion or identity anchor.

5. **Button system drift.** `.btn-primary` / `.btn-secondary` exist in `globals.css`; Hero and Contact duplicate CTA markup with slightly different hover tokens (`hover:bg-neutral-800` vs impact inversion). Nav uses a third variant (`text-caption`, smaller padding).

6. **Container width inconsistency.** Hero, Services, Proof, and Contact all use `container-wide` (good). Section intros sometimes cap at `max-w-content`, sometimes `max-w-xs`, sometimes `max-w-lg` with no documented rule for which to use when.

7. **Theme / chrome mismatch.** `viewport.themeColor` is `#ffffff` while Contact + Footer sit on `#0a0a0a` / `#050505`. Mobile browser chrome will clash with the closing band.

8. **Section header pattern is almost consistent — except Hero.** Services, Proof, and Contact share the giant watermark numeral + overline + H2 + optional right-rail copy. Hero opts out entirely (no `01`, different layout DNA). That can be intentional editorial contrast, but it fractures the numbered narrative the rest of the page commits to.

### Content strategy & narrative

9. **Brand voice split.** Hero shouts **AI-Native & Cloud-First**; overline says **Enterprise Technology Consulting**; metadata and Open Graph repeat enterprise-generic boilerplate; Footer finally says **AI-native consulting**. A visitor gets three positioning statements in the first screenful.

10. **Consulting clichés undercut differentiation.** “Forward-thinking organizations,” “digital transformation,” “comprehensive technology solutions,” and “drive business innovation” (Services mobile intro) could belong to any SI. They contradict the sharper founder credential panel (Microsoft / OpenAI / Google).

11. **Proof is a junk drawer.** One section labeled “Proof” contains: client logos, four differentiators, a four-step approach timeline, and five industry tags. Nav promises proof; the user receives a mini-site. Trust signals get buried under process and taxonomy.

12. **“Proof” as IA label is weak.** Enterprise buyers expect “Clients,” “Results,” or “Why Maverick.” “Proof” in the nav is insider language and does not match the H2 (“Why Organizations Choose Us”).

13. **Duplicate CTAs, thin close.** Hero and Contact both say **Schedule a Consultation** with the same icon treatment. Contact also exposes `contact@maverick.ai` twice (button target vs sidebar). No secondary path (briefing doc, calendar link, “what happens next”).

14. **Copy inconsistency across breakpoints.** Services shows one supporting line on desktop (“Five disciplines. One partner…”) and a different paragraph on mobile (“Comprehensive technology solutions…”). Same section, two strategies — reads like unfinished content merge.

15. **Numeral collision.** Page sections: 02 / 03 / 04 (Hero has no 01). Service cards: 01–05. Proof differentiators: 01–04. Founder list: 01–03. Approach steps: 1–4. Five concurrent index systems; only the page-level numerals match section order.

16. **Credibility gaps.** Three client names, no metrics, no case framing, no outcomes tied to Services pillars. For enterprise consulting, the proof layer is thin relative to the claims.

17. **Content defects.** Proof copy includes **“Intelligence”** (typo) and **“Accelerated Delivery”** (misspelling). These erode trust in a section whose job is trust.

18. **Metadata not aligned with on-page story.** Title/description keywords emphasize “enterprise technology consulting” and “digital innovation,” not AI-native delivery — hurts SEO/snippet cohesion with Hero and Footer.

---

## Proposed improvements (multi-file)

| # | Improvement | Files | Priority |
|---|-------------|-------|----------|
| 1 | **Unify brand voice around “AI-native consulting for the enterprise.”** Retire “Enterprise Technology Consulting” as primary overline; align `metadata`, Hero overline, Services intro, and Contact body to one verb-led promise. Rewrite cliché lines. | `layout.tsx`, `Hero.tsx`, `Services.tsx`, `Contact.tsx`, `Footer.tsx` | **P0** |
| 2 | **Split Proof into scannable layers or rename/reframe.** Either break Approach + Industries into separate bands with their own headers, or fold them into Services/About and keep Proof = clients + differentiators only. Rename nav “Proof” → “Why Maverick” or “Clients.” | `page.tsx`, `Proof.tsx`, `Navigation.tsx`, `Footer.tsx` | **P0** |
| 3 | **Complete the numbering system or drop it.** Add subtle `01` to Hero *or* remove giant 02/03/04 watermarks and use overlines only. Never reuse 01–04 inside Proof when Services already owns 01–05. | `Hero.tsx`, `Services.tsx`, `Proof.tsx`, `Contact.tsx`, `globals.css` | **P1** |
| 4 | **Tokenize display typography.** Add `fontFamily.display`, `text-display-*` responsive steps, and `.section-title` / `.section-index` component classes. Remove arbitrary `text-[4.5rem]` / inline tracking. | `tailwind.config.ts`, `globals.css`, all `sections/*`, `Navigation.tsx`, `Footer.tsx` | **P1** |
| 5 | **Promote impact tokens to utilities; kill inline styles in Contact.** e.g. `.text-impact`, `.text-impact-muted`, `.border-impact`, `.btn-impact`. Merge or delete unused `.section-contact` / `.proof-*` blocks. | `globals.css`, `Contact.tsx`, `Proof.tsx` | **P1** |
| 6 | **Single CTA component with variants** (`primary`, `primary-on-dark`, `nav`). Map primary to accent or a defined black+accent system — pick one. | `globals.css`, `Hero.tsx`, `Contact.tsx`, `Navigation.tsx`, new shared component | **P2** |
| 7 | **Fix section rhythm documentation.** Standardize header margin (`mb-grid-10 lg:mb-grid-12`), sub-block spacing (`mt-grid-10` + `border-t`), and intro width (`max-w-content` for prose, `max-w-xs` for rail asides). | `globals.css`, `Services.tsx`, `Proof.tsx`, `Contact.tsx` | **P2** |
| 8 | **Strengthen proof content.** Add 1–2 outcome stats, short case lines, or role/context for each client; tie differentiators to Services entry points. Fix typos. | `Proof.tsx` | **P0** |
| 9 | **Differentiate Contact close.** Change button label (e.g. “Book a discovery call”), add 3-step “what happens next,” single primary email treatment. | `Contact.tsx`, `Hero.tsx` | **P2** |
| 10 | **Align meta + theme chrome.** AI-native title/description; `themeColor` `#0a0a0a` or dynamic; OG image that matches dark footer band. | `layout.tsx` | **P2** |
| 11 | **Visual flow: clarify light/dark cadence.** Current: white Hero → gray Services → white Proof (with internal black panel) → dark Contact. Either extend dark band full-bleed for Proof trust panel with shared `--impact-bg`, or lighten trust panel so Proof stays one surface. | `Proof.tsx`, `globals.css` | **P2** |
| 12 | **Services intro: one copy set all breakpoints.** Desktop rail text should complement, not contradict, mobile body. | `Services.tsx` | **P1** |

---

## Summary — top 5 site-wide fixes

1. **Pick one brand sentence and enforce it everywhere.** Hero, metadata, section intros, and footer must all say the same thing about AI-native enterprise consulting — drop generic “digital transformation” filler.

2. **Put Proof on a diet.** Clients + differentiators only; move Approach and Industries elsewhere or give them explicit section status. Fix typos before any design polish.

3. **Finish the type system.** Instrument Sans belongs in Tailwind as `font-display` with named sizes; stop sprinkling arbitrary pixel classes and duplicate font-family strings.

4. **Resolve numbering chaos.** Page index (01–04), service index (01–05), and list index (01–04) cannot all coexist at similar visual weight — choose one hierarchy.

5. **Clean globals + commit to tokens.** Delete orphaned `.proof-*` / `.section-contact` CSS, replace Contact inline styles with impact utilities, and decide whether accent or neutral black owns primary actions — then apply consistently.

---

## Cross-section flow (Hero → Services → Proof → Contact)

| Transition | What works | What breaks |
|------------|------------|-------------|
| **Hero → Services** | Scroll cue (“Explore”) hands off; AI/cloud headline sets up AI & Cloud cards. | Voice downgrade from bold editorial to catalog grid; no `01` bridge; gray band helps but copy tone shifts to generic. |
| **Services → Proof** | Shared header pattern (02 → 03) aids continuity. | Proof overload after focused grid; internal black client panel feels like a fourth theme; “Why Maverick” repeats founder territory from Hero. |
| **Proof → Contact** | Dark Contact + footer feel like a proper close. | Contact repeats Hero CTA verbatim; `section-impact` CSS name vs light Proof above makes the dark band feel late, not inevitable. |

**Narrative arc today:** *We are AI-native → here is every service bucket → here is everything else that builds trust → email us.* The middle sags because Proof carries approach, industries, and differentiation after Services already listed capabilities. Tightening Proof and aligning copy would make the four-beat structure feel intentional rather than truncated from a longer site (`Customers`, `Founders`, `Approach`, etc. still exist off-page).

---

## Typography notes (Instrument Sans + DM Sans)

- **Pairing is appropriate:** display for brand moments and numerals, DM Sans for body — matches modern consulting tropes without being wrong.
- **Execution is incomplete:** body uses the scale; display does not. Hero H1 is the strongest moment but least tied to tokens.
- **Weight consistency:** Hero H1 uses `font-medium`; section H2s use `font-semibold` via base `h2`. Display headlines should pick one weight rule.
- **Overlines:** `.overline` is 0.08em tracking in Tailwind; Hero founder caption uses `0.1em`, scroll cue `0.12em`. Small drift, but noticeable in a system claiming rhythm.

---

*Review only — no implementation.*
