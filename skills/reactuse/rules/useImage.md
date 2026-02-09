---
name: useImage
category: Elements
usage: low
---

# useImage

Loads an image with query-style state.

## Usage

```ts
import { useImage } from "@siberiacancode/reactuse";

const image = useImage("https://example.com/image.png");
```

## Example

`srcset`:

Source of the image.

```tsx
const image = useImage("/img.png", { srcset: "/img@2x.png 2x" });
```

`sizes`:

Sizes of the image.

```tsx
const image = useImage("/img.png", {
  sizes: "(max-width: 600px) 100vw, 600px",
});
```

`alt`:

Alt of the image.

```tsx
const image = useImage("/img.png", { alt: "Preview" });
```

`class`:

Class of the image.

```tsx
const image = useImage("/img.png", { class: "rounded" });
```

`loading`:

Loading of the image.

```tsx
const image = useImage("/img.png", { loading: "lazy" });
```

`crossorigin`:

Crossorigin of the image.

```tsx
const image = useImage("/img.png", { crossorigin: "anonymous" });
```

`referrerPolicy`:

Referrer policy of the image.

```tsx
const image = useImage("/img.png", { referrerPolicy: "no-referrer" });
```

`keys`:

Keys of the image.

```tsx
const image = useImage("/img.png", { keys: [theme] });
```

`onSuccess`:

On success callback.

```tsx
const image = useImage("/img.png", { onSuccess: (img) => console.log(img) });
```

`onError`:

On error callback.

```tsx
const image = useImage("/img.png", { onError: (err) => console.error(err) });
```

`refetchInterval`:

Refetch interval of the image.

```tsx
const image = useImage("/img.png", { refetchInterval: 5000 });
```

`retry`:

Retry count of the image.

```tsx
const image = useImage("/img.png", { retry: 2 });
```

## Type Declarations

```ts
import type { UseQueryOptions, UseQueryReturn } from "@siberiacancode/reactuse";

export interface UseImageOptions {
  alt?: string;
  class?: string;
  crossorigin?: string;
  loading?: HTMLImageElement["loading"];
  referrerPolicy?: HTMLImageElement["referrerPolicy"];
  sizes?: string;
  srcset?: string;
}
export type UseImageReturn = UseQueryReturn<HTMLImageElement>;
export declare const useImage: (
  src: string,
  options?: UseImageOptions &
    Omit<
      UseQueryOptions<HTMLImageElement, HTMLImageElement>,
      "initialData" | "placeholderData" | "select"
    >
) => UseImageReturn;
```
