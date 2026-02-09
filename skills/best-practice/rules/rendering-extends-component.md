# Scalable components

When building React components, extend HTML element props to inherit all native attributes. This keeps components flexible and easy to scale:

```tsx
import type { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  ...
}

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => (
  <button className={variant} {...props}>
    {children}
  </button>
);

export const App = () => (
  <Button
    variant="secondary"
    onClick={() => console.log("clicked")}
  >
    Close
  </Button>
);
```

This way you create the component once and avoid updating types every time a new HTML attribute is needed. Keep prop types close to the component and make them simple and obvious.
