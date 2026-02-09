---
name: useOtpCredential
category: Browser
usage: low
---

# useOtpCredential

Requests an OTP credential from the user agent.

## Usage

```ts
import { useOtpCredential } from "@siberiacancode/reactuse";

const otp = useOtpCredential();
```

## Example

```tsx
const otp = useOtpCredential();

return (
  <button onClick={() => otp.get()}>
    {otp.supported ? "Read SMS code" : "Not supported"}
  </button>
);
```

`onSuccess`:

```tsx
const otp = useOtpCredential({
  onSuccess: (credential) => console.log(credential),
});
```

`onError`:

```tsx
const otp = useOtpCredential({
  onError: (error) => console.error(error),
});
```

## Notes

- Hook uses the [navigator.credentials API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials).

## Type Declarations

```ts
export type UseOtpCredentialCallback = (otp: Credential | null) => void;
export interface UseOtpCredentialParams {
  onError?: (error: any) => void;
  onSuccess?: (credential: Credential | null) => void;
}
export interface UseOtpCredentialReturn {
  abort: AbortController["abort"];
  supported: boolean;
  get: () => Promise<Credential | null>;
}
export interface UseOtpCredential {
  (callback?: UseOtpCredentialCallback): UseOtpCredentialReturn;
  (params?: UseOtpCredentialParams): UseOtpCredentialReturn;
}
export declare const useOtpCredential: UseOtpCredential;
```
