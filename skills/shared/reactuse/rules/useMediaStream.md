---
name: useMediaStream
category: Browser
usage: medium
---

# useMediaStream

Connects camera or microphone capture to a media element while exposing stream lifecycle state and constraint updates.

## Usage

```ts
import { useMediaStream } from "@siberiacancode/reactuse";

const media = useMediaStream<HTMLVideoElement>();
// or
const media = useMediaStream(videoRef, { constraints: { video: true } });
```

## Example

```tsx
import { useMediaStream } from "@siberiacancode/reactuse";

export const CameraPreview = () => {
  const media = useMediaStream<HTMLVideoElement>({
    constraints: { video: true, audio: false },
  });

  return (
    <div>
      <video ref={media.ref} autoPlay muted playsInline />
      <button onClick={() => media.start()}>Start</button>
      <button onClick={media.stop}>Stop</button>
    </div>
  );
};
```

`constraints`:

```tsx
const media = useMediaStream<HTMLVideoElement>({
  constraints: { video: true, audio: false },
});
```

`immediately`:

```tsx
const media = useMediaStream(videoRef, { immediately: true });
```

`onError`:

```tsx
const media = useMediaStream({ onError: (error) => console.error(error) });
```

`onStart`:

```tsx
const media = useMediaStream({
  onStart: (stream) => console.log(stream.id),
});
```

`onStop`:

```tsx
const media = useMediaStream({ onStop: () => console.log("stopped") });
```

`apply(constraints)`:

```tsx
await media.apply({ video: { width: 1280 } });
```

## Notes

- Hook uses the [mediaDevices.getUserMedia API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).

## Type Declarations

```ts
import type { HookTarget, StateRef } from "@siberiacancode/reactuse";

export interface UseMediaStreamOptions {
  constraints?: MediaStreamConstraints;
  immediately?: boolean;
  onError?: (error: Error) => void;
  onStart?: (stream: MediaStream) => void;
  onStop?: (stream?: MediaStream) => void;
}
export interface UseMediaStreamReturn {
  active: boolean;
  loading: boolean;
  stream?: MediaStream;
  supported: boolean;
  apply: (constraints: MediaStreamConstraints) => Promise<boolean>;
  restart: () => Promise<MediaStream | undefined>;
  start: (constraints?: MediaStreamConstraints) => Promise<MediaStream | undefined>;
  stop: () => void;
}
export interface UseMediaStream {
  (target: HookTarget, options?: UseMediaStreamOptions): UseMediaStreamReturn;
  (options?: UseMediaStreamOptions): UseMediaStreamReturn & {
    ref: StateRef<HTMLVideoElement>;
  };
}
export declare const useMediaStream: UseMediaStream;
```
