---
name: useCookies
category: State
usage: medium
---

# useCookies

Manages all cookies as a single object.

## Usage

```ts
import { useCookies } from "@siberiacancode/reactuse";

const cookies = useCookies();
```

## Example

```tsx
const cookies = useCookies<{ theme: string }>();

return (
  <button onClick={() => cookies.set("theme", "dark")}>
    Theme: {cookies.value.theme ?? "none"}
  </button>
);
```

`deserializer`:

```tsx
const cookies = useCookies({
  deserializer: (value) => JSON.parse(value),
});
```

`serializer`:

```tsx
const cookies = useCookies({
  serializer: (value) => JSON.stringify(value),
});
```

## Type Declarations

```ts
export type CookieParams = Record<string, any>;
export interface UseCookiesOptions<Value> {
  deserializer?: (value: string) => Value[keyof Value];
  serializer?: (value: Value[keyof Value]) => string;
}
export declare const useCookies: <Value extends CookieParams>(
  options?: UseCookiesOptions<Value>
) => {
  value: Value;
  set: <Key extends keyof Value>(
    key: Key,
    value: Value[Key],
    options?: SetCookieParams
  ) => void;
  remove: <Key extends keyof Value>(
    key: Key,
    options?: RemoveCookieParams
  ) => void;
  getAll: () => Value;
  clear: () => void;
};
```
