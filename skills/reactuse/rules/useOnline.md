---
name: useOnline
category: Browser
usage: medium
---

# useOnline

Returns whether the user is online.

## Usage

```ts
import { useOnline } from "@siberiacancode/reactuse";

const online = useOnline();
```

## Example

```tsx
import { useOnline } from "@siberiacancode/reactuse";

export const Status = () => {
  const online = useOnline();
  return (
    <div>
      {online ? "Online" : "Offline"}
      {!online && <div>Changes will sync when you reconnect.</div>}
    </div>
  );
};
```

## Notes

- Hook uses the [navigator.onLine API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine).

## Type Declarations

```ts
export declare const useOnline: () => boolean;
```
