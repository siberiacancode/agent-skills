---
title: Component integration tests
impact: HIGH
impactDescription: tests feature behavior through a realistic mounted boundary without paying for unnecessary full-browser scope
tags: testing, integration-tests, playwright, component-tests, react
---

# Component integration tests

Read [integration-test-conventions](integration-test-conventions.md) first. Use this rule when a mounted component, screen, or feature boundary can faithfully prove the selected test case.

## Choose the mounted boundary

Prefer a component integration test when an isolated component, screen, or feature mounted with its required dependencies can prove the scenario without starting the full application. This includes validation, input behavior, local transitions, conditional rendering, forms, overlays, tables, controlled requests, retry states, interaction with nearest application dependencies, and browser-owned APIs that the mounted environment can faithfully exercise.

Move the scenario to a browser test when its contract requires application bootstrap, interaction between application parts, navigation across separately loaded pages, or another behavior that requires `page.goto()` and cannot be represented faithfully through `mount()`.

## Inspect the component harness

Read the component-test configuration, mount template, global providers, application wrapper, fixtures, closest component test, and configured projects. Use the repository's established filename and component-test adapter; do not import from its browser-test entrypoint.

Determine what the mount already supplies, such as providers, router, query client, localization, theme, global styles, animation disabling, or application configuration. Do not wrap the same infrastructure again.

## Wrapper ideology

- Mount the smallest realistic product boundary that owns the scenario, not an isolated JSX fragment stripped of dependencies.
- Provide production-required contexts and dependencies through a thin feature wrapper.
- Keep providers, routing state, query state, hooks, and request behavior as close to the real application as the test environment permits.
- Replace only external boundaries or scenario-controlled state. Do not mock the component's internals or bypass the behavior the case is meant to prove.
- Reuse the established wrapper and mount configuration when they can represent the scenario. Extend them only for a real missing capability.
- Keep wrappers free of product behavior and case assertions. Use them only for required props, inert callbacks, deterministic context, layout, or surrounding feature markup.

Do not use `page.goto()` in a component test. Choose browser integration when real application navigation or bootstrap is required.

## Router, query state, and readiness

- Use the project's typed router helpers and exact generated route identifiers. Supply required params and search fields with values consistent with the case and mocks; assert route effects through visible URL or UI state.
- Seed query data only when the component normally consumes existing cache and the request lifecycle is not part of the case. Prefer a real request through the configured mock layer when network behavior matters.
- Follow the nearest setup style. Shared setup prepares state and readiness; case-specific assertions remain in the test.
- Wait for a stable feature root or another meaningful readiness signal after mount. When mount starts a request, register its waiter before mounting and await both together.
- When one test mounts several variants, keep the component handle and await `unmount()` before the next mount.

## Assertions and controlled behavior

- Interact through the rendered interface and assert observable UI behavior.
- Keep async requests and actions synchronized through the shared conventions. Install scenario mocks and observers before the action that can satisfy them.
- Do not assert wrapper implementation details unless they are themselves the public contract.
- Use named `test.step()` blocks for variants sharing one case identity and include the variant key in each step name.
- Install the project's controlled clock before mounting code that schedules debounce, retry, interval, or polling timers. Pair time advancement with an expected request or visible transition; never wait on real time.
- Avoid duplicating a browser test when the browser-level case already proves the same behavior and the component boundary adds no distinct ownership or diagnostic value.

Use mobile or engine fixtures only for an intentional product difference. A configured project is part of completion unless a genuinely unsupported capability has a narrow documented skip.
