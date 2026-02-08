---
name: useActiveElement
category: Elements
usage: low
---

# useActiveElement

Tracks the currently focused element.

## Usage

```ts
import { useActiveElement } from "@siberiacancode/reactuse";

const { ref, value } = useActiveElement<HTMLDivElement>();
// or
const activeElement = useActiveElement(ref);
```

## Example in a Component

```tsx
import { useActiveElement } from "@siberiacancode/reactuse";

export const ActiveElementInfo = () => {
  const activeElement = useActiveElement<HTMLDivElement>();

  return (
    <>
      <div ref={activeElement.ref}>
        <input placeholder="Name" />
        <input placeholder="Email" />
      </div>
      <p>Active element: {activeElement.value?.tagName ?? "none"}</p>
    </>
  );
};
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseActiveElementReturn<
  ActiveElement extends HTMLElement = HTMLElement
> = ActiveElement | null;
export interface UseActiveElement {
  (): UseActiveElementReturn;
  <Target extends Element, ActiveElement extends HTMLElement = HTMLElement>(
    target?: never
  ): {
    ref: StateRef<Target>;
    value: UseActiveElementReturn<ActiveElement>;
  };
  <ActiveElement extends HTMLElement = HTMLElement>(
    target: HookTarget
  ): UseActiveElementReturn<ActiveElement>;
}
export declare const useActiveElement: UseActiveElement;
```
