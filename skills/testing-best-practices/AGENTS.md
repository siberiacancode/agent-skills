# Testing Best Practices

**Version 1.0.0**
siberiacancode  
September 2026

> **Note:**  
> This document is optimized for agents and LLMs writing and reviewing Vitest unit tests and application integration-test locators.

---

## Abstract

Testing best practices for writing and reviewing Vitest unit tests and semantic `data-testid` locators used by application integration tests.

---

## Table of Contents

1. [Unit Test](#1-unit-test)
   - 1.1 [Unit test conventions](#11-unit-test-conventions)
   - 1.2 [Unit test plain functions](#12-unit-test-plain-functions)
   - 1.3 [Unit test React hooks](#13-unit-test-react-hooks)
   - 1.4 [Unit test standalone UI components](#14-unit-test-standalone-ui-components)
   - 1.5 [Unit test compound UI components](#15-unit-test-compound-ui-components)
   - 1.6 [Unit test grill](#16-unit-test-grill)
2. [Integration Locator](#2-integration-locator)
   - 2.1 [Integration locator test IDs](#21-integration-locator-test-ids)

---

## 1. Unit Test

### 1.1 Unit test conventions

The single source of truth shared by every unit test; the subject rules build on it.

- **Repository first:** do not write abstractly ideal unit tests. Continue the repository's existing test culture. Source order is same-module tests → closest similar tests → neighboring layer/type tests → existing helpers/fixtures/utils → implementation → generic unit-testing preferences.
- **Minimal structural difference:** infer naming, `describe` structure, setup/cleanup, fixtures, data creation, initialization, assertion style, spies/mocks, lifecycle/error/async style, import structure, verbosity, and scenario count from comparable tests. Adapt the closest pattern with the smallest necessary change; do not redesign the suite or refactor tests while adding coverage.
- **No invented contract:** add scenarios only from public behavior, an implementation branch this project normally covers, an analogous existing test, an explicit contract, a user request, a regression, or the coverage pattern for comparable subjects. Do not add cases just because they are possible, comprehensive, or generally considered best practice.
- **Naming fallback:** when no project convention exists, place the test next to its source as `name.test.ts` or `name.test.tsx`, preserving the source extension. Every test title is `Should <observable behavior>` in plain English. One behavior per `it`. Do not wrap the file in a `describe` named after the subject; `describe` is only for real grouping.
- **Ordering fallback:** shape/default → SSR → inputs (params/props) → behavior → react-to-changing-args → edge/error/cleanup.
- **Coverage fallback:** cover the behavior expected by existing conventions and stop when the expected contract is represented. Test independent dimensions separately, and add a combined case only when their interaction creates distinct behavior. Do not force unreachable branches or arbitrary values that only retest the language, runtime, or platform.
- **Assertion style:** follow comparable tests. If no project convention exists, assert observable results through output, state, DOM, callbacks, events, or errors; use infrastructure spies only when they are contract, have no reliable behavioral substitute, or match the closest related tests.
- **SSR/import/parametrization fallback:** use the project's SSR helper when server behavior is conventionally tested, import test primitives explicitly unless the project relies on globals, and use value tables only when setup and assertions are genuinely the same.
- **No new abstractions:** do not introduce helpers, factories, wrapper functions, fixture builders, aliases, extra types, setup abstractions, custom render functions, or new parametrization styles unless comparable tests already use them or correctness requires it.

### 1.2 Unit test plain functions

Pure functions and utils with no React. Inspect tests for functions with a similar contract to reuse project-specific forms, helpers, naming, setup, assertion style, and scenario count. Follow the closest pattern unless the current function's contract requires a clear deviation. Keep tests flat and direct unless comparable tests already abstract setup. Cover branches, errors, overloads, and transformations only to the depth this repository normally expects for similar functions. Add boundary values only when they switch a branch, trigger a guard/error, belong to the documented contract, or match an existing coverage pattern. Use the repository's matcher style; when no pattern exists, prefer exact matchers (`toBe`/`toEqual`/`toMatchObject`).

### 1.3 Unit test React hooks

Inspect tests for hooks with a similar public API to reuse project-specific forms, helpers, naming, setup, assertion style, lifecycle checks, and scenario count. Follow the closest pattern unless the current hook's contract requires a clear deviation. Order hook tests as: initial public contract → SSR when supported → arguments and overloads → behavior and conditionals → reaction to changing arguments → async and lifecycle, unless nearby hook tests order them differently. Use `initialProps` + `rerender` only for arguments whose later changes are part of the contract or are normally covered in comparable tests. Test meaningful input forms and overloads without creating a Cartesian product. Mock and spy in the same style as nearby tests, restore shared mutations, and prefer public effects unless comparable tests assert lifecycle/infrastructure directly. Open the matching reference for browser-API or listener hooks.

### 1.4 Unit test standalone UI components

A component tested independently. Inspect related component tests for project helpers, test-ID conventions, render setup, naming, assertions, and scenario count. Follow the closest pattern unless the current component exposes a different contract. Order: supported baseline contract → default render → meaningful props and variants → state → interaction → accessibility, unless nearby component tests order them differently. Use the repository's locator and assertion style; when no pattern exists, give the component a module-level local `data-testid` and assert public DOM, state, and interactions.

### 1.5 Unit test compound UI components

A public family of parts sharing state, behavior, or context. Inspect related compound tests for project helpers, part ordering, test-ID conventions, render setup, assertions, and scenario count. Follow the closest pattern while testing only relationships exposed by the current component. Give every public part its own stable `describe` when that matches local structure, cover its supported independent contract, then test context inheritance, explicit overrides, cross-part behavior, and composed accessibility that the component actually exposes. Use one canonical composition per relationship instead of multiplying parts, props, and variants.

### 1.6 Unit test grill

Invoke with `/unit-test-grill` to describe checks without writing test code. Read the shared conventions, the grill rule, and the matching function, hook, standalone-component, or compound-component rule. Return one title in the form `🐛 **Unit Test Grill: \`<subject>\`**`, followed by a list whose items use `- **Should <behavior>\*\* — <description>`, with an empty line between items. Put the emoji only in the title. Derive scenarios from existing suite conventions first, then from branches, guards, overloads, input forms, state transitions, owned transformations, errors, and lifecycle behavior. Exclude arbitrary edge values that only retest native behavior, and never create a Cartesian product of independent input dimensions.

## 2. Integration Locator

### 2.1 Integration locator test IDs

For application integration tests, treat `data-testid` values as a small semantic API required by current scenarios.

- Use `GROUP -> ELEMENT -> SEMANTIC_NAME` with `CLICKABLE`, `CHANGEABLE`, or `STATIC`.
- Do not add a page, feature, modal, form, sidebar, or layout merely as a namespace.
- Reuse base IDs such as `CLICKABLE.BUTTON.SIGN_IN` across pages and visual contexts.
- When duplicate instances coexist, append a stable runtime suffix: `${baseId}-${stableIdentifier}`.
- When one JSX node changes its logical action, switch the base ID; keep it when only visual/loading/disabled state changes.
- Give fields and errors independent semantic paths instead of deriving `-field` or `-error` from an input ID.
- Avoid `$ID`, `SELF_ID`, and branch-and-leaf collisions by placing each target under its actual semantic element type.
- Add IDs only for interaction, observable assertions, or stable scoping required by current integration tests.

This rule does not define E2E locators and does not replace module-level IDs in isolated UI-kit unit tests. Read [integration-locator-testids](rules/integration-locator-testids.md) for the complete rule.
