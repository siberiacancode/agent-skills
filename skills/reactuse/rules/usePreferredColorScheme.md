---
name: usePreferredColorScheme
category: User
usage: medium
---

# usePreferredColorScheme

Returns the user's preferred color scheme.

## Usage

```ts
import { usePreferredColorScheme } from "@siberiacancode/reactuse";

const scheme = usePreferredColorScheme();
```

## Example

```tsx
const scheme = usePreferredColorScheme();
return <span>Scheme: {scheme}</span>;
```

## Type Declarations

```ts
export type UsePreferredColorSchemeReturn = "dark" | "light" | "no-preference";
export declare const usePreferredColorScheme: () => UsePreferredColorSchemeReturn;
```
