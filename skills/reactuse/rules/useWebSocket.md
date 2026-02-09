---
name: useWebSocket
category: Browser
usage: medium
---

# useWebSocket

Connects to a WebSocket server with retries and callbacks.

## Usage

```ts
import { useWebSocket } from "@siberiacancode/reactuse";

const socket = useWebSocket("wss://example.com");
```

## Example

```tsx
import { useWebSocket } from "@siberiacancode/reactuse";

export const SocketPing = () => {
  const socket = useWebSocket("wss://example.com");

  return (
    <button onClick={() => socket.send("ping")}>Status: {socket.status}</button>
  );
};
```

`onConnected`:

```tsx
const socket = useWebSocket("wss://example.com", {
  onConnected: (ws) => console.log(ws),
});
```

`onDisconnected`:

```tsx
const socket = useWebSocket("wss://example.com", {
  onDisconnected: (event) => console.log(event),
});
```

`onError`:

```tsx
const socket = useWebSocket("wss://example.com", {
  onError: (event) => console.error(event),
});
```

`onMessage`:

```tsx
const socket = useWebSocket("wss://example.com", {
  onMessage: (event) => console.log(event.data),
});
```

`retry`:

```tsx
const socket = useWebSocket("wss://example.com", { retry: 3 });
```

`protocols`:

```tsx
const socket = useWebSocket("wss://example.com", { protocols: ["soap"] });
```

## Notes

- Hook uses the [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

## Type Declarations

```ts
export type UseWebSocketUrl = (() => string) | string;
export interface UseWebSocketOptions {
  protocols?: Array<"soap" | "wasm">;
  retry?: boolean | number;
  onConnected?: (webSocket: WebSocket) => void;
  onDisconnected?: (event: CloseEvent, webSocket: WebSocket) => void;
  onError?: (event: Event, webSocket: WebSocket) => void;
  onMessage?: (event: MessageEvent, webSocket: WebSocket) => void;
}
export type UseWebSocketStatus =
  | "connected"
  | "connecting"
  | "disconnected"
  | "failed";
export interface UseWebSocketReturn {
  client?: WebSocket;
  close: WebSocket["close"];
  send: WebSocket["send"];
  status: UseWebSocketStatus;
  open: () => void;
}
export declare const useWebSocket: (
  url: UseWebSocketUrl,
  options?: UseWebSocketOptions
) => UseWebSocketReturn;
```
