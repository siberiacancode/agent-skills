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

## Type Declarations

```ts
export declare const useDocumentVisibility: () => DocumentVisibilityState;
```
