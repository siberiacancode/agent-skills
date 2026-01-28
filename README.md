# Agent Skills

A collection of skills for AI coding agents. Skills are packaged instructions and scripts that extend agent capabilities.

Skills follow the [Agent Skills](https://agentskills.io/) format.

## Available Skills

### reactuse

Reactuse delivers production-ready hooks that solve real-world problems. Built with a TypeScript-first approach, SSR compatibility, and tree-shaking optimization for modern React applications.

**Use when:**

- Adding or reviewing hooks in React apps
- Building SSR-safe components
- Optimizing bundle size via tree-shaking-friendly usage
- Standardizing hook usage across projects

**Categories covered:**

- Hook categories (Elements, Async, Lifecycle, Browser, Utilities, State)
- SSR compatibility patterns
- TypeScript-first usage conventions
- Performance and tree-shaking considerations

## Installation

```bash
npx add-skill siberiacancode/agent-skills
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

Each skill contains:

- `SKILL.md` - Instructions for the agent
- `scripts/` - Helper scripts for automation (optional)
- `references/` - Supporting documentation (optional)

## License

MIT
