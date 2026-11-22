---
name: useHash
category: State
usage: low
---

# useHash

Manages URL hash value.

## Usage

```ts
import { useHash } from "@siberiacancode/reactuse";

const hash = useHash("section");
```

## Example

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

## Type Declarations

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
