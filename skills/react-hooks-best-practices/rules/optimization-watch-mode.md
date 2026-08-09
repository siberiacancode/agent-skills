---
title: Watch mode for hot updates
impact: HIGH
impactDescription: prevents high-frequency subscriptions from re-rendering on every update
tags: react, hooks, subscriptions, watch, rerender, performance
---

# Watch mode for hot updates

Browser subscriptions are a firehose: scroll, resize, pointer movement, key presses, observers, animation frames, and sensors can fire dozens or hundreds of times per second. A hook that pushes each update through React state makes the subscribing component, and possibly its subtree, render far more often than the UI needs.

Use `useMouse` as the reference shape for this family of hooks:

- default mode is `callback + snapshot`
- the callback receives every update for direct DOM work, canvas drawing, analytics, or other imperative consumers
- `snapshot` gives access to the latest value without opting the component into rendering
- `watch()` is explicit opt-in reactivity for components that need the value in JSX or render-time logic

**Incorrect (bakes render frequency into the hook API):**

```tsx
const { x, y } = useMouse({
  throttleMs: 16,
});
```

This makes timing a hook-level decision. A canvas tool, a spotlight effect, a debug panel, and analytics do not want the same frequency, so the primitive hook should not choose one global throttling strategy.

**Incorrect (stores every mouse move in React state):**

```tsx
function CursorDebug() {
  const { x, y } = useMouse();

  return (
    <output>
      {x}, {y}
    </output>
  );
}
```

This shape implies every `mousemove` is a React update. It is only appropriate when the component truly needs to render on every value change.

**Correct default consumer (callback + direct DOM control, no React renders):**

```tsx
import { useMouse } from "@siberiacancode/reactuse";
import { useRef } from "react";

const Demo = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  const mouse = useMouse<HTMLDivElement>((value) => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    spotlight.style.setProperty("--x", `${value.elementX}px`);
    spotlight.style.setProperty("--y", `${value.elementY}px`);
  });

  return (
    <div ref={mouse.ref} className="group relative overflow-hidden">
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(300px circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 65%)",
        }}
      />
    </div>
  );
};
```

The cursor can drive CSS custom properties smoothly while React stays out of the update loop. This is the fast path for spotlights, custom cursors, canvas drawing, parallax, and other DOM-adjacent effects.

**Correct reactive consumer (call `watch()` only when render output needs it):**

```tsx
import { useMouse } from "@siberiacancode/reactuse";

const Demo = () => {
  const mouse = useMouse<HTMLDivElement>();
  const position = mouse.watch();

  return (
    <div ref={mouse.ref}>
      <p>x: {position.elementX}</p>
      <p>y: {position.elementY}</p>
    </div>
  );
};
```

Calling `watch()` marks this component as a reactive subscriber. If a different component only needs imperative behavior, it keeps using the callback or `snapshot` and never pays for render updates.

**Correct throttled consumer (compose timing outside the primitive hook):**

```tsx
import { useMouse, useThrottleCallback } from "@siberiacancode/reactuse";

const Demo = () => {
  const onMove = useThrottleCallback((value) => {
    console.log(value.elementX, value.elementY);
  }, 100);

  const mouse = useMouse<HTMLDivElement>(onMove);

  return <div ref={mouse.ref} />;
};
```

Keep throttling, debouncing, and `requestAnimationFrame` as consumer-side composition. A good subscription hook exposes the raw stream and an explicit render subscription; it does not grow a timing option for every possible use case.

Apply this pattern to hooks like `useMouse`, `useScroll`, `useDeviceMotion`, drag/swipe hooks, observers, timers, and custom event sources. Reach for plain React state only when every source update is meant to participate in rendering.

Reference: [Track the mouse in React without extra re-renders](https://reactuse.org/blog/08.2026-usemouse-watch-mode)
