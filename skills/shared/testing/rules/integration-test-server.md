---
title: Server integration tests
impact: HIGH
impactDescription: proves server request and orchestration contracts through public entry points while controlling external infrastructure
tags: testing, integration-tests, vitest, server, route-handlers, api
---

# Server Integration Tests

Read [integration-test-conventions](integration-test-conventions.md) first. Use this rule for server integration tests covering route handlers, server actions, request parsing, response shaping, adapters, caches, documentation compilers, and workflows spanning several server modules.

## Exercise the public entry point

- Import and call the exported route method, server action, or service entry point.
- Construct a real `Request` when URL, repeated query parameters, headers, cookies, or body parsing matters.
- Use a minimal typed request stub only when the subject consumes a narrow request method such as `json()` and local tests establish that pattern.
- Assert response status, parse the body once, and assert its public shape. Prefer strict equality for stable contracts and partial matching only for intentionally open fields.
- Cover materially distinct workflow branches confirmed by the case: standalone/composed input, create/update/no-op, single/repeated query values, success/error, caching, or cleanup.

For filesystem-like documentation behavior, use a small realistic fixture tree owned by the test. Do not compute the expected value by calling the same production transformation a second time.

## Preserve real orchestration

Keep the handler and internal workflow under test real and replace the first dependency beyond that boundary, such as a remote API, repository service, cache backend, framework-only module, logger, clock, or production environment value.

Spy on the same adapter instance or module export used by production code. Fully mock a module only when importing or running it would cross the selected boundary.

Assert response behavior plus a significant side effect when both belong to the contract, for example exact repository actions, selected adapter method, cache deletion, or absence of mutation in a no-op path. Do not assert every internal helper call.

Test rejected dependencies and malformed input when error mapping, status, logging, rollback, or cleanup is confirmed behavior.

## Runtime control and isolation

- Stub environment values before executing code that reads them and use test env loading rather than production secrets.
- Use fake timers and fixed system time for time-dependent orchestration.
- Keep request and response fixtures immutable, or clone captured arguments before production mutation.
- Reset mutable captures after each test and restore timers, globals, environment, and mock implementations at their owning scope.
- Keep tests parallel-safe and independent of execution order, external services, real caches, and mutable shared fixture state.
