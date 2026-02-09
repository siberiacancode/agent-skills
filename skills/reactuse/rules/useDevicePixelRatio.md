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

const ratio = useDevicePixelRatio();
```

## Example

```tsx
const devicePixelRatio = useDevicePixelRatio();
if (!orientation.supported) return <div>Not supported</div>;

return <div>{String(devicePixelRatio.ratio)})</div>;
```

## Notes

- Hook uses the [devicePixelRatio API](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio).

## Type Declarations

```ts
export interface UseDevicePixelRatioReturn {
  ratio: number;
  supported: boolean;
}
export declare const useDevicePixelRatio: () => UseDevicePixelRatioReturn;
```
