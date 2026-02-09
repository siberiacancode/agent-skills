---
name: useConst
category: Utilities
usage: high
---

# useConst

Returns a constant value initialized once.

## Usage

```ts
import { useConst } from "@siberiacancode/reactuse";

const value = useConst("value");
```

## Example

```tsx
const id = useConst(() => crypto.randomUUID());
const config = useConst(() => ({ retry: 2 }));
return (
  <div>
    {id} (retry: {config.retry})
  </div>
);
```

## Type Declarations

```ts
export declare const useConst: <Value>(
  initialValue: (() => Value) | Value
) => Value;
```
