---
name: useMutation
category: Async
usage: high
---

# useMutation

Defines mutation logic with loading, error, and success state.

## Usage

```ts
import { useMutation } from "@siberiacancode/reactuse";

const mutation = useMutation((name: string) => Promise.resolve(name));
```

## Example

`retry` (boolean or number of retries):

```tsx
const mutation = useMutation(saveProfile, { retry: 3 });
```

`retryDelay` (number or function):

```tsx
const mutation = useMutation(saveProfile, {
  retryDelay: (attempt) => attempt * 500,
});
```

`onSuccess` (side effect on success):

```tsx
const mutation = useMutation(saveProfile, {
  onSuccess: (data) => console.log("Saved", data),
});
```

`onError` (side effect on error):

```tsx
const mutation = useMutation(saveProfile, {
  onError: (error) => console.error(error),
});
```

## Type Declarations

```ts
interface UseMutationOptions<Data> {
  retry?: ((failureCount: number, error: Error) => boolean) | boolean | number;
  retryDelay?: ((retry: number, error: Error) => number) | number;
  onError?: (error: Error) => void;
  onSuccess?: (data: Data) => void;
}
interface UseMutationReturn<Body, Data> {
  data: Data | null;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  mutate: (body?: Body, options?: UseMutationOptions<Data>) => void;
  mutateAsync: (
    body?: Body,
    options?: UseMutationOptions<Data>
  ) => Promise<Data>;
}
export declare const useMutation: <Body, Data>(
  callback: (body: Body) => Promise<Data>,
  options?: UseMutationOptions<Data>
) => UseMutationReturn<Body, Data>;
```
