---
name: useTextDirection
category: Elements
usage: medium
---

# useTextDirection

Gets and sets the text direction of an element.

## Usage

```ts
import { useTextDirection } from "@siberiacancode/reactuse";

const direction = useTextDirection<HTMLDivElement>();
// or
const direction = useTextDirection(ref, "rtl");
```

## Example

```tsx
import { useTextDirection } from "@siberiacancode/reactuse";

export const DirectionToggle = () => {
  const direction = useTextDirection<HTMLDivElement>("ltr");

  return (
    <div ref={direction.ref}>
      <button onClick={() => direction.set("rtl")}>
        Current: {direction.value}
      </button>
    </div>
  );
};
```

`initialValue`:

Initial direction.

```tsx
const direction = useTextDirection<HTMLDivElement>("rtl");
direction.set("ltr");
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseTextDirectionValue = "auto" | "ltr" | "rtl";
export interface UseTextDirectionReturn {
  value: UseTextDirectionValue;
  remove: () => void;
  set: (value: UseTextDirectionValue | null) => void;
}
export interface UseTextDirection {
  (
    target: HookTarget,
    initialValue?: UseTextDirectionValue
  ): UseTextDirectionReturn;
  <Target extends Element>(
    initialValue?: UseTextDirectionValue,
    target?: never
  ): UseTextDirectionReturn & { ref: StateRef<Target> };
}
export declare const useTextDirection: UseTextDirection;
```
