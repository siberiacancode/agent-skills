---
title: REST naming from OpenAPI
impact: MEDIUM
tags: rest, openapi, typescript
---

# REST naming from OpenAPI

Avoid renaming entities and operations that already exist in OpenAPI. Extra naming layers create drift and force you to maintain duplicate contracts.

```typescript
// OpenAPI schema
interface User {
  id: string;
  name: string;
}

// Local duplicate
interface IUser {
  id: string;
  name: string;
}
```

Use schema names directly and derive function names from `operationId` or endpoint path.

```typescript
import { fetches } from "@siberiacancode/fetches";

// GET /users/{id}
// operationId: getUserById
const getUserById = (id: string) => fetches.get<User>(`/users/${id}`);
```

This removes double work, keeps generated and hand-written code aligned, and makes REST API clients easier to scan.

You can also use [`apicraft`](https://github.com/siberiacancode/core/tree/main/packages/apicraft) to generate this structure, types, and client functions automatically.
