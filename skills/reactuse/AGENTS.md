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
2. [Elements](#2-elements)
   - 2.1 [useActiveElement](#21-useactiveelement)
3. [Async](#3-async)
   - 3.1 [useAsync](#31-useasync)
4. [Lifecycle](#4-lifecycle)
   - 4.1 [useAsyncEffect](#41-useasynceffect)

---

## 1. State

Hooks for managing local and shared state, persistence, and state helpers to keep UI logic concise and predictable.

### 1.1 useToggle

A boolean switcher with utility functions.

#### Usage

```ts
import { useToggle } from "@siberiacancode/reactuse";

const [on, toggle] = useToggle();
// or
const [value, toggle] = useToggle(["light", "dark"] as const);
```

```tsx
import { useToggle } from "@siberiacancode/reactuse";

export const Toggle = () => {
  const [value, toggle] = useToggle();

  return <button onClick={toggle}>{String(value)}</button>;
};
```

#### Notes

The toggle function accepts an optional override value. Avoid passing it directly to event handlers, because React will pass the event object as the first argument. Wrap it instead:

```tsx
<button onClick={toggle} />

<button onClick={() => toggle(false)} />
```

Example in a component with array toggle:

```tsx
import { useToggle } from "@siberiacancode/reactuse";

export const UserTypeToggle = () => {
  const [type, toggleType] = useToggle(["user", "admin"] as const);

  return <button onClick={() => toggleType()}>Current: {userType}</button>;
};
```

#### Type Declarations

```ts
export type ToggleFn = (value?: boolean) => void;
export type UseToggleReturn = [boolean, ToggleFn];
export declare const useToggle: (initialValue?: boolean) => UseToggleReturn;
```

---

## 2. Elements

Hooks for interacting with DOM elements, focus, layout, and element-based behaviors.

### 2.1 useActiveElement

Tracks the currently focused element.

#### Usage

```ts
import { useActiveElement } from "@siberiacancode/reactuse";

const { ref, value } = useActiveElement<HTMLDivElement>();
// or
const activeElement = useActiveElement(ref);
```

#### Example in a Component

```tsx
import { useActiveElement } from "@siberiacancode/reactuse";

export const ActiveElementInfo = () => {
  const activeElement = useActiveElement<HTMLDivElement>();

  return (
    <>
      <div ref={activeElement.ref}>
        <input placeholder="Name" />
        <input placeholder="Email" />
      </div>
      <p>Active element: {activeElement.value?.tagName ?? "none"}</p>
    </>
  );
};
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseActiveElementReturn<
  ActiveElement extends HTMLElement = HTMLElement
> = ActiveElement | null;
export interface UseActiveElement {
  (): UseActiveElementReturn;
  <Target extends Element, ActiveElement extends HTMLElement = HTMLElement>(
    target?: never
  ): {
    ref: StateRef<Target>;
    value: UseActiveElementReturn<ActiveElement>;
  };
  <ActiveElement extends HTMLElement = HTMLElement>(
    target: HookTarget
  ): UseActiveElementReturn<ActiveElement>;
}
export declare const useActiveElement: UseActiveElement;
```

---

## 3. Async

Hooks for handling asynchronous operations and their state.

### 3.1 useAsync

Tracks loading, error, and data state for a promise-returning callback.

#### Usage

```ts
import { useAsync } from "@siberiacancode/reactuse";

const { data, isLoading, isError, error } = useAsync(
  () => fetch("/api/user").then((res) => res.json()),
  []
);
```

#### Example

```tsx
import { useAsync } from "@siberiacancode/reactuse";

interface User {
  id: number;
  name: string;
}

export const Layout = () => {
  const { data, isLoading, isError } = useAsync<User>(
    () => fetch(`/api/me`).then((res) => res.json()),
    []
  );

  if (userAsync.isLoading || !userAsync.data) return <p>Loading...</p>;
  if (userAsync.isError) return <p>Failed to load user.</p>;

  return <div>User: {userAsync.data.name}</div>;
};
```

#### Type Declarations

```ts
import type { DependencyList } from "react";

export interface UseAsyncReturn<Data> {
  data?: Data;
  error?: Error;
  isError: boolean;
  isLoading: boolean;
}
export declare const useAsync: <Data>(
  callback: () => Promise<Data>,
  deps?: DependencyList
) => UseAsyncReturn<Data>;
```

---

## 4. Lifecycle

Hooks for managing effects and lifecycle side effects.

### 4.1 useAsyncEffect

Runs async side effects.

#### Usage

```ts
import { useAsyncEffect } from "@siberiacancode/reactuse";

useAsyncEffect(async () => {
  console.log("async effect");
}, deps);
```

## Example

```tsx
import { useAsyncEffect } from "@siberiacancode/reactuse";

export const App = () => {
  useAsyncEffect(async () => {
    const response = await fetch("/api/me").then((response) => response.json());
    console.log(response.data);
  }, [message.id]);

  //...
};
```

#### Type Declarations

```ts
import type { DependencyList } from "react";

export declare const useAsyncEffect: (
  callback: () => Promise<any>,
  deps?: DependencyList
) => void;
```

---

## References

1. [https://react.dev](https://react.dev)
2. [https://nextjs.org](https://nextjs.org)
3. [https://reactuse.org](https://reactuse.org)
