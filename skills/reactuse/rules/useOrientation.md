---
name: useOrientation
category: Sensors
usage: low
---

# useOrientation

Returns the current screen orientation and lock controls.

## Usage

```ts
import { useOrientation } from "@siberiacancode/reactuse";

const orientation = useOrientation();
```

## Example

```tsx
import { useOrientation } from "@siberiacancode/reactuse";

export const ScreenOrientation = () => {
  const orientation = useOrientation();
  if (!orientation.supported) return <div>Not supported</div>;

  return (
    <div>
      {orientation.value.orientationType}
      <button onClick={() => orientation.lock("portrait")}>Lock</button>
      <button onClick={() => orientation.unlock()}>Unlock</button>
    </div>
  );
};
```

## Notes

- Hook uses the [screen.orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation).

## Type Declarations

```ts
export interface UseOrientationValue {
  angle: number;
  orientationType?: OrientationType;
}
export type OrientationLockType =
  | "any"
  | "landscape-primary"
  | "landscape-secondary"
  | "landscape"
  | "natural"
  | "portrait-primary"
  | "portrait-secondary"
  | "portrait";
export interface useOrientationReturn {
  supported: boolean;
  value: UseOrientationValue;
  lock: (orientation: OrientationLockType) => void;
  unlock: () => void;
}
export declare const useOrientation: () => useOrientationReturn;
```
