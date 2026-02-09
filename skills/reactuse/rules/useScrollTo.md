---
name: useScrollTo
category: Sensors
usage: low
---

# useScrollTo

Scrolls to a specific position with a trigger.

## Usage

```ts
import { useScrollTo } from "@siberiacancode/reactuse";

const scrollTo = useScrollTo<HTMLDivElement>({ x: 0, y: 0 });
// or
useScrollTo(ref, { x: 0, y: 0 });
```

## Example

```tsx
import { useScrollTo } from "@siberiacancode/reactuse";

export const BackToTop = () => {
  const scrollTo = useScrollTo<HTMLDivElement>({ x: 0, y: 0 });

  return <button onClick={() => scrollTo.trigger()}>Top</button>;
};
```

`immediately`:

Run immediately.

```tsx
const scrollTo = useScrollTo<HTMLDivElement>({
  x: 0,
  y: 0,
  immediately: false,
});
```

`behavior`:

Scroll behavior.

```tsx
const scrollTo = useScrollTo<HTMLDivElement>({
  x: 0,
  y: 0,
  behavior: "smooth",
});
```

`x`:

Target x.

```tsx
const scrollTo = useScrollTo<HTMLDivElement>({ x: 200, y: 0 });
```

`y`:

Target y.

```tsx
const scrollTo = useScrollTo<HTMLDivElement>({ x: 0, y: 300 });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseScrollToOptions {
  behavior?: ScrollBehavior;
  immediately?: boolean;
  x: number;
  y: number;
}
export interface UseScrollToReturn {
  trigger: (params?: {
    x: number;
    y: number;
    behavior?: ScrollBehavior;
  }) => void;
}
export interface UseScrollTo {
  <Target extends Element>(
    options?: UseScrollToOptions,
    target?: never
  ): UseScrollToReturn & { ref: StateRef<Target> };
  (target?: HookTarget, options?: UseScrollToOptions): UseScrollToReturn;
}
export declare const useScrollTo: UseScrollTo;
```
