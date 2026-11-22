---
name: useDocumentVisibility
category: Browser
usage: low
---

# useDocumentVisibility

Returns the document visibility state.

## Usage

```ts
import { useDocumentVisibility } from "@siberiacancode/reactuse";

const documentVisibility = useDocumentVisibility();
```

## Example

```tsx
const documentVisibility = useDocumentVisibility();
return <div>{documentVisibility === "hidden" ? "Hidden" : "Visible"}</div>;
```

`callback`:

```tsx
const documentVisibility = useDocumentVisibility((state) => {
  if (state === "hidden") console.log("user left tab");
});
```

## Type Declarations

```ts
export declare const useDocumentVisibility: (
  callback?: (state: DocumentVisibilityState) => void
) => DocumentVisibilityState;
```
