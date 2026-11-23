---
name: useForm
category: State
usage: medium
---

# useForm

Coordinates uncontrolled form fields behind a typed values object so validation, errors, submit state, and imperative form helpers stay in one place.

## Usage

```ts
import { useForm } from "@siberiacancode/reactuse";

const form = useForm({ initialValues: { email: "" } });
```

## Example

```tsx
import { useForm } from "@siberiacancode/reactuse";

export const LoginForm = () => {
  const form = useForm({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
  });

  return (
    <form onSubmit={form.handleSubmit((values) => console.log(values))}>
      <input {...form.register("email", { required: "Email is required" })} />
      {form.errors.email && <span>{form.errors.email}</span>}
      <input
        type="password"
        {...form.register("password", { minLength: { value: 6, message: "Too short" } })}
      />
      <button disabled={form.submitting}>Submit</button>
    </form>
  );
};
```

`resolver`:

```tsx
const form = useForm({
  initialValues: { email: "" },
  resolver: (values) => ({
    values,
    errors: values.email.includes("@") ? {} : { email: "Invalid email" },
  }),
});
```

`autoFocus`:

```tsx
const form = useForm({ initialValues: { email: "" }, autoFocus: "email" });
```

`initialValues`:

```tsx
const form = useForm({ initialValues: { email: "", remember: false } });
```

`validateOnBlur`:

```tsx
const form = useForm({ initialValues: { email: "" }, validateOnBlur: true });
```

`validateOnChange`:

```tsx
const form = useForm({ initialValues: { email: "" }, validateOnChange: true });
```

`validateOnMount`:

```tsx
const form = useForm({ initialValues: { email: "" }, validateOnMount: true });
```

`register.required`:

```tsx
<input {...form.register("email", { required: "Email is required" })} />;
```

`register.validate`:

```tsx
<input {...form.register("email", { validate: (value) => value ? true : "Empty" })} />;
```

`register.max`:

```tsx
<input type="number" {...form.register("age", { max: { value: 99, message: "Too old" } })} />;
```

`register.maxLength`:

```tsx
<input {...form.register("name", { maxLength: { value: 40, message: "Too long" } })} />;
```

`register.min`:

```tsx
<input type="number" {...form.register("age", { min: { value: 18, message: "Too young" } })} />;
```

`register.minLength`:

```tsx
<input {...form.register("password", { minLength: { value: 6, message: "Too short" } })} />;
```

`register.pattern`:

```tsx
<input {...form.register("email", { pattern: { value: /\S+@\S+\.\S+/, message: "Invalid" } })} />;
```

`register.onChange`:

```tsx
<input {...form.register("email", { onChange: (event) => console.log(event.currentTarget.value) })} />;
```

`register.onBlur`:

```tsx
<input {...form.register("email", { onBlur: () => console.log("blur") })} />;
```

## Notes

- By default the hook keeps field values in refs and does not re-render on every input value change. To render live form values in JSX, subscribe via `watch()`: call it once per render, for example `const values = form.watch()`, then the component will re-render when registered fields change. Use `getValues()` for one-off reads.

## Type Declarations

```ts
import type { BaseSyntheticEvent, ChangeEventHandler, FocusEventHandler } from "react";

type UseFormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export type UseFormErrors<Values> = Partial<Record<keyof Values, string>>;
export interface UseFormResolverResult<Values> {
  errors: UseFormErrors<Values>;
  values: Values;
}
export type UseFormResolver<Values> = (
  values: Values
) => Promise<UseFormResolverResult<Values>> | UseFormResolverResult<Values>;
export interface UseFormOptions<Values> {
  autoFocus?: keyof Values;
  initialValues: Values;
  resolver?: UseFormResolver<Values>;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnMount?: boolean;
}
export interface UseFormRegisterParams<Values = any> {
  max?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  min?: { value: number; message: string };
  minLength?: { value: number; message: string };
  onBlur?: FocusEventHandler<UseFormElement>;
  onChange?: ChangeEventHandler<UseFormElement>;
  pattern?: { value: RegExp; message: string };
  required?: string;
  validate?: (value: any, values: Values) => string | true | Promise<string | true>;
}
export interface UseFormReturn<Values extends Record<string, any>> {
  dirty: Partial<Record<keyof Values, boolean>>;
  errors: UseFormErrors<Values>;
  submitting: boolean;
  touched: Partial<Record<keyof Values, boolean>>;
  clearErrors: (name?: keyof Values) => void;
  focus: (name: keyof Values) => void;
  getValue: <Name extends keyof Values>(name: Name) => Values[Name];
  getValues: () => Values;
  handleSubmit: (
    onValid: (values: Values, event?: BaseSyntheticEvent) => any,
    onInvalid?: (errors: UseFormErrors<Values>, event?: BaseSyntheticEvent) => any
  ) => (event?: BaseSyntheticEvent) => Promise<void>;
  register: (name: keyof Values, params?: UseFormRegisterParams<Values>) => {
    name: string;
    onBlur: FocusEventHandler<UseFormElement>;
    onChange: ChangeEventHandler<UseFormElement>;
    ref: (node: UseFormElement | null | undefined) => void;
  };
  reset: (values?: Partial<Values>) => void;
  setError: (name: keyof Values, error: string) => void;
  setValue: <Name extends keyof Values>(name: Name, value: Values[Name]) => void;
  trigger: (name?: (keyof Values)[] | keyof Values, options?: { shouldFocus?: boolean }) => Promise<boolean>;
  watch: () => Values;
}
export declare const useForm: <Values extends Record<string, any>>(
  options: UseFormOptions<Values>
) => UseFormReturn<Values>;
```
