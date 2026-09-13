# Testing Best Practices

Best practices for writing, reviewing, and planning tests. Includes Vitest unit-test rules, semantic locator rules for application integration tests, and rules for repository-stored product test cases.

UI-kit component tests use explicit module-level `data-testid` constants with `getByTestId` / `queryByTestId` as the consistent component-selection contract.

## Structure

- [SKILL.md](SKILL.md) - Entry point and routing between rules
- [Unit test conventions](rules/unit-test-conventions.md) - Shared rules that every subject rule links back to
- Subject rules:
  - [Plain functions](rules/unit-test-function.md)
  - [React hooks](rules/unit-test-react-hook.md)
  - [Standalone UI components](rules/unit-test-ui-component-standalone.md)
  - [Compound UI components](rules/unit-test-ui-component-compound.md)
  - [Unit test grill](rules/unit-test-grill.md)
- Integration test rules:
  - [Locator semantic test IDs](rules/integration-test-locator-testids.md)
- Test case rules:
  - [Test case conventions](rules/testcase-conventions.md) - Shared rules that every test-case rule links back to
  - [File structure](rules/testcase-file-structure.md)
  - [Naming](rules/testcase-naming.md)
  - [Content](rules/testcase-content.md)
  - [Preconditions](rules/testcase-preconditions.md)
  - [Test case grill](rules/testcase-grill.md)
- Hook references:
  - [Browser APIs](rules/references/hook-web-api.md)
  - [Listeners and multiple targets](rules/references/hook-listeners.md)
- `rules/` - Individual guide files
  - `_sections.md` - Section metadata
  - `_template.md` - Template for new rules
  - `category-description.md` - Individual rule files
  - `references/` - Worked examples referenced from a rule (e.g. hook web-API and listener tests)
- `metadata.json` - Document metadata
- `AGENTS.md` - Compiled overview

## Creating a New Rule

1. Copy `rules/_template.md` to `rules/category-description.md`
2. Choose the appropriate category prefix:
   - `unit-test-` for unit tests (functions, hooks, components)
   - `integration-test-` for integration-test rules
   - `testcase-` for repository-stored product test cases
3. Fill in the frontmatter and guide content
4. Include Incorrect/Correct examples where they clarify the pattern

## File Naming Convention

- Files starting with `_` are special metadata files
- Rule files use `category-description.md`
- Category is inferred from the filename prefix

## Impact Levels

- `HIGH` - Defines a core testing pattern or prevents an entire class of coverage gaps
- `MEDIUM` - Useful for everyday test ergonomics and consistency
- `LOW` - Situational conventions
