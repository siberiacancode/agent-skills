---
name: useSticky
category: Elements
usage: low
---

# useSticky

Detects whether a sticky element is stuck.

## Usage

```ts
import { useSticky } from "@siberiacancode/reactuse";

const sticky = useSticky<HTMLDivElement>();
// or
const sticky = useSticky(ref, { axis: "vertical" });
```

## Example

```tsx
const sticky = useSticky<HTMLDivElement>();
return <div ref={sticky.ref}>{sticky.stuck ? "Stuck" : "Scrolling"}</div>;
```

`axis`:

Track axis.

```tsx
const sticky = useSticky<HTMLDivElement>({ axis: "horizontal" });
```

`root`:

Scroll container.

```tsx
const sticky = useSticky<HTMLDivElement>({ root: containerRef });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseStickyReturn {
  stuck: boolean;
}
export type UseStickyAxis = "horizontal" | "vertical";
export interface UseStickyOptions {
  axis?: UseStickyAxis;
  root?: HookTarget;
}
export interface UseSticky {
  (target: HookTarget, options?: UseStickyOptions): boolean;
  <Target extends Element>(options?: UseStickyOptions, target?: never): {
    ref: StateRef<Target>;
  } & UseStickyReturn;
}
export declare const useSticky: UseSticky;
```
