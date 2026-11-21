---
title: Test IT XLSX read
impact: HIGH
impactDescription: turns a Test IT workbook snapshot into reliable existing-coverage evidence before case planning
tags: testing, test-cases, testit, xlsx, import, catalog
---

# Test IT XLSX read

Use when the user supplies a Test IT XLSX export or catalog snapshot. Read [testcase-conventions](./testcase-conventions.md) first.

Treat the workbook as a point-in-time source of existing coverage, not automatically as the live catalog or product truth.

## Parse the catalog

- Inspect sheet names and headers before interpreting rows; do not assume every workbook uses the same columns.
- For the known Test IT export layout, a row with `ID` starts a work item. Attach following rows without `ID` to it until the next populated `ID`.
- Capture available location, name, automation flag, preconditions, steps, postconditions, expected results, test data, comments, iterations, priority, status, creation metadata, duration, and tags.
- Resolve the displayed value of formula cells. In the known export, `Наименование` is the label in `HYPERLINK(workItemUrl, name)` and may have no cached cell value; capture both the displayed name and link instead of treating the cell as empty.
- Keep each action aligned with the expected result from the same row. Preserve multiline cell content.
- Parse `Итерации` as ordered parameter sets and find `%parameter` references across the case fields. Preserve parameter names, letter case, values, and iteration boundaries exactly.
- Report referenced parameters missing from any iteration, declared but unused parameters, and duplicate iteration sets. Treat one parameterized work item as one case with several execution variants, not as duplicate cases.
- Report malformed headers, orphan continuation rows, duplicate IDs, or fields that cannot be associated confidently; do not guess.

## Use the snapshot

- Normalize parsed work items only for comparison; do not modify the supplied workbook.
- Compare names, ownership, setup, actions, expected results, status, and semantic intent when detecting existing coverage and duplicates.
- Use status and location to distinguish active, archived, and needs-rework coverage when the workbook provides that vocabulary.
- Classify grill proposals against the parsed work items using [testcase-grill](./testcase-grill.md).
- State that the snapshot may be stale when live Test IT cannot be checked.
