---
name: setup
description: Configure feature documentation and ticket publishing for the current repository, keeping project-specific settings outside shared skills.
---

# Setup

Read and apply `../../shared/language/SKILL.md`.

Inspect the repository, its Git remote, agent instructions, and existing `ai/` conventions. Propose the project-specific ticket workflow, including the target repository or tracker, whether publishing is enabled, and where ZIP artifacts should be stored. Prefer the repository's established conventions and ask only about decisions that cannot be inferred. Present the proposed settings for approval before saving them.

Write the approved configuration to `ai/config/tickets.md`. Record the intended target and publication method in clear Markdown, including how to create the parent epic, child tasks, dependency links, and artifact URLs. For GitHub, distinguish repository issues from GitHub Projects boards. Specify a supported ZIP delivery method, such as committing archives to a repository path or uploading them as release assets; the GitHub CLI issue `--attach` option is for images and videos, not general ZIP attachments.

Keep credentials out of the configuration. Verify that the selected CLI, MCP connector, or API is accessible when possible, and explain any missing capability. The setup skill configures publishing; it does not create tickets or upload files.
