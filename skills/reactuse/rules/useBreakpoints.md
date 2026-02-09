---
name: useBreakpoints
category: Browser
usage: medium
---

# useBreakpoints

Manages responsive breakpoints and helper predicates.

## Usage

```ts
import { useBreakpoints } from "@siberiacancode/reactuse";

const breakpoints = useBreakpoints({ mobile: 0, tablet: 640, desktop: 1024 });
```

## Example

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

## Presets

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

## Notes

- Use only when CSS cannot solve the layout.

## Type Declarations

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
