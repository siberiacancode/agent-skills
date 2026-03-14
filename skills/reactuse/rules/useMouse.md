---
name: useMouse
category: Sensors
usage: low
---

# useMouse

Tracks mouse coordinates relative to page and element. State is stored in a snapshot; the component re-renders only when you subscribe via `watch()` or use the optional callback.

## Usage

```ts
import { useMouse } from "@siberiacancode/reactuse";

const mouse = useMouse<HTMLDivElement>();
// or
const mouse = useMouse(ref);
// with callback (no re-render needed for side effects)
const mouse = useMouse<HTMLDivElement>((value, event) =>
  console.log(value.x, value.y)
);
```

## Example

```tsx
const mouse = useMouse<HTMLDivElement>((value) => {
  document.body.style.setProperty("--mouse-x", String(value.clientX));
  document.body.style.setProperty("--mouse-y", String(value.clientY));
});
return <div ref={mouse.ref}>Cursor position → CSS vars</div>;
```

Reading `snapshot` without re-renders (e.g. in a handler):

```tsx
const mouse = useMouse<HTMLDivElement>();
return (
  <div
    ref={mouse.ref}
    onClick={() => console.log(mouse.snapshot.clientX, mouse.snapshot.clientY)}
  >
    Click to log position
  </div>
);
```

**Reactivity.** By default the hook does not re-render on mouse move — only `snapshot` and the optional callback are updated. To render coordinates in JSX and react to movement, subscribe via `watch()`: call it once per render (e.g. `const state = mouse.watch()`), then the component will re-render on mousemove. If you do need to show position in the UI:

```tsx
const mouse = useMouse<HTMLDivElement>();
const state = mouse.watch();
return (
  <div ref={mouse.ref}>
    {state.clientX}, {state.clientY}
  </div>
);
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseMouseValue {
  clientX: number;
  clientY: number;
  elementPositionX: number;
  elementPositionY: number;
  elementX: number;
  elementY: number;
  x: number;
  y: number;
}
export interface UseMouseReturn {
  snapshot: UseMouseValue;
  watch: () => UseMouseValue;
}
export type UseMouseCallback = (value: UseMouseValue, event: Event) => void;
export interface UseMouse {
  (target: HookTarget, callback?: UseMouseCallback): UseMouseReturn;
  <Target extends Element>(
    callback?: UseMouseCallback,
    target?: never
  ): UseMouseReturn & { ref: StateRef<Target> };
  (target?: Window, callback?: UseMouseCallback): UseMouseReturn;
}
export declare const useMouse: UseMouse;
```
