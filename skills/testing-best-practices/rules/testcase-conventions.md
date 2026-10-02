---
title: Test case conventions
impact: HIGH
impactDescription: the single source of truth for evidence, scope, workflow, and output shared by every written test case
tags: testing, test-cases, qa, manual, conventions
---

# Test case conventions

These conventions apply to every written test case. Read them before the subject-specific rule for [file structure](./testcase-file-structure.md), [naming](./testcase-naming.md), [content](./testcase-content.md), or [preconditions](./testcase-preconditions.md).

Use this group when generating, revising, reviewing, or reorganizing structured test cases stored in the repository's case catalog.

## Project first

Continue the project's existing case catalog. Before writing, inspect the closest cases and comparable flows, shared case configuration, relevant application behavior, and confirmed requirements.

- Follow the catalog's established layout, naming, ownership, statuses, preconditions, step granularity, and language. If no catalog exists, agree on a layout with the user instead of inventing one.
- Follow explicit user instructions. Report conflicts between requirements, existing cases, and code instead of resolving them silently.
- Determine case count from distinct confirmed scenarios, not neighboring catalog size.

## Confirmed behavior only

Write cases only from behavior confirmed by the project or by the user.

- In planning or grill mode, report unresolved requirements as open questions.
- When writing catalog cases, use the project's existing needs-rework status only if incomplete cases are explicitly allowed.
- Use only user-provided or previously confirmed design and validation links. Treat missing links as unknown requirements.

Use existing statuses only, unless the user explicitly confirms a new one.

## Coverage economy

Prefer the smallest set of cases that covers distinct behavior and meaningful risk.

- Do not split one behavior only because it has multiple observable effects.
- Split when scenarios have different preconditions, outcomes, independent failure risk, or requirements.

## Product priority

Assign every new case one product priority. Use the catalog's language: `Highest`, `High`, `Medium`, `Low`, or `Lowest` in English; `Самый высокий`, `Высокий`, `Средний`, `Низкий`, or `Самый низкий` in Russian. Base it on confirmed product risk — business impact, affected users and usage frequency, and whether a practical workaround exists — not on how difficult the case is to execute.

- `Highest` / `Самый высокий` — failure blocks a critical path or risks money, security, data loss, or core-product availability without a workaround.
- `High` / `Высокий` — failure seriously disrupts an important or frequent flow, while the product remains usable.
- `Medium` / `Средний` — failure has limited product impact or a practical workaround.
- `Low` / `Низкий` — failure affects a secondary, infrequent, or mainly visual scenario.
- `Lowest` / `Самый низкий` — failure has negligible product impact, such as minor cosmetics or optional polish.

Do not infer priority from positive versus negative case type, and do not confuse execution priority with defect severity. Preserve an existing case's priority during refinement unless confirmed changes alter its product risk. When the available evidence does not support one level confidently, propose the best-supported priority and list the uncertainty for confirmation.

## Workflow

1. Establish confirmed behavior and existing coverage.
2. Apply the rules for [file structure](./testcase-file-structure.md), [content](./testcase-content.md), [preconditions](./testcase-preconditions.md), and [naming](./testcase-naming.md).
3. Assign product priority using the scale above.
4. Preserve unrelated cases and shared configuration. Change existing cases only when requested or confirmed by the user.

## Case shape

- Cases live under the catalog root and conform to its shared case type.
- Each case file exposes one case collection, in whatever form the catalog already uses.
- Write `steps` as `{ action, expected }`, with `expected` as an array of concrete expected results.
- Write internal page URLs without the domain or application base path, for example `/`, `/profile`, or `/history/{orderId}`. Keep external URLs complete. These shortened paths are test-case notation, not requirements for literal DOM `href` values.

## Output

When producing cases, match the catalog's own format and imports:

- reference statuses and preconditions the way neighboring case files already do;
- add or move preconditions according to the preconditions rule;
- include product priority for every new case;
- use an existing confirmed status.

When proposing changes in chat, include the target folder and file, changed preconditions or statuses if any, and the case content. If the user asks to revise a proposed list, do not edit existing files unless implementation is explicitly requested.

When editing files directly, run the repository's own verification commands when feasible.

## Review mode

Report concrete duplicates, wrong file ownership, non-atomic cases, unconfirmed expectations, and missing coverage. Explain what should change and why; do not report case counts alone.
