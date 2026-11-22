---
name: createContext
category: Helpers
usage: high
---

# createContext

Creates a typed context with provider and selector hook.

## Usage

```ts
import { createContext } from "@siberiacancode/reactuse";

const context = createContext(0);
```

## Example

```tsx
import { createContext } from "@siberiacancode/reactuse";
import type { ReactNode } from "react";

const themeContext = createContext("light");

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <themeContext.Provider initialValue="light">{children}</themeContext.Provider>
);

export const CounterValue = () => {
  const theme = ThemeContext.useSelect((value) => value);
  return <span>{theme}</span>;
};
```

`defaultValue`:

```tsx
const CounterContext = createContext(0);
```

`name`:

Debug display name.

```tsx
const CounterContext = createContext(0, { name: "CounterContext" });
```

`strict`:

Throw outside provider.

```tsx
const CounterContext = createContext(0, { strict: true });
```

## Type Declarations

```ts
import type { JSX, ReactNode } from "react";

export interface CreateContextOptions {
  name?: string;
  strict?: boolean;
}
export interface ContextValue<Value> {
  value: Value | undefined;
  set: (value: Value) => void;
}
export interface ProviderProps<Value> {
  children?: ReactNode;
  initialValue?: Value;
}
export interface CreateContextReturn<Value> {
  instance: React.Context<ContextValue<Value>>;
  Provider: (props: ProviderProps<Value>) => JSX.Element;
  useSelect: {
    <Selected>(selector: (value: Value) => Selected): Selected;
    (): ContextValue<Value>;
  };
}
export declare const createContext: <Value>(
  defaultValue?: Value,
  options?: CreateContextOptions
) => CreateContextReturn<Value>;
```
