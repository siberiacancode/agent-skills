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
4. The relevant product code when a case is missing, incomplete, or ambiguous.

Automate confirmed test cases rather than deriving a new scenario catalog from implementation branches. If no suitable case exists, design the scenario first using [testcase-conventions](./testcase-conventions.md), then implement the automation from that case. Do not silently invent expected behavior from code.

## Scenario and file ownership

- Keep each test focused on one test-case scenario and its observable result.
- Follow the nearest established naming, `describe` structure, setup helpers, fixtures, and file layout.
- Keep feature-specific setup and mocks beside the owning autotests. Share them only when multiple features genuinely own the same contract.
- Prefer the smallest integration boundary that faithfully proves the case: use a component test when a realistic mounted boundary is enough, and a browser test only when the browser or full application flow is part of the behavior.
- Use [integration-test-browser](./integration-test-browser.md) or [integration-test-component](./integration-test-component.md) after choosing the boundary.
- Use [integration-test-mocks](./integration-test-mocks.md) when the scenario needs controlled server state or responses.
- Use [integration-test-locator-testids](./integration-test-locator-testids.md) when adding or reviewing semantic locators. Keep all test-ID naming and schema rules there.

## Project testing utilities

- Prefer testing utilities already installed and configured by the project over overlapping local helpers.
- When `@siberiacancode/playwright` is available, use its matching utilities, such as `waitRequest`, `waitResponse`, `snapshot`, and `cookie`, rather than recreating them.
- Import only the utilities required by the current test. The availability of `snapshot` does not make snapshot coverage mandatory.
- Inspect the package API and nearby usage before creating a new helper.
- Do not install `@siberiacancode/playwright` solely to satisfy this convention. When it is absent, apply the same synchronization and observable-behavior concepts through the project's existing Playwright utilities.
- Locator infrastructure follows the equivalent conditional rule for `@siberiacancode/testids` in the locator rule.

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
    path: '/api/session',
    method: 'POST'
  }),
  waitResponse(page, {
    path: '/api/session',
    method: 'POST',
    status: 200
  }),
  submitButton.click()
]);

await expect(page).toHaveURL('./');
```

## Preserve project reality

- Do not add abstractions, helpers, mocks, IDs, or setup layers speculatively.
- Do not duplicate coverage already owned by another integration file unless the same behavior must be proven at a distinct boundary.
- Keep implementation-specific assertions out of integration tests when an observable product result proves the same contract.
- Validate with the narrowest relevant integration command and report any scenario that cannot be implemented from confirmed behavior.
