---
name: useTime
category: Time
usage: medium
---

# useTime

Provides the current time split into multiple fields.

## Usage

```ts
import { useTime } from "@siberiacancode/reactuse";

const time = useTime();
```

## Example

```tsx
import { useTime } from "@siberiacancode/reactuse";

export const Clock = () => {
  const time = useTime();
  return (
    <div>
      {String(time.hours).padStart(2, "0")}:
      {String(time.minutes).padStart(2, "0")}:
      {String(time.seconds).padStart(2, "0")}
    </div>
  );
};
```

## Type Declarations

```ts
export interface UseTimeReturn {
  day: number;
  hours: number;
  meridiemHours: { value: number; type: string };
  minutes: number;
  month: number;
  seconds: number;
  timestamp: number;
  year: number;
}
export declare const useTime: () => UseTimeReturn;
```
