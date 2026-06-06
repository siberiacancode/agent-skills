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

`initialTouched`, `autoFocus`, `validateOnChange`, `validateOnBlur`, `validateOnMount`:

```tsx
const field = useField("", {
  initialTouched: true,
  autoFocus: true,
  validateOnBlur: true,
});
```

`register.onChange`, `register.onBlur`:

```tsx
const field = useField("");
return (
  <input
    {...field.register({
      onChange: (event) => console.log(event.currentTarget.value),
      onBlur: () => console.log("blur"),
    })}
  />
);
```

`register.required`, `register.validate`, `register.max`, `register.maxLength`, `register.min`, `register.minLength`, `register.pattern`:

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

## Notes

- **Reactivity.** By default the hook does not re-render on input, only internal state and flags like `dirty`, `touched`, and `error` update. To render the current value in JSX, subscribe via `watch()`: call it once per render, for example `const value = field.watch()`, then the component will re-render when the field changes. Without `watch()` use `getValue()` for one-off reads, for example on submit.
- Checkboxes and radio inputs are treated as boolean `checked` state; text inputs, selects, and textareas use `value`.

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

export interface UseFieldOptions {
  autoFocus?: boolean;
  initialTouched?: boolean;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnMount?: boolean;
}
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
