# Evidence-based review

Trace each material changed behavior from its entry point through relevant state, contracts, dependencies, error handling, and tests. Examine the narrowest complete path needed to understand the behavior. Check whether changes meet the task and acceptance criteria; do not substitute a broad architecture review for evidence.

## Contracts and implementation

Check contract correctness, type safety, accessibility, regressions, and compatibility with existing architecture. Look for debugging output, unexplained commented-out code, redundant guards, duplicate branches, and checks that cannot affect behavior. Flag duplicated or magic configuration values when reuse of an existing or named constant meaningfully improves correctness or maintenance.

## Styles and visual resilience

Check existing class, token, and style reuse; styles or selectors with no observable effect; and layouts that break with long or unconstrained content. Verify wrapping, truncation, and input limits only where the changed UI requires them.

## States and edge cases

Check empty, missing, undefined, partially loaded, failed, and loading data states when relevant. Verify that interactions remain safe during loading, errors are surfaced and recoverable where appropriate, and the UI remains consistent after failure. Inspect relevant tests and report gaps only when required behavior lacks meaningful verification.

## Scope

Check each change against the task and agreed scope. Flag unrelated or accidental changes only when neither the task nor surrounding context justifies them. Confirm findings against the diff and relevant surrounding code; do not require a hook, abstraction, test, or refactor solely because a checklist mentions it.

Report a finding only when there is a demonstrable defect, regression risk, or convention violation with meaningful maintenance cost. State the evidence and practical consequence, and suggest the smallest safe correction.
