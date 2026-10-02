---
title: Test case grill
impact: HIGH
impactDescription: separates project-grounded test-case improvements from new cases with their owning files before anything is written into the catalog
tags: testing, test-cases, qa, planning, scenarios, grill
---

# Test case grill

Use this rule only when the user invokes `/testcase-grill` or explicitly requests grill mode. A request to list cases alone does not activate it.

Describe the cases that should exist and where they belong. Separate changes to existing cases from cases that do not exist yet. Do not write case files, case code, or steps unless explicitly requested.

## Route to the rules

Read [testcase-conventions](./testcase-conventions.md) first, then read the rules the subject actually needs:

- Choosing or reorganizing owning folders and files → [testcase-file-structure](./testcase-file-structure.md)
- Writing the `name` hierarchy → [testcase-naming](./testcase-naming.md)
- Choosing case scope and the design/functional/data split → [testcase-content](./testcase-content.md)
- Shared setup that several proposed cases would repeat → [testcase-preconditions](./testcase-preconditions.md)

## Build the case list

Use the routed rules to determine supported proposals and their owning files. Remove exact and semantic duplicates from the proposed list. Report unresolved requirements as open questions instead of inventing cases.

## Classify the work

Classify every supported proposal after inspecting the existing catalog:

- **Improvements** — an existing case already owns the scenario but needs a concrete correction or missing setup, action, expected result, state, or confirmed requirement. Identify improvements by the existing case name. When renaming is needed, include the proposed name and reason. Identify the owning file and describe only the required delta.
- **New Test Cases** — no existing case owns the scenario, so a new catalog entry is required.

Do not classify a case as **Improvements** merely because a new case belongs in an existing file. Classification depends on whether an existing case already owns the scenario. Omit cases that are already complete and adequate.

## Output format

Return one title, then `### Improvements` and `### New Test Cases`. Inside each section, group cases by their owning file and use a numbered list so the user can refer to specific points later. Put the caterpillar emoji only in the title. Keep both sections visible; write `_No suggestions._` when a section is empty.

```md
🐛 **Test Case Grill: `<subject>`**

### Improvements

**`<owning folder>/<owning file>`**

1. **<existing dot-separated case name>** — Existing case: <exact catalog change>.

### New Test Cases

**`<owning folder>/<owning file>`**

1. **<new dot-separated case name>** — `Приоритет: <Самый высокий | Высокий | Средний | Низкий | Самый низкий>` — <setup, action, and observable expected result>.

   Итерации: `<parameter>: <value>; ...`.

2. **<new dot-separated case name>** — `Приоритет: <Самый высокий | Высокий | Средний | Низкий | Самый низкий>` — <setup, action, and observable expected result>.
```

Requirements:

- Follow each name with one concise description of the setup, action, and observable expected result.
- Assign and show the product priority from [testcase conventions](./testcase-conventions.md) for every new case. List uncertain assignments as open questions.
- For a parameterized proposal, list every confirmed iteration and all values referenced through `%parameter`; omit the iteration line for ordinary cases.
- For every new validation case and every improvement that changes validation requirements, automatically add `Предлагаемый текст валидации:` with one concise paste-ready draft based only on confirmed constraints; no separate user request is required. Keep updating the external page outside the grill plan and require separate authorization.
- Name the target file for every group, using the folder and file the case would actually own.
- For **Improvements**, identify improvements by the existing case name. When renaming is needed, include the proposed name and reason. State the exact catalog change.
- List unconfirmed requirements as open questions after the case list.
- Do not add an introduction, table, case code, or conclusion unless the user requests it.
