---
title: Unit test compound UI components
impact: HIGH
impactDescription: guards every public part and the state, context, and behavior connecting them
tags: testing, unit, react, components, compound, context, accessibility, testids
---

# Unit test compound UI components

For a public family of components that compose together and share state, behavior, or context.

> **First read [unit-test-conventions](./unit-test-conventions.md) and [unit-test-ui-component-standalone](./unit-test-ui-component-standalone.md).** This rule adds only compound structure and relationships.

**Related tests** — inspect tests for compound components with similar composition or context behavior to reuse project helpers, part ordering, test-ID conventions, render setup, assertions, and scenario count. Follow the closest pattern while testing only the parts and relationships exposed by the current component.

For application integration-test locators, use [integration-locator-testids](./integration-locator-testids.md). Keep UI-kit unit-test IDs local to the component suite.

## Structure

- Give each public part its own `describe` and keep parts in a stable order.
- Test each part's independent public contract before testing relationships between parts.
- Give every queried part its own module-level test-ID constant; use a named function for repeated parts.

## Test order

- **Part contracts** — cover each public part's supported baseline DOM, props, state, and interactions.
- **Context inheritance** — verify values or behavior a part receives from its parent or root.
- **Explicit overrides** — verify the documented priority of a part's own props over inherited values.
- **Cross-part behavior** — verify observable effects that actions or state in one part have on another.
- **Composition** — verify the complete component tree and accessibility contracts that exist only when parts are combined.

## Relationships

- Render parts together when testing shared context or behavior; isolated part tests cannot prove their wiring.
- Derive inheritance, propagation, and override cases from the implementation and public API rather than assuming every compound component has them.
- Use one canonical composition for each relationship. Do not multiply every part, prop, and variant when the relationship is unchanged.
- Add accessibility checks for the composed tree and for variants that materially change its structure or accessible behavior.
