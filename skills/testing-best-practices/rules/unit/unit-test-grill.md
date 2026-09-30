---
title: Unit test grill
impact: HIGH
impactDescription: separates implementation-grounded unit-test improvements from new checks without writing tests or multiplying independent input dimensions
tags: testing, unit, planning, scenarios, grill
---

# Unit test grill

Use this rule when the user invokes `/unit-test-grill`, writes `unit-test-grill`, or asks to list unit-test scenarios before writing tests.

Describe the checks that should exist. Separate changes to existing tests from tests that do not exist yet. Do not write test code unless the user explicitly asks for it afterward.

## Route to the subject rule

Read [unit-test-conventions](./unit-test-conventions.md) first, then classify the implementation and read the matching rule:

- Plain function, utility, or helper → [unit-test-function](./unit-test-function.md)
- React hook → [unit-test-react-hook](./unit-test-react-hook.md)
- Standalone React component → [unit-test-react-component-standalone](./unit-test-react-component-standalone.md)
- Compound React component → [unit-test-react-component-compound](./unit-test-react-component-compound.md)

For a hook that subscribes to listeners or reads a browser API, also read [hook-listeners](./references/hook-listeners.md) or [hook-web-api](./references/hook-web-api.md).

## Build the scenario list

Inspect existing tests first, then the implementation, public types, and overloads. Include checks only when they are supported by repository conventions and by behavior created through:

- implementation branches, guards, and early returns;
- meaningful overloads and input forms;
- state transitions and reactions to changing arguments;
- documented transformations such as rounding, clamping, or normalization;
- errors, async completion, subscription, and cleanup where the implementation supports them.

Do not add arbitrary zero, empty, negative, fractional, or unusual values when they do not switch a branch, exercise a transformation, or represent a documented contract. Do not test native JavaScript, `Intl`, DOM, or browser behavior through a thin wrapper unless the wrapper changes that behavior.

## Avoid combinatorial suites

Treat independent input dimensions separately. If a hook accepts both multiple target forms and callback/options overloads:

- exercise the target-dependent suite for every target form using one canonical overload;
- exercise every callback/options overload using one canonical target;
- never nest parameterization for independent input dimensions;
- add a combined case only when the implementation contains behavior or a branch specific to that combination.

Every overload and meaningful input form should appear in at least one scenario only when comparable tests in this repository cover that axis or the contract makes it explicit. Do not copy every unrelated behavior check.

## Classify the work

Compare every supported scenario with the existing suite before writing the final list:

- **Improvements** — an existing test already owns the behavior but needs a concrete correction, assertion, state, branch, or lifecycle check. Name the existing test or file and describe only the missing delta.
- **New Tests** — no existing test owns the behavior, so a new test is required.

Do not classify a scenario as **Improvements** merely because its future test belongs in an existing file. Classification depends on whether an existing test already owns the behavior. Omit scenarios that are already covered adequately.

## Output format

Return one title followed by `### Improvements` and `### New Tests`. Use a numbered list inside each section. Put the caterpillar emoji only in the title. Use an empty line between every list item so the user can refer to specific points later. Keep both sections visible; write `_No suggestions._` when a section is empty.

```md
🐛 **Unit Test Grill: `formatProductDate`**

### Improvements

1. **Should format product date** — Existing test in `format-product-date.test.ts`: add an exact output assertion instead of checking only that a string is returned.

### New Tests

1. **Should format leap day** — Pass a leap-day timestamp and assert that the calendar date is preserved.
```

Requirements:

- Keep every proposed test name in the established `Should <observable behavior>` form.
- Number proposed tests inside each section with `1.`, `2.`, `3.`, and so on.
- For **Improvements**, identify the existing test or file and the exact coverage change.
- Follow each name with one concise description of the setup, action, and observable assertion.
- Use the user's language for descriptions while preserving English test titles when the suite uses English titles.
- Do not add an introduction, table, implementation code, or conclusion unless the user requests it.
