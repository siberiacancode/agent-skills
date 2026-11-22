---
name: usePageLeave
category: Sensors
usage: low
---

# usePageLeave

Detects when the mouse leaves the page.

## Usage

```ts
import { usePageLeave } from "@siberiacancode/reactuse";

const left = usePageLeave();
```

## Example

```tsx
const left = usePageLeave();
return <div>{left ? "Leaving" : "Here"}</div>;
```

## Type Declarations

```ts
export declare const usePageLeave: (callback?: () => void) => boolean;
```
