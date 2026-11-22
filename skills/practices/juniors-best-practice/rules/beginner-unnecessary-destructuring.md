---
title: Avoid unnecessary destructuring
impact: HIGH
tags: beginner, readability, javascript
---

# Avoid unnecessary destructuring

Developers often destructure values when it is not needed. This can create renaming friction and make the code harder to follow.

```tsx
import { useCounter } from "@siberiacancode/reactuse";

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  ...
};
```

The problem becomes obvious when you use multiple counters:

```tsx
const App = () => {
  const { count: userCount } = useCounter(0);
  const { count: postCount } = useCounter(0);

  ...
};
```

Keep the object intact and access properties explicitly:

```tsx
const App = () => {
  const userCounter = useCounter(0);
  const postCounter = useCounter(0);

  ...
};
```

This makes code more readable, avoids unnecessary renaming, and shows which entity each value belongs to.
