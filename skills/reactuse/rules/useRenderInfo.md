---
name: useRenderInfo
category: Debug
usage: low
---

# useRenderInfo

Provides render count and timing info, with optional logging.

## Usage

```ts
import { useRenderInfo } from "@siberiacancode/reactuse";

const info = useRenderInfo("Component");
```

## Example

`name` (custom component name):

```tsx
const info = useRenderInfo("ProfileCard");
return (
  <div>
    Renders: {info.renders}, Since last: {info.sinceLast}ms
  </div>
);
```

`log` (disable console output):

```tsx
const info = useRenderInfo("ProfileCard", false);
```

## Type Declarations

```ts
export interface UseRenderInfoReturn {
  component: string;
  renders: number;
  sinceLast: number;
  timestamp: number | null;
}
export declare const useRenderInfo: (
  name?: string,
  log?: boolean
) => UseRenderInfoReturn;
```
