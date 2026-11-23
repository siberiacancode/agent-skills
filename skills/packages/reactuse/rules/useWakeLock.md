---
name: useWakeLock
category: Browser
usage: low
---

# useWakeLock

Controls the Wake Lock API state.

## Usage

```ts
import { useWakeLock } from "@siberiacancode/reactuse";

const wake = useWakeLock();
```

## Example

```tsx
import { useWakeLock } from "@siberiacancode/reactuse";

export const WakeLockToggle = () => {
  const wake = useWakeLock();

  return (
    <button onClick={() => (wake.active ? wake.release() : wake.request())}>
      {wake.active ? "Release" : "Keep awake"}
    </button>
  );
};
```

`immediately`:

```tsx
const wake = useWakeLock({ immediately: true });
```

`type`:

```tsx
const wake = useWakeLock({ type: "screen" });
```

## Notes

- Hook uses the [WakeLock API](https://developer.mozilla.org/en-US/docs/Web/API/WakeLock).

## Type Declarations

```ts
export interface UseWakeLockOptions {
  immediately?: boolean;
  type?: WakeLockType;
}
export interface UseWakeLockReturn {
  active: boolean;
  supported: boolean;
  release: () => Promise<void>;
  request: () => Promise<void>;
}
export declare const useWakeLock: (
  options?: UseWakeLockOptions
) => UseWakeLockReturn;
```
