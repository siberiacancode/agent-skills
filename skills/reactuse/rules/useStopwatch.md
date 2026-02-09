---
name: useStopwatch
category: Time
usage: high
---

# useStopwatch

Creates a stopwatch with start, pause, and reset controls.

## Usage

```ts
import { useStopwatch } from "@siberiacancode/reactuse";

const stopwatch = useStopwatch();
```

## Example

```tsx
import { useStopwatch } from "@siberiacancode/reactuse";

export const Stopwatch = () => {
  const stopwatch = useStopwatch();

  return (
    <div>
      {stopwatch.minutes}:{stopwatch.seconds}
      <button onClick={() => stopwatch.toggle()}>
        {stopwatch.paused ? "Start" : "Pause"}
      </button>
    </div>
  );
};
```

`initialTime`:

Start from a value.

```tsx
const stopwatch = useStopwatch(120);
```

`immediately`:

Auto-start.

```tsx
const stopwatch = useStopwatch({ initialTime: 0, immediately: true });
```

## Type Declarations

```ts
export interface UseStopwatchReturn {
  count: number;
  days: number;
  hours: number;
  minutes: number;
  over: boolean;
  paused: boolean;
  seconds: number;
  pause: () => void;
  reset: () => void;
  start: () => void;
  toggle: () => void;
}
export interface UseStopwatchOptions {
  immediately?: boolean;
}
interface UseStopwatch {
  (initialTime?: number, options?: UseStopwatchOptions): UseStopwatchReturn;
  (
    options?: UseStopwatchOptions & { initialTime?: number }
  ): UseStopwatchReturn;
}
export declare const useStopwatch: UseStopwatch;
```
