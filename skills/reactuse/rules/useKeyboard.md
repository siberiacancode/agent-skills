---
name: useKeyboard
category: Sensors
usage: medium
---

# useKeyboard

Registers keydown/keyup listeners on a target.

## Usage

```ts
import { useKeyboard } from "@siberiacancode/reactuse";

const keyboard = useKeyboard<HTMLInputElement>((event) =>
  console.log(event.key)
);
// or
const keyboard = useKeyboard(ref, (event) => console.log(event.key));
```

## Example

```tsx
import { useKeyboard } from "@siberiacancode/reactuse";

export const SearchInput = () => {
  const keyboard = useKeyboard<HTMLInputElement>({
    onKeyDown: (event) => console.log(event.key),
  });

  return <input ref={keyboard.ref} placeholder="Type..." />;
};
```

`onKeyDown`:

Keydown handler.

```tsx
useKeyboard<HTMLInputElement>({ onKeyDown: (event) => console.log(event.key) });
```

`onKeyUp`:

Keyup handler.

```tsx
useKeyboard<HTMLInputElement>({ onKeyUp: (event) => console.log(event.key) });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type KeyboardEventHandler = (event: KeyboardEvent) => void;
export interface UseKeyboardEventOptions {
  onKeyDown?: KeyboardEventHandler;
  onKeyUp?: KeyboardEventHandler;
}
export interface UseKeyboard {
  (target: HookTarget, callback: KeyboardEventHandler): void;
  (target: HookTarget, options: UseKeyboardEventOptions): void;
  <Target extends HTMLElement>(
    callback: KeyboardEventHandler,
    target?: never
  ): { ref: StateRef<Target> };
  <Target extends HTMLElement>(
    options: UseKeyboardEventOptions,
    target?: never
  ): { ref: StateRef<Target> };
}
export declare const useKeyboard: UseKeyboard;
```
