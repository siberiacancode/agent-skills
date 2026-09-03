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

- **Naming:** place the test next to its source as `name.test.ts` or `name.test.tsx`, preserving the source extension. Every test title is `Should <observable behavior>` in plain English. One behavior per `it`. Do not wrap the file in a `describe` named after the subject — the filename already says what's tested; `describe` is only for real grouping (target parametrization, compound parts, an exported helper).
- **Cross-test consistency:** reuse the exact title and ordering of an equivalent test elsewhere for the same logic (cleanup is always `Should cleanup on unmount`, base render is always `Should render as default`).
- **Ordering:** shape/default → SSR → inputs (params/props) → behavior → react-to-changing-args → edge/error/cleanup.
- **Coverage is behavioral, not a percentage:** read the implementation and walk every branch, meaningful input form, and overload before writing; hit each early-return guard both ways; test reaction to changing args via `rerender`; cover boundaries only when they switch a branch, exercise an owned transformation, or belong to the documented contract. Don't chase 100% on unreachable defensive branches. Report gaps as concrete missing cases.
- **Assert observable behavior, not implementation machinery:** assert returned values/state, callbacks, emitted events, DOM, resolved/rejected results, and thrown errors. Timers and events drive the environment; do not make `vi.getTimerCount()`, timer IDs/calls, internal refs/effects, or listener subscription calls the assertion when cancellation or cleanup can be proven through the public effect. Infrastructure spies are reserved for interactions that are themselves an explicit public contract and cannot be observed behaviorally.
- **SSR by default:** anything that can run on the server gets an SSR test, right after the shape test.
- **Explicit imports:** always import test primitives; never rely on Vitest globals.
- **`forEach`, not `test.each`:** parametrize value lists and target/input-form lists with a plain `forEach`. Never nest parameterization for independent dimensions such as target forms and callback/options overloads; test each axis with a canonical representative of the other.
- **Keep it flat:** no factories or abstractions to solve a simple case.

### 1.2 Unit test plain functions

Pure functions and utils with no React. Inspect tests for functions with a similar contract to reuse project-specific forms, helpers, naming, and setup, but do not copy their whole suite when behavior does not depend on the input form. Keep tests flat and direct. Cover every branch, error path, meaningful overload, and transformation owned by the function. Add boundary values only when they switch a branch, trigger a guard/error, or belong to the documented contract. Use exact matchers (`toBe`/`toEqual`/`toMatchObject`), not loose truthiness. For composite outputs, inspect meaningful parts independently, including that optional parts are absent. Parametrize value tables with `forEach`; add no abstraction beyond that. For async functions, mock API or collaborator boundaries and cover the fulfilled and rejected behavior the function owns.

### 1.3 Unit test React hooks

Inspect tests for hooks with a similar public API to reuse project-specific forms, helpers, naming, and setup, but do not copy their whole suite when behavior does not depend on the form. Order hook tests as: initial public contract → SSR when supported → arguments and overloads → behavior and conditionals → reaction to changing arguments → async and lifecycle. Run state changes through the renderer's update utility and re-read `result.current`; use `initialProps` + `rerender` only for arguments whose later changes are part of the contract. Test meaningful input forms and overloads without creating a Cartesian product of independent dimensions. Mock external boundaries only as needed, restore timers, spies, globals, browser state, and other shared mutations, and assert observable behavior instead of internal machinery. Open the matching reference for browser-API or listener hooks. Test exported helpers separately.

### 1.4 Unit test standalone UI components

A component tested independently. Inspect related component tests for project helpers, test-ID conventions, render setup, naming, and assertions, but copy only contracts the current component exposes. Order: supported baseline contract → default render → meaningful props and variants → state → interaction → accessibility. Give the component a module-level local `data-testid`, select it consistently through test-ID queries, and assert its public DOM, state, and interactions rather than internals.

### 1.5 Unit test compound UI components

A public family of parts sharing state, behavior, or context. Inspect related compound tests for project helpers and structure, but test only relationships exposed by the current component. Give every public part its own stable `describe`, cover its supported independent contract, then test context inheritance, explicit overrides, cross-part behavior, and composed accessibility. Give each queried part a module-level local test-ID constant and use a named function for repeated parts. Use one canonical composition per relationship instead of multiplying parts, props, and variants.

### 1.6 Unit test grill

Invoke with `/unit-test-grill` to describe checks without writing test code. Read the shared conventions, the grill rule, and the matching function, hook, standalone-component, or compound-component rule. Return one title in the form `🐛 **Unit Test Grill: \`<subject>\`**`, followed by a list whose items use `- **Should <behavior>\*\* — <description>`, with an empty line between items. Put the emoji only in the title. Derive scenarios from branches, guards, overloads, input forms, state transitions, owned transformations, errors, and lifecycle behavior. Exclude arbitrary edge values that only retest native behavior, and never create a Cartesian product of independent input dimensions.

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
