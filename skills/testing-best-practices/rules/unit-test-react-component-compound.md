---
title: Unit test compound React components
impact: HIGH
impactDescription: guards every public part and the state, context, composition, and behavior connecting them
tags: testing, unit, react, components, compound, context, accessibility, testids
---

# Unit test compound React components

For a public family of components whose parts are connected by shared state, behavior, context, or a required composition contract.

If the parts are independent and their composition does not change their behavior, test each part as a standalone component and add only the composition check that is part of the public contract.

> **First read [unit-test-conventions](./unit-test-conventions.md) and [unit-test-react-component-standalone](./unit-test-react-component-standalone.md).** This rule adds only compound structure and relationships.

## Structure

- Give each independently addressable public part its own `describe` and keep parts in a stable order. A conditional, portal-only, or root part may instead be covered in the state or composition group that exposes its contract.
- Give every queried part its own module-level test-ID constant; use a named function for repeated parts.

## Test order

- **Part contracts** — cover each public part's supported baseline DOM, props, state, and interactions.
- **SSR** — verify the server result when the composed component is expected to be server-safe.
- **Context inheritance** — verify values or behavior a part receives from its parent or root.
- **Explicit overrides** — verify the documented priority of a part's own props over inherited values.
- **Cross-part behavior** — verify observable effects that actions or state in one part have on another.
- **Composition** — verify the complete component tree and accessibility contracts that exist only when parts are combined.

## Relationships

- Render parts together when testing shared context or behavior; isolated part tests cannot prove their wiring.
- Derive inheritance, propagation, and override cases from the implementation and public API rather than assuming every compound component has them.
- Use one canonical composition for each relationship. Do not multiply every part, prop, and variant when the relationship is unchanged.
- Add accessibility checks for the composed tree and for variants that materially change its structure or accessible behavior.
