---
name: usePreferredReducedMotion
category: User
usage: low
---

# usePreferredReducedMotion

Returns the reduced motion preference.

## Usage

```ts
import { usePreferredReducedMotion } from "@siberiacancode/reactuse";

const reduced = usePreferredReducedMotion();
```

## Example

```tsx
const reduced = usePreferredReducedMotion();
return <span>Motion: {reduced}</span>;
```

## Type Declarations

```ts
export type UsePreferredReducedMotionReturn = "no-preference" | "reduce";
export declare const usePreferredReducedMotion: () => UsePreferredReducedMotionReturn;
```
