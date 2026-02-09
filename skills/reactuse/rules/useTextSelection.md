---
name: useTextSelection
category: Sensors
usage: low
---

# useTextSelection

Tracks text selection details.

## Usage

```ts
import { useTextSelection } from "@siberiacancode/reactuse";

const selection = useTextSelection();
```

## Example

```tsx
import { useTextSelection } from "@siberiacancode/reactuse";

export const SelectedText = () => {
  const selection = useTextSelection();
  return (
    <span>
      {selection.text ? `Selected: ${selection.text}` : "Select text"}
    </span>
  );
};
```

## Notes

- Hook uses the [document.getSelection API](https://developer.mozilla.org/en-US/docs/Web/API/Document/getSelection).

## Type Declarations

```ts
export interface UseTextSelectionReturn {
  ranges: Range[];
  rects: DOMRect[];
  selection: Selection | null;
  text: string;
}
export declare const useTextSelection: () => UseTextSelectionReturn;
```
