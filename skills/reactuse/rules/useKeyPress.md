---
name: useKeyPress
category: Sensors
usage: medium
---

# useKeyPress

Tracks whether specific keys are pressed.

## Usage

```ts
import { useKeyPress } from "@siberiacancode/reactuse";

const pressed = useKeyPress<HTMLDivElement>("a");
// or
const keyPress = useKeyPress(ref, "a");
```

## Example

```tsx
import { useKeyPress } from "@siberiacancode/reactuse";

export const Spacebar = () => {
  const keyPress = useKeyPress<HTMLDivElement>("a");

  return (
    <div ref={keyPress.ref}>{keyPress.pressed ? "Pressed" : "Released"}</div>
  );
};
```

`key` as array (match any):

```tsx
const keyPress = useKeyPress<HTMLDivElement>(["ArrowLeft", "ArrowRight"]);
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseKeyPressKey = string | string[];
export type UseKeyPressCallback = (
  pressed: boolean,
  event: KeyboardEvent
) => void;
export interface UseKeyPress {
  (
    target: HookTarget | Window,
    key: UseKeyPressKey,
    callback?: UseKeyPressCallback
  ): boolean;
  <Target extends Element>(
    key: UseKeyPressKey,
    callback?: UseKeyPressCallback,
    target?: never
  ): { pressed: boolean; ref: StateRef<Target> };
}
export declare const useKeyPress: UseKeyPress;
```
