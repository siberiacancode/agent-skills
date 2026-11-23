---
name: useResizeObserver
category: Sensors
usage: low
---

# useResizeObserver

Observes size changes for an element.

## Usage

```ts
import { useResizeObserver } from "@siberiacancode/reactuse";

const observer = useResizeObserver<HTMLDivElement>();
// or
const observer = useResizeObserver(ref, { box: "border-box" });
```

## Example

```tsx
import { useResizeObserver } from "@siberiacancode/reactuse";

const observer = useResizeObserver<HTMLDivElement>();
const entry = observer.entry;

return (
  <div ref={observer.ref}>
    {observer.entry?.contentRect.width}x{observer.entry?.contentRect.height}
  </div>
);
```

`enabled`:

Toggle observer.

```tsx
const observer = useResizeObserver<HTMLDivElement>({ enabled: false });
```

`box`:

Box sizing.

```tsx
const observer = useResizeObserver<HTMLDivElement>({ box: "border-box" });
```

`onChange`:

Resize callback.

```tsx
const observer = useResizeObserver<HTMLDivElement>({
  onChange: (entry) => console.log(entry),
});
```

## Notes

- Hook uses the [ResizeObserver API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseResizeObserverCallback = (
  entry: ResizeObserverEntry,
  observer: ResizeObserver
) => void;
export interface UseResizeObserverOptions extends ResizeObserverOptions {
  enabled?: boolean;
  onChange?: UseResizeObserverCallback;
}
export interface UseResizeObserverReturn {
  entry: ResizeObserverEntry;
  observer?: ResizeObserver;
}
export interface UseResizeObserver {
  <Target extends Element>(
    options?: UseResizeObserverOptions,
    target?: never
  ): UseResizeObserverReturn & { ref: StateRef<Target> };
  (
    target: HookTarget,
    options?: UseResizeObserverOptions
  ): UseResizeObserverReturn;
  <Target extends Element>(
    callback: UseResizeObserverCallback,
    target?: never
  ): UseResizeObserverReturn & { ref: StateRef<Target> };
  (
    target: HookTarget,
    callback: UseResizeObserverCallback
  ): UseResizeObserverReturn;
}
export declare const useResizeObserver: UseResizeObserver;
```
