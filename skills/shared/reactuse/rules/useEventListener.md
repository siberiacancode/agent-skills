---
name: useEventListener
category: Browser
usage: high
---

# useEventListener

Attaches an event listener to a target.

## Usage

```ts
import { useEventListener } from "@siberiacancode/reactuse";

useEventListener(window, "click", () => console.log("click"));
// or
const eventListenerRef = useEventListener<HTMLButtonElement>("click", () =>
  console.log("click")
);
```

## Example

```tsx
import { useEventListener } from "@siberiacancode/reactuse";

export const ClickTracker = () => {
  const eventListenerRef = useEventListener<HTMLButtonElement>("click", () => {
    console.log("clicked");
  });

  return <button ref={eventListenerRef}>Track clicks</button>;
};
```

`enabled`:

Toggle listener.

```tsx
useEventListener(window, "scroll", () => {}, { enabled: false });
```

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseEventListenerOptions = {
  enabled?: boolean;
} & AddEventListenerOptions;
export type UseEventListenerReturn<Target extends Element> = StateRef<Target>;
export interface UseEventListener {
  <Event extends keyof WindowEventMap = keyof WindowEventMap>(
    target: HookTarget,
    event: Event,
    listener: (this: Window, event: WindowEventMap[Event]) => void,
    options?: UseEventListenerOptions
  ): void;
  <Event extends keyof DocumentEventMap = keyof DocumentEventMap>(
    target: HookTarget,
    event: Event,
    listener: (this: Document, event: DocumentEventMap[Event]) => void,
    options?: UseEventListenerOptions
  ): void;
  <Event extends keyof HTMLElementEventMap = keyof HTMLElementEventMap>(
    target: HookTarget,
    event: Event,
    listener: (this: Element, event: HTMLElementEventMap[Event]) => void,
    options?: UseEventListenerOptions
  ): void;
  <
    Target extends Element,
    Event extends keyof HTMLElementEventMap = keyof HTMLElementEventMap
  >(
    event: Event,
    listener: (this: Target, event: HTMLElementEventMap[Event]) => void,
    options?: UseEventListenerOptions,
    target?: never
  ): UseEventListenerReturn<Target>;
  <
    Target extends Element,
    Event extends keyof MediaQueryListEventMap = keyof MediaQueryListEventMap
  >(
    event: Event,
    listener: (this: Target, event: MediaQueryListEventMap[Event]) => void,
    options?: UseEventListenerOptions,
    target?: never
  ): UseEventListenerReturn<Target>;
}
export declare const useEventListener: UseEventListener;
```
