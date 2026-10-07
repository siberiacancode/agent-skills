---
title: Test case grill
impact: HIGH
impactDescription: separates project-grounded test-case improvements from new cases with their owning files before anything is written into the catalog
tags: testing, test-cases, qa, planning, scenarios, grill
---

# Test case grill

Use this rule when the user invokes `/testcase-grill`, writes `testcase-grill`, or asks to plan test-case coverage before writing cases.

Describe the cases that should exist and where they belong. Separate changes to existing cases from cases that do not exist yet. Do not write repository case files or produce a Test IT upload workbook unless the user explicitly asks for implementation afterward.

Inspect the existing catalog before classifying coverage. When the catalog is a supplied Test IT export, parse it with [testcase-testit-xlsx-read](./testcase-testit-xlsx-read.md). Propose a viewport variant only when the confirmed behavior, control availability, or layout is viewport-specific.

## Classify the work

Classify every supported proposal after inspecting the existing catalog:

- **Improvements** — an existing case owns the scenario but needs a specific correction. Identify it by case name and owning file; describe only the delta, including any rename and its reason.
- **New Test Cases** — no existing case owns the scenario, so a new catalog entry is required.

Do not classify a case as **Improvements** merely because a new case belongs in an existing file. Classification depends on whether an existing case already owns the scenario. Omit cases that are already complete and adequate.

## Output format

Return one title, then `### Improvements` and `### New Test Cases`. Inside each section, group cases by their owning file and use a numbered list so the user can refer to specific points later. Put the caterpillar emoji only in the title. Keep an empty line between list items. Keep both sections visible; write `_No suggestions._` when a section is empty.

```md
🐛 **Test Case Grill: `<subject>`**

### Improvements

**`<owning folder>/<owning file>`**

1. **<existing dot-separated case name>** — Existing case: <exact catalog change>.

### New Test Cases

**`<owning folder>/<owning file>`**

1. **<new dot-separated case name>** — `Приоритет: <Самый высокий | Высокий | Средний | Низкий | Самый низкий>` — <setup, action, and observable expected result>.

   Итерации: `<parameter>: <value>; ...`.

```

Requirements:

- Render every proposed name according to the hierarchy and exact-interface-text rules in [testcase naming](./testcase-naming.md).
- Follow each name with one concise description of the setup, action, and observable expected result.
- Assign and show the product priority from [testcase conventions](./testcase-conventions.md) for every new case. List uncertain assignments as open questions.
- For a parameterized proposal, render every iteration established under the parameterized-case contract in [testcase content](./testcase-content.md); omit the iteration line for ordinary cases.
- Apply the validation-draft requirement from [testcase content](./testcase-content.md). Render the draft under `Предлагаемый текст валидации:` and keep external-page changes outside the grill plan.
- Name the target file for every group, using the folder and file the case would actually own.
- List unconfirmed requirements as open questions after the case list.
- Do not add an introduction, table, case code, or conclusion unless the user requests it.
