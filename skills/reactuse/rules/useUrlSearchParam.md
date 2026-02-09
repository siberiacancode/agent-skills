---
name: useUrlSearchParam
category: State
usage: high
---

# useUrlSearchParam

Syncs a single URL search param with state.

## Usage

```ts
import { useUrlSearchParam } from "@siberiacancode/reactuse";

const param = useUrlSearchParam("page", { initialValue: 1 });
```

## Example

```tsx
import { useUrlSearchParam } from "@siberiacancode/reactuse";

export const PageParam = () => {
  const param = useUrlSearchParam("page", { initialValue: 1 });

  return (
    <button onClick={() => param.set((param.value ?? 1) + 1)}>
      Page {param.value ?? 1}
    </button>
  );
};
```

`initialValue`:

```tsx
const param = useUrlSearchParam("page", { initialValue: 1 });
```

`mode`:

```tsx
const param = useUrlSearchParam("page", { mode: "hash" });
```

`write`:

```tsx
const param = useUrlSearchParam("page", { write: "push" });
```

`deserializer`:

```tsx
const param = useUrlSearchParam("page", {
  deserializer: (value) => Number(value),
});
```

`serializer`:

```tsx
const param = useUrlSearchParam("page", {
  serializer: (value) => String(value),
});
```

## Type Declarations

```ts
export type UrlSearchParamMode = "hash-params" | "hash" | "history";
export interface UseUrlSearchParamOptions<Value> {
  initialValue?: Value;
  mode?: UrlSearchParamMode;
  write?: "push" | "replace";
  deserializer?: (value: string) => Value;
  serializer?: (value: Value) => string;
}
export interface UseUrlSearchParamsActionOptions {
  write?: "push" | "replace";
}
export interface UseUrlSearchParamReturn<Value> {
  value: Value | undefined;
  remove: (options?: UseUrlSearchParamsActionOptions) => void;
  set: (value: Value, options?: UseUrlSearchParamsActionOptions) => void;
}
export interface UseUrlSearchParam {
  <Value>(
    key: string,
    options: UseUrlSearchParamOptions<Value> & { initialValue: Value }
  ): UseUrlSearchParamReturn<Value>;
  <Value>(
    key: string,
    options?: UseUrlSearchParamOptions<Value>
  ): UseUrlSearchParamReturn<Value | undefined>;
  <Value>(key: string, initialValue: Value): UseUrlSearchParamReturn<Value>;
  <Value>(key: string): UseUrlSearchParamReturn<Value | undefined>;
}
export declare const useUrlSearchParam: UseUrlSearchParam;
```
