---
name: useIsomorphicLayoutEffect
category: Lifecycle
usage: high
---

# useIsomorphicLayoutEffect

Uses `useLayoutEffect` on the client and `useEffect` on the server.

## Usage

```ts
import { useIsomorphicLayoutEffect } from "@siberiacancode/reactuse";

useIsomorphicLayoutEffect(() => {}, []);
```

## Example

```tsx
useIsomorphicLayoutEffect(() => {}, []);
```

## Type Declarations

```ts
import type { useEffect } from "react";

export declare const useIsomorphicLayoutEffect: typeof useEffect;
```
