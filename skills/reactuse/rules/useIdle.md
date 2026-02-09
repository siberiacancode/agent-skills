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

Idle timeout in milliseconds.

```tsx
const idle = useIdle(30000);
```

`initialValue`:

Initial idle value.

```tsx
const idle = useIdle(60000, { initialValue: true });
```

`events`:

Events that reset idle state.

```tsx
const idle = useIdle(60000, { events: ["mousemove", "keydown"] });
```

## Type Declarations

```ts
export interface UseIdleOptions {
  events?: Array<keyof DocumentEventMap>;
  initialValue?: boolean;
}
export interface UseIdleReturn {
  idle: boolean;
  lastActive: number;
}
export declare const useIdle: (
  milliseconds?: number,
  options?: UseIdleOptions
) => UseIdleReturn;
```
