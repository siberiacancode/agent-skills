---
title: Test IT XLSX read
impact: HIGH
impactDescription: turns a Test IT workbook snapshot into reliable existing-coverage evidence before case planning
tags: testing, test-cases, testit, xlsx, import, catalog
---

# Test IT XLSX read

Use when creating or revising Test IT cases, or when review requires catalog context such as coverage, ownership, or duplicates. Standalone case review and generic planning do not require a workbook. Read [testcase-conventions](./testcase-conventions.md) first.

Require a current Test IT catalog export for case changes or catalog-level conclusions. It is authoritative for existing coverage and vocabulary, while confirmed requirements and project evidence define product behavior. An import template defines format only and cannot replace the catalog export unless it also contains current coverage.

## Parse the catalog

- Inspect sheet names and headers before interpreting rows; do not assume every workbook uses the same columns.
- For the known Test IT layout, a populated `ID` starts an existing work item. A row with an empty `ID` and a populated displayed name starts a new work item. A row with neither `ID` nor displayed name is a continuation row and belongs to the preceding work item. Report a continuation row without a preceding work item or any row whose fields cannot be associated by these rules; do not guess.
- Capture all available case fields, including identity and location, setup, steps and results, data, iterations, priority, status, automation, duration, tags, comments, and creation metadata.
- Resolve the displayed value of formula cells. In the known export, `Наименование` is the label in `HYPERLINK(workItemUrl, name)` and may have no cached cell value; capture both the displayed name and link instead of treating the cell as empty.
- Keep each action aligned with the expected result from the same row. Preserve multiline cell content.
- Parse `Итерации` as ordered parameter sets and find `%parameter` references across the case fields. Preserve parameter names, letter case, values, and iteration boundaries exactly, and validate them against the parameterized-case contract in [testcase content](./testcase-content.md). Treat one parameterized work item as one case with several execution variants, not as duplicate cases.
- Report malformed headers, duplicate IDs, or fields that cannot be associated confidently.

## Use the snapshot

- Normalize parsed work items only for comparison; do not modify the supplied workbook.
- Compare names, ownership, setup, actions, expected results, status, and semantic intent when detecting existing coverage and duplicates.
- Use status and location to distinguish active, archived, and needs-rework coverage when the workbook provides that vocabulary.
- Classify confirmed required behavior absent from the workbook as new coverage. Do not require live Test IT confirmation before creating it.
- Classify grill proposals against the parsed work items using [testcase-grill](./testcase-grill.md).
- Mention that the workbook is a snapshot only as a non-blocking note when it materially affects the result or the user asks for live reconciliation.
