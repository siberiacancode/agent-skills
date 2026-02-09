---
name: useBattery
category: Browser
usage: low
---

# useBattery

Returns battery status and support state.

## Usage

```ts
import { useBattery } from "@siberiacancode/reactuse";

const battery = useBattery();
```

## Example

```tsx
import { useBattery } from "@siberiacancode/reactuse";

export const BatteryStatus = () => {
  const battery = useBattery();
  if (!battery.supported) return <div>Not supported</div>;

  return (
    <div>
      Level: {Math.round(battery.value.level * 100)}%{" "}
      {battery.value.charging ? "(charging)" : ""}
    </div>
  );
};
```

## Use cases

Our applications normally are not empathetic to battery level, we can make a few adjustments to our applications that will be more friendly to low battery users.

- Trigger a special "dark-mode" battery saver theme settings.
- Stop auto playing videos in news feeds.
- Disable some background workers that are not critical.
- Limit network calls and reduce CPU/Memory consumption.

## Notes

- Hook uses the [navigator.getBattery API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery).

## Type Declarations

```ts
export interface UseBatteryValue {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  loading: boolean;
}
export interface UseBatteryStateReturn {
  supported: boolean;
  value: UseBatteryValue;
}
export declare const useBattery: () => UseBatteryStateReturn;
```
