---
name: useCycleList
category: State
usage: medium
---

# useCycleList

Models a finite set of ordered choices as a current value plus helpers for moving through the list.

## Usage

```ts
import { useCycleList } from "@siberiacancode/reactuse";

const cycle = useCycleList(["light", "dark", "system"]);
```

## Example

```tsx
import { useCycleList } from "@siberiacancode/reactuse";

export const ThemeCycle = () => {
  const { value, next, prev } = useCycleList(["light", "dark", "system"]);

  return (
    <div>
      <button onClick={() => prev()}>Prev</button>
      <span>{value}</span>
      <button onClick={() => next()}>Next</button>
    </div>
  );
};
```

`list`:

```tsx
const cycle = useCycleList(["light", "dark", "system"]);
```

`initialIndex`:

```tsx
const cycle = useCycleList(["small", "medium", "large"], 1);
```

`next(step)`:

```tsx
cycle.next(2);
```

`prev(step)`:

```tsx
cycle.prev();
```

`go(index)`:

```tsx
cycle.go(0);
```

## Type Declarations

```ts
export interface UseCycleListReturn<Value> {
  index: number;
  value: Value;
  go: (index: number) => Value;
  next: (step?: number) => Value;
  prev: (step?: number) => Value;
}
export declare const useCycleList: <Value>(
  list: Value[],
  initialIndex?: number,
) => UseCycleListReturn<Value>;
```
