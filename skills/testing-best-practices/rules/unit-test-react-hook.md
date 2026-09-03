---
title: Unit test React hooks
impact: HIGH
impactDescription: guards a hook's public contract across rendering, argument changes, async work, and lifecycle
tags: testing, unit, react, hooks, ssr, lifecycle
---

# Unit test React hooks

For React hooks.

> **First read [unit-test-conventions](./unit-test-conventions.md).** This rule adds only what is specific to hooks.

**Related tests** — inspect tests for hooks with a similar public API to reuse project-specific input forms, helpers, naming, setup, assertion style, lifecycle checks, and scenario count. Follow the closest pattern unless the current hook's contract requires a clear deviation.

**Form-dependent behavior** — a behavior depends on an input form when that form changes how the hook resolves, connects to, updates, or cleans up the input. Run those behaviors for every supported form. Keep unrelated arguments, callbacks, and options outside that loop.

## Test order

- **Initial contract** — assert the initial public value, state, and methods the hook actually exposes.
- **SSR** — verify the server result when the hook is expected to be server-safe.
- **Arguments** — cover defaults, custom values, meaningful input forms, and overloads.
- **Behavior** — cover actions, transitions, callbacks, events, and conditional branches through observable results.
- **Changing arguments** — verify behavior after arguments that are read after the initial render change.
- **Async and lifecycle** — cover pending and settled behavior, failures, cleanup, and unmount effects where applicable.

## State and rerenders

- Run updates through the renderer's state-update utility and read `result.current` again after each update; do not cache a returned snapshot across renders.
- Use `initialProps` and `rerender` for arguments whose changes should affect an already mounted hook.
- Treat initialization-only arguments separately; do not require a rerender test when the public contract does not react to later changes.
- Verify that changing callbacks or options uses their latest values when the hook promises that behavior.
- Cover every meaningful overload and input form, but test independent dimensions with canonical representatives instead of building a Cartesian product.

## Async and lifecycle

- Assert the synchronous initial contract before waiting for an asynchronous result.
- Cover both fulfilled and rejected outcomes when the hook handles both paths.
- Prove cleanup and unmount behavior through the absence of further public effects whenever possible.

## Mocks and resets

- Mock external boundaries and environment state only when needed to drive observable behavior.
- Use the project's timer, async, and rendering utilities rather than prescribing a test framework implementation.
- Restore fake timers, spies, stubbed globals, browser state, and other shared mutations after each test that changes them.
- Advance time and dispatch events through the rendering update boundary when they can trigger state changes.
- Assert public state, returned values, callbacks, errors, or emitted effects; do not assert timer counts or other internal machinery when behavior proves the same contract.

## Browser APIs and listeners

When a hook reads browser state or manages subscriptions, read the relevant reference before writing tests:

- [hook-web-api](./references/hook-web-api.md) — browser APIs, reactive snapshots, SSR fallback, and environment restoration.
- [hook-listeners](./references/hook-listeners.md) — target forms, target changes, subscriptions, and cleanup.

Test exported helpers separately from the hook behavior.
