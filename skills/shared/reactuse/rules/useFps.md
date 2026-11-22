---
name: useFps
category: Browser
usage: low
---

# useFps

Measures frames per second.

## Usage

```ts
import { useFps } from "@siberiacancode/reactuse";

const fps = useFps();
```

`callback`:

```ts
const fps = useFps((value) => console.log("fps", value));
```

## Example

```tsx
const fps = useFps();
return <div>FPS: {fps}</div>;
```

## Notes

- Hook uses the [requestAnimationFrame API](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

## Type Declarations

```ts
export declare const useFps: (callback?: (fps: number) => void) => number;
```
