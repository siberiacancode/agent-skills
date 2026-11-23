---
title: PlantUML sequence diagrams
impact: MEDIUM
impactDescription: keeps diagrams focused on meaningful interactions and observable results
tags: documentation, plantuml, sequence, scenarios
---

# PlantUML sequence diagrams

For documenting user journeys as sequence diagrams.

> **First read [plantuml-conventions](./plantuml-conventions.md) and [plantuml-file-structure](./plantuml-file-structure.md).**

Identify meaningful user journeys from the specification and existing behavior. Do not create diagrams for trivial clicks or implementation steps.

- Show the user's action, essential participants, meaningful decisions, and user-visible outcome.
- Keep alternatives of one journey together and split only independent journeys.
- Include internal services only when they help explain the user-visible result.
- Use source-backed vocabulary and readable labels. Keep diagrams concise and validate PlantUML syntax.
