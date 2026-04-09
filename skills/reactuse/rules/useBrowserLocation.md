---
name: useBrowserLocation
category: Browser
usage: medium
---

# useBrowserLocation

Returns reactive browser location state with navigation controls.

## Usage

```ts
import { useBrowserLocation } from "@siberiacancode/reactuse";

const location = useBrowserLocation();
```

## Example

```tsx
import { useBrowserLocation } from "@siberiacancode/reactuse";

export const BrowserLocationControls = () => {
  const location = useBrowserLocation();

  return (
    <div>
      <p>Path: {location.value.pathname}</p>
      <button onClick={() => location.push("/dashboard?tab=overview")}>
        Push
      </button>
      <button onClick={() => location.replace("/dashboard?tab=settings")}>
        Replace
      </button>
      <button onClick={() => location.back()}>Back</button>
      <button onClick={() => location.forward()}>Forward</button>
    </div>
  );
};
```

## Notes

- Hook uses [window.location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location).
- Hook uses [window.history](https://developer.mozilla.org/en-US/docs/Web/API/Window/history).

## Type Declarations

```ts
export interface BrowserLocationState {
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  length?: number;
  origin?: string;
  pathname?: string;
  port?: string;
  protocol?: string;
  search?: string;
  state?: unknown;
}
export interface UseBrowserLocationReturn {
  value: BrowserLocationState;
  back: () => void;
  forward: () => void;
  go: (delta: number) => void;
  push: (url: string | URL, state?: unknown, title?: string) => void;
  replace: (url: string | URL, state?: unknown, title?: string) => void;
}
export declare const useBrowserLocation: () => UseBrowserLocationReturn;
```
