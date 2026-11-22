---
name: useBluetooth
category: Browser
usage: low
---

# useBluetooth

Requests and connects to Bluetooth devices.

## Usage

```ts
import { useBluetooth } from "@siberiacancode/reactuse";

const bluetooth = useBluetooth();
```

## Example

```tsx
import { useBluetooth } from "@siberiacancode/reactuse";

export const BluetoothStatus = () => {
  const bluetooth = useBluetooth({ acceptAllDevices: true });

  if (!bluetooth.supported) return <p>Not supported</p>;

  return (
    <div>
      <button onClick={() => bluetooth.requestDevice()}>Request device</button>
      <p>Connected: {String(bluetooth.connected)}</p>
    </div>
  );
};
```

`acceptAllDevices`:

Show all nearby devices in the chooser.

```tsx
const bluetooth = useBluetooth({ acceptAllDevices: true });
```

`filters`:

Filter devices by name/service.

```tsx
const bluetooth = useBluetooth({
  filters: [{ namePrefix: "Device" }],
});
```

`optionalServices`:

Request additional GATT services.

```tsx
const bluetooth = useBluetooth({
  optionalServices: ["battery_service"],
});
```

Battery level example:

This sample illustrates the use of the Web Bluetooth API to read battery level and be notified of changes from a nearby Bluetooth Device advertising Battery information with Bluetooth Low Energy.

Here, we use the characteristicvaluechanged event listener to handle reading battery level characteristic value. This event listener will optionally handle upcoming notifications as well.

```tsx
import { useBluetooth } from "@siberiacancode/reactuse";
import { useEffect, useRef, useState } from "react";

export const BatteryMonitor = () => {
  const bluetooth = useBluetooth({
    acceptAllDevices: true,
    optionalServices: ["battery_service"],
  });

  const [battery, setBattery] = useState<number | undefined>();
  const characteristicRef = useRef<BluetoothRemoteGATTCharacteristic>();

  useEffect(() => {
    const server = bluetooth.server;
    if (!server) return;

    const onChange = (event: Event) => {
      const characteristic = event.target as BluetoothRemoteGATTCharacteristic;
      const value = characteristic.value?.getUint8(0);
      if (value != null) setBattery(value);
    };

    const connect = async () => {
      const service = await server.getPrimaryService("battery_service");
      const characteristic = await service.getCharacteristic("battery_level");

      characteristicRef.current = characteristic;

      characteristic.addEventListener("characteristicvaluechanged", onChange);
      await characteristic.startNotifications();

      const initial = await characteristic.readValue();
      setBattery(initial.getUint8(0));
    };

    connect();

    return () => {
      const characteristic = characteristicRef.current;
      if (!characteristic) return;

      characteristic.removeEventListener(
        "characteristicvaluechanged",
        onChange
      );
      characteristic.stopNotifications();
      characteristicRef.current = null;
    };
  }, [bluetooth.server]);

  return (
    <div>
      <button onClick={() => bluetooth.requestDevice()}>Request device</button>

      <p>Connected: {String(bluetooth.connected)}</p>
      <p>Battery: {battery != null ? `${battery}%` : "—"}</p>
    </div>
  );
};
```

## Notes

- Hook uses the [navigator.bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/bluetooth).

## Type Declarations

```ts
export interface UseBluetoothReturn {
  connected: boolean;
  device?: BluetoothDevice;
  server?: BluetoothRemoteGATTServer;
  supported: boolean;
  requestDevice: () => Promise<void>;
}
export interface UseBluetoothOptions {
  acceptAllDevices?: boolean;
  filters?: BluetoothLEScanFilter[];
  optionalServices?: BluetoothServiceUUID[];
}
export declare const useBluetooth: (
  options?: UseBluetoothOptions
) => UseBluetoothReturn;
```
