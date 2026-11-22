---
name: useContextMenu
category: Elements
usage: low
---

# useContextMenu

Turns secondary-click and touch long-press gestures into menu state that can be rendered near the pointer position.

## Usage

```ts
import { useContextMenu } from "@siberiacancode/reactuse";

const menu = useContextMenu<HTMLDivElement>((position) => {
  console.log(position.x, position.y);
});
// or
const menu = useContextMenu(ref, {
  onOpen: (position) => console.log(position),
});
```

## Example

```tsx
import { useContextMenu } from "@siberiacancode/reactuse";

export const CustomMenu = () => {
  const menu = useContextMenu<HTMLDivElement>({ delay: 600 });

  return (
    <div ref={menu.ref}>
      Right click me
      {menu.opened && (
        <div style={{ left: menu.position?.x, top: menu.position?.y }}>
          <button onClick={menu.close}>Close</button>
        </div>
      )}
    </div>
  );
};
```

`callback`:

```tsx
const menu = useContextMenu<HTMLDivElement>((position) => {
  console.log(position.x, position.y);
});
```

`target`:

```tsx
const menu = useContextMenu(target("#item-menu"), {
  onOpen: (position) => console.log(position),
});
```

`delay`:

```tsx
const menu = useContextMenu<HTMLDivElement>({ delay: 700 });
```

`enabled`:

```tsx
const menu = useContextMenu<HTMLDivElement>({ enabled: canOpenMenu });
```

`onOpen`:

```tsx
const menu = useContextMenu<HTMLDivElement>({
  onOpen: (position) => console.log(position),
});
```

`onClose`:

```tsx
const menu = useContextMenu<HTMLDivElement>({
  onClose: () => console.log("closed"),
});
```

`onStart`:

```tsx
const menu = useContextMenu<HTMLDivElement>({
  onStart: (event) => console.log(event.type),
});
```

`onEnd`:

```tsx
const menu = useContextMenu<HTMLDivElement>({
  onEnd: (event) => console.log(event.type),
});
```

## Type Declarations

```ts
import type { HookTarget, StateRef } from "@siberiacancode/reactuse";

export type ContextMenuEvent = MouseEvent | TouchEvent;
export interface ContextMenuPosition {
  x: number;
  y: number;
}
export type UseContextMenuCallback = (
  position: ContextMenuPosition,
  event: ContextMenuEvent,
) => void;
export interface UseContextMenuOptions {
  delay?: number;
  enabled?: boolean;
  onOpen?: UseContextMenuCallback;
  onClose?: () => void;
  onEnd?: (event: ContextMenuEvent) => void;
  onStart?: (event: ContextMenuEvent) => void;
}
export interface UseContextMenuReturn {
  opened: boolean;
  position?: ContextMenuPosition;
  close: () => void;
  open: (position: ContextMenuPosition, event?: ContextMenuEvent) => void;
}
export interface UseContextMenu {
  (target: HookTarget, callback?: UseContextMenuCallback): UseContextMenuReturn;
  (target: HookTarget, options?: UseContextMenuOptions): UseContextMenuReturn;
  <Target extends Element>(
    callback?: UseContextMenuCallback,
  ): UseContextMenuReturn & { ref: StateRef<Target> };
  <Target extends Element>(
    options?: UseContextMenuOptions,
  ): UseContextMenuReturn & { ref: StateRef<Target> };
}
export declare const useContextMenu: UseContextMenu;
```
