---
name: useEvent
category: Utilities
usage: high
---

# useEvent

Returns a stable callback reference that always calls the latest handler.

## Usage

```ts
import { useEvent } from "@siberiacancode/reactuse";

const onClick = useEvent(() => console.log("clicked"));
```

## Example

```tsx
import { useEvent } from "@siberiacancode/reactuse";
import { useState, useEffect } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);
  const onRerender = useEvent(() => setCount(count++));

  useEffect(() => {
    onRerender();
  });
};
```

## Type Declarations

```ts
export declare const useEvent: <Params extends unknown[], Return>(
  callback: (...args: Params) => Return
) => (...args: Params) => Return;
```
