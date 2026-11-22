---
name: useMemory
category: Browser
usage: low
---

# useMemory

Returns the current JS heap memory usage.

## Usage

```ts
import { useMemory } from "@siberiacancode/reactuse";

const memory = useMemory();
```

`callback`:

```tsx
const memory = useMemory((value) => {
  console.log(value.usedJSHeapSize);
});
```

## Example

```tsx
import { useMemory } from "@siberiacancode/reactuse";

export const Memory = () => {
  const memory = useMemory();
  if (!memory.supported) return <div>Not supported</div>;

  const used =
    Math.round((memory.value.usedJSHeapSize / 1024 / 1024) * 10) / 10;

  return <div>Heap used: {used} MB</div>;
};
```

## Notes

- Hook uses the [performance.memory API](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory).

## Type Declarations

```ts
export interface UseMemoryReturn {
  supported: boolean;
  value: Performance["memory"];
}
export type UseMemoryCallback = (value: Performance["memory"]) => void;
export declare const useMemory: (
  callback?: UseMemoryCallback
) => UseMemoryReturn;
```
