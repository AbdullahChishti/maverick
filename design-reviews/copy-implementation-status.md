# Mavverik Homepage — Copy Implementation Status

**Date:** 2026-06-19
**Orchestrator:** Opus 4.8 · **Implementation:** 5 parallel `composer-2.5-fast` subagents (copy-only, non-overlapping files)

## User decision applied (overrides plan §3.1)
Founders is the dedicated pedigree section, so the **Hero proof strip was removed entirely** — Hero no longer repeats *either* "Built by teams from Microsoft, OpenAI & Google" *or* "Trusted by J.P. Morgan and Barclays". Hero is now promise + CTA only. (The plan had proposed keeping a single client line in Hero; the user's confirmation took precedence, so J.P. Morgan/Barclays no longer appear on the page.)

## What changed per file

### `app/sections/Hero.tsx`
- Subhead trimmed: `…live, governed systems in production.` → `…live, governed systems.` (drops "in production"; H1 owns "Production AI").
- Removed the entire `<motion.aside>` proof strip (both the Microsoft/OpenAI/Google line and the J.P. Morgan/Barclays line). No founder or client names remain. CTA is now the last element.

### `app/sections/Founders.tsx`
- Closing line rewritten to stop re-listing the orgs and stop echoing the Hero journey phrase:
  `One founding team — the engineers who architect your systems are the ones accountable for them.` (accent span on "One founding team" kept).
- Lead, H2, and `orgs[]` cards (Microsoft/OpenAI/Google) left intact — Founders is the canonical pedigree home.

### `app/sections/Services.tsx`
- Featured footer: `Production LLM systems for regulated financial institutions.` → `Governed LLM systems, live in regulated financial institutions.`
- Data footer: `Dashboards, forecasting, and decision models in production.` → `Dashboards, forecasting, and decision models in daily use.`
- Service titles/taglines, H2, overline unchanged.

### `app/sections/Contact.tsx`
- H2: `Talk to the team shipping AI in production.` → `Talk to the team that ships — not the one that pitches.`
- Lead: removed the `Trusted by production teams at J.P. Morgan and Barclays` client names; now `…tell us what you're building, and you'll hear back from the engineers who'd do the work.`
- Trust bullets: dropped the duplicate `Reply within one business day`, added `Direct access to the founding team`; response-time now lives only in the email hint.

### `app/components/Navigation.tsx`, `app/components/Footer.tsx`, `app/layout.tsx`
- Verified compliant; no copy changes needed. Nav links `Founders` / `Capabilities` / `Contact` + CTA `Contact` retained; footer tagline + copyright unchanged; metadata keeps the `AI-native consulting` brand bookend with no founder/client names.

## Duplication grep results (`app/`)
- `Microsoft|OpenAI|Google` → **only `Founders.tsx`** (org cards + lead). Hero = **0**. PASS
- `J.P. Morgan|Barclays` → **0 matches anywhere** (removed from Hero and Contact per user). Contact = **0**. PASS
- `business day` → **1** total (Contact email hint). PASS
- `Production` / `in production` → Hero H1 `Production AI` + one Founders org-card scope detail (`Production LLM deployment`); **no `in production` repetition**, no two adjacent sections repeating the phrase. PASS

## Build / runtime
- `npm run build` → **success** (compiled in 2.4s; lint + TypeScript clean; `/` prerendered static).
- Dev server on **`http://localhost:3000` → HTTP 200**.
- Rendered DOM verified: old strings absent (`Built by teams`, `J.P. Morgan`, `Reply within one business day` = 0); new strings present (`not the one that pitches`, `governed systems.`, `in daily use`, `accountable for them`, `Direct access to the founding team` = 1 each).

## Not committed
No git commit was made (not requested).
