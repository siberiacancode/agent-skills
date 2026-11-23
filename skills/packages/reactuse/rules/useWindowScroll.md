---
name: useWindowScroll
category: Sensors
usage: low
---

# useWindowScroll

Tracks window scroll position and exposes scrollTo.

## Usage

```ts
import { useWindowScroll } from "@siberiacancode/reactuse";

const scroll = useWindowScroll();
```

## Example

```tsx
import { useWindowScroll } from "@siberiacancode/reactuse";

export const ScrollButton = () => {
  const windowScroll = useWindowScroll();
  return (
    <button onClick={() => windowScroll.scrollTo({ y: 0 })}>
      Top (y: {windowScroll.value.y})
    </button>
  );
};
```

## Type Declarations

```ts
export interface ScrollPosition {
  x: number;
  y: number;
}
export declare const scrollTo: (
  params: Partial<ScrollPosition & ScrollOptions>
) => void;
export declare const useWindowScroll: () => {
  value: ScrollPosition;
  scrollTo: typeof scrollTo;
};
```
