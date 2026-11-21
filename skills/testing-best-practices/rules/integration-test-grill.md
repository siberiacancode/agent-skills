---
title: Integration test grill
impact: HIGH
impactDescription: separates improvements to existing automation from new browser, component, or server tests mapped to confirmed product cases
tags: testing, integration-tests, planning, scenarios, grill
---

# Integration test grill

Use this rule when the user invokes `/integration-test-grill`, writes `integration-test-grill`, or asks to plan integration autotests before implementing them.

Describe the automation that should exist and where it belongs. Separate changes to existing autotests from autotests that do not exist yet. Do not write test files or production code unless the user explicitly asks for implementation afterward.

## Route to the rules

Read [integration-test-conventions](./integration-test-conventions.md) first, then:

- use [integration-test-browser](./integration-test-browser.md) for scenarios that may require full application bootstrap or context;
- use [integration-test-component](./integration-test-component.md) for scenarios that may fit a mounted feature boundary;
- use [integration-test-server](./integration-test-server.md) for scenarios that exercise a public server entry point or service orchestration;
- use [integration-test-setup](./integration-test-setup.md) when the plan needs test-case preconditions or component mount setup and wrappers;
- use [integration-test-mocks](./integration-test-mocks.md) when a browser or component scenario requires deterministic backend behavior;
- use [integration-test-locator-testids](./integration-test-locator-testids.md) only when locator work is required.

## Build the automation list

1. Inspect the feature's existing test cases and autotests first.
2. Deduplicate cases already automated adequately at the appropriate boundary.
3. If a required scenario has no suitable confirmed test case, stop the automation flow, report that the case is missing, and request it from the user.
4. Choose `server` when the case proves a public server entry point or service orchestration, `component` when a realistic mounted feature boundary proves the case, and `browser` only when full application bootstrap or context is necessary.
5. Identify required scenario state, mocks, and case ID when the project's mock architecture uses one.
6. Identify the trigger, async events that must be observed, and final user-visible result.
7. Reuse existing locators. Route missing semantic locators through the locator rule instead of inventing strings in the plan.

Do not derive extra scenarios solely from implementation branches, split one test case into multiple technical checks, or propose more than one boundary for the same proof without distinct ownership.

## Classify the work

Classify every supported proposal after inspecting the existing autotests:

- **Improvements** — an existing autotest already owns the source case but needs a concrete correction or missing assertion, state, synchronization step, mock, locator, or result check. Name the existing test or file and describe only the required delta.
- **New Tests** — the source case is not automated at the appropriate boundary, so a new autotest is required.

Do not classify an autotest as **Improvements** merely because a new scenario belongs in an existing file. Classification depends on whether an existing autotest already owns the source case. Omit cases that are already automated adequately.

## Output format

Return one title, then `### Improvements` and `### New Tests`. Inside each section, group scenarios by their owning file and use a numbered list so the user can refer to specific points later. Put the caterpillar emoji only in the title and use an empty line between every list item. Keep both sections visible; write `_No suggestions._` when a section is empty.

```md
🐛 **Integration Test Grill: `Authentication`**

### Improvements

**`tests/autotests/authorization/phone/phone-step.component.tsx`**

1. **Phone validation** — Existing autotest: add the missing assertion for the confirmed field-error text; source: `Authentication.Phone.Validation`; boundary: component, because a mounted login feature proves the behavior; mocks: none; trigger/result: submit invalid input and observe the field error.

### New Tests

**`tests/autotests/authorization/phone/phone-step.browser.ts`**

1. **Continue successfully** — Source: `Authentication.Phone.Continue.Success`; boundary: browser, because the case requires full application navigation from the phone step to the OTP route; mocks: `PHONE_SUBMIT_SUCCESS`; async: observe OTP request and response around submit; result: the application opens the OTP route and its input is visible.
```

Requirements:

- Name the source test case for every proposed autotest.
- Number scenarios inside each owning-file group and section with `1.`, `2.`, `3.`, and so on.
- For **Improvements**, identify the existing autotest or file and the exact automation change.
- State `browser`, `component`, or `server` and give the behavior-based reason.
- Name mocks and case IDs only when needed and confirmed by project structure.
- State meaningful async synchronization when the scenario has side effects.
- List missing or ambiguous product cases as open questions rather than inventing behavior.
- Do not include implementation code, an introduction, or a conclusion unless requested.
