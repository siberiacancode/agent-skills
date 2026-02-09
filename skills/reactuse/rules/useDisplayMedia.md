---
name: useDisplayMedia
category: Browser
usage: low
---

# useDisplayMedia

Provides screen sharing controls and stream state.

## Usage

```ts
import { useDisplayMedia } from "@siberiacancode/reactuse";

const displayMedia = useDisplayMedia<HTMLVideoElement>();
// or
const displayMedia = useDisplayMedia(ref);
```

## Example

```tsx
import { useDisplayMedia } from "@siberiacancode/reactuse";

export const ScreenShare = () => {
  const displayMedia = useDisplayMedia<HTMLVideoElement>({ video: true });

  return (
    <div>
      <button onClick={() => displayMedia.start()}>Start</button>
      <button onClick={displayMedia.stop}>Stop</button>
      <video ref={displayMedia.ref} autoPlay muted />
    </div>
  );
};
```

`audio`:

Share audio.

```tsx
const displayMedia = useDisplayMedia<HTMLVideoElement>({ audio: true });
```

`video`:

Share video.

```tsx
const displayMedia = useDisplayMedia<HTMLVideoElement>({ video: true });
```

`immediately`:

Auto-start.

```tsx
const displayMedia = useDisplayMedia<HTMLVideoElement>({ immediately: true });
```

## Notes

- Hook uses the [mediaDevices.getDisplayMedia API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia).

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseDisplayMediaReturn {
  sharing: boolean;
  stream: MediaStream | null;
  supported: boolean;
  start: () => Promise<void>;
  stop: () => void;
}
export interface UseDisplayMediaOptions {
  audio?: boolean | MediaTrackConstraints;
  immediately?: boolean;
  video?: boolean | MediaTrackConstraints;
}
export interface UseDisplayMedia {
  (target: HookTarget, options?: UseDisplayMediaOptions): UseDisplayMediaReturn;
  <Target extends HTMLVideoElement>(
    options?: UseDisplayMediaOptions,
    target?: never
  ): UseDisplayMediaReturn & { ref: StateRef<Target> };
}
export declare const useDisplayMedia: UseDisplayMedia;
```
