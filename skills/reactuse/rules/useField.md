---
name: useField
category: State
usage: medium
---

# useField

Manages input state, validation, and helpers.

## Usage

```ts
import { useField } from "@siberiacancode/reactuse";

const field = useField();
```

## Example

```tsx
import { useField } from "@siberiacancode/reactuse";

export const EmailField = () => {
  const inputField = useField({ initialValue: "" });

  return <input {...inputField.register()} />;
};
```

`initialValue`:

```tsx
const field = useField({ initialValue: "" });
```

`initialTouched`:

```tsx
const field = useField({ initialTouched: true });
```

`autoFocus`:

```tsx
const field = useField({ autoFocus: true });
```

`validateOnChange`:

```tsx
const field = useField({ validateOnChange: true });
```

`validateOnBlur`:

```tsx
const field = useField({ validateOnBlur: true });
```

`validateOnMount`:

```tsx
const field = useField({ validateOnMount: true });
```

`register.required`:

```tsx
const field = useField();
return <input {...field.register({ required: "Required" })} />;
```

`register.validate`:

```tsx
const field = useField();
return (
  <input
    {...field.register({
      validate: (value) => (value ? true : "Invalid"),
    })}
  />
);
```

`register.max`:

```tsx
const field = useField();
return (
  <input {...field.register({ max: { value: 10, message: "Too big" } })} />
);
```

`register.maxLength`:

```tsx
const field = useField();
return (
  <input
    {...field.register({ maxLength: { value: 10, message: "Too long" } })}
  />
);
```

`register.min`:

```tsx
const field = useField();
return (
  <input {...field.register({ min: { value: 1, message: "Too small" } })} />
);
```

`register.minLength`:

```tsx
const field = useField();
return (
  <input
    {...field.register({ minLength: { value: 3, message: "Too short" } })}
  />
);
```

`register.pattern`:

```tsx
const field = useField();
return (
  <input
    {...field.register({
      pattern: { value: /^[a-z]+$/, message: "Only lowercase" },
    })}
  />
);
```

## Type Declarations

```ts
import type { RefObject } from "react";

export interface UseFieldParams<Value> {
  autoFocus?: boolean;
  initialTouched?: boolean;
  initialValue?: Value;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnMount?: boolean;
}
export interface UseFieldRegisterParams {
  required?: string;
  validate?: (value: string) => Promise<string | true>;
  max?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  min?: { value: number; message: string };
  minLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
}
export interface UseFieldReturn<Value> {
  dirty: boolean;
  error?: string;
  ref: RefObject<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null
  >;
  touched: boolean;
  clearError: () => void;
  focus: () => void;
  getValue: () => Value;
  register: (params?: UseFieldRegisterParams) => {
    onBlur: () => void;
    onChange: () => void;
    ref: (
      node:
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement
        | null
        | undefined
    ) => void;
  };
  reset: () => void;
  setError: (error: string) => void;
  setValue: (value: Value) => void;
  watch: () => Value;
}
export declare const useField: <
  Value extends boolean | number | string = string,
  Type = Value extends string
    ? string
    : Value extends boolean
    ? boolean
    : number
>(
  params?: UseFieldParams<Value>
) => UseFieldReturn<Type>;
```
