---
title: Keep types discoverable and let TypeScript infer local values
impact: HIGH
impactDescription: provides a consistent global type surface while avoiding redundant annotations and type drift
tags: frontend, TypeScript, types, globals
---

# Types

Follow the project's established placement and declaration style for shared types.

When the project uses the root `@types` directory for project-wide global types, declare them with `declare global` and keep the declaration file a module with `export {}`.

```ts
// @types/project.ts
declare global {
  interface ProjectSummary {
    id: string
    name: string
  }

  type ProjectStatus = "active" | "archived"
}

export {}
```

Keep feature-only types next to their feature, and prefer generated API types when they already describe the contract. Do not make a type global merely to shorten an import.

Do not annotate variables when TypeScript can infer the type clearly from the initializer. Add an annotation when it documents a domain boundary, constrains a value, prevents an unwanted widening, or is required because the initializer does not provide enough information.

```ts
const projectName = formValues.projectName // inference is sufficient
const selectedProject = projects.find(isSelectedProject)
const statuses: ProjectStatus[] = ["active"]
```

Avoid redundant annotations such as `const count: number = 0` and do not use `any`; represent uncertainty with `unknown` and narrow it before use.
