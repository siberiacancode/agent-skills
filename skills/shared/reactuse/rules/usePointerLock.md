---
name: usePointerLock
category: Browser
usage: low
---

# usePointerLock

Provides reactive pointer lock controls.

## Usage

```ts
import { usePointerLock } from "@siberiacancode/reactuse";

const pointerLock = usePointerLock();
```

## Example

```tsx
import { usePointerLock } from "@siberiacancode/reactuse";

export const Canvas = () => {
  const pointer = usePointerLock();
  return <div onClick={pointer.lock}>Click to lock</div>;
};
```

## Notes

- Hook uses the [pointerLockElement API](https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerLockElement).

## Type Declarations

```ts
import type { MouseEvent } from "react";

interface UsePointerLockReturn {
  element?: Element;
  supported: boolean;
  lock: (event: MouseEvent) => void;
  unlock: () => boolean;
}
export declare const usePointerLock: () => UsePointerLockReturn;
```
