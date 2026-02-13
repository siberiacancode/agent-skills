---
name: useProgress
category: Time
usage: medium
---

# useProgress

Creates a lightweight progress state with auto-increment behavior.

## Usage

```ts
import { useProgress } from "@siberiacancode/reactuse";

const { value, active, start, done, inc, remove } = useProgress(0, {
  immediately: false,
  maximum: 0.98,
  speed: 250,
  rate: 0.02,
});
```

## Example

```tsx
import { useProgress } from "@siberiacancode/reactuse";

export const LoadingBar = () => {
  const progress = useProgress(0);

  const onLoad = async () => {
    progress.start();
    await new Promise((resolve) => setTimeout(resolve, 1200));
    progress.done();
  };

  return (
    <div>
      <button onClick={onLoad}>Start</button>

      {active && (
        <div
          style={{
            width: "100%",
            height: 4,
            background: "#e5e7eb",
            marginTop: 12,
          }}
        >
          <div
            style={{
              width: `${Math.round(value * 100)}%`,
              height: "100%",
              background: "#2563eb",
              transition: "width 200ms ease",
            }}
          />
        </div>
      )}
    </div>
  );
};
```

`initialValue`:

Initial progress value in the `0..1` range.

```tsx
const progress = useProgress(0.25);
```

`immediately`:

Starts progress automatically on mount.

```tsx
const progress = useProgress(0, { immediately: true });
```

`maximum`:

Upper bound for auto-increment while active.

```tsx
const progress = useProgress(0, { maximum: 0.95 });
```

`speed`:

Auto-increment interval in milliseconds.

```tsx
const progress = useProgress(0, { speed: 150 });
```

`rate`:

Additional random increment amount per tick.

```tsx
const progress = useProgress(0, { rate: 0.03 });
```

## Use cases

- Top-page loading bars for route/data transitions.

## Notes

- `value` is expected in the `0..1` range.
- `done()` sets progress to `1` and disables active state with a short delay.

## Type Declarations

```ts
export interface UseProgressOptions {
  immediately?: boolean;
  maximum?: number;
  rate?: number;
  speed?: number;
}
export interface UseProgressReturn {
  active: boolean;
  value: number;
  done: (force?: boolean) => number | null;
  inc: (amount?: number) => number | null;
  remove: () => void;
  start: (from?: number | null) => number;
}
export declare const useProgress: (
  initialValue?: number,
  options?: UseProgressOptions
) => UseProgressReturn;
```
