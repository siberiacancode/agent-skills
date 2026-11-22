---
name: useSwipe
category: Sensors
usage: low
---

# useSwipe

Turns touch and pointer movement into swipe direction and distance state for gesture-driven UI.

## Usage

```ts
import { useSwipe } from "@siberiacancode/reactuse";

const swipe = useSwipe<HTMLDivElement>((value) => console.log(value.direction));
// or
const swipe = useSwipe(ref, { threshold: 80 });
```

## Example

```tsx
import { useSwipe } from "@siberiacancode/reactuse";

export const SwipeCard = () => {
  const swipe = useSwipe<HTMLDivElement>();
  const value = swipe.watch();

  return (
    <div ref={swipe.ref}>
      {swipe.swiping ? value.direction : "Swipe left or right"}
    </div>
  );
};
```

`callback`:

```tsx
const swipe = useSwipe<HTMLDivElement>((value) => console.log(value.direction));
```

`target`:

```tsx
const swipe = useSwipe(target("#carousel"), { threshold: 80 });
```

`threshold`:

```tsx
const swipe = useSwipe<HTMLDivElement>({ threshold: 80 });
```

`onStart`:

```tsx
const swipe = useSwipe<HTMLDivElement>({
  onStart: (value) => console.log(value.direction),
});
```

`onMove`:

```tsx
const swipe = useSwipe<HTMLDivElement>({
  onMove: (value) => console.log(value.lengthX),
});
```

`onEnd`:

```tsx
const swipe = useSwipe<HTMLDivElement>({
  onEnd: (value) => console.log(value.direction),
});
```

## Notes

- By default gesture movement updates `snapshot` and callbacks without forcing a re-render. To render live swipe state in JSX, subscribe via `watch()`: call it once per render, for example `const value = swipe.watch()`, then the component will re-render while swiping.

## Type Declarations

```ts
import type { HookTarget, StateRef } from "@siberiacancode/reactuse";

export type SwipeDirection = "down" | "left" | "none" | "right" | "up";
export type SwipeEvent = PointerEvent | TouchEvent;
export interface UseSwipeValue {
  direction: SwipeDirection;
  lengthX: number;
  lengthY: number;
}
export type UseSwipeCallback = (value: UseSwipeValue, event: SwipeEvent) => void;
export interface UseSwipeOptions {
  onMove?: UseSwipeCallback;
  threshold?: number;
  onEnd?: (value: UseSwipeValue, event: SwipeEvent) => void;
  onStart?: (value: UseSwipeValue, event: SwipeEvent) => void;
}
export interface UseSwipeReturn {
  snapshot: UseSwipeValue;
  swiping: boolean;
  watch: () => UseSwipeValue;
}
export interface UseSwipe {
  (target: HookTarget, callback?: UseSwipeCallback): UseSwipeReturn;
  (target: HookTarget, options?: UseSwipeOptions): UseSwipeReturn;
  <Target extends Element>(
    callback?: UseSwipeCallback
  ): UseSwipeReturn & { ref: StateRef<Target> };
  <Target extends Element>(
    options?: UseSwipeOptions
  ): UseSwipeReturn & { ref: StateRef<Target> };
}
export declare const useSwipe: UseSwipe;
```
