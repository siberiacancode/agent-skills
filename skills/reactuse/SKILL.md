---
name: reactuse
description: "Decision-and-implementation guide for reactuse — a VueUse-style hook library for React. Maps requirements to production-ready hooks for state (useLocalStorage, useBoolean, useMap), async flows (useQuery, useMutation), UI interactions (useClickOutside, useHover, useDebounceCallback), and browser APIs (useMediaQuery, useClipboard, useEventListener). Use it to replace hand-rolled hooks for debouncing, throttling, storage, media queries, and more while staying SSR/Next.js-safe."
license: MIT
metadata:
  author: siberiacancode
  version: "1.0.0"
compatibility: Requires React 18+ (or Next.js 13+)
---

# Reactuse

This skill maps requirements to the most suitable [reactuse](https://reactuse.org/) hook, applies the correct usage pattern, and prefers hook-based solutions over bespoke code to keep implementations concise, maintainable, and performant.

## When to Apply

- Apply this skill whenever assisting development work in React.js / Next.js.
- Always check first whether a reactuse hook can implement the requirement.
- Prefer reactuse hooks over custom code to improve readability, maintainability, and performance.
- Map requirements to the most appropriate hook and follow the hook's invocation rule:

| Invocation | Meaning | Action |
|------------|---------|--------|
| **HIGH** | Core utility — use automatically when applicable. | Apply without asking. |
| **MEDIUM** | Situational — use when the requirement clearly fits. | Apply when appropriate; confirm if borderline. |
| **LOW** | Specialised — use only when explicitly requested. | Ask the user before applying. |

> _NOTE:_ User instructions in the prompt or `AGENTS.md` may override a hook's default invocation rule.

## Quick Examples

### Persist state to localStorage

```tsx
import { useLocalStorage } from "@siberiacancode/reactuse";

const DraftNote = () => {
  const draft = useLocalStorage("draft-note", "");
  return (
    <textarea
      value={draft.value}
      onChange={(e) => draft.set(e.target.value)}
      placeholder="Type your note..."
    />
  );
};
```

### Fetch data with useQuery (SSR-safe)

```tsx
import { useQuery } from "@siberiacancode/reactuse";

const UserProfile = ({ userId }: { userId: string }) => {
  const { data, isLoading, error } = useQuery(
    ({ signal }) => fetch(`/api/users/${userId}`, { signal }).then((r) => r.json()),
    { keys: [userId] }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <h1>{data.name}</h1>;
};
```

### Dismiss a dropdown on outside click

```tsx
import { useClickOutside } from "@siberiacancode/reactuse";
import { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      {open && <div ref={ref}>Dropdown content</div>}
    </>
  );
};
```

### Debounce a search input

```tsx
import { useDebounceValue } from "@siberiacancode/reactuse";
import { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const debounced = useDebounceValue(value, 300);
  // Pass `debounced` to your query hook or fetch call
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};
```

## Choosing Between Similar Hooks

### Debounce: Callback vs State vs Value

| Hook | Use when... | Returns |
|------|-------------|---------|
| `useDebounceCallback` | You need to debounce a **function call** (e.g., API search, analytics event). | A debounced function with `.cancel()`. |
| `useDebounceState` | You need both **instant local state** and a **debounced mirror** (e.g., input + preview). | `[debouncedValue, setDebounced]` tuple. |
| `useDebounceValue` | You have an **existing value** and just need a delayed version (simplest API). | The debounced value directly. |

The same pattern applies to the throttle family (`useThrottleCallback`, `useThrottleState`, `useThrottleValue`).

### Storage: localStorage vs sessionStorage vs generic

| Hook | Scope | Persistence |
|------|-------|-------------|
| `useLocalStorage` | Per-origin, all tabs | Survives browser restart |
| `useSessionStorage` | Per-tab | Cleared when tab closes |
| `useStorage` | Configurable | Pass `localStorage` or `sessionStorage` |

### Boolean state: useBoolean vs useToggle vs useDisclosure

| Hook | Best for |
|------|----------|
| `useBoolean` | Simple on/off with `toggle()` |
| `useToggle` | Cycling between two or more values |
| `useDisclosure` | Modal/panel open/close with `open()`, `close()`, `toggle()` helpers |

## High-Invocation Hooks Reference

The hooks below are the most commonly applied (HIGH invocation). For the **complete list of 165+ hooks** across all categories, consult `AGENTS.md` and the `./rules/` directory where each hook has its own reference file with full type declarations and examples.

### Helpers

| Hook | Description |
|------|-------------|
| createContext | Creates a typed context with provider and selector hook. |

### Elements

| Hook | Description |
|------|-------------|
| useClickOutside | Calls a callback when clicking outside the target element. |

### Async

| Hook | Description |
|------|-------------|
| useMutation | Defines mutation logic with loading, error, and success state. |
| useQuery | Defines query logic with loading, error, success, and refetch state. |

### Lifecycle

| Hook | Description |
|------|-------------|
| useDidUpdate | Runs an effect only on updates (not on initial mount). |
| useIsomorphicLayoutEffect | Uses `useLayoutEffect` on client, `useEffect` on server. |
| useMount | Runs a callback once when the component mounts. |
| useUnmount | Runs a callback when the component unmounts. |

### Browser

| Hook | Description |
|------|-------------|
| useEventListener | Attaches an event listener to a target. |

### Utilities

| Hook | Description |
|------|-------------|
| useConst | Returns a constant value initialized once. |
| useDebounceCallback | Creates a debounced callback with a cancel method. |
| useDebounceEffect | Runs an effect after a delay when dependencies change. |
| useDebounceState | Creates a debounced state setter. |
| useDebounceValue | Returns a debounced version of a value. |
| useEvent | Returns a stable callback reference that always calls the latest handler. |

### State

| Hook | Description |
|------|-------------|
| useBoolean | Manages a boolean state with a toggle helper. |
| useDisclosure | Manages open/close state with helpers. |
| useLocalStorage | Manages a value in localStorage. |
| useMap | Manages a Map with helper methods. |
| useStorage | Manages a value in Web Storage. |
| useToggle | A boolean switcher with utility functions. |
| useUrlSearchParam | Syncs a single URL search param with state. |
| useUrlSearchParams | Syncs multiple URL search params with state. |

### Time

| Hook | Description |
|------|-------------|
| useInterval | Creates an interval with controls to pause and resume it. |
| useStopwatch | Creates a stopwatch with start, pause, and reset controls. |

## MEDIUM and LOW Invocation Hooks

For the complete categorized reference of all MEDIUM and LOW invocation hooks (Elements, Async, Lifecycle, Browser, Utilities, State, User, Sensors, Time, Debug), see `AGENTS.md` and individual files in the `./rules/` directory. Each rule file contains usage examples, type declarations, and category metadata.

### Category Overview

| Category | MEDIUM hooks | LOW hooks | Key hooks |
|----------|-------------|-----------|-----------|
| Elements | 8 | 10 | useHover, useFocus, useDropZone |
| Async | 3 | 0 | useAsync, useOptimistic |
| Lifecycle | 2 | 2 | useAsyncEffect, useShallowEffect |
| Browser | 11 | 26 | useMediaQuery, useClipboard, useWebSocket |
| Utilities | 5 | 3 | useThrottleCallback, useLatest |
| State | 13 | 3 | useCookie, useField, useSessionStorage |
| User | 5 | 2 | usePreferredColorScheme, usePreferredDark |
| Sensors | 7 | 15 | useHotkeys, useIntersectionObserver |
| Time | 3 | 0 | useTimeout, useTimer |
| Debug | 1 | 3 | useRerender |

## SSR / Next.js Considerations

- Hooks that access `window`, `document`, or browser APIs (`useLocalStorage`, `useMediaQuery`, `useClipboard`, etc.) are **no-ops during SSR** and activate after hydration.
- Use `useIsomorphicLayoutEffect` instead of `useLayoutEffect` to avoid SSR warnings.
- `useQuery` supports `enabled` to defer fetching until client-side conditions are met.
- Always consult the hook's reference file in `./rules/` for SSR-specific notes.
