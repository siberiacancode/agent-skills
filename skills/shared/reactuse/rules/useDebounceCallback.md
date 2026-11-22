---
name: useDebounceCallback
category: Utilities
usage: high
---

# useDebounceCallback

Creates a debounced callback with a cancel method.

## Usage

```ts
import { useDebounceCallback } from "@siberiacancode/reactuse";

const debounced = useDebounceCallback(() => console.log("callback"), 500);
```

## Example

```tsx
const onSearch = useDebounceCallback((value: string) => {
  console.log(value);
}, 300);

return (
  <div>
    <input onChange={(event) => onSearch(event.target.value)} />
    <button onClick={() => onSearch.cancel()}>Cancel</button>
  </div>
);
```

## Type Declarations

```ts
export type DebouncedCallback<Params extends unknown[]> = ((
  ...args: Params
) => void) & {
  cancel: () => void;
};
export declare const useDebounceCallback: <Params extends unknown[], Return>(
  callback: (...args: Params) => Return,
  delay: number
) => DebouncedCallback<Params>;
```
