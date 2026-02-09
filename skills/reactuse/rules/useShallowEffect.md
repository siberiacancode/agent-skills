---
name: useShallowEffect
category: Lifecycle
usage: low
---

# useShallowEffect

Runs an effect only when dependencies change shallowly or deeply.

## Usage

```ts
import { useShallowEffect } from "@siberiacancode/reactuse";

useShallowEffect(() => console.log("effect"), [user]);
```

## Example

```tsx
import { useShallowEffect } from "@siberiacancode/reactuse";

interface UserCardProps {
  user: {
    id: string;
    name: string;
  };
}

export const UserCard = ({ user }: UserCardProps) => {
  useShallowEffect(() => console.log("effect"), [user]);

  return <div>{user.name}</div>;
};
```

## Notes

- Uses a deep comparison helper to decide if dependencies changed.

## Type Declarations

```ts
import type { DependencyList, EffectCallback } from "react";

export declare const deepEqual: (a: any, b: any) => boolean;
export declare const useShallowEffect: (
  effect: EffectCallback,
  deps?: DependencyList
) => void;
```
