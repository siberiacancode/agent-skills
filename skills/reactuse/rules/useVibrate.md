---
name: useVibrate
category: Browser
usage: low
---

# useVibrate

Triggers vibration with optional intervals.

## Usage

```ts
import { useVibrate } from "@siberiacancode/reactuse";

const vibrate = useVibrate(1000);
```

## Example

```tsx
import { useVibrate } from "@siberiacancode/reactuse";

export const HapticButton = () => {
  const vibrate = useVibrate(200);

  return <button onClick={() => vibrate.trigger()}>Vibrate</button>;
};
```

`pattern`:

```tsx
const vibrate = useVibrate([200, 100, 200]);
```

`interval`:

```tsx
const vibrate = useVibrate(200, 1000);
```

## Notes

- Hook uses the [navigator.vibrate API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate).

## Type Declarations

```ts
export type UseVibratePattern = number | number[];
export interface UseVibrateReturn {
  supported: boolean;
  vibrating: boolean;
  pause: () => void;
  resume: () => void;
  start: (interval: number) => void;
  trigger: (pattern?: UseVibratePattern) => void;
}
export declare const useVibrate: (
  pattern: UseVibratePattern,
  interval?: number
) => UseVibrateReturn;
```
