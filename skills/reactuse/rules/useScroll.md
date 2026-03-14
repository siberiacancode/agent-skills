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
const scroll = useScroll<HTMLDivElement>({
  onScroll: ({ arrived, y }) => {
    if (arrived.bottom) console.log("reached bottom");
  },
});
return (
  <div ref={scroll.ref}>
    <button onClick={() => scroll.scrollTo({ x: 0, y: 0 })}>Top</button>
    <button onClick={() => scroll.scrollIntoView({ block: "end" })}>To end</button>
  </div>
);
```

`onStop`:

```tsx
const scroll = useScroll<HTMLDivElement>({
  onStop: () => console.log("stopped"),
});
```

`offset`:

```tsx
const scroll = useScroll<HTMLDivElement>({ offset: { left: 10, top: 10 } });
```

**Reactivity.** By default the hook does not re-render on scroll — only `snapshot` in a ref and `onScroll` are updated. To render scroll state in JSX and react to changes, subscribe via `watch()`: call it once per render (e.g. `const state = scroll.watch()`), then the component will re-render on scroll and `state` will stay in sync.

If you do need to show scroll position in the UI:

```tsx
const scroll = useScroll<HTMLDivElement>();
const state = scroll.watch();

return (
  <div ref={scroll.ref}>
    Scroll: {state.y}px · {state.arrived.bottom ? "Bottom" : "scrolling"}
  </div>
);
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseScrollOptions {
  offset?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  onScroll?: (params: UseScrollCallbackParams, event: Event) => void;
  onStop?: (event: Event) => void;
}
export interface UseScrollCallbackParams {
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
  x: number;
  y: number;
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
  snapshot: UseScrollCallbackParams;
  scrollIntoView: (params?: ScrollIntoViewParams) => void;
  scrollTo: (params?: ScrollToParams) => void;
  watch: () => UseScrollCallbackParams;
}
export interface UseScroll {
  (
    target?: HookTarget,
    callback?: (params: UseScrollCallbackParams, event: Event) => void
  ): UseScrollReturn;
  (target: HookTarget, options?: UseScrollOptions): UseScrollReturn;
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
