---
name: useMergedRef
category: State
usage: medium
---

# useMergedRef

Merges multiple refs into a single ref callback.

## Usage

```ts
import { useMergedRef } from "@siberiacancode/reactuse";

const ref = useMergedRef(firstRef, secondRef);
```

## Example

```tsx
import { useMergedRef } from "@siberiacancode/reactuse";
import { useRef } from "react";
import type { RefObject } from "react";

interface FocusInputProps {
  inputRef: RefObject<HTMLInputElement>;
}

export const FocusInput = ({ inputRef }: FocusInputProps) => {
  const localRef = useRef<HTMLInputElement | null>(null);
  const merged = useMergedRef(inputRef, localRef);

  return <input ref={merged} />;
};
```

## Type Declarations

```ts
import type { Ref, RefCallback } from "react";

export declare const useMergedRef: <Element>(
  ...refs: Ref<Element>[]
) => RefCallback<Element>;
```
