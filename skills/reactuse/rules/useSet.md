---
name: useSet
category: State
usage: medium
---

# useSet

Manages a Set with helper methods.

## Usage

```ts
import { useSet } from "@siberiacancode/reactuse";

const set = useSet([1, 2, 3]);
```

## Example

```tsx
const set = useSet(["a"]);
return <button onClick={() => set.toggle("b")}>Size: {set.size}</button>;
```

`values`:

```tsx
const set = useSet(["a", "b"]);
```

## Type Declarations

```ts
interface UseSetReturn<Value> {
  size: number;
  value: Set<Value>;
  add: (value: Value) => void;
  clear: () => void;
  difference: (other: Set<Value>) => void;
  has: (value: Value) => boolean;
  intersection: (other: Set<Value>) => void;
  remove: (value: Value) => void;
  reset: () => void;
  symmetricDifference: (other: Set<Value>) => void;
  toggle: (value: Value) => void;
  union: (other: Set<Value>) => void;
}
export declare const useSet: <Value>(values?: Value[]) => UseSetReturn<Value>;
```
