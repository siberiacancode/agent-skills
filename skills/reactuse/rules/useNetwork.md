---
name: useNetwork
category: Browser
usage: low
---

# useNetwork

Tracks online status and connection information.

## Usage

```ts
import { useNetwork } from "@siberiacancode/reactuse";

const network = useNetwork();
```

## Example

```tsx
import { useNetwork } from "@siberiacancode/reactuse";

export const NetworkInfo = () => {
  const network = useNetwork();
  return (
    <div>
      {network.online ? "Online" : "Offline"}
      {network.online && (
        <div>
          Type: {network.type ?? "unknown"} ({network.effectiveType ?? "n/a"})
        </div>
      )}
    </div>
  );
};
```

## Notes

- Hook uses the [navigator.connection API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection).

## Type Declarations

```ts
export interface UseNetworkReturn {
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: "2g" | "3g" | "4g" | "slow-2g";
  online: boolean;
  rtt?: number;
  saveData?: boolean;
  type?:
    | "bluetooth"
    | "cellular"
    | "ethernet"
    | "mixed"
    | "none"
    | "other"
    | "unknown"
    | "wifi"
    | "wimax";
}
export declare const useNetwork: () => UseNetworkReturn;
```
