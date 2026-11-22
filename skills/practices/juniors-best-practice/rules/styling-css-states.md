---
title: CSS selectors for component states
impact: MEDIUM
tags: styling, css, accessibility
---

# CSS selectors for component states

Most component states (disabled, hover, focus, loading) should be handled via CSS selectors. This keeps code simpler, more performant, and accessible. It also avoids extra classes or JavaScript handlers for state styling.

```tsx
import type { ComponentProps, ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => (
  <button className={styles.button} {...props}>
    {children}
  </button>
);
```

```css
/* Button.module.css */
.button {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #ccc;
}

.button:focus-visible {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}
```

CSS selectors handle element states automatically without additional JavaScript. This makes the code more performant, accessible, and easier to maintain.
