---
name: useMask
category: State
usage: medium
---

# useMask

Keeps the DOM input value, raw value, display mask, cursor behavior, and validation callbacks aligned for masked text fields.

## Usage

```ts
import { useMask } from "@siberiacancode/reactuse";

const phone = useMask("+9 (999) 999-99-99");
```

## Example

```tsx
import { useMask } from "@siberiacancode/reactuse";

export const PhoneField = () => {
  const phone = useMask("+9 (999) 999-99-99", {
    showMask: "focus",
  });

  return (
    <label>
      Phone
      <input {...phone.register()} />
      <span>{phone.watch().rawValue}</span>
    </label>
  );
};
```

`tokens`:

```tsx
const serial = useMask("AA-999", { tokens: { A: /[A-Z]/ } });
```

`autoClear`:

```tsx
const phone = useMask("+9 (999) 999-99-99", { autoClear: true });
```

`beforeMaskedChange`:

```tsx
const phone = useMask("+9 (999) 999-99-99", {
  beforeMaskedChange: ({ nextState }) => nextState,
});
```

`initialValue`:

```tsx
const phone = useMask("+9 (999) 999-99-99", { initialValue: "79990000000" });
```

`mask` as array:

```tsx
const code = useMask(["#", /\d/, /\d/, "-", /\d/]);
```

`modify`:

```tsx
const card = useMask("9999 9999 9999 9999", {
  modify: (value) => (value.startsWith("34") ? { mask: "9999 999999 99999" } : {}),
});
```

`onChangeRaw`:

```tsx
const phone = useMask("+9 (999) 999-99-99", {
  onChangeRaw: (rawValue) => console.log(rawValue),
});
```

`onFilled`:

```tsx
const phone = useMask("+9 (999) 999-99-99", {
  onFilled: (maskedValue) => console.log(maskedValue),
});
```

`showMask`:

```tsx
const phone = useMask("+9 (999) 999-99-99", { showMask: "focus" });
```

`slot`:

```tsx
const date = useMask("99/99/9999", { slot: "_" });
```

`transform`:

```tsx
const serial = useMask("AA-999", {
  transform: (char) => char.toUpperCase(),
});
```

`register(params)`:

```tsx
<input {...phone.register({ onBlur: () => console.log(phone.getValue()) })} />;
```

`getValue(type)`:

```tsx
const raw = phone.getValue();
const masked = phone.getValue("masked");
const display = phone.getValue("display");
```

`sanitize(value, options)`:

```tsx
import { sanitize } from "@siberiacancode/reactuse";

const raw = sanitize("+7 (999) 123-45-67", {
  mask: "+9 (999) 999-99-99",
});
```

## Notes

- Default tokens: `9` digit, `a` letter, `A` uppercase letter, `*` alphanumeric, `#` signed digit.
- By default the hook stores the input value in refs and does not re-render on every edit. To render live masked state in JSX, subscribe via `watch()`: call it once per render, for example `const value = mask.watch()`, then the component will re-render when the masked value changes. Use `getValue()` for one-off reads.

## Type Declarations

```ts
import type {
  ChangeEventHandler,
  ClipboardEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from "react";

export type UseMaskPattern = string | Array<string | RegExp>;
export type UseMaskShow = "always" | "filled" | "focus" | "never";
export type UseMaskGetValueType = "display" | "masked" | "raw";
export interface UseMaskOptions {
  autoClear?: boolean;
  initialValue?: string;
  mask: UseMaskPattern;
  showMask?: UseMaskShow;
  slot?: string;
  tokens?: Record<string, RegExp>;
  beforeMaskedChange?: (states: {
    previousState: MaskState;
    currentState: MaskState;
    nextState: MaskState;
  }) => MaskState;
  modify?: (
    value: string
  ) => Partial<Pick<UseMaskOptions, "mask" | "showMask" | "slot" | "tokens">>;
  onChangeRaw?: (rawValue: string, maskedValue: string) => void;
  onFilled?: (maskedValue: string, rawValue: string) => void;
  transform?: (char: string) => string;
}
export interface MaskState {
  selection: { start: number; end: number } | null;
  value: string;
}
export interface UseMaskRegisterParams {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onMouseDown?: MouseEventHandler<HTMLInputElement>;
  onMouseUp?: MouseEventHandler<HTMLInputElement>;
  onPaste?: ClipboardEventHandler<HTMLInputElement>;
}
export interface UseMaskGetValueMap {
  display: string;
  masked: string;
  raw: string;
}
export interface UseMaskValue {
  displayValue: string;
  filled: boolean;
  maskedValue: string;
  rawValue: string;
  value: string;
}
export interface UseMaskReturn {
  ref: RefObject<HTMLInputElement | null>;
  getValue: <Type extends UseMaskGetValueType = "raw">(type?: Type) => UseMaskGetValueMap[Type];
  register: (params?: UseMaskRegisterParams) => {
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    onMouseDown?: MouseEventHandler<HTMLInputElement>;
    onMouseUp?: MouseEventHandler<HTMLInputElement>;
    onPaste?: ClipboardEventHandler<HTMLInputElement>;
    ref: (node: HTMLInputElement | null | undefined) => void;
  };
  reset: () => void;
  setValue: (value: string) => void;
  watch: () => UseMaskValue;
}
export type UseMaskReturnValue = UseMaskReturn;
export declare const sanitize: (value: string, options: UseMaskOptions) => string;
export declare const formatMask: (rawValue: string, options: UseMaskOptions) => string;
export declare const unformatMask: (maskedValue: string, options: UseMaskOptions) => string;
export declare const isMaskComplete: (maskedValue: string, options: UseMaskOptions) => boolean;
export declare const generatePattern: (
  mode: "full-inexact" | "full",
  options: UseMaskOptions
) => string;
export declare const useMask: (
  mask: UseMaskPattern,
  options?: Omit<UseMaskOptions, "mask">
) => UseMaskReturn;
```
