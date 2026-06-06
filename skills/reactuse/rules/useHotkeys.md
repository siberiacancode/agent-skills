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
  onChange?: (event: KeyboardEvent) => void;
}
export type UseHotkeysHotkeys = string;
export interface UseHotkeysKey {
  alias: string;
  code: string;
  key: string;
}
export interface UseHotkeys {
  (
    target: HookTarget,
    hotkeys: UseHotkeysHotkeys,
    options?: UseHotkeysOptions
  ): void;
  (
    target: HookTarget,
    hotkeys: UseHotkeysHotkeys,
    callback: (event: KeyboardEvent) => void,
    options?: UseHotkeysOptions
  ): void;
  <Target extends Element>(
    hotkeys: UseHotkeysHotkeys,
    options?: UseHotkeysOptions,
    target?: never
  ): StateRef<Target>;
  <Target extends Element>(
    hotkeys: UseHotkeysHotkeys,
    callback: (event: KeyboardEvent) => void,
    options?: UseHotkeysOptions,
    target?: never
  ): StateRef<Target>;
}
export declare const useHotkeys: UseHotkeys;
```
