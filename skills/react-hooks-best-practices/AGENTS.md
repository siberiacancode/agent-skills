# React Hooks Best Practices

**Version 1.0.0**  
siberiacancode  
August 2026

> **Note:**  
> This document is optimized for agents and LLMs writing React application code with hooks, creating custom hooks, and reviewing hook behavior. It groups guidance by DX, optimization, and logic.

---

## Abstract

React hooks best practices for using hooks in React applications and designing custom hooks across DX, optimization, and logic. Use it for component hook usage, custom hook design, hook API review, and hook correctness/performance checks. The first guide focuses on watch mode for high-frequency updates.

---

## Table of Contents

1. [DX](#1-dx)
2. [Optimization](#2-optimization)
   - 2.1 [Watch mode for hot updates](#21-watch-mode-for-hot-updates)
3. [Logic](#3-logic)

---

## 1. DX

Rules coming soon.

## 2. Optimization

### 2.1 Watch mode for hot updates

For hooks that listen to hot external sources like mouse movement, scroll, observers, timers, or device sensors, do not force every update through React state. Keep the default path as `callback + snapshot`, and expose `watch()` as an explicit opt-in for components that actually render the value.

Use the callback path for imperative side effects such as CSS variables, canvas drawing, analytics, or DOM measurements. Throttling, debouncing, and `requestAnimationFrame` are consumer-side composition, not options baked into the primitive hook.

Only call `watch()` at the usage site when JSX needs the live value. One hook should support both modes: zero-render imperative usage by default, reactive rendering only when the consumer asks for it.

## 3. Logic

Rules coming soon.
