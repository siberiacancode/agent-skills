---
title: Component integration tests
impact: HIGH
impactDescription: tests feature behavior through a realistic mounted boundary without paying for unnecessary full-browser scope
tags: testing, integration-tests, playwright, component-tests, react
---

# Component integration tests

Read [integration-test-conventions](integration-test-conventions.md) first. Use this rule when a mounted component, screen, or feature boundary can faithfully prove the selected test case.

## Choose the mounted boundary

Prefer a component integration test when a component, screen, or feature mounted with its required dependencies can faithfully prove the scenario without starting the full application. Choose this boundary based on the context the scenario requires, not on the type of UI being tested.

## Assertions and controlled behavior

- Interact through the rendered interface and assert observable UI behavior.
- Keep async requests and actions synchronized through the shared conventions. Install scenario mocks and observers before the action that can satisfy them.
- Do not assert wrapper implementation details unless they are themselves the public contract.
- Use named `test.step()` blocks for variants sharing one case identity and include the variant key in each step name.
- Install the project's controlled clock before mounting code that schedules debounce, retry, interval, or polling timers. Pair time advancement with an expected request or visible transition; never wait on real time.
- Avoid duplicating a browser test when the browser-level case already proves the same behavior and the component boundary adds no distinct ownership or diagnostic value.

Use mobile or engine fixtures only for an intentional product difference. A configured project is part of completion unless a genuinely unsupported capability has a narrow documented skip.
