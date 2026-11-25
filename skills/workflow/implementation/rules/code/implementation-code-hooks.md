---
title: Extract complex feature logic into hooks
impact: HIGH
impactDescription: keeps components readable while exposing cohesive feature behavior through a structured contract
tags: frontend, React, hooks, feature
---

# Hooks: Separate UI from Feature Logic

Extract a custom hook when a component coordinates forms, mutations, routing, persistence, modal state, or multi-step actions; keep simple presentation state and i18n in the component. Use an `interface` for the params object and group the returned contract by how the UI consumes it — `state`, `functions`, `form`, `refs`, `features`, or a domain group such as `fields` — without empty groups.
