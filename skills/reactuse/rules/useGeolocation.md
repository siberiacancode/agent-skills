---
name: useGeolocation
category: Browser
usage: medium
---

# useGeolocation

Keeps the latest browser geolocation reading in React state and exposes controls for one-off reads and watch mode.

## Usage

```ts
import { useGeolocation } from "@siberiacancode/reactuse";

const geolocation = useGeolocation();
```

`callback`:

```tsx
const geolocation = useGeolocation((position) => {
  console.log(position.coords.latitude);
});
```

## Example

```tsx
import { useGeolocation } from "@siberiacancode/reactuse";

export const Location = () => {
  const geolocation = useGeolocation({ immediately: false });
  const { value } = geolocation;

  if (value.loading) return <p>Locating...</p>;
  if (value.error) return <p>Permission denied</p>;

  return (
    <div>
      <button onClick={geolocation.start}>Start</button>
      <button onClick={geolocation.stop}>Stop</button>
      <p>
        {value.latitude}, {value.longitude}
      </p>
    </div>
  );
};
```

`get`:

```tsx
const geolocation = useGeolocation({ immediately: false });
geolocation.get();
```

`immediately`:

```tsx
const geolocation = useGeolocation({ immediately: false });
```

`enableHighAccuracy`:

```tsx
const geolocation = useGeolocation({ enableHighAccuracy: true });
```

`maximumAge`:

```tsx
const geolocation = useGeolocation({ maximumAge: 10000 });
```

`timeout`:

```tsx
const geolocation = useGeolocation({ timeout: 5000 });
```

`onChange`:

```tsx
const geolocation = useGeolocation({
  onChange: (position) => console.log(position.coords.latitude),
});
```

`onError`:

```tsx
const geolocation = useGeolocation({
  onError: (error) => console.error(error.message),
});
```

## Notes

- Hook uses the [navigator.geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation).

## Type Declarations

```ts
export interface UseGeolocationValue {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  error: GeolocationPositionError | null;
  heading: number | null;
  latitude: number | null;
  loading: boolean;
  longitude: number | null;
  speed: number | null;
  timestamp: number | null;
}
export interface UseGeolocationReturn {
  value: UseGeolocationValue;
  watching: boolean;
  get: () => void;
  start: () => void;
  stop: () => void;
}
export type UseGeolocationCallback = (position: GeolocationPosition) => void;
export interface UseGeolocationOptions extends PositionOptions {
  immediately?: boolean;
  onChange?: UseGeolocationCallback;
  onError?: (error: GeolocationPositionError) => void;
}
export interface UseGeolocation {
  (
    callback?: UseGeolocationCallback,
    options?: PositionOptions & { immediately?: boolean }
  ): UseGeolocationReturn;
  (options?: UseGeolocationOptions): UseGeolocationReturn;
}
export declare const useGeolocation: UseGeolocation;
```
