---
name: useTimer
category: Time
usage: medium
---

# useTimer

Creates a countdown timer with controls and callbacks.

## Usage

```ts
import { useTimer } from "@siberiacancode/reactuse";

const timer = useTimer(60);
```

## Example

```tsx
import { useTimer } from "@siberiacancode/reactuse";

export const Countdown = () => {
  const timer = useTimer(10);

  return (
    <div>
      {timer.seconds}s
      <button onClick={() => timer.toggle()}>
        {timer.active ? "Pause" : "Resume"}
      </button>
    </div>
  );
};
```

`seconds`:

Initial countdown.

```tsx
const timer = useTimer(30);
```

`immediately`:

Auto-start.

```tsx
const timer = useTimer(30, { immediately: false });
```

`onExpire`:

When timer ends.

```tsx
const timer = useTimer(10, {
  onExpire: () => console.log("done"),
});
```

`onStart`:

When timer starts.

```tsx
const timer = useTimer(10, {
  onStart: () => console.log("start"),
});
```

`onTick`:

On each second.

```tsx
const timer = useTimer(10, {
  onTick: (seconds) => console.log(seconds),
});
```

## Type Declarations

```ts
export type PositiveInteger<Value extends number> = `${Value}` extends
  | `-${any}`
  | `${any}.${any}`
  ? never
  : Value;
export interface UseTimerOptions {
  immediately?: boolean;
  onExpire?: () => void;
  onStart?: () => void;
  onTick?: (seconds: number) => void;
}
export interface UseTimerReturn {
  active: boolean;
  count: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  clear: () => void;
  decrease: (seconds: PositiveInteger<number>) => void;
  increase: (seconds: PositiveInteger<number>) => void;
  pause: () => void;
  restart: (time: PositiveInteger<number>, immediately?: boolean) => void;
  resume: () => void;
  start: () => void;
  toggle: () => void;
}
export interface UseTimer {
  (): UseTimerReturn;
  (seconds: PositiveInteger<number>, callback: () => void): UseTimerReturn;
  (seconds: PositiveInteger<number>, options?: UseTimerOptions): UseTimerReturn;
}
export declare const useTimer: UseTimer;
```
