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
- Make request expectations concrete only when the request itself is part of the test case. Do not assert both a request and an equivalent visible result merely for extra coverage.
- Keep mock data minimal but realistic enough to produce the state under test.

Case IDs are required by this rule only when the project's mock architecture uses them; do not introduce a new case-ID mechanism into a project that selects scenarios differently.
