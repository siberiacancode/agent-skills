---
name: makeDestructurable
category: Helpers
usage: low
---

# makeDestructurable

Returns one value that can be consumed both as a named object and as a tuple, useful for hook APIs that support both styles.

## Usage

```ts
import { makeDestructurable } from "@siberiacancode/reactuse";

const point = makeDestructurable({ x: 10, y: 20 }, [10, 20] as const);
```

## Example

```tsx
import { makeDestructurable } from "@siberiacancode/reactuse";

const result = makeDestructurable({ value: 1, setValue: () => {} }, [
  1,
  () => {},
] as const);

const { value } = result;
const [current] = result;
```

`obj`:

```tsx
const result = makeDestructurable({ value: 1 }, [1] as const);
```

`arr`:

```tsx
const result = makeDestructurable({ value: 1, setValue }, [1, setValue] as const);
```

## Type Declarations

```ts
export declare const makeDestructurable: <
  Obj extends Record<string, unknown>,
  Arr extends readonly unknown[],
>(
  obj: Obj,
  arr: Arr,
) => Obj & Arr;
```
