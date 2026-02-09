---
name: useThrottleEffect
category: Utilities
usage: medium
---

# useThrottleEffect

Runs an effect at most once per delay period when dependencies change.

## Usage

```ts
import { useThrottleEffect } from "@siberiacancode/reactuse";

useThrottleEffect(() => console.log("effect"), 500, [value]);
```

## Example

```tsx
import { useThrottleEffect } from "@siberiacancode/reactuse";

export const Tracker = ({ value }: { value: number }) => {
  useThrottleEffect(
    () => {
      console.log(value);
    },
    1000,
    [value]
  );

  return <div>Value: {value}</div>;
};
```

## Type Declarations

```ts
import type { DependencyList, EffectCallback } from "react";

export declare const useThrottleEffect: (
  effect: EffectCallback,
  delay: number,
  deps?: DependencyList
) => void;
```
