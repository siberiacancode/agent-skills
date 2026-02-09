---
name: useSpeechRecognition
category: Browser
usage: low
---

# useSpeechRecognition

Provides speech-to-text recognition controls and state.

## Usage

```ts
import { useSpeechRecognition } from "@siberiacancode/reactuse";

const speech = useSpeechRecognition();
```

## Example

```tsx
import { useSpeechRecognition } from "@siberiacancode/reactuse";

export const VoiceNote = () => {
  const speech = useSpeechRecognition({ language: "en-US" });

  if (!speech.supported) return <div>Not supported</div>;

  return (
    <div>
      <button onClick={() => speech.toggle()}>
        {speech.listening ? "Stop" : "Start"}
      </button>
      <div>Transcript: {speech.transcript}</div>
    </div>
  );
};
```

`continuous`:

```tsx
const speech = useSpeechRecognition({ continuous: true });
```

`interimResults`:

```tsx
const speech = useSpeechRecognition({ interimResults: true });
```

`language`:

```tsx
const speech = useSpeechRecognition({ language: "ru-RU" });
```

`maxAlternatives`:

```tsx
const speech = useSpeechRecognition({ maxAlternatives: 3 });
```

`grammars`:

```tsx
const speech = useSpeechRecognition({ grammars });
```

`onStart`:

```tsx
const speech = useSpeechRecognition({ onStart: () => console.log("start") });
```

`onEnd`:

```tsx
const speech = useSpeechRecognition({ onEnd: () => console.log("end") });
```

`onError`:

```tsx
const speech = useSpeechRecognition({
  onError: (error) => console.error(error),
});
```

`onResult`:

```tsx
const speech = useSpeechRecognition({
  onResult: (event) => console.log(event),
});
```

## Notes

- Hook uses the [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).

## Type Declarations

```ts
interface UseSpeechRecognitionOptions {
  continuous?: SpeechRecognition["continuous"];
  grammars?: SpeechRecognition["grammars"];
  interimResults?: SpeechRecognition["interimResults"];
  language?: SpeechRecognition["lang"];
  maxAlternatives?: SpeechRecognition["maxAlternatives"];
  onEnd?: () => void;
  onError?: (error: SpeechRecognitionErrorEvent) => void;
  onResult?: (event: SpeechRecognitionEvent) => void;
  onStart?: () => void;
}
interface UseSpeechRecognitionReturn {
  error: SpeechRecognitionErrorEvent | null;
  final: boolean;
  listening: boolean;
  recognition?: SpeechRecognition;
  supported: boolean;
  transcript: string;
  start: () => void;
  stop: () => void;
  toggle: (value?: boolean) => void;
}
export declare const useSpeechRecognition: (
  options?: UseSpeechRecognitionOptions
) => UseSpeechRecognitionReturn;
```
