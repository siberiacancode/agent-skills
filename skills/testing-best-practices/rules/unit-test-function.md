---
title: Unit test plain functions
impact: HIGH
impactDescription: keeps function, factory, and handler tests direct, behavior-focused, and consistent with the rest of the suite
tags: testing, unit, functions, utils, coverage
---

# Unit test plain functions

For plain functions, factories, utilities, and handlers with no React.

> **First read [unit-test-conventions](./unit-test-conventions.md).** This rule adds only what is specific to plain functions.

**Related tests** — inspect tests for functions with a similar public contract or responsibility to reuse project-specific input forms, helpers, naming, setup, assertion style, and scenario count. Follow the closest pattern unless the current function's contract requires a clear deviation.

## Test order

- **Default behavior** — cover omitted arguments and default options.
- **Inputs and overloads** — cover every meaningful input form and public overload.
- **Conditionals and transformations** — cover branches that change the public result or side effect, and verify transformations owned by the function.
- **Errors** — cover thrown errors, rejected results, and handled invalid input where applicable.

## Assertions

Follow the repository's matcher style. Use exact assertions for known values; use `toBe` for primitives and the repository's strict structural matcher (for example, `toStrictEqual`) when an object or array shape matters. Verify that omitted optional parts remain absent. For callback or delegation contracts, assert calls, arguments, and order when they are the observable behavior.

## Async functions

When a function depends on an API or another async collaborator, mock that boundary and cover the fulfilled and rejected behavior the function owns. Await async calls, and restore fake timers or global spies through the established cleanup hooks.
