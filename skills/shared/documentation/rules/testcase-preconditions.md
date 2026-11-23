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

- Add a reusable precondition only when several cases share the same preliminary setup, such as an opened page, an authenticated state, a viewport, or a repeated navigation path.
- Assume each case starts independently with a clean context; do not restate this default. Specify prior actions or state only when required.
- Require only setup needed for the checked behavior; omit item counts, pagination, or other data conditions unless the check depends on them.
- Do not create reusable precondition constants for truly one-off setup used by a single case. Put those setup details in the case action.
- Establish user and data states before opening dependent pages, tabs, or popups. Preserve this order when moving setup, and remove obsolete precondition keys and imports.
- Do not inline a reusable precondition inside a test case.

Use `createPreconditions` from `@siberiacancode/autotest` for reusable preconditions at file, folder, or global scope. Keep them at the narrowest scope where they are shared, reference them from the nearest existing module, and infer their types from the helper rather than duplicating them in local interfaces or `types.ts`. When moving or removing preconditions, update the dictionary and imports without duplicating broader setup.
