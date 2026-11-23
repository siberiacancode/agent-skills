---
name: target
category: Helpers
usage: medium
---

# target

Wraps DOM target references in the shape Reactuse hooks understand, especially when the target is not a React ref.

## Usage

```ts
import { target, useClickOutside } from "@siberiacancode/reactuse";

useClickOutside(target("#container"), () => console.log("outside"));
```

## Example

`string`:

```tsx
import { target, useClickOutside } from "@siberiacancode/reactuse";

useClickOutside(target("#container"), () => console.log("outside"));
```

`Element`:

```tsx
useClickOutside(target(document.getElementById("container")!), () =>
  console.log("outside")
);
```

`Document`:

```tsx
useClickOutside(target(document), () => console.log("document"));
```

`Window`:

```tsx
useClickOutside(target(window), () => console.log("window"));
```

`getter function`:

```tsx
useClickOutside(target(() => document.querySelector("#container")), () => {
  console.log("outside");
});
```

## Type Declarations

```ts
import type { RefObject } from "react";

export type Target =
  | (() => Document | Element | Window)
  | string
  | Document
  | Element
  | Window;
interface StateRef<Value> {
  (node: Value): void;
  current: Value;
  state: Value;
}
export type HookTarget =
  | ReturnType<typeof target>
  | RefObject<Element | null | undefined>
  | StateRef<Element | null | undefined>;
export declare const target: (target: Target) => {
  value: Target;
  type: symbol;
};
```
