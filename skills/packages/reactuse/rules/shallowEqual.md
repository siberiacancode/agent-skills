---
name: shallowEqual
category: Helpers
usage: low
---

# shallowEqual

Compares top-level values with `Object.is`, with dedicated handling for arrays, plain objects, dates, regular expressions, errors, maps, sets, and symbol keys.

## Usage

```ts
import { shallowEqual } from "@siberiacancode/reactuse";

const unchanged = shallowEqual(
  { name: "Alex", status: "online" },
  { name: "Alex", status: "online" }
);
```

## Example

```tsx
const previous = { page: 1, query: "react" };
const current = { page: 1, query };

return <span>{shallowEqual(previous, current) ? "Unchanged" : "Changed"}</span>;
```

## Type Declarations

```ts
export declare const shallowEqual: (a: any, b: any) => boolean;
```
