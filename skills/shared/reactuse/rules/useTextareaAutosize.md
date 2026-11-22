---
name: useTextareaAutosize
category: Elements
usage: medium
---

# useTextareaAutosize

Auto-resizes a textarea based on content.

## Usage

```ts
import { useTextareaAutosize } from "@siberiacancode/reactuse";

const textarea = useTextareaAutosize<HTMLTextAreaElement>();
// or
const textarea = useTextareaAutosize(ref);
```

## Example

```tsx
import { useTextareaAutosize } from "@siberiacancode/reactuse";

export const Notes = () => {
  const textarea = useTextareaAutosize<HTMLTextAreaElement>(
    "Write your thoughts..."
  );
  const ref = textarea.ref;

  return (
    <textarea
      ref={ref}
      value={textarea.value}
      onChange={(event) => textarea.set(event.target.value)}
    />
  );
};
```

`initialValue`:

Initial text.

```tsx
const textarea = useTextareaAutosize<HTMLTextAreaElement>("initial");
```

`onResize`:

Resize callback.

```tsx
const textarea = useTextareaAutosize<HTMLTextAreaElement>({
  onResize: () => console.log("resize"),
});
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseTextareaAutosizeOptions {
  initialValue?: string;
  onResize?: () => void;
}
export interface UseTextareaAutosizeReturn {
  value: string;
  clear: () => void;
  set: (value: string) => void;
}
export interface UseTextareaAutosize {
  (
    target: HookTarget,
    options?: UseTextareaAutosizeOptions
  ): UseTextareaAutosizeReturn;
  (target: HookTarget, initialValue: string): UseTextareaAutosizeReturn;
  <Target extends HTMLTextAreaElement = HTMLTextAreaElement>(
    initialValue: string,
    target?: never
  ): UseTextareaAutosizeReturn & { ref: StateRef<Target> };
  <Target extends HTMLTextAreaElement = HTMLTextAreaElement>(
    options?: UseTextareaAutosizeOptions,
    target?: never
  ): UseTextareaAutosizeReturn & { ref: StateRef<Target> };
}
export declare const useTextareaAutosize: UseTextareaAutosize;
```
