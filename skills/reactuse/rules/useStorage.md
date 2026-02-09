---
name: useStorage
category: State
usage: high
---

# useStorage

Manages a value in Web Storage.

## Usage

```ts
import { useStorage } from "@siberiacancode/reactuse";

const storage = useStorage("key", "value");
```

## Example

```tsx
import { useStorage } from "@siberiacancode/reactuse";

export const Preferences = () => {
  const prefs = useStorage("prefs", { theme: "light", density: "comfortable" });

  return (
    <button onClick={() => prefs.set({ ...prefs.value, theme: "dark" })}>
      Theme: {prefs.value.theme}
    </button>
  );
};
```

`initialValue`:

```tsx
const storage = useStorage("key", { initialValue: "value" });
storage.set("next");
```

`storage`:

```tsx
const storage = useStorage("wizard-step", { storage: sessionStorage });
storage.set(2);
```

`deserializer`:

```tsx
const storage = useStorage("settings", {
  deserializer: (value) => JSON.parse(value) as { compact: boolean },
});
storage.set({ compact: true });
```

`serializer`:

```tsx
const storage = useStorage("filters", {
  serializer: (value) => JSON.stringify(value),
});
storage.set({ query: "react" });
```

## Type Declarations

```ts
export type UseStorageInitialValue<Value> = (() => Value) | Value;
export interface UseStorageOptions<Value> {
  initialValue?: UseStorageInitialValue<Value>;
  storage?: Storage;
  deserializer?: (value: string) => Value;
  serializer?: (value: Value) => string;
}
export interface UseStorageReturn<Value> {
  value: Value;
  remove: () => void;
  set: (value: Value) => void;
}
export interface UseStorage {
  <Value>(key: string, options?: UseStorageOptions<Value>): UseStorageReturn<
    Value | undefined
  >;
  <Value>(
    key: string,
    initialValue?: UseStorageInitialValue<Value>
  ): UseStorageReturn<Value | undefined>;
}
export declare const useStorage: UseStorage;
```
