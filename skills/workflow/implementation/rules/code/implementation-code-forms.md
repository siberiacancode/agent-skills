---
title: Build typed and validated forms
impact: HIGH
impactDescription: provides consistent form state, runtime validation, submission handling, and dynamic-field behavior
tags: frontend, forms, React Hook Form, Zod, validation, TypeScript
---

# Forms

Use the libraries already standardized by the frontend:

- `react-hook-form` owns form state, registration/controllers, submission, field errors, and dynamic fields;
- `zod` defines runtime validation and the form value type;
- `@hookform/resolvers/zod` connects the Zod schema through `zodResolver`.

Do not introduce a second form or validation library for the same feature. Put form setup and submission flow in the component's feature hook; follow [hooks](implementation-code-hooks.md).

## Schema and value type

Keep a reusable schema in the feature's `constants` area. Name it `{feature}FormSchema`, infer its TypeScript type from the schema, and centralize reusable limits and defaults. Use stable error/message identifiers when the application localizes validation messages.

```ts
import { z } from "zod"

export const MAX_DISPLAY_NAME_LENGTH = 100

export const profileFormSchema = z.object({
  displayName: z
    .string()
    .min(1, "error.validation.required")
    .max(MAX_DISPLAY_NAME_LENGTH, "error.validation.maxLength"),
  biography: z.string().max(500, "error.validation.maxLength").optional()
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>
```

For schemas depending on runtime data, export a schema factory and memoize its result in the hook when necessary. Include every dependency in the memo dependency list.

## Hook setup and validation

Create the form in `use{ComponentName}`. Supply typed default values for every controlled field, connect the schema resolver, and follow the repository's validation mode (commonly `onTouched`). Use `handleSubmit` as the boundary that guarantees submitted values passed validation.

```ts
const profileForm = useForm<ProfileFormValues>({
  resolver: zodResolver(profileFormSchema),
  defaultValues: {
    displayName: params.defaultValues?.displayName ?? "",
    biography: params.defaultValues?.biography ?? ""
  },
  mode: "onTouched",
  errors: params.errors
})

const onSubmit = profileForm.handleSubmit(params.onSubmit)

return {
  form: profileForm,
  state: {
    isSubmitting: profileForm.formState.isSubmitting
  },
  functions: {
    onSubmit
  }
}
```

Keep validation in the schema; do not duplicate it in JSX.

## Arrays

Manage an array of objects with `useFieldArray`, expose its operations through the hook contract (for example, a `fields` group), and derive remove-button visibility from the schema's minimum number of rows.
