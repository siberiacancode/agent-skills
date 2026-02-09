---
name: useDebounceState
category: Utilities
usage: high
---

# useDebounceState

Creates a debounced state setter.

## Usage

```ts
import { useDebounceState } from "@siberiacancode/reactuse";

const [debounced, setDebounced] = useDebounceState(value, 500);
```

## Example

```tsx
import { useDebounceState } from "@siberiacancode/reactuse";
import { useState } from "react";

export const DebouncedInput = () => {
  const [value, setValue] = useState("");
  const [debounced, setDebounced] = useDebounceState(value, 300);

  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setDebounced(event.target.value);
        }}
      />
      <div>Debounced: {debounced}</div>
    </div>
  );
};
```

## Type Declarations

```ts
export declare const useDebounceState: <Value>(
  initialValue: Value,
  delay: number
) => readonly [Value, (value: Value) => void];
```
