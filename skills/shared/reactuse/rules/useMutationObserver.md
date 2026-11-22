---
name: useMutationObserver
category: Sensors
usage: low
---

# useMutationObserver

Observes DOM mutations on an element.

## Usage

```ts
import { useMutationObserver } from "@siberiacancode/reactuse";

const observer = useMutationObserver<HTMLDivElement>({ childList: true });
// or
const observer = useMutationObserver(ref, { childList: true });
```

## Example

```tsx
import { useMutationObserver } from "@siberiacancode/reactuse";
import { useState } from "react";

export const AttributeWatch = () => {
  const [count, setCount] = useState(0);
  const observer = useMutationObserver<HTMLDivElement>({
    attributes: true,
    onChange: () => setCount((value) => value + 1),
  });

  return (
    <div disabled={count % 2 === 0} ref={observer.ref}>
      Changes: {count}
    </div>
  );
};
```

`enabled`:

Toggle observer.

```tsx
const observer = useMutationObserver<HTMLDivElement>({ enabled: false });
```

`onChange`:

Mutation callback.

```tsx
const observer = useMutationObserver<HTMLDivElement>({
  onChange: (mutations) => console.log(mutations),
});
```

`attributes`:

Watch attributes.

```tsx
const observer = useMutationObserver<HTMLDivElement>({ attributes: true });
```

`characterData`:

Watch text.

```tsx
const observer = useMutationObserver<HTMLDivElement>({ characterData: true });
```

`childList`:

Watch children.

```tsx
const observer = useMutationObserver<HTMLDivElement>({ childList: true });
```

`subtree`:

Watch descendants.

```tsx
const observer = useMutationObserver<HTMLDivElement>({ subtree: true });
```

## Notes

- Hook uses the [MutationObserver API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

## Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseMutationObserverCallback = (
  mutations: MutationRecord[],
  observer: MutationObserver
) => void;
export interface UseMutationObserverOptions extends MutationObserverInit {
  enabled?: boolean;
  onChange?: UseMutationObserverCallback;
}
export interface UseMutationObserverReturn {
  observer?: MutationObserver;
}
export interface UseMutationObserver {
  <Target extends Element>(
    options?: UseMutationObserverOptions,
    target?: never
  ): UseMutationObserverReturn & { ref: StateRef<Target> };
  (
    target: HookTarget,
    options?: UseMutationObserverOptions
  ): UseMutationObserverReturn;
  <Target extends Element>(
    callback: UseMutationObserverCallback,
    target?: never
  ): UseMutationObserverReturn & { ref: StateRef<Target> };
  (
    target: HookTarget,
    callback: UseMutationObserverCallback
  ): UseMutationObserverReturn;
}
export declare const useMutationObserver: UseMutationObserver;
```
