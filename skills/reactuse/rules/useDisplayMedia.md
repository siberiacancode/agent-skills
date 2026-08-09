---
name: useDisplayMedia
category: Browser
usage: low
---

# useDisplayMedia

Connects a video element to a screen-capture stream and keeps capture state under React control.

## Usage

```ts
import { useDisplayMedia } from "@siberiacancode/reactuse";

const displayMedia = useDisplayMedia<HTMLVideoElement>();
// or
const displayMedia = useDisplayMedia(ref, {
  constraints: { video: true, audio: false },
});
```

## Example

```tsx
import { useDisplayMedia } from "@siberiacancode/reactuse";

export const ScreenShare = () => {
  const displayMedia = useDisplayMedia<HTMLVideoElement>({
    constraints: { video: true, audio: false },
  });

  return (
    <div>
      <button onClick={() => displayMedia.start()}>Start</button>
      <button onClick={displayMedia.stop}>Stop</button>
      <video ref={displayMedia.ref} autoPlay muted />
      {displayMedia.active && <span>Sharing</span>}
    </div>
  );
};
```

`start(constraints)`:

```tsx
await displayMedia.start({ video: { displaySurface: "browser" } });
```

`constraints`:

```tsx
const displayMedia = useDisplayMedia<HTMLVideoElement>({
  constraints: { video: true, audio: false },
});
```

`immediately`:

```tsx
const displayMedia = useDisplayMedia(videoRef, { immediately: true });
```

`onStart`:

```tsx
const displayMedia = useDisplayMedia<HTMLVideoElement>({
  onStart: (stream) => console.log(stream),
});
```

`onStop`:

```tsx
const displayMedia = useDisplayMedia<HTMLVideoElement>({
  onStop: () => console.log("stopped"),
});
```

## Notes

- Hook uses the [mediaDevices.getDisplayMedia API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia).

## Type Declarations

```ts
import type { HookTarget, StateRef } from "@siberiacancode/reactuse";

export interface UseDisplayMediaConstraints {
  audio?: boolean | MediaTrackConstraints;
  video?: boolean | MediaTrackConstraints;
}
export interface UseDisplayMediaReturn {
  active: boolean;
  stream: MediaStream | null;
  supported: boolean;
  start: (constraints?: UseDisplayMediaConstraints) => Promise<MediaStream | undefined>;
  stop: () => void;
}
export interface UseDisplayMediaOptions {
  constraints?: UseDisplayMediaConstraints;
  immediately?: boolean;
  onStart?: (stream: MediaStream) => void;
  onStop?: (stream?: MediaStream) => void;
}
export interface UseDisplayMedia {
  (target: HookTarget, options?: UseDisplayMediaOptions): UseDisplayMediaReturn;
  <Target extends HTMLVideoElement>(
    options?: UseDisplayMediaOptions
  ): UseDisplayMediaReturn & { ref: StateRef<Target> };
}
export declare const useDisplayMedia: UseDisplayMedia;
```
