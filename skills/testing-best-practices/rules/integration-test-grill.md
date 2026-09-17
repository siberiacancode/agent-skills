---
title: Integration test grill
impact: HIGH
impactDescription: maps confirmed product cases to browser or component automation before test code is written
tags: testing, integration-tests, planning, scenarios, grill
---

# Integration test grill

Use this rule when the user invokes `/integration-test-grill`, writes `integration-test-grill`, or asks to plan integration autotests before implementing them.

Describe the automation that should exist and where it belongs. Do not write test files or production code unless the user explicitly asks for implementation afterward.

## Route to the rules

Read [integration-test-conventions](./integration-test-conventions.md) first, then:

- use [integration-test-browser](./integration-test-browser.md) for scenarios that may require the full browser boundary;
- use [integration-test-component](./integration-test-component.md) for scenarios that may fit a mounted feature boundary;
- use [integration-test-mocks](./integration-test-mocks.md) when deterministic server behavior is required;
- use [integration-test-locator-testids](./integration-test-locator-testids.md) only when locator work is required.

## Build the automation list

1. Inspect the feature's existing test cases and autotests first.
2. Deduplicate cases already automated at the appropriate boundary.
3. If a required scenario has no suitable case, design it through the test-case conventions before proposing automation.
4. Choose `component` when a realistic mounted feature boundary proves the case; choose `browser` only when browser-owned or full-application behavior is necessary.
5. Identify required scenario state, mocks, and case ID when the project's mock architecture uses one.
6. Identify the trigger, async events that must be observed, and final user-visible result.
7. Reuse existing locators. Route missing semantic locators through the locator rule instead of inventing strings in the plan.

Do not derive extra scenarios solely from implementation branches, split one test case into multiple technical checks, or propose both browser and component tests for the same proof without distinct ownership.

## Output format

Return one title, then group scenarios by their future owning file. Use a numbered list inside each owning-file group so the user can refer to specific points later. Put the caterpillar emoji only in the title and use an empty line between every list item.

```md
🐛 **Integration Test Grill: `Авторизация`**

**`tests/autotests/authorization/phone/phone-step.component.tsx`**

1. **Валидация номера** — Source: `Авторизация. Телефон. Валидация`; boundary: component, because a mounted login feature proves the behavior; mocks: none; trigger/result: submit invalid input and observe the field error.

**`tests/autotests/authorization/phone/phone-step.browser.ts`**

1. **Продолжить. Успех** — Source: `Авторизация. Телефон. Продолжить. Успех`; boundary: browser, because the case crosses the application step through a real request; mocks: `PHONE_SUBMIT_SUCCESS`; async: observe OTP request and response around submit; result: OTP input is visible.
```

Requirements:

- Name the source test case for every proposed autotest.
- Number scenarios inside each owning-file group with `1.`, `2.`, `3.`, and so on.
- State `browser` or `component` and give the behavior-based reason.
- Name mocks and case IDs only when needed and confirmed by project structure.
- State meaningful async synchronization when the scenario has side effects.
- List missing or ambiguous product cases as open questions rather than inventing behavior.
- Do not include implementation code, an introduction, or a conclusion unless requested.
