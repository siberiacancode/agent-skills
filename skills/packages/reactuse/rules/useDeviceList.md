---
name: useDeviceList
category: Browser
usage: medium
---

# useDeviceList

Keeps the available media input and output devices grouped for UI pickers after permissions are requested.

## Usage

```ts
import { useDeviceList } from "@siberiacancode/reactuse";

const devices = useDeviceList();
```

## Example

```tsx
import { useDeviceList } from "@siberiacancode/reactuse";

export const CameraPicker = () => {
  const devices = useDeviceList({ immediately: false });

  return (
    <div>
      <button onClick={() => devices.trigger()}>Load devices</button>
      <select>
        {devices.videoInputs.map((device) => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label || "Camera"}
          </option>
        ))}
      </select>
    </div>
  );
};
```

`constraints`:

```tsx
const devices = useDeviceList({ constraints: { video: true, audio: true } });
```

`callback`:

```tsx
const devices = useDeviceList((items) => console.log(items.length));
```

`immediately`:

```tsx
const devices = useDeviceList({ immediately: false });
```

`onUpdate`:

```tsx
const devices = useDeviceList({
  onUpdate: (items) => console.log(items.length),
});
```

## Notes

- Hook uses the [mediaDevices.enumerateDevices API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices).

## Type Declarations

```ts
export type UseDeviceListCallback = (devices: MediaDeviceInfo[]) => void;
export interface UseDeviceListOptions {
  constraints?: MediaStreamConstraints;
  immediately?: boolean;
  onUpdate?: UseDeviceListCallback;
}
export interface UseDeviceListReturn {
  audioInputs: MediaDeviceInfo[];
  audioOutputs: MediaDeviceInfo[];
  devices: MediaDeviceInfo[];
  supported: boolean;
  videoInputs: MediaDeviceInfo[];
  trigger: () => Promise<MediaDeviceInfo[] | undefined>;
  update: () => Promise<MediaDeviceInfo[] | undefined>;
}
export interface UseDeviceList {
  (callback?: UseDeviceListCallback): UseDeviceListReturn;
  (options?: UseDeviceListOptions): UseDeviceListReturn;
}
export declare const useDeviceList: UseDeviceList;
```
