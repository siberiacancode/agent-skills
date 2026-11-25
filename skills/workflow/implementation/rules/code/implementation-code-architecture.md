---
title: Implement frontend module architecture and boundaries
impact: HIGH
impactDescription: keeps implementation aligned with module ownership, public APIs, colocation, shared utilities, and generated-code boundaries
tags: frontend, architecture, modules, implementation
---

## Modules

Organize domain or feature code as modules. A module owns a coherent user flow or capability and may contain the parts that serve that capability:

- `components/` for module-specific UI;
- `helpers/` for module-specific transformations or other non-React logic;
- `constants/` for module-specific constants, form schemas, and static configuration;
- `hooks/` for module-specific React hooks and orchestration.

Do not create a directory merely to satisfy this shape. A module may omit a part it does not need, and a repository's established module boundary takes precedence over this example.

## Public exports

Expose a module's intended public API through an `index.ts` barrel at its boundary. Consumers outside the module should import the exports they need from that entry point instead of its internal files whenever the project follows this pattern.

## Colocation

Keep code as close as practical to the place that uses it. A UI component, hook, helper, constant, test that supports one module belongs with that module; move it to a shared location only when it has a real cross-module responsibility.

## Global utilities

`src/utils` is for global, cross-module infrastructure and reusable facilities, rather than feature-specific code. Typical examples are API clients, application contexts, shared stores, shared constants, telemetry helpers, and elementary reusable functions.

Place an elementary function in a global utility only when it is genuinely reusable beyond its original module. For example, a shared API client or a small helper used across independent features may live in `src/utils`; a transformation only used by one feature remains next to that feature in `helpers/`.

## Generated code

Treat generated artifacts as generator output: change their source (schema, configuration, or generator input) and regenerate them instead of editing the output by hand, unless the repository's generator workflow requires manual edits.
