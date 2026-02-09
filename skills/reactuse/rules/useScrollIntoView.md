---
name: useScrollIntoView
category: Sensors
usage: low
---

# useScrollIntoView

Scrolls an element into view and exposes a trigger.

## Usage

```ts
import { useScrollIntoView } from "@siberiacancode/reactuse";

const scrollIntoView = useScrollIntoView<HTMLDivElement>();
// or
useScrollIntoView(ref, { behavior: "smooth" });
```

## Example

```tsx
import { useScrollIntoView } from "@siberiacancode/reactuse";

export const JumpToDetails = () => {
  const scrollIntoView = useScrollIntoView<HTMLDivElement>({
    behavior: "smooth",
  });

  return (
    <div>
      <button onClick={() => scroll.trigger()}>Go to details</button>
      <div ref={scrollIntoView.ref}>Details</div>
    </div>
  );
};
```

`immediately`:

Run immediately.

```tsx
const scrollIntoView = useScrollIntoView<HTMLDivElement>({
  immediately: false,
});
```

`behavior`:

Scroll behavior.

```tsx
const scrollIntoView = useScrollIntoView<HTMLDivElement>({
  behavior: "smooth",
});
```

`block`:

Block alignment.

```tsx
const scrollIntoView = useScrollIntoView<HTMLDivElement>({ block: "center" });
```

`inline`:

Inline alignment.

```tsx
const scrollIntoView = useScrollIntoView<HTMLDivElement>({ inline: "center" });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseScrollIntoViewOptions extends ScrollIntoViewOptions {
  immediately?: boolean;
}
export interface UseScrollIntoViewReturn {
  trigger: (params?: {
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
  }) => void;
}
export interface UseScrollIntoView {
  <Target extends Element>(
    options?: UseScrollIntoViewOptions,
    target?: never
  ): UseScrollIntoViewReturn & { ref: StateRef<Target> };
  (
    target?: HookTarget,
    options?: UseScrollIntoViewOptions
  ): UseScrollIntoViewReturn;
}
export declare const useScrollIntoView: UseScrollIntoView;
```
