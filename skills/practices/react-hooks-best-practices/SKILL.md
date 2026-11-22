---
name: react-hooks-best-practices
description: React hooks best practices for React application code and custom hook design across DX, optimization, and logic. Use when writing components with hooks, creating or refactoring custom hooks, reviewing hook usage/APIs/internals, checking effects/dependencies/state/refs/callbacks, or improving hook correctness, ergonomics, and performance.
---

# React Hooks Best Practices

Practical rules for using hooks in React applications and designing custom hooks across three lenses: DX, optimization, and logic.

## When to Apply

Reference these guidelines when:

- Writing React components that use hooks
- Creating or refactoring custom hooks
- Designing hook APIs that are ergonomic and composable
- Reviewing dependencies, effects, refs, state, callbacks, and memoization
- Reviewing hook APIs for unnecessary re-renders
- Reviewing hook internals for stale closures, cleanup, SSR, and lifecycle correctness
- Designing custom hooks that subscribe to high-frequency updates
- Consuming hooks that expose `snapshot`, callback, and `watch()` APIs
- Refactoring hooks that update React state on every browser event
- Moving DOM-adjacent work out of React render state

## Rule Categories by Priority

| Priority | Category     | Impact | Prefix          |
| -------- | ------------ | ------ | --------------- |
| 1        | DX           | HIGH   | `dx-`           |
| 2        | Optimization | HIGH   | `optimization-` |
| 3        | Logic        | HIGH   | `logic-`        |

## Quick Reference

### 1. DX (HIGH)

- `dx-extract-complex-hook` - Move complex feature logic into custom hooks with grouped return contracts like `form`, `state`, `functions`, `refs`, and `features`

### 2. Optimization (HIGH)

- `optimization-watch-mode` - Use `watch()` only when the UI needs reactive render data; keep hot updates in snapshots and callbacks otherwise

### 3. Logic (HIGH)

Rules coming soon.

## How to Use

Read individual rule files for detailed explanations and examples:

```
rules/dx-extract-complex-hook.md
rules/optimization-watch-mode.md
```

Each rule file contains:

- The problem the pattern solves
- Incorrect and correct code examples
- Guidance for hook authors and hook consumers
- References to source material where relevant

## Full Compiled Document

For the compiled overview, see `AGENTS.md`.
