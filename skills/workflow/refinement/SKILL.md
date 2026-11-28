---
name: refinement
description: Turn materials in .ai/inputs/ and the codebase into a concise feature specification.
disable-model-invocation: true
---

# Refinement

> Before starting, locate, read, and apply these skills:
> - `language`
> - `grilling`

Read relevant materials in `.ai/inputs/`, explore the codebase, and account for existing conventions and agreed decisions. Use grilling to resolve meaningful gaps and contradictions. Check SEO, analytics, mocks, testing, design assets, responsiveness, themes, and interactions without inventing requirements.

During grilling, offer three viable options and allow a custom answer. Mark one as `💡 Recommended` when justified. Preserve grilling rounds, frontier, and numbering; do not invent alternatives or assume approval.

Write a concise specification organized by cohesive feature parts rather than technical categories. Describe agreed behavior, appearance, interactions, and relevant constraints together. Use plain prose, tables for data contracts, and lists where useful. Avoid implementation walkthroughs and repeated requirements.

Save to `.ai/features/NN-feature-name/spec.md`, using the next available two-digit number and a short kebab-case name, or update the existing specification. Report the path.
