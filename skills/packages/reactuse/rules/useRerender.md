---
name: useRerender
category: Debug
usage: medium
---

# useRerender

Forces a component rerender on demand.

## Usage

```ts
import { useRerender } from "@siberiacancode/reactuse";

const rerender = useRerender();
```

## Example

```tsx
import { useRerender } from "@siberiacancode/reactuse";
import { useState } from "react";

export const ManualRefresh = () => {
  const rerender = useRerender();
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount((value) => value + 1);
        rerender();
      }}
    >
      Refresh {count}
    </button>
  );
};
```

## Type Declarations

```ts
export declare const useRerender: () => () => void;
```
