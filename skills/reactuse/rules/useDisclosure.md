---
name: useDisclosure
category: State
usage: high
---

# useDisclosure

Manages open/close state with helpers.

## Usage

```ts
import { useDisclosure } from "@siberiacancode/reactuse";

const disclosure = useDisclosure();
```

## Example

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

## Type Declarations

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
