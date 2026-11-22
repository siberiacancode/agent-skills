---
name: usePreferredContrast
category: User
usage: medium
---

# usePreferredContrast

Returns the user's contrast preference.

## Usage

```ts
import { usePreferredContrast } from "@siberiacancode/reactuse";

const contrast = usePreferredContrast();
```

## Example

```tsx
import { usePreferredContrast } from "@siberiacancode/reactuse";

const contrast = usePreferredContrast();
return <span>Contrast: {contrast}</span>;
```

## Type Declarations

```ts
export type UsePreferredContrastReturn =
  | "custom"
  | "less"
  | "more"
  | "no-preference";
export declare const usePreferredContrast: () => UsePreferredContrastReturn;
```
