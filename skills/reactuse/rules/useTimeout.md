---
name: useTimeout
category: Time
usage: medium
---

# useTimeout

Runs a callback after a delay and returns a `ready` flag.

## Usage

```ts
import { useTimeout } from "@siberiacancode/reactuse";

const timeout = useTimeout(() => {}, 5000);
```

## Example

```tsx
import { useTimeout } from "@siberiacancode/reactuse";

export const Toast = () => {
  const timeout = useTimeout(() => {
    console.log("hide");
  }, 2000);

  return (
    <div>
      {timeout.ready ? "Hidden" : "Visible"}
      <button onClick={() => timeout.clear()}>Dismiss</button>
    </div>
  );
};
```

## Type Declarations

```ts
interface UseTimeoutReturn {
  ready: boolean;
  clear: () => void;
}
export declare function useTimeout(
  callback: () => void,
  delay: number
): UseTimeoutReturn;
```
