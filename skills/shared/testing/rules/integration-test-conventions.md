---
title: Integration test conventions
impact: HIGH
impactDescription: keeps integration automation grounded in product cases, project patterns, and observable behavior
tags: testing, integration-tests, playwright, conventions, async
---

# Integration test conventions

Read this rule before writing, revising, reviewing, or planning application integration tests. Subject rules refine these shared conventions without replacing them.

## Sources of truth

Use evidence in this order:

1. The test cases owned by the target feature, including cases stored beside its autotests.
2. Existing autotests for the same feature, then the closest comparable integration tests.
3. Shared test helpers, fixtures, mock infrastructure, generated locators, and runner configuration.
4. The relevant product code for understanding how to implement a confirmed case.

Automate confirmed test cases rather than deriving a new scenario catalog from implementation branches. If no suitable confirmed test case exists, stop the automation flow, report that the test case is missing, and request it from the user. Do not silently invent expected behavior from code.

Reference each selected case through the repository's established traceability format. Preserve its exact ID and URL, and keep the test name, setup, actions, and assertions aligned with that case.

## Scenario and file ownership

- Keep each test focused on one test-case scenario and its observable result.
- Follow the nearest established naming, `describe` structure, setup helpers, fixtures, and file layout.
- Keep feature-specific setup and mock data beside the owning autotests. Do not share mock data across features, even when they use the same contract; copy and adapt the data locally so each feature owns its scenario.
- Prefer the smallest integration boundary that faithfully proves the case: use a component test when a realistic mounted boundary is enough, and a browser test only when the full application context is part of the behavior.
- Use [integration-test-browser](./integration-test-browser.md) or [integration-test-component](./integration-test-component.md) after choosing the boundary.
- Use [integration-test-server](./integration-test-server.md) for a public server entry point or service orchestration.
- Use [integration-test-setup](./integration-test-setup.md) when preparing test-case preconditions or component mount setup and wrappers.
- Use [integration-test-mocks](./integration-test-mocks.md) when a browser or component scenario needs controlled backend state or responses.
- Use [integration-test-locator-testids](./integration-test-locator-testids.md) when adding or reviewing semantic locators. Keep all test-ID naming and schema rules there.

## File structure

Follow the nearest established feature layout. A useful project pattern is:

```text
feature/
├── (helpers)/
│   ├── case-ids.ts
│   └── constants.ts
├── (mocks)/
│   └── scenario-id/
│       ├── constants.ts
│       ├── requests.ts
│       └── index.ts
├── feature.browser.ts
└── feature.component.tsx
```

Create only files the scenario needs. The example expresses ownership and separation, not a requirement to create every layer.

## Project testing utilities

- First inspect the existing integration tests and their imports to determine which Playwright utilities the project already uses.
- If existing tests use `@siberiacancode/playwright`, continue using its matching utilities, such as `waitRequest`, `waitResponse`, and `snapshot`; do not recreate them as local helpers or introduce a competing utility layer.
- Inspect the chosen utility API and nearby usage before creating any helper that it does not provide.
- Follow the project's existing locator infrastructure and the dedicated locator rule.

## Actions and assertions

- Use user-level actions such as click, tap, fill, hover, scrolling, and browser-supported input. Use `tap()` instead of `click()` for mobile scenarios running in a touch-enabled project so the test exercises touch events. Simulate the keyboard only when keyboard behavior is part of the case.
- Prefer awaited web-first assertions for locator and URL state. Do not treat hidden and detached elements as interchangeable.
- Use plain assertions for resolved synchronous values such as parsed response data, analytics objects, filenames, bytes, or clipboard text.
- For a server response, assert its status and parsed public body. Verify dependency calls only when the collaboration is part of the contract.
- Derive server-driven expectations from controlled typed responses or deterministic fixtures. Keep expected product literals independent from the implementation constants under test.

## Async behavior

- Await every Playwright action, assertion, setup operation, and helper that returns a promise.
- Run dependent user actions and checks sequentially so their causal order remains explicit.
- Use `Promise.all` when event listeners or transient assertions must be active before the action that triggers them. Put request, response, navigation, or temporary UI-state waits in the same synchronization block as the triggering action.
- Do not trigger an event and register its waiter afterward; a fast event may already have completed.
- Parallelize operations only when they are independent or intentionally observe the same trigger. Do not use `Promise.all` merely to shorten a test.
- Do not use `forEach(async ...)`. Use `for...of` for ordered scenarios and `Promise.all(items.map(...))` only for truly independent work.
- Do not leave floating promises or use arbitrary timeouts for synchronization. Wait for an observable UI state, request, response, URL, event, or controlled clock state.
- After synchronized side effects finish, assert the final user-visible result required by the test case.

```ts
await Promise.all([
  waitRequest(page, {
    path: "/api/session",
    method: "POST",
  }),
  waitResponse(page, {
    path: "/api/session",
    method: "POST",
    status: 200,
  }),
  submitButton.click(),
]);

await expect(page).toHaveURL("./");
```

## Preserve project reality

- Do not add abstractions, helpers, mocks, IDs, or setup layers speculatively.
- Do not duplicate coverage already owned by another integration file unless the same behavior must be proven at a distinct boundary.
- Keep implementation-specific assertions out of integration tests when an observable product result proves the same contract.
- Keep tests parallel-safe: do not depend on execution order, another test's mutable state, or one worker consuming another worker's response.
- Run the case in every configured project that supports its product contract. Branch by browser or device only for a real capability or behavior difference, never to hide flakiness.
- Validate with the narrowest relevant integration command and report any scenario that cannot be implemented from confirmed behavior.

## Visual assertions

Create a snapshot only when the case owns a visual or design assertion. Establish deterministic data and viewport state, wait for response-driven content and transitions, and set the exact hover, focus, error, or variant state before capture.

Prefer the narrowest meaningful component or overlay crop and a stable name containing the relevant state. Review every changed image; never update snapshots merely to make a failure pass.

If the captured area contains values that can legitimately change between runs, such as timestamps or server-generated counters, mask those elements with narrow locators. Do not mask stable product content or a visual mismatch that the case is intended to detect.

```ts
const updatedDateLocators = await page
  .getByTestId(new RegExp(IDS.STATIC.PROJECT_CARD.UPDATED_DATE))
  .all();
const versionsAmountLocators = await page
  .getByTestId(new RegExp(IDS.STATIC.PROJECT_CARD.VERSIONS_AMOUNT))
  .all();

await snapshot(page, "home-page", {
  locator: getDataTestIdLocator(IDS.STATIC.MAIN.$ID),
  mask: [...updatedDateLocators, ...versionsAmountLocators],
});
```
