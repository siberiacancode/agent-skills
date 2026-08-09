---
name: cn
category: Helpers
usage: high
---

# cn

Normalizes conditional class name input into the single string React expects for `className`.

## Usage

```ts
import { cn } from "@siberiacancode/reactuse";

const className = cn("button", active && "button-active", {
  "button-disabled": disabled,
});
```

## Example

```tsx
import { cn } from "@siberiacancode/reactuse";

export const Button = ({ active }: { active: boolean }) => {
  return (
    <button className={cn("button", { "button-active": active })}>Save</button>
  );
};
```

`values` as strings:

```tsx
const className = cn("button", "button-primary");
```

`values` as conditionals:

```tsx
const className = cn("button", disabled && "button-disabled");
```

`values` as arrays:

```tsx
const className = cn(["button", ["button-primary"]]);
```

`values` as objects:

```tsx
const className = cn({ "button-active": active });
```

## Type Declarations

```ts
export type ClassDictionary = Record<string, any>;
export type ClassArray = readonly ClassValue[];
export type ClassValue =
  | boolean
  | number
  | string
  | ClassArray
  | ClassDictionary
  | null
  | undefined;
export declare const cn: (...values: ClassValue[]) => string;
```
