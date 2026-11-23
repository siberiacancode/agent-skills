---
name: useSize
category: Elements
usage: low
---

# useSize

Observes element width and height.

## Usage

```ts
import { useSize } from "@siberiacancode/reactuse";

const size = useSize<HTMLDivElement>();
// or
useSize(ref);
```

## Example

```tsx
import { useSize } from "@siberiacancode/reactuse";

const size = useSize<HTMLDivElement>();
return (
  <div ref={size.ref}>
    {Math.round(size.value.width)}x{Math.round(size.value.height)}
  </div>
);
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseSizeValue {
  height: number;
  width: number;
}
export interface UseSizeReturn {
  observer?: ResizeObserver;
  value: UseSizeValue;
}
export interface UseSize {
  (target: HookTarget): UseSizeReturn;
  <Target extends Element>(target?: never): {
    ref: StateRef<Target>;
  } & UseSizeReturn;
}
export declare const useSize: UseSize;
```
