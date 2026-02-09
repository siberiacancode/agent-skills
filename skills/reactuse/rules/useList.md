---
name: useList
category: State
usage: medium
---

# useList

Manages an array with helper methods.

## Usage

```ts
import { useList } from "@siberiacancode/reactuse";

const list = useList(["a", "b"]);
```

## Example

```tsx
import { useList } from "@siberiacancode/reactuse";

export const TodoList = () => {
  const list = useList(["a", "b"]);

  return (
    <div>
      <button onClick={() => list.push("c")}>Add</button>
      <div>{list.value.join(", ")}</div>
    </div>
  );
};
```

`initialList`:

```tsx
const list = useList([1, 2, 3]);
```

## Type Declarations

```ts
export interface UseListReturn<Item> {
  value: Item[];
  clear: () => void;
  insertAt: (insertAtIndex: number, item: Item) => void;
  push: (item: Item) => void;
  removeAt: (removeAtIndex: number) => void;
  set: (list: Item[]) => void;
  updateAt: (updateAtIndex: number, item: Item) => void;
}
export declare const useList: <Item>(initialList?: Item[]) => {
  value: Item[];
  set: (list: Item[]) => void;
  push: (item: Item) => void;
  removeAt: (removeAtIndex: number) => void;
  insertAt: (insertAtIndex: number, item: Item) => void;
  updateAt: (updateAtIndex: number, item: Item) => void;
  clear: () => void;
  reset: () => void;
};
```
