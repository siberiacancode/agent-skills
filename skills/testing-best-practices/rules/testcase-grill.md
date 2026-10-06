---
title: Test case grill
impact: HIGH
impactDescription: separates project-grounded test-case improvements from new cases with their owning files before anything is written into the catalog
tags: testing, test-cases, qa, planning, scenarios, grill
---

# Test case grill

Use this rule only when the user invokes `/testcase-grill` or explicitly requests grill mode. A request to list cases alone does not activate it.

Describe the cases that should exist and where they belong. Separate changes to existing cases from cases that do not exist yet. This is planning output, not a full executable `steps` array or repository implementation; follow the authorization boundary in the skill entrypoint for any later file changes.

## Build the case list

Read [testcase-conventions](./testcase-conventions.md) first, then read the rules the subject actually needs:

- Choosing or reorganizing owning folders and files → [testcase-file-structure](./testcase-file-structure.md)
- Writing the `name` hierarchy → [testcase-naming](./testcase-naming.md)
- Choosing case scope and the design/functional/data split → [testcase-content](./testcase-content.md)
- Shared setup that several proposed cases would repeat → [testcase-preconditions](./testcase-preconditions.md)

Inspect the existing catalog and relevant application evidence using the Project first order in [testcase conventions](./testcase-conventions.md). Use the routed rules to determine supported proposals and their owning files. Remove exact and semantic duplicates from the proposed list. Report unresolved requirements as open questions instead of inventing cases.

Before proposing a separate case, apply the atomicity, proof-economy, and data-case rules from [testcase content](./testcase-content.md) and the ownership rules from [file structure](./testcase-file-structure.md). Propose a viewport variant only when the confirmed behavior, control availability, or layout is viewport-specific.

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
