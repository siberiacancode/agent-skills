---
name: useAudio
category: Browser
usage: low
---

# useAudio

Manages audio playback (play/pause/stop), volume, rate, and sprite segments.

## Usage

```ts
import { useAudio } from "@siberiacancode/reactuse";

const audio = useAudio("/sounds/pop.mp3");
```

```ts
import { useAudio } from "@siberiacancode/reactuse";

const audio = useAudio("/sounds/sprite.mp3", {
  sprite: {
    click: [0, 0.25],
    success: [0.6, 1.1],
  },
});
```

## Example

```tsx
const audio = useAudio("/sounds/track.mp3");

return (
  <div>
    <button onClick={() => audio.play()}>Play</button>
    <button onClick={audio.pause}>Pause</button>
    <button onClick={audio.stop}>Stop</button>
  </div>
);
```

`immediately`:

Try to autoplay on mount.

```tsx
const audio = useAudio("/sounds/alert.mp3", { immediately: true });
```

`interrupt`:

Stop current playback before starting.

```tsx
const audio = useAudio("/sounds/click.mp3", { interrupt: true });

<button onClick={() => audio.play()}>Play</button>;
```

`playbackRate`:

Speed from 0.5 to 2.

```tsx
const audio = useAudio("/sounds/typing.mp3", { playbackRate: 1.5 });
```

`sprite`:

Play named segment.

```tsx
const audio = useAudio("/sounds/ui-sprite.mp3", {
  sprite: {
    open: [0, 0.2],
    close: [0.3, 0.5],
  },
});

<button onClick={() => audio.play("open")}>Open</button>;
```

`volume`:

Level from 0 to 1.

```tsx
const audio = useAudio("/sounds/ambient.mp3", { volume: 0.3 });
```

## Notes

- Hook uses the [Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Audio).

## Type Declarations

```ts
import type {
  SpriteMap,
  UseAudioOptions,
  UseAudioReturn,
} from "@siberiacancode/reactuse";

export interface SpriteMap {
  [key: string]: [number, number];
}
export interface UseAudioOptions {
  immediately?: boolean;
  interrupt?: boolean;
  playbackRate?: number;
  sprite?: SpriteMap;
  volume?: number;
}
export interface UseAudioReturn {
  playbackRate: number;
  playing: boolean;
  volume: number;
  changePlaybackRate: (value: number) => void;
  pause: () => void;
  play: (sprite?: string) => Promise<void>;
  setVolume: (value: number) => void;
  stop: () => void;
}
export declare const useAudio: (
  src: string,
  options?: UseAudioOptions
) => UseAudioReturn;
```
