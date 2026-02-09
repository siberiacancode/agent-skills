---
name: useDebounceEffect
category: Utilities
usage: high
---

# useDebounceEffect

Runs an effect after a delay when dependencies change.

## Usage

```ts
import { useDebounceEffect } from "@siberiacancode/reactuse";

useDebounceEffect(() => console.log("effect"), 500, [value]);
```

## Example

```tsx
import { useDebounceEffect } from "@siberiacancode/reactuse";

interface SearchProps {
  query: string;
}

export const Search = ({ query }: SearchProps) => {
  useDebounceEffect(() => console.log("fetch", query), 300, [query]);

  return <div>{query}</div>;
};
```

## Type Declarations

```ts
import type { DependencyList, EffectCallback } from "react";

export declare const useDebounceEffect: (
  effect: EffectCallback,
  delay: number,
  deps?: DependencyList
) => void;
```
