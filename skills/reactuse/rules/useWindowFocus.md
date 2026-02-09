---
name: useWindowFocus
category: Elements
usage: low
---

# useWindowFocus

Returns the current focus state of the window.

## Usage

```ts
import { useWindowFocus } from "@siberiacancode/reactuse";

const focused = useWindowFocus();
```

## Example

```tsx
import { useWindowFocus } from "@siberiacancode/reactuse";

export const FocusState = () => {
  const focused = useWindowFocus();

  return (
    <div>
      {focused ? "Focused" : "Blurred"}
      {!focused && <p>Paused while tab is inactive.</p>}
    </div>
  );
};
```

## Type Declarations

```ts
export declare const useWindowFocus: () => boolean;
```
