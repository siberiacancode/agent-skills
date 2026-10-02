---
title: Unit test conventions
impact: HIGH
impactDescription: the single source of truth for naming, ordering, coverage, imports, parametrization, and isolation shared by every unit test
tags: testing, unit, naming, coverage, conventions
---

# Unit test conventions

These conventions apply to every unit test. Read them before the subject-specific rule for [plain functions](./unit-test-function.md), [React hooks](./unit-test-react-hook.md), [standalone React components](./unit-test-react-component-standalone.md), or [compound React components](./unit-test-react-component-compound.md).

## Repository first

Do not write abstractly ideal unit tests. Continue the repository's existing test culture.

Use sources in this order:

1. an existing test for the same module;
2. tests for the most similar subjects in the same project;
3. neighboring tests from the same layer or subject type;
4. existing test helpers, fixtures, factories, and utilities;
5. the implementation under test;
6. generic unit-testing preferences.

Existing repository conventions override generic testing preferences. Before writing or changing tests, infer naming, `describe` structure, setup/cleanup, fixtures, data creation, initialization, assertion style, spies/mocks, lifecycle/error/async style, import structure, verbosity, and the usual number of scenarios for comparable subjects.

When an existing or neighboring pattern can be adapted, make the smallest structural change necessary. Do not redesign the suite, introduce a new testing style, or refactor tests while adding coverage. When no relevant example exists, use the conventions below as the default.

## Naming

Place the test next to its source and preserve the source extension: `name.test.ts` next to `name.ts`, and `name.test.tsx` next to `name.tsx`.

New tests should use `Should <observable behavior>`. Describe what the subject does, not how it is implemented. Preserve established wording in existing tests unless the test is being changed. One `it` should cover one independently meaningful behavior; equivalent input values may be checked in one test.

Keep one outer `describe('<subject>')` when this is the repository convention. Use nested `describe` only when the grouping adds meaning, such as an independently addressable part or a genuinely shared parametrized context.

## Ordering

For plain functions, factories, utilities, and handlers, arrange tests in this order:

1. **Default** — base output and default options.
2. **Inputs and variants** — parameters, overloads, and supported input forms.
3. **Behavior** — transformations, branches, actions, and condition-dependent behavior.
4. **Errors and cleanup** — failures, boundaries, teardown, and other observable side effects.

Subject-specific rules may refine this order and add checks such as SSR, rerendering, interaction, or accessibility where those are part of the subject's contract.

## Coverage

Use two passes when identifying scenarios:

- **Public contract** — cover supported input forms, meaningful input changes, returned capabilities, observable behavior, and failure paths.
- **Reachable logic** — inspect the implementation and cover caller-reachable branches, guards, early returns, and alternative paths when they change the public result or side effect, or when this project normally covers them.

Test independent input dimensions separately. Use one representative value while testing another dimension, and add a combined case only when their interaction creates distinct behavior.

Do not force unreachable defensive branches or add arbitrary values that only retest the language, runtime, or an external platform. Coverage percentages support the review but do not define completeness.

Add a scenario only when it comes from public behavior, an implementation branch this project normally covers, an analogous existing test, an explicit contract, a user request, a regression, or the coverage pattern for comparable subjects. Do not add cases just because they are possible, comprehensive, or generally considered best practice.

## Observable behavior

Use test tools to drive the environment, then assert results available through the public contract: output, state, DOM, callbacks, events, or errors.

Do not assert internal timers, listener registration, effect order, private state, or other implementation machinery when the same guarantee can be observed publicly.

For cancellation and cleanup, trigger the relevant condition after cancellation or unmount and verify that no new public effect occurs.

Assert an infrastructure interaction only when that interaction is itself part of the public contract, has no reliable behavioral substitute, or matches the established style of the closest related tests.

For callback, delegation, middleware, and interceptor APIs, calls, arguments, and call order are observable behavior when they are part of the function's contract.

## Isolation

First check the test runner's automatic clear, reset, and restore settings. Explicitly restore only state not covered by that configuration: fake timers, `vi.stubGlobal`, direct writes to browser globals, storage, history, and shared fixtures. Clear or reset other shared mock state using the repository's established lifecycle mechanisms.

## SSR when applicable

Add an SSR test when server rendering is part of the subject's public contract or materially changes its behavior. Use the project's existing SSR helper and conventions.

## Explicit imports

Import test primitives explicitly when required by the test runner's configuration, and import only what the file uses. When globals are enabled, do not add redundant imports to new tests; preserve explicit imports when extending a neighboring file that already uses them.

## Parametrize repeated cases

Use `forEach` when the same setup, action, and assertion apply to equivalent values. Do not use `test.each` / `it.each` or copy nearly identical tests unless that is already the repository convention.

Do not parameterize cases whose setup or expected behavior differs materially.

## Keep simple tests direct

Do not introduce helpers, factories, or abstractions unless they remove meaningful repetition or encode established project setup. Prefer direct setup, action, and assertion for simple cases.

## Review mode

Report concrete deviations and missing observable behaviors. Explain what should change and why; do not report coverage percentages alone.
