---
title: React string props
impact: MEDIUM
tags: react, jsx, props
---

# React string props

React props are flexible and let us compute values. When passing a plain string, JSX does not need curly braces:

```tsx
<Component title={"Title"} />
```

In this case, the braces are unnecessary.

```tsx
<Component title="Title" />
```

Use braces only when you need JavaScript expressions:

```tsx
const APP_NAME = "siberiacancode";

export const App = () => <Component title={`${APP_NAME} title`} />;
```
