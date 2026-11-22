---
name: useLatest
category: Utilities
usage: medium
---

# useLatest

Returns a stable ref that always points to the latest value.

## Usage

```ts
import { useLatest } from "@siberiacancode/reactuse";

const latest = useLatest(value);
```

## Example

```tsx

```

## Type Declarations

```ts
import type { RefObject } from "react";

export interface UseLatestReturn<Value> {
  ref: RefObject<Value>;
  value: Value;
}
export declare const useLatest: <Value>(value: Value) => UseLatestReturn<Value>;
```
