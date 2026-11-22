---
name: docs
description: Update technical documentation for an approved feature specification, with a human-reviewed file change plan before writing.
---

# Docs

Read and apply `../../shared/language/SKILL.md` and `../../shared/docs/SKILL.md`.

Read the selected `ai/features/NN-feature-name/spec.md`, relevant code, and existing documentation. Identify the documentation affected by the feature and apply the corresponding rules in `../../shared/docs/rules/`.

Present proposed file changes as the main result of the analysis. Group them by artifact type in compact tables without column headers, showing each path, create or update action, and brief purpose. Show only relevant groups, invite free-form corrections, and wait for explicit approval before writing.

After approval, create or update only the approved files under `documentations/`, preserving unrelated content. For test cases, read `../../shared/testing/SKILL.md` and its applicable testcase conventions, using `testcase-analyze` to evaluate coverage. Ground the work in agreed requirements and verified code, return unresolved product decisions to refinement, and validate the resulting artifacts.
