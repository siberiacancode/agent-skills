---
name: usePrevious
category: Utilities
usage: low
---

# usePrevious

Returns the previous value.

## Usage

```ts
import { usePrevious } from "@siberiacancode/reactuse";

const prev = usePrevious(value);
```

## Example

`equality`:

Custom compare.

```tsx
const prev = usePrevious(value, {
  equality: (a, b) => a.id === b.id,
});
console.log(prev);
```

## Type Declarations

```ts
export interface UsePreviousOptions<Value> {
  equality: (a: Value, b: Value) => boolean;
}
export declare const usePrevious: <Value>(
  value: Value,
  options?: UsePreviousOptions<Value>
) => Value | undefined;
```
