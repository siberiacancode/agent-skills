---
title: Test case naming
impact: HIGH
impactDescription: keeps the dot-separated case hierarchy precise, non-redundant, and tied to real interface text
tags: testing, test-cases, qa, naming, hierarchy
---

# Test case naming

For writing and revising the `name` of a test case.

> **First read [testcase-conventions](./testcase-conventions.md).** This rule adds only what is specific to naming.

Use the project's existing dot-separated hierarchy.

- Match confirmed UI text exactly for named elements.
- Use a concise hierarchy: owning block or page → target scenario or state.
- Do not repeat information already encoded by the file or parent segment.
- For unnamed controls, use a precise semantic name, such as `Кнопка закрытия`.
- Use `Данные` for API-derived value checks.
- Use `Пустой список` for empty-list states regardless of UI copy.
- Use `Мобилка` for mobile viewport cases.
- Use `<concrete form>. Валидация` for form-wide linked validation cases.
