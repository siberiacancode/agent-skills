---
name: useKeyPressEvent
category: Sensors
usage: low
---

# useKeyPressEvent

Runs a handler when specific keys are pressed.

## Usage

```ts
import { useKeyPressEvent } from "@siberiacancode/reactuse";

const keyPressEvent = useKeyPressEvent<HTMLDivElement>("Enter", () =>
  console.log("pressed")
);
// or
useKeyPressEvent(ref, "Enter", () => console.log("pressed"));
```

## Example

```tsx
import { useKeyPressEvent } from "@siberiacancode/reactuse";

export const SubmitShortcut = () => {
  const keyPressEvent = useKeyPressEvent<HTMLDivElement>("Enter", () =>
    console.log("submit")
  );
  return <div ref={keyPressEvent.ref}>Submit</div>;
};
```

`capture`:

```tsx
useKeyPressEvent<HTMLDivElement>("Enter", () => {}, { capture: true });
```

`once`:

```tsx
useKeyPressEvent<HTMLDivElement>("Enter", () => {}, { once: true });
```

`passive`:

```tsx
useKeyPressEvent<HTMLDivElement>("Enter", () => {}, { passive: true });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseKeyPressEventKey = string | string[];
export interface UseKeyPressEventOptions {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}
export interface UseKeyPressEvent {
  (
    target: HookTarget | Window,
    key: UseKeyPressEventKey,
    listener: (event: KeyboardEvent) => void,
    options?: UseKeyPressEventOptions
  ): void;
  <Target extends Element>(
    key: UseKeyPressEventKey,
    listener: (event: KeyboardEvent) => void,
    options?: UseKeyPressEventOptions,
    target?: never
  ): { ref: StateRef<Target> };
}
export declare const useKeyPressEvent: UseKeyPressEvent;
```
