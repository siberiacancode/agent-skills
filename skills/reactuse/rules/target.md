---
name: target
category: Helpers
usage: medium
---

# target

Flexible helper to reference DOM targets for hooks.

## Usage

```ts
import { target, useClickOutside } from "@siberiacancode/reactuse";

useClickOutside(target("#container"), () => console.log("outside"));
```

## Example

Selector and element targets:

```tsx
import { target, useClickOutside } from "@siberiacancode/reactuse";

useClickOutside(target("#container"), () => console.log("outside"));
useClickOutside(target(document.getElementById("container")!), () =>
  console.log("outside")
);
```

### Parameters

| Name    | Type         | Required/Default | Description                           |
| ------- | ------------ | ---------------- | ------------------------------------- |
| `value` | `HookTarget` | required         | DOM target, selector, ref, or getter. |

### Return Values

| Name     | Type         | Description                            |
| -------- | ------------ | -------------------------------------- |
| `target` | `HookTarget` | Normalized target reference for hooks. |

## Notes

- `target` accepts refs, DOM elements, functions returning elements, or selectors.
- Use it when you want to avoid creating a ref callback from the hook.
