---
title: Classnames helper
impact: MEDIUM
tags: styling, css, classnames
---

# Classnames helper

When working with conditional CSS classes, building `className` strings by hand is hard to read and easy to break.

```tsx
import type { ComponentProps, ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  selected?: boolean;
  variant?: "primary" | "secondary";
  ...
}

const Button = ({ variant = "primary", selected = false, children, ...props }: ButtonProps) => (
  <button className={`${styles.button} ${styles[variant]} ${selected ? styles.selected : ""}`} {...props}>
    {children}
  </button>
);
```

Use a helper like `clsx` instead. The utility is simple, and you can implement it yourself if needed:

```tsx
import type { ComponentProps, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  selected?: boolean;
  variant?: "primary" | "secondary";
  ...
}

const Button = ({ variant = "primary", selected = false, children, ...props }: ButtonProps) => (
  <button className={clsx(styles.button, styles[variant], selected && styles.selected)} {...props}>
    {children}
  </button>
);
```

`clsx` ignores falsy values and handles spaces correctly, making the code declarative and easy to read.
