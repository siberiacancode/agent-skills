# React Hooks Best Practices

Best practices for using hooks in React applications and designing custom hooks across DX, optimization, and logic. Use this skill for component hook usage, custom hook design, hook API review, and hook correctness/performance checks.

## Structure

- `rules/` - Individual guide files
  - `_sections.md` - Section metadata
  - `_template.md` - Template for new rules
  - `scope-description.md` - Individual rule files
- `metadata.json` - Document metadata
- `AGENTS.md` - Compiled overview

## Creating a New Rule

1. Copy `rules/_template.md` to `rules/scope-description.md`
2. Choose the appropriate scope prefix:
   - `dx-` for hook API ergonomics, naming, typing, and composability
   - `optimization-` for render boundaries, subscriptions, hot paths, and cleanup/performance tradeoffs
   - `logic-` for correctness, lifecycle, SSR, stale closures, and edge cases
3. Fill in the frontmatter and guide content
4. Include concise examples where they clarify the hook behavior

## File Naming Convention

- Files starting with `_` are special metadata files
- Rule files use `scope-description.md`
- Section is inferred from the filename prefix

## Impact Levels

- `HIGH` - Prevents broad unnecessary re-renders or defines a core hook API pattern
- `MEDIUM` - Useful for everyday hook ergonomics and correctness
- `LOW` - Situational conventions
