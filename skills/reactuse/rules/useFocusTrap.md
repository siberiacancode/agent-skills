---
name: useFocusTrap
category: Elements
usage: medium
---

# useFocusTrap

Traps focus within a given element.

## Usage

```ts
import { useFocusTrap } from "@siberiacancode/reactuse";

const trap = useFocusTrap<HTMLDivElement>(true);
// or
const trap = useFocusTrap(ref, true);
```

## Example

```tsx
import { useFocusTrap } from "@siberiacancode/reactuse";

export const Modal = () => {
  const trap = useFocusTrap<HTMLDivElement>(true);

  return (
    <div ref={trap.ref}>
      <input placeholder="Search" />
      <button onClick={() => trap.disable()}>Close</button>
    </div>
  );
};
```

`active`:

Initially active.

```tsx
const trap = useFocusTrap(true);
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseFocusTrapReturn {
  active: boolean;
  disable: () => void;
  enable: () => void;
  toggle: () => void;
}
export interface UseFocusTrap {
  (target: HookTarget, active?: boolean): UseFocusTrapReturn;
  <Target extends HTMLElement>(
    active?: boolean,
    target?: never
  ): UseFocusTrapReturn & { ref: StateRef<Target> };
}
export declare const useFocusTrap: UseFocusTrap;
```
