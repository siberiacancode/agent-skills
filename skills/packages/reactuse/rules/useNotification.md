---
name: useNotification
category: Browser
usage: medium
---

# useNotification

Keeps browser notification permission and the latest notification instance available for UI flows that ask permission before showing messages.

## Usage

```ts
import { useNotification } from "@siberiacancode/reactuse";

const notification = useNotification();
```

## Example

```tsx
import { useNotification } from "@siberiacancode/reactuse";

export const NotifyButton = () => {
  const notification = useNotification();

  return (
    <button
      disabled={!notification.supported}
      onClick={async () => {
        if (await notification.trigger()) {
          notification.show({ title: "Build finished" });
        }
      }}
    >
      Notify me
    </button>
  );
};
```

`title`:

```tsx
notification.show({ title: "Build finished" });
```

`NotificationOptions`:

```tsx
notification.show({ title: "New message", body: "Open the inbox" });
```

`onClick`:

```tsx
notification.show({ title: "New message", onClick: () => router.push("/inbox") });
```

`onClose`:

```tsx
notification.show({ title: "Saved", onClose: () => console.log("closed") });
```

`onError`:

```tsx
notification.show({ title: "Sync failed", onError: (event) => console.error(event) });
```

`onShow`:

```tsx
notification.show({ title: "Ready", onShow: () => console.log("shown") });
```

`trigger()`:

```tsx
const allowed = await notification.trigger();
if (allowed) notification.show({ title: "Ready" });
```

## Notes

- Hook uses the [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification).

## Type Declarations

```ts
export interface UseNotificationParams extends NotificationOptions {
  title?: string;
  onClick?: (event: Event) => void;
  onClose?: (event: Event) => void;
  onError?: (event: Event) => void;
  onShow?: (event: Event) => void;
}
export interface UseNotificationReturn {
  notification: Notification | undefined;
  supported: boolean;
  close: () => void;
  show: (params?: UseNotificationParams) => Notification | undefined;
  trigger: () => Promise<boolean>;
}
export declare const useNotification: () => UseNotificationReturn;
```
