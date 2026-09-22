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

## When a precondition is reusable

- Add a reusable precondition only when several cases share the same preliminary setup, such as an opened page, an authenticated state, a viewport, or a repeated navigation path.
- Assume each case starts independently with a clean context; do not
  restate this default. Specify prior actions or state only when required.
- Require only setup needed for the checked behavior; omit item counts,
  pagination, or other data conditions unless the check depends on them.
- Do not create reusable precondition constants for truly one-off setup used by a single case. Put those setup details in the case action.
- Establish user and data states before opening dependent pages, tabs,
  or popups. Preserve this order when moving setup, and remove obsolete
  precondition keys and types.
- Do not inline a reusable precondition inside a test case.

## Scope

- **Case file** — if a precondition is reused only inside one case file, define it locally in that file and type it there.
- **Folder** — if a precondition is reused across several files of one folder, define it in that folder's shared preconditions module and type it in the same place.
- **Global** — keep the catalog's shared preconditions for setup reused across several case folders, and keep the shared precondition type aligned only with them.
- Reuse folder-level page opening separately from scenario-specific data
  conditions. Keep conditions used by one file local, without repeating
  page opening.

## Imports and updates

- Reference folder-level preconditions from the nearest folder module, and shared ones from the catalog's shared location.
- Do not add folder-level keys to the shared type.
- When adding a shared precondition, update the shared module and the shared type together.
- When adding a folder-level precondition, update only that folder's module.
