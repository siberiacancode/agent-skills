---
name: useDraggable
category: Elements
usage: low
---

# useDraggable

Turns pointer movement on an element into reusable drag state that can drive transforms, canvas tools, and movable panels.

## Usage

```ts
import { useDraggable } from "@siberiacancode/reactuse";

const draggable = useDraggable<HTMLDivElement>();
// or
const draggable = useDraggable(ref, { axis: "x" });
```

## Example

```tsx
import { useDraggable } from "@siberiacancode/reactuse";

export const FloatingPanel = () => {
  const drag = useDraggable<HTMLDivElement>();
  const position = drag.watch();

  return (
    <div
      ref={drag.ref}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      Drag me
    </div>
  );
};
```

`target`:

```tsx
const drag = useDraggable(target("#panel"));
```

`axis`:

```tsx
const drag = useDraggable<HTMLDivElement>({ axis: "x" });
```

`enabled`:

```tsx
const drag = useDraggable<HTMLDivElement>({ enabled: editable });
```

`initialValue`:

```tsx
const drag = useDraggable<HTMLDivElement>({ initialValue: { x: 40, y: 20 } });
```

`onStart`:

```tsx
const drag = useDraggable<HTMLDivElement>({
  onStart: ({ position }) => console.log(position),
});
```

`onMove`:

```tsx
const drag = useDraggable<HTMLDivElement>({
  onMove: ({ delta }) => console.log(delta.x),
});
```

`onEnd`:

```tsx
const drag = useDraggable<HTMLDivElement>({
  onEnd: ({ position }) => savePosition(position),
});
```

## Notes

- By default pointer movement updates `snapshot` and callbacks without forcing a re-render. To render live drag position in JSX, subscribe via `watch()`: call it once per render, for example `const position = drag.watch()`, then the component will re-render while dragging.

## Type Declarations

```ts
import type { HookTarget, StateRef } from "@siberiacancode/reactuse";

export interface UseDraggablePosition {
  x: number;
  y: number;
}
export interface UseDraggableEvent {
  delta: UseDraggablePosition;
  event: PointerEvent;
  position: UseDraggablePosition;
}
export interface UseDraggableOptions {
  axis?: "both" | "x" | "y";
  enabled?: boolean;
  initialValue?: UseDraggablePosition;
  onEnd?: (params: UseDraggableEvent) => void;
  onMove?: (params: UseDraggableEvent) => void;
  onStart?: (params: UseDraggableEvent) => false | void;
}
export interface UseDraggableReturn {
  dragging: boolean;
  snapshot: UseDraggablePosition;
  set: (position: UseDraggablePosition) => void;
  watch: () => UseDraggablePosition;
}
export interface UseDraggable {
  (target: HookTarget, options?: UseDraggableOptions): UseDraggableReturn;
  <Target extends Element>(
    options?: UseDraggableOptions
  ): UseDraggableReturn & { ref: StateRef<Target> };
}
export declare const useDraggable: UseDraggable;
```
