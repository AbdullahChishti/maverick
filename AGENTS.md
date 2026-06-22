# Maverick AI Engineering Operating System

Enterprise agentic development framework for the Mavverik marketing website. Transforms Cursor into an autonomous engineering organization. **Enhances** existing workflows — never replaces them.

---

## Quick Start

Open **Agent mode**. Describe any task in plain language:

```
Build a Partners section between Services and Contact
Fix mobile nav not closing on link click
Refactor contact constants into a shared module
```

The full pipeline runs **automatically** — no need to request planning, testing, review, validation, debugging, or documentation.

---

## System Architecture

```
                    User Request (single command)
                              │
                              ▼
              ┌───────────────────────────────┐
              │  07-workflow-invocation.mdc   │
              │  (automatic — all phases)     │
              └───────────────┬───────────────┘
                              ▼
                    Orchestrator Role
              Plan · Route · Verify · Approve
                              │
     ┌────────────┬───────────┼───────────┬────────────┐
     ▼            ▼           ▼           ▼            ▼
Implementation  Testing   Debugging   Review    Documentation
 Specialist     Specialist Specialist  Specialist  Specialist
     │            │           │           │            │
     └────────────┴───────────┴───────────┴────────────┘
                              │
                    Parallel Execution Specialist
                              ▼
              Validation Loop (max 10 cycles)
                              ▼
              99-completion-gate (evidence required)
                              ▼
                       Task Complete
```

**Only the Orchestrator role approves completion.** All specialists return evidence.

---

## Rule Modules

```
.cursor/rules/
├── 00-system-principles.mdc    Philosophy, authority hierarchy
├── 01-orchestrator.mdc         Orchestrator responsibilities
├── 02-validation-loops.mdc     Implement → validate → repair
├── 03-code-review.mdc          Review categories + checklist
├── 04-debugging.mdc              Root-cause workflow
├── 05-documentation.mdc        Doc sync standards
├── 06-role-routing.mdc         Roles + model fallback chains
├── 07-workflow-invocation.mdc  Single-command auto pipeline
├── 10-technology-rules.mdc     Next.js, Signal Slate, motion, a11y
├── 20-project-conventions.mdc  HIGHEST AUTHORITY — repo-specific
└── 99-completion-gate.mdc      Evidence mandatory
```

### Authority Hierarchy

1. Project conventions (`20-project-conventions.mdc`)
2. Workflow invocation (`07-workflow-invocation.mdc`)
3. Role routing (`06-role-routing.mdc`)
4. Completion gate (`99-completion-gate.mdc`)
5. Validation loops (`02-validation-loops.mdc`)
6. Generic AI preferences

---

## Agent Roles

| Role | Responsibilities | Approves Completion? |
|------|------------------|----------------------|
| **Orchestrator** | Analyze, plan, route, coordinate, verify, final review | **Yes** |
| **Implementation Specialist** | Features, refactors, code generation | No |
| **Testing Specialist** | Test creation, repair, execution | No |
| **Debugging Specialist** | Reproduce, root cause, fix | No |
| **Review Specialist** | Pre-approval checklist | No |
| **Documentation Specialist** | Doc sync with code | No |
| **Parallel Execution Specialist** | Independent concurrent subtasks | No |

---

## Role Routing & Model Fallback

**Roles are stable. Models are interchangeable.**

When a preferred model is unavailable, the system automatically uses the next fallback. **Never stops. Never asks the user.**

### Current Preferred Mapping

| Role | Primary | Fallback | Secondary Fallback |
|------|---------|----------|-------------------|
| Orchestrator | Claude Opus 4.8 | Claude Sonnet | GPT-5 |
| Implementation Specialist | Kimi K2.5 | Composer 2.5 | Claude Sonnet |
| Testing Specialist | Kimi K2.5 | Composer 2.5 | GPT-5 |
| Debugging Specialist | Kimi K2.5 | Claude Sonnet | GPT-5 |
| Review Specialist | Claude Opus 4.8 | Claude Sonnet | GPT-5 |
| Documentation Specialist | Kimi K2.5 | Composer 2.5 | Claude Sonnet |
| Parallel Execution Specialist | Composer 2.5 | Kimi K2.5 | Claude Sonnet |

Update mappings in `06-role-routing.mdc` when Cursor model lineup changes. Workflow behavior does not change.

### Task → Role (Automatic)

| Task | Role |
|------|------|
| Planning, architecture, repo analysis | Orchestrator |
| Feature development, refactoring | Implementation Specialist |
| Test generation/repair | Testing Specialist |
| Bug investigation | Debugging Specialist |
| Code review | Review Specialist |
| Documentation | Documentation Specialist |
| Parallel independent work | Parallel Execution Specialist |
| Final approval | Orchestrator |

---

## Loop Engineering

Every task follows:

```
Understand → Plan → Implement → Validate → Analyze → Repair → Revalidate → Review → Complete
```

### Repository Validation

```bash
npm run build          # Required after code changes
npx tsc --noEmit       # Required after TS/TSX changes
```

Additional: browser check (UI), section ID verification, test runner (when configured).

**Maximum repair cycles: 10.** Then report `INCOMPLETE` with blockers.

---

## Universal Workflow Invocation

Phases run automatically on every coding request:

| # | Phase | Role |
|---|-------|------|
| 1 | Analyze | Orchestrator |
| 2 | Plan | Orchestrator |
| 3 | Route | Orchestrator |
| 4 | Implement | Implementation Specialist |
| 5 | Validate | Testing Specialist + build/tsc |
| 6 | Review | Review Specialist → Orchestrator |
| 7 | Debug | Debugging Specialist (if needed) |
| 8 | Revalidate | Specialist |
| 9 | Document | Documentation Specialist |
| 10 | Approve | Orchestrator |

User never explicitly requests testing, review, validation, debugging, or documentation.

---

## Review Standards

Categories: correctness, security, performance, maintainability, consistency, regression risk.

Review occurs **even when implementation appears successful.**

Output format:
```
✓ Passed / ✗ Critical / ⚠ Advisory / Evidence
```

---

## Debugging Standards

```
Reproduce → Gather Evidence → Root Cause → Fix → Validate → Regression Protection
```

Never patch symptoms only.

---

## Completion Gates

Complete **only when all pass with evidence:**

| Criterion | Required |
|-----------|----------|
| Requirements satisfied | ✓ |
| Validation completed | ✓ |
| Build succeeds | ✓ |
| Tests pass | ✓ (when tests exist) |
| Review completed | ✓ |
| No critical findings | ✓ |
| Evidence attached | ✓ |

**Prohibited:** "Looks correct" / "Should work" / "Probably fixed"

---

## Specialist Handoff Format

```
## Done
## Validated
## Evidence
## Open Issues
```

---

## Project Context

| Aspect | Detail |
|--------|--------|
| Stack | Next.js 15, React 19, TypeScript, Tailwind, Framer Motion |
| Structure | `app/sections/` + `app/components/` + barrel exports |
| Design | Signal Slate palette, CSS variables |
| Page | Hero → Founders → Services → Contact |
| Deploy | Vercel, semver Git tags (`docs/VERSIONING.md`) |
| Tests | Not configured — build + tsc are current gates |

See `20-project-conventions.mdc` and `10-technology-rules.mdc`.

---

## Self-Improving System

- Update `20-project-conventions.mdc` when architecture changes
- Update `06-role-routing.mdc` when model lineup changes
- Update validation commands when tests/CI are added
- Sync `PROJECT_STRUCTURE.md` when sections change

---

## Golden Rule

> Code without validation is a hypothesis.
> Validated code is evidence.
