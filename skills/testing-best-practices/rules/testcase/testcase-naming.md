---
title: Test case naming
impact: HIGH
impactDescription: keeps the dot-separated case hierarchy precise, non-redundant, and tied to real interface text
tags: testing, test-cases, qa, naming, hierarchy
---

# Test case naming

For writing and revising the `name` of a test case.

> **First read [testcase-conventions](./testcase-conventions.md).** This rule adds only what is specific to naming.

Name test cases with the existing dot-separated hierarchy and the most precise confirmed user-facing terms.

## Vocabulary

- Match interface text exactly for pages, blocks, buttons, inputs, errors, links, and sections.
- Use common frontend and QA terminology when the interface has no explicit element name, such as icon-only buttons or unnamed containers.

## Hierarchy

- Follow the existing dot-separated hierarchy style.
- Avoid redundant hierarchy segments. If the file or parent segment already identifies the only target element, do not repeat it.
- Set `name` to the concise hierarchy that identifies the owned page or block, the target element or scenario, and the checked state or outcome.

## Fixed forms

- Name loading design cases with the state before the check type: `Лоадер. Дизайн. Десктоп` or `Лоадер. Дизайн. Мобилка`.
- Always use `Мобилка` for the mobile viewport segment.
- Always name an empty-list state `Пустой список`, regardless of the empty-state text in the interface. Keep actual UI labels exact in actions and expected results.
- Name checks comparing displayed values with request or API data `Данные`; do not add the redundant qualifier `Исходные`.

## Controls

For action cases that check a labeled button, link, or control, use the exact UI label in the final meaningful segment.

**Incorrect (redundant control prefix):**

```text
Хэдер. Кнопка "Выйти"
Пустой список. Ссылка "Вернуться в каталог игр"
```

**Correct (exact label as the final segment):**

```text
Хэдер. Выйти
Пустой список. Вернуться в каталог игр
```

For unlabeled controls, use a precise control name such as `Кнопка закрытия`.
