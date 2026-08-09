---
name: useInfiniteScroll
category: Sensors
usage: medium
---

# useInfiniteScroll

Turns proximity to a scroll edge into a guarded loading callback for paginated lists and timelines.

## Usage

```ts
import { useInfiniteScroll } from "@siberiacancode/reactuse";

const infiniteScroll = useInfiniteScroll<HTMLDivElement>(async () => {
  await loadMore();
});
// or
const infiniteScroll = useInfiniteScroll(ref, () => loadMore());
```

## Example

```tsx
import { useInfiniteScroll } from "@siberiacancode/reactuse";

const infiniteScroll = useInfiniteScroll<HTMLDivElement>(
  () => fetchNextPage(),
  { hasMore, immediately: true }
);

return (
  <div ref={infiniteScroll.ref}>
    {items.map((item) => (
      <div key={item.id}>{item.title}</div>
    ))}
    {infiniteScroll.loading && <div>Loading...</div>}
  </div>
);
```

`direction`:

```tsx
const infiniteScroll = useInfiniteScroll<HTMLDivElement>(loadPrevious, {
  direction: "top",
});
```

`distance`:

```tsx
const infiniteScroll = useInfiniteScroll<HTMLDivElement>(loadMore, {
  distance: 50,
});
```

`hasMore`:

```tsx
const infiniteScroll = useInfiniteScroll<HTMLDivElement>(loadMore, {
  hasMore: hasNextPage,
});
```

`immediately`:

```tsx
const infiniteScroll = useInfiniteScroll<HTMLDivElement>(loadMore, {
  immediately: true,
});
```

## Type Declarations

```ts
import type { HookTarget, StateRef } from "@siberiacancode/reactuse";

export interface UseInfiniteScrollOptions {
  direction?: "bottom" | "left" | "right" | "top";
  distance?: number;
  hasMore?: boolean;
  immediately?: boolean;
}
export interface UseInfiniteScrollReturn {
  loading: boolean;
  ref: StateRef<Element>;
}
export interface UseInfiniteScroll {
  (
    target: HookTarget,
    callback: (event?: Event) => Promise<void> | void,
    options?: UseInfiniteScrollOptions
  ): UseInfiniteScrollReturn;
  <Target extends Element>(
    callback: (event?: Event) => Promise<void> | void,
    options?: UseInfiniteScrollOptions
  ): UseInfiniteScrollReturn & { ref: StateRef<Target> };
}
export declare const useInfiniteScroll: UseInfiniteScroll;
```
