---
name: implementation
description: Implement an approved task in an existing frontend codebase, satisfy applicable testing requirements, and review the resulting changes.
disable-model-invocation: true
---

# Implementation

> Before starting, locate, read, and apply these skills:
> - `language`
> - `testing`
> - `documentation`
> - Relevant `practices` and `packages` skills when applicable

## Process

### 1. Gather context

Read the selected `.ai/features/NN-feature-name/tasks/N.md`, its feature specification, relevant documentation, approved test cases, and existing code. For a direct request, use the supplied requirements as the task. Inspect repository instructions, the working tree, dependencies, nearby tests, and analogous implementations before editing. Preserve unrelated changes and approved architectural decisions. If a material decision is still unresolved, surface it rather than guessing.

### 2. Implement

Implement the agreed technical concept as a complete, observable slice, not a file-by-file interpretation of the ticket. Read and apply the relevant code rules before editing:

- [Architecture](rules/code/implementation-code-architecture.md) and [general conventions](rules/code/conventions.md) for all code work.
- [Naming](rules/code/implementation-code-naming.md), [destructuring](rules/code/implementation-code-destructuring.md), and [types](rules/code/implementation-code-types.md) when touching their respective concerns.
- [Components](rules/code/implementation-code-components.md) for React components and [hooks](rules/code/implementation-code-hooks.md) for feature logic or hooks.
- [Forms](rules/code/implementation-code-forms.md) for form behavior, [state management](rules/code/implementation-code-state-management.md) for state ownership, and [mocks](rules/code/implementation-code-mock.md) for mock API behavior.

Follow established repository conventions and relevant package-specific rules without introducing unrelated refactors, speculative abstractions, or unnecessary files. Keep generated code under its existing owner.

### 3. Verify

Use the existing `testing` rules for applicable unit tests, integration tests, and repository test cases; do not duplicate their conventions here. Implement or update verification required by the ticket, agreed test cases, and the project's Definition of Done. Use `@siberiacancode/autotest` for repository test-case types and helpers as prescribed by those rules. Run relevant checks, report actual results, and distinguish blocked or unexecuted checks from passing ones.

### 4. Review and finish

Invoke `code-review` on the completed diff, preferably in an independent subagent when available. Fix confirmed findings and rerun affected checks, with at most two review-and-fix iterations. If independent review is unavailable, perform an evidence-based self-review and state that limitation. Summarize implemented behavior, verification, remaining risks, and blockers without claiming checks that were not run.
