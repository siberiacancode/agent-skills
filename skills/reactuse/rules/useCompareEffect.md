---
name: useCompareEffect
category: Lifecycle
usage: low
---

# useCompareEffect

Runs an effect when a configurable comparator reports that a dependency changed.

## Usage

```ts
import { shallowEqual, useCompareEffect } from "@siberiacancode/reactuse";

useCompareEffect(() => syncFilters(filters), [filters]);
useCompareEffect(() => syncLayout(layout), [layout], shallowEqual);
```

## Example

```tsx
const filter = { role, range: { from: 0, to: 10 } };

useCompareEffect(() => {
  void loadUsers(filter);
}, [filter]);
```

## Type Declarations

```ts
import type { DependencyList, EffectCallback } from "react";

export type CompareFunction = (current: any, previous: any) => boolean;
export declare const useCompareEffect: (
  effect: EffectCallback,
  deps?: DependencyList,
  compare?: CompareFunction
) => void;
```
