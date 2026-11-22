---
name: useObject
category: State
usage: medium
---

# useObject

Manages object state with helper methods for updates and key operations.

## Usage

```ts
import { useObject } from "@siberiacancode/reactuse";

const user = useObject({ name: "John", age: 30, active: true });
```

## Example

```tsx
import { useObject } from "@siberiacancode/reactuse";

export const UserCard = () => {
  const user = useObject({ name: "John", age: 30, active: true });

  return (
    <div>
      <p>{user.value.name}</p>
      <p>Fields: {user.size}</p>
      <button onClick={() => user.set({ active: !user.value.active })}>
        Toggle active
      </button>
      <button onClick={() => user.remove("age")}>Remove age</button>
      <button onClick={() => user.reset()}>Reset</button>
    </div>
  );
};
```

## Type Declarations

```ts
export interface UseObjectReturn<Value extends object> {
  empty: boolean;
  keys: Array<keyof Value>;
  size: number;
  value: Value;
  clear: () => void;
  has: (key: keyof Value) => boolean;
  remove: (key: keyof Value) => void;
  reset: () => void;
  set: (value: Partial<Value>) => void;
}
export declare function useObject<Value extends object>(
  initialValue: Value
): UseObjectReturn<Value>;
```
