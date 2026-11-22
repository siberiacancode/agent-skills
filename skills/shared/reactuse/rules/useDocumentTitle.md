---
name: useDocumentTitle
category: Browser
usage: low
---

# useDocumentTitle

Reads and updates the document title.

## Usage

```ts
import { useDocumentTitle } from "@siberiacancode/reactuse";

const title = useDocumentTitle("My App");
```

## Example

```tsx
import { useDocumentTitle } from "@siberiacancode/reactuse";

export const TitleEditor = () => {
  const title = useDocumentTitle("Dashboard");

  return (
    <input
      value={title.value}
      onChange={(event) => title.set(event.target.value)}
    />
  );
};
```

`initialValue`:

```tsx
const title = useDocumentTitle("Dashboard");
```

`restore`:

```tsx
const title = useDocumentTitle("Profile", { restore: true });
```

## Notes

- Hook uses the [document.title API](https://developer.mozilla.org/en-US/docs/Web/API/Document/title).

## Type Declarations

```ts
export interface UseDocumentTitleOptions {
  restore?: boolean;
}
export interface UseDocumentTitleReturn {
  value: string;
  set: (title: string) => void;
}
export declare function useDocumentTitle(
  initialValue?: string,
  options?: UseDocumentTitleOptions
): UseDocumentTitleReturn;
```
