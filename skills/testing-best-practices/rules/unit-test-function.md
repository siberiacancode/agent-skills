---
title: Unit test plain functions
impact: HIGH
impactDescription: keeps utility tests flat, behavior-focused, and consistent with the rest of the suite
tags: testing, unit, functions, utils, coverage
---

# Unit test plain functions

For pure functions, utils, and helpers with no React.

> **First read [unit-test-conventions](./unit-test-conventions.md).** This rule adds only what is specific to plain functions.

**Related tests** — inspect tests for functions with a similar public contract or responsibility to reuse project-specific input forms, helpers, naming, setup, assertion style, and scenario count. Follow the closest pattern unless the current function's contract requires a clear deviation.

## Test order

- **Default behavior** — cover omitted arguments and default options.
- **Inputs and overloads** — cover every meaningful input form and public overload.
- **Conditionals and transformations** — walk each branch and verify transformations owned by the function.
- **Errors** — cover thrown errors, rejected results, and handled invalid input where applicable.

## Assertions

Prefer exact assertions for known values. For composite outputs, inspect their meaningful parts independently and verify that omitted optional parts remain absent.

## Async functions

When a function depends on an API or another async collaborator, mock that boundary and cover the fulfilled and rejected behavior the function owns.
