---
title: Model API mocks by route and meaningful data
impact: HIGH
impactDescription: keeps mocked flows realistic, discoverable, and consistent across related endpoints
tags: frontend, mock, api, fixtures, database
---

# Mock files

Organize API mock handlers under `mock/requests` by the request URL. Repeat URL path in directories, use `{paramName}` for path parameters, and name the file after the HTTP method: `get.ts`, `post.ts`, `put.ts`, `patch.ts`, or `delete.ts`.

For example, map `GET /catalog/api/v2/components/:componentId/exemplars` to:

```text
mock/requests/catalog/api/v2/components/{componentId}/exemplars/get.ts
```

Keep response fixtures and request-specific error cases close to request file.

## Smart mocks

A mock should reproduce the behavior a screen relies on, not only return a static payload. Inspect request path parameters, query parameters, and body; then return typed data, filtering, sorting, pagination, validation errors, and relevant HTTP statuses.

```ts
export const getCatalogComponents = rest.get("/catalog/api/v2/components", ({ request }) => {
  const nameLike = typeof request.query.nameLike === "string" ? request.query.nameLike.trim().toLowerCase() : undefined
  const components = nameLike
    ? DATABASE.COMPONENTS.filter((component) => component.fullName.toLowerCase().includes(nameLike))
    : DATABASE.COMPONENTS

  return {
    components,
    total: { size: components.length }
  } satisfies GetCatalogComponentsResponseData
})
```

## Shared database

Move data into `mock/database` (or the project's equivalent data directory) when several endpoints read or update the same entity, or when entities have relations that must stay consistent. Export the collections through `DATABASE` and make handlers query or mutate it instead of copying equivalent fixtures into each response.

Model relations with stable identifiers. Here `tasks` refer to their owning project, so a project request and a task request use the same source of truth:

```ts
// mock/database/projects.ts
export const PROJECTS = [{ id: "project-1", name: "Payments" }]

// mock/database/tasks.ts
export const TASKS = [{ id: "task-1", projectId: "project-1", title: "Configure API" }]

// mock/database/index.ts
export const DATABASE = { PROJECTS, TASKS }

// mock/requests/api/projects/{projectId}/tasks/get.ts
export const getProjectTasks = rest.get("/api/projects/:projectId/tasks", ({ request }) =>
  DATABASE.TASKS.filter((task) => task.projectId === request.params.projectId)
)
```

This also works for one-to-many records, many-to-many link collections, and references between related entities. Keep a one-off static response beside its request when it is not shared and has no relationship to maintain.

## Scenarios

When the project's mock infrastructure supports scenarios under `/mock/scenarios`, add a scenario folder for a coherent user flow or API state, such as a successful payment, a validation error, or a polling timeout. A scenario groups the handlers and data that must work together, and is registered through the project's existing scenario configuration.

Keep each scenario self-contained while preserving the request-path structure inside it. Use a descriptive flow-oriented name and give each scenario its own related data when different responses must remain consistent. Do not add scenario infrastructure to a project that has no scenario mechanism or only needs a single static mock.
