---
name: useAutoScroll
category: Elements
usage: low
---

# useAutoScroll

Automatically scrolls a container to the bottom.

## Usage

```ts
import { useAutoScroll } from "@siberiacancode/reactuse";

const autoScroll = useAutoScroll<HTMLDivElement>();
// or
useAutoScroll(ref);
```

## Example

```tsx
const autoScroll = useAutoScroll<HTMLDivElement>();

return (
  <div ref={autoScroll.ref}>
    <div>First message</div>
    <div>Second message</div>
  </div>
);
```

`enabled`:

Disable auto scroll.

```tsx
const autoScroll = useAutoScroll<HTMLDivElement>({ enabled: false });
```

`force`:

Always jump to bottom.

```tsx
const autoScroll = useAutoScroll<HTMLDivElement>({ force: true });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseAutoScrollOptions {
  enabled?: boolean;
  force?: boolean;
}
export interface UseAutoScroll {
  (target: HookTarget, options?: UseAutoScrollOptions): void;
  <Target extends HTMLElement>(options?: UseAutoScrollOptions): {
    ref: StateRef<Target>;
  };
}
export declare const useAutoScroll: UseAutoScroll;
```
