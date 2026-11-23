---
name: useGamepad
category: Browser
usage: low
---

# useGamepad

Returns connected gamepads and active status.

## Usage

```ts
import { useGamepad } from "@siberiacancode/reactuse";

const gamepad = useGamepad();
```

## Example

```tsx
import { useGamepad } from "@siberiacancode/reactuse";

export const GamepadList = () => {
  const gamepad = useGamepad();
  if (!gamepad.supported) return <div>Not supported</div>;

  const first = gamepad.gamepads[0];

  return (
    <div>
      Connected: {gamepad.gamepads.length}
      <div>Active: {String(gamepad.active)}</div>
      <div>First: {first ? first.id : "none"}</div>
    </div>
  );
};
```

## Notes

- Hook uses the [navigator.getGamepads API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getGamepads).

## Type Declarations

```ts
export interface UseGamepadStateReturn {
  active: boolean;
  gamepads: Gamepad[];
  supported: boolean;
}
export declare const useGamepad: () => UseGamepadStateReturn;
```
