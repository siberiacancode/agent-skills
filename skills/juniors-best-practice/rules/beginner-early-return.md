---
title: Early return
impact: HIGH
tags: beginner, readability, javascript
---

# Early return

We often need to check several conditions before running the main logic. Deep nesting makes code harder to read:

```typescript
const init = () => {
  const rawAuthToken = localStorage.getItem("rawAuthToken");

  if (rawAuthToken) {
    const token = JSON.parse(rawAuthToken);

    if (token.user && token.user.id) {
      console.log(`✅ success #${token.user.id}`);
    }
  }
};
```

Early returns make code more predictable and easier to follow. Each check is explicit and you can see exactly why execution stops:

```typescript
const init = () => {
  const rawAuthToken = localStorage.getItem("rawAuthToken");

  if (!rawAuthToken) return;

  const token = JSON.parse(rawAuthToken);

  if (!token.user || !token.user.id) return;

  console.log(`✅ success #${token.user.id}`);
};
```
