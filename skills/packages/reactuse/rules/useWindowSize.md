---
name: useWindowSize
category: Elements
usage: low
---

# useWindowSize

Returns current window width and height.

## Usage

```ts
import { useWindowSize } from "@siberiacancode/reactuse";

const size = useWindowSize();
```

## Example

```tsx
import { useWindowSize } from "@siberiacancode/reactuse";

export const Banner = () => {
  const size = useWindowSize();

  return (
    <div>
      Width: {size.width}px, Height: {size.height}px
    </div>
  );
};
```

`includeScrollbar`:

```tsx
const size = useWindowSize({ includeScrollbar: false });
console.log(size.width, size.height);
```

## Type Declarations

```ts
interface UseWindowSizeParams {
  includeScrollbar?: boolean;
}
export interface UseWindowSizeReturn {
  height: number;
  width: number;
}
export declare const useWindowSize: (
  params?: UseWindowSizeParams
) => UseWindowSizeReturn;
```
