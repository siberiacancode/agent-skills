---
title: Keep components focused on UI composition
impact: HIGH
impactDescription: creates typed and readable component APIs while keeping business logic outside the presentation layer
tags: frontend, React, components, props, TypeScript
---

# Components

Components primarily compose and render UI. Put cohesive business and feature logic in the component hook described by [hooks](implementation-code-hooks.md), while leaving simple render-only derivations in the component when that is clearer.

Reuse a hook's exported params when the component directly forwards that contract.

```tsx
import type { UseComponentFormParams } from "./hooks"

interface ComponentFormProps extends UseComponentFormParams {
  action: "create" | "update"
}

export const ComponentForm = ({ action, ...params }: ComponentFormProps) => {
  const { state, form, functions } = useComponentForm(params)
  const isUpdateAction = action === "update"

  return (
    <form onSubmit={functions.onSubmit}>
      <Controller
        control={form.control}
        name="fullName"
        render={({ field, fieldState }) => (
          <TextInput {...field} disabled={isUpdateAction} error={fieldState.error?.message} />
        )}
      />
      <Button loading={state.isSubmitting} type="submit">
        Save
      </Button>
    </form>
  )
}
```

Pass a child the coherent hook contract it consumes instead of mirroring that contract into many flat props.
