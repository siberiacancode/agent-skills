---
name: usePostMessage
category: Browser
usage: low
---

# usePostMessage

Receives and posts messages between windows/frames.

## Usage

```ts
import { usePostMessage } from "@siberiacancode/reactuse";

const postMessage = usePostMessage("*", (message) => console.log(message));
```

## Example

```tsx
const postMessage = usePostMessage<string>("*", (message) => {
  console.log("received", message);
});

return <button onClick={() => postMessage("ping")}>Send</button>;
```

## Type Declarations

```ts
export type UsePostMessageOrigin = string | "*" | string[];
export type UsePostMessageReturn<Message> = (message: Message) => void;
export declare const usePostMessage: <Message>(
  origin: UsePostMessageOrigin,
  callback: (message: Message, event: MessageEvent<Message>) => void
) => UsePostMessageReturn<Message>;
```
