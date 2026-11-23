---
name: useImage
category: Elements
usage: low
---

# useImage

Loads an image in the browser and returns image-specific loading state.

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

`onSuccess`:

On success callback.

```tsx
const image = useImage("/img.png", {
  onSuccess: (img) => console.log(img.src),
});
```

`onError`:

On error callback.

```tsx
const image = useImage("/img.png", {
  onError: (err) => console.error(err.message),
});
```

## Notes

- Hook uses the [Image API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image).

## Type Declarations

```ts
export interface UseImageOptions {
  alt?: string;
  class?: string;
  crossorigin?: string;
  loading?: HTMLImageElement["loading"];
  referrerPolicy?: HTMLImageElement["referrerPolicy"];
  sizes?: string;
  srcset?: string;
  onError?: (error: Error) => void;
  onSuccess?: (data: HTMLImageElement) => void;
}
export interface UseImageReturn {
  error?: Error;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  value?: HTMLImageElement;
}
export declare const useImage: (
  src: string,
  options?: UseImageOptions
) => UseImageReturn;
```
