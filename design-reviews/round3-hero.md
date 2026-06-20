# Hero — Round 3 Critique

**SCORE: 7.3/10**

Round 2 fixes landed well — single CTA, sharper headline, accent button, faster motion. But the hero still claims regulated-enterprise expertise with **no above-fold proof** (founder pedigree / client names only appear after scroll), the **headline + subhead both repeat "regulated enterprises,"** and the full-viewport shell leaves dead whitespace instead of a Linear-grade opening.

---

## Ranked Weaknesses

1. **No above-fold credibility.** The hero asserts "Production AI for regulated enterprises" but offers zero proof in the first viewport. Microsoft/OpenAI/Google pedigree and J.P. Morgan/Barclays clients are the strongest assets and they're invisible until scroll.
2. **"Regulated enterprises" repeated twice** — once in the H1, again in the subhead's "regulated enterprises." Redundant in a 2-sentence opener.
3. **Dead whitespace.** `min-h-[100dvh]` with only an overline + H1 + one subhead line + one button leaves a large empty lower half. Either tighten the shell or add a proof element.
4. **Stock blur orb.** A single `bg-accent-subtle/25 blur-3xl` orb is generic ambient texture, not craft.
5. **Subhead is slightly abstract.** "first architecture review to live, governed systems" is good but could be sharper.

## Specific Text Rewrites

| Element | Before | After |
|---------|--------|-------|
| Overline | AI-native consulting | **AI-native consulting** *(keep)* |
| H1 | Production AI for regulated enterprises. | **Production AI the regulators sign off on.** |
| Subhead | One senior team taking regulated enterprises from first architecture review to live, governed systems. | **One senior team taking you from first architecture review to live, governed systems in production.** |
| CTA | Start a conversation | **Start a conversation** *(keep)* |
| New proof line (below CTA) | — | **Built by teams from Microsoft, OpenAI & Google. Trusted by J.P. Morgan and Barclays.** |

## Design Fixes

- **P0** — Add an above-fold proof strip below the CTA: muted `text-body-sm text-muted-foreground`, e.g. `mt-grid-8` with founder-orgs + client names. Gives the empty lower viewport purpose and front-loads credibility.
- **P1** — De-dupe "regulated enterprises" between H1 and subhead (see rewrites).
- **P1** — Reduce dead space: keep `min-h-[100dvh]` but anchor content with the proof strip so the fold feels composed, not sparse.
- **P2** — Refine the blur orb: add a second subtle layer or a faint grid/gradient so the background reads as intentional, not stock.

## Priority

| Fix | Priority |
|-----|----------|
| Above-fold proof strip (orgs + clients) | P0 |
| De-dupe "regulated enterprises" | P1 |
| Tighten fold composition | P1 |
| Background refinement | P2 |
