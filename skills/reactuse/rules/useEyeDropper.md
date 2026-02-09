---
name: useEyeDropper
category: Browser
usage: low
---

# useEyeDropper

Provides access to the EyeDropper API.

## Usage

```ts
import { useEyeDropper } from "@siberiacancode/reactuse";

const eyeDropper = useEyeDropper();
```

## Example

```tsx
const eye = useEyeDropper("#ffffff");

return <button onClick={() => eye.open()}>{eye.value ?? "Pick color"}</button>;
```

`initialValue`:

```tsx
const eye = useEyeDropper("#ffffff");
```

## Notes

- Hook uses the [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper).

## Type Declarations

```ts
export interface ColorSelectionOptions {
  signal?: AbortSignal;
}
export interface ColorSelectionResult {
  sRGBHex: string;
}
export interface UseEyeDropperReturn {
  supported: boolean;
  value?: string;
  open: (
    colorSelectionOptions?: ColorSelectionOptions
  ) => Promise<ColorSelectionResult>;
}
export declare const useEyeDropper: (
  initialValue?: string
) => UseEyeDropperReturn;
```
