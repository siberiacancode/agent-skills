---
name: juniors-best-practice
description: "React and TypeScript best practices for junior developers. Activate when performing code review, linting, refactoring, writing new components, or enforcing consistent patterns for hooks, props, CSS class handling, import sorting, and commit conventions. Apply early-return guards, const-by-default variables, nullish coalescing for safe defaults, and component composition patterns across React, TypeScript, styling, devtools, assets, REST, and Git scopes."
license: MIT
metadata:
  author: siberiacancode
  version: "1.0.0"
---

# Juniors Best Practice

Practical, scope-organized rules for writing clear, consistent React and TypeScript code. Use during code review, new feature development, refactoring, and onboarding.

## Rule Categories by Priority

| Priority | Category             | Impact     | Prefix        |
| -------- | -------------------- | ---------- | ------------- |
| 1        | Beginner Foundations | HIGH       | `beginner-`   |
| 2        | TypeScript           | MEDIUM     | `typescript-` |
| 3        | React                | MEDIUM     | `react-`      |
| 4        | Styling              | MEDIUM     | `styling-`    |
| 5        | Devtools             | MEDIUM     | `devtools-`   |
| 6        | Assets               | LOW-MEDIUM | `assets-`     |
| 7        | Git                  | LOW        | `git-`        |
| 8        | REST                 | MEDIUM     | `rest-`       |

## High-Priority Inline Examples

### Early Return (beginner-early-return)

Flatten nested conditionals with guard clauses:

```typescript
// Bad - deep nesting
const init = () => {
  const raw = localStorage.getItem("authToken");
  if (raw) {
    const token = JSON.parse(raw);
    if (token.user && token.user.id) {
      console.log(`success #${token.user.id}`);
    }
  }
};

// Good - early returns
const init = () => {
  const raw = localStorage.getItem("authToken");
  if (!raw) return;
  const token = JSON.parse(raw);
  if (!token.user || !token.user.id) return;
  console.log(`success #${token.user.id}`);
};
```

### Nullish Coalescing (beginner-nullish-vs-or)

Use `??` instead of `||` when `0`, `false`, or `""` are valid values:

```typescript
// Bad - || treats 0 and false as falsy
const port = config.port || 3000;    // config.port=0 -> 3000
const debug = config.debug || true;  // config.debug=false -> true

// Good - ?? only falls back on null/undefined
const port = config.port ?? 3000;    // config.port=0 -> 0
const debug = config.debug ?? true;  // config.debug=false -> false
```

### Const by Default (beginner-const-vs-let)

Always start with `const`. Switch to `let` only when the variable is reassigned:

```typescript
const apiUrl = "/api";
const options = { timeout: 5000 }; // object reference is constant

for (let i = 0; i < users.length; i++) { /* ... */ }
```

## Code Review Workflow

When reviewing or writing React/TypeScript code, follow this checklist:

1. **Guard clauses first** - Replace nested `if` blocks with early returns
2. **Variable declarations** - Ensure `const` by default; `let` only for mutation
3. **Safe defaults** - Use `??` over `||` when falsy values are intentional
4. **Component patterns** - Use `children` for composition; extend native element props
5. **Styling** - Use `clsx` for conditional classes; prefer CSS selectors for states
6. **Imports and tooling** - Verify sorted imports, formatter/linter config, single lock file
7. **Naming and conventions** - Check commit format, UPPER_CASE only for stable constants

## Quick Reference

### 1. Beginner Foundations (HIGH)

- `beginner-early-return` - Prefer early returns to reduce nesting
- `beginner-double-negation` - Avoid `!isNotX` patterns; use positive names
- `beginner-unnecessary-destructuring` - Keep objects intact when destructuring adds noise
- `beginner-const-vs-let` - Default to `const`; `let` only for reassignment
- `beginner-nullish-vs-or` - Use `??` for defaults when `0`/`false`/`""` are valid
- `beginner-useless-return-arrow` - Remove redundant `return` in arrow functions
- `beginner-uppercase-constants` - Use UPPER_CASE only for stable app-level constants

### 2. TypeScript (MEDIUM)

- `typescript-alias-naming` - Use safe path alias prefixes to avoid package collisions
- `typescript-flat-translations` - Prefer flat translation keys to reduce nesting and duplication

### 3. React (MEDIUM)

- `react-string-props` - Use string literals directly without expression wrappers
- `react-children-prop` - Use `children` for flexible component composition
- `react-extends-component` - Extend native element props for scalable components
- `react-props-typing` - Keep prop type definitions co-located and readable

### 4. Styling (MEDIUM)

- `styling-classnames-function` - Use `clsx` for conditional class name logic
- `styling-css-states` - Prefer CSS selectors (`:hover`, `:disabled`, `:focus`) over JS state

### 5. Devtools (MEDIUM)

- `devtools-formatter-linter` - Configure formatter and linter for consistent output
- `devtools-sorting-imports` - Keep imports ordered and grouped by scope
- `devtools-package-manager-lock` - Use a single package manager with one lock file

### 6. Assets (LOW-MEDIUM)

- `assets-svg-files` - Import SVGs as React components for scalable, themeable icons

### 7. Git (LOW)

- `git-commit-convention` - Follow consistent commit message conventions (e.g., Conventional Commits)

### 8. REST (MEDIUM)

- `rest-scalability-abstractions` - Separate transport logic from endpoint definitions for reusable API clients
- `rest-naming-openapi` - Align REST naming with OpenAPI `operationId` and schema names

## Detailed Rules

Each rule file in `rules/` contains a full explanation, incorrect and correct code examples, and additional context. For the complete compiled guide with all rules expanded, see `AGENTS.md`.
