---
name: useField
category: State
usage: medium
---

# useField

Keeps a single uncontrolled form control connected to React state for validation, touched/dirty flags, and imperative field helpers.

## Usage

```ts
import { useField } from "@siberiacancode/reactuse";

const field = useField();
// or with initial value and options
const field = useField("", { validateOnBlur: true });
```

## Example

```tsx
import { useField } from "@siberiacancode/reactuse";

export const EmailField = () => {
  const field = useField("", { validateOnBlur: true });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(field.getValue());
      }}
    >
      <input
        {...field.register({
          required: "Required",
          onBlur: () => console.log("blur"),
        })}
      />
      {field.error && <span>{field.error}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};
```

`initialValue`:

```tsx
const field = useField();
const fieldNum = useField(0);
const fieldChecked = useField(false);
```

`initialTouched`:

```tsx
const field = useField("", { initialTouched: true });
```

`autoFocus`:

```tsx
const field = useField("", { autoFocus: true });
```

`validateOnChange`:

```tsx
const field = useField("", { validateOnChange: true });
```

`validateOnBlur`:

```tsx
const email = useField("", {
  validateOnBlur: true,
  required: "Email is required",
});
```

`validateOnMount`:

```tsx
const field = useField("", { validateOnMount: true });
```

`register.onChange`:

```tsx
const field = useField("");
return (
  <input
    {...field.register({
      onChange: (event) => console.log(event.currentTarget.value),
    })}
  />
);
```

`register.onBlur`:

```tsx
const field = useField("");
return <input {...field.register({ onBlur: () => console.log("blur") })} />;
```

`register.required`:

```tsx
const field = useField("");
return <input {...field.register({ required: "Required" })} />;
```

`register.validate`:

```tsx
const field = useField("");
return <input {...field.register({ validate: (value) => value ? true : "Empty" })} />;
```

`register.max`:

```tsx
const age = useField(0);
return <input type="number" {...age.register({ max: { value: 99, message: "Too old" } })} />;
```

`register.maxLength`:

```tsx
const field = useField("");
return <input {...field.register({ maxLength: { value: 20, message: "Too long" } })} />;
```

`register.min`:

```tsx
const age = useField(0);
return <input type="number" {...age.register({ min: { value: 18, message: "Too young" } })} />;
```

`register.minLength`:

```tsx
const field = useField();
return (
  <input
    {...field.register({
      required: "Required",
      minLength: { value: 3, message: "Too short" },
    })}
  />
);
```

`register.pattern`:

```tsx
const email = useField("");
return <input {...email.register({ pattern: { value: /\S+@\S+\.\S+/, message: "Invalid" } })} />;
```

## Notes

- By default the hook does not re-render on every input value change. To render the current value in JSX, subscribe via `watch()`: call it once per render, for example `const value = field.watch()`, then the component will re-render when the field changes. Use `getValue()` for one-off reads such as submit handlers.

## Type Declarations

```ts
import type {
  ChangeEventHandler,
  FocusEventHandler,
  RefObject,
} from "react";

type UseFieldElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export interface UseFieldRegisterParams {
  max?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  min?: { value: number; message: string };
  minLength?: { value: number; message: string };
  onBlur?: FocusEventHandler<UseFieldElement>;
  onChange?: ChangeEventHandler<UseFieldElement>;
  pattern?: { value: RegExp; message: string };
  required?: string;
  validate?: (value: string) => string | true | Promise<string | true>;
}
export interface UseFieldOptions extends UseFieldRegisterParams {
  autoFocus?: boolean;
  initialTouched?: boolean;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnMount?: boolean;
}
export interface UseFieldReturn<Value> {
  dirty: boolean;
  error?: string;
  ref: RefObject<UseFieldElement | null>;
  touched: boolean;
  clearError: () => void;
  focus: () => void;
  getValue: () => Value;
  register: (params?: UseFieldRegisterParams) => {
    onBlur: FocusEventHandler<UseFieldElement>;
    onChange: ChangeEventHandler<UseFieldElement>;
    ref: (node: UseFieldElement | null | undefined) => void;
  };
  reset: () => void;
  setError: (error: string) => void;
  setValue: (value: Value) => void;
  watch: () => Value;
}
export declare const useField: <
  Value extends boolean | number | string | unknown = string,
  Type = Value extends string
    ? string
    : Value extends boolean
    ? boolean
    : number
>(
  initialValue?: Value,
  options?: UseFieldOptions
) => UseFieldReturn<Type>;
```
