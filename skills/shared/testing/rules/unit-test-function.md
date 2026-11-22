---
title: Unit test plain functions
impact: HIGH
impactDescription: keeps function, factory, and handler tests direct, behavior-focused, and consistent with the rest of the suite
tags: testing, unit, functions, utils, coverage
---

# Unit test plain functions

For plain functions, factories, utilities, and handlers with no React.

> **First read [unit-test-conventions](./unit-test-conventions.md).** This rule adds only what is specific to plain functions.

## Assertions

Use exact assertions for known values: `toBe` for primitives and the repository's strict structural matcher (for example, `toStrictEqual`) when an object or array shape matters. Verify that omitted optional parts remain absent.

## Async functions

When a function depends on an API or another async collaborator, mock that boundary and cover the fulfilled and rejected behavior the function owns. Await async calls.
