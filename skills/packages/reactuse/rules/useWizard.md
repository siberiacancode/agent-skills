---
name: useWizard
category: State
usage: medium
---

# useWizard

Manages wizard steps and history.

## Usage

```ts
import { useWizard } from "@siberiacancode/reactuse";

const wizard = useWizard([
  { id: "step1", nodes: ["step2"] },
  { id: "step2", nodes: [] },
]);
```

## Example

```tsx
import { useWizard } from "@siberiacancode/reactuse";

export const Checkout = () => {
  const wizard = useWizard([
    { id: "shipping", nodes: ["payment"] },
    { id: "payment", nodes: ["review"] },
    { id: "review", nodes: [] },
  ]);

  return (
    <div>
      Step: {wizard.currentStepId}
      <button onClick={() => wizard.back()}>Back</button>
      <button onClick={() => wizard.set("review")}>Skip</button>
    </div>
  );
};
```

`map`:

```tsx
const wizard = useWizard([
  { id: "step1", nodes: ["step2", "step3"] },
  { id: "step2", nodes: ["step3"] },
  { id: "step3", nodes: [] },
]);
```

`initialStepId`:

```tsx
const wizard = useWizard(
  [
    { id: "step1", nodes: ["step2"] },
    { id: "step2", nodes: [] },
  ],
  "step2"
);
```

## Type Declarations

```ts
export interface WizardItem<WizardStepId> {
  id: WizardStepId;
  nodes?: WizardStepId[];
}
export declare const useWizard: <WizardStepId extends string>(
  map: WizardItem<WizardStepId>[],
  initialStepId?: WizardStepId
) => {
  currentStepId: WizardStepId;
  set: (id: WizardStepId) => void;
  reset: () => void;
  back: () => void;
  history: WizardStepId[];
};
```
