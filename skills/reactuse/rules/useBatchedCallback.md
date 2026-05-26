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

const batched = useBatchedCallback((batch) => console.log(batch), { size: 5 });
```

## Example

```tsx
import { useBatchedCallback } from "@siberiacancode/reactuse";

export const Logger = () => {
  const batched = useBatchedCallback((batch) => {
    console.log("batch", batch);
  }, { size: 3, delay: 1000 });

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
export interface UseBatchedCallbackOptions {
  delay?: number;
  size: number;
}
export declare const useBatchedCallback: <Params extends unknown[]>(
  callback: (batch: Params[]) => void,
  options: UseBatchedCallbackOptions
) => BatchedCallback<Params>;
```
