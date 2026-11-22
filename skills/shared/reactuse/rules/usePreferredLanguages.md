---
name: usePreferredLanguages
category: User
usage: medium
---

# usePreferredLanguages

Returns the user's preferred languages.

## Usage

```ts
import { usePreferredLanguages } from "@siberiacancode/reactuse";

const languages = usePreferredLanguages();
```

## Example

```tsx
const languages = usePreferredLanguages();
return <div>Languages: {languages.join(", ")}</div>;
```

## Notes

- Hook uses the [navigator.languages API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages).

## Type Declarations

```ts
export declare const usePreferredLanguages: () => readonly string[];
```
