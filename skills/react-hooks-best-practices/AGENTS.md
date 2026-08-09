# React Hooks Best Practices

**Version 1.0.0**  
siberiacancode  
August 2026

> **Note:**  
> This document is optimized for agents and LLMs writing React application code with hooks, creating custom hooks, and reviewing hook behavior. It groups guidance by DX, optimization, and logic.

---

## Abstract

React hooks best practices for using hooks in React applications and designing custom hooks across DX, optimization, and logic. Use it for component hook usage, custom hook design, hook API review, feature-logic extraction, and hook correctness/performance checks.

---

## Table of Contents

1. [DX](#1-dx)
   - 1.1 [Extract complex feature logic into hooks](#11-extract-complex-feature-logic-into-hooks)
2. [Optimization](#2-optimization)
   - 2.1 [Watch mode for hot updates](#21-watch-mode-for-hot-updates)
3. [Logic](#3-logic)

---

## 1. DX

### 1.1 Extract complex feature logic into hooks

When a component owns complex feature logic, move that logic into a custom hook. This applies to forms, modals, mutations, routing, persistence, selected entities, derived values, and action handlers, even when there are no browser subscriptions.

Do not extract just to make a file shorter. Extract a cohesive feature scenario and expose a clear contract. Name the hook `use` + component/feature name, and name params types `Use` + component/feature name + `Params`, for example `useCreateRoomForm` and `UseCreateRoomFormParams`.

Prefer grouped returns such as `form`, `state`, `functions`, `refs`, and `features`; add domain-specific groups only when they make the component easier to read.

The component should read like UI composition. The hook should read like the feature controller.

## 2. Optimization

### 2.1 Watch mode for hot updates

For hooks that listen to hot external sources like mouse movement, scroll, observers, timers, or device sensors, do not force every update through React state. Keep the default path as `callback + snapshot`, and expose `watch()` as an explicit opt-in for components that actually render the value.

Use the callback path for imperative side effects such as CSS variables, canvas drawing, analytics, or DOM measurements. Throttling, debouncing, and `requestAnimationFrame` are consumer-side composition, not options baked into the primitive hook.

Only call `watch()` at the usage site when JSX needs the live value. One hook should support both modes: zero-render imperative usage by default, reactive rendering only when the consumer asks for it.

## 3. Logic

Rules coming soon.
