---
name: useBoolean
category: State
usage: high
---

# useBoolean

Manages a boolean state with a toggle helper.

## Usage

```ts
import { useBoolean } from "@siberiacancode/reactuse";

const [value, toggle] = useBoolean();
```

## Example

```tsx
import { useBoolean } from "@siberiacancode/reactuse";

export const Toggle = () => {
  const [value, toggle] = useBoolean();
  return <button onClick={() => toggle()}>{String(value)}</button>;
};
```

`initialValue`:

```tsx
const [value, toggle] = useBoolean(true);
```

## Type Declarations

```ts
export type UseBooleanReturn = [
  value: boolean,
  toggle: (value?: boolean) => void
];
export declare const useBoolean: (initialValue?: boolean) => UseBooleanReturn;
```
