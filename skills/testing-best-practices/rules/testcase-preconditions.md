---
title: Test case preconditions
impact: MEDIUM
impactDescription: keeps shared setup at the narrowest reusable scope instead of leaking into shared configuration
tags: testing, test-cases, qa, preconditions, scope
---

# Test case preconditions

For adding, moving, importing, and reorganizing test case preconditions.

Use the narrowest reusable scope.

Treat each case as independent of previously executed cases. Do not assume state left by another case; establish only the state required by the current case.

## Reuse and required setup

- Include only setup required by the checked behavior. Omit item counts, pagination, and other data conditions unless the result depends on them.
- Keep single-use setup in the case action. Create a reusable precondition only when several cases share the same preliminary setup, such as an authenticated state, viewport, opened page, or repeated navigation path.
- Do not inline or duplicate a reusable precondition inside a case.
- Establish user and data state before opening dependent pages, tabs, or popups. Preserve this order when moving setup, and remove obsolete precondition references and definitions.

## Scope

- Reused within one file → file-level.
- Reused across files in a folder → folder-level.
- Reused across folders → global.
- When a case uses setup from several scopes, reference each precondition at its own reuse level instead of duplicating broader setup locally.

## Definitions, types, and imports

Follow the catalog's existing precondition architecture. When it uses precondition modules, typed keys, or shared imports, update definitions, types, and imports at the locations required by that architecture. Preserve its ownership boundaries and remove obsolete keys, types, and imports when moving or deleting a precondition.
