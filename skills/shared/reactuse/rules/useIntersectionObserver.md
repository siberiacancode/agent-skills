---
name: useIntersectionObserver
category: Sensors
usage: medium
---

# useIntersectionObserver

Tracks intersection state for an element.

## Usage

```ts
import { useIntersectionObserver } from "@siberiacancode/reactuse";

const observer = useIntersectionObserver<HTMLDivElement>();
// or
const observer = useIntersectionObserver(ref, { threshold: 0.5 });
```

## Example

```tsx
import { useIntersectionObserver } from "@siberiacancode/reactuse";

export const LazyItem = () => {
  const observer = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  const isVisible = observer.entries?.[0]?.isIntersecting ?? false;

  return <div ref={observer.ref}>{isVisible ? "Visible" : "Hidden"}</div>;
};
```

`enabled`:

Toggle observer.

```tsx
const observer = useIntersectionObserver<HTMLDivElement>({ enabled: false });
```

`onChange`:

Observer callback.

```tsx
const observer = useIntersectionObserver<HTMLDivElement>({
  onChange: (entries) => console.log(entries),
});
```

`root`:

Scroll container.

```tsx
const observer = useIntersectionObserver<HTMLDivElement>({
  root: containerRef,
});
```

`rootMargin`:

Root offset.

```tsx
const observer = useIntersectionObserver<HTMLDivElement>({
  rootMargin: "10px",
});
```

`threshold`:

Intersection ratio.

```tsx
const observer = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
```

## Notes

- Hook uses the [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseIntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;
export interface UseIntersectionObserverOptions
  extends Omit<IntersectionObserverInit, "root"> {
  enabled?: boolean;
  onChange?: UseIntersectionObserverCallback;
  root?: HookTarget;
}
export interface UseIntersectionObserverReturn {
  entries?: IntersectionObserverEntry[];
  observer?: IntersectionObserver;
}
export interface UseIntersectionObserver {
  <Target extends Element>(
    options?: UseIntersectionObserverOptions,
    target?: never
  ): UseIntersectionObserverReturn & { ref: StateRef<Target> };
  (
    target: HookTarget,
    options?: UseIntersectionObserverOptions
  ): UseIntersectionObserverReturn;
  <Target extends Element>(
    callback: UseIntersectionObserverCallback,
    target?: never
  ): UseIntersectionObserverReturn & { ref: StateRef<Target> };
  (
    target: HookTarget,
    callback: UseIntersectionObserverCallback
  ): UseIntersectionObserverReturn;
}
export declare const useIntersectionObserver: UseIntersectionObserver;
```
