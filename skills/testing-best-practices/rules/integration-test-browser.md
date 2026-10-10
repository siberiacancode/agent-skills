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
- interactions between application components that a mounted feature boundary cannot faithfully reproduce;
- browser state or browser-owned behavior whose contract depends on application startup or navigation;
- a production-like network lifecycle whose result must be observed through the running application.

## Inspect the browser harness

Read the browser configuration, web-server or base-URL setup, authentication fixtures, navigation helpers, storage-state policy, mock or backend environment, configured projects, and closest successful browser test. Use the established startup and login paths instead of inventing another fixture or global-state layer.

## Isolation and startup

- Use isolated browser contexts and deterministic, case-selected data. Do not depend on execution order, shared mutable accounts, or another test's state.
- Configure cookies, storage, permissions, mock selection, and other startup state before navigation reads them.
- Keep credentials and authenticated storage containing secrets out of committed source.
- Load the application through the established browser setup and wait for a stable page-level signal before interacting. Do not use network idle as a universal readiness condition when the application polls or makes background requests.
- When server rendering or hydration matters, use the project's established hydration helper or another stable marker. Register bootstrap-response observers before navigation when their completion defines readiness.
