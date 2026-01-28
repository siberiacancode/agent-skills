# Reactuse

**Version 1.0.0**  
Vercel Engineering  
January 2026

> **Note:**  
> This document is mainly for agents and LLMs to follow when maintaining,  
> generating, or refactoring React and Next.js codebases. Humans  
> may also find it useful, but guidance here is optimized for automation  
> and consistency by AI-assisted workflows.

---

## Abstract

Comprehensive performance optimization guide for React and Next.js applications, designed for AI agents and LLMs. Contains 40+ rules across 8 categories, prioritized by impact from critical (eliminating waterfalls, reducing bundle size) to incremental (advanced patterns). Each rule includes detailed explanations, real-world examples comparing incorrect vs. correct implementations, and specific impact metrics to guide automated refactoring and code generation.

---

## Table of Contents

1. [State](#1-state)
   - 1.1 [useToggle](#11-usetoggle)

---

## 1. State

Hooks for managing local and shared state, persistence, and state helpers to keep UI logic concise and predictable.

### 1.1 useToggle

A boolean switcher hook with utility helpers for React apps.

#### Usage

```ts
import { useToggle } from "@siberiacancode/reactuse";

const [on, toggle] = useToggle();
// or
const [value, toggleValue] = useToggle(["light", "dark"] as const);
```

#### Example in a Component

```tsx
import { useToggle } from "@siberiacancode/reactuse";

export const UserTypeToggle = () => {
  const [userType, toggleUserType] = useToggle(["user", "admin"] as const);

  return <button onClick={() => toggleUserType()}>Current: {userType}</button>;
};
```

#### Notes

The toggle function accepts an optional override value. Avoid passing it directly to event handlers, because React will pass the event object as the first argument. Wrap it instead:

```tsx
<button onClick={() => toggleUserType()} />
```

#### Type Declarations

```ts
export type ToggleFn = (value?: boolean) => void;
export type UseToggleReturn = [boolean, ToggleFn];
export declare function useToggle(initialValue?: boolean): UseToggleReturn;
```

---

## References

1. [https://react.dev](https://react.dev)
2. [https://nextjs.org](https://nextjs.org)
3. [https://reactuse.org](https://reactuse.org)
