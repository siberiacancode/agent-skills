---
name: useRafState
category: State
usage: low
---

# useRafState

Updates state inside `requestAnimationFrame`.

## Usage

```ts
import { useRafState } from "@siberiacancode/reactuse";

const [value, setValue] = useRafState(0);
```

## Example

```tsx
const [value, setValue] = useRafState(0);
return <button onClick={() => setValue(value + 1)}>Value: {value}</button>;
```

`initialValue`:

```tsx
const [value, setValue] = useRafState(() => 0);
```

## Notes

- Hook uses the [requestAnimationFrame API](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

## Type Declarations

```ts
export type UseRafStateReturn<Value> = [Value, (value: Value) => void];
export declare const useRafState: <Value>(
  initialValue: (() => Value) | Value
) => readonly [Value, (value: Value) => void];
```
