---
name: useDocumentEvent
category: Browser
usage: low
---

# useDocumentEvent

Attaches an event listener to the document.

## Usage

```ts
import { useDocumentEvent } from "@siberiacancode/reactuse";

useDocumentEvent("click", () => console.log("clicked"));
```

## Example

```tsx
useDocumentEvent("keydown", (event) => {
  if (event.key === "Escape") onClose();
});
```

`enabled`:

```tsx
useDocumentEvent("click", () => {}, { enabled: false });
```

## Type Declarations

```ts
import type { UseEventListenerOptions } from "@siberiacancode/reactuse";

export declare const useDocumentEvent: <Event extends keyof DocumentEventMap>(
  event: Event,
  listener: (this: Document, event: DocumentEventMap[Event]) => any,
  options?: UseEventListenerOptions
) => void;
```
