---
name: useVisibility
category: Sensors
usage: medium
---

# useVisibility

Tracks whether an element is visible in the viewport.

## Usage

```ts
import { useVisibility } from "@siberiacancode/reactuse";

const visibility = useVisibility<HTMLDivElement>();
// or
const visibility = useVisibility<HTMLDivElement>(ref, { threshold: 0.5 });
```

## Example

```tsx
import { useVisibility } from "@siberiacancode/reactuse";

export const VisibilityBadge = () => {
  const visibility = useVisibility<HTMLDivElement>();

  return (
    <div ref={visibility.ref}>
      {visibility.inView ? "In view" : "Out of view"}
    </div>
  );
};
```

`enabled`:

```tsx
const visibility = useVisibility<HTMLDivElement>({ enabled: false });
```

`onChange`:

```tsx
const visibility = useVisibility<HTMLDivElement>({
  onChange: (entry) => console.log(entry),
});
```

`root`:

```tsx
const visibility = useVisibility<HTMLDivElement>({ root: containerRef });
```

`rootMargin`:

```tsx
const visibility = useVisibility<HTMLDivElement>({ rootMargin: "10px" });
```

`threshold`:

```tsx
const visibility = useVisibility<HTMLDivElement>({ threshold: 0.5 });
```

## Notes

- Hook uses the [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseVisibilityCallback = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;
export interface UseVisibilityOptions
  extends Omit<IntersectionObserverInit, "root"> {
  enabled?: boolean;
  onChange?: UseVisibilityCallback;
  root?: HookTarget;
}
export interface UseVisibilityReturn {
  entry?: IntersectionObserverEntry;
  inView: boolean;
  observer?: IntersectionObserver;
}
export interface UseVisibility {
  <Target extends Element>(
    options?: UseVisibilityOptions,
    target?: never
  ): UseVisibilityReturn & { ref: StateRef<Target> };
  (target: HookTarget, options?: UseVisibilityOptions): UseVisibilityReturn;
  <Target extends Element>(
    callback: UseVisibilityCallback,
    target?: never
  ): UseVisibilityReturn & { ref: StateRef<Target> };
  (target: HookTarget, callback: UseVisibilityCallback): UseVisibilityReturn;
}
export declare const useVisibility: UseVisibility;
```
