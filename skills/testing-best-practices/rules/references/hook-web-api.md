# Reference — testing a browser-API hook

Example for a hook that reads a browser API and exposes a reactive snapshot (e.g. `useWindowScroll`, `useDocumentVisibility`, `useDevicePixelRatio`). Follows [unit-test-react-hook](../unit-test-react-hook.md) and the shared [unit-test-conventions](../unit-test-conventions.md).

Key points this example demonstrates:

- The **API-shape test** asserts the snapshot values against the live browser value and each method's type.
- The **SSR test** asserts the fallback the hook returns when there is no `window` (here the sentinel the hook chose, not the browser value).
- A **reactivity test** mutates the browser state, dispatches the real event inside `act`, and asserts the snapshot updated.
- A **callback test** passes a `vi.fn()` and asserts it fires with the expected payload.
- A **cleanup test** (`Should cleanup on unmount`) dispatches after unmount and asserts that the public callback no longer fires.

```ts
import { act, renderHook } from '@testing-library/react';
import { expect, it, vi } from 'vitest';

import { renderHookServer } from '@/tests';

import { useWindowScroll } from './useWindowScroll';

it('Should use window scroll', () => {
  const { result } = renderHook(useWindowScroll);

  expect(result.current.watch).toBeTypeOf('function');
  expect(result.current.snapshot.x).toEqual(window.scrollX);
  expect(result.current.snapshot.y).toEqual(window.scrollY);
  expect(result.current.scrollTo).toBeTypeOf('function');
});

it('Should use window scroll on server side', () => {
  const { result } = renderHookServer(useWindowScroll);

  expect(result.current.watch).toBeTypeOf('function');
  expect(result.current.snapshot.x).toEqual(Number.POSITIVE_INFINITY);
  expect(result.current.snapshot.y).toEqual(Number.POSITIVE_INFINITY);
  expect(result.current.scrollTo).toBeTypeOf('function');
});

it('Should return reactive value on scroll', () => {
  window.scrollX = 0;
  window.scrollY = 0;

  const { result } = renderHook(useWindowScroll);

  act(() => result.current.watch());

  act(() => {
    window.scrollX = 50;
    window.scrollY = 75;
    window.dispatchEvent(new Event('scroll'));
  });

  expect(result.current.snapshot).toEqual({ x: 50, y: 75 });
});

it('Should call callback on scroll', () => {
  const callback = vi.fn();

  window.scrollX = 0;
  window.scrollY = 0;

  renderHook(() => useWindowScroll(callback));

  act(() => {
    window.scrollX = 50;
    window.scrollY = 75;
    window.dispatchEvent(new Event('scroll'));
  });

  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith({ x: 50, y: 75 }, expect.any(Event));
});

it('Should cleanup on unmount', () => {
  const callback = vi.fn();
  const { unmount } = renderHook(() => useWindowScroll(callback));

  callback.mockClear();

  unmount();

  act(() => {
    window.dispatchEvent(new Event('scroll'));
    window.dispatchEvent(new Event('resize'));
  });

  expect(callback).not.toHaveBeenCalled();
});
```
