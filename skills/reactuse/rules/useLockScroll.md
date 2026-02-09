---
name: useLockScroll
category: Elements
usage: medium
---

# useLockScroll

Locks scrolling on an element or the document body.

## Usage

```ts
import { useLockScroll } from "@siberiacancode/reactuse";

const lock = useLockScroll<HTMLDivElement>();
// or
const lock = useLockScroll(ref, { enabled: true });
```

## Example

```tsx
import { useLockScroll } from "@siberiacancode/reactuse";

export const Modal = () => {
  const lock = useLockScroll<HTMLDivElement>();

  return (
    <div ref={lock.ref}>
      <button onClick={() => lock.toggle()}>
        {lock.value ? "Unlock" : "Lock"} scroll
      </button>
    </div>
  );
};
```

`enabled`:

Start locked.

```tsx
const lock = useLockScroll<HTMLDivElement>({ enabled: false });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseLockScrollOptions {
  enabled?: boolean;
}
export interface UseLockScrollReturn<Target extends Element> {
  ref: StateRef<Target>;
  value: boolean;
  lock: () => void;
  toggle: (value?: boolean) => void;
  unlock: () => void;
}
export interface UseLockScroll {
  (
    target: HookTarget,
    options?: UseLockScrollOptions
  ): UseLockScrollReturn<Element>;
  <Target extends Element>(
    options?: UseLockScrollOptions,
    target?: never
  ): UseLockScrollReturn<Target> & { ref: StateRef<Target> };
}
export declare const useLockScroll: UseLockScroll;
```
