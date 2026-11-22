---
name: useIdle
category: Sensors
usage: low
---

# useIdle

Tracks whether the user is idle and last active time.

## Usage

```ts
import { useIdle } from "@siberiacancode/reactuse";

const idle = useIdle();
```

`callback`:

```tsx
const idle = useIdle(60000, (nextIdle) => console.log(nextIdle));
```

## Example

```tsx
import { useIdle } from "@siberiacancode/reactuse";

const idle = useIdle(60000);

return (
  <div>
    {idle.idle ? "Idle" : "Active"} (last: {idle.lastActive})
  </div>
);
```

`milliseconds`:

```tsx
const idle = useIdle(30000);
```

`initialValue`:

```tsx
const idle = useIdle(60000, { initialValue: true });
```

`events`:

```tsx
const idle = useIdle(60000, { events: ["mousemove", "keydown"] });
```

`onChange`:

```tsx
const idle = useIdle(60000, {
  onChange: (nextIdle) => console.log(nextIdle),
});
```

## Type Declarations

```ts
export type UseIdleCallback = (idle: boolean) => void;
export interface UseIdleOptions {
  events?: Array<keyof DocumentEventMap>;
  initialValue?: boolean;
  onChange?: UseIdleCallback;
}
export interface UseIdleReturn {
  idle: boolean;
  lastActive: number;
}
export interface UseIdle {
  (): UseIdleReturn;
  (milliseconds: number, callback: UseIdleCallback): UseIdleReturn;
  (milliseconds: number, options?: UseIdleOptions): UseIdleReturn;
}
export declare const useIdle: UseIdle;
```
