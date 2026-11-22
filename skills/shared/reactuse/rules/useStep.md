---
name: useStep
category: State
usage: medium
---

# useStep

Creates a stepper with next/back helpers.

## Usage

```ts
import { useStep } from "@siberiacancode/reactuse";

const stepper = useStep(5);
```

## Example

```tsx
import { useStep } from "@siberiacancode/reactuse";

export const Stepper = () => {
  const stepper = useStep({ initial: 1, max: 3 });

  return (
    <div>
      Step {stepper.currentStep} / {stepper.counts}
      <button onClick={() => stepper.back()}>Back</button>
      <button onClick={() => stepper.next()}>Next</button>
    </div>
  );
};
```

`max`:

```tsx
const stepper = useStep(10);
```

`initial`:

```tsx
const stepper = useStep({ initial: 2, max: 5 });
```

## Type Declarations

```ts
export interface UseStepParams {
  initial: number;
  max: number;
}
export interface UseStepReturn {
  counts: number;
  currentStep: number;
  isFirst: boolean;
  isLast: boolean;
  back: () => void;
  next: () => void;
  reset: () => void;
  set: (value: number | "first" | "last") => void;
}
export declare const useStep: (params: number | UseStepParams) => UseStepReturn;
```
