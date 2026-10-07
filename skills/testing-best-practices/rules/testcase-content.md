---
title: Test case content
impact: HIGH
impactDescription: keeps cases atomic, user-oriented, and limited to concrete observable results
tags: testing, test-cases, qa, steps, atomicity, coverage
---

# Test case content

For writing and revising `steps`, `action`, and `expected`, and for splitting design, functional, and data checks.

Write atomic test cases with focused setup, user-oriented actions, and concrete observable expected results.

## Atomicity

- Each case checks one independently testable behavior or scenario and fully covers the expectations stated by its name and scope. Atomicity does not mean one action: keep sequential actions from the same scenario in one case as separate steps, each paired with its own expected results.
- Split independent behavior, branches, or distinct scopes into separate cases. Apply the coverage economy principle from [testcase conventions](./testcase-conventions.md) when deciding whether related conditions and observable effects belong to one scenario; do not combine independent checks merely to reduce the number of cases.
- Place setup according to [testcase preconditions](./testcase-preconditions.md) and keep steps focused on the checked behavior.
- Include transient control states in the action case when they are a consequence of the operation. Create a separate case only when the state itself is an independent requirement.
- Prefer narrow checks over broad end-to-end flows, written for testers who understand IT and frontend terminology.

## Actions

- Phrase actions as user or tester actions whenever possible.
- If a form scenario must send a request, make the action establish the required form changes and valid data so submission is possible. Use invalid values intentionally in validation scenarios.
- Prefer `Открыть страницу за пользователя с пустым списком покупок` over implementation-oriented actions such as `Подготовить ответ GET /purchases с пустым массивом`.

## Expected results

- Describe every concrete observable result of the current action needed to prove the behavior within the case scope. Do not stop at an intermediate effect when the scope includes the final outcome, and do not add adjacent behavior owned by another case.
- For API-derived values, identify the source request, response object or array, and field that determine the expected value, including relevant navigation parameters.
- Prefer observable effects over abstract outcomes: visible state, navigation, request, storage or cookie change, cache reset, or toast. Replace vague outcomes such as `пользователь разлогинен` with the confirmed observable effects that prove them.
- Prefer confirmed positive state descriptions such as `disabled`, `readonly`, `active`, `selected`, `focused`, `loading`, or `invalid`. Use `hidden` only when that specific mechanism is confirmed. When absence is the behavior under test, state the observable absence directly, for example `Блок вкладок отсутствует на странице`, rather than using vague negative phrasing such as `не отображается`.
- Do not assert implementation details or quantities such as "один запрос" unless the detail, request count, or idempotency is the behavior under test.
- Match confirmed interface text exactly for pages, blocks, controls, inputs, errors, links, sections, and steps.

## Proof economy

Each assertion should provide distinct coverage.

- Compare checks by the behavior they prove. Do not add another assertion or case when existing expected results already provide sufficient evidence for the same behavior.
- Actions and preconditions provide evidence only when their observable outcome is asserted in an expected result. Merely performing an action or listing a precondition does not prove that the behavior is correct.
- When a click case proves link behavior, do not also check the link attribute unless the attribute itself is required. When the opened page proves navigation, do not also assert the request caused by that navigation unless the request itself is the behavior under test.

## Parameterized cases

Use one parameterized case when several confirmed variants exercise the same product behavior with the same sequence and metadata, and only input or expected values change.

- Use meaningful parameter names and reference them as `%parameter` in preconditions, actions, expected results, or test data. Preserve each name and its letter case exactly.
- Define every referenced parameter in every iteration. Keep one complete, non-duplicate value set per iteration, including expected-result parameters when the outcome varies with the input.
- Do not declare unused parameters or duplicate iteration sets.
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
- Page layout checks cover block placement, order, widths, alignment, and spacing between blocks; block design checks cover internal appearance and spacing. State this scope in actions to avoid overlap.
- A design case contains one step with one expected result.
- In design `expected`, avoid repeating the page, block, or modal name when it is already clear from `name` or `action`; prefer concise wording such as `Соответствует дизайну <link>`.
- Page/block loading and empty-state visuals—skeletons, icons, text, spacing, composition—belong to design cases. Separate functional state cases require independent behavior, such as button navigation.

## Validation cases

- Use one validation case for the whole form. The confirmed external validation page owns the list of fields and their base constraints, such as length boundaries, allowed characters, whitespace handling, or character normalization.
- Name the case `<concrete form>. Валидация`; use one action, `Проверить валидацию`, and one expected result, `Соответствует правилам валидации <link>`, without enumerating fields.
- Use only a user-provided or previously confirmed validation link. If the page or relevant section is missing, record it as an open question and propose the validation-page draft, but do not produce a final validation case until the link is confirmed. Create an incomplete case only when the user explicitly allows incomplete catalog cases and the catalog has a confirmed needs-rework status.
- Keep behavior not owned by the shared validation contract in separate cases, including submission effects, server errors, permissions, navigation, and independently observable messages.
- For every new or changed validation case, propose a concise paste-ready draft for the external page, grouped by field and limited to confirmed accepted/rejected values, boundaries, normalization, and observable invalid states or messages. Do not edit the page without separate authorization.
- Do not repeat the linked validation matrix in steps, test data, comments, and expected results. Include concrete values only when they define an independently important boundary or regression.

## Data cases

- Prefer one `Данные` case for a stable set of fields in one card, form, list item, or details page.
- Define data conditions through API fields and value relationships; derive expected values from the response. Avoid fixed amounts or IDs unless they define the scenario or boundary.
- Split `Данные` cases only for mutually exclusive conditional content, with explicit, non-overlapping conditions: e.g. 0 < price < oldPrice, price = 0 without oldPrice, or price = 0 with oldPrice > 0.
- Check list item count, order, and card data together in one `Данные` case. Check independent list behavior, such as pagination, in a separate case named for that behavior, for example `Список покупок. Пагинация`.
- Do not create a separate case for every displayed field unless the field has independent behavior, validation, formatting, visibility rules, or enough product risk to justify standalone coverage.
- In data cases, check values derived from request or API data, such as image attributes, localized enum values, prices, counts, and ordering. Static labels, fixed text, icons, skeletons, empty-state copy, and other visual states belong to design cases.
- Keep empty-list content and empty-list actions separate when the action has navigation behavior.
