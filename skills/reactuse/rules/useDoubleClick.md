---
name: useDoubleClick
category: Elements
usage: medium
---

# useDoubleClick

Detects double-clicks with optional single-click handler.

## Usage

```ts
import { useDoubleClick } from "@siberiacancode/reactuse";

const doubleClick = useDoubleClick<HTMLButtonElement>(() =>
  console.log("double")
);
// or
useDoubleClick(ref, () => console.log("double"));
```

## Example

```tsx
import { useDoubleClick } from "@siberiacancode/reactuse";

export const LikeButton = () => {
  const doubleClick = useDoubleClick<HTMLButtonElement>(
    () => console.log("double"),
    {
      onSingleClick: () => console.log("single"),
    }
  );

  return <button ref={doubleClick.ref}>Like</button>;
};
```

`threshold`:

Max time between clicks.

```tsx
const doubleClick = useDoubleClick<HTMLButtonElement>(() => {}, {
  threshold: 400,
});
```

`onSingleClick`:

Single-click handler.

```tsx
const doubleClick = useDoubleClick<HTMLButtonElement>(() => {}, {
  onSingleClick: () => console.log("single"),
});
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type DoubleClickEvents = MouseEvent | TouchEvent;
export interface UseDoubleClickOptions {
  threshold?: number;
  onSingleClick?: (event: DoubleClickEvents) => void;
}
export interface UseDoubleClick {
  (
    target: HookTarget,
    callback: (event: DoubleClickEvents) => void,
    options?: UseDoubleClickOptions
  ): void;
  <Target extends Element>(
    callback: (event: DoubleClickEvents) => void,
    options?: UseDoubleClickOptions,
    target?: never
  ): { ref: StateRef<Target> };
}
export declare const useDoubleClick: UseDoubleClick;
```
