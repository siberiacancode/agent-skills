---
name: useUrlSearchParams
category: State
usage: high
---

# useUrlSearchParams

Syncs multiple URL search params with state.

## Usage

```ts
import { useUrlSearchParams } from "@siberiacancode/reactuse";

const params = useUrlSearchParams({ initialValue: { page: 1 } });
```

## Example

```tsx
import { useUrlSearchParams } from "@siberiacancode/reactuse";

export const SearchFilters = () => {
  const params = useUrlSearchParams({
    initialValue: { page: 1, q: "" },
  });

  return (
    <button onClick={() => params.set({ page: params.value.page + 1 })}>
      Page {params.value.page}
    </button>
  );
};
```

`initialValue`:

```tsx
const params = useUrlSearchParams({ initialValue: { page: 1, q: "" } });
params.set({ q: "react" });
```

`mode`:

```tsx
const params = useUrlSearchParams({
  mode: "hash",
  initialValue: { tab: "all" },
});
params.set({ tab: "open" });
```

`write`:

```tsx
const params = useUrlSearchParams({
  write: "push",
  initialValue: { page: 1 },
});
params.set({ page: 2 });
```

`deserializer`:

```tsx
const params = useUrlSearchParams({
  deserializer: (value) => JSON.parse(value) as number,
  initialValue: { page: 1 },
});
params.set({ page: 3 });
```

`serializer`:

```tsx
const params = useUrlSearchParams({
  serializer: (value) => JSON.stringify(value),
  initialValue: { page: 1 },
});
params.set({ page: 4 });
```

`set.write`:

```tsx
const params = useUrlSearchParams({ initialValue: { page: 1 } });
params.set({ page: 2 }, { write: "replace" });
```

## Type Declarations

```ts
export type UrlParams = Record<string, any>;
export type UrlSearchParamsMode = "hash-params" | "hash" | "history";
export interface UseUrlSearchParamsSetOptions {
  write?: "push" | "replace";
}
export type UseUrlSearchParamsInitialValue<Value> = (() => Value) | Value;
export interface UseUrlSearchParamsOptions<Value> {
  initialValue?: UseUrlSearchParamsInitialValue<
    string | URLSearchParams | Value
  >;
  mode?: UrlSearchParamsMode;
  write?: "push" | "replace";
  deserializer?: (value: string) => Value[keyof Value];
  serializer?: (value: Value[keyof Value]) => string;
}
export interface UseUrlSearchParamsReturn<Value> {
  value: Value;
  set: (value: Partial<Value>, options?: UseUrlSearchParamsSetOptions) => void;
}
export interface UseUrlSearchParams {
  <Value>(
    key: string,
    options: UseUrlSearchParamsOptions<Value> & {
      initialValue: UseUrlSearchParamsInitialValue<Value>;
    }
  ): UseUrlSearchParamsReturn<Value>;
  <Value>(options?: UseUrlSearchParamsOptions<Value>): UseUrlSearchParamsReturn<
    Value | undefined
  >;
  <Value>(
    initialValue: UseUrlSearchParamsInitialValue<Value>
  ): UseUrlSearchParamsReturn<Value>;
  <Value>(key: string): UseUrlSearchParamsReturn<Value | undefined>;
}
export declare const useUrlSearchParams: UseUrlSearchParams;
```
