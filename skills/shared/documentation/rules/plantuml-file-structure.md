---
title: PlantUML file structure
impact: HIGH
impactDescription: keeps user journeys findable and prevents duplicated diagrams
tags: documentation, plantuml, structure, ownership
---

# PlantUML file structure

For choosing the folder and file that owns a sequence diagram.

> **First read [plantuml-conventions](./plantuml-conventions.md).** This rule covers file structure and ownership; use [plantuml-sequence](./plantuml-sequence.md) for content.

Store diagrams under `documentations/scenarios/`. Name semantic folders and `.puml` files in Russian lowercase kebab-case, keeping the fixed root and technical identifiers unchanged (e.g. `documentations/scenarios/проекты/фильтрация-проектов.puml`).

## Folder

- Choose the folder by user-facing feature or major reusable system area, not internal implementation modules.
- Keep related journeys in their owning feature folder and shared journeys in the reusable area folder.

## File

- Name each file after its main user journey or outcome.
- Prefer one diagram per meaningful journey, not per click, component, or technical operation.
- Keep decisions and alternative outcomes in the same diagram; split independently meaningful journeys.

## Ownership and duplication

- Keep shared navigation journeys with their owning navigation area; feature diagrams cover behavior within the feature.
- Do not duplicate journeys across files. Reference an existing diagram when appropriate.
- Document build, deployment, and background synchronization in architecture documentation instead.
