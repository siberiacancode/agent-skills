---
title: Test case content
impact: HIGH
impactDescription: keeps cases atomic, user-oriented, and limited to concrete observable results
tags: testing, test-cases, qa, steps, atomicity, coverage
---

# Test case content

For writing and revising `steps`, `action`, and `expected`, and for splitting design, functional, and data checks.

> **First read [testcase-conventions](./testcase-conventions.md).** This rule adds only what is specific to case content.

Write atomic test cases with focused setup, user-oriented actions, and concrete observable expected results.

## Atomicity

- Each case checks one behavior or scenario and fully covers the expectations stated by its name and scope. Atomicity does not mean one action: write sequential actions within one scenario as separate steps, each with its own expected results. Split independent scenarios into separate cases.
- Keep reusable setup in preconditions and one-off setup in the case action, following [testcase-preconditions](./testcase-preconditions.md). Keep steps focused on the checked behavior.
- Check related conditions and results of one scenario within that case, establishing the required initial state. Create a separate case for independent behavior, a branch, or a distinct scope. Do not combine independent checks merely to reduce the number of cases.
- Prefer narrow checks over broad end-to-end flows.
- Write for testers who understand IT and frontend terminology.

## Actions

- Phrase actions as user or tester actions whenever possible.
- If a form scenario must send a request, make the action establish the required form changes and valid data so submission is possible. Use invalid values intentionally in validation scenarios.

**Incorrect (implementation-oriented setup as the action):**

```text
Подготовить ответ GET /purchases с пустым массивом
```

**Correct (user-oriented action):**

```text
Открыть страницу за пользователя с пустым списком покупок
```

## Expected results

- Check all direct results of the current action needed to confirm the stated behavior. Do not stop at an intermediate effect when the case scope includes the final outcome. Do not add adjacent behavior or detailed checks owned by other cases.
- State exact expected results for transitions, requests, toasts, validation, selected filters, and UI states.
- Specify the source request, response object/array, and field for expected values, including navigation parameters.
- Avoid vague system outcomes such as "пользователь разлогинен" unless the exact observable effect is confirmed. Prefer concrete effects such as a request, redirect, storage or cookie change, cache reset, toast, or visible UI state.
- Phrase states as positive checks: disabled, readonly, hidden, active, selected, focused, loading, invalid.
- Avoid negative phrasing such as "не отправляется", "не отображается", or "не изменилось" unless that absence is the primary state being tested. When absence is the requirement, state it directly, for example `Блок вкладок отсутствует на странице`. Do not replace this with a claim about the `hidden` attribute unless that mechanism is confirmed.
- Do not add quantities such as "один запрос" unless request count or idempotency is the behavior under test.
- Match interface text exactly for pages, blocks, buttons, inputs, errors, links, sections, and steps.

## Do not double-check the same proof

- Compare checks by the behavior they prove. Do not add a separate check when other cases already provide sufficient evidence for the same behavior, including evidence implicit in their result checks or in applying their actions or preconditions. Merely performing an action or listing it in preconditions does not prove that the behavior is correct.
- If a click check proves link behavior, do not also check the link attribute unless it adds value.
- If navigation is proven by the opened page, do not also check the request caused by that navigation unless the request itself is the feature under test.

## Design cases

- Treat cases that check static layout, labels, icons, skeletons, empty-state copy, or other content without comparing it to request or API data as design cases.
- Page layout checks cover block placement, order, widths, alignment, and spacing between blocks; block design checks cover internal appearance and spacing. State this scope in actions to avoid overlap.
- A design case contains one step with one expected result.
- In design `expected`, avoid repeating the page, block, or modal name when it is already clear from `name` or `action`; prefer concise wording such as `Соответствует дизайну <link>`.
- Page/block loading and empty-state visuals—skeletons, icons, text, spacing, composition—belong to design cases. Separate functional state cases require independent behavior, such as button navigation.

## Data cases

- Prefer one `Данные` case for a stable set of fields in one card, form, list item, or details page.
- Define data conditions through API fields and value relationships; derive expected values from the response. Avoid fixed amounts or IDs unless they define the scenario or boundary.
- Split `Данные` cases only for mutually exclusive conditional content, with explicit, non-overlapping conditions: e.g. 0 < price < oldPrice, price = 0 without oldPrice, or price = 0 with oldPrice > 0.
- Check list item count, order, and card data together in one `Данные` case. Check independent list behavior, such as pagination, in a separate case named for that behavior, for example `Список покупок. Пагинация`.
- Do not create separate field-level cases for every displayed value unless the field has independent behavior, validation, formatting, visibility rules, or enough risk to justify a standalone case.
- Do not duplicate design coverage in data or functional cases. In data cases, check values derived from request or API data, such as image `src`, `alt`, `title`, edition, localized API enum values, email, key, price, item count, and item order; omit static labels, headings, fixed text, icons, skeletons, and empty-state copy.
- Keep empty-list content and empty-list actions separate when the action has navigation behavior.
