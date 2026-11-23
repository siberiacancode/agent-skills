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

const clickOutsideRef = useClickOutside<HTMLDivElement>(() =>
  console.log("outside")
);
// or
useClickOutside(ref, () => console.log("outside"), { enabled: open });
```

## Example

```tsx
const [open, setOpen] = useState(true);
const clickOutsideRef = useClickOutside<HTMLDivElement>(
  () => setOpen(false),
  { enabled: open }
);

if (!open) return <button onClick={() => setOpen(true)}>Open</button>;

return <div ref={clickOutsideRef}>Modal</div>;
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseClickOutsideOptions {
  enabled?: boolean;
}
export interface UseClickOutside {
  (
    target: HookTarget,
    callback: (event: Event) => void,
    options?: UseClickOutsideOptions
  ): void;
  <Target extends Element>(
    callback: (event: Event) => void,
    options?: UseClickOutsideOptions,
    target?: never
  ): StateRef<Target>;
}
export declare const useClickOutside: UseClickOutside;
```
