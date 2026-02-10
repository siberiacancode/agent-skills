---
title: Children prop
impact: MEDIUM
tags: react, props, composition
---

# Children prop

When building React components, we often need to pass content into them. React provides the `children` prop for this, allowing any content between the opening and closing tags. This makes components more flexible and reusable.

```tsx
import type { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props}>{children}</button>
);

export const App = () => <Button>Click</Button>;
```

Remember that `children` is a regular prop, and you can restrict its typing like any other. For example, if a component should accept only text, use `children: string`.
