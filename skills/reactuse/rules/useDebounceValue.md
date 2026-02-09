---
name: useDebounceValue
category: Utilities
usage: high
---

# useDebounceValue

Returns a debounced version of a value.

## Usage

```ts
import { useDebounceValue } from "@siberiacancode/reactuse";

const debounced = useDebounceValue(value, 500);
```

## Example

```tsx
import { useDebounceValue } from "@siberiacancode/reactuse";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");
  const debounced = useDebounceValue(value, 300);

  return (
    <>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <div>Query: {debounced || "..."}</div>
    </>
  );
};
```

## Type Declarations

```ts
export declare const useDebounceValue: <Value>(
  value: Value,
  delay: number
) => Value;
```
