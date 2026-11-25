---
name: code-review
description: Review code changes against the task, repository conventions, and applicable implementation rules. Report only evidenced, actionable findings without editing files.
disable-model-invocation: true
---

# Code Review

> Before starting, locate, read, and apply these skills:
> - `language`
> - Relevant `testing`, `practices`, and `packages` skills when applicable

## Process

### 1. Establish context

Read the task, referenced specification, documentation, test cases, repository instructions, and available implementation context. Inspect the working tree without modifying it. For a standalone review, use the supplied base Git ref and optional target (default `HEAD`), resolve both refs, and review the complete diff from their merge base. When invoked by `implementation` without refs, review its staged and unstaged changes against the starting state if that state can be established. Request missing information when the review range or task intent cannot be determined reliably; never guess or claim to have reviewed unidentifiable changes.

### 2. Review the changes

Read and apply [review analysis](rules/analysis.md). Trace each material change from its entry point through the relevant contracts, state, dependencies, error handling, UI, and tests. Read the applicable rules in `../implementation/rules/code/` before judging conventions: architecture, general conventions, naming, destructuring, and types as relevant; components, hooks, forms, state management, and mocks when changed. Apply testing and other shared rules only when relevant. A checklist item is not a finding by itself.

### 3. Report findings

Start with a concise summary of the reviewed range, task intent, and limitations. For Git refs, include the merge-base, target, and resolved hashes so the range is reproducible. Do not claim to have inspected changes or run checks that were unavailable.

Group confirmed, actionable findings by severity (blocking, important, minor), omitting empty groups and duplicate root causes. Each finding needs a short title, exact file and line where possible, supporting evidence, practical consequence, and smallest safe fix. Link an applicable implementation rule when relevant; do not invent rule citations for behavioral defects. Use natural headings rather than fixed labels.

If no actionable findings are confirmed, say so and identify the reviewed areas and limitations. Keep speculative questions separate from confirmed findings; never manufacture issues.

This skill is read-only. The invoking `implementation` workflow owns any fixes and subsequent review iterations.

## Review format

Report findings in descending severity order: 🔴 Critical, 🟠 Major, 🟡 Minor. Number findings continuously and use the same structure for each: a bold title with severity, file location, concise explanation, and a recommendation prefixed with `> 💡`.

Use `### Code Review · N findings` as the heading. If no issues are found, report `0 findings`. Do not include unverified issues or stylistic nitpicks.