---
name: useWindowEvent
category: Sensors
usage: low
---

# useWindowEvent

Attaches an event listener to the window object.

## Usage

```ts
import { useWindowEvent } from "@siberiacancode/reactuse";

useWindowEvent("resize", () => console.log("resize"));
```

## Example

```tsx
import { useWindowEvent } from "@siberiacancode/reactuse";
import { useState } from "react";

export const ResizeCount = () => {
  const [count, setCount] = useState(0);
  useWindowEvent("resize", () => setCount((value) => value + 1));

  return <div>Resized: {count}</div>;
};
```

`enabled`:

```tsx
useWindowEvent("scroll", () => {}, { enabled: false });
```

## Type Declarations

```ts
import type { UseEventListenerOptions } from "@siberiacancode/reactuse";

export declare const useWindowEvent: <Event extends keyof WindowEventMap>(
  event: Event,
  listener: (this: Window, event: WindowEventMap[Event]) => any,
  options?: UseEventListenerOptions
) => void;
```
