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

- One independently testable behavior per case. Apply the coverage economy principle from [testcase conventions](./testcase-conventions.md) when deciding whether observable effects belong together or require separate cases.
- Keep reusable setup in preconditions and one-off setup in the case action, following [testcase-preconditions](./testcase-preconditions.md). Keep steps focused on the checked behavior.
- Include transient control states in the action case when they are a consequence of the operation. Create a separate case only when the state itself is an independent requirement.
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

- Describe concrete observable results of the current action.
- For API-derived UI, identify the response and field that determine the expected value.
- Prefer observable effects over abstract outcomes: visible state, navigation, request, storage or cookie change, cache reset, or toast.
- Use positive state descriptions (`disabled`, `hidden`, `selected`, `loading`, `invalid`) unless absence is the behavior under test.
- Do not assert implementation details unless they are part of the requirement.
- Do not add quantities such as "один запрос" unless request count or idempotency is the behavior under test.
- Match confirmed UI text exactly.

## Proof economy

Each assertion should provide distinct coverage.

If one observable result already proves a behavior, do not add another assertion that proves the same behavior through an implementation detail.

For example, when the opened page proves navigation, do not also assert the request unless the request itself is required.

## Parameterized cases

Use one parameterized case when several confirmed variants exercise the same product behavior with the same sequence and metadata, and only input or expected values change.

- Use meaningful parameter names and reference them as `%parameter` in preconditions, actions, expected results, or test data. Preserve each name and its letter case exactly.
- Define every referenced parameter in every iteration. Keep one complete, non-duplicate value set per iteration, including expected-result parameters when the outcome varies with the input.
- Keep one priority, status, ownership, and step structure for the whole parameterized case.
- Do not generate an arbitrary Cartesian product. Include only confirmed combinations that represent useful coverage.
- Split variants into separate cases when they require different actions, setup structure, product priority, or independently owned UI behavior. A simple empty value may be an iteration; an empty state with its own design or actions is a separate case.

## Test data and comments

- Put concrete inputs required to execute the case in test data: values, payloads, prompts, files, or resource links. Keep secrets and personal credentials out of the case.
- Put non-executable context in comments: environment quirks, rationale, troubleshooting hints, limitations, or supporting references.
- Do not hide required setup, actions, expected results, or acceptance criteria in comments. Move them to the corresponding case field.
- Do not duplicate the same value in steps and test data. Reference the test data from the action when the value is substantial or reused; keep a short one-off value directly in the action when that is clearer.

## Design cases

- Treat cases that check static layout, labels, icons, skeletons, empty-state copy, or other content without comparing it to request or API data as design cases.
- Page layout checks cover block placement, order, widths, alignment,
  and spacing between blocks; block design checks cover internal
  appearance and spacing. State this scope in actions to avoid overlap.
- A design case contains one step with one expected result.
- In design `expected`, avoid repeating the page, block, or modal name when it is already clear from `name` or `action`; prefer concise wording such as `Соответствует дизайну <link>`.
- Page/block loading and empty-state visuals—skeletons, icons, text,
  spacing, composition—belong to design cases. Separate functional
  state cases require independent behavior, such as button navigation.

## Validation cases

- Use one validation case for the whole form. The confirmed external validation page owns the list of fields and their base constraints, such as length boundaries, allowed characters, whitespace handling, or character normalization.
- Name the case with the concrete form followed by `Валидация`, for example `Форма обратной связи. Валидация`.
- Use one action, `Проверить валидацию`, and one expected result, `Соответствует правилам валидации <link>`. Do not enumerate individual fields in the case.
- Use only a user-provided or previously confirmed validation link. If the page or relevant section is missing, record it as an open question instead of inventing a link.
- Keep behavior not owned by the shared validation contract in separate cases, including submission effects, server errors, permissions, navigation, and independently observable messages.
- For every new validation case and every change to validation requirements, automatically propose one concise paste-ready draft for the external page; the user does not need to request it separately. Group the draft by form fields and include only confirmed accepted and rejected values or classes, boundaries, normalization, and observable invalid state or message. Do not edit the external page without a separate explicit request and authorization.
- Do not repeat the linked validation matrix in steps, test data, comments, and expected results. Include concrete values only when they define an independently important boundary or regression.

## Data cases

- Prefer one `Данные` case for a stable set of fields in one card, form, list item, or details page.
- Define data conditions through API fields and value relationships;
  derive expected values from the response. Avoid fixed amounts or IDs
  unless they define the scenario or boundary.
- Split `Данные` cases only for mutually exclusive conditional content,
  with explicit, non-overlapping conditions: e.g. 0 < price < oldPrice,
  price = 0 without oldPrice, or price = 0 with oldPrice > 0.
- Check list item count, order, and card data together in one `Данные` case. Check independent list behavior, such as pagination, in a separate case named for that behavior, for example `Список покупок. Пагинация`.
- In data cases, check values derived from request or API data; static content and visual states belong to design cases.
- Keep empty-list content and empty-list actions separate when the action has navigation behavior.
