---
name: testing-best-practices
description: "Support QA and testing work across formats: planning checks, writing test cases, reviewing coverage, designing automation, creating locators for integration tests, and keeping automated tests focused on observable product behavior."
---

# Testing Best Practices

Practical QA guidance for turning product behavior, requirements, and code paths into useful checks. Use this skill for manual test cases, test plans, coverage reviews, automation scenarios, unit tests, locators for integration tests, and `/unit-test-grill`.

The central idea is not a specific framework. The central idea is testing discipline:

- Start from the user-visible or public contract: what must work, what may fail, and what must never happen.
- Choose the right testing format for the risk: exploratory notes, manual test cases, regression checklist, unit coverage, integration scenario, or automation task.
- Make every check prove a meaningful behavior, requirement, branch, state transition, error path, or cleanup guarantee.
- Keep coverage focused. Test independent dimensions separately, avoid noisy Cartesian products, and skip arbitrary edge values that only retest the platform.
- Preserve project reality by reading nearby tests, existing QA artifacts, product flows, schemas, and automation conventions before adding new structure.
- Treat integration-test locators and test data as maintained testing APIs, changing schema, implementation, and affected checks together.

Use the specific rule files after choosing the testing subject. The current detailed rules focus on automated unit tests and semantic integration locators; for other QA formats, apply the core defaults in this file and keep the output concrete enough for a tester or automation engineer to execute.

## When to Apply

Reference these guidelines when:

- Creating manual test cases, smoke checks, regression suites, acceptance scenarios, or exploratory charters.
- Planning or reviewing automation coverage for application behavior.
- Adding or reviewing automated tests for code.
- Looking for missing behavioral coverage, branch coverage, state transitions, cleanup checks, or error paths.
- Deciding how to name, order, and scope checks inside a test file or QA checklist.
- Creating or reviewing a locator for integration tests, including the semantic name, schema path, JSX attribute, and affected checks.
- Invoking `/unit-test-grill` to turn code behavior into a checklist without writing test code.

## QA Defaults

- Write each check around one behavior or requirement, with clear preconditions, action, and expected result when the format needs those fields.
- Separate smoke, critical-path, regression, negative, boundary, permission, data-state, and recovery checks when that distinction changes execution priority.
- Prefer scenario names that describe the promised behavior, not the implementation detail.
- Include setup data, environment assumptions, and cleanup only when they affect reproducibility.
- Mark automation candidates by stability and value: repeated critical paths, high-risk regressions, deterministic state, and reliable assertions come first.
- Do not automate a scenario until its expected result, data requirements, and locator strategy are stable enough to maintain.
- In reviews, report concrete missing checks or unstable assumptions; do not use coverage percentages or technology names as the main finding.

## Rule Map

Read [unit-test-conventions](rules/unit-test-conventions.md) before any subject-specific unit-test rule.

- [unit-test-function](rules/unit-test-function.md) - Public inputs, owned transformations, branches, errors, and async collaborator boundaries.
- [unit-test-react-hook](rules/unit-test-react-hook.md) - Public hook contract, changing arguments, async work, cleanup, and browser/listener behavior.
- [unit-test-ui-component-standalone](rules/unit-test-ui-component-standalone.md) - Independent component DOM, props, state, interactions, and accessibility.
- [unit-test-ui-component-compound](rules/unit-test-ui-component-compound.md) - Public parts and the state, context, behavior, and accessibility relationships between them.
- [unit-test-grill](rules/unit-test-grill.md) - Scenario-planning mode for `/unit-test-grill`.

Read [integration-locator-testids](rules/integration-locator-testids.md) when adding or reviewing locators for application integration tests.

## How to Use

1. Identify the testing goal: manual QA, test-case design, coverage review, automation planning, automated test implementation, or locator design.
2. Identify the object under test: product flow, requirement, API, data state, function, UI behavior, hook, component, or cross-component integration.
3. Choose the output format that matches the request. For manual QA, write executable test cases or a prioritized checklist. For automation, write stable scenarios or code-level tests.
4. For unit tests, read the shared conventions and then exactly the subject rule that matches the code under test.
5. For browser-API or listener hooks, read the linked reference from the hook rule only when that behavior is present.
6. For locators, read the locator rule when the user wants to create or review a locator for integration tests; update schema, JSX, and affected tests together when a new semantic ID is needed.

## Automated Test Defaults

- Existing repository conventions override generic testing preferences.
- Inspect the same module's tests first, then the closest comparable tests, neighboring layer tests, existing helpers, and only then the implementation.
- Imitate the closest working pattern with the smallest structural change necessary; do not redesign the suite or add new abstractions unless comparable tests already use them or correctness requires it.
- Add scenarios only from explicit behavior, implementation branches the project normally covers, analogous tests, user requirements, regressions, or established coverage patterns.
- When no relevant project convention exists, use `Should <observable behavior>`, colocated tests, direct setup, `forEach` only for truly repeated cases, and combined cases only when dimensions interact.

## Full Compiled Document

For the compiled overview, see [AGENTS.md](AGENTS.md).
