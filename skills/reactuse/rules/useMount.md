---
name: useMount
category: Lifecycle
usage: high
---

# useMount

Runs a callback once when the component mounts.

## Usage

```ts
import { useMount } from "@siberiacancode/reactuse";

useMount(() => console.log("mounted"));
```

## Example

```tsx
import { useMount } from "@siberiacancode/reactuse";

export const Tracker = () => {
  useMount(() => {
    console.log("track mount");
  });

  return <div>Mounted</div>;
};
```

## Type Declarations

```ts
import type { EffectCallback } from "react";

export declare const useMount: (effect: EffectCallback) => void;
```
