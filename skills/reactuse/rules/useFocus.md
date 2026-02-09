---
name: useFocus
category: Elements
usage: medium
---

# useFocus

Tracks focus state and provides focus/blur controls.

## Usage

```ts
import { useFocus } from "@siberiacancode/reactuse";

const focus = useFocus<HTMLInputElement>();
// or
const focus = useFocus(ref, { enabled: true });
```

## Example

```tsx
import { useFocus } from "@siberiacancode/reactuse";

export const FocusInput = () => {
  const focus = useFocus<HTMLInputElement>();

  return (
    <div>
      <input ref={focus.ref} />
      <button onClick={() => focus.focus()}>Focus</button>
      <button onClick={() => focus.blur()}>Blur</button>
    </div>
  );
};
```

`enabled`:

Enable focus tracking.

```tsx
const focus = useFocus<HTMLInputElement>({ enabled: false });
```

`initialValue`:

Initial focus state.

```tsx
const focus = useFocus<HTMLInputElement>({ initialValue: true });
```

`onFocus`:

Focus callback.

```tsx
const focus = useFocus<HTMLInputElement>({
  onFocus: () => console.log("focus"),
});
```

`onBlur`:

Blur callback.

```tsx
const focus = useFocus<HTMLInputElement>({ onBlur: () => console.log("blur") });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseFocusOptions {
  enabled?: boolean;
  initialValue?: boolean;
  onBlur?: (event: FocusEvent) => void;
  onFocus?: (event: FocusEvent) => void;
}
export interface UseFocusReturn {
  focused: boolean;
  blur: () => void;
  focus: () => void;
}
export interface UseFocus {
  (target: HookTarget, callback?: (event: FocusEvent) => void): UseFocusReturn;
  (target: HookTarget, options?: UseFocusOptions): UseFocusReturn;
  <Target extends Element>(
    callback?: (event: FocusEvent) => void,
    target?: never
  ): UseFocusReturn & { ref: StateRef<Target> };
  <Target extends Element>(
    options?: UseFocusOptions,
    target?: never
  ): UseFocusReturn & { ref: StateRef<Target> };
}
export declare const useFocus: UseFocus;
```
