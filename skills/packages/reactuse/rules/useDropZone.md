---
name: useDropZone
category: Elements
usage: medium
---

# useDropZone

Creates a drag-and-drop area with file state.

## Usage

```ts
import { useDropZone } from "@siberiacancode/reactuse";

const dropZone = useDropZone<HTMLDivElement>();
// or
const dropZone = useDropZone(ref, { multiple: true });
```

## Example

```tsx
import { useDropZone } from "@siberiacancode/reactuse";

export const AvatarDrop = () => {
  const dropZone = useDropZone<HTMLDivElement>({
    dataTypes: ["image/jpeg", "image/png"],
    multiple: false,
    onDrop: (files) => console.log("files", files),
  });
  const ref = dropZone.ref;

  return (
    <div ref={ref}>
      {dropZone.overed ? "Drop now" : "Drag image here"}
      <div>Files: {dropZone.files?.length ?? 0}</div>
    </div>
  );
};
```

`dataTypes`:

Allowed types.

```tsx
const dropZone = useDropZone<HTMLDivElement>({ dataTypes: ["image/jpeg"] });
```

`multiple`:

Allow multiple.

```tsx
const dropZone = useDropZone<HTMLDivElement>({ multiple: false });
```

`onDrop`:

Handle drop.

```tsx
const dropZone = useDropZone<HTMLDivElement>({
  onDrop: (files) => console.log(files?.length ?? 0),
});
```

`onEnter`:

Drag enter.

```tsx
const dropZone = useDropZone<HTMLDivElement>({
  onEnter: () => console.log("enter"),
});
```

`onLeave`:

Drag leave.

```tsx
const dropZone = useDropZone<HTMLDivElement>({
  onLeave: () => console.log("leave"),
});
```

`onOver`:

Drag over.

```tsx
const dropZone = useDropZone<HTMLDivElement>({
  onOver: () => console.log("over"),
});
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type DropZoneDataTypes = ((types: string[]) => boolean) | string[];
export interface UseDropZoneOptions {
  dataTypes?: DropZoneDataTypes;
  multiple?: boolean;
  onDrop?: (files: File[] | null, event: DragEvent) => void;
  onEnter?: (event: DragEvent) => void;
  onLeave?: (event: DragEvent) => void;
  onOver?: (event: DragEvent) => void;
}
export interface UseDropZoneReturn {
  files: File[] | null;
  overed: boolean;
}
export interface UseDropZone {
  (
    target: HookTarget,
    callback?: (files: File[] | null, event: DragEvent) => void
  ): UseDropZoneReturn;
  <Target extends Element>(
    callback?: (files: File[] | null, event: DragEvent) => void,
    target?: never
  ): UseDropZoneReturn & { ref: StateRef<Target> };
  (target: HookTarget, options?: UseDropZoneOptions): UseDropZoneReturn;
  <Target extends Element>(
    options?: UseDropZoneOptions,
    target?: never
  ): UseDropZoneReturn & { ref: StateRef<Target> };
}
export declare const useDropZone: UseDropZone;
```
