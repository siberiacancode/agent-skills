---
name: useToggle
category: State
usage: high
---

# useToggle

A boolean switcher with utility functions.

## Usage

```ts
import { useToggle } from "@siberiacancode/reactuse";

const [on, toggle] = useToggle();
// or
const [value, toggle] = useToggle(["light", "dark"] as const);
```

```tsx
import { useToggle } from "@siberiacancode/reactuse";

export const Toggle = () => {
  const [value, toggle] = useToggle();

  return <button onClick={() => toggle()}>{String(value)}</button>;
};
```

Example in a component with array toggle:

```tsx
import { useToggle } from "@siberiacancode/reactuse";

export const UserTypeToggle = () => {
  const [type, toggle] = useToggle(["user", "admin"] as const);

  return <button onClick={() => toggle()}>Current: {userType}</button>;
};
```

## Type Declarations

```ts
export type ToggleFn = (value?: boolean) => void;
export type UseToggleReturn = [boolean, ToggleFn];
export declare const useToggle: (initialValue?: boolean): UseToggleReturn;
```
