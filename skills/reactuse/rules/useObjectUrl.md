---
name: useObjectUrl
category: Browser
usage: low
---

# useObjectUrl

Hook that creates and revokes an object URL for a Blob or MediaSource.

## Usage

```ts
import { useObjectUrl } from "@siberiacancode/reactuse";

const { value } = useObjectUrl(blob);
```

## Example

```tsx
import { useObjectUrl } from "@siberiacancode/reactuse";

interface PreviewProps {
  blob: Blob;
}

export const Preview = ({ blob }: PreviewProps) => {
  const objectUrl = useObjectUrl(blob);
  return <img src={objectUrl.value} alt="" />;
};
```

## Notes

- Hook uses the [URL.createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL).

## Type Declarations

```ts
export interface UseObjectUrlReturn {
  value?: string;
  revoke: () => void;
  set: (object: Blob | MediaSource) => void;
}
export declare const useObjectUrl: <
  Value extends Blob | MediaSource | undefined
>(
  object?: Value
) => UseObjectUrlReturn;
```
