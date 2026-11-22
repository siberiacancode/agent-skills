---
title: TypeScript path alias naming
impact: MEDIUM
tags: typescript, config, imports
---

# TypeScript path alias naming

When configuring TypeScript path mapping, avoid names that can conflict with existing libraries. Popular names like `@{module}` can collide with npm packages and cause unexpected resolution issues.

```json
{
  "compilerOptions": {
    "paths": {
      "@api/*": ["./src/api/*"],
      ...
    }
  }
}
```

```json
{
  "compilerOptions": {
    "paths": {
      "@/api/*": ["./src/api/*"],
      ...
    }
  }
}
```

Use prefixes with a special symbol and a slash that clearly indicate internal modules: `{~ || @ || # || project-name}/`. This avoids conflicts with external dependencies and keeps imports predictable.
