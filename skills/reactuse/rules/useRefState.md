---
name: useRefState
category: State
usage: low
---

# useRefState

Creates a ref-like state that updates on assignment.

## Usage

```ts
import { useRefState } from "@siberiacancode/reactuse";

const ref = useRefState();
```

## Example

`initialValue`:

```tsx
const ref = useRefState(0);

return <button onClick={() => ref.current += 1;}>Increment {ref.current}</button>;
```

## Type Declarations

```ts
export interface StateRef<Value> {
  (node: Value): void;
  current: Value;
  state?: Value;
}
export declare const useRefState: <Value>(
  initialValue?: Value
) => StateRef<Value>;
```
