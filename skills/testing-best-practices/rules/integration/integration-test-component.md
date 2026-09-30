---
title: Component integration tests
impact: HIGH
impactDescription: tests feature behavior through a realistic mounted boundary without paying for unnecessary full-browser scope
tags: testing, integration-tests, playwright, component-tests, react
---

# Component integration tests

Read [integration-test-conventions](./integration-test-conventions.md) first. Use this rule when a mounted component, screen, or feature boundary can faithfully prove the selected test case.

## Choose the mounted boundary

Prefer a component integration test for behavior owned by one screen or feature boundary, including validation, input behavior, local transitions, conditional rendering, controlled requests, retry states, and interaction between the component and its nearest application dependencies.

Move the scenario to a browser test when its contract is navigation across separately loaded pages, application bootstrap, browser-owned state, or another behavior the mounted environment cannot represent faithfully.

## Wrapper ideology

- Mount the smallest realistic product boundary that owns the scenario, not an isolated JSX fragment stripped of dependencies.
- Provide the contexts and dependencies required for production-like behavior through a feature wrapper.
- Keep providers, routing state, query state, hooks, and request behavior as close to the real application as the test environment permits.
- Replace only external boundaries or scenario-controlled state. Do not mock the component's own internals or bypass the behavior the case is meant to prove.
- Reuse the project's established wrapper and mount configuration when they can represent the scenario. Extend them only for a real missing capability.
- Treat the exact router, query client, hook, and provider configuration as project setup, not as a universal integration-testing prescription.

## Assertions

- Interact through the rendered interface and assert observable UI behavior.
- Keep async requests and actions synchronized through the shared conventions.
- Do not assert wrapper implementation details unless they are themselves the public contract.
- Avoid duplicating a browser test when the browser-level case already proves the same behavior and the component boundary adds no distinct ownership or diagnostic value.
