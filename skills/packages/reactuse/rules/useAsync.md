---
name: useAsync
category: Async
usage: medium
---

# useAsync

Tracks loading, error, and data state for a promise-returning callback.

## Usage

```ts
import { useAsync } from "@siberiacancode/reactuse";

const userAsync = useAsync(
  () => fetch("/api/user").then((res) => res.json()),
  []
);
```

## Example

```tsx
const userAsync = useAsync<User>(
  () => fetch(`/api/me`).then((res) => res.json()),
  []
);

if (userAsync.isLoading || !userAsync.data) return <p>Loading...</p>;
if (userAsync.isError) return <p>Failed to load user.</p>;

return <div>User: {userAsync.data.name}</div>;
```

## Type Declarations

```ts
import type { DependencyList } from "react";

export interface UseAsyncReturn<Data> {
  data?: Data;
  error?: Error;
  isError: boolean;
  isLoading: boolean;
}
export declare const useAsync: <Data>(
  callback: () => Promise<Data>,
  deps?: DependencyList
) => UseAsyncReturn<Data>;
```
