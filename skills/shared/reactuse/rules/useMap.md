---
name: useMap
category: State
usage: high
---

# useMap

Manages a Map with helper methods.

## Usage

```ts
import { useMap } from "@siberiacancode/reactuse";

const map = useMap([["id", 1]]);
```

## Example

```tsx
import { useMap } from "@siberiacancode/reactuse";

export const Lookup = () => {
  const map = useMap([["a", 1]]);

  return <button onClick={() => map.set("b", 2)}>Size: {map.size}</button>;
};
```

## Type Declarations

```ts
export interface UseMapReturn<Key, Value> {
  size: number;
  value: Map<Key, Value>;
  clear: () => void;
  has: (key: Key) => boolean;
  remove: (key: Key) => void;
  reset: () => void;
  set: (key: Key, value: Value) => void;
}
export declare const useMap: <Key, Value>(
  values?: [Key, Value][]
) => UseMapReturn<Key, Value>;
```
