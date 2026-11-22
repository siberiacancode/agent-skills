---
title: ?? vs ||
impact: MEDIUM
tags: beginner, operators, defaults
---

# ?? vs ||

When setting default values we often use `||`, but it can produce unexpected results. JavaScript provides a more precise operator, `??` (nullish coalescing), which only treats `null` and `undefined` as missing:

```typescript
const config = {
  port: 0,
  debug: false,
  cache: null,
};

const portNullish = config.port ?? 3000; // 0
const portOr = config.port || 3000; // 3000

const debugNullish = config.debug ?? true; // false
const debugOr = config.debug || true; // true

const cacheNullish = config.cache ?? "memory"; // "memory"
const cacheOr = config.cache || "memory"; // "memory"
```

The `||` operator treats the following values as falsy: false, 0, "", null, undefined, NaN. The `??` operator only checks for null and undefined. Prefer `??` when you need to distinguish "no value" from valid values like 0, false, or an empty string.
