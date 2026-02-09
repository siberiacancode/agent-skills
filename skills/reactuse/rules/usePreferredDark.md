---
name: usePreferredDark
category: User
usage: medium
---

# usePreferredDark

Returns whether the user prefers dark mode.

## Usage

```ts
import { usePreferredDark } from "@siberiacancode/reactuse";

const isDark = usePreferredDark();
```

## Example

```tsx
const isDark = usePreferredDark();
return <div>{isDark ? "Dark mode" : "Light mode"}</div>;
```

## Type Declarations

```ts
export declare const usePreferredDark: () => boolean;
```
