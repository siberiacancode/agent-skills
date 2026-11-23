---
name: usePaint
category: Elements
usage: low
---

# usePaint

Draws on a canvas and exposes drawing controls.

## Usage

```ts
import { usePaint } from "@siberiacancode/reactuse";

const paint = usePaint<HTMLCanvasElement>();
// or
const paint = usePaint(ref, { color: "red" });
```

## Example

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

## Type Declarations

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
