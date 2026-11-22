---
title: Unit test React hooks
impact: HIGH
impactDescription: guards a hook's public contract across rendering, argument changes, async work, and lifecycle
tags: testing, unit, react, hooks, ssr, lifecycle
---

# Unit test React hooks

For React hooks.

> **First read [unit-test-conventions](./unit-test-conventions.md).** This rule adds only what is specific to hooks.

## Test order

- **Initial contract** — assert the initial public value, state, and methods the hook actually exposes.
- **SSR** — verify the server result when the hook is expected to be server-safe.
- **Arguments** — cover defaults, custom values, meaningful input forms, and overloads.
- **Behavior** — cover actions, transitions, callbacks, events, and conditional branches through observable results.
- **Changing arguments** — verify behavior after arguments that are read after the initial render change.
- **Async and lifecycle** — cover pending and settled behavior, failures, cleanup, and unmount effects where applicable.

## State and rerenders

- Run updates through the renderer's state-update utility and read the new state from `result.current` after each update. It is fine to retain a method or callback when testing its stable identity or invoking it; do not use a cached state snapshot for assertions after a render.
- Use `initialProps` and `rerender` for arguments whose changes should affect an already mounted hook.
- Treat initialization-only arguments separately; do not require a rerender test when the public contract does not react to later changes.
- Verify that changing callbacks or options uses their latest values when the hook promises that behavior.
- Run behavior for every input form that changes how the hook resolves, connects, updates, or cleans up the input. Keep independent arguments, callbacks, and options outside that loop.

## Async and lifecycle

- Assert the synchronous initial contract before waiting for an asynchronous result.
- Cover both fulfilled and rejected outcomes when the hook handles both paths.

## Timers and events

- Mock external boundaries and environment state only when needed to drive observable behavior; use the shared isolation rules for cleanup.
- Use the project's timer, async, and rendering utilities rather than prescribing a test framework implementation.
- Advance time and dispatch events through the rendering update boundary when they can trigger state changes.

## Browser APIs and listeners

When a hook reads browser state or manages subscriptions, read the relevant reference before writing tests:

- [hook-web-api](./references/hook-web-api.md) — browser APIs, reactive snapshots, SSR fallback, and environment restoration.
- [hook-listeners](./references/hook-listeners.md) — target forms, target changes, subscriptions, and cleanup.

Test exported helpers separately from the hook behavior.
