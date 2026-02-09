---
name: useCopy
category: Browser
usage: medium
---

# useCopy

Copies text and resets status after a delay.

## Usage

```ts
import { useCopy } from "@siberiacancode/reactuse";

const copyState = useCopy();
```

## Example

```tsx
const linkCopy = useCopy(1500);

return (
  <button onClick={() => linkCopy.copy("https://reactuse.org")}>
    {linkCopy.copied ? "Copied!" : "Copy link"}
  </button>
);
```

`delay` (reset timeout):

```tsx
const copyState = useCopy(2000);
```

## Notes

- Hook uses the [navigator.clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard).

## Type Declarations

```ts
export interface UseCopyReturn {
  copied: boolean;
  value?: string;
  copy: (value: string) => Promise<void>;
}
export declare const useCopy: (delay?: number) => UseCopyReturn;
```
