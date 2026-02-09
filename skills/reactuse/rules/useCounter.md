---
name: useCounter
category: State
usage: low
---

# useCounter

Manages a numeric counter with bounds.

## Usage

```ts
import { useCounter } from "@siberiacancode/reactuse";

const counter = useCounter(0);
```

## Example

```tsx
const counter = useCounter(0);

return (
  <div>
    <button onClick={() => counter.dec()}>-</button>
    <span>{counter.value}</span>
    <button onClick={() => counter.inc()}>+</button>
  </div>
);
```

`initialValue`:

```tsx
const counter = useCounter(5);
```

`min`:

```tsx
const counter = useCounter({ initialValue: 0, min: 0 });
```

`max`:

```tsx
const counter = useCounter({ initialValue: 0, max: 10 });
```

## Type Declarations

```ts
import type { Dispatch, SetStateAction } from "react";

export interface UseCounterOptions {
  max?: number;
  min?: number;
}
export interface UseCounterReturn {
  set: Dispatch<SetStateAction<number>>;
  value: number;
  dec: (value?: number) => void;
  inc: (value?: number) => void;
  reset: () => void;
}
export interface UseCounter {
  (initialValue?: number, options?: UseCounterOptions): UseCounterReturn;
  (
    options: UseCounterOptions & { initialValue?: number },
    initialValue?: never
  ): UseCounterReturn;
}
export declare const useCounter: UseCounter;
```
