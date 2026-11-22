---
title: Integration test setup
impact: HIGH
impactDescription: keeps test-case preconditions, component wrappers, mount state, and readiness explicit and faithful to the product scenario
tags: testing, integration-tests, playwright, setup, mount, wrappers
---

# Integration test setup

Read [integration-test-conventions](./integration-test-conventions.md) first. Use this rule when preparing test-case preconditions or creating and changing component-test mount setup and wrappers.

## Setup from the test case

- Derive setup from the confirmed test case's preconditions and required starting state. Do not add state merely because the implementation supports it.
- Map each precondition to the narrowest established mechanism, such as a fixture, mock scenario, case ID, authenticated state, router state, provider value, or query cache entry.
- Configure state that bootstrap, navigation, or mount reads before starting that operation.
- Put only state shared by every test in the current scope into shared setup. Keep scenario-specific setup in the owning test.
- Keep the user actions and observable result from the test case in the test body. Setup prepares the starting state and readiness; it does not perform the behavior under test or contain its assertions.

## Inspect the component harness

Read the component-test configuration, mount template, global providers, application wrapper, fixtures, closest component test, and configured projects. Use the repository's established filename and component-test adapter; do not import from its browser-test entrypoint.

Determine what `mount()` already supplies, such as providers, router, query client, localization, theme, global styles, animation disabling, or application configuration. Do not wrap the same infrastructure again.

## Form the wrapper

- Mount the smallest realistic product boundary that owns the scenario.
- Provide required production contexts and dependencies through a thin feature wrapper.
- Keep providers, routing state, query state, hooks, and request behavior as close to the real application as the test environment permits.
- Replace only external boundaries or scenario-controlled state. Do not mock component internals or bypass the behavior the case proves.
- Reuse an established wrapper when it represents the scenario. Extend it only for a required missing dependency.
- Keep wrappers free of product behavior, test actions, and assertions. Use them only for required props, inert callbacks, deterministic context, layout, or surrounding feature markup.

Do not use `page.goto()` in a component test. Choose browser integration when the scenario requires real application navigation or bootstrap.

## Router and query state

- Use the project's typed router helpers and exact generated route identifiers. Supply required params and search fields with values consistent with the case and mocks; assert route effects through visible URL or UI state.
- Seed query data only when the component normally consumes existing cache and the request lifecycle is not part of the case. Prefer a real request through the configured mock layer when network behavior matters.

## Mount and readiness

- Register mock selection, request observers, and other startup state before `mount()` can consume or trigger them.
- Wait for a stable feature root or another observable readiness signal after mount.
- When mount starts an observed request, register the waiter first and await the waiter and mount together.
- When one test mounts several variants, retain the component handle and await `unmount()` before mounting the next variant.
