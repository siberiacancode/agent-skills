---
name: useKeysPressed
category: Sensors
usage: low
---

# useKeysPressed

Tracks all currently pressed keys.

## Usage

```ts
import { useKeysPressed } from "@siberiacancode/reactuse";

const keysPressed = useKeysPressed();
// or
const keysPressed = useKeysPressed(ref, { enabled: true });
```

## Example

```tsx
import { useKeysPressed } from "@siberiacancode/reactuse";

export const KeysPanel = () => {
  const keysPressed = useKeysPressed<HTMLDivElement>();

  return (
    <div ref={keysPressed.ref}>
      {keysPressed.value.map((item) => item.key).join(", ") || "None"}
    </div>
  );
};
```

`enabled`:

```tsx
const keysPressed = useKeysPressed<HTMLDivElement>({ enabled: false });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseKeysPressedOptions {
  enabled?: boolean;
}
export interface UseKeysPressedReturn {
  value: Array<{ key: string; code: string }>;
}
export interface UseKeysPressed {
  (
    target: HookTarget | Window,
    options?: UseKeysPressedOptions
  ): UseKeysPressedReturn;
  <Target extends Element>(
    options?: UseKeysPressedOptions
  ): UseKeysPressedReturn & { ref: StateRef<Target> };
}
export declare const useKeysPressed: UseKeysPressed;
```
