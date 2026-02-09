---
name: useMouse
category: Sensors
usage: low
---

# useMouse

Tracks mouse coordinates relative to page and element.

## Usage

```ts
import { useMouse } from "@siberiacancode/reactuse";

const mouse = useMouse<HTMLDivElement>();
// or
const mouse = useMouse(ref);
```

## Example

```tsx
import { useMouse } from "@siberiacancode/reactuse";

export const Cursor = () => {
  const mouse = useMouse<HTMLDivElement>();

  return (
    <div ref={mouse.ref}>
      {mouse.x}, {mouse.y} (element: {mouse.elementX}, {mouse.elementY})
    </div>
  );
};
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseMouseReturn {
  clientX: number;
  clientY: number;
  elementPositionX: number;
  elementPositionY: number;
  elementX: number;
  elementY: number;
  x: number;
  y: number;
}
export interface UseMouse {
  (target: HookTarget): UseMouseReturn;
  <Target extends Element>(target?: never): UseMouseReturn & {
    ref: StateRef<Target>;
  };
  (target?: Window): UseMouseReturn;
}
export declare const useMouse: UseMouse;
```
