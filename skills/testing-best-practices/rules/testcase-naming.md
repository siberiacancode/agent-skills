---
title: Test case naming
impact: HIGH
impactDescription: keeps the dot-separated case hierarchy precise, non-redundant, and tied to real interface text
tags: testing, test-cases, qa, naming, hierarchy
---

# Test case naming

For writing and revising the `name` of a test case.

> **First read [testcase-conventions](./testcase-conventions.md).** This rule adds only what is specific to naming.

Use the project's existing dot-separated hierarchy and its confirmed vocabulary. For a new catalog, or when the existing catalog has no established form, use the defaults below; preserve an established alternative when changing it would make the catalog inconsistent.

## Vocabulary and hierarchy

- Match confirmed interface text exactly for named pages, blocks, controls, inputs, errors, links, and sections.
- Use a precise common frontend or QA term when the interface has no explicit name, such as `Кнопка закрытия` for an icon-only control.
- Build a concise hierarchy: owning page or block → target element or scenario → checked state or outcome.
- Do not repeat information already encoded by the file or a parent segment.

## Fixed forms

- Name loading design cases with the state before the check type: `Лоадер. Дизайн. Десктоп` or `Лоадер. Дизайн. Мобилка`.
- Use `Мобилка` for mobile viewport cases.
- Use `Пустой список` for empty-list states regardless of the interface copy; keep the actual copy exact in actions and expected results.
- Use `Данные` for checks that compare displayed values with request or API data; do not add the redundant qualifier `Исходные`.
- Use `<concrete form>. Валидация` for form-wide linked validation cases.

## Controls

For an action case that checks a labeled button, link, or control, use the exact interface label as the final meaningful segment instead of adding a redundant control-type prefix.

For example, use `Хэдер. Выйти` instead of `Хэдер. Кнопка "Выйти"`, and `Пустой список. Вернуться в каталог игр` instead of `Пустой список. Ссылка "Вернуться в каталог игр"`.
