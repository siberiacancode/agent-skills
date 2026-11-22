---
name: useFavicon
category: Browser
usage: low
---

# useFavicon

Reads and updates the current favicon.

## Usage

```ts
import { useFavicon } from "@siberiacancode/reactuse";

const favicon = useFavicon();
```

## Example

```tsx
const favicon = useFavicon("/light.ico");

return (
  <button onClick={() => favicon.set("/dark.ico")}>
    Current: {favicon.href}
  </button>
);
```

`initialFavicon`:

```tsx
const favicon = useFavicon("https://example.com/favicon.ico");
```

## Type Declarations

```ts
import type { Dispatch, SetStateAction } from "react";

export type UseFaviconReturn = [string, Dispatch<SetStateAction<string>>];
export declare const useFavicon: (initialHref?: string) => {
  href: string;
  set: (favicon: string) => void;
};
```
