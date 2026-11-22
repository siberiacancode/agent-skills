---
name: useSessionStorage
category: State
usage: medium
---

# useSessionStorage

Manages a value in sessionStorage.

## Usage

```ts
import { useSessionStorage } from "@siberiacancode/reactuse";

const storage = useSessionStorage("key", "value");
```

## Example

```tsx
import { useSessionStorage } from "@siberiacancode/reactuse";

export const CheckoutStep = () => {
  const step = useSessionStorage("checkout-step", 1);

  return (
    <button onClick={() => step.set(step.value + 1)}>Step {step.value}</button>
  );
};
```

`initialValue`:

```tsx
const storage = useSessionStorage("key", "value");
storage.set("next");
```

`deserializer`:

```tsx
const storage = useSessionStorage(
  "user",
  { name: "" },
  {
    deserializer: (value) => JSON.parse(value) as { name: string },
  }
);
storage.set({ name: "Ada" });
```

`serializer`:

```tsx
const storage = useSessionStorage(
  "filters",
  { query: "" },
  {
    serializer: (value) => JSON.stringify(value),
  }
);
storage.set({ query: "design" });
```

## Notes

- Hook uses the [sessionStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

## Type Declarations

```ts
import type {
  UseStorageInitialValue,
  UseStorageOptions,
} from "@siberiacancode/reactuse";

export declare const useSessionStorage: <Value>(
  key: string,
  initialValue?: UseStorageInitialValue<Value>,
  options?: Omit<UseStorageOptions<Value>, "initialValue" | "storage">
) => {
  value: Value;
  set: (value: Value) => void;
  remove: () => void;
};
```
