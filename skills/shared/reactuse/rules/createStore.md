---
name: createStore
category: Helpers
usage: medium
---

# createStore

Creates a external store with state, subscriptions, and a hook.

## Usage

```ts
import { createStore } from "@siberiacancode/reactuse";

const store = createStore({ count: 0 });
```

## Example

```tsx
import { createStore } from "@siberiacancode/reactuse";

const counter = createStore((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export const Counter = () => {
  const value = counter.use((state) => state.count);
  return (
    <div>
      <button onClick={() => counter.get().dec()}>-</button>
      <span>{value}</span>
      <button onClick={() => counter.get().inc()}>+</button>
      <button onClick={() => counter.get().reset()}>Reset</button>
      <button onClick={() => counter.set({ count: 10 })}>Set 10</button>
    </div>
  );
};
```

Subscriptions:

```tsx
const unsubscribe = counter.subscribe((state) => {
  console.log("count", state.count);
});
```

## Type Declarations

```ts
type StoreSetAction<Value> = ((prev: Value) => Partial<Value>) | Partial<Value>;
type StoreListener<Value> = (state: Value, prevState: Value) => void;
type StoreCreator<Value> = (
  set: (action: StoreSetAction<Value>) => void,
  get: () => Value
) => Value;
export interface StoreApi<Value> {
  get: () => Value;
  getInitial: () => Value;
  set: (action: StoreSetAction<Value>) => void;
  subscribe: (listener: StoreListener<Value>) => () => void;
  use: (() => Value) &
    (<Selected>(selector: (state: Value) => Selected) => Selected) &
    (<Selected>(selector?: (state: Value) => Selected) => Selected | Value);
}
export declare const createStore: <Value>(
  createState: StoreCreator<Value> | Value
) => StoreApi<Value>;
```
