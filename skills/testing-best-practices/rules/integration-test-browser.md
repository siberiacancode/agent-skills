---
title: Browser integration tests
impact: HIGH
impactDescription: reserves full-browser coverage for behavior that genuinely depends on browser or application integration
tags: testing, integration-tests, playwright, browser
---

# Browser integration tests

Read [integration-test-conventions](./integration-test-conventions.md) first. Use this rule after a test case has been selected and its behavior requires a real browser or the fully loaded application.

## Choose the browser boundary

Use a browser test when the scenario depends on one or more of these behaviors:

- navigation, redirects, URL state, history, or reload behavior;
- a user flow spanning separately loaded pages or application boundaries;
- browser storage, cookies, downloads, permissions, or another browser-owned API;
- application bootstrap, route integration, or cross-feature behavior that a mounted component boundary cannot faithfully represent;
- a production-like network lifecycle whose result must be observed through the running application.

Do not choose a browser test merely because the scenario describes user behavior. When a realistically mounted component or screen can prove the case without weakening it, use a component integration test.

## Setup and assertions

- Load the application through the project's established browser setup and wait for a stable page-level signal before interacting.
- Configure scenario state before navigation when the mock server, cookies, storage, or startup behavior reads it during application bootstrap.
- Keep network waiters and their triggering actions synchronized according to the async section of the shared conventions.
- Assert the browser-owned outcome when it is the contract, such as URL, history, reload persistence, cookie state, or a cross-page visible result.
- Avoid repeating component-level validation, masking, or local state cases already covered by the owning component test.

Use the closest successful browser suite as the structural template; helper names and runner setup remain project-specific.
