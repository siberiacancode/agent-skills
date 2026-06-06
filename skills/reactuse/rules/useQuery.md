---
name: useQuery
category: Async
usage: high
---

# useQuery

Defines query logic with loading, error, success, and refetch state.

## Usage

```ts
import { useQuery } from "@siberiacancode/reactuse";

const query = useQuery(({ signal }) =>
  fetch("/api/user", { signal }).then((res) => res.json())
);
```

## Example

`enabled`:

```tsx
const query = useQuery(fetchUser, { enabled: isOpen });
```

`keys`:

```tsx
const query = useQuery(fetchUser, { keys: [userId] });
```

`placeholderData`:

```tsx
const query = useQuery(fetchUser, {
  placeholderData: { name: "Loading..." },
});
```

`refetchInterval`:

```tsx
const query = useQuery(fetchStats, { refetchInterval: 5000 });
```

`retry`:

```tsx
const query = useQuery(fetchUser, { retry: 2 });
```

`retryDelay`:

```tsx
const query = useQuery(fetchUser, {
  retryDelay: (attempt) => attempt * 300,
});
```

`onSuccess`:

```tsx
const query = useQuery(fetchUser, {
  onSuccess: (data) => console.log(data),
});
```

`onError`:

```tsx
const query = useQuery(fetchUser, {
  onError: (error) => console.error(error),
});
```

`select`:

```tsx
const query = useQuery(fetchUser, {
  select: (data) => data.profile,
});
```

## Notes

- The callback receives `{ signal, keys }` for cancellation and dependency awareness.
- Use `refetch()` for fire-and-forget reloads.
- Use `fetch()` when you need the same reload behavior but want a `Promise` you can `await`.

## Type Declarations

```ts
import type { DependencyList } from "react";

export interface UseQueryOptions<QueryData, Data> {
  enabled?: boolean;
  keys?: DependencyList;
  placeholderData?: (() => Data) | Data;
  refetchInterval?: number;
  retry?: boolean | number;
  retryDelay?: ((retry: number, error: Error) => number) | number;
  onError?: (error: Error) => void;
  onSuccess?: (data: Data) => void;
  select?: (data: QueryData) => Data;
}
interface UseQueryCallbackParams {
  keys: DependencyList;
  signal: AbortSignal;
}
export interface UseQueryReturn<Data> {
  abort: AbortController["abort"];
  data?: Data;
  error?: Error;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  isSuccess: boolean;
  fetch: () => Promise<void>;
  refetch: () => void;
}
export declare const useQuery: <QueryData, Data = QueryData>(
  callback: (params: UseQueryCallbackParams) => Promise<QueryData>,
  options?: UseQueryOptions<QueryData, Data>
) => UseQueryReturn<Data>;
```
