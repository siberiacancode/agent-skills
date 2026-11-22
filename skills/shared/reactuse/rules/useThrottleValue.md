---
name: useThrottleValue
category: Utilities
usage: medium
---

# useThrottleValue

Returns a throttled version of a value.

## Usage

```ts
import { useThrottleValue } from "@siberiacancode/reactuse";

const throttled = useThrottleValue(value, 500);
```

## Example

```tsx
import { useThrottleValue } from "@siberiacancode/reactuse";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");
  const throttled = useThrottleValue(value, 300);

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>Query: {throttled || "..."}</div>
    </>
  );
};
```

## Type Declarations

```ts
export declare const useThrottleValue: <Value>(
  value: Value,
  delay: number
) => Value;
```
