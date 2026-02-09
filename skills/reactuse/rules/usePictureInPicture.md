---
name: usePictureInPicture
category: Browser
usage: low
---

# usePictureInPicture

Controls Picture-in-Picture mode for video elements.

## Usage

```ts
import { usePictureInPicture } from "@siberiacancode/reactuse";

const pip = usePictureInPicture<HTMLVideoElement>();
// or
const pip = usePictureInPicture(ref, { onEnter: () => {} });
```

## Example

```tsx
import { usePictureInPicture } from "@siberiacancode/reactuse";

const pip = usePictureInPicture<HTMLVideoElement>();
return (
  <div>
    <video ref={pip.ref} src="/video.mp4" controls />
    <button onClick={() => pip.toggle()}>
      {pip.open ? "Exit" : "Enter"} PiP
    </button>
  </div>
);
```

`onEnter`:

Enter callback.

```tsx
const pip = usePictureInPicture<HTMLVideoElement>({
  onEnter: () => console.log("enter"),
});
```

`onExit`:

Exit callback.

```tsx
const pip = usePictureInPicture<HTMLVideoElement>({
  onExit: () => console.log("exit"),
});
```

## Notes

- Hook uses the [Picture-in-Picture API](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API).

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UsePictureInPictureOptions {
  onEnter?: () => void;
  onExit?: () => void;
}
export interface UsePictureInPictureReturn {
  open: boolean;
  supported: boolean;
  enter: () => Promise<void>;
  exit: () => Promise<void>;
  toggle: () => Promise<void>;
}
export interface UsePictureInPicture {
  (
    target: HookTarget,
    options?: UsePictureInPictureOptions
  ): UsePictureInPictureReturn;
  (options?: UsePictureInPictureOptions): UsePictureInPictureReturn & {
    ref: StateRef<HTMLVideoElement>;
  };
}
export declare const usePictureInPicture: UsePictureInPicture;
```
