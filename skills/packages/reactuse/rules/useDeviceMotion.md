---
name: useDeviceMotion
category: Sensors
usage: low
---

# useDeviceMotion

Provides device motion data via `snapshot` and `watch()`.

## Usage

```ts
import { useDeviceMotion } from "@siberiacancode/reactuse";

const motion = useDeviceMotion();
const value = motion.watch();
```

## Example

```tsx
const motion = useDeviceMotion();
const value = motion.watch();

return (
  <div>
    {Math.round(value.accelerationIncludingGravity.x ?? 0)} /{" "}
    {Math.round(value.accelerationIncludingGravity.y ?? 0)}
  </div>
);
```

`enabled`:

```tsx
const motion = useDeviceMotion({ enabled: false });
```

`onChange`:

```tsx
const motion = useDeviceMotion({ onChange: (event) => console.log(event) });
```

## Notes

- Hook uses the [DeviceMotionEvent API](https://developer.mozilla.org/en-US/docs/Web/API/Window/DeviceMotionEvent).
- By default device motion updates `snapshot` and `onChange` without forcing a re-render. To render live motion data in JSX, subscribe via `watch()`: call it once per render, for example `const value = motion.watch()`, then the component will re-render on motion updates.

## Type Declarations

```ts
export interface UseDeviceMotionReturn {
  snapshot: UseDeviceMotionValue;
  watch: () => UseDeviceMotionValue;
}
export interface UseDeviceMotionValue {
  acceleration: DeviceMotionEventAcceleration;
  accelerationIncludingGravity: DeviceMotionEventAcceleration;
  interval: DeviceMotionEvent["interval"];
  rotationRate: DeviceMotionEventRotationRate;
}
export interface UseDeviceMotionOptions {
  enabled?: boolean;
  onChange?: (event: DeviceMotionEvent) => void;
}
export interface UseDeviceMotion {
  (callback?: (event: DeviceMotionEvent) => void): UseDeviceMotionReturn;
  (options?: UseDeviceMotionOptions): UseDeviceMotionReturn;
}
export declare const useDeviceMotion: UseDeviceMotion;
```
