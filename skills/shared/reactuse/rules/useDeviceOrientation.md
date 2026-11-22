---
name: useDeviceOrientation
category: Sensors
usage: low
---

# useDeviceOrientation

Provides the current device orientation.

## Usage

```ts
import { useDeviceOrientation } from "@siberiacancode/reactuse";

const orientation = useDeviceOrientation();
```

## Example

```tsx
const orientation = useDeviceOrientation();
if (!orientation.supported) return <div>Not supported</div>;

return (
  <div>
    alpha: {orientation.value.alpha ?? 0} beta: {orientation.value.beta ?? 0}
  </div>
);
```

## Notes

- Hook uses the [DeviceOrientationEvent API](https://developer.mozilla.org/en-US/docs/Web/API/Window/DeviceOrientationEvent).

## Type Declarations

```ts
export interface UseDeviceOrientationValue {
  absolute: boolean;
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
}
export interface UseDeviceOrientationReturn {
  supported: boolean;
  value: UseDeviceOrientationValue;
}
export declare const useDeviceOrientation: () => UseDeviceOrientationReturn;
```
