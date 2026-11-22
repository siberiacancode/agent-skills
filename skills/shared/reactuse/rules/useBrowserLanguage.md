---
name: useBrowserLanguage
category: User
usage: medium
---

# useBrowserLanguage

Returns the current browser language.

## Usage

```ts
import { useBrowserLanguage } from "@siberiacancode/reactuse";

const language = useBrowserLanguage();
```

## Example

```tsx
const language = useBrowserLanguage();
return <span>Locale: {language}</span>;
```

## Notes

- Hook uses the [navigator.language API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language).

## Type Declarations

```ts
export declare const useBrowserLanguage: () => string;
```
