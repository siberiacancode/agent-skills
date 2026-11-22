---
name: useShare
category: Browser
usage: medium
---

# useShare

Triggers the native share dialog.

## Usage

```ts
import { useShare } from "@siberiacancode/reactuse";

const share = useShare();
```

## Example

```tsx
import { useShare } from "@siberiacancode/reactuse";

const share = useShare();
return (
  <button
    onClick={() =>
      share.trigger({
        title: "Design notes",
        text: "Check this out",
        url: "https://example.com",
      })
    }
    disabled={!share.supported}
  >
    Share
  </button>
);
```

`text`:

```tsx
const share = useShare({ text: "Hello" });
```

`title`:

```tsx
const share = useShare({ title: "Article" });
```

`url`:

```tsx
const share = useShare({ url: "https://example.com" });
```

`files`:

```tsx
const share = useShare({ files: [file] });
```

## Notes

- Hook uses the [navigator.share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share).

## Type Declarations

```ts
export interface UseShareParams {
  files?: File[];
  text?: string;
  title?: string;
  url?: string;
}
export interface UseShareReturn {
  supported: boolean;
  trigger: (shareParams: ShareData) => Promise<void>;
}
export declare const useShare: (params?: UseShareParams) => UseShareReturn;
```
