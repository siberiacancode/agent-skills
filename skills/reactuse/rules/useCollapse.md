---
name: useCollapse
category: Elements
usage: medium
---

# useCollapse

Animates an element between collapsed and expanded states and exposes open, close, and toggle controls.

## Usage

```ts
import { useCollapse } from "@siberiacancode/reactuse";

const collapse = useCollapse<HTMLDivElement>(false, { duration: 200 });
// or
const collapse = useCollapse(targetRef, false, { easing: "ease-out" });
```

## Example

```tsx
const collapse = useCollapse<HTMLDivElement>();

return (
  <section>
    <button aria-expanded={collapse.expanded} onClick={() => collapse.toggle()}>
      Details
    </button>
    <div ref={collapse.ref} inert={!collapse.expanded}>
      Collapsible content
    </div>
  </section>
);
```

## Type Declarations

```ts
import type { HookTarget, StateRef } from "@siberiacancode/reactuse";

export interface UseCollapseOptions {
  duration?: number;
  easing?: string;
  onEnd?: () => void;
  onStart?: () => void;
}
export interface UseCollapseReturn {
  expanded: boolean;
  close: () => void;
  open: () => void;
  toggle: (value?: boolean) => void;
}
export interface UseCollapse {
  (target: HookTarget, initialValue?: boolean, options?: UseCollapseOptions): UseCollapseReturn;
  <Target extends HTMLElement = HTMLDivElement>(
    initialValue?: boolean,
    options?: UseCollapseOptions,
    target?: never
  ): UseCollapseReturn & { ref: StateRef<Target> };
}
export declare const useCollapse: UseCollapse;
```
