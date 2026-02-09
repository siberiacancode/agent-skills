---
name: useOptimistic
category: Async
usage: medium
---

# useOptimistic

Allows showing an optimistic value before the async update resolves.

## Usage

```ts
import { useOptimistic } from "@siberiacancode/reactuse";

const [optimisticCount, updateOptimistic] = useOptimistic(
  count,
  (current, delta) => current + delta
);
```

## Example

```tsx
import { useOptimistic } from "@siberiacancode/reactuse";
import { useState } from "react";

export const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [optimisticLikes, updateOptimistic] = useOptimistic(
    likes,
    (current, delta: number) => current + delta
  );

  const onLike = () => {
    const request = fetch("/api/like", { method: "POST" }).then(() => {
      setLikes((value) => value + 1);
    });

    updateOptimistic(1, request);
  };

  return <button onClick={onLike}>Likes: {optimisticLikes}</button>;
};
```

## Type Declarations

```ts
export type UseOptimisticReturn<State> = [
  State,
  (optimisticValue: State, promise: Promise<any>) => void
];
export declare const useOptimistic: <State, OptimisticState = State>(
  externalState: State,
  update: (currentState: State, optimisticState: OptimisticState) => State
) => readonly [
  State,
  (optimisticValue: OptimisticState, promise: Promise<any>) => Promise<any>
];
```
