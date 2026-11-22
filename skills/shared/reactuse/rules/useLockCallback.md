---
name: useLockCallback
category: Async
usage: medium
---

# useLockCallback

Prevents a callback from running multiple times simultaneously.

## Usage

```ts
import { useLockCallback } from "@siberiacancode/reactuse";

const lockedSubmit = useLockCallback(async () => {
  await saveForm();
});
```

## Example

```tsx
import { useLockCallback } from "@siberiacancode/reactuse";

export const SaveButton = () => {
  const saveOnce = useLockCallback(async () => {
    await fetch("/api/save", { method: "POST" });
  });

  return <button onClick={saveOnce}>Save</button>;
};
```

## Type Declarations

```ts
export declare const useLockCallback: <
  Callback extends (...args: any[]) => any
>(
  callback: Callback
) => (...args: Parameters<Callback>) => Promise<any>;
```
