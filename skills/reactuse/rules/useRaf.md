---
name: useRaf
category: Browser
usage: low
---

# useRaf

Runs a callback on each animation frame.

## Usage

```ts
import { useRaf } from "@siberiacancode/reactuse";

const raf = useRaf(() => console.log("callback"));
```

## Example

```tsx
const [ticks, setTicks] = useState(0);
const raf = useRaf(() => setTicks((value) => value + 1));

return <button onClick={() => raf.pause()}>Ticks: {ticks}</button>;
```

`delay`:

```tsx
const raf = useRaf(() => console.log("callback"), { delay: 100 });
```

`enabled`:

```tsx
const raf = useRaf(() => console.log("callback"), { enabled: false });
```

## Notes

- Hook uses the [requestAnimationFrame API](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

## Type Declarations

```ts
export interface UseRafParams {
  delta: number;
  timestamp: DOMHighResTimeStamp;
}
export type UseRafCallback = (params: UseRafParams) => void;
export interface UseRafOptions {
  delay?: number;
  enabled?: boolean;
}
export interface UseRafReturn {
  active: boolean;
  pause: () => void;
  resume: () => void;
}
export declare const useRaf: (
  callback: UseRafCallback,
  options?: UseRafOptions
) => UseRafReturn;
```
