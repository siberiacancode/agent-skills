---
name: useStateHistory
category: State
usage: medium
---

# useStateHistory

Keeps state with undo/redo history.

## Usage

```ts
import { useStateHistory } from "@siberiacancode/reactuse";

const history = useStateHistory(0);
```

## Example

```tsx
import { useStateHistory } from "@siberiacancode/reactuse";

export const HistoryInput = () => {
  const history = useStateHistory("draft");

  return (
    <div>
      <button onClick={() => history.undo()}>Undo</button>
      <button onClick={() => history.redo()}>Redo</button>
      <div>Value: {history.value}</div>
    </div>
  );
};
```

`initialValue`:

```tsx
const history = useStateHistory("draft");
```

`capacity`:

```tsx
const history = useStateHistory(0, 50);
```

## Type Declarations

```ts
interface UseStateHistoryReturn<Value> {
  canRedo: boolean;
  canUndo: boolean;
  history: Value[];
  index: number;
  value: Value;
  back: (steps?: number) => void;
  forward: (steps?: number) => void;
  redo: () => void;
  reset: () => void;
  set: (value: Value) => void;
  undo: () => void;
}
export declare const useStateHistory: <Value>(
  initialValue: Value,
  capacity?: number
) => UseStateHistoryReturn<Value>;
```
