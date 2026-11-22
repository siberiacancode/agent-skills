# Agent Skills

A collection of skills for AI coding agents. Skills are packaged instructions and scripts that extend agent capabilities.

Skills follow the [Agent Skills](https://agentskills.io/) format.

## Skill Groups

### `skills/workflow/`

User-facing workflows that drive a task from analysis to an artifact:

- `setup`, `refinement`, `grill`, `docs-init`, `docs`, and `tickets`
- `testcase-analyze`, `unit-test-analyze`, and `integration-test-analyze`

Every workflow skill includes `agents/openai.yaml` with its UI metadata and default prompt.

### `skills/shared/`

Reusable building blocks consumed by workflows:

- language, grilling, documentation, and testing conventions
- Reactuse implementation guidance

### `skills/practices/`

Engineering and quality practices used during implementation and review:

- junior engineering, React, and React hooks best practices
- web-design guidelines

## Installation

```bash
npx skills add siberiacancode/agent-skills
```

## Usage

Skills are automatically available once installed. The agent will use them when relevant tasks are detected.

**Examples:**

```
Deploy my app
```

```
Review this React component for performance issues
```

```
Help me optimize this Next.js page
```

## Skill Structure

Each skill directory contains:

- `SKILL.md` - Instructions for the agent
- `scripts/` - Helper scripts for automation (optional)
- `references/` - Supporting documentation (optional)

## License

MIT
