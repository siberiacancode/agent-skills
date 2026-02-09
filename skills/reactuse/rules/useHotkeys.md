---
name: useHotkeys
category: Sensors
usage: medium
---

# useHotkeys

Listens for keyboard shortcuts.

## Usage

```ts
import { useHotkeys } from "@siberiacancode/reactuse";

const ref = useHotkeys<HTMLDivElement>("ctrl+k", () => console.log("hotkey"));
//or
useHotkeys(ref, "ctrl+k", () => console.log("hotkey"));
```

## Example

```tsx
const ref = useHotkeys<HTMLDivElement>("mod+k", () => console.log("hotkey"));

return <div ref={ref}>Open</div>;
```

`alias`:

```tsx
const ref = useHotkeys<HTMLDivElement>("mod+k", () => {}, {
  alias: { mod: "Control" },
});
```

`enabled`:

```tsx
const ref = useHotkeys<HTMLDivElement>("ctrl+k", () => {}, { enabled: false });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseHotkeysOptions {
  alias?: Record<string, string>;
  enabled?: boolean;
}
export type UseHotkeysHotkeys = string;
export interface UseHotkeysKey {
  alias: string;
  code: string;
  key: string;
}
export type UseHotkeysTarget =
  | Element
  | React.RefObject<Element | null | undefined>;
export interface UseHotkeys {
  (
    target: UseHotkeysTarget,
    hotkeys: UseHotkeysHotkeys,
    callback: (event: KeyboardEvent) => void,
    options?: UseHotkeysOptions
  ): void;
  <Target extends Element>(
    hotkeys: UseHotkeysHotkeys,
    callback: (event: KeyboardEvent) => void,
    options?: UseHotkeysOptions,
    target?: never
  ): StateRef<Target>;
}
export declare const useHotkeys: UseHotkeys;
```
