---
name: useParallax
category: Sensors
usage: low
---

# useParallax

Creates a parallax effect based on mouse or device orientation.

## Usage

```ts
import { useParallax } from "@siberiacancode/reactuse";

const parallax = useParallax<HTMLDivElement>();
// or
const parallax = useParallax(ref, { mouseRollAdjust: (value) => value * 0.5 });
```

## Example

```tsx
import { useParallax } from "@siberiacancode/reactuse";

const parallax = useParallax<HTMLDivElement>();
return (
  <div
    ref={parallax.ref}
    style={{
      transform: `translate(${parallax.value.roll * 5}px, ${
        parallax.value.tilt * 5
      }px)`,
    }}
  >
    Parallax
  </div>
);
```

`mouseRollAdjust`:

Mouse roll.

```tsx
const parallax = useParallax<HTMLDivElement>({
  mouseRollAdjust: (value) => value * 0.5,
});
```

`mouseTiltAdjust`:

Mouse tilt.

```tsx
const parallax = useParallax<HTMLDivElement>({
  mouseTiltAdjust: (value) => value * 0.5,
});
```

`deviceOrientationRollAdjust`:

Device roll.

```tsx
const parallax = useParallax<HTMLDivElement>({
  deviceOrientationRollAdjust: (value) => value * 0.5,
});
```

`deviceOrientationTiltAdjust`:

Device tilt.

```tsx
const parallax = useParallax<HTMLDivElement>({
  deviceOrientationTiltAdjust: (value) => value * 0.5,
});
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseParallaxValue {
  roll: number;
  source: "deviceOrientation" | "mouse";
  tilt: number;
}
export interface UseParallaxOptions {
  deviceOrientationRollAdjust?: (value: number) => number;
  deviceOrientationTiltAdjust?: (value: number) => number;
  mouseRollAdjust?: (value: number) => number;
  mouseTiltAdjust?: (value: number) => number;
}
interface UseParallaxReturn {
  value: UseParallaxValue;
}
export interface UseParallax {
  (target: HookTarget, options?: UseParallaxOptions): UseParallaxReturn;
  <Target extends Element>(
    options?: UseParallaxOptions,
    target?: never
  ): UseParallaxReturn & { ref: StateRef<Target> };
}
export declare const useParallax: UseParallax;
```
