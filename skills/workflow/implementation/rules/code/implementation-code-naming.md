---
title: Naming conventions
impact: MEDIUM
impactDescription: consistent domain-oriented names that make frontend code easier to understand and search
tags: frontend, naming, TypeScript, React
---

# Naming

Prefer domain language already used by the API, models, and neighboring features. A name should reveal the value's role without requiring its implementation to be read.

## Conventions

- React components and their files use `PascalCase`: `ComponentForm` and `ComponentForm.tsx`.
- A component's feature hook is named `use{ComponentName}`: `ComponentForm` uses `useComponentForm`.
- Hook parameter object types use `Use{FeatureName}Params`: `UseComponentFormParams`.
- Props types use `{ComponentName}Props`: `ComponentFormProps`.
- Compile-time and configuration constants use `SNAKE_CASE`: `MAX_DESCRIPTION_LENGTH`, `DEFAULT_FORM_VALUES`, `ROLE_OPTIONS`.
- Runtime variables and functions use `camelCase`.
- Booleans read as predicates: `isSubmitting`, `hasErrors`, `canEdit`, `showRemoveButton`.
- Prefer positive boolean names so callers usually do not need to negate them: use `isExists` instead of `!isMissing` when the common condition checks that the value exists.

When a variable represents a typed domain value, repeat the type's domain name where practical.

```ts
const component = getComponent()
const componentFormValues: ComponentFormValues = form.getValues()
const selectedExpert: Expert | undefined = experts.find((expert) => expert.isSelected)
```
