---
name: useRightClick
category: Elements
usage: low
---

# useRightClick

Handles right-click and long press events.

## Usage

```ts
import { useRightClick } from "@siberiacancode/reactuse";

const ref = useRightClick<HTMLDivElement>(() => console.log("clicked"));
// or
useRightClick(ref, () => console.log("clicked"));
```

## Example

```tsx
import { useRightClick } from "@siberiacancode/reactuse";
import { useState } from "react";

export const Menu = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRightClick<HTMLDivElement>(({ x, y }) => setPos({ x, y }));

  return (
    <div ref={ref}>
      Right click at {pos.x}, {pos.y}
    </div>
  );
};
```

`onStart`:

Press start.

```tsx
const ref = useRightClick<HTMLDivElement>(() => {}, {
  onStart: () => console.log("start"),
});
```

`onEnd`:

Press end.

```tsx
const ref = useRightClick<HTMLDivElement>(() => {}, {
  onEnd: () => console.log("end"),
});
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type RightClickEvent = MouseEvent | TouchEvent;
export interface RightClickPositions {
  x: number;
  y: number;
}
export interface UseRightClickOptions {
  onEnd?: (event: RightClickEvent) => void;
  onStart?: (event: RightClickEvent) => void;
}
export interface UseRightClick {
  (
    target: HookTarget,
    callback: (event: Event) => void,
    options?: UseRightClickOptions
  ): void;
  <Target extends Element>(
    callback: (positions: RightClickPositions, event: Event) => void,
    options?: UseRightClickOptions,
    target?: never
  ): StateRef<Target>;
}
export declare const useRightClick: UseRightClick;
```
