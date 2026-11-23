# Testing Best Practices

Best practices for writing, reviewing, and planning tests. Includes Vitest unit-test rules, Playwright browser and component integration-test rules, semantic locator rules, and rules for repository-stored product test cases.

UI-kit component tests use explicit module-level `data-testid` constants with `getByTestId` / `queryByTestId` as the consistent component-selection contract.

## Structure

- [SKILL.md](SKILL.md) - Entry point and routing between rules
- [Unit test conventions](rules/unit-test-conventions.md) - Shared rules that every subject rule links back to
- Subject rules:
  - [Plain functions](rules/unit-test-function.md)
  - [React hooks](rules/unit-test-react-hook.md)
  - [Standalone React components](rules/unit-test-react-component-standalone.md)
  - [Compound React components](rules/unit-test-react-component-compound.md)
  - [Analyze unit tests](rules/unit-test-analyze.md)
- Integration test rules:
  - [Integration test conventions](rules/integration-test-conventions.md) - Test-case sources, project utilities, async behavior, and shared automation decisions
  - [Browser tests](rules/integration-test-browser.md)
  - [Component tests](rules/integration-test-component.md)
  - [Mocks](rules/integration-test-mocks.md)
  - [Locator semantic test IDs](rules/integration-test-locator-testids.md)
  - [Analyze integration tests](rules/integration-test-analyze.md)
- Test case rules:
  - [Test case conventions](../documentation/rules/testcases/conventions.md) - Shared rules that every test-case rule links back to
  - [File structure](../documentation/rules/testcases/file-structure.md)
  - [Naming](../documentation/rules/testcases/naming.md)
  - [Content](../documentation/rules/testcases/content.md)
  - [Preconditions](../documentation/rules/testcases/preconditions.md)
  - [Analyze test cases](../documentation/rules/testcases/analyze.md)
- Hook references:
  - [Browser APIs](rules/references/hook-web-api.md)
  - [Listeners and multiple targets](rules/references/hook-listeners.md)
- `rules/` - Shared metadata and category folders with individual guide files
  - `unit/` - Unit-test rules and hook references
  - `integration/` - Application integration-test rules
  - `testcase/` - Repository-stored product test-case rules
  - `_sections.md` - Section metadata
  - `_template.md` - Template for new rules
  - `category-description.md` - Individual rule files
  - `references/` - Worked examples referenced from a rule (e.g. hook web-API and listener tests)
- `metadata.json` - Document metadata
- `AGENTS.md` - Compiled overview

## Creating a New Rule

1. Copy `rules/_template.md` to the relevant category folder, for example `rules/category-description.md`
2. Choose the appropriate category prefix:
   - `unit-test-` for unit tests (functions, hooks, components)
   - `integration-test-` for integration-test rules
   - `documentation/rules/testcases/` for repository-stored product test cases
3. Fill in the frontmatter and guide content
4. Include Incorrect/Correct examples where they clarify the pattern

## File Naming Convention

- Files starting with `_` are special metadata files
- Rule files use `category-description.md` inside the matching category folder
- Category is inferred from the folder (`unit`, `integration`, or `testcase`)

## Impact Levels

- `HIGH` - Defines a core testing pattern or prevents an entire class of coverage gaps
- `MEDIUM` - Useful for everyday test ergonomics and consistency
- `LOW` - Situational conventions
