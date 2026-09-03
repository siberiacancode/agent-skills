# Reference — testing a listener hook with multiple targets

Example for a hook that subscribes to events on a target that can take many forms — selector string, element, ref, getter (e.g. `useEventListener`). Follows [unit-test-react-hook](../unit-test-react-hook.md) and the shared [unit-test-conventions](../unit-test-conventions.md).

Key points this example demonstrates:

- The accepted **target forms** are collected into a `targets` array and the whole suite runs once per form via `targets.forEach((target) => describe(...))` — the `forEach`-over-`describe` pattern, never copy-paste.
- Each variant asserts the **subscription fires** the listener when the event is dispatched.
- Independent callback/options behavior is tested separately with one canonical target instead of repeated for every target form.
- **Target changes** are exercised with `rerender`: the old target stops triggering the callback and the new target starts triggering it.
- **Unmount** is verified by dispatching again and observing no callback.

```ts
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { target as toTarget } from '@/utils/helpers';

import { useEventListener } from './useEventListener';

const element = document.getElementById('target') as HTMLDivElement;
const nextElement = document.getElementById('next-target') as HTMLDivElement;

const targets = [
  toTarget('#target'),
  toTarget(element),
  toTarget(() => element),
  { current: element }
];

targets.forEach((target) => {
  describe(`${target}`, () => {
    it('Should call listener when event is triggered', () => {
      const listener = vi.fn();

      renderHook(() => useEventListener(target, 'click', listener));

      act(() => element.dispatchEvent(new Event('click')));

      expect(listener).toHaveBeenCalled();
    });

    it('Should handle target changes', () => {
      const listener = vi.fn();

      const { rerender } = renderHook((current) => useEventListener(current, 'click', listener), {
        initialProps: target
      });

      rerender(toTarget(nextElement));

      act(() => element.dispatchEvent(new Event('click')));
      expect(listener).not.toHaveBeenCalled();

      act(() => nextElement.dispatchEvent(new Event('click')));
      expect(listener).toHaveBeenCalledOnce();
    });

    it('Should cleanup on unmount', () => {
      const listener = vi.fn();

      const { unmount } = renderHook(() => useEventListener(target, 'click', listener));

      unmount();

      act(() => element.dispatchEvent(new Event('click')));

      expect(listener).not.toHaveBeenCalled();
    });
  });
});

it('Should handle enabled option', () => {
  const listener = vi.fn();
  const target = toTarget(element);

  renderHook(() => useEventListener(target, 'click', listener, { enabled: false }));

  act(() => element.dispatchEvent(new Event('click')));

  expect(listener).not.toHaveBeenCalled();
});
```

Note: the exact `target` helper and return type depend on the hook's own API — this reference shows the *test shape*, not a specific signature. Match the hook you're testing.
