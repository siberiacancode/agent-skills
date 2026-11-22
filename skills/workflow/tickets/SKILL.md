---
name: tickets
description: Produce concise implementation-ready feature tasks and a dependency roadmap, publishing the epic, tasks, and artifacts when configured for the project.
---

# Tickets

Read and apply `../../shared/language/SKILL.md`.

Read the selected `ai/features/NN-feature-name/spec.md`, related documentation under `documentations/`, relevant source code, and `ai/config/tickets.md` when present. Use the specification for agreed behavior, documentation for technical context, and code for project conventions. Investigate the scope across integrations, data, UI, layout, localization, mocks, tests, analytics, and infrastructure. Resolve factual questions from existing sources and apply `../../shared/grilling/SKILL.md` only when an unresolved decision blocks sensible tasks.

Decompose the feature into cohesive, independently reviewable outcomes based on implementation convenience and real dependencies rather than specification headings. Combine related small changes that are easier to deliver together; separate meaningful technical groundwork such as API clients, mocks, or test infrastructure when it helps implementation. Keep the set complete without fragmentation or oversized tasks.

Write numbered tasks to `ai/features/NN-feature-name/tasks/1.md`, `2.md`, and so on, preserving existing numbering where possible. Each task has a descriptive Russian title and sections **Описание**, **Реализация**, and **Тестирование**. Add **Зависимости** at the end only for actual blockers, listing task numbers and full titles. Write with high information density: each section adds new information, retains implementation-critical decisions, and avoids repeating requirements or obvious boundaries.

Create `tasks/roadmap.md` as a compact Mermaid Gantt diagram showing dependency order and parallelizable work. Use illustrative stages when real schedules are unknown, clearly indicating they are not commitments. Verify coverage, useful boundaries, and consistent acyclic dependencies before finishing local generation.

If `ai/config/tickets.md` does not enable a publication target, stop after creating the local artifacts. If publication is configured, inspect existing remote epics, tasks, and artifacts first, then present a concise publication preview and obtain explicit approval before changing the remote tracker. Publish or update the parent epic and its child tasks, preserve dependency links using the tracker's supported mechanism, and publish ZIP archives using the method recorded in the configuration. Link the epic to the feature specification, roadmap, and available artifacts. Reuse recorded remote IDs or stable matching references to avoid duplicates; never claim a successful upload or linkage without verifying it. Report the final local paths and remote URLs.
