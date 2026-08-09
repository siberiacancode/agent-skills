---
name: createContextHook
category: Helpers
usage: low
---

# createContextHook

Turns any hook into a scoped provider/consumer pair when several descendants should read the same hook result from one subtree instance.

## Usage

```ts
import { createContextHook, useMediaQuery } from "@siberiacancode/reactuse";

const media = createContextHook(useMediaQuery);
```

## Example

```tsx
import { createContextHook, useMediaQuery } from "@siberiacancode/reactuse";

const media = createContextHook(useMediaQuery);

const Sidebar = () => {
  const isMobile = media.use();
  return <aside data-mobile={isMobile}>Menu</aside>;
};

export const Layout = () => (
  <media.Provider params={["(max-width: 768px)"]}>
    <Sidebar />
  </media.Provider>
);
```

`useHook`:

```tsx
const media = createContextHook(useMediaQuery);
```

`Provider.params`:

```tsx
<media.Provider params={["(max-width: 768px)"]}>
  <Sidebar />
</media.Provider>
```

`use()`:

```tsx
const isMobile = media.use();
```

## Type Declarations

```ts
import type { ReactNode } from "react";

export declare const createContextHook: <
  Hook extends (...args: any[]) => any
>(
  useHook: Hook
) => {
  Provider: (props: {
    children: ReactNode;
    params: Parameters<Hook>;
  }) => JSX.Element;
  use: () => ReturnType<Hook> | null;
};
```
