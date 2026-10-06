---
title: Test IT XLSX export
impact: HIGH
impactDescription: produces a validated Test IT upload workbook from created and updated cases without changing the source snapshot
tags: testing, test-cases, testit, xlsx, export, upload
---

# Test IT XLSX export

Use when the user asks to create or update Test IT cases and supplies the workbook required by [testcase-testit-xlsx-read](./testcase-testit-xlsx-read.md). Generate a new upload workbook by default; skip it only for explicit review, planning, or grill-only requests. Read [testcase-conventions](./testcase-conventions.md) and the XLSX read rule first.

This rule creates an upload artifact but never performs the Test IT upload; follow the authorization boundary in the skill entrypoint.

## Choose the format

The catalog export remains the coverage authority. Choose the workbook whose structure will be copied for the upload artifact in this order:

1. a user-provided Test IT import template;
2. a workbook confirmed to import successfully into the same Test IT instance;
3. the supplied export snapshot as the task's format contract.

Before editing, inventory the selected source's sheets, used ranges, tables, filters, merged cells, defined names, validations, links, formulas, dimensions, freeze panes, and print settings. Preserve this structure, not only visible cells. Warn only when the workbook contains evidence of export/import incompatibility; lack of live Test IT access alone does not block generation.

## Map repository cases to Test IT

Map fields by meaning because repository catalogs may use different type and property names. Use the owning catalog folder and file as `Расположение`. Write precondition actions to `Предусловия`, step actions to `Шаги`, and each action's expected results to `Ожидаемый результат` on the same row.

One repository case produces one Test IT work item. Write each precondition and step on its own row, preserving their order. When one action has several expected results, keep them in one cell as ordered multiline text. Do not manufacture a repository field merely to fill an optional workbook column.

## Build the workbook

- Create a new file; never overwrite the template or source snapshot.
- Prefer copying the selected source and changing its rows in place. Do not rebuild it from empty or remove structural features as a compatibility workaround; preserve sheet and column structure, cell types, formatting, tables, relationships, and formulas.
- When rows are added or removed, resize every affected structured-table range, table autofilter, worksheet autofilter, print area, and defined range to the final used range. No table or filter may refer to deleted rows or exclude generated rows.
- Preserve confirmed formula-backed hyperlinks and their displayed labels. For existing cases, keep the `Наименование` label and its confirmed Test IT work-item URL aligned; do not invent a URL for a new case without an assigned ID.
- Include only the complete final forms of the existing cases changed by the task and the new cases created by the task, not grill deltas or unchanged catalog cases.
- Preserve the confirmed `ID` for an existing case. Leave a new case ID empty unless the import format explicitly requires another value.
- Populate and validate every new case's product priority according to [testcase conventions](./testcase-conventions.md), using the catalog's confirmed localization. Workbook export does not add a separate review round for uncertain priority.
- Set every new case to the catalog's confirmed ready status, preserving its exact vocabulary. In the known Russian catalog this value is `Готов`; do not replace it with the conversational form `Готово`. Preserve an existing case's status unless the requested change includes a confirmed status change.
- Put case metadata on its starting row. Write additional step rows without repeating the ID when the template uses continuation rows.
- Keep each action and its expected result on the same row. Preserve multiline values and the catalog's vocabulary for location, status, priority, duration, tags, and automation state.
- Keep a parameterized case as one work item. Write the parameters and ordered iterations that satisfy the contract in [testcase content](./testcase-content.md), using the syntax confirmed by the import template; do not expand iterations into duplicate cases.
- Include only cases and values supported by confirmed requirements and the supplied catalog. Do not invent IDs, statuses, locations, or import fields.

## Validate and report

- Verify headers, sheet names, case count, non-empty displayed names including formula-backed names, unique existing IDs, localized new-case priorities, the catalog's exact ready status for every new case, continuation-row ownership, action/expected alignment, and required cells.
- For parameterized cases, verify the final workbook against the parameterized-case contract in [testcase content](./testcase-content.md).
- Compare the final workbook structure with the recorded source inventory. Verify that table names and counts are preserved, each table and filter range equals its final data range, generated rows are inside that range, and no relationship or defined range points to removed content.
- Test the XLSX as a ZIP archive, parse every XML and relationship part, then reopen and re-read every case. Also verify that every namespace prefix named by `mc:Ignorable` is declared in that XML part; preserve the declaration when its extension content remains, or remove the unused token. This proves structural readability, not Excel compatibility.
- When available, round-trip the workbook through an Excel-compatible office engine and repeat the case and structure checks; otherwise report that office opening was not verified.
- Repeat the complete validation after every later workbook edit, including renaming cases or changing formulas. Do not rely on a validation result produced before the final mutation.
- Compare the generated workbook with the final created and updated cases and report created versus updated case counts.
- Return the output path, the validation levels that actually passed, and any compatibility warning.
