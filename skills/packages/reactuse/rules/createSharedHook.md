---
name: createSharedHook
category: Helpers
usage: low
---

# createSharedHook

Turns a hook into a shared singleton-style hook when multiple components should subscribe to the same underlying hook result.

## Usage

```ts
import { createSharedHook, useMediaQuery } from "@siberiacancode/reactuse";

const useSharedMobile = createSharedHook(useMediaQuery);
```

## Example

```tsx
import { createSharedHook, useMediaQuery } from "@siberiacancode/reactuse";

const useSharedMobile = createSharedHook(useMediaQuery);

export const Header = () => {
  const isMobile = useSharedMobile("(max-width: 768px)");
  return <header>{isMobile ? "Mobile" : "Desktop"}</header>;
};
```

`useHook`:

```tsx
const useSharedOnline = createSharedHook(useOnline);
```

`hook arguments`:

```tsx
const useSharedMobile = createSharedHook(useMediaQuery);
const isMobile = useSharedMobile("(max-width: 768px)");
```

## Type Declarations

```ts
export declare const createSharedHook: <
  Hook extends (...args: any[]) => any
>(
  useHook: Hook
) => (...args: Parameters<Hook>) => ReturnType<Hook>;
```
