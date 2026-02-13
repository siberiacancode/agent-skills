# Reactuse

**Version 1.0.0**  
Siberiacancode  
January 2026

> **Note:**  
> This document is mainly for agents and LLMs to follow when maintaining,  
> generating, or refactoring React and Next.js codebases. Humans  
> may also find it useful, but guidance here is optimized for automation  
> and consistency by AI-assisted workflows.

---

## Abstract

Comprehensive performance optimization guide for React and Next.js applications, designed for AI agents and LLMs. Contains 40+ rules across 8 categories, prioritized by impact from critical (eliminating waterfalls, reducing bundle size) to incremental (advanced patterns). Each rule includes detailed explanations, real-world examples comparing incorrect vs. correct implementations, and specific impact metrics to guide automated refactoring and code generation.

---

## Table of Contents

1. [Helpers](#1-helpers)

   - 1.1 [createContext](#11-createcontext)
   - 1.2 [createEventEmitter](#12-createeventemitter)
   - 1.3 [createReactiveContext](#13-createreactivecontext)
   - 1.4 [createStore](#14-createstore)
   - 1.5 [target](#15-target)

2. [Elements](#2-elements)

   - 2.1 [useActiveElement](#21-useactiveelement)
   - 2.2 [useAutoScroll](#22-useautoscroll)
   - 2.3 [useClickOutside](#23-useclickoutside)
   - 2.4 [useDoubleClick](#24-usedoubleclick)
   - 2.5 [useDropZone](#25-usedropzone)
   - 2.6 [useFileDialog](#26-usefiledialog)
   - 2.7 [useFocus](#27-usefocus)
   - 2.8 [useFocusTrap](#28-usefocustrap)
   - 2.9 [useHover](#29-usehover)
   - 2.10 [useImage](#210-useimage)
   - 2.11 [useLockScroll](#211-uselockscroll)
   - 2.12 [useLongPress](#212-uselongpress)
   - 2.13 [usePaint](#213-usepaint)
   - 2.14 [useRightClick](#214-userightclick)
   - 2.15 [useScript](#215-usescript)
   - 2.16 [useSize](#216-usesize)
   - 2.17 [useSticky](#217-usesticky)
   - 2.18 [useTextareaAutosize](#218-usetextareaautosize)
   - 2.19 [useTextDirection](#219-usetextdirection)
   - 2.20 [useWindowFocus](#220-usewindowfocus)
   - 2.21 [useWindowSize](#221-usewindowsize)

3. [Async](#3-async)

   - 3.1 [useAsync](#31-useasync)
   - 3.2 [useLockCallback](#32-uselockcallback)
   - 3.3 [useMutation](#33-usemutation)
   - 3.4 [useOptimistic](#34-useoptimistic)
   - 3.5 [useQuery](#35-usequery)

4. [Lifecycle](#4-lifecycle)

   - 4.1 [useAsyncEffect](#41-useasynceffect)
   - 4.2 [useDidUpdate](#42-usedidupdate)
   - 4.3 [useIsFirstRender](#43-useisfirstrender)
   - 4.4 [useIsomorphicLayoutEffect](#44-useisomorphiclayouteffect)
   - 4.5 [useMount](#45-usemount)
   - 4.6 [useShallowEffect](#46-useshalloweffect)
   - 4.7 [useUnmount](#47-useunmount)

5. [Browser](#5-browser)

   - 5.1 [useAudio](#51-useaudio)
   - 5.2 [useBattery](#52-usebattery)
   - 5.3 [useBluetooth](#53-usebluetooth)
   - 5.4 [useBreakpoints](#54-usebreakpoints)
   - 5.5 [useBroadcastChannel](#55-usebroadcastchannel)
   - 5.6 [useClipboard](#56-useclipboard)
   - 5.7 [useCopy](#57-usecopy)
   - 5.8 [useCssVar](#58-usecssvar)
   - 5.9 [useDisplayMedia](#59-usedisplaymedia)
   - 5.10 [useDocumentEvent](#510-usedocumentevent)
   - 5.11 [useDocumentTitle](#511-usedocumenttitle)
   - 5.12 [useDocumentVisibility](#512-usedocumentvisibility)
   - 5.13 [useEventListener](#513-useeventlistener)
   - 5.14 [useEventSource](#514-useeventsource)
   - 5.15 [useEyeDropper](#515-useeyedropper)
   - 5.16 [useFavicon](#516-usefavicon)
   - 5.17 [useFps](#517-usefps)
   - 5.18 [useFullscreen](#518-usefullscreen)
   - 5.19 [useGamepad](#519-usegamepad)
   - 5.20 [useGeolocation](#520-usegeolocation)
   - 5.21 [useMeasure](#521-usemeasure)
   - 5.22 [useMediaControls](#522-usemediacontrols)
   - 5.23 [useMediaQuery](#523-usemediaquery)
   - 5.24 [useMemory](#524-usememory)
   - 5.25 [useNetwork](#525-usenetwork)
   - 5.26 [useOnline](#526-useonline)
   - 5.27 [useOtpCredential](#527-useotpcredential)
   - 5.28 [usePermission](#528-usepermission)
   - 5.29 [usePictureInPicture](#529-usepictureinpicture)
   - 5.30 [usePointerLock](#530-usepointerlock)
   - 5.31 [usePostMessage](#531-usepostmessage)
   - 5.32 [useRaf](#532-useraf)
   - 5.33 [useShare](#533-useshare)
   - 5.34 [useSpeechRecognition](#534-usespeechrecognition)
   - 5.35 [useSpeechSynthesis](#535-usespeechsynthesis)
   - 5.36 [useVibrate](#536-usevibrate)
   - 5.37 [useVirtualKeyboard](#537-usevirtualkeyboard)
   - 5.38 [useWakeLock](#538-usewakelock)
   - 5.39 [useWebSocket](#539-usewebsocket)

6. [Utilities](#6-utilities)

   - 6.1 [useBatchedCallback](#61-usebatchedcallback)
   - 6.2 [useConst](#62-useconst)
   - 6.3 [useDebounceCallback](#63-usedebouncecallback)
   - 6.4 [useDebounceEffect](#64-usedebounceeffect)
   - 6.5 [useDebounceState](#65-usedebouncestate)
   - 6.6 [useDebounceValue](#66-usedebouncevalue)
   - 6.7 [useDevicePixelRatio](#67-usedevicepixelratio)
   - 6.8 [useEvent](#68-useevent)
   - 6.9 [useLastChanged](#69-uselastchanged)
   - 6.10 [useLatest](#610-uselatest)
   - 6.11 [usePrevious](#611-useprevious)
   - 6.12 [useThrottleCallback](#612-usethrottlecallback)
   - 6.13 [useThrottleEffect](#613-usethrottleeffect)
   - 6.14 [useThrottleState](#614-usethrottlestate)
   - 6.15 [useThrottleValue](#615-usethrottlevalue)

7. [State](#7-state)

   - 7.1 [useBoolean](#71-useboolean)
   - 7.2 [useControllableState](#72-usecontrollablestate)
   - 7.3 [useCookie](#73-usecookie)
   - 7.4 [useCookies](#74-usecookies)
   - 7.5 [useCounter](#75-usecounter)
   - 7.6 [useDefault](#76-usedefault)
   - 7.7 [useDisclosure](#77-usedisclosure)
   - 7.8 [useField](#78-usefield)
   - 7.9 [useHash](#79-usehash)
   - 7.10 [useList](#710-uselist)
   - 7.11 [useLocalStorage](#711-uselocalstorage)
   - 7.12 [useMap](#712-usemap)
   - 7.13 [useMergedRef](#713-usemergedref)
   - 7.14 [useObject](#714-useobject)
   - 7.15 [useOffsetPagination](#715-useoffsetpagination)
   - 7.16 [useQueue](#716-usequeue)
   - 7.17 [useRafState](#717-userafstate)
   - 7.18 [useRefState](#718-userefstate)
   - 7.19 [useSessionStorage](#719-usesessionstorage)
   - 7.20 [useSet](#720-useset)
   - 7.21 [useStateHistory](#721-usestatehistory)
   - 7.22 [useStep](#722-usestep)
   - 7.23 [useStorage](#723-usestorage)
   - 7.24 [useToggle](#724-usetoggle)
   - 7.25 [useUrlSearchParam](#725-useurlsearchparam)
   - 7.26 [useUrlSearchParams](#726-useurlsearchparams)
   - 7.27 [useWizard](#727-usewizard)

8. [User](#8-user)

   - 8.1 [useBrowserLanguage](#81-usebrowserlanguage)
   - 8.2 [useOperatingSystem](#82-useoperatingsystem)
   - 8.3 [usePreferredColorScheme](#83-usepreferredcolorscheme)
   - 8.4 [usePreferredContrast](#84-usepreferredcontrast)
   - 8.5 [usePreferredDark](#85-usepreferreddark)
   - 8.6 [usePreferredLanguages](#86-usepreferredlanguages)
   - 8.7 [usePreferredReducedMotion](#87-usepreferredreducedmotion)

9. [Sensors](#9-sensors)

   - 9.1 [useDeviceMotion](#91-usedevicemotion)
   - 9.2 [useDeviceOrientation](#92-usedeviceorientation)
   - 9.3 [useHotkeys](#93-usehotkeys)
   - 9.4 [useIdle](#94-useidle)
   - 9.5 [useInfiniteScroll](#95-useinfinitescroll)
   - 9.6 [useIntersectionObserver](#96-useintersectionobserver)
   - 9.7 [useKeyboard](#97-usekeyboard)
   - 9.8 [useKeyPress](#98-usekeypress)
   - 9.9 [useKeyPressEvent](#99-usekeypressevent)
   - 9.10 [useKeysPressed](#910-usekeyspressed)
   - 9.11 [useMouse](#911-usemouse)
   - 9.12 [useMutationObserver](#912-usemutationobserver)
   - 9.13 [useOrientation](#913-useorientation)
   - 9.14 [usePageLeave](#914-usepageleave)
   - 9.15 [useParallax](#915-useparallax)
   - 9.16 [usePerformanceObserver](#916-useperformanceobserver)
   - 9.17 [useResizeObserver](#917-useresizeobserver)
   - 9.18 [useScroll](#918-usescroll)
   - 9.19 [useScrollIntoView](#919-usescrollintoview)
   - 9.20 [useScrollTo](#920-usescrollto)
   - 9.21 [useTextSelection](#921-usetextselection)
   - 9.22 [useVisibility](#922-usevisibility)
   - 9.23 [useWindowEvent](#923-usewindowevent)
   - 9.24 [useWindowScroll](#924-usewindowscroll)

10. [Time](#10-time)

- 10.1 [useInterval](#101-useinterval)
- 10.2 [useStopwatch](#102-usestopwatch)
- 10.3 [useTime](#103-usetime)
- 10.4 [useTimeout](#104-usetimeout)
- 10.5 [useTimer](#105-usetimer)
- 10.6 [useProgress](#106-useprogress)

11. [Debug](#11-debug)

- 11.1 [useLogger](#111-uselogger)
- 11.2 [useRenderCount](#112-userendercount)
- 11.3 [useRenderInfo](#113-userenderinfo)
- 11.4 [useRerender](#114-usererender)

---

## 1. Helpers

### 1.1 createContext

Creates a typed context with provider and selector hook.

#### Usage

```ts
import { createContext } from "@siberiacancode/reactuse";

const context = createContext(0);
```

#### Example

```tsx
import { createContext } from "@siberiacancode/reactuse";
import type { ReactNode } from "react";

const themeContext = createContext("light");

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <themeContext.Provider initialValue="light">{children}</themeContext.Provider>
);

export const CounterValue = () => {
  const theme = ThemeContext.useSelect((value) => value);
  return <span>{theme}</span>;
};
```

#### Type Declarations

```ts
import type { JSX, ReactNode } from "react";

export interface CreateContextOptions {
  name?: string;
  strict?: boolean;
}
export interface ContextValue<Value> {
  value: Value | undefined;
  set: (value: Value) => void;
}
export interface ProviderProps<Value> {
  children?: ReactNode;
  initialValue?: Value;
}
export interface CreateContextReturn<Value> {
  instance: React.Context<ContextValue<Value>>;
  Provider: (props: ProviderProps<Value>) => JSX.Element;
  useSelect: {
    <Selected>(selector: (value: Value) => Selected): Selected;
    (): ContextValue<Value>;
  };
}
export declare const createContext: <Value>(
  defaultValue?: Value,
  options?: CreateContextOptions
) => CreateContextReturn<Value>;
```

### 1.2 createEventEmitter

Creates a type-safe event emitter with a subscription hook.

#### Usage

```ts
import { createEventEmitter } from "@siberiacancode/reactuse";

const emitter = createEventEmitter<{
  foo: number;
}>();
```

#### Example

```tsx
const emitter = createEventEmitter<{ message: string }>();

export const Listener = () => {
  const value = emitter.useSubscribe("message");
  return <div>{value ?? "none"}</div>;
};

emitter.subscribe("message", (value) => console.log(value));
emitter.push("message", "hello");
```

#### Type Declarations

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

### 1.3 createReactiveContext

Creates a typed context selector with optimized updates.

#### Usage

```ts
import { createReactiveContext } from "@siberiacancode/reactuse";

const context = createReactiveContext({ count: 0 });
```

#### Example

```tsx
import { createReactiveContext } from "@siberiacancode/reactuse";
import type { ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
}

const userContext = createReactiveContext({ name: "", email: "" });

export const UserProvider = ({ children }: UserProviderProps) => (
  <userContext.Provider value={{ name: "Ada", email: "ada@example.com" }}>
    {children}
  </userContext.Provider>
);

export const UserLabel = () => {
  const name = userContext.useSelector((state) => state.name);
  return <span>{name}</span>;
};
```

#### Notes

- For complex interfaces, prefer external state management instead of context.

#### Type Declarations

```ts
import type { Context, Provider, RefObject } from "react";

export interface CreateReactiveContextOptions {
  name?: string;
  strict?: boolean;
}
export interface CreateReactiveContextReturn<Value> {
  instance: Context<ReactiveContextValue<Value>>;
  Provider: Provider<Value>;
  useSelector: <Selected>(selector?: (state: Value) => Selected) => Selected;
}
interface ReactiveContextValue<Value> {
  listeners: Set<(value: Value) => void>;
  value: RefObject<Value>;
}
export declare const createReactiveContext: <Value extends Record<string, any>>(
  defaultValue?: Value,
  options?: CreateReactiveContextOptions
) => CreateReactiveContextReturn<Value>;
```

### 1.4 createStore

Creates a external store with state, subscriptions, and a hook.

#### Usage

```ts
import { createStore } from "@siberiacancode/reactuse";

const store = createStore({ count: 0 });
```

#### Example

```tsx
import { createStore } from "@siberiacancode/reactuse";

const counter = createStore((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export const Counter = () => {
  const value = counter.use((state) => state.count);
  return (
    <div>
      <button onClick={() => counter.get().dec()}>-</button>
      <span>{value}</span>
      <button onClick={() => counter.get().inc()}>+</button>
      <button onClick={() => counter.get().reset()}>Reset</button>
      <button onClick={() => counter.set({ count: 10 })}>Set 10</button>
    </div>
  );
};
```

Subscriptions:

```tsx
const unsubscribe = counter.subscribe((state) => {
  console.log("count", state.count);
});
```

#### Type Declarations

```ts
type StoreSetAction<Value> = ((prev: Value) => Partial<Value>) | Partial<Value>;
type StoreListener<Value> = (state: Value, prevState: Value) => void;
type StoreCreator<Value> = (
  set: (action: StoreSetAction<Value>) => void,
  get: () => Value
) => Value;
export interface StoreApi<Value> {
  get: () => Value;
  getInitial: () => Value;
  set: (action: StoreSetAction<Value>) => void;
  subscribe: (listener: StoreListener<Value>) => () => void;
  use: (() => Value) &
    (<Selected>(selector: (state: Value) => Selected) => Selected) &
    (<Selected>(selector?: (state: Value) => Selected) => Selected | Value);
}
export declare const createStore: <Value>(
  createState: StoreCreator<Value> | Value
) => StoreApi<Value>;
```

### 1.5 target

Flexible helper to reference DOM targets for hooks.

#### Usage

```ts
import { target, useClickOutside } from "@siberiacancode/reactuse";

useClickOutside(target("#container"), () => console.log("outside"));
```

#### Example

Selector and element targets:

```tsx
import { target, useClickOutside } from "@siberiacancode/reactuse";

useClickOutside(target("#container"), () => console.log("outside"));
useClickOutside(target(document.getElementById("container")!), () =>
  console.log("outside")
);
```

#### Notes

- `target` accepts refs, DOM elements, functions returning elements, or selectors.
- Use it when you want to avoid creating a ref callback from the hook.

## 2. Elements

### 2.1 useActiveElement

Tracks the currently focused element.

#### Usage

```ts
import { useActiveElement } from "@siberiacancode/reactuse";

const activeElement = useActiveElement<HTMLDivElement>();
// or
const activeElement = useActiveElement(ref);
```

#### Example

```tsx
const activeElement = useActiveElement<HTMLDivElement>();

return (
  <>
    <div ref={activeElement.ref}>
      <input data-id="name" placeholder="Name" />
      <input data-id="email" placeholder="Email" />
    </div>
    <p>
      Active element: {activeElement.value?.getAttribute("data-id") ?? "none"}
    </p>
  </>
);
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseActiveElementReturn<
  ActiveElement extends HTMLElement = HTMLElement
> = ActiveElement | null;
export interface UseActiveElement {
  (): UseActiveElementReturn;
  <Target extends Element, ActiveElement extends HTMLElement = HTMLElement>(
    target?: never
  ): {
    ref: StateRef<Target>;
    value: UseActiveElementReturn<ActiveElement>;
  };
  <ActiveElement extends HTMLElement = HTMLElement>(
    target: HookTarget
  ): UseActiveElementReturn<ActiveElement>;
}
export declare const useActiveElement: UseActiveElement;
```

### 2.2 useAutoScroll

Automatically scrolls a container to the bottom.

#### Usage

```ts
import { useAutoScroll } from "@siberiacancode/reactuse";

const autoScrollRef = useAutoScroll<HTMLDivElement>();
// or
useAutoScroll(ref);
```

#### Example

```tsx
const autoScrollRef = useAutoScroll<HTMLDivElement>();

return (
  <div ref={autoScrollRef}>
    <div>First message</div>
    <div>Second message</div>
  </div>
);
```

`enabled`:

Disable auto scroll.

```tsx
const autoScrollRef = useAutoScroll<HTMLDivElement>({ enabled: false });
```

`force`:

Always jump to bottom.

```tsx
const autoScrollRef = useAutoScroll<HTMLDivElement>({ force: true });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseAutoScrollOptions {
  enabled?: boolean;
  force?: boolean;
}
export interface UseAutoScroll {
  (target: HookTarget, options?: UseAutoScrollOptions): void;
  <Target extends HTMLElement>(
    options?: UseAutoScrollOptions
  ): StateRef<Target>;
}
export declare const useAutoScroll: UseAutoScroll;
```

### 2.3 useClickOutside

Calls a callback when clicking outside the target element.

#### Usage

```ts
import { useClickOutside } from "@siberiacancode/reactuse";

const ref = useClickOutside<HTMLDivElement>(() => console.log("outside"));
// or
useClickOutside(ref, () => console.log("outside"));
```

#### Example

```tsx
const [open, setOpen] = useState(true);
const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));

if (!open) return <button onClick={() => setOpen(true)}>Open</button>;

return <div ref={ref}>Modal</div>;
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseClickOutside {
  (target: HookTarget, callback: (event: Event) => void): void;
  <Target extends Element>(
    callback: (event: Event) => void,
    target?: never
  ): StateRef<Target>;
}
export declare const useClickOutside: UseClickOutside;
```

### 2.4 useDoubleClick

Detects double-clicks with optional single-click handler.

#### Usage

```ts
import { useDoubleClick } from "@siberiacancode/reactuse";

const ref = useDoubleClick<HTMLButtonElement>(() => console.log("double"));
// or
useDoubleClick(ref, () => console.log("double"));
```

#### Example

```tsx
import { useDoubleClick } from "@siberiacancode/reactuse";

export const LikeButton = () => {
  const ref = useDoubleClick<HTMLButtonElement>(() => console.log("double"), {
    onSingleClick: () => console.log("single"),
  });

  return <button ref={ref}>Like</button>;
};
```

`threshold`:

Max time between clicks.

```tsx
const ref = useDoubleClick<HTMLButtonElement>(() => {}, { threshold: 400 });
```

`onSingleClick`:

Single-click handler.

```tsx
const ref = useDoubleClick<HTMLButtonElement>(() => {}, {
  onSingleClick: () => console.log("single"),
});
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type DoubleClickEvents = MouseEvent | TouchEvent;
export interface UseDoubleClickOptions {
  threshold?: number;
  onSingleClick?: (event: DoubleClickEvents) => void;
}
export interface UseDoubleClick {
  (
    target: HookTarget,
    callback: (event: DoubleClickEvents) => void,
    options?: UseDoubleClickOptions
  ): boolean;
  <Target extends Element>(
    callback: (event: DoubleClickEvents) => void,
    options?: UseDoubleClickOptions,
    target?: never
  ): StateRef<Target>;
}
export declare const useDoubleClick: UseDoubleClick;
```

### 2.5 useDropZone

Creates a drag-and-drop area with file state.

#### Usage

```ts
import { useDropZone } from "@siberiacancode/reactuse";

const dropZone = useDropZone<HTMLDivElement>();
// or
const dropZone = useDropZone(ref, { multiple: true });
```

#### Example

```tsx
import { useDropZone } from "@siberiacancode/reactuse";

export const AvatarDrop = () => {
  const dropZone = useDropZone<HTMLDivElement>({
    dataTypes: ["image/jpeg", "image/png"],
    multiple: false,
    onDrop: (files) => console.log("files", files),
  });
  const ref = dropZone.ref;

  return (
    <div ref={ref}>
      {dropZone.overed ? "Drop now" : "Drag image here"}
      <div>Files: {dropZone.files?.length ?? 0}</div>
    </div>
  );
};
```

`dataTypes`:

Allowed types.

```tsx
const dropZone = useDropZone<HTMLDivElement>({ dataTypes: ["image/jpeg"] });
```

`multiple`:

Allow multiple.

```tsx
const dropZone = useDropZone<HTMLDivElement>({ multiple: false });
```

`onDrop`:

Handle drop.

```tsx
const dropZone = useDropZone<HTMLDivElement>({
  onDrop: (files) => console.log(files?.length ?? 0),
});
```

`onEnter`:

Drag enter.

```tsx
const dropZone = useDropZone<HTMLDivElement>({
  onEnter: () => console.log("enter"),
});
```

`onLeave`:

Drag leave.

```tsx
const dropZone = useDropZone<HTMLDivElement>({
  onLeave: () => console.log("leave"),
});
```

`onOver`:

Drag over.

```tsx
const dropZone = useDropZone<HTMLDivElement>({
  onOver: () => console.log("over"),
});
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type DropZoneDataTypes = ((types: string[]) => boolean) | string[];
export interface UseDropZoneOptions {
  dataTypes?: DropZoneDataTypes;
  multiple?: boolean;
  onDrop?: (files: File[] | null, event: DragEvent) => void;
  onEnter?: (event: DragEvent) => void;
  onLeave?: (event: DragEvent) => void;
  onOver?: (event: DragEvent) => void;
}
export interface UseDropZoneReturn {
  files: File[] | null;
  overed: boolean;
}
export interface UseDropZone {
  (
    target: HookTarget,
    callback?: (files: File[] | null, event: DragEvent) => void
  ): UseDropZoneReturn;
  <Target extends Element>(
    callback?: (files: File[] | null, event: DragEvent) => void,
    target?: never
  ): UseDropZoneReturn & { ref: StateRef<Target> };
  (target: HookTarget, options?: UseDropZoneOptions): UseDropZoneReturn;
  <Target extends Element>(
    options?: UseDropZoneOptions,
    target?: never
  ): UseDropZoneReturn & { ref: StateRef<Target> };
}
export declare const useDropZone: UseDropZone;
```

### 2.6 useFileDialog

Opens a file picker and returns selected files.

#### Usage

```ts
import { useFileDialog } from "@siberiacancode/reactuse";

const dialog = useFileDialog();
```

#### Example

```tsx
const dialog = useFileDialog({ accept: "image/*" });

return (
  <button onClick={() => dialog.open()}>
    Selected: {dialog.value?.length ?? 0}
  </button>
);
```

`multiple`:

```tsx
const dialog = useFileDialog({ multiple: false });
```

`accept`:

```tsx
const dialog = useFileDialog({ accept: "image/*" });
```

`reset`:

```tsx
const dialog = useFileDialog({ reset: true });
```

`capture`:

```tsx
const dialog = useFileDialog({ capture: "environment" });
```

#### Type Declarations

```ts
import type { ComponentProps } from "react";

export interface UseFileDialogOptions
  extends Pick<ComponentProps<"input">, "accept" | "multiple"> {
  capture?: string;
  reset?: boolean;
}
export interface UseFileDialogReturn {
  value: FileList | null;
  open: (openParams?: UseFileDialogOptions) => void;
  reset: () => void;
}
export interface UseFileDialog {
  (
    callback?: (value: FileList | null) => void,
    options?: UseFileDialogOptions
  ): UseFileDialogReturn;
  (options?: UseFileDialogOptions, callback?: never): UseFileDialogReturn;
}
export declare const useFileDialog: UseFileDialog;
```

### 2.7 useFocus

Tracks focus state and provides focus/blur controls.

#### Usage

```ts
import { useFocus } from "@siberiacancode/reactuse";

const focus = useFocus<HTMLInputElement>();
// or
const focus = useFocus(ref, { enabled: true });
```

#### Example

```tsx
import { useFocus } from "@siberiacancode/reactuse";

export const FocusInput = () => {
  const focus = useFocus<HTMLInputElement>();

  return (
    <div>
      <input ref={focus.ref} />
      <button onClick={() => focus.focus()}>Focus</button>
      <button onClick={() => focus.blur()}>Blur</button>
    </div>
  );
};
```

`enabled`:

Enable focus tracking.

```tsx
const focus = useFocus<HTMLInputElement>({ enabled: false });
```

`initialValue`:

Initial focus state.

```tsx
const focus = useFocus<HTMLInputElement>({ initialValue: true });
```

`onFocus`:

Focus callback.

```tsx
const focus = useFocus<HTMLInputElement>({
  onFocus: () => console.log("focus"),
});
```

`onBlur`:

Blur callback.

```tsx
const focus = useFocus<HTMLInputElement>({ onBlur: () => console.log("blur") });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseFocusOptions {
  enabled?: boolean;
  initialValue?: boolean;
  onBlur?: (event: FocusEvent) => void;
  onFocus?: (event: FocusEvent) => void;
}
export interface UseFocusReturn {
  focused: boolean;
  blur: () => void;
  focus: () => void;
}
export interface UseFocus {
  (target: HookTarget, callback?: (event: FocusEvent) => void): UseFocusReturn;
  (target: HookTarget, options?: UseFocusOptions): UseFocusReturn;
  <Target extends Element>(
    callback?: (event: FocusEvent) => void,
    target?: never
  ): UseFocusReturn & { ref: StateRef<Target> };
  <Target extends Element>(
    options?: UseFocusOptions,
    target?: never
  ): UseFocusReturn & { ref: StateRef<Target> };
}
export declare const useFocus: UseFocus;
```

### 2.8 useFocusTrap

Traps focus within a given element.

#### Usage

```ts
import { useFocusTrap } from "@siberiacancode/reactuse";

const trap = useFocusTrap<HTMLDivElement>(true);
// or
const trap = useFocusTrap(ref, true);
```

#### Example

```tsx
import { useFocusTrap } from "@siberiacancode/reactuse";

export const Modal = () => {
  const trap = useFocusTrap<HTMLDivElement>(true);

  return (
    <div ref={trap.ref}>
      <input placeholder="Search" />
      <button onClick={() => trap.disable()}>Close</button>
    </div>
  );
};
```

`active`:

Initially active.

```tsx
const trap = useFocusTrap(true);
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseFocusTrapReturn {
  active: boolean;
  disable: () => void;
  enable: () => void;
  toggle: () => void;
}
export interface UseFocusTrap {
  (target: HookTarget, active?: boolean): UseFocusTrapReturn;
  <Target extends HTMLElement>(
    active?: boolean,
    target?: never
  ): UseFocusTrapReturn & { ref: StateRef<Target> };
}
export declare const useFocusTrap: UseFocusTrap;
```

### 2.9 useHover

Tracks hover state for an element.

#### Usage

```ts
import { useHover } from "@siberiacancode/reactuse";

const hover = useHover<HTMLDivElement>();
// or
const hover = useHover(targetRef, { enabled: true });
```

#### Example

```tsx
import { useHover } from "@siberiacancode/reactuse";

const hover = useHover<HTMLDivElement>();
return <div ref={hover.ref}>{hover.value ? "Hovering" : "Idle"}</div>;
```

`enabled`:

Toggle tracking.

```tsx
const hover = useHover<HTMLDivElement>({ enabled: false });
```

`onEntry`:

Enter callback.

```tsx
const hover = useHover<HTMLDivElement>({ onEntry: () => console.log("enter") });
```

`onLeave`:

Leave callback.

```tsx
const hover = useHover<HTMLDivElement>({ onLeave: () => console.log("leave") });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseHoverOptions {
  enabled?: boolean;
  onEntry?: (event: Event) => void;
  onLeave?: (event: Event) => void;
}
export interface UseHoverReturn {
  value: boolean;
}
export interface UseHover {
  (target: HookTarget, callback?: (event: Event) => void): boolean;
  (target: HookTarget, options?: UseHoverOptions): boolean;
  <Target extends Element>(callback?: (event: Event) => void, target?: never): {
    ref: StateRef<Target>;
  } & UseHoverReturn;
  <Target extends Element>(options?: UseHoverOptions, target?: never): {
    ref: StateRef<Target>;
  } & UseHoverReturn;
}
export declare const useHover: UseHover;
```

### 2.10 useImage

Loads an image with query-style state.

#### Usage

```ts
import { useImage } from "@siberiacancode/reactuse";

const image = useImage("https://example.com/image.png");
```

#### Example

`srcset`:

Source of the image.

```tsx
const image = useImage("/img.png", { srcset: "/img@2x.png 2x" });
```

`sizes`:

Sizes of the image.

```tsx
const image = useImage("/img.png", {
  sizes: "(max-width: 600px) 100vw, 600px",
});
```

`alt`:

Alt of the image.

```tsx
const image = useImage("/img.png", { alt: "Preview" });
```

`class`:

Class of the image.

```tsx
const image = useImage("/img.png", { class: "rounded" });
```

`loading`:

Loading of the image.

```tsx
const image = useImage("/img.png", { loading: "lazy" });
```

`crossorigin`:

Crossorigin of the image.

```tsx
const image = useImage("/img.png", { crossorigin: "anonymous" });
```

`referrerPolicy`:

Referrer policy of the image.

```tsx
const image = useImage("/img.png", { referrerPolicy: "no-referrer" });
```

`keys`:

Keys of the image.

```tsx
const image = useImage("/img.png", { keys: [theme] });
```

`onSuccess`:

On success callback.

```tsx
const image = useImage("/img.png", { onSuccess: (img) => console.log(img) });
```

`onError`:

On error callback.

```tsx
const image = useImage("/img.png", { onError: (err) => console.error(err) });
```

`refetchInterval`:

Refetch interval of the image.

```tsx
const image = useImage("/img.png", { refetchInterval: 5000 });
```

`retry`:

Retry count of the image.

```tsx
const image = useImage("/img.png", { retry: 2 });
```

#### Type Declarations

```ts
import type { UseQueryOptions, UseQueryReturn } from "@siberiacancode/reactuse";

export interface UseImageOptions {
  alt?: string;
  class?: string;
  crossorigin?: string;
  loading?: HTMLImageElement["loading"];
  referrerPolicy?: HTMLImageElement["referrerPolicy"];
  sizes?: string;
  srcset?: string;
}
export type UseImageReturn = UseQueryReturn<HTMLImageElement>;
export declare const useImage: (
  src: string,
  options?: UseImageOptions &
    Omit<
      UseQueryOptions<HTMLImageElement, HTMLImageElement>,
      "initialData" | "placeholderData" | "select"
    >
) => UseImageReturn;
```

### 2.11 useLockScroll

Locks scrolling on an element or the document body.

#### Usage

```ts
import { useLockScroll } from "@siberiacancode/reactuse";

const lock = useLockScroll<HTMLDivElement>();
// or
const lock = useLockScroll(ref, { enabled: true });
```

#### Example

```tsx
import { useLockScroll } from "@siberiacancode/reactuse";

export const Modal = () => {
  const lock = useLockScroll<HTMLDivElement>();

  return (
    <div ref={lock.ref}>
      <button onClick={() => lock.toggle()}>
        {lock.value ? "Unlock" : "Lock"} scroll
      </button>
    </div>
  );
};
```

`enabled`:

Start locked.

```tsx
const lock = useLockScroll<HTMLDivElement>({ enabled: false });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseLockScrollOptions {
  enabled?: boolean;
}
export interface UseLockScrollReturn<Target extends Element> {
  ref: StateRef<Target>;
  value: boolean;
  lock: () => void;
  toggle: (value?: boolean) => void;
  unlock: () => void;
}
export interface UseLockScroll {
  (
    target: HookTarget,
    options?: UseLockScrollOptions
  ): UseLockScrollReturn<Element>;
  <Target extends Element>(
    options?: UseLockScrollOptions,
    target?: never
  ): UseLockScrollReturn<Target> & { ref: StateRef<Target> };
}
export declare const useLockScroll: UseLockScroll;
```

### 2.12 useLongPress

Detects long press interactions.

#### Usage

```ts
import { useLongPress } from "@siberiacancode/reactuse";

const pressed = useLongPress<HTMLButtonElement>(() =>
  console.log("long press")
);
// or
const pressed = useLongPress(ref, () => console.log("long press"));
```

#### Example

```tsx
import { useLongPress } from "@siberiacancode/reactuse";

export const HoldButton = () => {
  const press = useLongPress<HTMLButtonElement>(() =>
    console.log("long press")
  );

  return <button ref={press.ref}>Hold</button>;
};
```

`threshold`:

Press duration.

```tsx
const ref = useLongPress<HTMLButtonElement>(() => {}, { threshold: 600 });
```

`onStart`:

Press start.

```tsx
const ref = useLongPress<HTMLButtonElement>(() => {}, {
  onStart: () => console.log("start"),
});
```

`onFinish`:

Press finish.

```tsx
const ref = useLongPress<HTMLButtonElement>(() => {}, {
  onFinish: () => console.log("finish"),
});
```

`onCancel`:

Press cancel.

```tsx
const ref = useLongPress<HTMLButtonElement>(() => {}, {
  onCancel: () => console.log("cancel"),
});
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type LongPressEvents = MouseEvent | TouchEvent;
export interface UseLongPressOptions {
  threshold?: number;
  onCancel?: (event: LongPressEvents) => void;
  onFinish?: (event: LongPressEvents) => void;
  onStart?: (event: LongPressEvents) => void;
}
export interface UseLongPress {
  (
    target: HookTarget,
    callback: (event: LongPressEvents) => void,
    options?: UseLongPressOptions
  ): boolean;
  <Target extends Element>(
    callback: (event: LongPressEvents) => void,
    options?: UseLongPressOptions,
    target?: never
  ): { ref: StateRef<Target>; pressed: boolean };
}
export declare const useLongPress: UseLongPress;
```

### 2.13 usePaint

Draws on a canvas and exposes drawing controls.

#### Usage

```ts
import { usePaint } from "@siberiacancode/reactuse";

const paint = usePaint<HTMLCanvasElement>();
// or
const paint = usePaint(ref, { color: "red" });
```

#### Example

```tsx
import { usePaint } from "@siberiacancode/reactuse";

export const Sketch = () => {
  const paint = usePaint<HTMLCanvasElement>({ color: "red", radius: 4 });
  const ref = paint.ref;

  return (
    <div>
      <canvas ref={ref} width={300} height={200} />
      <button onClick={() => paint.clear()}>Clear</button>
    </div>
  );
};
```

`color`:

Brush color.

```tsx
const paint = usePaint<HTMLCanvasElement>({ color: "red" });
```

`opacity`:

Brush opacity.

```tsx
const paint = usePaint<HTMLCanvasElement>({ opacity: 0.5 });
```

`radius`:

Brush size.

```tsx
const paint = usePaint<HTMLCanvasElement>({ radius: 6 });
```

`smooth`:

Smoothing toggle.

```tsx
const paint = usePaint<HTMLCanvasElement>({ smooth: true });
```

`initialLines`:

Restore drawings.

```tsx
const paint = usePaint<HTMLCanvasElement>({ initialLines: [] });
```

`onMouseDown`:

Start drawing.

```tsx
const paint = usePaint<HTMLCanvasElement>({
  onMouseDown: () => console.log("down"),
});
```

`onMouseMove`:

During drawing.

```tsx
const paint = usePaint<HTMLCanvasElement>({
  onMouseMove: () => console.log("move"),
});
```

`onMouseUp`:

Stop drawing.

```tsx
const paint = usePaint<HTMLCanvasElement>({
  onMouseUp: () => console.log("up"),
});
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface Point {
  x: number;
  y: number;
}
export interface UsePaintOptions {
  color?: string;
  initialLines?: Array<{
    points: Point[];
    color: string;
    radius: number;
    opacity: number;
  }>;
  opacity?: number;
  radius?: number;
  smooth?: boolean;
  onMouseDown?: (event: MouseEvent, paint: Paint) => void;
  onMouseMove?: (event: MouseEvent, paint: Paint) => void;
  onMouseUp?: (event: MouseEvent, paint: Paint) => void;
}
export interface UsePaintReturn {
  drawing: boolean;
  lines: Paint["lines"];
  clear: () => void;
  draw: (
    points: Point[],
    color: string,
    opacity: number,
    radius: number
  ) => void;
  undo: () => void;
}
export interface UsePaint {
  (target: HookTarget, options?: UsePaintOptions): UsePaintReturn;
  <Target extends HTMLCanvasElement>(
    options?: UsePaintOptions,
    target?: never
  ): UsePaintReturn & { ref: StateRef<Target> };
}
export declare const usePaint: UsePaint;
```

### 2.14 useRightClick

Handles right-click and long press events.

#### Usage

```ts
import { useRightClick } from "@siberiacancode/reactuse";

const ref = useRightClick<HTMLDivElement>(() => console.log("clicked"));
// or
useRightClick(ref, () => console.log("clicked"));
```

#### Example

```tsx
import { useRightClick } from "@siberiacancode/reactuse";
import { useState } from "react";

export const Menu = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRightClick<HTMLDivElement>(({ x, y }) => setPos({ x, y }));

  return (
    <div ref={ref}>
      Right click at {pos.x}, {pos.y}
    </div>
  );
};
```

`onStart`:

Press start.

```tsx
const ref = useRightClick<HTMLDivElement>(() => {}, {
  onStart: () => console.log("start"),
});
```

`onEnd`:

Press end.

```tsx
const ref = useRightClick<HTMLDivElement>(() => {}, {
  onEnd: () => console.log("end"),
});
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type RightClickEvent = MouseEvent | TouchEvent;
export interface RightClickPositions {
  x: number;
  y: number;
}
export interface UseRightClickOptions {
  onEnd?: (event: RightClickEvent) => void;
  onStart?: (event: RightClickEvent) => void;
}
export interface UseRightClick {
  (
    target: HookTarget,
    callback: (event: Event) => void,
    options?: UseRightClickOptions
  ): void;
  <Target extends Element>(
    callback: (positions: RightClickPositions, event: Event) => void,
    options?: UseRightClickOptions,
    target?: never
  ): StateRef<Target>;
}
export declare const useRightClick: UseRightClick;
```

### 2.15 useScript

Loads a script and returns its status.

#### Usage

```ts
import { useScript } from "@siberiacancode/reactuse";

const status = useScript("https://example.com/script.js");
```

#### Example

```tsx
import { useScript } from "@siberiacancode/reactuse";

const status = useScript("https://example.com/script.js");
return <div>Status: {status}</div>;
```

`async`:

```tsx
const status = useScript("https://example.com/script.js", { async: false });
```

`removeOnUnmount`:

```tsx
const status = useScript("https://example.com/script.js", {
  removeOnUnmount: false,
});
```

#### Type Declarations

```ts
import type { ComponentProps } from "react";

export type UseScriptStatus = "error" | "loading" | "ready" | "unknown";
export interface UseScriptOptions extends ComponentProps<"script"> {
  removeOnUnmount?: boolean;
}
export declare const useScript: (
  src: string,
  options?: UseScriptOptions
) => UseScriptStatus;
```

### 2.16 useSize

Observes element width and height.

#### Usage

```ts
import { useSize } from "@siberiacancode/reactuse";

const size = useSize<HTMLDivElement>();
// or
useSize(ref);
```

#### Example

```tsx
import { useSize } from "@siberiacancode/reactuse";

const size = useSize<HTMLDivElement>();
return (
  <div ref={size.ref}>
    {Math.round(size.value.width)}x{Math.round(size.value.height)}
  </div>
);
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseSizeValue {
  height: number;
  width: number;
}
export interface UseSizeReturn {
  observer?: ResizeObserver;
  value: UseSizeValue;
}
export interface UseSize {
  (target: HookTarget): UseSizeReturn;
  <Target extends Element>(target?: never): {
    ref: StateRef<Target>;
  } & UseSizeReturn;
}
export declare const useSize: UseSize;
```

### 2.17 useSticky

Detects whether a sticky element is stuck.

#### Usage

```ts
import { useSticky } from "@siberiacancode/reactuse";

const sticky = useSticky<HTMLDivElement>();
// or
useSticky(ref, { axis: "vertical" });
```

#### Example

```tsx
const sticky = useSticky<HTMLDivElement>();
return <div ref={sticky.ref}>{sticky.stuck ? "Stuck" : "Scrolling"}</div>;
```

`axis`:

Track axis.

```tsx
const sticky = useSticky<HTMLDivElement>({ axis: "horizontal" });
```

`root`:

Scroll container.

```tsx
const sticky = useSticky<HTMLDivElement>({ root: containerRef });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseStickyReturn {
  stuck: boolean;
}
export type UseStickyAxis = "horizontal" | "vertical";
export interface UseStickyOptions {
  axis?: UseStickyAxis;
  root?: HookTarget;
}
export interface UseSticky {
  (target: HookTarget, options?: UseStickyOptions): boolean;
  <Target extends Element>(options?: UseStickyOptions, target?: never): {
    ref: StateRef<Target>;
  } & UseStickyReturn;
}
export declare const useSticky: UseSticky;
```

### 2.18 useTextareaAutosize

Auto-resizes a textarea based on content.

#### Usage

```ts
import { useTextareaAutosize } from "@siberiacancode/reactuse";

const textarea = useTextareaAutosize<HTMLTextAreaElement>();
// or
const textarea = useTextareaAutosize(ref);
```

#### Example

```tsx
import { useTextareaAutosize } from "@siberiacancode/reactuse";

export const Notes = () => {
  const textarea = useTextareaAutosize<HTMLTextAreaElement>(
    "Write your thoughts..."
  );
  const ref = textarea.ref;

  return (
    <textarea
      ref={ref}
      value={textarea.value}
      onChange={(event) => textarea.set(event.target.value)}
    />
  );
};
```

`initialValue`:

Initial text.

```tsx
const textarea = useTextareaAutosize<HTMLTextAreaElement>("initial");
```

`onResize`:

Resize callback.

```tsx
const textarea = useTextareaAutosize<HTMLTextAreaElement>({
  onResize: () => console.log("resize"),
});
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseTextareaAutosizeOptions {
  initialValue?: string;
  onResize?: () => void;
}
export interface UseTextareaAutosizeReturn {
  value: string;
  clear: () => void;
  set: (value: string) => void;
}
export interface UseTextareaAutosize {
  (
    target: HookTarget,
    options?: UseTextareaAutosizeOptions
  ): UseTextareaAutosizeReturn;
  (target: HookTarget, initialValue: string): UseTextareaAutosizeReturn;
  <Target extends HTMLTextAreaElement = HTMLTextAreaElement>(
    initialValue: string,
    target?: never
  ): UseTextareaAutosizeReturn & { ref: StateRef<Target> };
  <Target extends HTMLTextAreaElement = HTMLTextAreaElement>(
    options?: UseTextareaAutosizeOptions,
    target?: never
  ): UseTextareaAutosizeReturn & { ref: StateRef<Target> };
}
export declare const useTextareaAutosize: UseTextareaAutosize;
```

### 2.19 useTextDirection

Gets and sets the text direction of an element.

#### Usage

```ts
import { useTextDirection } from "@siberiacancode/reactuse";

const direction = useTextDirection<HTMLDivElement>();
// or
const direction = useTextDirection(ref, "rtl");
```

#### Example

```tsx
import { useTextDirection } from "@siberiacancode/reactuse";

export const DirectionToggle = () => {
  const direction = useTextDirection<HTMLDivElement>("ltr");

  return (
    <div ref={direction.ref}>
      <button onClick={() => direction.set("rtl")}>
        Current: {direction.value}
      </button>
    </div>
  );
};
```

`initialValue`:

Initial direction.

```tsx
const direction = useTextDirection<HTMLDivElement>("rtl");
direction.set("ltr");
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseTextDirectionValue = "auto" | "ltr" | "rtl";
export interface UseTextDirectionReturn {
  value: UseTextDirectionValue;
  remove: () => void;
  set: (value: UseTextDirectionValue | null) => void;
}
export interface UseTextDirection {
  (
    target: HookTarget,
    initialValue?: UseTextDirectionValue
  ): UseTextDirectionReturn;
  <Target extends Element>(
    initialValue?: UseTextDirectionValue,
    target?: never
  ): UseTextDirectionReturn & { ref: StateRef<Target> };
}
export declare const useTextDirection: UseTextDirection;
```

### 2.20 useWindowFocus

Returns the current focus state of the window.

#### Usage

```ts
import { useWindowFocus } from "@siberiacancode/reactuse";

const focused = useWindowFocus();
```

#### Example

```tsx
import { useWindowFocus } from "@siberiacancode/reactuse";

export const FocusState = () => {
  const focused = useWindowFocus();

  return (
    <div>
      {focused ? "Focused" : "Blurred"}
      {!focused && <p>Paused while tab is inactive.</p>}
    </div>
  );
};
```

#### Type Declarations

```ts
export declare const useWindowFocus: () => boolean;
```

### 2.21 useWindowSize

Returns current window width and height.

#### Usage

```ts
import { useWindowSize } from "@siberiacancode/reactuse";

const size = useWindowSize();
```

#### Example

```tsx
import { useWindowSize } from "@siberiacancode/reactuse";

export const Banner = () => {
  const size = useWindowSize();

  return (
    <div>
      Width: {size.width}px, Height: {size.height}px
    </div>
  );
};
```

`includeScrollbar`:

```tsx
const size = useWindowSize({ includeScrollbar: false });
console.log(size.width, size.height);
```

#### Type Declarations

```ts
interface UseWindowSizeParams {
  includeScrollbar?: boolean;
}
export interface UseWindowSizeReturn {
  height: number;
  width: number;
}
export declare const useWindowSize: (
  params?: UseWindowSizeParams
) => UseWindowSizeReturn;
```

## 3. Async

### 3.1 useAsync

Tracks loading, error, and data state for a promise-returning callback.

#### Usage

```ts
import { useAsync } from "@siberiacancode/reactuse";

const userAsync = useAsync(
  () => fetch("/api/user").then((res) => res.json()),
  []
);
```

#### Example

```tsx
const userAsync = useAsync<User>(
  () => fetch(`/api/me`).then((res) => res.json()),
  []
);

if (userAsync.isLoading || !userAsync.data) return <p>Loading...</p>;
if (userAsync.isError) return <p>Failed to load user.</p>;

return <div>User: {userAsync.data.name}</div>;
```

#### Type Declarations

```ts
import type { DependencyList } from "react";

export interface UseAsyncReturn<Data> {
  data?: Data;
  error?: Error;
  isError: boolean;
  isLoading: boolean;
}
export declare const useAsync: <Data>(
  callback: () => Promise<Data>,
  deps?: DependencyList
) => UseAsyncReturn<Data>;
```

### 3.2 useLockCallback

Prevents a callback from running multiple times simultaneously.

#### Usage

```ts
import { useLockCallback } from "@siberiacancode/reactuse";

const lockedSubmit = useLockCallback(async () => {
  await saveForm();
});
```

#### Example

```tsx
import { useLockCallback } from "@siberiacancode/reactuse";

export const SaveButton = () => {
  const saveOnce = useLockCallback(async () => {
    await fetch("/api/save", { method: "POST" });
  });

  return <button onClick={saveOnce}>Save</button>;
};
```

#### Type Declarations

```ts
export declare const useLockCallback: <
  Callback extends (...args: any[]) => any
>(
  callback: Callback
) => (...args: Parameters<Callback>) => Promise<any>;
```

### 3.3 useMutation

Defines mutation logic with loading, error, and success state.

#### Usage

```ts
import { useMutation } from "@siberiacancode/reactuse";

const mutation = useMutation((name: string) => Promise.resolve(name));
```

#### Example

`retry` (boolean or number of retries):

```tsx
const mutation = useMutation(saveProfile, { retry: 3 });
```

`retryDelay` (number or function):

```tsx
const mutation = useMutation(saveProfile, {
  retryDelay: (attempt) => attempt * 500,
});
```

`onSuccess` (side effect on success):

```tsx
const mutation = useMutation(saveProfile, {
  onSuccess: (data) => console.log("Saved", data),
});
```

`onError` (side effect on error):

```tsx
const mutation = useMutation(saveProfile, {
  onError: (error) => console.error(error),
});
```

#### Type Declarations

```ts
interface UseMutationOptions<Data> {
  retry?: ((failureCount: number, error: Error) => boolean) | boolean | number;
  retryDelay?: ((retry: number, error: Error) => number) | number;
  onError?: (error: Error) => void;
  onSuccess?: (data: Data) => void;
}
interface UseMutationReturn<Body, Data> {
  data: Data | null;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  mutate: (body?: Body, options?: UseMutationOptions<Data>) => void;
  mutateAsync: (
    body?: Body,
    options?: UseMutationOptions<Data>
  ) => Promise<Data>;
}
export declare const useMutation: <Body, Data>(
  callback: (body: Body) => Promise<Data>,
  options?: UseMutationOptions<Data>
) => UseMutationReturn<Body, Data>;
```

### 3.4 useOptimistic

Allows showing an optimistic value before the async update resolves.

#### Usage

```ts
import { useOptimistic } from "@siberiacancode/reactuse";

const [optimisticCount, updateOptimistic] = useOptimistic(
  count,
  (current, delta) => current + delta
);
```

#### Example

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

#### Type Declarations

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

### 3.5 useQuery

Defines query logic with loading, error, success, and refetch state.

#### Usage

```ts
import { useQuery } from "@siberiacancode/reactuse";

const query = useQuery(({ signal }) =>
  fetch("/api/user", { signal }).then((res) => res.json())
);
```

#### Example

`enabled` (skip initial fetch until true):

```tsx
const query = useQuery(fetchUser, { enabled: isOpen });
```

`keys` (re-run when dependencies change):

```tsx
const query = useQuery(fetchUser, { keys: [userId] });
```

`placeholderData` (initial UI data):

```tsx
const query = useQuery(fetchUser, {
  placeholderData: { name: "Loading..." },
});
```

`refetchInterval` (polling):

```tsx
const query = useQuery(fetchStats, { refetchInterval: 5000 });
```

`retry` (boolean or number of retries):

```tsx
const query = useQuery(fetchUser, { retry: 2 });
```

`retryDelay` (number or function):

```tsx
const query = useQuery(fetchUser, {
  retryDelay: (attempt) => attempt * 300,
});
```

`onSuccess` (side effect on success):

```tsx
const query = useQuery(fetchUser, {
  onSuccess: (data) => console.log(data),
});
```

`onError` (side effect on error):

```tsx
const query = useQuery(fetchUser, {
  onError: (error) => console.error(error),
});
```

`select` (transform data):

```tsx
const query = useQuery(fetchUser, {
  select: (data) => data.profile,
});
```

#### Notes

- The callback receives `{ signal, keys }` for cancellation and dependency awareness.
- Use `refetch()` to manually refresh the data.

#### Type Declarations

```ts
import type { DependencyList } from "react";

export interface UseQueryOptions<QueryData, Data> {
  enabled?: boolean;
  keys?: DependencyList;
  placeholderData?: (() => Data) | Data;
  refetchInterval?: number;
  retry?: boolean | number;
  retryDelay?: ((retry: number, error: Error) => number) | number;
  onError?: (error: Error) => void;
  onSuccess?: (data: Data) => void;
  select?: (data: QueryData) => Data;
}
interface UseQueryCallbackParams {
  keys: DependencyList;
  signal: AbortSignal;
}
export interface UseQueryReturn<Data> {
  abort: AbortController["abort"];
  data?: Data;
  error?: Error;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  isSuccess: boolean;
  refetch: () => void;
}
export declare const useQuery: <QueryData, Data = QueryData>(
  callback: (params: UseQueryCallbackParams) => Promise<QueryData>,
  options?: UseQueryOptions<QueryData, Data>
) => UseQueryReturn<Data>;
```

## 4. Lifecycle

### 4.1 useAsyncEffect

Runs async side effects.

#### Usage

```ts
import { useAsyncEffect } from "@siberiacancode/reactuse";

useAsyncEffect(async () => {
  console.log("async effect");
}, deps);
```

#### Example

```tsx
useAsyncEffect(async () => {
  const response = await fetch("/api/me").then((response) => response.json());
  console.log(response.data);
}, [message.id]);

//...
```

#### Type Declarations

```ts
import type { DependencyList } from "react";

export declare const useAsyncEffect: (
  callback: () => Promise<any>,
  deps?: DependencyList
) => void;
```

### 4.2 useDidUpdate

Runs an effect only on updates (not on initial mount).

#### Usage

```ts
import { useDidUpdate } from "@siberiacancode/reactuse";

useDidUpdate(() => console.log("updated"), [value]);
```

#### Example

```tsx
import { useDidUpdate } from "@siberiacancode/reactuse";

interface ProfileProps {
  name: string;
}

export const Profile = ({ name }: ProfileProps) => {
  useDidUpdate(() => {
    console.log("name changed");
  }, [name]);

  return <div>{name}</div>;
};
```

#### Type Declarations

```ts
import type { DependencyList, EffectCallback } from "react";

export declare const useDidUpdate: (
  effect: EffectCallback,
  deps?: DependencyList
) => void;
```

### 4.3 useIsFirstRender

Returns `true` only on the first render.

#### Usage

```ts
import { useIsFirstRender } from "@siberiacancode/reactuse";

const isFirst = useIsFirstRender();
```

#### Example

```tsx
import { useIsFirstRender } from "@siberiacancode/reactuse";

export const Banner = () => {
  const isFirst = useIsFirstRender();
  return <div>{isFirst ? "Welcome!" : "Welcome back"}</div>;
};
```

#### Type Declarations

```ts
export declare const useIsFirstRender: () => boolean;
```

### 4.4 useIsomorphicLayoutEffect

Uses `useLayoutEffect` on the client and `useEffect` on the server.

#### Usage

```ts
import { useIsomorphicLayoutEffect } from "@siberiacancode/reactuse";

useIsomorphicLayoutEffect(() => {}, []);
```

#### Example

```tsx
useIsomorphicLayoutEffect(() => {}, []);
```

#### Type Declarations

```ts
import type { useEffect } from "react";

export declare const useIsomorphicLayoutEffect: typeof useEffect;
```

### 4.5 useMount

Runs a callback once when the component mounts.

#### Usage

```ts
import { useMount } from "@siberiacancode/reactuse";

useMount(() => console.log("mounted"));
```

#### Example

```tsx
import { useMount } from "@siberiacancode/reactuse";

export const Tracker = () => {
  useMount(() => {
    console.log("track mount");
  });

  return <div>Mounted</div>;
};
```

#### Type Declarations

```ts
import type { EffectCallback } from "react";

export declare const useMount: (effect: EffectCallback) => void;
```

### 4.6 useShallowEffect

Runs an effect only when dependencies change shallowly or deeply.

#### Usage

```ts
import { useShallowEffect } from "@siberiacancode/reactuse";

useShallowEffect(() => console.log("effect"), [user]);
```

#### Example

```tsx
import { useShallowEffect } from "@siberiacancode/reactuse";

interface UserCardProps {
  user: {
    id: string;
    name: string;
  };
}

export const UserCard = ({ user }: UserCardProps) => {
  useShallowEffect(() => console.log("effect"), [user]);

  return <div>{user.name}</div>;
};
```

#### Notes

- Uses a deep comparison helper to decide if dependencies changed.

#### Type Declarations

```ts
import type { DependencyList, EffectCallback } from "react";

export declare const deepEqual: (a: any, b: any) => boolean;
export declare const useShallowEffect: (
  effect: EffectCallback,
  deps?: DependencyList
) => void;
```

### 4.7 useUnmount

Runs a callback when the component unmounts.

#### Usage

```ts
import { useUnmount } from "@siberiacancode/reactuse";

useUnmount(() => console.log("unmounted"));
```

#### Example

```tsx
import { useUnmount } from "@siberiacancode/reactuse";

export const Cleanup = () => {
  useUnmount(() => {
    console.log("cleanup");
  });

  return <div>Unmount me</div>;
};
```

#### Type Declarations

```ts
export declare const useUnmount: (callback: () => void) => void;
```

## 5. Browser

### 5.1 useAudio

Manages audio playback (play/pause/stop), volume, rate, and sprite segments.

#### Usage

```ts
import { useAudio } from "@siberiacancode/reactuse";

const audio = useAudio("/sounds/pop.mp3");
```

```ts
import { useAudio } from "@siberiacancode/reactuse";

const audio = useAudio("/sounds/sprite.mp3", {
  sprite: {
    click: [0, 0.25],
    success: [0.6, 1.1],
  },
});
```

#### Example

```tsx
const audio = useAudio("/sounds/track.mp3");

return (
  <div>
    <button onClick={() => audio.play()}>Play</button>
    <button onClick={audio.pause}>Pause</button>
    <button onClick={audio.stop}>Stop</button>
  </div>
);
```

`immediately`:

Try to autoplay on mount.

```tsx
const audio = useAudio("/sounds/alert.mp3", { immediately: true });
```

`interrupt`:

Stop current playback before starting.

```tsx
const audio = useAudio("/sounds/click.mp3", { interrupt: true });

<button onClick={() => audio.play()}>Play</button>;
```

`playbackRate`:

Speed from 0.5 to 2.

```tsx
const audio = useAudio("/sounds/typing.mp3", { playbackRate: 1.5 });
```

`sprite`:

Play named segment.

```tsx
const audio = useAudio("/sounds/ui-sprite.mp3", {
  sprite: {
    open: [0, 0.2],
    close: [0.3, 0.5],
  },
});

<button onClick={() => audio.play("open")}>Open</button>;
```

`volume`:

Level from 0 to 1.

```tsx
const audio = useAudio("/sounds/ambient.mp3", { volume: 0.3 });
```

#### Notes

- Hook uses the [Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Audio).

#### Type Declarations

```ts
import type {
  SpriteMap,
  UseAudioOptions,
  UseAudioReturn,
} from "@siberiacancode/reactuse";

export interface SpriteMap {
  [key: string]: [number, number];
}
export interface UseAudioOptions {
  immediately?: boolean;
  interrupt?: boolean;
  playbackRate?: number;
  sprite?: SpriteMap;
  volume?: number;
}
export interface UseAudioReturn {
  playbackRate: number;
  playing: boolean;
  volume: number;
  changePlaybackRate: (value: number) => void;
  pause: () => void;
  play: (sprite?: string) => Promise<void>;
  setVolume: (value: number) => void;
  stop: () => void;
}
export declare const useAudio: (
  src: string,
  options?: UseAudioOptions
) => UseAudioReturn;
```

### 5.2 useBattery

Returns battery status and support state.

#### Usage

```ts
import { useBattery } from "@siberiacancode/reactuse";

const battery = useBattery();
```

#### Example

```tsx
import { useBattery } from "@siberiacancode/reactuse";

export const BatteryStatus = () => {
  const battery = useBattery();
  if (!battery.supported) return <div>Not supported</div>;

  return (
    <div>
      Level: {Math.round(battery.value.level * 100)}%{" "}
      {battery.value.charging ? "(charging)" : ""}
    </div>
  );
};
```

#### Use cases

Our applications normally are not empathetic to battery level, we can make a few adjustments to our applications that will be more friendly to low battery users.

- Trigger a special "dark-mode" battery saver theme settings.
- Stop auto playing videos in news feeds.
- Disable some background workers that are not critical.
- Limit network calls and reduce CPU/Memory consumption.

#### Notes

- Hook uses the [navigator.getBattery API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery).

#### Type Declarations

```ts
export interface UseBatteryValue {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  loading: boolean;
}
export interface UseBatteryStateReturn {
  supported: boolean;
  value: UseBatteryValue;
}
export declare const useBattery: () => UseBatteryStateReturn;
```

### 5.3 useBluetooth

Requests and connects to Bluetooth devices.

#### Usage

```ts
import { useBluetooth } from "@siberiacancode/reactuse";

const bluetooth = useBluetooth();
```

#### Example

```tsx
import { useBluetooth } from "@siberiacancode/reactuse";

export const BluetoothStatus = () => {
  const bluetooth = useBluetooth({ acceptAllDevices: true });

  if (!bluetooth.supported) return <p>Not supported</p>;

  return (
    <div>
      <button onClick={() => bluetooth.requestDevice()}>Request device</button>
      <p>Connected: {String(bluetooth.connected)}</p>
    </div>
  );
};
```

`acceptAllDevices`:

Show all nearby devices in the chooser.

```tsx
const bluetooth = useBluetooth({ acceptAllDevices: true });
```

`filters`:

Filter devices by name/service.

```tsx
const bluetooth = useBluetooth({
  filters: [{ namePrefix: "Device" }],
});
```

`optionalServices`:

Request additional GATT services.

```tsx
const bluetooth = useBluetooth({
  optionalServices: ["battery_service"],
});
```

Battery level example:

This sample illustrates the use of the Web Bluetooth API to read battery level and be notified of changes from a nearby Bluetooth Device advertising Battery information with Bluetooth Low Energy.

Here, we use the characteristicvaluechanged event listener to handle reading battery level characteristic value. This event listener will optionally handle upcoming notifications as well.

```tsx
import { useBluetooth } from "@siberiacancode/reactuse";
import { useEffect, useRef, useState } from "react";

export const BatteryMonitor = () => {
  const bluetooth = useBluetooth({
    acceptAllDevices: true,
    optionalServices: ["battery_service"],
  });

  const [battery, setBattery] = useState<number | undefined>();
  const characteristicRef = useRef<BluetoothRemoteGATTCharacteristic>();

  useEffect(() => {
    const server = bluetooth.server;
    if (!server) return;

    const onChange = (event: Event) => {
      const characteristic = event.target as BluetoothRemoteGATTCharacteristic;
      const value = characteristic.value?.getUint8(0);
      if (value != null) setBattery(value);
    };

    const connect = async () => {
      const service = await server.getPrimaryService("battery_service");
      const characteristic = await service.getCharacteristic("battery_level");

      characteristicRef.current = characteristic;

      characteristic.addEventListener("characteristicvaluechanged", onChange);
      await characteristic.startNotifications();

      const initial = await characteristic.readValue();
      setBattery(initial.getUint8(0));
    };

    connect();

    return () => {
      const characteristic = characteristicRef.current;
      if (!characteristic) return;

      characteristic.removeEventListener(
        "characteristicvaluechanged",
        onChange
      );
      characteristic.stopNotifications();
      characteristicRef.current = null;
    };
  }, [bluetooth.server]);

  return (
    <div>
      <button onClick={() => bluetooth.requestDevice()}>Request device</button>

      <p>Connected: {String(bluetooth.connected)}</p>
      <p>Battery: {battery != null ? `${battery}%` : "—"}</p>
    </div>
  );
};
```

#### Notes

- Hook uses the [navigator.bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/bluetooth).

#### Type Declarations

```ts
export interface UseBluetoothReturn {
  connected: boolean;
  device?: BluetoothDevice;
  server?: BluetoothRemoteGATTServer;
  supported: boolean;
  requestDevice: () => Promise<void>;
}
export interface UseBluetoothOptions {
  acceptAllDevices?: boolean;
  filters?: BluetoothLEScanFilter[];
  optionalServices?: BluetoothServiceUUID[];
}
export declare const useBluetooth: (
  options?: UseBluetoothOptions
) => UseBluetoothReturn;
```

### 5.4 useBreakpoints

Manages responsive breakpoints and helper predicates.

#### Usage

```ts
import { useBreakpoints } from "@siberiacancode/reactuse";

const breakpoints = useBreakpoints({ mobile: 0, tablet: 640, desktop: 1024 });
```

#### Example

```tsx
const breakpoints = useBreakpoints({ sm: 640, md: 768, lg: 1024 });

const active = breakpoints.active();

return (
  <div>
    Active: {active}
    <div>Is large: {String(breakpoints.greaterOrEqual("lg"))}</div>
  </div>
);
```

`breakpoints`:

Breakpoint map with pixel values.

```tsx
const breakpoints = useBreakpoints({ sm: 640, md: 768, lg: 1024 });
```

`strategy`:

The strategy option controls how the shortcut properties behave:

- min-width (default, mobile-first): breakpoints.lg is true when viewport is >= lg
- max-width (desktop-first): breakpoints.lg is true when viewport is < xl

```tsx
const breakpoints = useBreakpoints({ sm: 640, md: 768 }, "desktop-first");
```

`between`:

Check if width is between two breakpoints.

```tsx
const breakpoints = useBreakpoints({ sm: 640, md: 768, lg: 1024 });
const isTablet = breakpoints.between("sm", "lg");
```

#### Presets

- Material UI: `BREAKPOINTS_MATERIAL_UI`
- Mantine: `BREAKPOINTS_MANTINE`
- Tailwind: `BREAKPOINTS_TAILWIND`
- Bootstrap v5: `BREAKPOINTS_BOOTSTRAP_V5`
- Ant Design: `BREAKPOINTS_ANT_DESIGN`
- Quasar v2: `BREAKPOINTS_QUASAR_V2`
- Sematic: `BREAKPOINTS_SEMANTIC`
- Master CSS: `BREAKPOINTS_MASTER_CSS`
- Prime Flex: `BREAKPOINTS_PRIME_FLEX`

```ts
import { BREAKPOINTS_TAILWIND } from "@siberiacancode/reactuse";
```

#### Notes

- Use only when CSS cannot solve the layout.

#### Type Declarations

```ts
export type Breakpoints<Breakpoint extends string = string> = Record<
  Breakpoint,
  number
>;
export type UseBreakpointsStrategy = "desktop-first" | "mobile-first";
export type UseBreakpointsReturn<Breakpoint extends string = string> = {
  greater: (breakpoint: Breakpoint) => boolean;
  greaterOrEqual: (breakpoint: Breakpoint) => boolean;
  smaller: (breakpoint: Breakpoint) => boolean;
  smallerOrEqual: (breakpoint: Breakpoint) => boolean;
  between: (a: Breakpoint, b: Breakpoint) => boolean;
  current: () => Breakpoint[];
  active: () => Breakpoint;
} & Record<Breakpoint, boolean>;
export declare const useBreakpoints: <Breakpoint extends string>(
  breakpoints: Breakpoints<Breakpoint>,
  strategy?: UseBreakpointsStrategy
) => UseBreakpointsReturn<Breakpoint>;
```

### 5.5 useBroadcastChannel

Enables cross-tab/window messaging.

#### Usage

```ts
import { useBroadcastChannel } from "@siberiacancode/reactuse";

const channel = useBroadcastChannel("channel");
```

#### Example

```tsx
const channel = useBroadcastChannel<string>("sync", (message) => {
  console.log(message);
});

return (
  <button onClick={() => channel.post("ping")}>
    Last: {channel.data ?? "none"}
  </button>
);
```

#### Notes

- Hook uses the [BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel).

#### Type Declarations

```ts
export interface UseBroadcastChannelReturn<Data = unknown> {
  channel?: BroadcastChannel;
  closed: boolean;
  data?: Data;
  error?: Event;
  supported: boolean;
  close: () => void;
  post: (data: Data) => void;
}
export declare const useBroadcastChannel: <Data = unknown>(
  name: string,
  callback?: (data: Data) => void
) => UseBroadcastChannelReturn<Data>;
```

### 5.6 useClipboard

Reads and copies text from the clipboard.

#### Usage

```ts
import { useClipboard } from "@siberiacancode/reactuse";

const clipboard = useClipboard();
```

#### Example

Copy button:

```tsx
const clipboard = useClipboard();

return (
  <button onClick={() => clipboard.copy("team@example.com")}>
    {clipboard.value ?? "Copy email"}
  </button>
);
```

`enabled` (track copy/cut events):

```tsx
const clipboard = useClipboard({ enabled: true });
```

#### Notes

- Hook uses the [navigator.clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard).

#### Type Declarations

```ts
export interface UseCopyToClipboardReturn {
  value: string | null;
  copy: (value: string) => Promise<void>;
}
export interface UseCopyToClipboardParams {
  enabled: boolean;
}
export declare const useClipboard: (
  params?: UseCopyToClipboardParams
) => UseCopyToClipboardReturn;
```

### 5.7 useCopy

Copies text and resets status after a delay.

#### Usage

```ts
import { useCopy } from "@siberiacancode/reactuse";

const copyState = useCopy();
```

#### Example

```tsx
const linkCopy = useCopy(1500);

return (
  <button onClick={() => linkCopy.copy("https://reactuse.org")}>
    {linkCopy.copied ? "Copied!" : "Copy link"}
  </button>
);
```

`delay` (reset timeout):

```tsx
const copyState = useCopy(2000);
```

#### Notes

- Hook uses the [navigator.clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard).

#### Type Declarations

```ts
export interface UseCopyReturn {
  copied: boolean;
  value?: string;
  copy: (value: string) => Promise<void>;
}
export declare const useCopy: (delay?: number) => UseCopyReturn;
```

### 5.8 useCssVar

Reads and writes a CSS custom property.

#### Usage

```ts
import { useCssVar } from "@siberiacancode/reactuse";

const cssVar = useCssVar<HTMLDivElement>("--color", "red");
// or
const cssVar = useCssVar(ref, "--color", "red");
```

#### Example

```tsx
const cssVar = useCssVar<HTMLDivElement>("--bg", "tomato");

return (
  <div ref={cssVar.ref} style={{ background: cssVar.value }}>
    <button onClick={() => cssVar.set("steelblue")}>Change</button>
  </div>
);
```

Targeted element:

```tsx
const cssVar = useCssVar<HTMLDivElement>("--panel-bg", "#111");

return (
  <section ref={cssVar.ref} style={{ background: cssVar.value }}>
    <button onClick={() => cssVar.set("#333")}>Darken</button>
    <button onClick={() => cssVar.remove()}>Reset</button>
  </section>
);
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseCssVarReturn {
  value: string;
  remove: () => void;
  set: (value: string) => void;
}
export interface UseCssVar {
  <Target extends HTMLElement>(
    key: string,
    initialValue?: string
  ): UseCssVarReturn & { ref: StateRef<Target> };
  (target: HookTarget, key: string, initialValue?: string): UseCssVarReturn;
}
export declare const useCssVar: UseCssVar;
```

### 5.9 useDisplayMedia

Provides screen sharing controls and stream state.

#### Usage

```ts
import { useDisplayMedia } from "@siberiacancode/reactuse";

const displayMedia = useDisplayMedia<HTMLVideoElement>();
// or
const displayMedia = useDisplayMedia(ref);
```

#### Example

```tsx
import { useDisplayMedia } from "@siberiacancode/reactuse";

export const ScreenShare = () => {
  const displayMedia = useDisplayMedia<HTMLVideoElement>({ video: true });

  return (
    <div>
      <button onClick={() => displayMedia.start()}>Start</button>
      <button onClick={displayMedia.stop}>Stop</button>
      <video ref={displayMedia.ref} autoPlay muted />
    </div>
  );
};
```

`audio`:

Share audio.

```tsx
const displayMedia = useDisplayMedia<HTMLVideoElement>({ audio: true });
```

`video`:

Share video.

```tsx
const displayMedia = useDisplayMedia<HTMLVideoElement>({ video: true });
```

`immediately`:

Auto-start.

```tsx
const displayMedia = useDisplayMedia<HTMLVideoElement>({ immediately: true });
```

#### Notes

- Hook uses the [mediaDevices.getDisplayMedia API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia).

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseDisplayMediaReturn {
  sharing: boolean;
  stream: MediaStream | null;
  supported: boolean;
  start: () => Promise<void>;
  stop: () => void;
}
export interface UseDisplayMediaOptions {
  audio?: boolean | MediaTrackConstraints;
  immediately?: boolean;
  video?: boolean | MediaTrackConstraints;
}
export interface UseDisplayMedia {
  (target: HookTarget, options?: UseDisplayMediaOptions): UseDisplayMediaReturn;
  <Target extends HTMLVideoElement>(
    options?: UseDisplayMediaOptions,
    target?: never
  ): UseDisplayMediaReturn & { ref: StateRef<Target> };
}
export declare const useDisplayMedia: UseDisplayMedia;
```

### 5.10 useDocumentEvent

Attaches an event listener to the document.

#### Usage

```ts
import { useDocumentEvent } from "@siberiacancode/reactuse";

useDocumentEvent("click", () => console.log("clicked"));
```

#### Example

```tsx
useDocumentEvent("keydown", (event) => {
  if (event.key === "Escape") onClose();
});
```

`enabled`:

```tsx
useDocumentEvent("click", () => {}, { enabled: false });
```

#### Type Declarations

```ts
import type { UseEventListenerOptions } from "@siberiacancode/reactuse";

export declare const useDocumentEvent: <Event extends keyof DocumentEventMap>(
  event: Event,
  listener: (this: Document, event: DocumentEventMap[Event]) => any,
  options?: UseEventListenerOptions
) => void;
```

### 5.11 useDocumentTitle

Reads and updates the document title.

#### Usage

```ts
import { useDocumentTitle } from "@siberiacancode/reactuse";

const title = useDocumentTitle("My App");
```

#### Example

```tsx
import { useDocumentTitle } from "@siberiacancode/reactuse";

export const TitleEditor = () => {
  const title = useDocumentTitle("Dashboard");

  return (
    <input
      value={title.value}
      onChange={(event) => title.set(event.target.value)}
    />
  );
};
```

`initialValue`:

```tsx
const title = useDocumentTitle("Dashboard");
```

`restoreOnUnmount`:

```tsx
const title = useDocumentTitle("Profile", { restoreOnUnmount: true });
```

#### Notes

- Hook uses the [document.title API](https://developer.mozilla.org/en-US/docs/Web/API/Document/title).

#### Type Declarations

```ts
export interface UseDocumentTitleOptions {
  restoreOnUnmount?: boolean;
}
export interface UseDocumentTitleReturn {
  value: string;
  set: (title: string) => void;
}
export declare function useDocumentTitle(
  initialValue?: string,
  options?: UseDocumentTitleOptions
): UseDocumentTitleReturn;
```

### 5.12 useDocumentVisibility

Returns the document visibility state.

#### Usage

```ts
import { useDocumentVisibility } from "@siberiacancode/reactuse";

const documentVisibility = useDocumentVisibility();
```

#### Example

```tsx
const documentVisibility = useDocumentVisibility();
return <div>{documentVisibility === "hidden" ? "Hidden" : "Visible"}</div>;
```

#### Type Declarations

```ts
export declare const useDocumentVisibility: () => DocumentVisibilityState;
```

### 5.13 useEventListener

Attaches an event listener to a target.

#### Usage

```ts
import { useEventListener } from "@siberiacancode/reactuse";

useEventListener(window, "click", () => console.log("click"));
// or
const eventListenerRef = useEventListener<HTMLButtonElement>("click", () =>
  console.log("click")
);
```

#### Example

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

#### Type Declarations

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

### 5.14 useEventSource

Provides a reactive wrapper around EventSource.

#### Usage

```ts
import { useEventSource } from "@siberiacancode/reactuse";

const stream = useEventSource("/sse", ["message"]);
```

#### Example

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

#### Notes

- Hook uses the [EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource).

#### Type Declarations

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

### 5.15 useEyeDropper

Provides access to the EyeDropper API.

#### Usage

```ts
import { useEyeDropper } from "@siberiacancode/reactuse";

const eyeDropper = useEyeDropper();
```

#### Example

```tsx
const eye = useEyeDropper("#ffffff");

return <button onClick={() => eye.open()}>{eye.value ?? "Pick color"}</button>;
```

`initialValue`:

```tsx
const eye = useEyeDropper("#ffffff");
```

#### Notes

- Hook uses the [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper).

#### Type Declarations

```ts
export interface ColorSelectionOptions {
  signal?: AbortSignal;
}
export interface ColorSelectionResult {
  sRGBHex: string;
}
export interface UseEyeDropperReturn {
  supported: boolean;
  value?: string;
  open: (
    colorSelectionOptions?: ColorSelectionOptions
  ) => Promise<ColorSelectionResult>;
}
export declare const useEyeDropper: (
  initialValue?: string
) => UseEyeDropperReturn;
```

### 5.16 useFavicon

Reads and updates the current favicon.

#### Usage

```ts
import { useFavicon } from "@siberiacancode/reactuse";

const favicon = useFavicon();
```

#### Example

```tsx
const favicon = useFavicon("/light.ico");

return (
  <button onClick={() => favicon.set("/dark.ico")}>
    Current: {favicon.href}
  </button>
);
```

`initialFavicon`:

```tsx
const favicon = useFavicon("https://example.com/favicon.ico");
```

#### Type Declarations

```ts
import type { Dispatch, SetStateAction } from "react";

export type UseFaviconReturn = [string, Dispatch<SetStateAction<string>>];
export declare const useFavicon: (initialHref?: string) => {
  href: string;
  set: (favicon: string) => void;
};
```

### 5.17 useFps

Measures frames per second.

#### Usage

```ts
import { useFps } from "@siberiacancode/reactuse";

const fps = useFps();
```

#### Example

```tsx
const fps = useFps();
return <div>FPS: {fps}</div>;
```

#### Notes

- Hook uses the [requestAnimationFrame API](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

#### Type Declarations

```ts
export declare const useFps: () => number;
```

### 5.18 useFullscreen

Controls fullscreen state for an element.

#### Usage

```ts
import { useFullscreen } from "@siberiacancode/reactuse";

const fullscreen = useFullscreen<HTMLDivElement>();
// or
const fullscreen = useFullscreen(targetRef, { initialValue: false });
```

#### Example

```tsx
const fullscreen = useFullscreen<HTMLDivElement>();

return (
  <div ref={fullscreen.ref}>
    <button onClick={() => fullscreen.toggle()}>
      {fullscreen.value ? "Exit" : "Enter"} fullscreen
    </button>
  </div>
);
```

`initialValue`:

Start fullscreen.

```tsx
const fullscreen = useFullscreen<HTMLDivElement>({ initialValue: true });
```

`onEnter`:

Enter callback.

```tsx
const fullscreen = useFullscreen<HTMLDivElement>({
  onEnter: () => console.log("enter"),
});
```

`onExit`:

Exit callback.

```tsx
const fullscreen = useFullscreen<HTMLDivElement>({
  onExit: () => console.log("exit"),
});
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseFullScreenOptions {
  initialValue?: boolean;
  onEnter?: () => void;
  onExit?: () => void;
}
export interface UseFullScreenReturn {
  value: boolean;
  enter: () => void;
  exit: () => void;
  toggle: () => void;
}
export interface UseFullScreen {
  (target: HookTarget, options?: UseFullScreenOptions): UseFullScreenReturn;
  <Target extends Element>(
    options?: UseFullScreenOptions,
    target?: never
  ): UseFullScreenReturn & { ref: StateRef<Target> };
}
export declare const useFullscreen: UseFullScreen;
```

### 5.19 useGamepad

Returns connected gamepads and active status.

#### Usage

```ts
import { useGamepad } from "@siberiacancode/reactuse";

const gamepad = useGamepad();
```

#### Example

```tsx
import { useGamepad } from "@siberiacancode/reactuse";

export const GamepadList = () => {
  const gamepad = useGamepad();
  if (!gamepad.supported) return <div>Not supported</div>;

  const first = gamepad.gamepads[0];

  return (
    <div>
      Connected: {gamepad.gamepads.length}
      <div>Active: {String(gamepad.active)}</div>
      <div>First: {first ? first.id : "none"}</div>
    </div>
  );
};
```

#### Notes

- Hook uses the [navigator.getGamepads API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getGamepads).

#### Type Declarations

```ts
export interface UseGamepadStateReturn {
  active: boolean;
  gamepads: Gamepad[];
  supported: boolean;
}
export declare const useGamepad: () => UseGamepadStateReturn;
```

### 5.20 useGeolocation

Returns the current geolocation and updates on changes.

#### Usage

```ts
import { useGeolocation } from "@siberiacancode/reactuse";

const geolocation = useGeolocation();
```

#### Example

```tsx
import { useGeolocation } from "@siberiacancode/reactuse";

export const Location = () => {
  const geolocation = useGeolocation();

  if (geolocation.loading) return <p>Locating...</p>;
  if (geolocation.error) return <p>Permission denied</p>;

  return (
    <p>
      {geolocation.latitude}, {geolocation.longitude}
    </p>
  );
};
```

`enableHighAccuracy`:

```tsx
const geolocation = useGeolocation({ enableHighAccuracy: true });
```

`maximumAge`:

```tsx
const geolocation = useGeolocation({ maximumAge: 60000 });
```

`timeout`:

```tsx
const geolocation = useGeolocation({ timeout: 5000 });
```

#### Notes

- Hook uses the [navigator.geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation).

#### Type Declarations

```ts
export interface UseGeolocationReturn {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  error: GeolocationPositionError | null;
  heading: number | null;
  latitude: number | null;
  loading: boolean;
  longitude: number | null;
  speed: number | null;
  timestamp: number | null;
}
export type UseGeolocationParams = PositionOptions;
export declare const useGeolocation: (
  params?: UseGeolocationParams
) => UseGeolocationReturn;
```

### 5.21 useMeasure

Measures an element's size and position.

#### Usage

```ts
import { useMeasure } from "@siberiacancode/reactuse";

const rect = useMeasure<HTMLDivElement>();
// or
const rect = useMeasure(ref);
```

#### Example

```tsx
const measure = useMeasure<HTMLDivElement>();

return (
  <div ref={measure.ref}>
    Width: {Math.round(measure.width)}px
    <div>Height: {Math.round(measure.height)}px</div>
  </div>
);
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseMeasureReturn = Pick<
  DOMRectReadOnly,
  "bottom" | "height" | "left" | "right" | "top" | "width" | "x" | "y"
>;
export interface UseMeasure {
  (target: HookTarget): UseMeasureReturn;
  <Target extends Element>(target?: never): UseMeasureReturn & {
    ref: StateRef<Target>;
  };
}
export declare const useMeasure: UseMeasure;
```

### 5.22 useMediaControls

Provides controls and state for audio/video elements.

#### Usage

```ts
import { useMediaControls } from "@siberiacancode/reactuse";

const media = useMediaControls<HTMLVideoElement>("video.mp4");
// or
const media = useMediaControls(ref, { src: "video.mp4", type: "video/mp4" });
```

#### Example

```tsx
import { useMediaControls } from "@siberiacancode/reactuse";

export const Player = () => {
  const media = useMediaControls<HTMLVideoElement>("video.mp4");

  return (
    <div>
      <video ref={videoMediaControls.ref} src="video.mp4" type="video/mp4" />
      <button onClick={() => media.toggle()}>
        {media.playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};
```

`src`:

Media source.

```tsx
const media = useMediaControls<HTMLAudioElement>("audio.mp3");
```

`type`:

Mime type.

```tsx
const media = useMediaControls<HTMLVideoElement>({
  src: "video.mp4",
  type: "video/mp4",
});
```

`media`:

Media query.

```tsx
const media = useMediaControls<HTMLVideoElement>({
  src: "video.mp4",
  media: "(min-width: 800px)",
});
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseMediaSource {
  media?: string;
  src: string;
  type?: string;
}
export interface UseMediaControlsReturn {
  buffered: [number, number][];
  currentTime: number;
  duration: number;
  ended: boolean;
  muted: boolean;
  playbackRate: number;
  playing: boolean;
  seeking: boolean;
  stalled: boolean;
  volume: number;
  waiting: boolean;
  changePlaybackRate: (rate: number) => void;
  changeVolume: (volume: number) => void;
  mute: () => void;
  pause: () => void;
  play: () => Promise<void>;
  seek: (time: number) => void;
  toggle: () => Promise<void>;
  unmute: () => void;
}
export interface UseMediaControls {
  (target: HookTarget, src: string): UseMediaControlsReturn;
  (target: HookTarget, options: UseMediaSource): UseMediaControlsReturn;
  <Target extends HTMLMediaElement>(src: string): UseMediaControlsReturn & {
    ref: StateRef<Target>;
  };
  <Target extends HTMLMediaElement>(
    options: UseMediaSource
  ): UseMediaControlsReturn & { ref: StateRef<Target> };
}
export declare const useMediaControls: UseMediaControls;
```

### 5.23 useMediaQuery

Returns whether a media query matches.

#### Usage

```ts
import { useMediaQuery } from "@siberiacancode/reactuse";

const matches = useMediaQuery("(max-width: 768px)");
```

#### Example

```tsx
import { useMediaQuery } from "@siberiacancode/reactuse";

export const MobileOnly = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <div>Mobile layout</div> : <div>Desktop layout</div>;
};
```

#### Notes

- Hook uses the [matchMedia API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

#### Type Declarations

```ts
export declare const useMediaQuery: (query: string) => boolean;
```

### 5.24 useMemory

Returns the current JS heap memory usage.

#### Usage

```ts
import { useMemory } from "@siberiacancode/reactuse";

const memory = useMemory();
```

#### Example

```tsx
import { useMemory } from "@siberiacancode/reactuse";

export const Memory = () => {
  const memory = useMemory();
  if (!memory.supported) return <div>Not supported</div>;

  const used =
    Math.round((memory.value.usedJSHeapSize / 1024 / 1024) * 10) / 10;

  return <div>Heap used: {used} MB</div>;
};
```

#### Notes

- Hook uses the [performance.memory API](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory).

#### Type Declarations

```ts
export interface UseMemoryReturn {
  supported: boolean;
  value: Performance["memory"];
}
export declare const useMemory: () => UseMemoryReturn;
```

### 5.25 useNetwork

Tracks online status and connection information.

#### Usage

```ts
import { useNetwork } from "@siberiacancode/reactuse";

const network = useNetwork();
```

#### Example

```tsx
import { useNetwork } from "@siberiacancode/reactuse";

export const NetworkInfo = () => {
  const network = useNetwork();
  return (
    <div>
      {network.online ? "Online" : "Offline"}
      {network.online && (
        <div>
          Type: {network.type ?? "unknown"} ({network.effectiveType ?? "n/a"})
        </div>
      )}
    </div>
  );
};
```

#### Notes

- Hook uses the [navigator.connection API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection).

#### Type Declarations

```ts
export interface UseNetworkReturn {
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: "2g" | "3g" | "4g" | "slow-2g";
  online: boolean;
  rtt?: number;
  saveData?: boolean;
  type?:
    | "bluetooth"
    | "cellular"
    | "ethernet"
    | "mixed"
    | "none"
    | "other"
    | "unknown"
    | "wifi"
    | "wimax";
}
export declare const useNetwork: () => UseNetworkReturn;
```

### 5.26 useOnline

Returns whether the user is online.

#### Usage

```ts
import { useOnline } from "@siberiacancode/reactuse";

const online = useOnline();
```

#### Example

```tsx
import { useOnline } from "@siberiacancode/reactuse";

export const Status = () => {
  const online = useOnline();
  return (
    <div>
      {online ? "Online" : "Offline"}
      {!online && <div>Changes will sync when you reconnect.</div>}
    </div>
  );
};
```

#### Notes

- Hook uses the [navigator.onLine API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine).

#### Type Declarations

```ts
export declare const useOnline: () => boolean;
```

### 5.27 useOtpCredential

Requests an OTP credential from the user agent.

#### Usage

```ts
import { useOtpCredential } from "@siberiacancode/reactuse";

const otp = useOtpCredential();
```

#### Example

```tsx
const otp = useOtpCredential();

return (
  <button onClick={() => otp.get()}>
    {otp.supported ? "Read SMS code" : "Not supported"}
  </button>
);
```

`onSuccess`:

```tsx
const otp = useOtpCredential({
  onSuccess: (credential) => console.log(credential),
});
```

`onError`:

```tsx
const otp = useOtpCredential({
  onError: (error) => console.error(error),
});
```

#### Notes

- Hook uses the [navigator.credentials API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials).

#### Type Declarations

```ts
export type UseOtpCredentialCallback = (otp: Credential | null) => void;
export interface UseOtpCredentialParams {
  onError?: (error: any) => void;
  onSuccess?: (credential: Credential | null) => void;
}
export interface UseOtpCredentialReturn {
  abort: AbortController["abort"];
  supported: boolean;
  get: () => Promise<Credential | null>;
}
export interface UseOtpCredential {
  (callback?: UseOtpCredentialCallback): UseOtpCredentialReturn;
  (params?: UseOtpCredentialParams): UseOtpCredentialReturn;
}
export declare const useOtpCredential: UseOtpCredential;
```

### 5.28 usePermission

Returns the state of a given permission.

#### Usage

```ts
import { usePermission } from "@siberiacancode/reactuse";

const permission = usePermission("microphone");
```

#### Example

```tsx
const permission = usePermission("camera");
return <div>{permission.state}</div>;
```

`enabled`:

```tsx
const permission = usePermission("camera", { enabled: false });
```

#### Notes

- Hook uses the [navigator.permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions).

#### Type Declarations

```ts
export type UsePermissionName =
  | "accelerometer"
  | "accessibility-events"
  | "ambient-light-sensor"
  | "background-sync"
  | "camera"
  | "clipboard-read"
  | "clipboard-write"
  | "gyroscope"
  | "magnetometer"
  | "microphone"
  | "notifications"
  | "payment-handler"
  | "persistent-storage"
  | "push"
  | "speaker"
  | PermissionName;
export interface UsePermissionOptions {
  enabled: boolean;
}
export interface UsePermissionReturn {
  state: PermissionState;
  supported: boolean;
  query: () => Promise<PermissionState>;
}
export declare const usePermission: (
  permissionDescriptorName: UsePermissionName,
  options?: UsePermissionOptions
) => UsePermissionReturn;
```

### 5.29 usePictureInPicture

Controls Picture-in-Picture mode for video elements.

#### Usage

```ts
import { usePictureInPicture } from "@siberiacancode/reactuse";

const pip = usePictureInPicture<HTMLVideoElement>();
// or
const pip = usePictureInPicture(ref, { onEnter: () => {} });
```

#### Example

```tsx
import { usePictureInPicture } from "@siberiacancode/reactuse";

const pip = usePictureInPicture<HTMLVideoElement>();
return (
  <div>
    <video ref={pip.ref} src="/video.mp4" controls />
    <button onClick={() => pip.toggle()}>
      {pip.open ? "Exit" : "Enter"} PiP
    </button>
  </div>
);
```

`onEnter`:

Enter callback.

```tsx
const pip = usePictureInPicture<HTMLVideoElement>({
  onEnter: () => console.log("enter"),
});
```

`onExit`:

Exit callback.

```tsx
const pip = usePictureInPicture<HTMLVideoElement>({
  onExit: () => console.log("exit"),
});
```

#### Notes

- Hook uses the [Picture-in-Picture API](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API).

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UsePictureInPictureOptions {
  onEnter?: () => void;
  onExit?: () => void;
}
export interface UsePictureInPictureReturn {
  open: boolean;
  supported: boolean;
  enter: () => Promise<void>;
  exit: () => Promise<void>;
  toggle: () => Promise<void>;
}
export interface UsePictureInPicture {
  (
    target: HookTarget,
    options?: UsePictureInPictureOptions
  ): UsePictureInPictureReturn;
  (options?: UsePictureInPictureOptions): UsePictureInPictureReturn & {
    ref: StateRef<HTMLVideoElement>;
  };
}
export declare const usePictureInPicture: UsePictureInPicture;
```

### 5.30 usePointerLock

Provides reactive pointer lock controls.

#### Usage

```ts
import { usePointerLock } from "@siberiacancode/reactuse";

const pointerLock = usePointerLock();
```

#### Example

```tsx
import { usePointerLock } from "@siberiacancode/reactuse";

export const Canvas = () => {
  const pointer = usePointerLock();
  return <div onClick={pointer.lock}>Click to lock</div>;
};
```

#### Notes

- Hook uses the [pointerLockElement API](https://developer.mozilla.org/en-US/docs/Web/API/Document/pointerLockElement).

#### Type Declarations

```ts
import type { MouseEvent } from "react";

interface UsePointerLockReturn {
  element?: Element;
  supported: boolean;
  lock: (event: MouseEvent) => void;
  unlock: () => boolean;
}
export declare const usePointerLock: () => UsePointerLockReturn;
```

### 5.31 usePostMessage

Receives and posts messages between windows/frames.

#### Usage

```ts
import { usePostMessage } from "@siberiacancode/reactuse";

const postMessage = usePostMessage("*", (message) => console.log(message));
```

#### Example

```tsx
const postMessage = usePostMessage<string>("*", (message) => {
  console.log("received", message);
});

return <button onClick={() => postMessage("ping")}>Send</button>;
```

#### Type Declarations

```ts
export type UsePostMessageOrigin = string | "*" | string[];
export type UsePostMessageReturn<Message> = (message: Message) => void;
export declare const usePostMessage: <Message>(
  origin: UsePostMessageOrigin,
  callback: (message: Message, event: MessageEvent<Message>) => void
) => UsePostMessageReturn<Message>;
```

### 5.32 useRaf

Runs a callback on each animation frame.

#### Usage

```ts
import { useRaf } from "@siberiacancode/reactuse";

const raf = useRaf(() => console.log("callback"));
```

#### Example

```tsx
const [ticks, setTicks] = useState(0);
const raf = useRaf(() => setTicks((value) => value + 1));

return <button onClick={() => raf.pause()}>Ticks: {ticks}</button>;
```

`delay`:

```tsx
const raf = useRaf(() => console.log("callback"), { delay: 100 });
```

`enabled`:

```tsx
const raf = useRaf(() => console.log("callback"), { enabled: false });
```

#### Notes

- Hook uses the [requestAnimationFrame API](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

#### Type Declarations

```ts
export interface UseRafParams {
  delta: number;
  timestamp: DOMHighResTimeStamp;
}
export type UseRafCallback = (params: UseRafParams) => void;
export interface UseRafOptions {
  delay?: number;
  enabled?: boolean;
}
export interface UseRafReturn {
  active: boolean;
  pause: () => void;
  resume: () => void;
}
export declare const useRaf: (
  callback: UseRafCallback,
  options?: UseRafOptions
) => UseRafReturn;
```

### 5.33 useShare

Triggers the native share dialog.

#### Usage

```ts
import { useShare } from "@siberiacancode/reactuse";

const share = useShare();
```

#### Example

```tsx
import { useShare } from "@siberiacancode/reactuse";

const share = useShare();
return (
  <button
    onClick={() =>
      share.trigger({
        title: "Design notes",
        text: "Check this out",
        url: "https://example.com",
      })
    }
    disabled={!share.supported}
  >
    Share
  </button>
);
```

`text`:

```tsx
const share = useShare({ text: "Hello" });
```

`title`:

```tsx
const share = useShare({ title: "Article" });
```

`url`:

```tsx
const share = useShare({ url: "https://example.com" });
```

`files`:

```tsx
const share = useShare({ files: [file] });
```

#### Notes

- Hook uses the [navigator.share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share).

#### Type Declarations

```ts
export interface UseShareParams {
  files?: File[];
  text?: string;
  title?: string;
  url?: string;
}
export interface UseShareReturn {
  supported: boolean;
  trigger: (shareParams: ShareData) => Promise<void>;
}
export declare const useShare: (params?: UseShareParams) => UseShareReturn;
```

### 5.34 useSpeechRecognition

Provides speech-to-text recognition controls and state.

#### Usage

```ts
import { useSpeechRecognition } from "@siberiacancode/reactuse";

const speech = useSpeechRecognition();
```

#### Example

```tsx
import { useSpeechRecognition } from "@siberiacancode/reactuse";

export const VoiceNote = () => {
  const speech = useSpeechRecognition({ language: "en-US" });

  if (!speech.supported) return <div>Not supported</div>;

  return (
    <div>
      <button onClick={() => speech.toggle()}>
        {speech.listening ? "Stop" : "Start"}
      </button>
      <div>Transcript: {speech.transcript}</div>
    </div>
  );
};
```

`continuous`:

```tsx
const speech = useSpeechRecognition({ continuous: true });
```

`interimResults`:

```tsx
const speech = useSpeechRecognition({ interimResults: true });
```

`language`:

```tsx
const speech = useSpeechRecognition({ language: "ru-RU" });
```

`maxAlternatives`:

```tsx
const speech = useSpeechRecognition({ maxAlternatives: 3 });
```

`grammars`:

```tsx
const speech = useSpeechRecognition({ grammars });
```

`onStart`:

```tsx
const speech = useSpeechRecognition({ onStart: () => console.log("start") });
```

`onEnd`:

```tsx
const speech = useSpeechRecognition({ onEnd: () => console.log("end") });
```

`onError`:

```tsx
const speech = useSpeechRecognition({
  onError: (error) => console.error(error),
});
```

`onResult`:

```tsx
const speech = useSpeechRecognition({
  onResult: (event) => console.log(event),
});
```

#### Notes

- Hook uses the [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).

#### Type Declarations

```ts
interface UseSpeechRecognitionOptions {
  continuous?: SpeechRecognition["continuous"];
  grammars?: SpeechRecognition["grammars"];
  interimResults?: SpeechRecognition["interimResults"];
  language?: SpeechRecognition["lang"];
  maxAlternatives?: SpeechRecognition["maxAlternatives"];
  onEnd?: () => void;
  onError?: (error: SpeechRecognitionErrorEvent) => void;
  onResult?: (event: SpeechRecognitionEvent) => void;
  onStart?: () => void;
}
interface UseSpeechRecognitionReturn {
  error: SpeechRecognitionErrorEvent | null;
  final: boolean;
  listening: boolean;
  recognition?: SpeechRecognition;
  supported: boolean;
  transcript: string;
  start: () => void;
  stop: () => void;
  toggle: (value?: boolean) => void;
}
export declare const useSpeechRecognition: (
  options?: UseSpeechRecognitionOptions
) => UseSpeechRecognitionReturn;
```

### 5.35 useSpeechSynthesis

Provides text-to-speech controls and state.

#### Usage

```ts
import { useSpeechSynthesis } from "@siberiacancode/reactuse";

const speech = useSpeechSynthesis();
```

#### Example

```tsx
import { useSpeechSynthesis } from "@siberiacancode/reactuse";

export const Reader = () => {
  const speech = useSpeechSynthesis({ text: "Hello from Reactuse" });

  if (!speech.supported) return <div>Not supported</div>;

  return (
    <button onClick={() => speech.speak()}>
      {speech.playing ? "Speaking..." : "Speak"}
    </button>
  );
};
```

`text`:

```tsx
const speech = useSpeechSynthesis({ text: "Hello" });
```

`lang`:

```tsx
const speech = useSpeechSynthesis({ lang: "en-US" });
```

`pitch`:

```tsx
const speech = useSpeechSynthesis({ pitch: 1.5 });
```

`rate`:

```tsx
const speech = useSpeechSynthesis({ rate: 0.8 });
```

`voice`:

```tsx
const speech = useSpeechSynthesis({ voice });
```

`volume`:

```tsx
const speech = useSpeechSynthesis({ volume: 0.6 });
```

#### Notes

- Hook uses the [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).

#### Type Declarations

```ts
export type UseSpeechSynthesisStatus = "end" | "init" | "pause" | "play";
export interface UseSpeechSynthesisOptions {
  lang?: string;
  pitch?: number;
  rate?: number;
  text?: string;
  voice?: SpeechSynthesisVoice | null;
  volume?: number;
}
export interface UseSpeechSynthesisReturn {
  error: SpeechSynthesisErrorEvent | undefined;
  playing: boolean;
  status: UseSpeechSynthesisStatus;
  supported: boolean;
  utterance: SpeechSynthesisUtterance | undefined;
  pause: () => void;
  resume: () => void;
  speak: () => void;
  stop: () => void;
  toggle: (value?: boolean) => void;
}
export declare const useSpeechSynthesis: (
  options?: UseSpeechSynthesisOptions
) => UseSpeechSynthesisReturn;
```

### 5.36 useVibrate

Triggers vibration with optional intervals.

#### Usage

```ts
import { useVibrate } from "@siberiacancode/reactuse";

const vibrate = useVibrate(1000);
```

#### Example

```tsx
import { useVibrate } from "@siberiacancode/reactuse";

export const HapticButton = () => {
  const vibrate = useVibrate(200);

  return <button onClick={() => vibrate.trigger()}>Vibrate</button>;
};
```

`pattern`:

```tsx
const vibrate = useVibrate([200, 100, 200]);
```

`interval`:

```tsx
const vibrate = useVibrate(200, 1000);
```

#### Notes

- Hook uses the [navigator.vibrate API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate).

#### Type Declarations

```ts
export type UseVibratePattern = number | number[];
export interface UseVibrateReturn {
  supported: boolean;
  vibrating: boolean;
  pause: () => void;
  resume: () => void;
  start: (interval: number) => void;
  trigger: (pattern?: UseVibratePattern) => void;
}
export declare const useVibrate: (
  pattern: UseVibratePattern,
  interval?: number
) => UseVibrateReturn;
```

### 5.37 useVirtualKeyboard

Tracks virtual keyboard state and exposes controls.

#### Usage

```ts
import { useVirtualKeyboard } from "@siberiacancode/reactuse";

const keyboard = useVirtualKeyboard();
```

#### Example

```tsx
import { useVirtualKeyboard } from "@siberiacancode/reactuse";

export const KeyboardControls = () => {
  const keyboard = useVirtualKeyboard();

  return (
    <div>
      <button onClick={() => keyboard.show()}>Show</button>
      <button onClick={() => keyboard.hide()}>Hide</button>
      <div>Open: {String(keyboard.opened)}</div>
    </div>
  );
};
```

`initialValue`:

```tsx
const keyboard = useVirtualKeyboard(true);
```

#### Notes

- Hook uses the [VirtualKeyboard API](https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard).
- Includes a fallback; methods are no-ops when unsupported.

#### Type Declarations

```ts
export interface UseVirtualKeyboardReturn {
  opened: boolean;
  supported: boolean;
  changeOverlaysContent: (overlaysContent: boolean) => void;
  hide: () => void;
  show: () => void;
}
export declare const useVirtualKeyboard: (
  initialValue?: boolean
) => UseVirtualKeyboardReturn;
```

### 5.38 useWakeLock

Controls the Wake Lock API state.

#### Usage

```ts
import { useWakeLock } from "@siberiacancode/reactuse";

const wake = useWakeLock();
```

#### Example

```tsx
import { useWakeLock } from "@siberiacancode/reactuse";

export const WakeLockToggle = () => {
  const wake = useWakeLock();

  return (
    <button onClick={() => (wake.active ? wake.release() : wake.request())}>
      {wake.active ? "Release" : "Keep awake"}
    </button>
  );
};
```

`immediately`:

```tsx
const wake = useWakeLock({ immediately: true });
```

`type`:

```tsx
const wake = useWakeLock({ type: "screen" });
```

#### Notes

- Hook uses the [WakeLock API](https://developer.mozilla.org/en-US/docs/Web/API/WakeLock).

#### Type Declarations

```ts
export interface UseWakeLockOptions {
  immediately?: boolean;
  type?: WakeLockType;
}
export interface UseWakeLockReturn {
  active: boolean;
  supported: boolean;
  release: () => Promise<void>;
  request: () => Promise<void>;
}
export declare const useWakeLock: (
  options?: UseWakeLockOptions
) => UseWakeLockReturn;
```

### 5.39 useWebSocket

Connects to a WebSocket server with retries and callbacks.

#### Usage

```ts
import { useWebSocket } from "@siberiacancode/reactuse";

const socket = useWebSocket("wss://example.com");
```

#### Example

```tsx
import { useWebSocket } from "@siberiacancode/reactuse";

export const SocketPing = () => {
  const socket = useWebSocket("wss://example.com");

  return (
    <button onClick={() => socket.send("ping")}>Status: {socket.status}</button>
  );
};
```

`onConnected`:

```tsx
const socket = useWebSocket("wss://example.com", {
  onConnected: (ws) => console.log(ws),
});
```

`onDisconnected`:

```tsx
const socket = useWebSocket("wss://example.com", {
  onDisconnected: (event) => console.log(event),
});
```

`onError`:

```tsx
const socket = useWebSocket("wss://example.com", {
  onError: (event) => console.error(event),
});
```

`onMessage`:

```tsx
const socket = useWebSocket("wss://example.com", {
  onMessage: (event) => console.log(event.data),
});
```

`retry`:

```tsx
const socket = useWebSocket("wss://example.com", { retry: 3 });
```

`protocols`:

```tsx
const socket = useWebSocket("wss://example.com", { protocols: ["soap"] });
```

#### Notes

- Hook uses the [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

#### Type Declarations

```ts
export type UseWebSocketUrl = (() => string) | string;
export interface UseWebSocketOptions {
  protocols?: Array<"soap" | "wasm">;
  retry?: boolean | number;
  onConnected?: (webSocket: WebSocket) => void;
  onDisconnected?: (event: CloseEvent, webSocket: WebSocket) => void;
  onError?: (event: Event, webSocket: WebSocket) => void;
  onMessage?: (event: MessageEvent, webSocket: WebSocket) => void;
}
export type UseWebSocketStatus =
  | "connected"
  | "connecting"
  | "disconnected"
  | "failed";
export interface UseWebSocketReturn {
  client?: WebSocket;
  close: WebSocket["close"];
  send: WebSocket["send"];
  status: UseWebSocketStatus;
  open: () => void;
}
export declare const useWebSocket: (
  url: UseWebSocketUrl,
  options?: UseWebSocketOptions
) => UseWebSocketReturn;
```

## 6. Utilities

### 6.1 useBatchedCallback

Batches calls and forwards them to a callback.

#### Usage

```ts
import { useBatchedCallback } from "@siberiacancode/reactuse";

const batched = useBatchedCallback((batch) => console.log(batch), 5);
```

#### Example

```tsx
import { useBatchedCallback } from "@siberiacancode/reactuse";

export const Logger = () => {
  const batched = useBatchedCallback((batch) => {
    console.log("batch", batch);
  }, 3);

  return (
    <div>
      <button onClick={() => batched("click")}>Queue</button>
      <button onClick={() => batched.flush()}>Flush</button>
    </div>
  );
};
```

#### Notes

- Call `batched.flush()` to send the current batch immediately.
- Call `batched.cancel()` to clear pending calls.

#### Type Declarations

```ts
export type BatchedCallback<Params extends unknown[]> = ((
  ...args: Params
) => void) & {
  flush: () => void;
  cancel: () => void;
};
export declare const useBatchedCallback: <Params extends unknown[]>(
  callback: (batch: Params[]) => void,
  size: number
) => BatchedCallback<Params>;
```

### 6.2 useConst

Returns a constant value initialized once.

#### Usage

```ts
import { useConst } from "@siberiacancode/reactuse";

const value = useConst("value");
```

#### Example

```tsx
const id = useConst(() => crypto.randomUUID());
const config = useConst(() => ({ retry: 2 }));
return (
  <div>
    {id} (retry: {config.retry})
  </div>
);
```

#### Type Declarations

```ts
export declare const useConst: <Value>(
  initialValue: (() => Value) | Value
) => Value;
```

### 6.3 useDebounceCallback

Creates a debounced callback with a cancel method.

#### Usage

```ts
import { useDebounceCallback } from "@siberiacancode/reactuse";

const debounced = useDebounceCallback(() => console.log("callback"), 500);
```

#### Example

```tsx
const onSearch = useDebounceCallback((value: string) => {
  console.log(value);
}, 300);

return (
  <div>
    <input onChange={(event) => onSearch(event.target.value)} />
    <button onClick={() => onSearch.cancel()}>Cancel</button>
  </div>
);
```

#### Type Declarations

```ts
export type DebouncedCallback<Params extends unknown[]> = ((
  ...args: Params
) => void) & {
  cancel: () => void;
};
export declare const useDebounceCallback: <Params extends unknown[], Return>(
  callback: (...args: Params) => Return,
  delay: number
) => DebouncedCallback<Params>;
```

### 6.4 useDebounceEffect

Runs an effect after a delay when dependencies change.

#### Usage

```ts
import { useDebounceEffect } from "@siberiacancode/reactuse";

useDebounceEffect(() => console.log("effect"), 500, [value]);
```

#### Example

```tsx
import { useDebounceEffect } from "@siberiacancode/reactuse";

interface SearchProps {
  query: string;
}

export const Search = ({ query }: SearchProps) => {
  useDebounceEffect(() => console.log("fetch", query), 300, [query]);

  return <div>{query}</div>;
};
```

#### Type Declarations

```ts
import type { DependencyList, EffectCallback } from "react";

export declare const useDebounceEffect: (
  effect: EffectCallback,
  delay: number,
  deps?: DependencyList
) => void;
```

### 6.5 useDebounceState

Creates a debounced state setter.

#### Usage

```ts
import { useDebounceState } from "@siberiacancode/reactuse";

const [debounced, setDebounced] = useDebounceState(value, 500);
```

#### Example

```tsx
import { useDebounceState } from "@siberiacancode/reactuse";
import { useState } from "react";

export const DebouncedInput = () => {
  const [value, setValue] = useState("");
  const [debounced, setDebounced] = useDebounceState(value, 300);

  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setDebounced(event.target.value);
        }}
      />
      <div>Debounced: {debounced}</div>
    </div>
  );
};
```

#### Type Declarations

```ts
export declare const useDebounceState: <Value>(
  initialValue: Value,
  delay: number
) => readonly [Value, (value: Value) => void];
```

### 6.6 useDebounceValue

Returns a debounced version of a value.

#### Usage

```ts
import { useDebounceValue } from "@siberiacancode/reactuse";

const debounced = useDebounceValue(value, 500);
```

#### Example

```tsx
import { useDebounceValue } from "@siberiacancode/reactuse";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");
  const debounced = useDebounceValue(value, 300);

  return (
    <>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <div>Query: {debounced || "..."}</div>
    </>
  );
};
```

#### Type Declarations

```ts
export declare const useDebounceValue: <Value>(
  value: Value,
  delay: number
) => Value;
```

### 6.7 useDevicePixelRatio

Returns the current device pixel ratio.

#### Usage

```ts
import { useDevicePixelRatio } from "@siberiacancode/reactuse";

const ratio = useDevicePixelRatio();
```

#### Example

```tsx
const devicePixelRatio = useDevicePixelRatio();
if (!orientation.supported) return <div>Not supported</div>;

return <div>{String(devicePixelRatio.ratio)})</div>;
```

#### Notes

- Hook uses the [devicePixelRatio API](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio).

#### Type Declarations

```ts
export interface UseDevicePixelRatioReturn {
  ratio: number;
  supported: boolean;
}
export declare const useDevicePixelRatio: () => UseDevicePixelRatioReturn;
```

### 6.8 useEvent

Returns a stable callback reference that always calls the latest handler.

#### Usage

```ts
import { useEvent } from "@siberiacancode/reactuse";

const onClick = useEvent(() => console.log("clicked"));
```

#### Example

```tsx
import { useEvent } from "@siberiacancode/reactuse";
import { useState, useEffect } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);
  const onRerender = useEvent(() => setCount(count++));

  useEffect(() => {
    onRerender();
  });
};
```

#### Type Declarations

```ts
export declare const useEvent: <Params extends unknown[], Return>(
  callback: (...args: Params) => Return
) => (...args: Params) => Return;
```

### 6.9 useLastChanged

Records the timestamp of the last change.

#### Usage

```ts
import { useLastChanged } from "@siberiacancode/reactuse";

const lastChanged = useLastChanged(value);
```

#### Example

`initialValue`:

Custom initial timestamp.

```tsx
const lastChanged = useLastChanged(value, { initialValue: 0 });
console.log(lastChanged);
```

#### Type Declarations

```ts
export interface UseLastChangedOptions {
  initialValue?: number;
}
export declare const useLastChanged: (
  source: any,
  options?: UseLastChangedOptions
) => number | null;
```

### 6.10 useLatest

Returns a stable ref that always points to the latest value.

#### Usage

```ts
import { useLatest } from "@siberiacancode/reactuse";

const latest = useLatest(value);
```

#### Example

```tsx

```

#### Type Declarations

```ts
import type { RefObject } from "react";

export interface UseLatestReturn<Value> {
  ref: RefObject<Value>;
  value: Value;
}
export declare const useLatest: <Value>(value: Value) => UseLatestReturn<Value>;
```

### 6.11 usePrevious

Returns the previous value.

#### Usage

```ts
import { usePrevious } from "@siberiacancode/reactuse";

const prev = usePrevious(value);
```

#### Example

`equality`:

Custom compare.

```tsx
const prev = usePrevious(value, {
  equality: (a, b) => a.id === b.id,
});
console.log(prev);
```

#### Type Declarations

```ts
export interface UsePreviousOptions<Value> {
  equality: (a: Value, b: Value) => boolean;
}
export declare const usePrevious: <Value>(
  value: Value,
  options?: UsePreviousOptions<Value>
) => Value | undefined;
```

### 6.12 useThrottleCallback

Creates a throttled callback with a cancel method.

#### Usage

```ts
import { useThrottleCallback } from "@siberiacancode/reactuse";

const throttled = useThrottleCallback(() => console.log("callback"), 500);
```

#### Example

```tsx
import { useThrottleCallback } from "@siberiacancode/reactuse";

export const ScrollLogger = () => {
  const onScroll = useThrottleCallback(() => console.log("scroll"), 200);

  return (
    <div onScroll={onScroll}>
      Scroll me
      <button onClick={() => onScroll.cancel()}>Cancel</button>
    </div>
  );
};
```

#### Type Declarations

```ts
export type ThrottledCallback<Params extends unknown[]> = ((
  ...args: Params
) => void) & {
  cancel: () => void;
};
export declare const useThrottleCallback: <Params extends unknown[], Return>(
  callback: (...args: Params) => Return,
  delay: number
) => ThrottledCallback<Params>;
```

### 6.13 useThrottleEffect

Runs an effect at most once per delay period when dependencies change.

#### Usage

```ts
import { useThrottleEffect } from "@siberiacancode/reactuse";

useThrottleEffect(() => console.log("effect"), 500, [value]);
```

#### Example

```tsx
import { useThrottleEffect } from "@siberiacancode/reactuse";

export const Tracker = ({ value }: { value: number }) => {
  useThrottleEffect(
    () => {
      console.log(value);
    },
    1000,
    [value]
  );

  return <div>Value: {value}</div>;
};
```

#### Type Declarations

```ts
import type { DependencyList, EffectCallback } from "react";

export declare const useThrottleEffect: (
  effect: EffectCallback,
  delay: number,
  deps?: DependencyList
) => void;
```

### 6.14 useThrottleState

Creates a throttled state setter.

#### Usage

```ts
import { useThrottleState } from "@siberiacancode/reactuse";

const [throttled, setThrottled] = useThrottleState(value, 500);
```

#### Example

```tsx
import { useThrottleState } from "@siberiacancode/reactuse";
import { useState } from "react";

export const ThrottledInput = () => {
  const [value, setValue] = useState("");
  const [throttled, setThrottled] = useThrottleState(value, 300);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setThrottled(e.target.value);
        }}
      />
      <div>Throttled: {throttled}</div>
    </div>
  );
};
```

#### Type Declarations

```ts
export declare const useThrottleState: <Value>(
  initialValue: Value,
  delay: number
) => readonly [Value, (value: Value) => void];
```

### 6.15 useThrottleValue

Returns a throttled version of a value.

#### Usage

```ts
import { useThrottleValue } from "@siberiacancode/reactuse";

const throttled = useThrottleValue(value, 500);
```

#### Example

```tsx
import { useThrottleValue } from "@siberiacancode/reactuse";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");
  const throttled = useThrottleValue(value, 300);

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>Query: {throttled || "..."}</div>
    </>
  );
};
```

#### Type Declarations

```ts
export declare const useThrottleValue: <Value>(
  value: Value,
  delay: number
) => Value;
```

## 7. State

### 7.1 useBoolean

Manages a boolean state with a toggle helper.

#### Usage

```ts
import { useBoolean } from "@siberiacancode/reactuse";

const [value, toggle] = useBoolean();
```

#### Example

```tsx
import { useBoolean } from "@siberiacancode/reactuse";

export const Toggle = () => {
  const [value, toggle] = useBoolean();
  return <button onClick={() => toggle()}>{String(value)}</button>;
};
```

`initialValue`:

```tsx
const [value, toggle] = useBoolean(true);
```

#### Type Declarations

```ts
export type UseBooleanReturn = [
  value: boolean,
  toggle: (value?: boolean) => void
];
export declare const useBoolean: (initialValue?: boolean) => UseBooleanReturn;
```

### 7.2 useControllableState

Supports controlled and uncontrolled state patterns.

#### Usage

```ts
import { useControllableState } from "@siberiacancode/reactuse";

const [value, setValue, isControlled] = useControllableState({
  initialValue: "draft",
});
```

#### Example

```tsx
import type { ComponentProps } from "react";
import { useControllableState } from "@siberiacancode/reactuse";

type NameFieldProps = ComponentProps<"input">;

export const NameField = ({ value, onChange }: NameFieldProps) => {
  const [current, setCurrent] = useControllableState({
    value,
    initialValue: "",
    onChange,
  });

  return (
    <input
      value={current}
      onChange={(event) => setCurrent(event.target.value)}
    />
  );
};
```

`value`:

```tsx
const [value, setValue] = useControllableState({ value: props.value });
```

`initialValue`:

```tsx
const [value, setValue] = useControllableState({ initialValue: "draft" });
```

`onChange`:

```tsx
const [value, setValue] = useControllableState({
  initialValue: "draft",
  onChange: (value) => console.log(value),
});
```

#### Type Declarations

```ts
export interface UseControllableStateOptions<Value> {
  initialValue?: Value;
  value?: Value;
  onChange?: (value: Value) => void;
}
export type UseControllableStateReturn<Value> = [
  value: Value,
  setValue: (nextValue: ((prevValue: Value) => Value) | Value) => void,
  isControlled: boolean
];
export declare function useControllableState<Value>(
  options: UseControllableStateOptions<Value>
): UseControllableStateReturn<Value>;
```

### 7.3 useCookie

Reads and writes a cookie value.

#### Usage

```ts
import { useCookie } from "@siberiacancode/reactuse";

const cookie = useCookie("theme", "");
```

#### Example

```tsx
const themeCookie = useCookie<"light" | "dark">("theme", {
  initialValue: "light",
});

return (
  <button
    onClick={() =>
      themeCookie.set(themeCookie.value === "light" ? "dark" : "light")
    }
  >
    Theme: {themeCookie.value}
  </button>
);
```

`domain`:

```tsx
const cookie = useCookie("theme", { domain: ".example.com" });
```

`expires`:

```tsx
const cookie = useCookie("theme", { expires: new Date(Date.now() + 86400000) });
```

`httpOnly`:

```tsx
const cookie = useCookie("theme", { httpOnly: true });
```

`initialValue`:

```tsx
const cookie = useCookie("theme", { initialValue: "" });
```

`maxAge`:

```tsx
const cookie = useCookie("theme", { maxAge: 3600 });
```

`path`:

```tsx
const cookie = useCookie("theme", { path: "/" });
```

`sameSite`:

```tsx
const cookie = useCookie("theme", { sameSite: "Lax" });
```

`secure`:

```tsx
const cookie = useCookie("theme", { secure: true });
```

`deserializer`:

```tsx
const cookie = useCookie("user", {
  deserializer: (value) => JSON.parse(value),
});
```

`serializer`:

```tsx
const cookie = useCookie("user", {
  serializer: (value) => JSON.stringify(value),
});
```

#### Type Declarations

```ts
export interface RemoveCookieParams {
  domain?: string;
  expires?: Date;
  maxAge?: number;
  path?: string;
  sameSite?: "Lax" | "None" | "Strict";
  secure?: boolean;
}
export interface SetCookieParams {
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  maxAge?: number;
  path?: string;
  sameSite?: "Lax" | "None" | "Strict";
  secure?: boolean;
}
export type UseCookieInitialValue<Value> = (() => Value) | Value;
export interface UseCookieOptions<Value> {
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  initialValue?: UseCookieInitialValue<Value>;
  maxAge?: number;
  path?: string;
  sameSite?: "Lax" | "None" | "Strict";
  secure?: boolean;
  deserializer?: (value: string) => Value;
  serializer?: (value: Value) => string;
}
export interface UseCookieReturn<Value> {
  value: Value;
  remove: (options?: RemoveCookieParams) => void;
  set: (value: Value, options?: SetCookieParams) => void;
}
export interface UseCookie {
  <Value>(
    key: string,
    options: UseCookieOptions<Value> & {
      initialValue: UseCookieInitialValue<Value>;
    }
  ): UseCookieReturn<Value>;
  <Value>(key: string, options?: UseCookieOptions<Value>): UseCookieReturn<
    Value | undefined
  >;
  <Value>(
    key: string,
    initialValue: UseCookieInitialValue<Value>
  ): UseCookieReturn<Value>;
  <Value>(key: string): UseCookieReturn<Value | undefined>;
}
export declare const useCookie: UseCookie;
```

### 7.4 useCookies

Manages all cookies as a single object.

#### Usage

```ts
import { useCookies } from "@siberiacancode/reactuse";

const cookies = useCookies();
```

#### Example

```tsx
const cookies = useCookies<{ theme: string }>();

return (
  <button onClick={() => cookies.set("theme", "dark")}>
    Theme: {cookies.value.theme ?? "none"}
  </button>
);
```

`deserializer`:

```tsx
const cookies = useCookies({
  deserializer: (value) => JSON.parse(value),
});
```

`serializer`:

```tsx
const cookies = useCookies({
  serializer: (value) => JSON.stringify(value),
});
```

#### Type Declarations

```ts
export type CookieParams = Record<string, any>;
export interface UseCookiesOptions<Value> {
  deserializer?: (value: string) => Value[keyof Value];
  serializer?: (value: Value[keyof Value]) => string;
}
export declare const useCookies: <Value extends CookieParams>(
  options?: UseCookiesOptions<Value>
) => {
  value: Value;
  set: <Key extends keyof Value>(
    key: Key,
    value: Value[Key],
    options?: SetCookieParams
  ) => void;
  remove: <Key extends keyof Value>(
    key: Key,
    options?: RemoveCookieParams
  ) => void;
  getAll: () => Value;
  clear: () => void;
};
```

### 7.5 useCounter

Manages a numeric counter with bounds.

#### Usage

```ts
import { useCounter } from "@siberiacancode/reactuse";

const counter = useCounter(0);
```

#### Example

```tsx
const counter = useCounter(0);

return (
  <div>
    <button onClick={() => counter.dec()}>-</button>
    <span>{counter.value}</span>
    <button onClick={() => counter.inc()}>+</button>
  </div>
);
```

`initialValue`:

```tsx
const counter = useCounter(5);
```

`min`:

```tsx
const counter = useCounter({ initialValue: 0, min: 0 });
```

`max`:

```tsx
const counter = useCounter({ initialValue: 0, max: 10 });
```

#### Type Declarations

```ts
import type { Dispatch, SetStateAction } from "react";

export interface UseCounterOptions {
  max?: number;
  min?: number;
}
export interface UseCounterReturn {
  set: Dispatch<SetStateAction<number>>;
  value: number;
  dec: (value?: number) => void;
  inc: (value?: number) => void;
  reset: () => void;
}
export interface UseCounter {
  (initialValue?: number, options?: UseCounterOptions): UseCounterReturn;
  (
    options: UseCounterOptions & { initialValue?: number },
    initialValue?: never
  ): UseCounterReturn;
}
export declare const useCounter: UseCounter;
```

### 7.6 useDefault

Returns a value or a provided default when nullish.

#### Usage

```ts
import { useDefault } from "@siberiacancode/reactuse";

const [value, setValue] = useDefault("initial", "fallback");
```

#### Example

```tsx
import { useDefault } from "@siberiacancode/reactuse";

interface TitleProps {
  value: string;
}

export const Title = ({ value }: TitleProps) => {
  const [text] = useDefault(value, "Untitled");
  return <span>{text}</span>;
};
```

`initialValue`:

```tsx
const [value, setValue] = useDefault("value", "fallback");
```

`defaultValue`:

```tsx
const [value, setValue] = useDefault(undefined, "fallback");
```

#### Type Declarations

```ts
export declare const useDefault: <Value>(
  initialValue: (() => Value) | Value,
  defaultValue: Value
) => readonly [Value, (value: Value) => void];
```

### 7.7 useDisclosure

Manages open/close state with helpers.

#### Usage

```ts
import { useDisclosure } from "@siberiacancode/reactuse";

const disclosure = useDisclosure();
```

#### Example

```tsx
import { useDisclosure } from "@siberiacancode/reactuse";

export const Modal = () => {
  const disclosure = useDisclosure();

  return (
    <div>
      <button onClick={() => disclosure.open()}>Open</button>
      {disclosure.opened && <div>Modal content</div>}
    </div>
  );
};
```

`initialValue`:

```tsx
const disclosure = useDisclosure(true);
```

`onOpen`:

```tsx
const disclosure = useDisclosure(false, { onOpen: () => console.log("open") });
```

`onClose`:

```tsx
const disclosure = useDisclosure(false, {
  onClose: () => console.log("close"),
});
```

#### Type Declarations

```ts
export interface UseDisclosureOptions {
  onClose?: () => void;
  onOpen?: () => void;
}
export interface UseDisclosureReturn {
  opened: boolean;
  close: () => void;
  open: () => void;
  toggle: () => void;
}
export declare const useDisclosure: (
  initialValue?: boolean,
  options?: UseDisclosureOptions
) => UseDisclosureReturn;
```

### 7.8 useField

Manages input state, validation, and helpers.

#### Usage

```ts
import { useField } from "@siberiacancode/reactuse";

const field = useField();
```

#### Example

```tsx
import { useField } from "@siberiacancode/reactuse";

export const EmailField = () => {
  const inputField = useField({ initialValue: "" });

  return <input {...inputField.register()} />;
};
```

`initialValue`:

```tsx
const field = useField({ initialValue: "" });
```

`initialTouched`:

```tsx
const field = useField({ initialTouched: true });
```

`autoFocus`:

```tsx
const field = useField({ autoFocus: true });
```

`validateOnChange`:

```tsx
const field = useField({ validateOnChange: true });
```

`validateOnBlur`:

```tsx
const field = useField({ validateOnBlur: true });
```

`validateOnMount`:

```tsx
const field = useField({ validateOnMount: true });
```

`register.required`:

```tsx
const field = useField();
return <input {...field.register({ required: "Required" })} />;
```

`register.validate`:

```tsx
const field = useField();
return (
  <input
    {...field.register({
      validate: (value) => (value ? true : "Invalid"),
    })}
  />
);
```

`register.max`:

```tsx
const field = useField();
return (
  <input {...field.register({ max: { value: 10, message: "Too big" } })} />
);
```

`register.maxLength`:

```tsx
const field = useField();
return (
  <input
    {...field.register({ maxLength: { value: 10, message: "Too long" } })}
  />
);
```

`register.min`:

```tsx
const field = useField();
return (
  <input {...field.register({ min: { value: 1, message: "Too small" } })} />
);
```

`register.minLength`:

```tsx
const field = useField();
return (
  <input
    {...field.register({ minLength: { value: 3, message: "Too short" } })}
  />
);
```

`register.pattern`:

```tsx
const field = useField();
return (
  <input
    {...field.register({
      pattern: { value: /^[a-z]+$/, message: "Only lowercase" },
    })}
  />
);
```

#### Type Declarations

```ts
import type { RefObject } from "react";

export interface UseFieldParams<Value> {
  autoFocus?: boolean;
  initialTouched?: boolean;
  initialValue?: Value;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnMount?: boolean;
}
export interface UseFieldRegisterParams {
  required?: string;
  validate?: (value: string) => Promise<string | true>;
  max?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  min?: { value: number; message: string };
  minLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
}
export interface UseFieldReturn<Value> {
  dirty: boolean;
  error?: string;
  ref: RefObject<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null
  >;
  touched: boolean;
  clearError: () => void;
  focus: () => void;
  getValue: () => Value;
  register: (params?: UseFieldRegisterParams) => {
    onBlur: () => void;
    onChange: () => void;
    ref: (
      node:
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement
        | null
        | undefined
    ) => void;
  };
  reset: () => void;
  setError: (error: string) => void;
  setValue: (value: Value) => void;
  watch: () => Value;
}
export declare const useField: <
  Value extends boolean | number | string = string,
  Type = Value extends string
    ? string
    : Value extends boolean
    ? boolean
    : number
>(
  params?: UseFieldParams<Value>
) => UseFieldReturn<Type>;
```

### 7.9 useHash

Manages URL hash value.

#### Usage

```ts
import { useHash } from "@siberiacancode/reactuse";

const hash = useHash("section");
```

#### Example

`initialValue`:

Initial hash value.

```tsx
const hash = useHash("intro");
```

`enabled`:

Enables or disables hash tracking and updates.

```tsx
const hash = useHash({ enabled: false });
```

`mode`:

Controls how the hash is written ("initial" preserves existing hash, "replace" updates it).

```tsx
const hash = useHash({ mode: "initial" });
```

`onChange`:

Called when the hash changes.

```tsx
const hash = useHash({ onChange: (value) => console.log(value) });
```

#### Type Declarations

```ts
export interface UseHashOptions {
  enabled?: boolean;
  mode?: "initial" | "replace";
  onChange?: (hash: string) => void;
}
type UseHashReturn = [string, (value: string) => void];
export interface UseHash {
  (initialValue?: string, options?: UseHashOptions): UseHashReturn;
  (options?: UseHashOptions): UseHashReturn;
  (initialValue?: string, callback?: (hash: string) => void): UseHashReturn;
  (callback?: (hash: string) => void): UseHashReturn;
}
export declare const useHash: UseHash;
```

### 7.10 useList

Manages an array with helper methods.

#### Usage

```ts
import { useList } from "@siberiacancode/reactuse";

const list = useList(["a", "b"]);
```

#### Example

```tsx
import { useList } from "@siberiacancode/reactuse";

export const TodoList = () => {
  const list = useList(["a", "b"]);

  return (
    <div>
      <button onClick={() => list.push("c")}>Add</button>
      <div>{list.value.join(", ")}</div>
    </div>
  );
};
```

`initialList`:

```tsx
const list = useList([1, 2, 3]);
```

#### Type Declarations

```ts
export interface UseListReturn<Item> {
  value: Item[];
  clear: () => void;
  insertAt: (insertAtIndex: number, item: Item) => void;
  push: (item: Item) => void;
  removeAt: (removeAtIndex: number) => void;
  set: (list: Item[]) => void;
  updateAt: (updateAtIndex: number, item: Item) => void;
}
export declare const useList: <Item>(initialList?: Item[]) => {
  value: Item[];
  set: (list: Item[]) => void;
  push: (item: Item) => void;
  removeAt: (removeAtIndex: number) => void;
  insertAt: (insertAtIndex: number, item: Item) => void;
  updateAt: (updateAtIndex: number, item: Item) => void;
  clear: () => void;
  reset: () => void;
};
```

### 7.11 useLocalStorage

Manages a value in localStorage.

#### Usage

```ts
import { useLocalStorage } from "@siberiacancode/reactuse";

const storage = useLocalStorage("key", "value");
```

#### Example

```tsx
import { useLocalStorage } from "@siberiacancode/reactuse";

export const DraftNote = () => {
  const draft = useLocalStorage("draft-note", "");

  return (
    <textarea
      value={draft.value}
      onChange={(event) => draft.set(event.target.value)}
      placeholder="Type your note..."
    />
  );
};
```

`initialValue`:

```tsx
const storage = useLocalStorage("key", "value");
storage.set("next");
```

`deserializer`:

```tsx
const storage = useLocalStorage(
  "settings",
  { compact: false },
  {
    deserializer: (value) => JSON.parse(value) as { compact: boolean },
  }
);
storage.set({ compact: true });
```

`serializer`:

```tsx
const storage = useLocalStorage(
  "filters",
  { query: "" },
  {
    serializer: (value) => JSON.stringify(value),
  }
);
storage.set({ query: "react" });
```

#### Notes

- Hook uses the [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

#### Type Declarations

```ts
import type {
  UseStorageInitialValue,
  UseStorageOptions,
} from "@siberiacancode/reactuse";

export declare const useLocalStorage: <Value>(
  key: string,
  initialValue?: UseStorageInitialValue<Value>,
  options?: Omit<UseStorageOptions<Value>, "initialValue" | "storage">
) => {
  value: Value;
  set: (value: Value) => void;
  remove: () => void;
};
```

### 7.12 useMap

Manages a Map with helper methods.

#### Usage

```ts
import { useMap } from "@siberiacancode/reactuse";

const map = useMap([["id", 1]]);
```

#### Example

```tsx
import { useMap } from "@siberiacancode/reactuse";

export const Lookup = () => {
  const map = useMap([["a", 1]]);

  return <button onClick={() => map.set("b", 2)}>Size: {map.size}</button>;
};
```

#### Type Declarations

```ts
export interface UseMapReturn<Key, Value> {
  size: number;
  value: Map<Key, Value>;
  clear: () => void;
  has: (key: Key) => boolean;
  remove: (key: Key) => void;
  reset: () => void;
  set: (key: Key, value: Value) => void;
}
export declare const useMap: <Key, Value>(
  values?: [Key, Value][]
) => UseMapReturn<Key, Value>;
```

### 7.13 useMergedRef

Merges multiple refs into a single ref callback.

#### Usage

```ts
import { useMergedRef } from "@siberiacancode/reactuse";

const ref = useMergedRef(firstRef, secondRef);
```

#### Example

```tsx
import { useMergedRef } from "@siberiacancode/reactuse";
import { useRef } from "react";
import type { RefObject } from "react";

interface FocusInputProps {
  inputRef: RefObject<HTMLInputElement>;
}

export const FocusInput = ({ inputRef }: FocusInputProps) => {
  const localRef = useRef<HTMLInputElement | null>(null);
  const merged = useMergedRef(inputRef, localRef);

  return <input ref={merged} />;
};
```

#### Type Declarations

```ts
import type { Ref, RefCallback } from "react";

export declare const useMergedRef: <Element>(
  ...refs: Ref<Element>[]
) => RefCallback<Element>;
```

### 7.14 useObject

Manages object state with helper methods for updates and key operations.

#### Usage

```ts
import { useObject } from "@siberiacancode/reactuse";

const user = useObject({ name: "John", age: 30, active: true });
```

#### Example

```tsx
import { useObject } from "@siberiacancode/reactuse";

export const UserCard = () => {
  const user = useObject({ name: "John", age: 30, active: true });

  return (
    <div>
      <p>{user.value.name}</p>
      <p>Fields: {user.size}</p>
      <button onClick={() => user.set({ active: !user.value.active })}>
        Toggle active
      </button>
      <button onClick={() => user.remove("age")}>Remove age</button>
      <button onClick={() => user.reset()}>Reset</button>
    </div>
  );
};
```

#### Type Declarations

```ts
export interface UseObjectReturn<Value extends object> {
  empty: boolean;
  keys: Array<keyof Value>;
  size: number;
  value: Value;
  clear: () => void;
  has: (key: keyof Value) => boolean;
  remove: (key: keyof Value) => void;
  reset: () => void;
  set: (value: Partial<Value>) => void;
}
export declare function useObject<Value extends object>(
  initialValue: Value
): UseObjectReturn<Value>;
```

### 7.15 useOffsetPagination

Manages pagination state for offset-based lists.

#### Usage

```ts
import { useOffsetPagination } from "@siberiacancode/reactuse";

const pagination = useOffsetPagination({ total: 100, initialPageSize: 10 });
```

#### Example

```tsx
import { useOffsetPagination } from "@siberiacancode/reactuse";

export const Pager = () => {
  const pagination = useOffsetPagination({ total: 200, initialPageSize: 20 });

  return (
    <div>
      Page {pagination.page} of {pagination.pageCount}
      <button onClick={() => pagination.prev()}>Prev</button>
      <button onClick={() => pagination.next()}>Next</button>
    </div>
  );
};
```

`total`:

```tsx
const pagination = useOffsetPagination({ total: 200 });
```

`initialPageSize`:

```tsx
const pagination = useOffsetPagination({ initialPageSize: 20 });
```

`initialPage`:

```tsx
const pagination = useOffsetPagination({ initialPage: 2 });
```

`onChange`:

```tsx
const pagination = useOffsetPagination({
  onChange: ({ page, pageSize }) => console.log(page, pageSize),
});
```

#### Type Declarations

```ts
export interface UseOffsetPaginationOptions {
  initialPage?: number;
  initialPageSize?: number;
  total?: number;
  onChange?: ({ page, pageSize }: { page: number; pageSize: number }) => void;
}
export interface UseOffsetPaginationReturn {
  isFirstPage: boolean;
  isLastPage: boolean;
  page: number;
  pageCount: number;
  pageSize: number;
  next: () => void;
  prev: () => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
}
export declare const useOffsetPagination: (
  options?: UseOffsetPaginationOptions
) => UseOffsetPaginationReturn;
```

### 7.16 useQueue

Manages a queue with add/remove helpers.

#### Usage

```ts
import { useQueue } from "@siberiacancode/reactuse";

const queue = useQueue([1, 2, 3]);
```

#### Example

```tsx
const queue = useQueue(["a", "b"]);

return (
  <div>
    <button onClick={() => queue.add("c")}>Add</button>
    <button onClick={() => queue.remove()}>Next</button>
    <div>Size: {queue.size}</div>
  </div>
);
```

`initialValue`:

```tsx
const queue = useQueue(["a", "b"]);
```

#### Type Declarations

```ts
export interface UseQueueReturn<Value> {
  first: Value;
  last: Value;
  queue: Value[];
  size: number;
  add: (element: Value) => void;
  clear: () => void;
  remove: () => Value;
}
export declare const useQueue: <Value>(
  initialValue?: Value[]
) => UseQueueReturn<Value>;
```

### 7.17 useRafState

Updates state inside `requestAnimationFrame`.

#### Usage

```ts
import { useRafState } from "@siberiacancode/reactuse";

const [value, setValue] = useRafState(0);
```

#### Example

```tsx
const [value, setValue] = useRafState(0);
return <button onClick={() => setValue(value + 1)}>Value: {value}</button>;
```

`initialValue`:

```tsx
const [value, setValue] = useRafState(() => 0);
```

#### Notes

- Hook uses the [requestAnimationFrame API](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

#### Type Declarations

```ts
export type UseRafStateReturn<Value> = [Value, (value: Value) => void];
export declare const useRafState: <Value>(
  initialValue: (() => Value) | Value
) => readonly [Value, (value: Value) => void];
```

### 7.18 useRefState

Creates a ref-like state that updates on assignment.

#### Usage

```ts
import { useRefState } from "@siberiacancode/reactuse";

const ref = useRefState();
```

#### Example

`initialValue`:

```tsx
const ref = useRefState(0);

return <button onClick={() => ref.current += 1;}>Increment {ref.current}</button>;
```

#### Type Declarations

```ts
export interface StateRef<Value> {
  (node: Value): void;
  current: Value;
  state?: Value;
}
export declare const useRefState: <Value>(
  initialValue?: Value
) => StateRef<Value>;
```

### 7.19 useSessionStorage

Manages a value in sessionStorage.

#### Usage

```ts
import { useSessionStorage } from "@siberiacancode/reactuse";

const storage = useSessionStorage("key", "value");
```

#### Example

```tsx
import { useSessionStorage } from "@siberiacancode/reactuse";

export const CheckoutStep = () => {
  const step = useSessionStorage("checkout-step", 1);

  return (
    <button onClick={() => step.set(step.value + 1)}>Step {step.value}</button>
  );
};
```

`initialValue`:

```tsx
const storage = useSessionStorage("key", "value");
storage.set("next");
```

`deserializer`:

```tsx
const storage = useSessionStorage(
  "user",
  { name: "" },
  {
    deserializer: (value) => JSON.parse(value) as { name: string },
  }
);
storage.set({ name: "Ada" });
```

`serializer`:

```tsx
const storage = useSessionStorage(
  "filters",
  { query: "" },
  {
    serializer: (value) => JSON.stringify(value),
  }
);
storage.set({ query: "design" });
```

#### Notes

- Hook uses the [sessionStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

#### Type Declarations

```ts
import type {
  UseStorageInitialValue,
  UseStorageOptions,
} from "@siberiacancode/reactuse";

export declare const useSessionStorage: <Value>(
  key: string,
  initialValue?: UseStorageInitialValue<Value>,
  options?: Omit<UseStorageOptions<Value>, "initialValue" | "storage">
) => {
  value: Value;
  set: (value: Value) => void;
  remove: () => void;
};
```

### 7.20 useSet

Manages a Set with helper methods.

#### Usage

```ts
import { useSet } from "@siberiacancode/reactuse";

const set = useSet([1, 2, 3]);
```

#### Example

```tsx
const set = useSet(["a"]);
return <button onClick={() => set.toggle("b")}>Size: {set.size}</button>;
```

`values`:

```tsx
const set = useSet(["a", "b"]);
```

#### Type Declarations

```ts
interface UseSetReturn<Value> {
  size: number;
  value: Set<Value>;
  add: (value: Value) => void;
  clear: () => void;
  difference: (other: Set<Value>) => void;
  has: (value: Value) => boolean;
  intersection: (other: Set<Value>) => void;
  remove: (value: Value) => void;
  reset: () => void;
  symmetricDifference: (other: Set<Value>) => void;
  toggle: (value: Value) => void;
  union: (other: Set<Value>) => void;
}
export declare const useSet: <Value>(values?: Value[]) => UseSetReturn<Value>;
```

### 7.21 useStateHistory

Keeps state with undo/redo history.

#### Usage

```ts
import { useStateHistory } from "@siberiacancode/reactuse";

const history = useStateHistory(0);
```

#### Example

```tsx
import { useStateHistory } from "@siberiacancode/reactuse";

export const HistoryInput = () => {
  const history = useStateHistory("draft");

  return (
    <div>
      <button onClick={() => history.undo()}>Undo</button>
      <button onClick={() => history.redo()}>Redo</button>
      <div>Value: {history.value}</div>
    </div>
  );
};
```

`initialValue`:

```tsx
const history = useStateHistory("draft");
```

`capacity`:

```tsx
const history = useStateHistory(0, 50);
```

#### Type Declarations

```ts
interface UseStateHistoryReturn<Value> {
  canRedo: boolean;
  canUndo: boolean;
  history: Value[];
  index: number;
  value: Value;
  back: (steps?: number) => void;
  forward: (steps?: number) => void;
  redo: () => void;
  reset: () => void;
  set: (value: Value) => void;
  undo: () => void;
}
export declare const useStateHistory: <Value>(
  initialValue: Value,
  capacity?: number
) => UseStateHistoryReturn<Value>;
```

### 7.22 useStep

Creates a stepper with next/back helpers.

#### Usage

```ts
import { useStep } from "@siberiacancode/reactuse";

const stepper = useStep(5);
```

#### Example

```tsx
import { useStep } from "@siberiacancode/reactuse";

export const Stepper = () => {
  const stepper = useStep({ initial: 1, max: 3 });

  return (
    <div>
      Step {stepper.currentStep} / {stepper.counts}
      <button onClick={() => stepper.back()}>Back</button>
      <button onClick={() => stepper.next()}>Next</button>
    </div>
  );
};
```

`max`:

```tsx
const stepper = useStep(10);
```

`initial`:

```tsx
const stepper = useStep({ initial: 2, max: 5 });
```

#### Type Declarations

```ts
export interface UseStepParams {
  initial: number;
  max: number;
}
export interface UseStepReturn {
  counts: number;
  currentStep: number;
  isFirst: boolean;
  isLast: boolean;
  back: () => void;
  next: () => void;
  reset: () => void;
  set: (value: number | "first" | "last") => void;
}
export declare const useStep: (params: number | UseStepParams) => UseStepReturn;
```

### 7.23 useStorage

Manages a value in Web Storage.

#### Usage

```ts
import { useStorage } from "@siberiacancode/reactuse";

const storage = useStorage("key", "value");
```

#### Example

```tsx
import { useStorage } from "@siberiacancode/reactuse";

export const Preferences = () => {
  const prefs = useStorage("prefs", { theme: "light", density: "comfortable" });

  return (
    <button onClick={() => prefs.set({ ...prefs.value, theme: "dark" })}>
      Theme: {prefs.value.theme}
    </button>
  );
};
```

`initialValue`:

```tsx
const storage = useStorage("key", { initialValue: "value" });
storage.set("next");
```

`storage`:

```tsx
const storage = useStorage("wizard-step", { storage: sessionStorage });
storage.set(2);
```

`deserializer`:

```tsx
const storage = useStorage("settings", {
  deserializer: (value) => JSON.parse(value) as { compact: boolean },
});
storage.set({ compact: true });
```

`serializer`:

```tsx
const storage = useStorage("filters", {
  serializer: (value) => JSON.stringify(value),
});
storage.set({ query: "react" });
```

#### Type Declarations

```ts
export type UseStorageInitialValue<Value> = (() => Value) | Value;
export interface UseStorageOptions<Value> {
  initialValue?: UseStorageInitialValue<Value>;
  storage?: Storage;
  deserializer?: (value: string) => Value;
  serializer?: (value: Value) => string;
}
export interface UseStorageReturn<Value> {
  value: Value;
  remove: () => void;
  set: (value: Value) => void;
}
export interface UseStorage {
  <Value>(key: string, options?: UseStorageOptions<Value>): UseStorageReturn<
    Value | undefined
  >;
  <Value>(
    key: string,
    initialValue?: UseStorageInitialValue<Value>
  ): UseStorageReturn<Value | undefined>;
}
export declare const useStorage: UseStorage;
```

### 7.24 useToggle

A boolean switcher with utility functions.

#### Usage

```ts
import { useToggle } from "@siberiacancode/reactuse";

const [on, toggle] = useToggle();
// or
const [value, toggle] = useToggle(["light", "dark"] as const);
```

```tsx
import { useToggle } from "@siberiacancode/reactuse";

export const Toggle = () => {
  const [value, toggle] = useToggle();

  return <button onClick={() => toggle()}>{String(value)}</button>;
};
```

Example in a component with array toggle:

```tsx
import { useToggle } from "@siberiacancode/reactuse";

export const UserTypeToggle = () => {
  const [type, toggle] = useToggle(["user", "admin"] as const);

  return <button onClick={() => toggle()}>Current: {userType}</button>;
};
```

#### Type Declarations

```ts
export type ToggleFn = (value?: boolean) => void;
export type UseToggleReturn = [boolean, ToggleFn];
export declare const useToggle: (initialValue?: boolean): UseToggleReturn;
```

### 7.25 useUrlSearchParam

Syncs a single URL search param with state.

#### Usage

```ts
import { useUrlSearchParam } from "@siberiacancode/reactuse";

const param = useUrlSearchParam("page", { initialValue: 1 });
```

#### Example

```tsx
import { useUrlSearchParam } from "@siberiacancode/reactuse";

export const PageParam = () => {
  const param = useUrlSearchParam("page", { initialValue: 1 });

  return (
    <button onClick={() => param.set((param.value ?? 1) + 1)}>
      Page {param.value ?? 1}
    </button>
  );
};
```

`initialValue`:

```tsx
const param = useUrlSearchParam("page", { initialValue: 1 });
```

`mode`:

```tsx
const param = useUrlSearchParam("page", { mode: "hash" });
```

`write`:

```tsx
const param = useUrlSearchParam("page", { write: "push" });
```

`deserializer`:

```tsx
const param = useUrlSearchParam("page", {
  deserializer: (value) => Number(value),
});
```

`serializer`:

```tsx
const param = useUrlSearchParam("page", {
  serializer: (value) => String(value),
});
```

#### Type Declarations

```ts
export type UrlSearchParamMode = "hash-params" | "hash" | "history";
export interface UseUrlSearchParamOptions<Value> {
  initialValue?: Value;
  mode?: UrlSearchParamMode;
  write?: "push" | "replace";
  deserializer?: (value: string) => Value;
  serializer?: (value: Value) => string;
}
export interface UseUrlSearchParamsActionOptions {
  write?: "push" | "replace";
}
export interface UseUrlSearchParamReturn<Value> {
  value: Value | undefined;
  remove: (options?: UseUrlSearchParamsActionOptions) => void;
  set: (value: Value, options?: UseUrlSearchParamsActionOptions) => void;
}
export interface UseUrlSearchParam {
  <Value>(
    key: string,
    options: UseUrlSearchParamOptions<Value> & { initialValue: Value }
  ): UseUrlSearchParamReturn<Value>;
  <Value>(
    key: string,
    options?: UseUrlSearchParamOptions<Value>
  ): UseUrlSearchParamReturn<Value | undefined>;
  <Value>(key: string, initialValue: Value): UseUrlSearchParamReturn<Value>;
  <Value>(key: string): UseUrlSearchParamReturn<Value | undefined>;
}
export declare const useUrlSearchParam: UseUrlSearchParam;
```

### 7.26 useUrlSearchParams

Syncs multiple URL search params with state.

#### Usage

```ts
import { useUrlSearchParams } from "@siberiacancode/reactuse";

const params = useUrlSearchParams({ initialValue: { page: 1 } });
```

#### Example

```tsx
import { useUrlSearchParams } from "@siberiacancode/reactuse";

export const SearchFilters = () => {
  const params = useUrlSearchParams({
    initialValue: { page: 1, q: "" },
  });

  return (
    <button onClick={() => params.set({ page: params.value.page + 1 })}>
      Page {params.value.page}
    </button>
  );
};
```

`initialValue`:

```tsx
const params = useUrlSearchParams({ initialValue: { page: 1, q: "" } });
params.set({ q: "react" });
```

`mode`:

```tsx
const params = useUrlSearchParams({
  mode: "hash",
  initialValue: { tab: "all" },
});
params.set({ tab: "open" });
```

`write`:

```tsx
const params = useUrlSearchParams({
  write: "push",
  initialValue: { page: 1 },
});
params.set({ page: 2 });
```

`deserializer`:

```tsx
const params = useUrlSearchParams({
  deserializer: (value) => JSON.parse(value) as number,
  initialValue: { page: 1 },
});
params.set({ page: 3 });
```

`serializer`:

```tsx
const params = useUrlSearchParams({
  serializer: (value) => JSON.stringify(value),
  initialValue: { page: 1 },
});
params.set({ page: 4 });
```

`set.write`:

```tsx
const params = useUrlSearchParams({ initialValue: { page: 1 } });
params.set({ page: 2 }, { write: "replace" });
```

#### Type Declarations

```ts
export type UrlParams = Record<string, any>;
export type UrlSearchParamsMode = "hash-params" | "hash" | "history";
export interface UseUrlSearchParamsSetOptions {
  write?: "push" | "replace";
}
export type UseUrlSearchParamsInitialValue<Value> = (() => Value) | Value;
export interface UseUrlSearchParamsOptions<Value> {
  initialValue?: UseUrlSearchParamsInitialValue<
    string | URLSearchParams | Value
  >;
  mode?: UrlSearchParamsMode;
  write?: "push" | "replace";
  deserializer?: (value: string) => Value[keyof Value];
  serializer?: (value: Value[keyof Value]) => string;
}
export interface UseUrlSearchParamsReturn<Value> {
  value: Value;
  set: (value: Partial<Value>, options?: UseUrlSearchParamsSetOptions) => void;
}
export interface UseUrlSearchParams {
  <Value>(
    key: string,
    options: UseUrlSearchParamsOptions<Value> & {
      initialValue: UseUrlSearchParamsInitialValue<Value>;
    }
  ): UseUrlSearchParamsReturn<Value>;
  <Value>(options?: UseUrlSearchParamsOptions<Value>): UseUrlSearchParamsReturn<
    Value | undefined
  >;
  <Value>(
    initialValue: UseUrlSearchParamsInitialValue<Value>
  ): UseUrlSearchParamsReturn<Value>;
  <Value>(key: string): UseUrlSearchParamsReturn<Value | undefined>;
}
export declare const useUrlSearchParams: UseUrlSearchParams;
```

### 7.27 useWizard

Manages wizard steps and history.

#### Usage

```ts
import { useWizard } from "@siberiacancode/reactuse";

const wizard = useWizard([
  { id: "step1", nodes: ["step2"] },
  { id: "step2", nodes: [] },
]);
```

#### Example

```tsx
import { useWizard } from "@siberiacancode/reactuse";

export const Checkout = () => {
  const wizard = useWizard([
    { id: "shipping", nodes: ["payment"] },
    { id: "payment", nodes: ["review"] },
    { id: "review", nodes: [] },
  ]);

  return (
    <div>
      Step: {wizard.currentStepId}
      <button onClick={() => wizard.back()}>Back</button>
      <button onClick={() => wizard.set("review")}>Skip</button>
    </div>
  );
};
```

`map`:

```tsx
const wizard = useWizard([
  { id: "step1", nodes: ["step2", "step3"] },
  { id: "step2", nodes: ["step3"] },
  { id: "step3", nodes: [] },
]);
```

`initialStepId`:

```tsx
const wizard = useWizard(
  [
    { id: "step1", nodes: ["step2"] },
    { id: "step2", nodes: [] },
  ],
  "step2"
);
```

#### Type Declarations

```ts
export interface WizardItem<WizardStepId> {
  id: WizardStepId;
  nodes?: WizardStepId[];
}
export declare const useWizard: <WizardStepId extends string>(
  map: WizardItem<WizardStepId>[],
  initialStepId?: WizardStepId
) => {
  currentStepId: WizardStepId;
  set: (id: WizardStepId) => void;
  reset: () => void;
  back: () => void;
  history: WizardStepId[];
};
```

## 8. User

### 8.1 useBrowserLanguage

Returns the current browser language.

#### Usage

```ts
import { useBrowserLanguage } from "@siberiacancode/reactuse";

const language = useBrowserLanguage();
```

#### Example

```tsx
const language = useBrowserLanguage();
return <span>Locale: {language}</span>;
```

#### Notes

- Hook uses the [navigator.language API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language).

#### Type Declarations

```ts
export declare const useBrowserLanguage: () => string;
```

### 8.2 useOperatingSystem

Returns the user's operating system based on the user agent.

#### Usage

```ts
import { useOperatingSystem } from "@siberiacancode/reactuse";

const os = useOperatingSystem();
```

#### Example

```tsx
import { useOperatingSystem } from "@siberiacancode/reactuse";

export const OSBadge = () => {
  const os = useOperatingSystem();
  return <span>OS: {os}</span>;
};
```

#### Type Declarations

```ts
export type OperatingSystem =
  | "android"
  | "ios"
  | "linux"
  | "macos"
  | "undetermined"
  | "windows";
export declare const useOperatingSystem: () => OperatingSystem;
```

### 8.3 usePreferredColorScheme

Returns the user's preferred color scheme.

#### Usage

```ts
import { usePreferredColorScheme } from "@siberiacancode/reactuse";

const scheme = usePreferredColorScheme();
```

#### Example

```tsx
const scheme = usePreferredColorScheme();
return <span>Scheme: {scheme}</span>;
```

#### Type Declarations

```ts
export type UsePreferredColorSchemeReturn = "dark" | "light" | "no-preference";
export declare const usePreferredColorScheme: () => UsePreferredColorSchemeReturn;
```

### 8.4 usePreferredContrast

Returns the user's contrast preference.

#### Usage

```ts
import { usePreferredContrast } from "@siberiacancode/reactuse";

const contrast = usePreferredContrast();
```

#### Example

```tsx
import { usePreferredContrast } from "@siberiacancode/reactuse";

const contrast = usePreferredContrast();
return <span>Contrast: {contrast}</span>;
```

#### Type Declarations

```ts
export type UsePreferredContrastReturn =
  | "custom"
  | "less"
  | "more"
  | "no-preference";
export declare const usePreferredContrast: () => UsePreferredContrastReturn;
```

### 8.5 usePreferredDark

Returns whether the user prefers dark mode.

#### Usage

```ts
import { usePreferredDark } from "@siberiacancode/reactuse";

const isDark = usePreferredDark();
```

#### Example

```tsx
const isDark = usePreferredDark();
return <div>{isDark ? "Dark mode" : "Light mode"}</div>;
```

#### Type Declarations

```ts
export declare const usePreferredDark: () => boolean;
```

### 8.6 usePreferredLanguages

Returns the user's preferred languages.

#### Usage

```ts
import { usePreferredLanguages } from "@siberiacancode/reactuse";

const languages = usePreferredLanguages();
```

#### Example

```tsx
const languages = usePreferredLanguages();
return <div>Languages: {languages.join(", ")}</div>;
```

#### Notes

- Hook uses the [navigator.languages API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages).

#### Type Declarations

```ts
export declare const usePreferredLanguages: () => readonly string[];
```

### 8.7 usePreferredReducedMotion

Returns the reduced motion preference.

#### Usage

```ts
import { usePreferredReducedMotion } from "@siberiacancode/reactuse";

const reduced = usePreferredReducedMotion();
```

#### Example

```tsx
const reduced = usePreferredReducedMotion();
return <span>Motion: {reduced}</span>;
```

#### Type Declarations

```ts
export type UsePreferredReducedMotionReturn = "no-preference" | "reduce";
export declare const usePreferredReducedMotion: () => UsePreferredReducedMotionReturn;
```

## 9. Sensors

### 9.1 useDeviceMotion

Provides device motion data with optional throttling.

#### Usage

```ts
import { useDeviceMotion } from "@siberiacancode/reactuse";

const motion = useDeviceMotion();
```

#### Example

```tsx
const motion = useDeviceMotion();

return (
  <div>
    {Math.round(motion.accelerationIncludingGravity.x ?? 0)} /{" "}
    {Math.round(motion.accelerationIncludingGravity.y ?? 0)}
  </div>
);
```

`delay`:

```tsx
const motion = useDeviceMotion({ delay: 500 });
```

`enabled`:

```tsx
const motion = useDeviceMotion({ enabled: false });
```

`onChange`:

```tsx
const motion = useDeviceMotion({ onChange: (event) => console.log(event) });
```

#### Notes

- Hook uses the [DeviceMotionEvent API](https://developer.mozilla.org/en-US/docs/Web/API/Window/DeviceMotionEvent).

#### Type Declarations

```ts
export interface UseDeviceMotionReturn {
  acceleration: DeviceMotionEventAcceleration;
  accelerationIncludingGravity: DeviceMotionEventAcceleration;
  interval: DeviceMotionEvent["interval"];
  rotationRate: DeviceMotionEventRotationRate;
}
export interface UseDeviceMotionOptions {
  delay?: number;
  enabled?: boolean;
  onChange?: (event: DeviceMotionEvent) => void;
}
export interface UseDeviceMotion {
  (
    callback?: (event: DeviceMotionEvent) => void,
    delay?: number
  ): UseDeviceMotionReturn;
  (options?: UseDeviceMotionOptions): UseDeviceMotionReturn;
}
export declare const useDeviceMotion: UseDeviceMotion;
```

### 9.2 useDeviceOrientation

Provides the current device orientation.

#### Usage

```ts
import { useDeviceOrientation } from "@siberiacancode/reactuse";

const orientation = useDeviceOrientation();
```

#### Example

```tsx
const orientation = useDeviceOrientation();
if (!orientation.supported) return <div>Not supported</div>;

return (
  <div>
    alpha: {orientation.value.alpha ?? 0} beta: {orientation.value.beta ?? 0}
  </div>
);
```

#### Notes

- Hook uses the [DeviceOrientationEvent API](https://developer.mozilla.org/en-US/docs/Web/API/Window/DeviceOrientationEvent).

#### Type Declarations

```ts
export interface UseDeviceOrientationValue {
  absolute: boolean;
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
}
export interface UseDeviceOrientationReturn {
  supported: boolean;
  value: UseDeviceOrientationValue;
}
export declare const useDeviceOrientation: () => UseDeviceOrientationReturn;
```

### 9.3 useHotkeys

Listens for keyboard shortcuts.

#### Usage

```ts
import { useHotkeys } from "@siberiacancode/reactuse";

const ref = useHotkeys<HTMLDivElement>("ctrl+k", () => console.log("hotkey"));
//or
useHotkeys(ref, "ctrl+k", () => console.log("hotkey"));
```

#### Example

```tsx
const ref = useHotkeys<HTMLDivElement>("mod+k", () => console.log("hotkey"));

return <div ref={ref}>Open</div>;
```

`alias`:

```tsx
const ref = useHotkeys<HTMLDivElement>("mod+k", () => {}, {
  alias: { mod: "Control" },
});
```

`enabled`:

```tsx
const ref = useHotkeys<HTMLDivElement>("ctrl+k", () => {}, { enabled: false });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseHotkeysOptions {
  alias?: Record<string, string>;
  enabled?: boolean;
}
export type UseHotkeysHotkeys = string;
export interface UseHotkeysKey {
  alias: string;
  code: string;
  key: string;
}
export type UseHotkeysTarget =
  | Element
  | React.RefObject<Element | null | undefined>;
export interface UseHotkeys {
  (
    target: UseHotkeysTarget,
    hotkeys: UseHotkeysHotkeys,
    callback: (event: KeyboardEvent) => void,
    options?: UseHotkeysOptions
  ): void;
  <Target extends Element>(
    hotkeys: UseHotkeysHotkeys,
    callback: (event: KeyboardEvent) => void,
    options?: UseHotkeysOptions,
    target?: never
  ): StateRef<Target>;
}
export declare const useHotkeys: UseHotkeys;
```

### 9.4 useIdle

Tracks whether the user is idle and last active time.

#### Usage

```ts
import { useIdle } from "@siberiacancode/reactuse";

const idle = useIdle();
```

#### Example

```tsx
import { useIdle } from "@siberiacancode/reactuse";

const idle = useIdle(60000);

return (
  <div>
    {idle.idle ? "Idle" : "Active"} (last: {idle.lastActive})
  </div>
);
```

`milliseconds`:

Idle timeout in milliseconds.

```tsx
const idle = useIdle(30000);
```

`initialValue`:

Initial idle value.

```tsx
const idle = useIdle(60000, { initialValue: true });
```

`events`:

Events that reset idle state.

```tsx
const idle = useIdle(60000, { events: ["mousemove", "keydown"] });
```

#### Type Declarations

```ts
export interface UseIdleOptions {
  events?: Array<keyof DocumentEventMap>;
  initialValue?: boolean;
}
export interface UseIdleReturn {
  idle: boolean;
  lastActive: number;
}
export declare const useIdle: (
  milliseconds?: number,
  options?: UseIdleOptions
) => UseIdleReturn;
```

### 9.5 useInfiniteScroll

Triggers a callback when scroll reaches an edge.

#### Usage

```ts
import { useInfiniteScroll } from "@siberiacancode/reactuse";

const infiniteScroll = useInfiniteScroll<HTMLDivElement>(() =>
  console.log("load")
);
// or
const infiniteScroll = useInfiniteScroll(ref, () => console.log("load"));
```

#### Example

```tsx
import { useRef } from "react";
import { useInfiniteScroll } from "@siberiacancode/reactuse";

const infiniteScroll = useInfiniteScroll<HTMLDivElement>(() =>
  console.log("load")
);

return (
  <div ref={infiniteScroll.ref}>
    {items.map((item) => (
      <div key={item}>Item {item}</div>
    ))}
    {infiniteScroll.loading && <div>Loading...</div>}
  </div>
);
```

`distance`:

Trigger threshold.

```tsx
const infiniteScroll = useInfiniteScroll<HTMLDivElement>(() => {}, {
  distance: 50,
});
```

`direction`:

Scroll edge.

```tsx
const infiniteScroll = useInfiniteScroll<HTMLDivElement>(() => {}, {
  direction: "top",
});
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseInfiniteScrollOptions {
  direction?: "bottom" | "left" | "right" | "top";
  distance?: number;
}
export interface UseInfiniteScroll {
  (
    target: HookTarget,
    callback: (event: Event) => void,
    options?: UseInfiniteScrollOptions
  ): boolean;
  <Target extends Element>(
    callback: (event: Event) => void,
    options?: UseInfiniteScrollOptions,
    target?: never
  ): { ref: StateRef<Target>; loading: boolean };
}
export declare const useInfiniteScroll: UseInfiniteScroll;
```

### 9.6 useIntersectionObserver

Tracks intersection state for an element.

#### Usage

```ts
import { useIntersectionObserver } from "@siberiacancode/reactuse";

const observer = useIntersectionObserver<HTMLDivElement>();
// or
const observer = useIntersectionObserver(ref, { threshold: 0.5 });
```

#### Example

```tsx
import { useIntersectionObserver } from "@siberiacancode/reactuse";

export const LazyItem = () => {
  const observer = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  const isVisible = observer.entries?.[0]?.isIntersecting ?? false;

  return <div ref={observer.ref}>{isVisible ? "Visible" : "Hidden"}</div>;
};
```

`enabled`:

Toggle observer.

```tsx
const observer = useIntersectionObserver<HTMLDivElement>({ enabled: false });
```

`onChange`:

Observer callback.

```tsx
const observer = useIntersectionObserver<HTMLDivElement>({
  onChange: (entries) => console.log(entries),
});
```

`root`:

Scroll container.

```tsx
const observer = useIntersectionObserver<HTMLDivElement>({
  root: containerRef,
});
```

`rootMargin`:

Root offset.

```tsx
const observer = useIntersectionObserver<HTMLDivElement>({
  rootMargin: "10px",
});
```

`threshold`:

Intersection ratio.

```tsx
const observer = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
```

#### Notes

- Hook uses the [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseIntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;
export interface UseIntersectionObserverOptions
  extends Omit<IntersectionObserverInit, "root"> {
  enabled?: boolean;
  onChange?: UseIntersectionObserverCallback;
  root?: HookTarget;
}
export interface UseIntersectionObserverReturn {
  entries?: IntersectionObserverEntry[];
  observer?: IntersectionObserver;
}
export interface UseIntersectionObserver {
  <Target extends Element>(
    options?: UseIntersectionObserverOptions,
    target?: never
  ): UseIntersectionObserverReturn & { ref: StateRef<Target> };
  (
    target: HookTarget,
    options?: UseIntersectionObserverOptions
  ): UseIntersectionObserverReturn;
  <Target extends Element>(
    callback: UseIntersectionObserverCallback,
    target?: never
  ): UseIntersectionObserverReturn & { ref: StateRef<Target> };
  (
    target: HookTarget,
    callback: UseIntersectionObserverCallback
  ): UseIntersectionObserverReturn;
}
export declare const useIntersectionObserver: UseIntersectionObserver;
```

### 9.7 useKeyboard

Registers keydown/keyup listeners on a target.

#### Usage

```ts
import { useKeyboard } from "@siberiacancode/reactuse";

const keyboard = useKeyboard<HTMLInputElement>((event) =>
  console.log(event.key)
);
// or
const keyboard = useKeyboard(ref, (event) => console.log(event.key));
```

#### Example

```tsx
import { useKeyboard } from "@siberiacancode/reactuse";

export const SearchInput = () => {
  const keyboard = useKeyboard<HTMLInputElement>({
    onKeyDown: (event) => console.log(event.key),
  });

  return <input ref={keyboard.ref} placeholder="Type..." />;
};
```

`onKeyDown`:

Keydown handler.

```tsx
useKeyboard<HTMLInputElement>({ onKeyDown: (event) => console.log(event.key) });
```

`onKeyUp`:

Keyup handler.

```tsx
useKeyboard<HTMLInputElement>({ onKeyUp: (event) => console.log(event.key) });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type KeyboardEventHandler = (event: KeyboardEvent) => void;
export interface UseKeyboardEventOptions {
  onKeyDown?: KeyboardEventHandler;
  onKeyUp?: KeyboardEventHandler;
}
export interface UseKeyboard {
  (target: HookTarget, callback: KeyboardEventHandler): void;
  (target: HookTarget, options: UseKeyboardEventOptions): void;
  <Target extends HTMLElement>(
    callback: KeyboardEventHandler,
    target?: never
  ): { ref: StateRef<Target> };
  <Target extends HTMLElement>(
    options: UseKeyboardEventOptions,
    target?: never
  ): { ref: StateRef<Target> };
}
export declare const useKeyboard: UseKeyboard;
```

### 9.8 useKeyPress

Tracks whether specific keys are pressed.

#### Usage

```ts
import { useKeyPress } from "@siberiacancode/reactuse";

const pressed = useKeyPress<HTMLDivElement>("a");
// or
const keyPress = useKeyPress(ref, "a");
```

#### Example

```tsx
import { useKeyPress } from "@siberiacancode/reactuse";

export const Spacebar = () => {
  const keyPress = useKeyPress<HTMLDivElement>("a");

  return (
    <div ref={keyPress.ref}>{keyPress.pressed ? "Pressed" : "Released"}</div>
  );
};
```

`key` as array (match any):

```tsx
const keyPress = useKeyPress<HTMLDivElement>(["ArrowLeft", "ArrowRight"]);
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseKeyPressKey = string | string[];
export type UseKeyPressCallback = (
  pressed: boolean,
  event: KeyboardEvent
) => void;
export interface UseKeyPress {
  (
    target: HookTarget | Window,
    key: UseKeyPressKey,
    callback?: UseKeyPressCallback
  ): boolean;
  <Target extends Element>(
    key: UseKeyPressKey,
    callback?: UseKeyPressCallback,
    target?: never
  ): { pressed: boolean; ref: StateRef<Target> };
}
export declare const useKeyPress: UseKeyPress;
```

### 9.9 useKeyPressEvent

Runs a handler when specific keys are pressed.

#### Usage

```ts
import { useKeyPressEvent } from "@siberiacancode/reactuse";

const keyPressEvent = useKeyPressEvent<HTMLDivElement>("Enter", () =>
  console.log("pressed")
);
// or
useKeyPressEvent(ref, "Enter", () => console.log("pressed"));
```

#### Example

```tsx
import { useKeyPressEvent } from "@siberiacancode/reactuse";

export const SubmitShortcut = () => {
  const keyPressEvent = useKeyPressEvent<HTMLDivElement>("Enter", () =>
    console.log("submit")
  );
  return <div ref={keyPressEvent.ref}>Submit</div>;
};
```

`capture`:

```tsx
useKeyPressEvent<HTMLDivElement>("Enter", () => {}, { capture: true });
```

`once`:

```tsx
useKeyPressEvent<HTMLDivElement>("Enter", () => {}, { once: true });
```

`passive`:

```tsx
useKeyPressEvent<HTMLDivElement>("Enter", () => {}, { passive: true });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseKeyPressEventKey = string | string[];
export interface UseKeyPressEventOptions {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}
export interface UseKeyPressEvent {
  (
    target: HookTarget | Window,
    key: UseKeyPressEventKey,
    listener: (event: KeyboardEvent) => void,
    options?: UseKeyPressEventOptions
  ): void;
  <Target extends Element>(
    key: UseKeyPressEventKey,
    listener: (event: KeyboardEvent) => void,
    options?: UseKeyPressEventOptions,
    target?: never
  ): { ref: StateRef<Target> };
}
export declare const useKeyPressEvent: UseKeyPressEvent;
```

### 9.10 useKeysPressed

Tracks all currently pressed keys.

#### Usage

```ts
import { useKeysPressed } from "@siberiacancode/reactuse";

const keys = useKeysPressed<HTMLDivElement>();
// or
const keys = useKeysPressed(ref, { enabled: true });
```

#### Example

```tsx
import { useKeysPressed } from "@siberiacancode/reactuse";

export const KeysPanel = () => {
  const keys = useKeysPressed<HTMLDivElement>();

  return (
    <div ref={keys.ref}>
      {keys.map((item) => item.key).join(", ") || "None"}
    </div>
  );
};
```

`enabled`:

Toggle tracking.

```tsx
const keys = useKeysPressed<HTMLDivElement>({ enabled: false });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseKeysPressedOptions {
  enabled?: boolean;
}
export interface UseKeysPressed {
  (target: HookTarget | Window, options?: UseKeysPressedOptions): Array<{
    key: string;
    code: string;
  }>;
  <Target extends Element>(options?: UseKeysPressedOptions): {
    value: Array<{ key: string; code: string }>;
    ref: StateRef<Target>;
  };
}
export declare const useKeysPressed: UseKeysPressed;
```

### 9.11 useMouse

Tracks mouse coordinates relative to page and element.

#### Usage

```ts
import { useMouse } from "@siberiacancode/reactuse";

const mouse = useMouse<HTMLDivElement>();
// or
const mouse = useMouse(ref);
```

#### Example

```tsx
import { useMouse } from "@siberiacancode/reactuse";

export const Cursor = () => {
  const mouse = useMouse<HTMLDivElement>();

  return (
    <div ref={mouse.ref}>
      {mouse.x}, {mouse.y} (element: {mouse.elementX}, {mouse.elementY})
    </div>
  );
};
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseMouseReturn {
  clientX: number;
  clientY: number;
  elementPositionX: number;
  elementPositionY: number;
  elementX: number;
  elementY: number;
  x: number;
  y: number;
}
export interface UseMouse {
  (target: HookTarget): UseMouseReturn;
  <Target extends Element>(target?: never): UseMouseReturn & {
    ref: StateRef<Target>;
  };
  (target?: Window): UseMouseReturn;
}
export declare const useMouse: UseMouse;
```

### 9.12 useMutationObserver

Observes DOM mutations on an element.

#### Usage

```ts
import { useMutationObserver } from "@siberiacancode/reactuse";

const observer = useMutationObserver<HTMLDivElement>({ childList: true });
// or
const observer = useMutationObserver(ref, { childList: true });
```

#### Example

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

#### Notes

- Hook uses the [MutationObserver API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

#### Type Declarations

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

### 9.13 useOrientation

Returns the current screen orientation and lock controls.

#### Usage

```ts
import { useOrientation } from "@siberiacancode/reactuse";

const orientation = useOrientation();
```

#### Example

```tsx
import { useOrientation } from "@siberiacancode/reactuse";

export const ScreenOrientation = () => {
  const orientation = useOrientation();
  if (!orientation.supported) return <div>Not supported</div>;

  return (
    <div>
      {orientation.value.orientationType}
      <button onClick={() => orientation.lock("portrait")}>Lock</button>
      <button onClick={() => orientation.unlock()}>Unlock</button>
    </div>
  );
};
```

#### Notes

- Hook uses the [screen.orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation).

#### Type Declarations

```ts
export interface UseOrientationValue {
  angle: number;
  orientationType?: OrientationType;
}
export type OrientationLockType =
  | "any"
  | "landscape-primary"
  | "landscape-secondary"
  | "landscape"
  | "natural"
  | "portrait-primary"
  | "portrait-secondary"
  | "portrait";
export interface useOrientationReturn {
  supported: boolean;
  value: UseOrientationValue;
  lock: (orientation: OrientationLockType) => void;
  unlock: () => void;
}
export declare const useOrientation: () => useOrientationReturn;
```

### 9.14 usePageLeave

Detects when the mouse leaves the page.

#### Usage

```ts
import { usePageLeave } from "@siberiacancode/reactuse";

const left = usePageLeave();
```

#### Example

```tsx
const left = usePageLeave();
return <div>{left ? "Leaving" : "Here"}</div>;
```

#### Type Declarations

```ts
export declare const usePageLeave: (callback?: () => void) => boolean;
```

### 9.15 useParallax

Creates a parallax effect based on mouse or device orientation.

#### Usage

```ts
import { useParallax } from "@siberiacancode/reactuse";

const parallax = useParallax<HTMLDivElement>();
// or
const parallax = useParallax(ref, { mouseRollAdjust: (value) => value * 0.5 });
```

#### Example

```tsx
import { useParallax } from "@siberiacancode/reactuse";

const parallax = useParallax<HTMLDivElement>();
return (
  <div
    ref={parallax.ref}
    style={{
      transform: `translate(${parallax.value.roll * 5}px, ${
        parallax.value.tilt * 5
      }px)`,
    }}
  >
    Parallax
  </div>
);
```

`mouseRollAdjust`:

Mouse roll.

```tsx
const parallax = useParallax<HTMLDivElement>({
  mouseRollAdjust: (value) => value * 0.5,
});
```

`mouseTiltAdjust`:

Mouse tilt.

```tsx
const parallax = useParallax<HTMLDivElement>({
  mouseTiltAdjust: (value) => value * 0.5,
});
```

`deviceOrientationRollAdjust`:

Device roll.

```tsx
const parallax = useParallax<HTMLDivElement>({
  deviceOrientationRollAdjust: (value) => value * 0.5,
});
```

`deviceOrientationTiltAdjust`:

Device tilt.

```tsx
const parallax = useParallax<HTMLDivElement>({
  deviceOrientationTiltAdjust: (value) => value * 0.5,
});
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseParallaxValue {
  roll: number;
  source: "deviceOrientation" | "mouse";
  tilt: number;
}
export interface UseParallaxOptions {
  deviceOrientationRollAdjust?: (value: number) => number;
  deviceOrientationTiltAdjust?: (value: number) => number;
  mouseRollAdjust?: (value: number) => number;
  mouseTiltAdjust?: (value: number) => number;
}
interface UseParallaxReturn {
  value: UseParallaxValue;
}
export interface UseParallax {
  (target: HookTarget, options?: UseParallaxOptions): UseParallaxReturn;
  <Target extends Element>(
    options?: UseParallaxOptions,
    target?: never
  ): UseParallaxReturn & { ref: StateRef<Target> };
}
export declare const useParallax: UseParallax;
```

### 9.16 usePerformanceObserver

Observes performance entries.

#### Usage

```ts
import { usePerformanceObserver } from "@siberiacancode/reactuse";

const perf = usePerformanceObserver({ entryTypes: ["measure"] });
```

#### Example

```tsx
import { usePerformanceObserver } from "@siberiacancode/reactuse";

export const PerfEntries = () => {
  const perf = usePerformanceObserver({ entryTypes: ["resource"] });

  return (
    <div>
      Entries: {perf.entries.length} (supported: {String(perf.supported)})
    </div>
  );
};
```

`immediate`:

```tsx
const perf = usePerformanceObserver({
  entryTypes: ["resource"],
  immediate: true,
});
```

`entryTypes`:

```tsx
const perf = usePerformanceObserver({ entryTypes: ["navigation"] });
```

#### Notes

- Hook uses the [PerformanceObserver API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver).

#### Type Declarations

```ts
export type UsePerformanceObserverOptions = PerformanceObserverInit & {
  immediate?: boolean;
};
export declare const usePerformanceObserver: (
  options: UsePerformanceObserverOptions,
  callback?: PerformanceObserverCallback
) => {
  supported: boolean;
  entries: PerformanceEntry[];
  start: () => void;
  stop: () => void;
};
```

### 9.17 useResizeObserver

Observes size changes for an element.

#### Usage

```ts
import { useResizeObserver } from "@siberiacancode/reactuse";

const observer = useResizeObserver<HTMLDivElement>();
// or
const observer = useResizeObserver(ref, { box: "border-box" });
```

#### Example

```tsx
import { useResizeObserver } from "@siberiacancode/reactuse";

const observer = useResizeObserver<HTMLDivElement>();
const entry = observer.entry;

return (
  <div ref={observer.ref}>
    {observer.entry?.contentRect.width}x{observer.entry?.contentRect.height}
  </div>
);
```

`enabled`:

Toggle observer.

```tsx
const observer = useResizeObserver<HTMLDivElement>({ enabled: false });
```

`box`:

Box sizing.

```tsx
const observer = useResizeObserver<HTMLDivElement>({ box: "border-box" });
```

`onChange`:

Resize callback.

```tsx
const observer = useResizeObserver<HTMLDivElement>({
  onChange: (entry) => console.log(entry),
});
```

#### Notes

- Hook uses the [ResizeObserver API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseResizeObserverCallback = (
  entry: ResizeObserverEntry,
  observer: ResizeObserver
) => void;
export interface UseResizeObserverOptions extends ResizeObserverOptions {
  enabled?: boolean;
  onChange?: UseResizeObserverCallback;
}
export interface UseResizeObserverReturn {
  entry: ResizeObserverEntry;
  observer?: ResizeObserver;
}
export interface UseResizeObserver {
  <Target extends Element>(
    options?: UseResizeObserverOptions,
    target?: never
  ): UseResizeObserverReturn & { ref: StateRef<Target> };
  (
    target: HookTarget,
    options?: UseResizeObserverOptions
  ): UseResizeObserverReturn;
  <Target extends Element>(
    callback: UseResizeObserverCallback,
    target?: never
  ): UseResizeObserverReturn & { ref: StateRef<Target> };
  (
    target: HookTarget,
    callback: UseResizeObserverCallback
  ): UseResizeObserverReturn;
}
export declare const useResizeObserver: UseResizeObserver;
```

### 9.18 useScroll

Tracks scroll state and provides scroll helpers.

#### Usage

```ts
import { useScroll } from "@siberiacancode/reactuse";

const scroll = useScroll<HTMLDivElement>();
// or
const scroll = useScroll(ref);
```

#### Example

```tsx
const scroll = useScroll<HTMLDivElement>();
return (
  <div ref={scroll.ref}>
    {scroll.arrived.bottom ? "Bottom" : `y: ${scroll.y}`}
  </div>
);
```

`onScroll`:

Scroll callback.

```tsx
const scroll = useScroll<HTMLDivElement>({
  onScroll: ({ x, y }) => console.log(x, y),
});
```

`onStop`:

Stop callback.

```tsx
const scroll = useScroll<HTMLDivElement>({
  onStop: () => console.log("stopped"),
});
```

`offset.left`:

Left offset.

```tsx
const scroll = useScroll<HTMLDivElement>({ offset: { left: 10 } });
```

`offset.right`:

Right offset.

```tsx
const scroll = useScroll<HTMLDivElement>({ offset: { right: 10 } });
```

`offset.top`:

Top offset.

```tsx
const scroll = useScroll<HTMLDivElement>({ offset: { top: 10 } });
```

`offset.bottom`:

Bottom offset.

```tsx
const scroll = useScroll<HTMLDivElement>({ offset: { bottom: 10 } });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseScrollOptions {
  onScroll?: (params: UseScrollCallbackParams, event: Event) => void;
  onStop?: (event: Event) => void;
  offset?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
}
export interface UseScrollCallbackParams {
  x: number;
  y: number;
  arrived: {
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
  };
  directions: {
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
  };
}
export interface ScrollIntoViewParams {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}
export interface ScrollToParams {
  behavior?: ScrollBehavior;
  x: number;
  y: number;
}
export interface UseScrollReturn {
  scrolling: boolean;
  scrollIntoView: (params?: ScrollIntoViewParams) => void;
  scrollTo: (params?: ScrollToParams) => void;
}
export interface UseScroll {
  (
    target?: HookTarget,
    callback?: (params: UseScrollCallbackParams, event: Event) => void
  ): UseScrollReturn;
  (target?: HookTarget, options?: UseScrollOptions): UseScrollReturn;
  <Target extends Element>(
    callback?: (params: UseScrollCallbackParams, event: Event) => void,
    target?: never
  ): UseScrollReturn & { ref: StateRef<Target> };
  <Target extends Element>(
    options?: UseScrollOptions,
    target?: never
  ): UseScrollReturn & { ref: StateRef<Target> };
}
export declare const useScroll: UseScroll;
```

### 9.19 useScrollIntoView

Scrolls an element into view and exposes a trigger.

#### Usage

```ts
import { useScrollIntoView } from "@siberiacancode/reactuse";

const scrollIntoView = useScrollIntoView<HTMLDivElement>();
// or
useScrollIntoView(ref, { behavior: "smooth" });
```

#### Example

```tsx
import { useScrollIntoView } from "@siberiacancode/reactuse";

export const JumpToDetails = () => {
  const scrollIntoView = useScrollIntoView<HTMLDivElement>({
    behavior: "smooth",
  });

  return (
    <div>
      <button onClick={() => scroll.trigger()}>Go to details</button>
      <div ref={scrollIntoView.ref}>Details</div>
    </div>
  );
};
```

`immediately`:

Run immediately.

```tsx
const scrollIntoView = useScrollIntoView<HTMLDivElement>({
  immediately: false,
});
```

`behavior`:

Scroll behavior.

```tsx
const scrollIntoView = useScrollIntoView<HTMLDivElement>({
  behavior: "smooth",
});
```

`block`:

Block alignment.

```tsx
const scrollIntoView = useScrollIntoView<HTMLDivElement>({ block: "center" });
```

`inline`:

Inline alignment.

```tsx
const scrollIntoView = useScrollIntoView<HTMLDivElement>({ inline: "center" });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseScrollIntoViewOptions extends ScrollIntoViewOptions {
  immediately?: boolean;
}
export interface UseScrollIntoViewReturn {
  trigger: (params?: {
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
  }) => void;
}
export interface UseScrollIntoView {
  <Target extends Element>(
    options?: UseScrollIntoViewOptions,
    target?: never
  ): UseScrollIntoViewReturn & { ref: StateRef<Target> };
  (
    target?: HookTarget,
    options?: UseScrollIntoViewOptions
  ): UseScrollIntoViewReturn;
}
export declare const useScrollIntoView: UseScrollIntoView;
```

### 9.20 useScrollTo

Scrolls to a specific position with a trigger.

#### Usage

```ts
import { useScrollTo } from "@siberiacancode/reactuse";

const scrollTo = useScrollTo<HTMLDivElement>({ x: 0, y: 0 });
// or
useScrollTo(ref, { x: 0, y: 0 });
```

#### Example

```tsx
import { useScrollTo } from "@siberiacancode/reactuse";

export const BackToTop = () => {
  const scrollTo = useScrollTo<HTMLDivElement>({ x: 0, y: 0 });

  return <button onClick={() => scrollTo.trigger()}>Top</button>;
};
```

`immediately`:

Run immediately.

```tsx
const scrollTo = useScrollTo<HTMLDivElement>({
  x: 0,
  y: 0,
  immediately: false,
});
```

`behavior`:

Scroll behavior.

```tsx
const scrollTo = useScrollTo<HTMLDivElement>({
  x: 0,
  y: 0,
  behavior: "smooth",
});
```

`x`:

Target x.

```tsx
const scrollTo = useScrollTo<HTMLDivElement>({ x: 200, y: 0 });
```

`y`:

Target y.

```tsx
const scrollTo = useScrollTo<HTMLDivElement>({ x: 0, y: 300 });
```

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export interface UseScrollToOptions {
  behavior?: ScrollBehavior;
  immediately?: boolean;
  x: number;
  y: number;
}
export interface UseScrollToReturn {
  trigger: (params?: {
    x: number;
    y: number;
    behavior?: ScrollBehavior;
  }) => void;
}
export interface UseScrollTo {
  <Target extends Element>(
    options?: UseScrollToOptions,
    target?: never
  ): UseScrollToReturn & { ref: StateRef<Target> };
  (target?: HookTarget, options?: UseScrollToOptions): UseScrollToReturn;
}
export declare const useScrollTo: UseScrollTo;
```

### 9.21 useTextSelection

Tracks text selection details.

#### Usage

```ts
import { useTextSelection } from "@siberiacancode/reactuse";

const selection = useTextSelection();
```

#### Example

```tsx
import { useTextSelection } from "@siberiacancode/reactuse";

export const SelectedText = () => {
  const selection = useTextSelection();
  return (
    <span>
      {selection.text ? `Selected: ${selection.text}` : "Select text"}
    </span>
  );
};
```

#### Notes

- Hook uses the [document.getSelection API](https://developer.mozilla.org/en-US/docs/Web/API/Document/getSelection).

#### Type Declarations

```ts
export interface UseTextSelectionReturn {
  ranges: Range[];
  rects: DOMRect[];
  selection: Selection | null;
  text: string;
}
export declare const useTextSelection: () => UseTextSelectionReturn;
```

### 9.22 useVisibility

Tracks whether an element is visible in the viewport.

#### Usage

```ts
import { useVisibility } from "@siberiacancode/reactuse";

const visibility = useVisibility<HTMLDivElement>();
// or
const visibility = useVisibility<HTMLDivElement>(ref, { threshold: 0.5 });
```

#### Example

```tsx
import { useVisibility } from "@siberiacancode/reactuse";

export const VisibilityBadge = () => {
  const visibility = useVisibility<HTMLDivElement>();

  return (
    <div ref={visibility.ref}>
      {visibility.inView ? "In view" : "Out of view"}
    </div>
  );
};
```

`enabled`:

```tsx
const visibility = useVisibility<HTMLDivElement>({ enabled: false });
```

`onChange`:

```tsx
const visibility = useVisibility<HTMLDivElement>({
  onChange: (entry) => console.log(entry),
});
```

`root`:

```tsx
const visibility = useVisibility<HTMLDivElement>({ root: containerRef });
```

`rootMargin`:

```tsx
const visibility = useVisibility<HTMLDivElement>({ rootMargin: "10px" });
```

`threshold`:

```tsx
const visibility = useVisibility<HTMLDivElement>({ threshold: 0.5 });
```

#### Notes

- Hook uses the [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).

#### Type Declarations

```ts
import type { HookTarget } from "@siberiacancode/reactuse";
import type { StateRef } from "@siberiacancode/reactuse";

export type UseVisibilityCallback = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;
export interface UseVisibilityOptions
  extends Omit<IntersectionObserverInit, "root"> {
  enabled?: boolean;
  onChange?: UseVisibilityCallback;
  root?: HookTarget;
}
export interface UseVisibilityReturn {
  entry?: IntersectionObserverEntry;
  inView: boolean;
  observer?: IntersectionObserver;
}
export interface UseVisibility {
  <Target extends Element>(
    options?: UseVisibilityOptions,
    target?: never
  ): UseVisibilityReturn & { ref: StateRef<Target> };
  (target: HookTarget, options?: UseVisibilityOptions): UseVisibilityReturn;
  <Target extends Element>(
    callback: UseVisibilityCallback,
    target?: never
  ): UseVisibilityReturn & { ref: StateRef<Target> };
  (target: HookTarget, callback: UseVisibilityCallback): UseVisibilityReturn;
}
export declare const useVisibility: UseVisibility;
```

### 9.23 useWindowEvent

Attaches an event listener to the window object.

#### Usage

```ts
import { useWindowEvent } from "@siberiacancode/reactuse";

useWindowEvent("resize", () => console.log("resize"));
```

#### Example

```tsx
import { useWindowEvent } from "@siberiacancode/reactuse";
import { useState } from "react";

export const ResizeCount = () => {
  const [count, setCount] = useState(0);
  useWindowEvent("resize", () => setCount((value) => value + 1));

  return <div>Resized: {count}</div>;
};
```

`enabled`:

```tsx
useWindowEvent("scroll", () => {}, { enabled: false });
```

#### Type Declarations

```ts
import type { UseEventListenerOptions } from "@siberiacancode/reactuse";

export declare const useWindowEvent: <Event extends keyof WindowEventMap>(
  event: Event,
  listener: (this: Window, event: WindowEventMap[Event]) => any,
  options?: UseEventListenerOptions
) => void;
```

### 9.24 useWindowScroll

Tracks window scroll position and exposes scrollTo.

#### Usage

```ts
import { useWindowScroll } from "@siberiacancode/reactuse";

const scroll = useWindowScroll();
```

#### Example

```tsx
import { useWindowScroll } from "@siberiacancode/reactuse";

export const ScrollButton = () => {
  const windowScroll = useWindowScroll();
  return (
    <button onClick={() => windowScroll.scrollTo({ y: 0 })}>
      Top (y: {windowScroll.value.y})
    </button>
  );
};
```

#### Type Declarations

```ts
export interface ScrollPosition {
  x: number;
  y: number;
}
export declare const scrollTo: (
  params: Partial<ScrollPosition & ScrollOptions>
) => void;
export declare const useWindowScroll: () => {
  value: ScrollPosition;
  scrollTo: typeof scrollTo;
};
```

## 10. Time

### 10.1 useInterval

Creates an interval with controls to pause and resume it.

#### Usage

```ts
import { useInterval } from "@siberiacancode/reactuse";

const interval = useInterval(() => console.log("tick"), 2500);
```

#### Example

```tsx
import { useInterval } from "@siberiacancode/reactuse";
import { useState } from "react";

export const Ticker = () => {
  const [count, setCount] = useState(0);
  const interval = useInterval(() => setCount((value) => value + 1), 1000);

  return (
    <button onClick={() => interval.toggle()}>
      {interval.active ? "Pause" : "Resume"} ({count})
    </button>
  );
};
```

`interval` (milliseconds):

```tsx
const interval = useInterval(() => console.log("tick"), 2000);
```

`immediately` (start right away):

```tsx
const interval = useInterval(() => console.log("tick"), {
  interval: 1000,
  immediately: false,
});
```

#### Type Declarations

```ts
export interface UseIntervalOptions {
  immediately?: boolean;
}
export interface UseIntervalReturn {
  active: boolean;
  pause: () => void;
  resume: () => void;
  toggle: () => void;
}
interface UseInterval {
  (
    callback: () => void,
    interval?: number,
    options?: UseIntervalOptions
  ): UseIntervalReturn;
  (
    callback: () => void,
    options?: UseIntervalOptions & { interval?: number }
  ): UseIntervalReturn;
}
export declare const useInterval: UseInterval;
```

### 10.2 useStopwatch

Creates a stopwatch with start, pause, and reset controls.

#### Usage

```ts
import { useStopwatch } from "@siberiacancode/reactuse";

const stopwatch = useStopwatch();
```

#### Example

```tsx
import { useStopwatch } from "@siberiacancode/reactuse";

export const Stopwatch = () => {
  const stopwatch = useStopwatch();

  return (
    <div>
      {stopwatch.minutes}:{stopwatch.seconds}
      <button onClick={() => stopwatch.toggle()}>
        {stopwatch.paused ? "Start" : "Pause"}
      </button>
    </div>
  );
};
```

`initialTime`:

Start from a value.

```tsx
const stopwatch = useStopwatch(120);
```

`immediately`:

Auto-start.

```tsx
const stopwatch = useStopwatch({ initialTime: 0, immediately: true });
```

#### Type Declarations

```ts
export interface UseStopwatchReturn {
  count: number;
  days: number;
  hours: number;
  minutes: number;
  over: boolean;
  paused: boolean;
  seconds: number;
  pause: () => void;
  reset: () => void;
  start: () => void;
  toggle: () => void;
}
export interface UseStopwatchOptions {
  immediately?: boolean;
}
interface UseStopwatch {
  (initialTime?: number, options?: UseStopwatchOptions): UseStopwatchReturn;
  (
    options?: UseStopwatchOptions & { initialTime?: number }
  ): UseStopwatchReturn;
}
export declare const useStopwatch: UseStopwatch;
```

### 10.3 useTime

Provides the current time split into multiple fields.

#### Usage

```ts
import { useTime } from "@siberiacancode/reactuse";

const time = useTime();
```

#### Example

```tsx
import { useTime } from "@siberiacancode/reactuse";

export const Clock = () => {
  const time = useTime();
  return (
    <div>
      {String(time.hours).padStart(2, "0")}:
      {String(time.minutes).padStart(2, "0")}:
      {String(time.seconds).padStart(2, "0")}
    </div>
  );
};
```

#### Type Declarations

```ts
export interface UseTimeReturn {
  day: number;
  hours: number;
  meridiemHours: { value: number; type: string };
  minutes: number;
  month: number;
  seconds: number;
  timestamp: number;
  year: number;
}
export declare const useTime: () => UseTimeReturn;
```

### 10.4 useTimeout

Runs a callback after a delay and returns a `ready` flag.

#### Usage

```ts
import { useTimeout } from "@siberiacancode/reactuse";

const timeout = useTimeout(() => {}, 5000);
```

#### Example

```tsx
import { useTimeout } from "@siberiacancode/reactuse";

export const Toast = () => {
  const timeout = useTimeout(() => {
    console.log("hide");
  }, 2000);

  return (
    <div>
      {timeout.ready ? "Hidden" : "Visible"}
      <button onClick={() => timeout.clear()}>Dismiss</button>
    </div>
  );
};
```

#### Type Declarations

```ts
interface UseTimeoutReturn {
  ready: boolean;
  clear: () => void;
}
export declare function useTimeout(
  callback: () => void,
  delay: number
): UseTimeoutReturn;
```

### 10.5 useTimer

Creates a countdown timer with controls and callbacks.

#### Usage

```ts
import { useTimer } from "@siberiacancode/reactuse";

const timer = useTimer(60);
```

#### Example

```tsx
import { useTimer } from "@siberiacancode/reactuse";

export const Countdown = () => {
  const timer = useTimer(10);

  return (
    <div>
      {timer.seconds}s
      <button onClick={() => timer.toggle()}>
        {timer.active ? "Pause" : "Resume"}
      </button>
    </div>
  );
};
```

`seconds`:

Initial countdown.

```tsx
const timer = useTimer(30);
```

`immediately`:

Auto-start.

```tsx
const timer = useTimer(30, { immediately: false });
```

`onExpire`:

When timer ends.

```tsx
const timer = useTimer(10, {
  onExpire: () => console.log("done"),
});
```

`onStart`:

When timer starts.

```tsx
const timer = useTimer(10, {
  onStart: () => console.log("start"),
});
```

`onTick`:

On each second.

```tsx
const timer = useTimer(10, {
  onTick: (seconds) => console.log(seconds),
});
```

#### Type Declarations

```ts
export type PositiveInteger<Value extends number> = `${Value}` extends
  | `-${any}`
  | `${any}.${any}`
  ? never
  : Value;
export interface UseTimerOptions {
  immediately?: boolean;
  onExpire?: () => void;
  onStart?: () => void;
  onTick?: (seconds: number) => void;
}
export interface UseTimerReturn {
  active: boolean;
  count: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  clear: () => void;
  decrease: (seconds: PositiveInteger<number>) => void;
  increase: (seconds: PositiveInteger<number>) => void;
  pause: () => void;
  restart: (time: PositiveInteger<number>, immediately?: boolean) => void;
  resume: () => void;
  start: () => void;
  toggle: () => void;
}
export interface UseTimer {
  (): UseTimerReturn;
  (seconds: PositiveInteger<number>, callback: () => void): UseTimerReturn;
  (seconds: PositiveInteger<number>, options?: UseTimerOptions): UseTimerReturn;
}
export declare const useTimer: UseTimer;
```

### 10.6 useProgress

Creates a lightweight progress state with auto-increment behavior.

## Usage

```ts
import { useProgress } from "@siberiacancode/reactuse";

const { value, active, start, done, inc, remove } = useProgress(0, {
  immediately: false,
  maximum: 0.98,
  speed: 250,
  rate: 0.02,
});
```

## Example

```tsx
import { useProgress } from "@siberiacancode/reactuse";

export const LoadingBar = () => {
  const progress = useProgress(0);

  const onLoad = async () => {
    progress.start();
    await new Promise((resolve) => setTimeout(resolve, 1200));
    progress.done();
  };

  return (
    <div>
      <button onClick={onLoad}>Start</button>

      {active && (
        <div
          style={{
            width: "100%",
            height: 4,
            background: "#e5e7eb",
            marginTop: 12,
          }}
        >
          <div
            style={{
              width: `${Math.round(value * 100)}%`,
              height: "100%",
              background: "#2563eb",
              transition: "width 200ms ease",
            }}
          />
        </div>
      )}
    </div>
  );
};
```

`initialValue`:

Initial progress value in the `0..1` range.

```tsx
const progress = useProgress(0.25);
```

`immediately`:

Starts progress automatically on mount.

```tsx
const progress = useProgress(0, { immediately: true });
```

`maximum`:

Upper bound for auto-increment while active.

```tsx
const progress = useProgress(0, { maximum: 0.95 });
```

`speed`:

Auto-increment interval in milliseconds.

```tsx
const progress = useProgress(0, { speed: 150 });
```

`rate`:

Additional random increment amount per tick.

```tsx
const progress = useProgress(0, { rate: 0.03 });
```

## Use cases

- Top-page loading bars for route/data transitions.

## Notes

- `value` is expected in the `0..1` range.
- `done()` sets progress to `1` and disables active state with a short delay.

## Type Declarations

```ts
export interface UseProgressOptions {
  immediately?: boolean;
  maximum?: number;
  rate?: number;
  speed?: number;
}
export interface UseProgressReturn {
  active: boolean;
  value: number;
  done: (force?: boolean) => number | null;
  inc: (amount?: number) => number | null;
  remove: () => void;
  start: (from?: number | null) => number;
}
export declare const useProgress: (
  initialValue?: number,
  options?: UseProgressOptions
) => UseProgressReturn;
```

## 11. Debug

### 11.1 useLogger

Logs mount, update, and unmount for a component.

#### Usage

```ts
import { useLogger } from "@siberiacancode/reactuse";

useLogger("Component", [value]);
```

#### Example

```tsx
import { useLogger } from "@siberiacancode/reactuse";
import { useState } from "react";

export const DebugPanel = () => {
  const [count, setCount] = useState(0);
  useLogger("DebugPanel");
  return (
    <button onClick={() => setCount((value) => value + 1)}>
      Panel ({count})
    </button>
  );
};
```

#### Type Declarations

```ts
export declare const useLogger: (name: string, params: unknown[]) => void;
```

### 11.2 useRenderCount

Returns how many times a component has rendered.

#### Usage

```ts
import { useRenderCount } from "@siberiacancode/reactuse";

const count = useRenderCount();
```

#### Example

```tsx
import { useRenderCount } from "@siberiacancode/reactuse";
import { useState } from "react";

export const RenderCounter = () => {
  const renders = useRenderCount();
  const [, setTick] = useState(0);
  return (
    <div>
      Renders: {renders}
      <button onClick={() => setTick((value) => value + 1)}>Re-render</button>
    </div>
  );
};
```

#### Type Declarations

```ts
export declare const useRenderCount: () => number;
```

### 11.3 useRenderInfo

Provides render count and timing info, with optional logging.

#### Usage

```ts
import { useRenderInfo } from "@siberiacancode/reactuse";

const info = useRenderInfo("Component");
```

#### Example

`name` (custom component name):

```tsx
const info = useRenderInfo("ProfileCard");
return (
  <div>
    Renders: {info.renders}, Since last: {info.sinceLast}ms
  </div>
);
```

`log` (disable console output):

```tsx
const info = useRenderInfo("ProfileCard", false);
```

#### Type Declarations

```ts
export interface UseRenderInfoReturn {
  component: string;
  renders: number;
  sinceLast: number;
  timestamp: number | null;
}
export declare const useRenderInfo: (
  name?: string,
  log?: boolean
) => UseRenderInfoReturn;
```

### 11.4 useRerender

Forces a component rerender on demand.

#### Usage

```ts
import { useRerender } from "@siberiacancode/reactuse";

const rerender = useRerender();
```

#### Example

```tsx
import { useRerender } from "@siberiacancode/reactuse";
import { useState } from "react";

export const ManualRefresh = () => {
  const rerender = useRerender();
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount((value) => value + 1);
        rerender();
      }}
    >
      Refresh {count}
    </button>
  );
};
```

#### Type Declarations

```ts
export declare const useRerender: () => () => void;
```

## References

1. [https://react.dev](https://react.dev)
2. [https://nextjs.org](https://nextjs.org)
3. [https://reactuse.org](https://reactuse.org)
