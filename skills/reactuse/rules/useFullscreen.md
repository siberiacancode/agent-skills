---
name: useFullscreen
category: Browser
usage: low
---

# useFullscreen

Controls fullscreen state for an element.

## Usage

```ts
import { useFullscreen } from "@siberiacancode/reactuse";

const fullscreen = useFullscreen<HTMLDivElement>();
// or
const fullscreen = useFullscreen(targetRef, { initialValue: false });
```

## Example

```tsx
const fullscreen = useFullscreen<HTMLDivElement>();

return (
  <div ref={fullscreen.ref}>
    <button onClick={() => fullscreen.toggle()}>
      {fullscreen.value ? "Exit" : "Enter"} fullscreen
    </button>
  </div>
);
```

`initialValue`:

Start fullscreen.

```tsx
const fullscreen = useFullscreen<HTMLDivElement>({ initialValue: true });
```

`onEnter`:

Enter callback.

```tsx
const fullscreen = useFullscreen<HTMLDivElement>({
  onEnter: () => console.log("enter"),
});
```

`onExit`:

Exit callback.

```tsx
const fullscreen = useFullscreen<HTMLDivElement>({
  onExit: () => console.log("exit"),
});
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseFullScreenOptions {
  initialValue?: boolean;
  onEnter?: () => void;
  onExit?: () => void;
}
export interface UseFullScreenReturn {
  value: boolean;
  enter: () => void;
  exit: () => void;
  toggle: () => void;
}
export interface UseFullScreen {
  (target: HookTarget, options?: UseFullScreenOptions): UseFullScreenReturn;
  <Target extends Element>(
    options?: UseFullScreenOptions,
    target?: never
  ): UseFullScreenReturn & { ref: StateRef<Target> };
}
export declare const useFullscreen: UseFullScreen;
```
