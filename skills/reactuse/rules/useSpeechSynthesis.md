---
name: useSpeechSynthesis
category: Browser
usage: low
---

# useSpeechSynthesis

Provides text-to-speech controls and state.

## Usage

```ts
import { useSpeechSynthesis } from "@siberiacancode/reactuse";

const speech = useSpeechSynthesis();
```

## Example

```tsx
import { useSpeechSynthesis } from "@siberiacancode/reactuse";

export const Reader = () => {
  const speech = useSpeechSynthesis({ text: "Hello from Reactuse" });

  if (!speech.supported) return <div>Not supported</div>;

  return (
    <button onClick={() => speech.speak()}>
      {speech.playing ? "Speaking..." : "Speak"}
    </button>
  );
};
```

`text`:

```tsx
const speech = useSpeechSynthesis({ text: "Hello" });
```

`lang`:

```tsx
const speech = useSpeechSynthesis({ lang: "en-US" });
```

`pitch`:

```tsx
const speech = useSpeechSynthesis({ pitch: 1.5 });
```

`rate`:

```tsx
const speech = useSpeechSynthesis({ rate: 0.8 });
```

`voice`:

```tsx
const speech = useSpeechSynthesis({ voice });
```

`volume`:

```tsx
const speech = useSpeechSynthesis({ volume: 0.6 });
```

## Notes

- Hook uses the [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).

## Type Declarations

```ts
export type UseSpeechSynthesisStatus = "end" | "init" | "pause" | "play";
export interface UseSpeechSynthesisOptions {
  lang?: string;
  pitch?: number;
  rate?: number;
  text?: string;
  voice?: SpeechSynthesisVoice | null;
  volume?: number;
}
export interface UseSpeechSynthesisReturn {
  error: SpeechSynthesisErrorEvent | undefined;
  playing: boolean;
  status: UseSpeechSynthesisStatus;
  supported: boolean;
  utterance: SpeechSynthesisUtterance | undefined;
  pause: () => void;
  resume: () => void;
  speak: () => void;
  stop: () => void;
  toggle: (value?: boolean) => void;
}
export declare const useSpeechSynthesis: (
  options?: UseSpeechSynthesisOptions
) => UseSpeechSynthesisReturn;
```
