---
name: useInterval
category: Time
usage: high
---

# useInterval

Creates an interval with controls to pause and resume it.

## Usage

```ts
import { useInterval } from "@siberiacancode/reactuse";

const interval = useInterval(() => console.log("tick"), 2500);
```

## Example

```tsx
import { useInterval } from "@siberiacancode/reactuse";
import { useState } from "react";

export const Ticker = () => {
  const [count, setCount] = useState(0);
  const interval = useInterval(() => setCount((value) => value + 1), 1000);

  return (
    <button onClick={() => interval.toggle()}>
      {interval.active ? "Pause" : "Resume"} ({count})
    </button>
  );
};
```

`interval` (milliseconds):

```tsx
const interval = useInterval(() => console.log("tick"), 2000);
```

`immediately` (start right away):

```tsx
const interval = useInterval(() => console.log("tick"), {
  interval: 1000,
  immediately: false,
});
```

## Type Declarations

```ts
export interface UseIntervalOptions {
  immediately?: boolean;
}
export interface UseIntervalReturn {
  active: boolean;
  pause: () => void;
  resume: () => void;
  toggle: () => void;
}
interface UseInterval {
  (
    callback: () => void,
    interval?: number,
    options?: UseIntervalOptions
  ): UseIntervalReturn;
  (
    callback: () => void,
    options?: UseIntervalOptions & { interval?: number }
  ): UseIntervalReturn;
}
export declare const useInterval: UseInterval;
```
