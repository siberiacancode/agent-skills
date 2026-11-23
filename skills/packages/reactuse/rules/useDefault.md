---
name: useDefault
category: State
usage: medium
---

# useDefault

Returns a value or a provided default when nullish.

## Usage

```ts
import { useDefault } from "@siberiacancode/reactuse";

const [value, setValue] = useDefault("initial", "fallback");
```

## Example

```tsx
import { useDefault } from "@siberiacancode/reactuse";

interface TitleProps {
  value: string;
}

export const Title = ({ value }: TitleProps) => {
  const [text] = useDefault(value, "Untitled");
  return <span>{text}</span>;
};
```

`initialValue`:

```tsx
const [value, setValue] = useDefault("value", "fallback");
```

`defaultValue`:

```tsx
const [value, setValue] = useDefault(undefined, "fallback");
```

## Type Declarations

```ts
export declare const useDefault: <Value>(
  initialValue: (() => Value) | Value,
  defaultValue: Value
) => readonly [Value, (value: Value) => void];
```
