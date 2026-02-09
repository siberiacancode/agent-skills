---
name: useFileDialog
category: Elements
usage: low
---

# useFileDialog

Opens a file picker and returns selected files.

## Usage

```ts
import { useFileDialog } from "@siberiacancode/reactuse";

const dialog = useFileDialog();
```

## Example

```tsx
const dialog = useFileDialog({ accept: "image/*" });

return (
  <button onClick={() => dialog.open()}>
    Selected: {dialog.value?.length ?? 0}
  </button>
);
```

`multiple`:

```tsx
const dialog = useFileDialog({ multiple: false });
```

`accept`:

```tsx
const dialog = useFileDialog({ accept: "image/*" });
```

`reset`:

```tsx
const dialog = useFileDialog({ reset: true });
```

`capture`:

```tsx
const dialog = useFileDialog({ capture: "environment" });
```

## Type Declarations

```ts
import type { ComponentProps } from "react";

export interface UseFileDialogOptions
  extends Pick<ComponentProps<"input">, "accept" | "multiple"> {
  capture?: string;
  reset?: boolean;
}
export interface UseFileDialogReturn {
  value: FileList | null;
  open: (openParams?: UseFileDialogOptions) => void;
  reset: () => void;
}
export interface UseFileDialog {
  (
    callback?: (value: FileList | null) => void,
    options?: UseFileDialogOptions
  ): UseFileDialogReturn;
  (options?: UseFileDialogOptions, callback?: never): UseFileDialogReturn;
}
export declare const useFileDialog: UseFileDialog;
```
