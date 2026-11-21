---
title: Test IT XLSX export
impact: HIGH
impactDescription: produces a validated Test IT upload workbook from approved refined cases without changing the source snapshot
tags: testing, test-cases, testit, xlsx, export, upload
---

# Test IT XLSX export

Use only when the user explicitly requests an XLSX file for import into Test IT after reviewing the final cases. Read [testcase-conventions](./testcase-conventions.md) and [testcase-testit-xlsx-read](./testcase-testit-xlsx-read.md) first.

This rule creates an upload artifact; it does not authorize or perform the Test IT upload.

## Choose the format

Use sources in this order:

1. a user-provided Test IT import template;
2. a workbook confirmed to import successfully into the same Test IT instance;
3. the supplied export snapshot, only when its round-trip compatibility is confirmed.

If compatibility is unknown, produce a draft workbook and state what must be verified instead of calling it upload-ready.

## Build the workbook

- Create a new file; never overwrite the template or source snapshot.
- Preserve required sheet names, column names, order, cell types, and template formatting.
- Preserve confirmed formula-backed hyperlinks and their displayed labels. For existing cases, keep the `Наименование` label and its confirmed Test IT work-item URL aligned; do not invent a URL for a new case without an assigned ID.
- Write the complete final form of every selected case, not grill deltas.
- Preserve the confirmed `ID` for an existing case. Leave a new case ID empty unless the import format explicitly requires another value.
- Populate every new case's product priority from [testcase conventions](./testcase-conventions.md). For a Russian-language catalog, write exactly `Самый высокий`, `Высокий`, `Средний`, `Низкий`, or `Самый низкий`.
- Put case metadata on its starting row. Write additional step rows without repeating the ID when the template uses continuation rows.
- Keep each action and its expected result on the same row. Preserve multiline values and the catalog's vocabulary for location, status, priority, duration, tags, and automation state.
- Keep a parameterized case as one work item. Preserve `%parameter` references and write its ordered value sets to `Итерации` using the syntax confirmed by the import template; do not expand iterations into duplicate cases.
- Include only approved cases and confirmed values; do not invent IDs, statuses, locations, or import fields.

## Validate and report

- Verify headers, sheet names, case count, non-empty displayed names including formula-backed names, unique existing IDs, localized new-case priorities, continuation-row ownership, action/expected alignment, and required cells.
- For parameterized cases, verify that every `%parameter` is declared and populated in every iteration, no declared parameter is unused, and no iteration set is duplicated.
- Compare the generated workbook with the approved refined cases and report created versus updated case counts.
- Return the output path and any compatibility warning. Keep external upload as a separate, explicitly authorized action.
