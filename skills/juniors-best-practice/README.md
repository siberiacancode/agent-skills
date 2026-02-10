# Juniors Best Practice

A juniors-focused set of React and TypeScript best practices, organized by scope (JS, React, styling, devtools, and more). Each guide is short, practical, and optimized for agents and LLMs.

## Structure

- `rules/` - Individual rule files (one per guide)
  - `_sections.md` - Section metadata (titles, impacts, descriptions)
  - `_template.md` - Template for creating new rules (AI frontmatter)
  - `scope-description.md` - Individual rule files
- `metadata.json` - Document metadata (version, organization, abstract)
- **`AGENTS.md`** - Compiled overview (generated)

## Creating a New Rule

1. Copy `rules/_template.md` to `rules/scope-description.md`
2. Choose the appropriate scope prefix:
   - `beginner-` for Beginner Foundations
   - `typescript-` for TypeScript
   - `react-` for React
   - `styling-` for Styling
   - `devtools-` for Devtools
   - `assets-` for Assets
   - `git-` for Git
3. Fill in the AI frontmatter and the guide content
4. Include concise examples where they help understanding

## Rule File Structure

Each rule file should follow this structure:

````markdown
---
title: Rule Title Here
impact: MEDIUM
tags: tag1, tag2
---

# Rule Title Here

Brief explanation of the rule and why it matters.

**Incorrect (description of what's wrong):**

```typescript
// Bad code example here
```

**Correct (description of what's right):**

```typescript
// Good code example here
```

Reference: [Link to documentation or resource](https://example.com)
````

## File Naming Convention

- Files starting with `_` are special (excluded from build)
- Rule files: `scope-description.md` (e.g., `beginner-nullish-vs-or.md`)
- Section is inferred from filename prefix
- Rules are sorted alphabetically by title within each section

## Impact Levels

- `HIGH` - Foundational habits and core principles
- `MEDIUM` - Practical improvements for everyday work
- `LOW-MEDIUM` - Useful but more situational
- `LOW` - Team-level conventions

## Contributing

When adding or modifying rules:

1. Use the correct filename prefix for your section
2. Follow the `_template.md` structure
3. Keep the title action-oriented and easy to scan
4. Run `pnpm build` to regenerate AGENTS.md

## Acknowledgments

Inspired by public React and TypeScript best practices and community guidelines.
