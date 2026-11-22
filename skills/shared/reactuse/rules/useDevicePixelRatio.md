---
name: useDevicePixelRatio
category: Utilities
usage: low
---

# useDevicePixelRatio

Returns the current device pixel ratio.

## Usage

```ts
import { useDevicePixelRatio } from "@siberiacancode/reactuse";

const devicePixelRatio = useDevicePixelRatio();
```

## Example

```tsx
const devicePixelRatio = useDevicePixelRatio();
if (!devicePixelRatio.supported) return <div>Not supported</div>;

return <div>{String(devicePixelRatio.value)}</div>;
```

## Notes

- Hook uses the [devicePixelRatio API](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio).

## Type Declarations

```ts
export type UseDevicePixelRatioCallback = (value: number) => void;
export interface UseDevicePixelRatioReturn {
  supported: boolean;
  value: number;
}
export declare const useDevicePixelRatio: (
  callback?: UseDevicePixelRatioCallback
) => UseDevicePixelRatioReturn;
```
