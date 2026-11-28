---
name: docs
description: Plan and update project documentation for a feature, with user approval before changing files.
disable-model-invocation: true
---

# Docs

> Before starting, locate, read, and apply these skills:
> - `language`
> - `documentation`
> - `testing`

## Process

### 1. Gather context

Read the selected `.ai/features/NN-feature-name/spec.md`, relevant code, and existing documentation.

### 2. Plan documentation

Determine which artifacts the feature requires based on its behavior, independently of whether their files or supporting infrastructure already exist. Locate and read the applicable rules before proposing files:

<!-- TODO: Enable architecture documentation when `documentation/rules/architecture.md` is configured.
- `documentations/architecture.md` — `documentation/rules/architecture.md`
-->
- `documentations/openapi.yaml` — `documentation/rules/openapi.md`
- `documentations/asyncapi.yaml` — `documentation/rules/asyncapi.md`
- `documentations/scenarios/<area>/<scenario>.puml` — `documentation/rules/sequence.md`
- `documentations/validations/<form-name>.md` — `documentation/rules/validation.md`
- `documentations/cases/<area>/<file>.ts` — `testing/rules/testcase-conventions.md`, `testing/rules/testcase-file-structure.md`, `testing/rules/testcase-naming.md`, `testing/rules/testcase-content.md`, `testing/rules/testcase-preconditions.md`, `testing/rules/testcase-analyze.md`

Strictly follow the applicable rules when deciding artifact coverage, paths, and structure. Treat them as requirements, not recommendations; do not substitute your own conventions. If a required rule cannot be found, report it rather than guessing. If a required artifact cannot yet be created, include it in the plan and identify the blocker instead of omitting it.

### 3. Review the plan

Present only necessary file changes in compact tables grouped by artifact type, without headers. For each file, show its path, action, and purpose. For test-case files, replace the general description with a numbered list of proposed test-case names directly in the Content column. Base the list on confirmed requirements and existing coverage, without inventing scenarios or detailing steps, expectations, or metadata.

Ask for approval or free-form corrections, including additions, removals, or renames to the proposed test-case list. Do not write files before approval.

### 4. Write documentation

Create or update only approved files under `documentations/`, using the approved scenario list as the test-case scope and following the same rules. Preserve unrelated content. Ground the work in agreed requirements and verified code, return unresolved product decisions to refinement, and validate the results.
