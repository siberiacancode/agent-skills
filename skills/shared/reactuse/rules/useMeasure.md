---
name: useMeasure
category: Browser
usage: low
---

# useMeasure

Measures an element's size and position.

## Usage

```ts
import { useMeasure } from "@siberiacancode/reactuse";

const rect = useMeasure<HTMLDivElement>();
// or
const rect = useMeasure(ref);
```

## Example

```tsx
const measure = useMeasure<HTMLDivElement>();

return (
  <div ref={measure.ref}>
    Width: {Math.round(measure.width)}px
    <div>Height: {Math.round(measure.height)}px</div>
  </div>
);
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseMeasureReturn = Pick<
  DOMRectReadOnly,
  "bottom" | "height" | "left" | "right" | "top" | "width" | "x" | "y"
>;
export interface UseMeasure {
  (target: HookTarget): UseMeasureReturn;
  <Target extends Element>(target?: never): UseMeasureReturn & {
    ref: StateRef<Target>;
  };
}
export declare const useMeasure: UseMeasure;
```
