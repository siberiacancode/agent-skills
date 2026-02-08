---
name: useAsyncEffect
category: Lifecycle
usage: medium
---

# useAsyncEffect

Runs async side effects.

## Usage

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

## Type Declarations

```ts
import type { DependencyList } from "react";

export declare const useAsyncEffect: (
  callback: () => Promise<any>,
  deps?: DependencyList
) => void;
```
