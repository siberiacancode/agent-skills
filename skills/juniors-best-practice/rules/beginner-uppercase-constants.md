---
title: Uppercase constants
impact: MEDIUM
tags: beginner, naming, constants
---

# Uppercase constants

UPPER_CASE helps visually distinguish values that are constant at the application level: configuration, keys, base URLs, timeouts, enum-like dictionaries. For computed values and temporary variables, use lowerCamelCase.

```ts
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT_MS = 5000;
const STORAGE_KEYS = { TOKEN: "token", THEME: "theme" } as const;
```

It is important to distinguish between a constant reference and a semantically constant value. An array declared with `const` can still change its contents, which is not a reason to name it in UPPER_CASE. Use UPPER_CASE for agreed, stable values, not for everything declared with `const`.

```ts
const ids = users.map((user) => user.id);
```
