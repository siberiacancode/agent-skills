---
title: Destructuring
impact: MEDIUM
impactDescription: keeps data access explicit and avoids unnecessary local aliases
tags: frontend, conventions, destructuring, TypeScript
---

# Destructuring

Do not use object destructuring in application code. Access values through the original object instead.

Exceptions:

- Destructuring component props is allowed.
- Destructure a custom hook's grouped return contract in a component, as described in the [hooks rule](implementation-code-hooks.md).
- Array destructuring is allowed when accessing positional values from an array is clearer than indexed access.
