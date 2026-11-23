---
name: useThrottleCallback
category: Utilities
usage: medium
---

# useThrottleCallback

Creates a throttled callback with a cancel method.

## Usage

```ts
import { useThrottleCallback } from "@siberiacancode/reactuse";

const throttled = useThrottleCallback(() => console.log("callback"), 500);
```

## Example

```tsx
import { useThrottleCallback } from "@siberiacancode/reactuse";

export const ScrollLogger = () => {
  const onScroll = useThrottleCallback(() => console.log("scroll"), 200);

  return (
    <div onScroll={onScroll}>
      Scroll me
      <button onClick={() => onScroll.cancel()}>Cancel</button>
    </div>
  );
};
```

## Type Declarations

```ts
export type ThrottledCallback<Params extends unknown[]> = ((
  ...args: Params
) => void) & {
  cancel: () => void;
};
export declare const useThrottleCallback: <Params extends unknown[], Return>(
  callback: (...args: Params) => Return,
  delay: number
) => ThrottledCallback<Params>;
```
