---
name: useWebSocket
category: Browser
usage: medium
---

# useWebSocket

Keeps a component connected to a WebSocket endpoint while exposing a small control surface for manual open/close, message sending, retries, and connection lifecycle reactions.

## Usage

```ts
import { useWebSocket } from "@siberiacancode/reactuse";

const socket = useWebSocket("wss://example.com");
```

## Example

```tsx
import { useWebSocket } from "@siberiacancode/reactuse";

export const SocketPing = () => {
  const socket = useWebSocket("wss://example.com", {
    heartbeat: (ws) => ws.send("ping"),
    heartbeatDelay: 30000,
  });

  return (
    <button onClick={() => socket.send("hello")}>Status: {socket.status}</button>
  );
};
```

`url`:

```tsx
const socket = useWebSocket(() => `wss://example.com/${roomId}`);
```

`heartbeat`:

```tsx
const socket = useWebSocket("wss://example.com", {
  heartbeat: (webSocket) => webSocket.send("ping"),
});
```

`heartbeatDelay`:

```tsx
const socket = useWebSocket("wss://example.com", { heartbeatDelay: 30000 });
```

`immediately`:

```tsx
const socket = useWebSocket("wss://example.com", { immediately: false });
socket.open();
```

`protocols`:

```tsx
const socket = useWebSocket("wss://example.com", { protocols: ["soap"] });
```

`onClose`:

```tsx
const socket = useWebSocket("wss://example.com", {
  onClose: (event) => console.log(event.code),
});
```

`onConnected`:

```tsx
const socket = useWebSocket("wss://example.com", {
  onConnected: (webSocket) => console.log(webSocket.readyState),
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
const socket = useWebSocket("wss://example.com", {
  retry: (failureCount) => failureCount < 3,
});
```

`retryDelay`:

```tsx
const socket = useWebSocket("wss://example.com", {
  retry: 3,
  retryDelay: 1000,
});
```

## Notes

- Hook uses the [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

## Type Declarations

```ts
export type UseWebSocketUrl = (() => string) | string;
export interface UseWebSocketOptions {
  heartbeatDelay?: number;
  immediately?: boolean;
  protocols?: Array<"soap" | "wasm">;
  retry?: ((failureCount: number, event: CloseEvent) => boolean) | boolean | number;
  retryDelay?: number;
  heartbeat?: (webSocket: WebSocket) => void;
  onClose?: (event: CloseEvent, webSocket: WebSocket) => void;
  onConnected?: (webSocket: WebSocket) => void;
  onError?: (event: Event, webSocket: WebSocket) => void;
  onMessage?: (event: MessageEvent, webSocket: WebSocket) => void;
}
export type UseWebSocketStatus = "closed" | "connected" | "connecting" | "failed";
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
