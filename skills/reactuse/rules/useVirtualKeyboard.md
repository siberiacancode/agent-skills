---
name: useVirtualKeyboard
category: Browser
usage: low
---

# useVirtualKeyboard

Tracks virtual keyboard state and exposes controls.

## Usage

```ts
import { useVirtualKeyboard } from "@siberiacancode/reactuse";

const keyboard = useVirtualKeyboard();
```

## Example

```tsx
import { useVirtualKeyboard } from "@siberiacancode/reactuse";

export const KeyboardControls = () => {
  const keyboard = useVirtualKeyboard();

  return (
    <div>
      <button onClick={() => keyboard.show()}>Show</button>
      <button onClick={() => keyboard.hide()}>Hide</button>
      <div>Open: {String(keyboard.opened)}</div>
    </div>
  );
};
```

`initialValue`:

```tsx
const keyboard = useVirtualKeyboard(true);
```

## Notes

- Hook uses the [VirtualKeyboard API](https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard).
- Includes a fallback; methods are no-ops when unsupported.

## Type Declarations

```ts
export interface UseVirtualKeyboardReturn {
  opened: boolean;
  supported: boolean;
  changeOverlaysContent: (overlaysContent: boolean) => void;
  hide: () => void;
  show: () => void;
}
export declare const useVirtualKeyboard: (
  initialValue?: boolean
) => UseVirtualKeyboardReturn;
```
