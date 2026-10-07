---
title: Test case conventions
impact: HIGH
impactDescription: the single source of truth for evidence, scope, priority, and output shared by every written test case
tags: testing, test-cases, qa, manual, conventions
---

# Test case conventions

These conventions apply to every structured test case, whether stored in a repository catalog or represented in a Test IT workbook.

## Project first

Before writing, inspect the closest and most comparable cases, shared catalog configuration, relevant application behavior, and confirmed requirements and design references. For repository cases, follow the existing catalog's layout, case shape, naming, ownership, statuses, preconditions, step granularity, and language. If no catalog exists, agree on a layout with the user.

- Report conflicts between requirements, cases, and implementation instead of resolving them silently. Implementation proves current behavior, not that the behavior is correct; ask the user when a conflict changes an expected result.
- Keep each case within the confirmed responsibility of the target application, page, or reusable block. Do not assert behavior owned exclusively by an external system unless it is observable through the target.
- Determine case count from distinct confirmed scenarios, not neighboring catalog size.

## Confirmed behavior only

- Write only confirmed behavior. In planning or grill mode, report unknowns as open questions instead of inventing them.
- Write incomplete cases only when the user explicitly allows them and the catalog has an appropriate existing needs-rework status.
- Use only confirmed design and validation links in complete cases. A missing design link may remain an open question in a planned design case.
- Use existing statuses unless the user explicitly confirms a new one.

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

Priority reflects product risk, not positive/negative case type, execution order, or defect severity. Preserve an existing priority unless confirmed changes alter the risk. When uncertain, use the best-supported level and surface the uncertainty; ask before implementation only when no level is supportable.

## Case shape

- Repository cases live under the catalog root and conform to its shared case type.
- For repository cases, preserve the catalog's existing export shape. When creating a new catalog layout, prefer one case collection per file unless the user agrees on another structure.
- Write `steps` as `{ action, expected }`, with `expected` as an array of concrete expected results.
- Write internal page URLs without the domain or application base path, for example `/`, `/profile`, or `/history/{orderId}`. Keep external URLs complete. These shortened paths are test-case notation, not requirements for literal DOM `href` values.

## Output

Match the catalog's format, imports, status vocabulary, and precondition references. Include product priority for every new case.

When proposing repository changes in chat, include the target folder and file, changed preconditions or statuses if any, and the case content. For Test IT cases, identify the catalog location and existing case ID when available. A proposal or its revision does not authorize repository edits; edit case files only when the user asks for implementation.

When editing files directly, run the repository's own verification commands when feasible.

## Review mode

Report concrete duplicates, wrong file ownership, non-atomic cases, unconfirmed expectations, and missing coverage. Explain what should change and why; do not report case counts alone.
