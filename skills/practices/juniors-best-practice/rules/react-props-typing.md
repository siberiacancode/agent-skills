---
title: Props typing
impact: MEDIUM
tags: react, types, props
---

# Props typing

A simple, readable way to type React props is to define a `Props` type nearby and use it in the component signature: `props: Props`.

```tsx
...

type ButtonVariant = "primary" | "secondary";
interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: ButtonVariant;
  ...
}

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => (
    ...
```
