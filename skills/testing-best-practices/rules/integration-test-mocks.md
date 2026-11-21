---
title: Integration test mocks
impact: HIGH
impactDescription: keeps mock-server scenarios explicit, locally owned, and traceable to integration cases
tags: testing, integration-tests, mocks, case-id, playwright
---

# Integration test mocks

Read [integration-test-conventions](./integration-test-conventions.md) first. Use this rule when a browser or component integration scenario requires deterministic backend state, requests, or responses.

Use `mock-config-server` for mock-server scenarios. Follow the project's existing package configuration, scenario registry, case-ID selection, and handler APIs instead of introducing another mock-server implementation or parallel infrastructure.

## Scenario ownership

- Keep one mock scenario per test case and model only the behavior that case requires.
- Give each distinct mock-server scenario a stable case ID when the project uses case IDs to select server behavior.
- Configure the case ID before application bootstrap, navigation, or mount when those operations initiate requests.
- Keep the case-ID registry and scenario mocks beside the owning autotest feature.
- Name case IDs and mock folders after the product scenario rather than an endpoint or implementation branch.
- Keep a confirmed case ID consistent across traceability metadata, setup, mock directory, scenario name, and handler matching. Match case-specific handlers narrowly enough that parallel workers cannot consume one another's responses.

## Mock boundaries

- Keep scenario-specific response data and handlers local to that scenario.
- Avoid one handler with hidden branches for unrelated cases; prefer explicit scenario selection through the project's existing mechanism.
- Reuse generated API routes, response types, fakers, and existing mock-server helpers when available.
- Use explicit fixtures when exact values are asserted and handler functions when a response depends on request input. Include every endpoint required to reach the scenario and export it through the established mock registry.
- Make request expectations concrete only when the request itself is part of the test case. Do not assert both a request and an equivalent visible result merely for extra coverage.
- Keep mock data minimal but realistic enough to produce the state under test.

Case IDs are required by this rule only when the project's mock architecture uses them; do not introduce a new case-ID mechanism into a project that selects scenarios differently.
