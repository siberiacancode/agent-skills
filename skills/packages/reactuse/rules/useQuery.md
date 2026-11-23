---
name: useQuery
category: Async
usage: high
---

# useQuery

Wraps an abortable async read in query state so components can express loading, refresh, retry, cancellation, and selected data without hand-rolling request bookkeeping.

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
const query = useQuery(fetchUser, { placeholderData: { name: "Loading..." } });
```

`refetchInterval`:

Use a number to refetch on a fixed interval.

```tsx
const query = useQuery(fetchStats, { refetchInterval: 5000 });
```

Use a function to choose the interval dynamically or return `false`.

```tsx
const query = useQuery(fetchStats, {
  refetchInterval: () => (document.hidden ? false : 5000),
});
```

`retry`:

Use a number for a fixed retry count.

```tsx
const query = useQuery(fetchUser, { retry: 3, retryDelay: 500 });
```

Use a function to decide whether each failed request should retry.

```tsx
const query = useQuery(fetchUser, {
  retry: (failureCount, error) => failureCount < 3 && error.message !== "401",
  retryDelay: 500,
});
```

`retryDelay`:

```tsx
const query = useQuery(fetchUser, { retry: 3, retryDelay: 500 });
```

`select`:

```tsx
const query = useQuery(fetchUser, {
  select: (data) => data.profile,
});
```

`onError`:

```tsx
const query = useQuery(fetchUser, {
  onError: (error) => toast.error(error.message),
});
```

`onSuccess`:

```tsx
const query = useQuery(fetchUser, {
  onSuccess: (user) => console.log(user.id),
});
```

## Type Declarations

```ts
import type { DependencyList } from "react";

export interface UseQueryOptions<QueryData, Data> {
  enabled?: boolean;
  keys?: DependencyList;
  placeholderData?: (() => Data) | Data;
  refetchInterval?: (() => number | false) | number | false;
  retry?: ((failureCount: number, error: Error) => boolean) | boolean | number;
  retryDelay?: number;
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
