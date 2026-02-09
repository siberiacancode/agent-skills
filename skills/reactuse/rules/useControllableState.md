---
name: useControllableState
category: State
usage: medium
---

# useControllableState

Supports controlled and uncontrolled state patterns.

## Usage

```ts
import { useControllableState } from "@siberiacancode/reactuse";

const [value, setValue, isControlled] = useControllableState({
  initialValue: "draft",
});
```

## Example

```tsx
import type { ComponentProps } from "react";
import { useControllableState } from "@siberiacancode/reactuse";

type NameFieldProps = ComponentProps<"input">;

export const NameField = ({ value, onChange }: NameFieldProps) => {
  const [current, setCurrent] = useControllableState({
    value,
    initialValue: "",
    onChange,
  });

  return (
    <input
      value={current}
      onChange={(event) => setCurrent(event.target.value)}
    />
  );
};
```

`value`:

```tsx
const [value, setValue] = useControllableState({ value: props.value });
```

`initialValue`:

```tsx
const [value, setValue] = useControllableState({ initialValue: "draft" });
```

`onChange`:

```tsx
const [value, setValue] = useControllableState({
  initialValue: "draft",
  onChange: (value) => console.log(value),
});
```

## Type Declarations

```ts
export interface UseControllableStateOptions<Value> {
  initialValue?: Value;
  value?: Value;
  onChange?: (value: Value) => void;
}
export type UseControllableStateReturn<Value> = [
  value: Value,
  setValue: (nextValue: ((prevValue: Value) => Value) | Value) => void,
  isControlled: boolean
];
export declare function useControllableState<Value>(
  options: UseControllableStateOptions<Value>
): UseControllableStateReturn<Value>;
```
