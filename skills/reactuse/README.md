# Reactuse

**Version 1.0.0**  
Siberiacancode  
January 2026

This repository contains Reactuse guidance for agents and LLMs. It is optimized for automated code generation, refactoring, and consistency in React and Next.js projects.

## Abstract

Reactuse is a TypeScript-first hook library with SSR compatibility and tree-shaking optimization. This repository documents hooks and helper utilities for agents and LLMs, with clear usage guidance and practical examples to keep React and Next.js code consistent.

## Sections

The rules are organized into the following sections (as in `_sections.md`):

1. Helpers
2. Elements
3. Async
4. Lifecycle
5. Browser
6. Utilities
7. State
8. User
9. Sensors
10. Time
11. Debug

## Structure

- `rules/` - Individual rule files (one per hook/helper)
  - `_sections.md` - Section metadata (titles, impacts, descriptions)
  - `_template.md` - Template for creating new rules
  - `useSomething.md` - Individual rule files
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

1. Copy `rules/_template.md` to `rules/useSomething.md`
2. Set `name`, `category`, and `usage` in the frontmatter
3. Follow the template structure (Usage, Example, Use cases, Notes, Type Declarations)
4. Ensure you have clear examples with explanations
5. Run `pnpm build` to regenerate AGENTS.md and test-cases.json

## Rule File Structure

Each rule file should follow this structure:

```markdown
---
name: useSomething
category: State
usage: high | medium | low
---

## useSomething

A short, one-line description of what the hook does.

## Usage

Describe the basic import and minimal usage example. Show destructured return values even if the hook returns a full object.

## Example

Provide a concise component example that demonstrates a real UI use case.

## Use cases

List 2-4 practical UI scenarios where the hook is useful.

## Notes

List important caveats and edge cases.

## Type Declarations

Summarize key public types and the main function signature.
```

## File Naming Convention

- Files starting with `_` are special (excluded from build)
- Rule files: `useSomething.md` (e.g., `use-hover.md`)
- Section is inferred from the `category` frontmatter
- Rules are sorted alphabetically by name within each section

## Scripts

- `pnpm build` - Compile rules into AGENTS.md
- `pnpm validate` - Validate all rule files
- `pnpm extract-tests` - Extract test cases for LLM evaluation
- `pnpm dev` - Build and validate

## Contributing

When adding or modifying rules:

1. Use a clear hook/helper filename (`useSomething.md`)
2. Follow the `_template.md` structure
3. Include clear examples with explanations
4. Run `pnpm build` to regenerate AGENTS.md and test-cases.json
5. Rules are automatically sorted by name - no need to manage numbers!

## Acknowledgments

Inspired by public React hook libraries and community best practices.
