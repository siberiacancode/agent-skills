---
name: usePerformanceObserver
category: Sensors
usage: low
---

# usePerformanceObserver

Observes performance entries.

## Usage

```ts
import { usePerformanceObserver } from "@siberiacancode/reactuse";

const perf = usePerformanceObserver({ entryTypes: ["measure"] });
```

## Example

```tsx
import { usePerformanceObserver } from "@siberiacancode/reactuse";

export const PerfEntries = () => {
  const perf = usePerformanceObserver({ entryTypes: ["resource"] });

  return (
    <div>
      Entries: {perf.entries.length} (supported: {String(perf.supported)})
    </div>
  );
};
```

`immediate`:

```tsx
const perf = usePerformanceObserver({
  entryTypes: ["resource"],
  immediate: true,
});
```

`entryTypes`:

```tsx
const perf = usePerformanceObserver({ entryTypes: ["navigation"] });
```

## Notes

- Hook uses the [PerformanceObserver API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver).

## Type Declarations

```ts
export type UsePerformanceObserverOptions = PerformanceObserverInit & {
  immediate?: boolean;
};
export declare const usePerformanceObserver: (
  options: UsePerformanceObserverOptions,
  callback?: PerformanceObserverCallback
) => {
  supported: boolean;
  entries: PerformanceEntry[];
  start: () => void;
  stop: () => void;
};
```
