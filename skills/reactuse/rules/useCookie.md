---
name: useCookie
category: State
usage: medium
---

# useCookie

Reads and writes a cookie value.

## Usage

```ts
import { useCookie } from "@siberiacancode/reactuse";

const cookie = useCookie("theme", "");
```

## Example

```tsx
const themeCookie = useCookie<"light" | "dark">("theme", {
  initialValue: "light",
});

return (
  <button
    onClick={() =>
      themeCookie.set(themeCookie.value === "light" ? "dark" : "light")
    }
  >
    Theme: {themeCookie.value}
  </button>
);
```

`domain`:

```tsx
const cookie = useCookie("theme", { domain: ".example.com" });
```

`expires`:

```tsx
const cookie = useCookie("theme", { expires: new Date(Date.now() + 86400000) });
```

`httpOnly`:

```tsx
const cookie = useCookie("theme", { httpOnly: true });
```

`initialValue`:

```tsx
const cookie = useCookie("theme", { initialValue: "" });
```

`maxAge`:

```tsx
const cookie = useCookie("theme", { maxAge: 3600 });
```

`path`:

```tsx
const cookie = useCookie("theme", { path: "/" });
```

`sameSite`:

```tsx
const cookie = useCookie("theme", { sameSite: "Lax" });
```

`secure`:

```tsx
const cookie = useCookie("theme", { secure: true });
```

`deserializer`:

```tsx
const cookie = useCookie("user", {
  deserializer: (value) => JSON.parse(value),
});
```

`serializer`:

```tsx
const cookie = useCookie("user", {
  serializer: (value) => JSON.stringify(value),
});
```

## Type Declarations

```ts
export interface RemoveCookieParams {
  domain?: string;
  expires?: Date;
  maxAge?: number;
  path?: string;
  sameSite?: "Lax" | "None" | "Strict";
  secure?: boolean;
}
export interface SetCookieParams {
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  maxAge?: number;
  path?: string;
  sameSite?: "Lax" | "None" | "Strict";
  secure?: boolean;
}
export type UseCookieInitialValue<Value> = (() => Value) | Value;
export interface UseCookieOptions<Value> {
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  initialValue?: UseCookieInitialValue<Value>;
  maxAge?: number;
  path?: string;
  sameSite?: "Lax" | "None" | "Strict";
  secure?: boolean;
  deserializer?: (value: string) => Value;
  serializer?: (value: Value) => string;
}
export interface UseCookieReturn<Value> {
  value: Value;
  remove: (options?: RemoveCookieParams) => void;
  set: (value: Value, options?: SetCookieParams) => void;
}
export interface UseCookie {
  <Value>(
    key: string,
    options: UseCookieOptions<Value> & {
      initialValue: UseCookieInitialValue<Value>;
    }
  ): UseCookieReturn<Value>;
  <Value>(key: string, options?: UseCookieOptions<Value>): UseCookieReturn<
    Value | undefined
  >;
  <Value>(
    key: string,
    initialValue: UseCookieInitialValue<Value>
  ): UseCookieReturn<Value>;
  <Value>(key: string): UseCookieReturn<Value | undefined>;
}
export declare const useCookie: UseCookie;
```
