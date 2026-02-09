---
name: useLongPress
category: Elements
usage: medium
---

# useLongPress

Detects long press interactions.

## Usage

```ts
import { useLongPress } from "@siberiacancode/reactuse";

const pressed = useLongPress<HTMLButtonElement>(() =>
  console.log("long press")
);
// or
const pressed = useLongPress(ref, () => console.log("long press"));
```

## Example

```tsx
import { useLongPress } from "@siberiacancode/reactuse";

export const HoldButton = () => {
  const press = useLongPress<HTMLButtonElement>(() =>
    console.log("long press")
  );

  return <button ref={press.ref}>Hold</button>;
};
```

`threshold`:

Press duration.

```tsx
const ref = useLongPress<HTMLButtonElement>(() => {}, { threshold: 600 });
```

`onStart`:

Press start.

```tsx
const ref = useLongPress<HTMLButtonElement>(() => {}, {
  onStart: () => console.log("start"),
});
```

`onFinish`:

Press finish.

```tsx
const ref = useLongPress<HTMLButtonElement>(() => {}, {
  onFinish: () => console.log("finish"),
});
```

`onCancel`:

Press cancel.

```tsx
const ref = useLongPress<HTMLButtonElement>(() => {}, {
  onCancel: () => console.log("cancel"),
});
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type LongPressEvents = MouseEvent | TouchEvent;
export interface UseLongPressOptions {
  threshold?: number;
  onCancel?: (event: LongPressEvents) => void;
  onFinish?: (event: LongPressEvents) => void;
  onStart?: (event: LongPressEvents) => void;
}
export interface UseLongPress {
  (
    target: HookTarget,
    callback: (event: LongPressEvents) => void,
    options?: UseLongPressOptions
  ): boolean;
  <Target extends Element>(
    callback: (event: LongPressEvents) => void,
    options?: UseLongPressOptions,
    target?: never
  ): { ref: StateRef<Target>; pressed: boolean };
}
export declare const useLongPress: UseLongPress;
```
