---
name: useWebWorker
category: Browser
usage: low
---

# useWebWorker

Keeps a Web Worker connected to React state so components can post messages, restart work, terminate it, and render the latest result or error.

## Usage

```ts
import { useWebWorker } from "@siberiacancode/reactuse";

const worker = useWebWorker<number>("/worker.js");
```

## Example

```tsx
import { useWebWorker } from "@siberiacancode/reactuse";

export const WorkerCounter = () => {
  const worker = useWebWorker<number>("/counter-worker.js");

  return (
    <div>
      <button onClick={() => worker.post("next")}>Next</button>
      <span>{worker.data ?? 0}</span>
      <button onClick={worker.terminate}>Stop</button>
    </div>
  );
};
```

`source` as URL:

```tsx
const worker = useWebWorker(new URL("./worker.ts", import.meta.url));
```

`source` as Worker:

```tsx
const worker = useWebWorker(new Worker("/worker.js"));
```

`WorkerOptions`:

```tsx
const worker = useWebWorker("/worker.js", { type: "module" });
```

`onError`:

```tsx
const worker = useWebWorker("/worker.js", {
  onError: (event) => console.error(event),
});
```

`onMessage`:

```tsx
const worker = useWebWorker<number>("/worker.js", {
  onMessage: (data) => console.log(data),
});
```

## Notes

- Hook uses the [Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Worker).

## Type Declarations

```ts
export type UseWebWorkerSource = string | URL | Worker;
export interface UseWebWorkerOptions<Data = unknown> extends WorkerOptions {
  onError?: (event: Event) => void;
  onMessage?: (data: Data, event: MessageEvent<Data>) => void;
}
export interface UseWebWorkerReturn<Data = unknown> {
  data?: Data;
  error?: Event;
  post: Worker["postMessage"];
  terminated: boolean;
  restart: () => void;
  terminate: () => void;
}
export declare const useWebWorker: <Data = unknown>(
  source: UseWebWorkerSource,
  options?: UseWebWorkerOptions<Data>
) => UseWebWorkerReturn<Data>;
```
