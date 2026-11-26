---
title: Prefer the smallest clear implementation
impact: MEDIUM
impactDescription: makes features easier to change without speculative abstractions and incidental complexity
tags: frontend, conventions, simplicity
---

# General Conventions

Implement the requirement and established project conventions, not anticipated variants, options, layers, dependencies, configuration, or extension points. Add flexibility when a real second use case requires it.

The scope of a change is the requested behavior, not the set of files you touch. If the new code needs a rule that already exists in the codebase, reuse that rule instead of copying it, even when that means changing the existing code that owns it.

Repetition in your own new code is not a reason to extract a helper.

Before adding a check, fallback, or branch for a missing or invalid value, trace where the value is produced and when this code runs (its callers, route, or render condition). Handle the case only if you can name a realistic scenario on that path in which it occurs. When a type is broader than that path guarantees, rely on the path instead of guarding.

Prefer straightforward data flow and ordinary control flow. Avoid clever generic types, indirection, and implicit side effects when a clear explicit implementation works.
