---
name: useThrottleState
category: Utilities
usage: medium
---

# useThrottleState

Creates a throttled state setter.

## Usage

```ts
import { useThrottleState } from "@siberiacancode/reactuse";

const [throttled, setThrottled] = useThrottleState(value, 500);
```

## Example

```tsx
import { useThrottleState } from "@siberiacancode/reactuse";
import { useState } from "react";

export const ThrottledInput = () => {
  const [value, setValue] = useState("");
  const [throttled, setThrottled] = useThrottleState(value, 300);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setThrottled(e.target.value);
        }}
      />
      <div>Throttled: {throttled}</div>
    </div>
  );
};
```

## Type Declarations

```ts
export declare const useThrottleState: <Value>(
  initialValue: Value,
  delay: number
) => readonly [Value, (value: Value) => void];
```
