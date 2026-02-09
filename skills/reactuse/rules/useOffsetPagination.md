---
name: useOffsetPagination
category: State
usage: medium
---

# useOffsetPagination

Manages pagination state for offset-based lists.

## Usage

```ts
import { useOffsetPagination } from "@siberiacancode/reactuse";

const pagination = useOffsetPagination({ total: 100, initialPageSize: 10 });
```

## Example

```tsx
import { useOffsetPagination } from "@siberiacancode/reactuse";

export const Pager = () => {
  const pagination = useOffsetPagination({ total: 200, initialPageSize: 20 });

  return (
    <div>
      Page {pagination.page} of {pagination.pageCount}
      <button onClick={() => pagination.prev()}>Prev</button>
      <button onClick={() => pagination.next()}>Next</button>
    </div>
  );
};
```

`total`:

```tsx
const pagination = useOffsetPagination({ total: 200 });
```

`initialPageSize`:

```tsx
const pagination = useOffsetPagination({ initialPageSize: 20 });
```

`initialPage`:

```tsx
const pagination = useOffsetPagination({ initialPage: 2 });
```

`onChange`:

```tsx
const pagination = useOffsetPagination({
  onChange: ({ page, pageSize }) => console.log(page, pageSize),
});
```

## Type Declarations

```ts
export interface UseOffsetPaginationOptions {
  initialPage?: number;
  initialPageSize?: number;
  total?: number;
  onChange?: ({ page, pageSize }: { page: number; pageSize: number }) => void;
}
export interface UseOffsetPaginationReturn {
  isFirstPage: boolean;
  isLastPage: boolean;
  page: number;
  pageCount: number;
  pageSize: number;
  next: () => void;
  prev: () => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
}
export declare const useOffsetPagination: (
  options?: UseOffsetPaginationOptions
) => UseOffsetPaginationReturn;
```
