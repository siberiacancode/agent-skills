---
name: useClickOutside
category: Elements
usage: high
---

# useClickOutside

Calls a callback when clicking outside the target element.

## Usage

```ts
import { useClickOutside } from "@siberiacancode/reactuse";

const clickOutside = useClickOutside<HTMLDivElement>(() =>
  console.log("outside")
);
// or
useClickOutside(ref, () => console.log("outside"));
```

## Example

```tsx
const [open, setOpen] = useState(true);
const clickOutside = useClickOutside<HTMLDivElement>(() => setOpen(false));

if (!open) return <button onClick={() => setOpen(true)}>Open</button>;

return <div ref={clickOutside.ref}>Modal</div>;
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseClickOutside {
  (target: HookTarget, callback: (event: Event) => void): void;
  <Target extends Element>(callback: (event: Event) => void, target?: never): {
    ref: StateRef<Target>;
  };
}
export declare const useClickOutside: UseClickOutside;
```
