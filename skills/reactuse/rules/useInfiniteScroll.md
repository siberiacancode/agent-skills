---
name: useInfiniteScroll
category: Sensors
usage: medium
---

# useInfiniteScroll

Triggers a callback when scroll reaches an edge.

## Usage

```ts
import { useInfiniteScroll } from "@siberiacancode/reactuse";

const infiniteScroll = useInfiniteScroll<HTMLDivElement>(() =>
  console.log("load")
);
// or
const infiniteScroll = useInfiniteScroll(ref, () => console.log("load"));
```

## Example

```tsx
import { useRef } from "react";
import { useInfiniteScroll } from "@siberiacancode/reactuse";

const infiniteScroll = useInfiniteScroll<HTMLDivElement>(() =>
  console.log("load")
);

return (
  <div ref={infiniteScroll.ref}>
    {items.map((item) => (
      <div key={item}>Item {item}</div>
    ))}
    {infiniteScroll.loading && <div>Loading...</div>}
  </div>
);
```

`distance`:

Trigger threshold.

```tsx
const infiniteScroll = useInfiniteScroll<HTMLDivElement>(() => {}, {
  distance: 50,
});
```

`direction`:

Scroll edge.

```tsx
const infiniteScroll = useInfiniteScroll<HTMLDivElement>(() => {}, {
  direction: "top",
});
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseInfiniteScrollOptions {
  direction?: "bottom" | "left" | "right" | "top";
  distance?: number;
}
export interface UseInfiniteScroll {
  (
    target: HookTarget,
    callback: (event: Event) => void,
    options?: UseInfiniteScrollOptions
  ): boolean;
  <Target extends Element>(
    callback: (event: Event) => void,
    options?: UseInfiniteScrollOptions,
    target?: never
  ): { ref: StateRef<Target>; loading: boolean };
}
export declare const useInfiniteScroll: UseInfiniteScroll;
```
