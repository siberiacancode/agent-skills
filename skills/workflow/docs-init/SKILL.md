---
name: docs-init
description: Initialize project-wide technical documentation from the actual codebase.
---

# Docs Init

Read and apply `../../shared/language/SKILL.md` and `../../shared/docs/SKILL.md`.

Explore the project's code, configuration, interfaces, and existing documentation to understand its architecture and implemented behavior. Initialize the relevant files under `documentations/` using the corresponding `../../shared/docs/rules/`. Cover system boundaries, integrations, API contracts, meaningful user journeys, and form validation only where they exist.

For test cases in `documentations/cases/`, apply `testing` and its testcase rules. Describe verified behavior rather than proposed features, preserve existing documentation, and validate the generated artifacts.
