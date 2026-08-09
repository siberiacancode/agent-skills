---
name: usePermission
category: Browser
usage: medium
---

# usePermission

Tracks a browser permission query so UI can react when access is granted, prompted, or denied.

## Usage

```ts
import { usePermission } from "@siberiacancode/reactuse";

const permission = usePermission("microphone");
```

## Example

```tsx
import { usePermission } from "@siberiacancode/reactuse";

export const CameraPermission = () => {
  const permission = usePermission("camera", (state) => console.log(state));

  return <div>{permission.supported ? permission.state : "unsupported"}</div>;
};
```

`onChange`:

```tsx
const permission = usePermission("notifications", {
  onChange: (state) => console.log(state),
});
```

`name`:

```tsx
const permission = usePermission("microphone");
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
  | "local-fonts"
  | "magnetometer"
  | "microphone"
  | "notifications"
  | "payment-handler"
  | "persistent-storage"
  | "push"
  | "speaker"
  | PermissionName;
export type UsePermissionCallback = (state: PermissionState) => void;
export interface UsePermissionOptions {
  onChange?: UsePermissionCallback;
}
export interface UsePermissionReturn {
  state: PermissionState;
  supported: boolean;
  query: () => Promise<PermissionState>;
}
export interface UsePermission {
  (name: UsePermissionName, callback?: UsePermissionCallback): UsePermissionReturn;
  (name: UsePermissionName, options?: UsePermissionOptions): UsePermissionReturn;
}
export declare const usePermission: UsePermission;
```
