---
name: useQueue
category: State
usage: medium
---

# useQueue

Manages a queue with add/remove helpers.

## Usage

```ts
import { useQueue } from "@siberiacancode/reactuse";

const queue = useQueue([1, 2, 3]);
```

## Example

```tsx
const queue = useQueue(["a", "b"]);

return (
  <div>
    <button onClick={() => queue.add("c")}>Add</button>
    <button onClick={() => queue.remove()}>Next</button>
    <div>Size: {queue.size}</div>
  </div>
);
```

`initialValue`:

```tsx
const queue = useQueue(["a", "b"]);
```

## Type Declarations

```ts
export interface UseQueueReturn<Value> {
  first: Value;
  last: Value;
  queue: Value[];
  size: number;
  add: (element: Value) => void;
  clear: () => void;
  remove: () => Value;
}
export declare const useQueue: <Value>(
  initialValue?: Value[]
) => UseQueueReturn<Value>;
```
