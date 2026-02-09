---
name: useHover
category: Elements
usage: medium
---

# useHover

Tracks hover state for an element.

## Usage

```ts
import { useHover } from "@siberiacancode/reactuse";

const hover = useHover<HTMLDivElement>();
// or
const hover = useHover(targetRef, { enabled: true });
```

## Example

```tsx
import { useHover } from "@siberiacancode/reactuse";

const hover = useHover<HTMLDivElement>();
return <div ref={hover.ref}>{hover.value ? "Hovering" : "Idle"}</div>;
```

`enabled`:

Toggle tracking.

```tsx
const hover = useHover<HTMLDivElement>({ enabled: false });
```

`onEntry`:

Enter callback.

```tsx
const hover = useHover<HTMLDivElement>({ onEntry: () => console.log("enter") });
```

`onLeave`:

Leave callback.

```tsx
const hover = useHover<HTMLDivElement>({ onLeave: () => console.log("leave") });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseHoverOptions {
  enabled?: boolean;
  onEntry?: (event: Event) => void;
  onLeave?: (event: Event) => void;
}
export interface UseHoverReturn {
  value: boolean;
}
export interface UseHover {
  (target: HookTarget, callback?: (event: Event) => void): boolean;
  (target: HookTarget, options?: UseHoverOptions): boolean;
  <Target extends Element>(callback?: (event: Event) => void, target?: never): {
    ref: StateRef<Target>;
  } & UseHoverReturn;
  <Target extends Element>(options?: UseHoverOptions, target?: never): {
    ref: StateRef<Target>;
  } & UseHoverReturn;
}
export declare const useHover: UseHover;
```
