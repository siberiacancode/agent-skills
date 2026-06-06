---
name: useGeolocation
category: Browser
usage: medium
---

# useGeolocation

Returns the current geolocation and updates on changes.

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
  const geolocation = useGeolocation();

  if (geolocation.loading) return <p>Locating...</p>;
  if (geolocation.error) return <p>Permission denied</p>;

  return (
    <p>
      {geolocation.latitude}, {geolocation.longitude}
    </p>
  );
};
```

`enableHighAccuracy`:

```tsx
const geolocation = useGeolocation({ enableHighAccuracy: true });
```

`maximumAge`:

```tsx
const geolocation = useGeolocation({ maximumAge: 60000 });
```

`timeout`:

```tsx
const geolocation = useGeolocation({ timeout: 5000 });
```

`onChange`, `onError`:

```tsx
const geolocation = useGeolocation({
  onChange: (position) => console.log(position.coords.longitude),
  onError: (error) => console.error(error.message),
});
```

## Notes

- Hook uses the [navigator.geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation).

## Type Declarations

```ts
export interface UseGeolocationReturn {
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
export type UseGeolocationCallback = (
  position: GeolocationPosition
) => void;
export interface UseGeolocationOptions extends PositionOptions {
  onChange?: UseGeolocationCallback;
  onError?: (error: GeolocationPositionError) => void;
}
export interface UseGeolocation {
  (
    callback?: UseGeolocationCallback,
    options?: PositionOptions
  ): UseGeolocationReturn;
  (options?: UseGeolocationOptions): UseGeolocationReturn;
}
export declare const useGeolocation: UseGeolocation;
```
