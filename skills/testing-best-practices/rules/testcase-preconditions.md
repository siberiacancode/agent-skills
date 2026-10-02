---
title: Test case preconditions
impact: MEDIUM
impactDescription: keeps shared setup at the narrowest reusable scope instead of leaking into shared configuration
tags: testing, test-cases, qa, preconditions, scope
---

# Test case preconditions

For adding, moving, importing, and reorganizing test case preconditions.

> **First read [testcase-conventions](./testcase-conventions.md).** This rule adds only what is specific to preconditions.

Use the narrowest reusable scope.

- Single-use setup → case action.
- Reused within one file → file-level.
- Reused across files in a folder → folder-level.
- Reused across folders → global.

Only include setup required by the cases. Do not duplicate reusable preconditions inside cases.

Establish user and data state before opening dependent pages, tabs, or popups.

When adding a precondition, update its definition and type at the same scope.
