---
name: useDeviceMotion
category: Sensors
usage: low
---

# useDeviceMotion

Provides device motion data with optional throttling.

## Usage

```ts
import { useDeviceMotion } from "@siberiacancode/reactuse";

const motion = useDeviceMotion();
```

## Example

```tsx
const motion = useDeviceMotion();

return (
  <div>
    {Math.round(motion.accelerationIncludingGravity.x ?? 0)} /{" "}
    {Math.round(motion.accelerationIncludingGravity.y ?? 0)}
  </div>
);
```

`delay`:

```tsx
const motion = useDeviceMotion({ delay: 500 });
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

## Type Declarations

```ts
export interface UseDeviceMotionReturn {
  acceleration: DeviceMotionEventAcceleration;
  accelerationIncludingGravity: DeviceMotionEventAcceleration;
  interval: DeviceMotionEvent["interval"];
  rotationRate: DeviceMotionEventRotationRate;
}
export interface UseDeviceMotionOptions {
  delay?: number;
  enabled?: boolean;
  onChange?: (event: DeviceMotionEvent) => void;
}
export interface UseDeviceMotion {
  (
    callback?: (event: DeviceMotionEvent) => void,
    delay?: number
  ): UseDeviceMotionReturn;
  (options?: UseDeviceMotionOptions): UseDeviceMotionReturn;
}
export declare const useDeviceMotion: UseDeviceMotion;
```
