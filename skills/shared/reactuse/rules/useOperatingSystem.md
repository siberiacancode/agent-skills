---
name: useOperatingSystem
category: User
usage: low
---

# useOperatingSystem

Returns the user's operating system based on the user agent.

## Usage

```ts
import { useOperatingSystem } from "@siberiacancode/reactuse";

const os = useOperatingSystem();
```

## Example

```tsx
import { useOperatingSystem } from "@siberiacancode/reactuse";

export const OSBadge = () => {
  const os = useOperatingSystem();
  return <span>OS: {os}</span>;
};
```

## Type Declarations

```ts
export type OperatingSystem =
  | "android"
  | "ios"
  | "linux"
  | "macos"
  | "undetermined"
  | "windows";
export declare const useOperatingSystem: () => OperatingSystem;
```
