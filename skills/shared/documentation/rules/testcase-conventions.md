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

Do not write abstractly ideal test cases. Continue the project's existing case catalog. Check the application within its intended area of responsibility. The scope and expected results of each case must stay within that boundary.

Inspect sources in this order; this does not define conflict precedence:

- Follow explicit user instructions. Flag conflicts between requirements, existing cases, and code instead of silently treating one as correct. Implementation confirms current behavior, but not necessarily its correctness. If you find a contradiction or behavior that appears incorrect, state it explicitly and ask the user to confirm the expected result before recording it in a case.

Existing project conventions override generic preferences. Before writing, infer the naming hierarchy, folder ownership, status vocabulary, precondition scope, step granularity, and language.

- Determine case count from distinct confirmed scenarios, not neighboring catalog size.

Write cases only from behavior confirmed by the project or by the user.

- Ask about missing or ambiguous requirements before writing, unless the user explicitly allows incomplete cases. For those cases, use `NeedsWork` and record unknowns without inventing them.
- Use only user-provided or previously confirmed design links. A missing design link does not prevent proposing a design case with a defined scope. When writing the case, do not invent a link: use the agreed placeholder and status, or ask for the missing details.

- Do not split one behavior only because it has multiple observable effects.
- Split when scenarios have different preconditions, outcomes, independent failure risk, or requirements.

## Package contract

Use `@siberiacancode/autotest` as the source of truth for test-case and precondition types. Import `createTestCases` and `createPreconditions` rather than creating equivalent local types, interfaces, or `types.ts` files. Check the installed package version and existing catalog before using its API.

Use `High`, `Medium`, or `Low` for priority and `Ready`, `NotReady`, or `NeedsWork` for state. Case steps use `{ action, expected }`, where `expected` is an array of strings. `createTestCases` validates cases and preserves their names without creating IDs; `mergeCases` creates keyed lookups, assigns IDs in merge order, and rejects duplicate names. Do not recreate these helpers or rely on IDs remaining stable when the order changes.

When migrating existing cases, remove only local types that duplicate the package and update their imports. Preserve project-specific types and unrelated code.

## Product priority

Assign every new repository case one product priority supported by the package, based on confirmed product risk rather than testing effort:

- `High` — critical or important flows; failure causes serious product impact.
- `Medium` — meaningful but limited impact or a practical workaround.
- `Low` — secondary, infrequent, or mainly visual behavior.

Preserve an existing priority unless requirements or risk change. Do not write `Highest`, `Lowest`, or translated priority strings into typed repository cases. External Test IT spreadsheets may use a separate vocabulary; translate only when a confirmed import/export mapping is available.

## Workflow

1. Establish confirmed behavior and existing coverage.
2. Apply the rules for [file structure](./testcase-file-structure.md), [content](./testcase-content.md), [preconditions](./testcase-preconditions.md), and [naming](./testcase-naming.md).
3. Use package helpers for typed cases and preconditions; assign product priority using the supported values above.
4. Preserve unrelated cases and shared configuration. Change existing cases only when requested or confirmed by the user.

## Case shape

- Cases live under the catalog root and use `createTestCases` from `@siberiacancode/autotest`.
- Each case file exposes its case collection using the package helper, following neighboring imports and exports.
- Write `steps` as `{ action, expected }`, with `expected` as an array of concrete expected results.
- Write internal page URLs without the domain or application base path, for example `/`, `/profile`, or `/history/{orderId}`. Keep external URLs complete. These shortened paths are test-case notation, not requirements for literal DOM `href` values.

## Output

When producing cases, match the catalog's own format and imports:

- use package-compatible states and `createPreconditions` for reusable setup;
- add or move preconditions according to the preconditions rule;
- include product priority for every new case;
- use `Ready`, `NotReady`, or `NeedsWork` as appropriate.

When proposing changes in chat, include the target folder and file, changed preconditions or statuses if any, and the case content. If the user asks to revise a proposed list, do not edit existing files unless implementation is explicitly requested.

When editing files directly, run the repository's own verification commands when feasible.

## Review mode

Report concrete duplicates, wrong file ownership, non-atomic cases, unconfirmed expectations, and missing coverage. Explain what should change and why; do not report case counts alone.
