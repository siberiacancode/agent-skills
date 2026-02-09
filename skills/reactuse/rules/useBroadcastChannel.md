---
name: useBroadcastChannel
category: Browser
usage: low
---

# useBroadcastChannel

Enables cross-tab/window messaging.

## Usage

```ts
import { useBroadcastChannel } from "@siberiacancode/reactuse";

const channel = useBroadcastChannel("channel");
```

## Example

```tsx
const channel = useBroadcastChannel<string>("sync", (message) => {
  console.log(message);
});

return (
  <button onClick={() => channel.post("ping")}>
    Last: {channel.data ?? "none"}
  </button>
);
```

## Notes

- Hook uses the [BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel).

## Type Declarations

```ts
export interface UseBroadcastChannelReturn<Data = unknown> {
  channel?: BroadcastChannel;
  closed: boolean;
  data?: Data;
  error?: Event;
  supported: boolean;
  close: () => void;
  post: (data: Data) => void;
}
export declare const useBroadcastChannel: <Data = unknown>(
  name: string,
  callback?: (data: Data) => void
) => UseBroadcastChannelReturn<Data>;
```
