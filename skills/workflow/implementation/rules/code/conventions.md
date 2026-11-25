---
title: Prefer the smallest complete implementation
impact: MEDIUM
impactDescription: reduces unnecessary code without sacrificing correctness, security, or maintainability
tags: frontend, conventions, simplicity
---

# General Conventions

Read the task and trace the code it touches before editing. Identify affected callers, tests, fixtures, configuration, and exports, including behavior that could break. Keep the change scoped to the requested outcome, but complete every necessary part of that change.

Choose the smallest complete solution. First question whether new code is needed; then reuse an existing component, helper, service, or established pattern. Prefer the project's abstractions, standard library, native platform capabilities, and already-installed dependencies before introducing new code or dependencies. Respect existing architecture and conventions.

Implement confirmed requirements, not speculative variants. Avoid premature abstractions, wrappers, configuration, generic types, conversions, and extension points. Repetition alone does not justify extracting a helper. Prefer clear data flow and straightforward control flow over clever shortcuts; shorter code is only better when it remains understandable.

Fix problems at their source after checking affected callers. Before adding a fallback, guard, or branch, trace the value's producer and actual execution path; handle cases that can occur rather than those suggested only by a broader type. Preserve necessary validation and error handling when moving or simplifying code. Never sacrifice security, trust-boundary validation, data integrity, or accessibility for brevity.

Verify non-trivial behavior with the smallest meaningful test or check, following the project's testing conventions and the task's Definition of Done. Comment only on constraints or trade-offs that the code itself cannot explain; make known limitations explicit rather than hiding them behind extra infrastructure.
