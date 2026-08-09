---
name: useWebWorkerCallback
category: Browser
usage: low
---

# useWebWorkerCallback

Runs a self-contained function off the main thread and returns a promise-based runner for component code.

## Usage

```ts
import { useWebWorkerCallback } from "@siberiacancode/reactuse";

const worker = useWebWorkerCallback((input: number) => input * 2);
```

## Example

```tsx
import { useWebWorkerCallback } from "@siberiacancode/reactuse";

export const HeavyCompute = () => {
  const worker = useWebWorkerCallback((count: number) => {
    let total = 0;
    for (let index = 0; index < count; index++) total += index;
    return total;
  });

  return (
    <button
      disabled={worker.pending}
      onClick={async () => console.log(await worker.run(1000000))}
    >
      Run
    </button>
  );
};
```

`callback`:

```tsx
const worker = useWebWorkerCallback((value: number) => value * 2);
```

`run(...args)`:

```tsx
const doubled = await worker.run(21);
```

## Notes

- Hook uses the [Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Worker).

## Type Declarations

```ts
export interface UseWebWorkerCallbackReturn<
  Callback extends (...args: any[]) => any
> {
  pending: boolean;
  run: (...args: Parameters<Callback>) => Promise<Awaited<ReturnType<Callback>>>;
  terminate: () => void;
}
export declare const useWebWorkerCallback: <
  Callback extends (...args: any[]) => any
>(
  callback: Callback
) => UseWebWorkerCallbackReturn<Callback>;
```
