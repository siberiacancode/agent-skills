---
name: deepEqual
category: Helpers
usage: low
---

# deepEqual

Compares values recursively, including arrays, plain objects, dates, regular expressions, errors, maps, sets, symbol keys, and cyclic references.

## Usage

```ts
import { deepEqual } from "@siberiacancode/reactuse";

const unchanged = deepEqual(
  { name: "Alex", profile: { status: "online" } },
  { name: "Alex", profile: { status: "online" } }
);
```

## Example

```tsx
const saved = { filters: { role: "admin", active: true } };
const current = { filters: { role: "admin", active: true } };

return <span>{deepEqual(saved, current) ? "Saved" : "Unsaved"}</span>;
```

## Type Declarations

```ts
export declare const deepEqual: (a: any, b: any) => boolean;
```
