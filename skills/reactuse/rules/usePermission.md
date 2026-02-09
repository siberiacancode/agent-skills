---
name: usePermission
category: Browser
usage: medium
---

# usePermission

Returns the state of a given permission.

## Usage

```ts
import { usePermission } from "@siberiacancode/reactuse";

const permission = usePermission("microphone");
```

## Example

```tsx
const permission = usePermission("camera");
return <div>{permission.state}</div>;
```

`enabled`:

```tsx
const permission = usePermission("camera", { enabled: false });
```

## Notes

- Hook uses the [navigator.permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions).

## Type Declarations

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
