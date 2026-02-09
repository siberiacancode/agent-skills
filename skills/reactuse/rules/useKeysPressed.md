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

const keys = useKeysPressed<HTMLDivElement>();
// or
const keys = useKeysPressed(ref, { enabled: true });
```

## Example

```tsx
import { useKeysPressed } from "@siberiacancode/reactuse";

export const KeysPanel = () => {
  const keys = useKeysPressed<HTMLDivElement>();

  return (
    <div ref={keys.ref}>
      {keys.map((item) => item.key).join(", ") || "None"}
    </div>
  );
};
```

`enabled`:

Toggle tracking.

```tsx
const keys = useKeysPressed<HTMLDivElement>({ enabled: false });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseKeysPressedOptions {
  enabled?: boolean;
}
export interface UseKeysPressed {
  (target: HookTarget | Window, options?: UseKeysPressedOptions): Array<{
    key: string;
    code: string;
  }>;
  <Target extends Element>(options?: UseKeysPressedOptions): {
    value: Array<{ key: string; code: string }>;
    ref: StateRef<Target>;
  };
}
export declare const useKeysPressed: UseKeysPressed;
```
