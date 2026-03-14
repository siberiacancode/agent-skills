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
      onSubmit={(e) => {
        e.preventDefault();
        console.log(field.getValue());
      }}
    >
      <input {...field.register({ required: "Required" })} />
      {field.error && <span>{field.error}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};
```

`initialValue` (first argument):

```tsx
const field = useField();
const fieldNum = useField(0);
const fieldChecked = useField(false);
```

`initialTouched`, `autoFocus`, `validateOnChange`, `validateOnBlur`, `validateOnMount` (second argument):

```tsx
const field = useField("", {
  initialTouched: true,
  autoFocus: true,
  validateOnBlur: true,
});
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

**Reactivity.** By default the hook does not re-render on input — only internal state and flags like `dirty`/`touched`/`error` update. To render the current value in JSX (e.g. character count), subscribe via `watch()`: call it once per render (e.g. `const value = field.watch()`), then the component will re-render when the field changes. Without `watch()` use `getValue()` for one-off reads (e.g. on submit).

If you do need to show the value in the UI:

```tsx
const field = useField();
const value = field.watch();
return (
  <div>
    <input {...field.register()} />
    <span>Characters: {String(value).length}</span>
  </div>
);
```

## Type Declarations

```ts
import type { RefObject } from "react";

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
  pattern?: { value: RegExp; message: string };
  required?: string;
  validate?: (value: string) => Promise<string | true>;
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
  initialValue: Value = "" as Value,
  options?: UseFieldOptions
) => UseFieldReturn<Type>;
```
