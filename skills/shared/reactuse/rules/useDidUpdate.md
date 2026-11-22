---
name: useDidUpdate
category: Lifecycle
usage: high
---

# useDidUpdate

Runs an effect only on updates (not on initial mount).

## Usage

```ts
import { useDidUpdate } from "@siberiacancode/reactuse";

useDidUpdate(() => console.log("updated"), [value]);
```

## Example

```tsx
import { useDidUpdate } from "@siberiacancode/reactuse";

interface ProfileProps {
  name: string;
}

export const Profile = ({ name }: ProfileProps) => {
  useDidUpdate(() => {
    console.log("name changed");
  }, [name]);

  return <div>{name}</div>;
};
```

## Type Declarations

```ts
import type { DependencyList, EffectCallback } from "react";

export declare const useDidUpdate: (
  effect: EffectCallback,
  deps?: DependencyList
) => void;
```
