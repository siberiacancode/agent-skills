---
title: Unit test standalone React components
impact: HIGH
impactDescription: guards a component's public DOM, state, interactions, and accessibility contracts
tags: testing, unit, react, components, accessibility, testids
---

# Unit test standalone React components

For a React component that can be tested independently. For a public family of components sharing state or context, use [unit-test-react-component-compound](./unit-test-react-component-compound.md).

> **First read [unit-test-conventions](./unit-test-conventions.md).** This rule adds only what is specific to standalone React components.

## Test order

- **Baseline contract** — verify the shared component contracts supported by the subject.
- **Default render** — assert the default public DOM and state.
- **SSR** — verify the server result when the component is expected to be server-safe.
- **Props and variants** — cover meaningful visual and behavioral inputs.
- **State** — cover each state the component exposes.
- **Interaction** — cover callbacks and user-driven transitions.
- **Accessibility** — check states or structures that materially change the accessible contract.

## Baseline contract

Cover only baseline contracts the component supports, such as its element, slot, root styling, prop forwarding, polymorphism, server rendering, or accessibility. Do not require capabilities that are absent from the public API.

## Locators and assertions

- Give each component under test an explicit `data-testid` stored in a named module-level constant.
- Select it consistently through the project's test-ID query; use the non-throwing query when asserting absence.
- Use a named test-ID function for repeated items instead of constructing IDs inside tests.
- Treat the test ID only as a locator. Assert the component's public element, attributes, classes, content, accessibility state, and interactions.
- Do not select the same component through a mixture of test IDs, text, roles, CSS selectors, and container queries.

## Props, interactions, and accessibility

- Assert positive and negative interaction behavior only when both are part of the component contract.
- Add focused accessibility checks when a prop or state changes markup, roles, names, relationships, or interactive behavior beyond the baseline.
