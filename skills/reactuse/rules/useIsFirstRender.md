---
name: useIsFirstRender
category: Lifecycle
usage: low
---

# useIsFirstRender

Returns `true` only on the first render.

## Usage

```ts
import { useIsFirstRender } from "@siberiacancode/reactuse";

const isFirst = useIsFirstRender();
```

## Example

```tsx
import { useIsFirstRender } from "@siberiacancode/reactuse";

export const Banner = () => {
  const isFirst = useIsFirstRender();
  return <div>{isFirst ? "Welcome!" : "Welcome back"}</div>;
};
```

## Type Declarations

```ts
export declare const useIsFirstRender: () => boolean;
```
