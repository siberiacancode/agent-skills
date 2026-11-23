---
name: useLogger
category: Debug
usage: low
---

# useLogger

Logs mount, update, and unmount for a component.

## Usage

```ts
import { useLogger } from "@siberiacancode/reactuse";

useLogger("Component", [value]);
```

## Example

```tsx
import { useLogger } from "@siberiacancode/reactuse";
import { useState } from "react";

export const DebugPanel = () => {
  const [count, setCount] = useState(0);
  useLogger("DebugPanel");
  return (
    <button onClick={() => setCount((value) => value + 1)}>
      Panel ({count})
    </button>
  );
};
```

## Type Declarations

```ts
export declare const useLogger: (name: string, params: unknown[]) => void;
```
