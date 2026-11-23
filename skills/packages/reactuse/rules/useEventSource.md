---
name: useEventSource
category: Browser
usage: low
---

# useEventSource

Provides a reactive wrapper around EventSource.

## Usage

```ts
import { useEventSource } from "@siberiacancode/reactuse";

const stream = useEventSource("/sse", ["message"]);
```

## Example

```tsx
import { useEventSource } from "@siberiacancode/reactuse";

export const Feed = () => {
  const stream = useEventSource("/sse", ["message"]);

  return <div>Last: {stream.data ?? "waiting"}</div>;
};
```

`immediately` (auto-open):

```tsx
const stream = useEventSource("/sse", [], { immediately: true });
```

`placeholderData`:

```tsx
const stream = useEventSource("/sse", [], {
  placeholderData: { status: "idle" },
});
```

`retry`:

```tsx
const stream = useEventSource("/sse", [], { retry: 3 });
```

`retryDelay`:

```tsx
const stream = useEventSource("/sse", [], {
  retryDelay: (attempt) => attempt * 500,
});
```

`onOpen`:

```tsx
const stream = useEventSource("/sse", [], {
  onOpen: () => console.log("open"),
});
```

`onMessage`:

```tsx
const stream = useEventSource("/sse", [], {
  onMessage: (event) => console.log(event.data),
});
```

`onError`:

```tsx
const stream = useEventSource("/sse", [], {
  onError: (event) => console.error(event),
});
```

`select`:

```tsx
const stream = useEventSource<string, { value: string }>("/sse", [], {
  select: (data) => JSON.parse(data),
});
```

## Notes

- Hook uses the [EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource).

## Type Declarations

```ts
export interface UseEventSourceOptions<QueryData, Data>
  extends EventSourceInit {
  immediately?: boolean;
  placeholderData?: (() => Data) | Data;
  retry?: boolean | number;
  retryDelay?: ((retry: number, event: Event) => number) | number;
  onError?: (error: Event) => void;
  onMessage?: (event: Event & { data?: Data }) => void;
  onOpen?: () => void;
  select?: (data: QueryData) => Data;
}
interface UseEventSourceReturn<Data = any> {
  data?: Data;
  error?: Event;
  instance?: EventSource;
  isConnecting: boolean;
  isError: boolean;
  opened: boolean;
  close: () => void;
  open: () => void;
}
export declare const useEventSource: <QueryData = any, Data = QueryData>(
  url: string | URL,
  events?: string[],
  options?: UseEventSourceOptions<QueryData, Data>
) => UseEventSourceReturn<Data>;
```
