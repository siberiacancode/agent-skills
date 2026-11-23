---
name: useLastChanged
category: Utilities
usage: low
---

# useLastChanged

Records the timestamp of the last change.

## Usage

```ts
import { useLastChanged } from "@siberiacancode/reactuse";

const lastChanged = useLastChanged(value);
```

## Example

`initialValue`:

Custom initial timestamp.

```tsx
const lastChanged = useLastChanged(value, { initialValue: 0 });
console.log(lastChanged);
```

## Type Declarations

```ts
export interface UseLastChangedOptions {
  initialValue?: number;
}
export declare const useLastChanged: (
  source: any,
  options?: UseLastChangedOptions
) => number | null;
```
