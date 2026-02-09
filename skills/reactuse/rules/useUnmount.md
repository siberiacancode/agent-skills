---
name: useUnmount
category: Lifecycle
usage: high
---

# useUnmount

Runs a callback when the component unmounts.

## Usage

```ts
import { useUnmount } from "@siberiacancode/reactuse";

useUnmount(() => console.log("unmounted"));
```

## Example

```tsx
import { useUnmount } from "@siberiacancode/reactuse";

export const Cleanup = () => {
  useUnmount(() => {
    console.log("cleanup");
  });

  return <div>Unmount me</div>;
};
```

## Type Declarations

```ts
export declare const useUnmount: (callback: () => void) => void;
```
