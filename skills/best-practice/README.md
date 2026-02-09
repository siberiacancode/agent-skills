# Best Practice Rules

A curated set of React and TypeScript best practices, tailored to SiberiaCanCode projects and optimized for agents and LLMs.

## Structure

- `rules/` - Individual rule files (one per rule)
  - `_sections.md` - Section metadata (titles, impacts, descriptions)
  - `_template.md` - Template for creating new rules
  - `area-description.md` - Individual rule files
- `metadata.json` - Document metadata (version, organization, abstract)

## Creating a New Rule

1. Copy `rules/_template.md` to `rules/area-description.md`
2. Choose the appropriate area prefix:
   - `beginner-` for Beginner Foundations (Section 1)
   - `async-` for Eliminating Waterfalls (Section 2)
   - `bundle-` for Bundle Size Optimization (Section 3)
   - `server-` for Server-Side Performance (Section 4)
   - `client-` for Client-Side Data Fetching (Section 5)
   - `rerender-` for Re-render Optimization (Section 6)
   - `rendering-` for Rendering Performance (Section 7)
   - `js-` for JavaScript Performance (Section 8)
   - `advanced-` for Advanced Patterns (Section 9)
3. Fill in the content with a clear title and explanation
4. Include examples where they help understanding

## Rule File Structure

Each rule file should follow this structure:

````markdown
# Rule Title Here

Brief explanation of the rule and why it matters.

Optional examples with short explanations.
````

## File Naming Convention

- Files starting with `_` are special (excluded from build)
- Rule files: `area-description.md` (e.g., `beginner-early-return.md`)
- Section is automatically inferred from filename prefix
- Rules are sorted alphabetically by title within each section

## Impact Levels

- `CRITICAL` - Highest priority, major performance gains
- `HIGH` - Significant performance improvements
- `MEDIUM-HIGH` - Moderate-high gains
- `MEDIUM` - Moderate performance improvements
- `LOW-MEDIUM` - Low-medium gains
- `LOW` - Incremental improvements

## Contributing

When adding or modifying rules:

1. Use the correct filename prefix for your section
2. Follow the `_template.md` structure
3. Include clear examples with explanations
4. Keep titles short and action-oriented

## Acknowledgments

Inspired by public React performance guidance and community best practices.
# Best Practice Rules

A curated set of React and TypeScript best practices, tailored to SiberiaCanCode projects and optimized for agents and LLMs.

## Structure

- `rules/` - Individual rule files (one per rule)
  - `_sections.md` - Section metadata (titles, impacts, descriptions)
  - `_template.md` - Template for creating new rules
  - `area-description.md` - Individual rule files
- `metadata.json` - Document metadata (version, organization, abstract)

## Creating a New Rule

1. Copy `rules/_template.md` to `rules/area-description.md`
2. Choose the appropriate area prefix:
   - `beginner-` for Beginner Foundations (Section 1)
   - `react-` for React Components (Section 2)
   - `style-` for Styling and CSS (Section 3)
   - `tooling-` for Tooling and Workflow (Section 4)
   - `typescript-` for TypeScript and Config (Section 5)
   - `i18n-` for Internationalization (Section 6)
   - `assets-` for Assets and SVG (Section 7)
   - `git-` for Git and Collaboration (Section 8)
3. Fill in the content with a clear title and explanation
4. Include examples where they help understanding

## Rule File Structure

Each rule file should follow this structure:

````markdown
# Rule Title Here

Brief explanation of the rule and why it matters.

Optional examples with short explanations.
````

## File Naming Convention

- Files starting with `_` are special (excluded from build)
- Rule files: `area-description.md` (e.g., `beginner-early-return.md`)
- Section is automatically inferred from filename prefix
- Rules are sorted alphabetically by title within each section

## Impact Levels

- `HIGH` - Foundational or high-leverage guidance
- `MEDIUM` - Solid improvements to clarity and maintainability
- `LOW-MEDIUM` - Useful, but more situational
- `LOW` - Incremental improvements

## Contributing

When adding or modifying rules:

1. Use the correct filename prefix for your section
2. Follow the `_template.md` structure
3. Include clear examples with explanations
4. Keep titles short and action-oriented

## Acknowledgments

Inspired by public React and TypeScript best practices.
# Reactuse Best Practices

A structured repository for creating and maintaining React and Next.js best practices optimized for agents and LLMs, tailored to SiberiaCanCode projects.

## Context: Reactuse Library

Reactuse is a TypeScript-first hook library with SSR compatibility and tree-shaking optimization. It provides production-ready hooks for modern React apps, and serves as a practical reference for patterns used in this skill. For library usage and installation, see the official introduction.

## Structure

- `rules/` - Individual rule files (one per rule)
  - `_sections.md` - Section metadata (titles, impacts, descriptions)
  - `_template.md` - Template for creating new rules
  - `area-description.md` - Individual rule files
- `src/` - Build scripts and utilities
- `metadata.json` - Document metadata (version, organization, abstract)
- **`AGENTS.md`** - Compiled output (generated)
- **`test-cases.json`** - Test cases for LLM evaluation (generated)

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Build AGENTS.md from rules:

   ```bash
   pnpm build
   ```

3. Validate rule files:

   ```bash
   pnpm validate
   ```

4. Extract test cases:
   ```bash
   pnpm extract-tests
   ```

## Creating a New Rule

1. Copy `rules/_template.md` to `rules/area-description.md`
2. Choose the appropriate area prefix:
   - `async-` for Eliminating Waterfalls (Section 1)
   - `bundle-` for Bundle Size Optimization (Section 2)
   - `server-` for Server-Side Performance (Section 3)
   - `client-` for Client-Side Data Fetching (Section 4)
   - `rerender-` for Re-render Optimization (Section 5)
   - `rendering-` for Rendering Performance (Section 6)
   - `js-` for JavaScript Performance (Section 7)
   - `advanced-` for Advanced Patterns (Section 8)
3. Fill in the frontmatter and content
4. Ensure you have clear examples with explanations
5. Run `pnpm build` to regenerate AGENTS.md and test-cases.json

## Rule File Structure

Each rule file should follow this structure:

````markdown
---
title: Rule Title Here
impact: MEDIUM
impactDescription: Optional description
tags: tag1, tag2, tag3
---

## Rule Title Here

Brief explanation of the rule and why it matters.

**Incorrect (description of what's wrong):**

```typescript
// Bad code example
```
````

**Correct (description of what's right):**

```typescript
// Good code example
```

Optional explanatory text after examples.

Reference: [Link](https://example.com)

## File Naming Convention

- Files starting with `_` are special (excluded from build)
- Rule files: `area-description.md` (e.g., `async-parallel.md`)
- Section is automatically inferred from filename prefix
- Rules are sorted alphabetically by title within each section
- IDs (e.g., 1.1, 1.2) are auto-generated during build

## Impact Levels

- `CRITICAL` - Highest priority, major performance gains
- `HIGH` - Significant performance improvements
- `MEDIUM-HIGH` - Moderate-high gains
- `MEDIUM` - Moderate performance improvements
- `LOW-MEDIUM` - Low-medium gains
- `LOW` - Incremental improvements

## Scripts

- `pnpm build` - Compile rules into AGENTS.md
- `pnpm validate` - Validate all rule files
- `pnpm extract-tests` - Extract test cases for LLM evaluation
- `pnpm dev` - Build and validate

## Contributing

When adding or modifying rules:

1. Use the correct filename prefix for your section
2. Follow the `_template.md` structure
3. Include clear bad/good examples with explanations
4. Add appropriate tags
5. Run `pnpm build` to regenerate AGENTS.md and test-cases.json
6. Rules are automatically sorted by title - no need to manage numbers!

## Acknowledgments

Inspired by public React performance guidance and community best practices.
