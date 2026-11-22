---
name: useLocalStorage
category: State
usage: high
---

# useLocalStorage

Manages a value in localStorage.

## Usage

```ts
import { useLocalStorage } from "@siberiacancode/reactuse";

const storage = useLocalStorage("key", "value");
```

## Example

```tsx
import { useLocalStorage } from "@siberiacancode/reactuse";

export const DraftNote = () => {
  const draft = useLocalStorage("draft-note", "");

  return (
    <textarea
      value={draft.value}
      onChange={(event) => draft.set(event.target.value)}
      placeholder="Type your note..."
    />
  );
};
```

`initialValue`:

```tsx
const storage = useLocalStorage("key", "value");
storage.set("next");
```

`deserializer`:

```tsx
const storage = useLocalStorage(
  "settings",
  { compact: false },
  {
    deserializer: (value) => JSON.parse(value) as { compact: boolean },
  }
);
storage.set({ compact: true });
```

`serializer`:

```tsx
const storage = useLocalStorage(
  "filters",
  { query: "" },
  {
    serializer: (value) => JSON.stringify(value),
  }
);
storage.set({ query: "react" });
```

## Notes

- Hook uses the [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Type Declarations

```ts
import type {
  UseStorageInitialValue,
  UseStorageOptions,
} from "@siberiacancode/reactuse";

export declare const useLocalStorage: <Value>(
  key: string,
  initialValue?: UseStorageInitialValue<Value>,
  options?: Omit<UseStorageOptions<Value>, "initialValue" | "storage">
) => {
  value: Value;
  set: (value: Value) => void;
  remove: () => void;
};
```
