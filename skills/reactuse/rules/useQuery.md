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

`enabled` (skip initial fetch until true):

```tsx
const query = useQuery(fetchUser, { enabled: isOpen });
```

`keys` (re-run when dependencies change):

```tsx
const query = useQuery(fetchUser, { keys: [userId] });
```

`placeholderData` (initial UI data):

```tsx
const query = useQuery(fetchUser, {
  placeholderData: { name: "Loading..." },
});
```

`refetchInterval` (polling):

```tsx
const query = useQuery(fetchStats, { refetchInterval: 5000 });
```

`retry` (boolean or number of retries):

```tsx
const query = useQuery(fetchUser, { retry: 2 });
```

`retryDelay` (number or function):

```tsx
const query = useQuery(fetchUser, {
  retryDelay: (attempt) => attempt * 300,
});
```

`onSuccess` (side effect on success):

```tsx
const query = useQuery(fetchUser, {
  onSuccess: (data) => console.log(data),
});
```

`onError` (side effect on error):

```tsx
const query = useQuery(fetchUser, {
  onError: (error) => console.error(error),
});
```

`select` (transform data):

```tsx
const query = useQuery(fetchUser, {
  select: (data) => data.profile,
});
```

## Notes

- The callback receives `{ signal, keys }` for cancellation and dependency awareness.
- Use `refetch()` to manually refresh the data.

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
  refetch: () => void;
}
export declare const useQuery: <QueryData, Data = QueryData>(
  callback: (params: UseQueryCallbackParams) => Promise<QueryData>,
  options?: UseQueryOptions<QueryData, Data>
) => UseQueryReturn<Data>;
```
