---
name: useHotkeys
category: Sensors
usage: medium
---

# useHotkeys

Scopes keyboard shortcuts to a target or returned ref so command-style interactions can stay close to the component that owns them.

## Usage

```ts
import { useHotkeys } from "@siberiacancode/reactuse";

const ref = useHotkeys<HTMLDivElement>("ctrl+k", () => console.log("hotkey"));
// or
useHotkeys(ref, "ctrl+k", () => console.log("hotkey"));
```

## Example

```tsx
const ref = useHotkeys<HTMLDivElement>("mod+k,ctrl+/", () => {
  console.log("open command menu");
});

return <div ref={ref}>Open</div>;
```

`enabled`:

```tsx
const ref = useHotkeys<HTMLDivElement>("ctrl+k", () => {}, { enabled: false });
```

`alias`:

```tsx
const ref = useHotkeys<HTMLDivElement>("cmd+k", openMenu, {
  alias: { Meta: "cmd" },
});
```

`onChange`:

```tsx
const ref = useHotkeys<HTMLDivElement>("escape", {
  onChange: (event) => console.log(event.key),
});
```

`hotkeys` alternatives:

```tsx
const ref = useHotkeys<HTMLDivElement>("mod+k,ctrl+/", openMenu);
```

## Type Declarations

```ts
import type { HookTarget, StateRef } from "@siberiacancode/reactuse";

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
export declare const isHotkeyMatch: (
  hotkey: string,
  keys: UseHotkeysKey[]
) => boolean;
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
    options?: UseHotkeysOptions
  ): StateRef<Target>;
  <Target extends Element>(
    hotkeys: UseHotkeysHotkeys,
    callback: (event: KeyboardEvent) => void,
    options?: UseHotkeysOptions
  ): StateRef<Target>;
}
export declare const useHotkeys: UseHotkeys;
```
