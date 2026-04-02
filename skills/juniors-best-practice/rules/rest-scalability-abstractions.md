---
title: REST scalability via abstractions
impact: MEDIUM
tags: rest, architecture, javascript
---

# REST scalability via abstractions

Endpoint-specific helpers often look convenient at first, but they usually duplicate transport logic and become hard to scale.

```javascript
const getUser = async () => {
  const res = await fetch(`${BASE_URL}/user`);
  if (!res.ok) throw new Error("Failed to fetch");
  const json = await res.json();
  return json.data;
};
```

Keep transport concerns inside a reusable client, then expose thin endpoint functions.

```javascript
import { fetches } from "@siberiacancode/fetches";

const api = fetches.create({ baseUrl: "https://api.example.com" });

const getUser = (config) => api.get("/user", config);
const createUser = (body, config) => api.post("/user", body, config);
```

This keeps REST client code composable and avoids repeated error handling, typing, and request config plumbing.

You can also use [`apicraft`](https://github.com/siberiacancode/core/tree/main/packages/apicraft) to generate this structure, types, and client functions automatically.
