---
name: useRenderCount
category: Debug
usage: low
---

# useRenderCount

Returns how many times a component has rendered.

## Usage

```ts
import { useRenderCount } from "@siberiacancode/reactuse";

const count = useRenderCount();
```

## Example

```tsx
import { useRenderCount } from "@siberiacancode/reactuse";
import { useState } from "react";

export const RenderCounter = () => {
  const renders = useRenderCount();
  const [, setTick] = useState(0);
  return (
    <div>
      Renders: {renders}
      <button onClick={() => setTick((value) => value + 1)}>Re-render</button>
    </div>
  );
};
```

## Type Declarations

```ts
export declare const useRenderCount: () => number;
```
