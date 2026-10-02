---
title: Browser integration tests
impact: HIGH
impactDescription: reserves full-browser coverage for behavior that genuinely depends on browser or application integration
tags: testing, integration-tests, playwright, browser, navigation
---

# Browser integration tests

Read [integration-test-conventions](integration-test-conventions.md) first. Use this rule after a test case has been selected and its behavior requires the fully loaded application.

## Choose the browser boundary

Choose a browser test when the scenario requires full application bootstrap or context, regardless of whether the established harness starts it through `page.goto()`, a navigation helper, or an authenticated fixture. This includes:

- application bootstrap, authentication startup, or production route integration;
- navigation, redirects, history, or reload behavior across separately loaded pages;
- a user flow spanning pages, features, or application boundaries whose integration is part of the contract;
- browser state or browser-owned behavior whose contract depends on application startup, navigation, or coordination between application parts;
- a production-like network lifecycle whose result must be observed through the running application.

Playwright component tests also run in a real browser and can exercise cookies, storage, downloads, popups, permissions, clipboard, URL state, and other browser-owned APIs through `mount()`. Their presence alone does not require a browser test. When a realistically mounted component or screen with its required dependencies can prove the case without the full application context, use a component integration test.

## Inspect the browser harness

Read the browser configuration, web-server or base-URL setup, authentication fixtures, navigation helpers, storage-state policy, mock or backend environment, configured projects, and closest successful browser test. Use the established startup and login paths instead of inventing another fixture or global-state layer.

## Isolation and startup

- Use isolated browser contexts and deterministic, case-selected data. Do not depend on execution order, shared mutable accounts, or another test's state.
- Configure cookies, storage, permissions, mock selection, and other startup state before navigation reads them.
- Keep credentials and authenticated storage containing secrets out of committed source.
- Load the application through the established browser setup and wait for a stable page-level signal before interacting. Do not use network idle as a universal readiness condition when the application polls or makes background requests.
- When server rendering or hydration matters, use the project's established hydration helper or another stable marker. Register bootstrap-response observers before navigation when their completion defines readiness.

## Setup and assertions

- Keep network waiters and their triggering actions synchronized according to the async section of the shared conventions.
- Assert the browser-owned outcome when it is the contract: URL, redirect destination, history, reload persistence, cookie or storage state, download, popup, permission, browser event, or a cross-page visible result.
- Stub only the chosen external boundary; do not replace application behavior or its backend interaction when those are what the case proves.
- For streaming, infinite scrolling, animation, or transforms, synchronize on the response, stream state, scroll-driven request, or observable DOM transition rather than elapsed time.
- Avoid repeating component-level validation, masking, or local state cases already covered by the owning component test.

Use direct browser evaluation only when no user-facing Playwright API can produce or observe the required state. Grant protected permissions explicitly and only for the relevant case.

When analytics is part of the case, perform the user action and assert through the application's observable event sink, not the analytics library's private implementation. Use browser- or mobile-specific branches only for real capability or product-contract differences, never to suppress a flaky assertion.

For visual checks, use the project's existing snapshot helper and preserve its configured projects, snapshot path, viewport, and comparison thresholds.
