---
name: createReactiveContext
category: Helpers
usage: low
---

# createReactiveContext

Creates a typed context selector with optimized updates.

## Usage

```ts
import { createReactiveContext } from "@siberiacancode/reactuse";

const context = createReactiveContext({ count: 0 });
```

## Example

```tsx
import { createReactiveContext } from "@siberiacancode/reactuse";
import type { ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
}

const userContext = createReactiveContext({ name: "", email: "" });

export const UserProvider = ({ children }: UserProviderProps) => (
  <userContext.Provider value={{ name: "Ada", email: "ada@example.com" }}>
    {children}
  </userContext.Provider>
);

export const UserLabel = () => {
  const name = userContext.useSelector((state) => state.name);
  return <span>{name}</span>;
};
```

`defaultValue`:

```tsx
const CounterContext = createReactiveContext({ count: 0 });
```

`name`:

Debug display name.

```tsx
const CounterContext = createReactiveContext(
  { count: 0 },
  { name: "CounterContext" }
);
```

`strict`:

Throw outside provider.

```tsx
const CounterContext = createReactiveContext({ count: 0 }, { strict: true });
```

## Notes

- For complex interfaces, prefer external state management instead of context.

## Type Declarations

```ts
import type { Context, Provider, RefObject } from "react";

export interface CreateReactiveContextOptions {
  name?: string;
  strict?: boolean;
}
export interface CreateReactiveContextReturn<Value> {
  instance: Context<ReactiveContextValue<Value>>;
  Provider: Provider<Value>;
  useSelector: <Selected>(selector?: (state: Value) => Selected) => Selected;
}
interface ReactiveContextValue<Value> {
  listeners: Set<(value: Value) => void>;
  value: RefObject<Value>;
}
export declare const createReactiveContext: <Value extends Record<string, any>>(
  defaultValue?: Value,
  options?: CreateReactiveContextOptions
) => CreateReactiveContextReturn<Value>;
```
