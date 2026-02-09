---
name: createEventEmitter
category: Helpers
usage: low
---

# createEventEmitter

Creates a type-safe event emitter with a subscription hook.

## Usage

```ts
import { createEventEmitter } from "@siberiacancode/reactuse";

const emitter = createEventEmitter<{
  foo: number;
}>();
```

## Example

```tsx
const emitter = createEventEmitter<{ message: string }>();

export const Listener = () => {
  const value = emitter.useSubscribe("message");
  return <div>{value ?? "none"}</div>;
};

emitter.subscribe("message", (value) => console.log(value));
emitter.push("message", "hello");
```

## Type Declarations

```ts
export declare const createEventEmitter: <
  Events extends Record<string, any> = Record<string, any>
>() => {
  push: <Event extends keyof Events>(event: Event, data: Events[Event]) => void;
  subscribe: <Key extends keyof Events>(
    event: Key,
    listener: (data: Events[Key]) => void
  ) => () => void;
  unsubscribe: <Key extends keyof Events>(
    event: Key,
    listener: (data: Events[Key]) => void
  ) => void;
  useSubscribe: <Event extends keyof Events>(
    event: Event,
    listener?: (data: Events[Event]) => void
  ) => Events[Event] | undefined;
};
```
