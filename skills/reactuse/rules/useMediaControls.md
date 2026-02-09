---
name: useMediaControls
category: Browser
usage: low
---

# useMediaControls

Provides controls and state for audio/video elements.

## Usage

```ts
import { useMediaControls } from "@siberiacancode/reactuse";

const media = useMediaControls<HTMLVideoElement>("video.mp4");
// or
const media = useMediaControls(ref, { src: "video.mp4", type: "video/mp4" });
```

## Example

```tsx
import { useMediaControls } from "@siberiacancode/reactuse";

export const Player = () => {
  const media = useMediaControls<HTMLVideoElement>("video.mp4");

  return (
    <div>
      <video ref={videoMediaControls.ref} src="video.mp4" type="video/mp4" />
      <button onClick={() => media.toggle()}>
        {media.playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};
```

`src`:

Media source.

```tsx
const media = useMediaControls<HTMLAudioElement>("audio.mp3");
```

`type`:

Mime type.

```tsx
const media = useMediaControls<HTMLVideoElement>({
  src: "video.mp4",
  type: "video/mp4",
});
```

`media`:

Media query.

```tsx
const media = useMediaControls<HTMLVideoElement>({
  src: "video.mp4",
  media: "(min-width: 800px)",
});
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseMediaSource {
  media?: string;
  src: string;
  type?: string;
}
export interface UseMediaControlsReturn {
  buffered: [number, number][];
  currentTime: number;
  duration: number;
  ended: boolean;
  muted: boolean;
  playbackRate: number;
  playing: boolean;
  seeking: boolean;
  stalled: boolean;
  volume: number;
  waiting: boolean;
  changePlaybackRate: (rate: number) => void;
  changeVolume: (volume: number) => void;
  mute: () => void;
  pause: () => void;
  play: () => Promise<void>;
  seek: (time: number) => void;
  toggle: () => Promise<void>;
  unmute: () => void;
}
export interface UseMediaControls {
  (target: HookTarget, src: string): UseMediaControlsReturn;
  (target: HookTarget, options: UseMediaSource): UseMediaControlsReturn;
  <Target extends HTMLMediaElement>(src: string): UseMediaControlsReturn & {
    ref: StateRef<Target>;
  };
  <Target extends HTMLMediaElement>(
    options: UseMediaSource
  ): UseMediaControlsReturn & { ref: StateRef<Target> };
}
export declare const useMediaControls: UseMediaControls;
```
