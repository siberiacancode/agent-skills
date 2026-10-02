---
title: Integration test mocks
impact: HIGH
impactDescription: keeps mock-server scenarios explicit, locally owned, and traceable to integration cases
tags: testing, integration-tests, mocks, case-id, playwright
---

# Integration test mocks

Read [integration-test-conventions](./integration-test-conventions.md) first. Use this rule when an integration scenario requires deterministic server state, requests, or responses.

## Scenario ownership

- Model mock behavior from the selected test case, not from every branch present in the API client or component implementation.
- Give each distinct mock-server scenario a stable case ID when the project uses case IDs to select server behavior.
- Configure the case ID before application bootstrap, navigation, or mount when those operations initiate requests.
- Keep the case-ID registry and scenario mocks beside the owning autotest feature.
- Name case IDs and mock folders after the product scenario rather than an endpoint or implementation branch.
- Keep a confirmed case ID consistent across traceability metadata, setup, mock directory, scenario name, and handler matching. Match case-specific handlers narrowly enough that parallel workers cannot consume one another's responses.

## File structure

Follow the nearest established feature layout. A useful project pattern is:

```text
feature/
├── (helpers)/
│   ├── case-ids.ts
│   └── constants.ts
├── (mocks)/
│   └── scenario-name/
│       ├── constants.ts
│       ├── requests.ts
│       └── index.ts
├── feature.browser.ts
└── feature.component.tsx
```

Create only files the scenario needs. The example expresses ownership and separation, not a requirement to create every layer.

## Mock boundaries

- Keep scenario-specific response data and handlers local to that scenario.
- Share a mock only when several scenarios intentionally depend on the same product state and contract.
- Avoid one handler with hidden branches for unrelated cases; prefer explicit scenario selection through the project's existing mechanism.
- Reuse generated API routes, response types, fakers, and existing mock-server helpers when available.
- Use explicit fixtures when exact values are asserted and handler functions when a response depends on request input. Include every endpoint required to reach the scenario and export it through the established mock registry.
- Make request expectations concrete only when the request itself is part of the test case. Do not assert both a request and an equivalent visible result merely for extra coverage.
- Keep mock data minimal but realistic enough to produce the state under test.

Use a narrow inline override only when the project has an established mechanism and the response is local to one test. Register it before the request can start. Prefer a scenario-owned mock when several endpoints or tests share the same state.

For an in-flight scenario, install the controlled pending response before the action, trigger the action, assert the pending UI, release and await the response, then assert the final visible result. Do not stop at request verification when the case also requires a user-visible outcome.

Case IDs are required by this rule only when the project's mock architecture uses them; do not introduce a new case-ID mechanism into a project that selects scenarios differently.

## Server dependency mocks

For server integration tests, keep the public handler or orchestrating service real and replace the first boundary outside it, such as a remote API, repository service, cache backend, framework-only module, logger, clock, or production environment value.

- Spy on the same adapter instance or module export used by production code. Fully mock a module only when importing or running it would cross the selected boundary.
- Assert only meaningful collaboration, such as an exact write, selected adapter method, cache invalidation, or absence of a write in a no-op path.
- Capture a `structuredClone()` inside the spy when production mutates an argument after the call.
- Reset mutable captures and explicitly restore environment variables, globals, timers, and implementations at their owning scope.

Use fake timers and fixed system time for time-dependent orchestration. Silence expected logger output narrowly, and never load production secrets into test fixtures.
