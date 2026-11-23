---
name: useMediaQuery
category: Browser
usage: medium
---

# useMediaQuery

Returns whether a media query matches.

## Usage

```ts
import { useMediaQuery } from "@siberiacancode/reactuse";

const matches = useMediaQuery("(max-width: 768px)");
```

## Example

```tsx
import { useMediaQuery } from "@siberiacancode/reactuse";

export const MobileOnly = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <div>Mobile layout</div> : <div>Desktop layout</div>;
};
```

## Notes

- Hook uses the [matchMedia API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

## Type Declarations

```ts
export declare const useMediaQuery: (query: string) => boolean;
```
