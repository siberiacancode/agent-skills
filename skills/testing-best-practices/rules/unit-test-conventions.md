---
title: Unit test conventions
impact: HIGH
impactDescription: the single source of truth for naming, ordering, coverage, SSR, imports, and parametrization shared by every unit test
tags: testing, unit, naming, coverage, ssr, conventions
---

# Unit test conventions

These conventions apply to every unit test. Read them before the subject-specific rule for [plain functions](./unit-test-function.md), [React hooks](./unit-test-react-hook.md), [standalone UI components](./unit-test-ui-component-standalone.md), or [compound UI components](./unit-test-ui-component-compound.md).

## 0. Repository first

Do not write abstractly ideal unit tests. Continue the repository's existing test culture.

Use sources in this order:

1. an existing test for the same module;
2. tests for the most similar subjects in the same project;
3. neighboring tests from the same layer or subject type;
4. existing test helpers, fixtures, factories, and utilities;
5. the implementation under test;
6. generic unit-testing preferences.

Existing repository conventions override generic testing preferences. Before writing or changing tests, infer naming, `describe` structure, setup/cleanup, fixtures, data creation, initialization, assertion style, spies/mocks, lifecycle/error/async style, import structure, verbosity, and the usual number of scenarios for comparable subjects.

When an existing or neighboring pattern can be adapted, make the smallest structural change necessary. Do not redesign the suite, introduce a new testing style, or refactor tests while adding coverage.

## 1. Naming

Place the test next to its source and preserve the source extension: `name.test.ts` next to `name.ts`, and `name.test.tsx` next to `name.tsx`.

Name every test `Should <observable behavior>`. Describe what the subject does, not how it is implemented. One `it` should cover one behavior.

Do not wrap the whole file in a `describe` named after the subject. Use `describe` only when the grouping adds meaning, such as an independently addressable part or a genuinely shared parametrized context.

## 2. Related tests

Inspect existing tests before writing new ones. Prefer tests for the same subject, then subjects with a similar public contract.

Reuse established naming, ordering, helpers, setup, mocks, and interaction patterns. If comparable tests consistently use white-box spies, lifecycle assertions, direct implementation setup, or a specific helper, keep that approach. If they test only through public behavior, keep that approach.

When no relevant tests exist, use these conventions as the default.

## 3. Ordering

Arrange tests in this order:

1. **Shape / default** — base output and public API surface.
2. **SSR** — server-side behavior.
3. **Inputs** — parameters, props, options, and supported input forms.
4. **Behavior** — actions, transitions, events, and condition-dependent behavior.
5. **Edge & error** — boundaries, failures, cleanup, and teardown.

Subject-specific rules may refine this order without replacing it.

## 4. Coverage

Use two passes when identifying scenarios:

- **Public contract** — cover supported input forms, meaningful input changes, returned capabilities, observable behavior, and failure paths.
- **Reachable logic** — inspect the implementation and cover each caller-reachable conditional, guard, early return, and alternative path.

Test independent input dimensions separately. Use one representative value while testing another dimension, and add a combined case only when their interaction creates distinct behavior.

Do not force unreachable defensive branches or add arbitrary values that only retest the language, runtime, or an external platform. Coverage percentages support the review but do not define completeness.

Add a scenario only when it comes from public behavior, an implementation branch this project normally covers, an analogous existing test, an explicit contract, a user request, a regression, or the coverage pattern for comparable subjects. Do not add cases just because they are possible, comprehensive, or generally considered best practice.

## 5. Observable behavior

Use test tools to drive the environment, then assert results available through the public contract: output, state, DOM, callbacks, events, or errors.

Do not assert internal timers, listener registration, effect order, private state, or other implementation machinery when the same guarantee can be observed publicly.

For cancellation and cleanup, trigger the relevant condition after cancellation or unmount and verify that no new public effect occurs.

Assert an infrastructure interaction only when that interaction is itself part of the public contract, has no reliable behavioral substitute, or matches the established style of the closest related tests.

## 6. SSR by default

Hooks and components that support server rendering get an SSR test by default, placed immediately after the shape test. Use the project's existing SSR helper and conventions.

## 7. Explicit imports

Import test primitives explicitly from the project's test library. Do not rely on globals, and import only what the file uses.

## 8. Parametrize repeated cases

Use `forEach` when the same setup, action, and assertion apply to multiple values. Do not use `test.each` / `it.each` or copy nearly identical tests.

Treat independent input dimensions separately. Use one representative value while testing another dimension, and add a combined case only when the combination has distinct behavior.

Do not parameterize cases whose setup or expected behavior differs materially.

## 9. Keep simple tests direct

Do not introduce helpers, factories, or abstractions unless they remove meaningful repetition or encode established project setup. Prefer direct setup, action, and assertion for simple cases.

## Review mode

Report concrete deviations and missing observable behaviors. Explain what should change and why; do not report coverage percentages alone.
