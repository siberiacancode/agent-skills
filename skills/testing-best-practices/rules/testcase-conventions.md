---
title: Test case conventions
impact: HIGH
impactDescription: the single source of truth for evidence, scope, workflow, and output shared by every written test case
tags: testing, test-cases, qa, manual, conventions
---

# Test case conventions

These conventions apply to every written test case. Read them before the subject-specific rule for [file structure](./testcase-file-structure.md), [naming](./testcase-naming.md), [content](./testcase-content.md), or [preconditions](./testcase-preconditions.md).

Use this group when generating, revising, reviewing, or reorganizing structured test cases stored in the repository's case catalog.

Do not assume a catalog layout. Locate the catalog root, the shared case type, the status vocabulary, and the precondition modules in the repository before writing, and follow what you find. When no catalog exists yet, say so and agree on a layout with the user instead of inventing one.

## 0. Project first

Do not write abstractly ideal test cases. Continue the project's existing case catalog. Check the application within its intended area of responsibility. The scope and expected results of each case must stay within that boundary.

Inspect sources in this order; this does not define conflict precedence:

1. existing cases in the closest folder and file;
2. the catalog's shared configuration: case types, statuses, and preconditions;
3. cases for the most similar page, block, or workflow;
4. the relevant application code — routes, components, labels, validation, API calls, redirects, permissions, links, UI states, and viewport-specific controls;
5. user-confirmed requirements and design links;
6. generic QA preferences.

- Follow explicit user instructions. Flag conflicts between requirements, existing cases, and code instead of silently treating one as correct. Implementation confirms current behavior, but not necessarily its correctness. If you find a contradiction or behavior that appears incorrect, state it explicitly and ask the user to confirm the expected result before recording it in a case.

Existing project conventions override generic preferences. Before writing, infer the naming hierarchy, folder ownership, status vocabulary, precondition scope, step granularity, and language.

- Determine case count from distinct confirmed scenarios, not neighboring catalog size.

## 1. Confirmed behavior only

Write cases only from behavior confirmed by the project or by the user.

- Ask about missing or ambiguous requirements before writing, unless the user explicitly allows incomplete cases. For those cases, use the existing `needs-rework` status by default unless the user explicitly specifies another existing status, and record unknowns without inventing them.
- Use only user-provided or previously confirmed design links. A missing design link does not prevent proposing a design case with a defined scope. When writing the case, do not invent a link: use the agreed placeholder and status, or ask for the missing details.

Use existing statuses only, unless the user explicitly confirms a new one.

## 2. Workflow

1. Inspect the closest existing cases and the relevant source code.
2. Before proposing or writing new cases, compare the target coverage with existing names, file ownership, and confirmed planned cases. Remove exact and semantic duplicates unless the user explicitly asks to keep overlap.
3. Choose the target folder and file by [file structure](./testcase-file-structure.md).
4. Choose case scope and write atomic cases by [content](./testcase-content.md).
5. Reuse precise existing preconditions, and add or move them by [preconditions](./testcase-preconditions.md).
6. Name the cases by [naming](./testcase-naming.md).
7. Preserve unrelated cases and shared configuration. Change existing cases only when requested or confirmed by the user.

## 3. Case shape

- Cases live under the catalog root and conform to its shared case type.
- Each case file exposes one case collection, in whatever form the catalog already uses.
- Write `steps` as `{ action, expected }`, with `expected` as an array of concrete expected results.
- Write internal page URLs without the domain or application base path, for example `/`, `/profile`, or `/history/{orderId}`. Keep external URLs complete. These shortened paths are test-case notation, not requirements for literal DOM `href` values.

## 4. Output

When producing cases, match the catalog's own format and imports:

- reference statuses and preconditions the way neighboring case files already do;
- add or move preconditions according to the preconditions rule;
- use an existing confirmed status.

When proposing changes in chat, include the target folder and file, changed preconditions or statuses if any, and the case content. If the user asks to revise a proposed list, do not edit existing files unless implementation is explicitly requested.

When editing files directly, run the repository's own verification commands when feasible.

## Review mode

Report concrete duplicates, wrong file ownership, non-atomic cases, unconfirmed expectations, and missing coverage. Explain what should change and why; do not report case counts alone.
