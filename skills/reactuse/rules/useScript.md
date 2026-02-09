---
name: useScript
category: Elements
usage: low
---

# useScript

Loads a script and returns its status.

## Usage

```ts
import { useScript } from "@siberiacancode/reactuse";

const status = useScript("https://example.com/script.js");
```

## Example

```tsx
import { useScript } from "@siberiacancode/reactuse";

const status = useScript("https://example.com/script.js");
return <div>Status: {status}</div>;
```

`async`:

```tsx
const status = useScript("https://example.com/script.js", { async: false });
```

`removeOnUnmount`:

```tsx
const status = useScript("https://example.com/script.js", {
  removeOnUnmount: false,
});
```

## Type Declarations

```ts
import type { ComponentProps } from "react";

export type UseScriptStatus = "error" | "loading" | "ready" | "unknown";
export interface UseScriptOptions extends ComponentProps<"script"> {
  removeOnUnmount?: boolean;
}
export declare const useScript: (
  src: string,
  options?: UseScriptOptions
) => UseScriptStatus;
```
