---
name: useBatchedCallback
category: Utilities
usage: medium
---

# useBatchedCallback

Batches calls and forwards them to a callback.

## Usage

```ts
import { useBatchedCallback } from "@siberiacancode/reactuse";

const batched = useBatchedCallback((batch) => console.log(batch), 5);
```

## Example

```tsx
import { useBatchedCallback } from "@siberiacancode/reactuse";

export const Logger = () => {
  const batched = useBatchedCallback((batch) => {
    console.log("batch", batch);
  }, 3);

  return (
    <div>
      <button onClick={() => batched("click")}>Queue</button>
      <button onClick={() => batched.flush()}>Flush</button>
    </div>
  );
};
```

## Notes

- Call `batched.flush()` to send the current batch immediately.
- Call `batched.cancel()` to clear pending calls.

## Type Declarations

```ts
export type BatchedCallback<Params extends unknown[]> = ((
  ...args: Params
) => void) & {
  flush: () => void;
  cancel: () => void;
};
export declare const useBatchedCallback: <Params extends unknown[]>(
  callback: (batch: Params[]) => void,
  size: number
) => BatchedCallback<Params>;
```
