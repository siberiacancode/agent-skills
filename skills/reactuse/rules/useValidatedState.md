---
name: useValidatedState
category: State
usage: medium
---

# useValidatedState

Keeps a value, its current validity, and the last valid value together when invalid input should remain visible.

## Usage

```ts
import { useValidatedState } from "@siberiacancode/reactuse";

const [{ value, valid }, setValue] = useValidatedState("", (value) => value.length >= 3);
```

## Example

```tsx
import { useValidatedState } from "@siberiacancode/reactuse";

export const UsernameField = () => {
  const [username, setUsername] = useValidatedState(
    "",
    (value) => value.length >= 3
  );

  return (
    <label>
      Username
      <input value={username.value} onChange={(event) => setUsername(event.target.value)} />
      {!username.valid && <span>Use at least 3 characters</span>}
    </label>
  );
};
```

`initialValue`:

```tsx
const [age, setAge] = useValidatedState(18, (value) => value >= 18);
```

`validate`:

```tsx
const [username, setUsername] = useValidatedState("", (value) => value.length >= 3);
```

`initialValidationState`:

```tsx
const [email, setEmail] = useValidatedState("", isEmail, false);
```

## Type Declarations

```ts
export interface UseValidatedStateValue<Value> {
  lastValidValue?: Value;
  valid: boolean;
  value: Value;
}
export type UseValidatedStateReturn<Value> = [
  state: UseValidatedStateValue<Value>,
  setValue: (value: Value) => void
];
export declare const useValidatedState: <Value>(
  initialValue: Value,
  validate: (value: Value) => boolean,
  initialValidationState?: boolean
) => UseValidatedStateReturn<Value>;
```
