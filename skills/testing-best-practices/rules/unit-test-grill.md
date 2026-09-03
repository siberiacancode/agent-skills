---
title: Unit test grill
impact: HIGH
impactDescription: produces an implementation-grounded list of unit-test checks without writing tests or multiplying independent input dimensions
tags: testing, unit, planning, scenarios, grill
---

# Unit test grill

Use this rule when the user invokes `/unit-test-grill`, writes `unit-test-grill`, or asks to list unit-test scenarios before writing tests.

Describe the checks that should exist. Do not write test code unless the user explicitly asks for it afterward.

## Route to the subject rule

Read [unit-test-conventions](./unit-test-conventions.md) first, then classify the implementation and read the matching rule:

- Plain function, utility, or helper → [unit-test-function](./unit-test-function.md)
- React hook → [unit-test-react-hook](./unit-test-react-hook.md)
- Standalone React component → [unit-test-ui-component-standalone](./unit-test-ui-component-standalone.md)
- Compound React component → [unit-test-ui-component-compound](./unit-test-ui-component-compound.md)

For a hook that subscribes to listeners or reads a browser API, also read [hook-listeners](./references/hook-listeners.md) or [hook-web-api](./references/hook-web-api.md).

## Build the scenario list

Inspect the implementation, public types, overloads, and existing suite conventions. Include checks for observable behavior created by:

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

Every overload and meaningful input form must appear in at least one scenario, but it does not need a copy of every unrelated behavior check.

## Output format

Return one title followed by a list. Put the caterpillar emoji only in the title. Use an empty line between every list item.

```md
🐛 **Unit Test Grill: `formatProductDate`**

- **Should format product date** — Call the function with a representative timestamp and assert the exact formatted date.

- **Should format leap day** — Pass a leap-day timestamp and assert that the calendar date is preserved.
```

Requirements:

- Keep every proposed test name in the established `Should <observable behavior>` form.
- Follow each name with one concise description of the setup, action, and observable assertion.
- Use the user's language for descriptions while preserving English test titles when the suite uses English titles.
- Do not add an introduction, table, implementation code, or conclusion unless the user requests it.
