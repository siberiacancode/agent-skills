---
name: useClipboard
category: Browser
usage: medium
---

# useClipboard

Reads and copies text from the clipboard.

## Usage

```ts
import { useClipboard } from "@siberiacancode/reactuse";

const clipboard = useClipboard();
```

## Example

Copy button:

```tsx
const clipboard = useClipboard();

return (
  <button onClick={() => clipboard.copy("team@example.com")}>
    {clipboard.value ?? "Copy email"}
  </button>
);
```

`enabled` (track copy/cut events):

```tsx
const clipboard = useClipboard({ enabled: true });
```

## Notes

- Hook uses the [navigator.clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard).

## Type Declarations

```ts
export interface UseCopyToClipboardReturn {
  value: string | null;
  copy: (value: string) => Promise<void>;
}
export interface UseCopyToClipboardParams {
  enabled: boolean;
}
export declare const useClipboard: (
  params?: UseCopyToClipboardParams
) => UseCopyToClipboardReturn;
```
