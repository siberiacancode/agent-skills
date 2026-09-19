---
title: Test case grill
impact: HIGH
impactDescription: separates project-grounded test-case improvements from new cases with their owning files before anything is written into the catalog
tags: testing, test-cases, qa, planning, scenarios, grill
---

# Test case grill

Use this rule when the user invokes `/testcase-grill`, writes `testcase-grill`, or asks to list test cases before writing them into the catalog.

Describe the cases that should exist and where they belong. Separate changes to existing cases from cases that do not exist yet. Do not write case files, case code, or `steps` unless the user explicitly asks for them afterward.

## Route to the rules

Read [testcase-conventions](./testcase-conventions.md) first, then read the rules the subject actually needs:

- Choosing or reorganizing owning folders and files → [testcase-file-structure](./testcase-file-structure.md)
- Writing the `name` hierarchy → [testcase-naming](./testcase-naming.md)
- Choosing case scope and the design/functional/data split → [testcase-content](./testcase-content.md)
- Shared setup that several proposed cases would repeat → [testcase-preconditions](./testcase-preconditions.md)

## Build the case list

Inspect the existing catalog first, then the relevant application code: routes, components, labels, validation, API calls, redirects, permissions, links, UI states, and viewport-specific controls.

Before proposing anything, compare the target coverage with existing `name`s, file ownership, and confirmed planned cases. Drop exact and semantic duplicates that are already adequate.

Include a case only when it is supported by confirmed behavior created through:

- a distinct user-facing scenario on the owned page or block;
- a conditional or mutually exclusive UI state, such as empty, loading, error, or permission state;
- validation rules and their concrete messages;
- navigation, requests, redirects, storage or cookie changes, and toasts;
- values rendered from request or API data;
- static composition that belongs to a design case.

When requirements, labels, routes, design links, API behavior, validation messages, or user states are unconfirmed, list the open question instead of inventing the case.

## Avoid a bloated list

- Propose one `Данные` case per stable field set; split only for mutually exclusive conditional content.
- Do not propose a case per displayed field unless the field has independent behavior, validation, formatting, visibility rules, or standalone risk.
- Do not propose a viewport variant unless the control or layout is genuinely viewport-specific.
- Do not propose both a click case and a link-attribute case, or both a navigation case and its request case, when one already proves the behavior.
- Keep design coverage out of functional and data cases.

## Classify the work

Classify every supported proposal after inspecting the existing catalog:

- **Improvements** — an existing case already owns the scenario but needs a concrete correction or missing setup, action, expected result, state, or confirmed requirement. Keep its current `name`, identify the owning file, and describe only the required delta.
- **New Test Cases** — no existing case owns the scenario, so a new catalog entry is required.

Do not classify a case as **Improvements** merely because a new case belongs in an existing file. Classification depends on whether an existing case already owns the scenario. Omit cases that are already complete and adequate.

## Output format

Return one title, then `### Improvements` and `### New Test Cases`. Inside each section, group cases by their owning file and use a numbered list so the user can refer to specific points later. Put the caterpillar emoji only in the title. Use an empty line between every list item. Keep both sections visible; write `_No suggestions._` when a section is empty.

```md
🐛 **Test Case Grill: `<subject>`**

### Improvements

**`<owning folder>/<owning file>`**

1. **<existing dot-separated case name>** — Existing case: <exact catalog change>.

### New Test Cases

**`<owning folder>/<owning file>`**

1. **<new dot-separated case name>** — <setup, action, and observable expected result>.

2. **<new dot-separated case name>** — <setup, action, and observable expected result>.
```

Requirements:

- Keep every proposed `name` in the project's dot-separated hierarchy, with interface text matched exactly.
- Follow each name with one concise description of the setup, action, and observable expected result.
- Name the target file for every group, using the folder and file the case would actually own.
- Number cases inside each owning-file group and section with `1.`, `2.`, `3.`, and so on.
- For **Improvements**, keep the existing case name and state the exact catalog change.
- List unconfirmed requirements as open questions after the case list.
- Do not add an introduction, table, case code, or conclusion unless the user requests it.
