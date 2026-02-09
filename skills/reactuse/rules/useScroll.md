---
name: useScroll
category: Sensors
usage: low
---

# useScroll

Tracks scroll state and provides scroll helpers.

## Usage

```ts
import { useScroll } from "@siberiacancode/reactuse";

const scroll = useScroll<HTMLDivElement>();
// or
const scroll = useScroll(ref);
```

## Example

```tsx
const scroll = useScroll<HTMLDivElement>();
return (
  <div ref={scroll.ref}>
    {scroll.arrived.bottom ? "Bottom" : `y: ${scroll.y}`}
  </div>
);
```

`onScroll`:

Scroll callback.

```tsx
const scroll = useScroll<HTMLDivElement>({
  onScroll: ({ x, y }) => console.log(x, y),
});
```

`onStop`:

Stop callback.

```tsx
const scroll = useScroll<HTMLDivElement>({
  onStop: () => console.log("stopped"),
});
```

`offset.left`:

Left offset.

```tsx
const scroll = useScroll<HTMLDivElement>({ offset: { left: 10 } });
```

`offset.right`:

Right offset.

```tsx
const scroll = useScroll<HTMLDivElement>({ offset: { right: 10 } });
```

`offset.top`:

Top offset.

```tsx
const scroll = useScroll<HTMLDivElement>({ offset: { top: 10 } });
```

`offset.bottom`:

Bottom offset.

```tsx
const scroll = useScroll<HTMLDivElement>({ offset: { bottom: 10 } });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseScrollOptions {
  onScroll?: (params: UseScrollCallbackParams, event: Event) => void;
  onStop?: (event: Event) => void;
  offset?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
}
export interface UseScrollCallbackParams {
  x: number;
  y: number;
  arrived: {
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
  };
  directions: {
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
  };
}
export interface ScrollIntoViewParams {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}
export interface ScrollToParams {
  behavior?: ScrollBehavior;
  x: number;
  y: number;
}
export interface UseScrollReturn {
  scrolling: boolean;
  scrollIntoView: (params?: ScrollIntoViewParams) => void;
  scrollTo: (params?: ScrollToParams) => void;
}
export interface UseScroll {
  (
    target?: HookTarget,
    callback?: (params: UseScrollCallbackParams, event: Event) => void
  ): UseScrollReturn;
  (target?: HookTarget, options?: UseScrollOptions): UseScrollReturn;
  <Target extends Element>(
    callback?: (params: UseScrollCallbackParams, event: Event) => void,
    target?: never
  ): UseScrollReturn & { ref: StateRef<Target> };
  <Target extends Element>(
    options?: UseScrollOptions,
    target?: never
  ): UseScrollReturn & { ref: StateRef<Target> };
}
export declare const useScroll: UseScroll;
```
