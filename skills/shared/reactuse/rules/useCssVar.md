---
name: useCssVar
category: Browser
usage: low
---

# useCssVar

Reads and writes a CSS custom property.

## Usage

```ts
import { useCssVar } from "@siberiacancode/reactuse";

const cssVar = useCssVar<HTMLDivElement>("--color", "red");
// or
const cssVar = useCssVar(ref, "--color", "red");
```

## Example

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

## Type Declarations

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
