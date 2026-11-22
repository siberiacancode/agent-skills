---
name: refinement
description: Turn materials in ai/inputs and the existing codebase into a concise Russian feature specification at ai/features/NN-feature-name/spec.md.
---

# Refinement

Read and apply `../../shared/language/SKILL.md` and `../../shared/grilling/SKILL.md`.

Read relevant materials in `ai/inputs/`, including text, images, documents, and links. Explore the codebase and project conventions, and account for decisions already made in the conversation. Use grilling to resolve meaningful differences between inputs, agreed requirements, and existing implementation.

Before drafting, investigate overlooked scope in SEO and analytics, mocks and development data, automated and manual testing, design assets, responsive layout, themes, and interactions. Use discovery to identify unresolved decisions for grilling, not as requirements to add on your own. Complete the interview before writing.

Write a concise Russian feature specification grounded in the supplied requirements and agreed decisions. Start with the feature title and organize related behavior under descriptive `##` headings. Include essential architectural constraints, link relevant sources, and use tables where they improve clarity. Capture feature-specific verification expectations without repeating implementation context or testing infrastructure.

Save the result to `ai/features/NN-feature-name/spec.md`, using the next available two-digit number from `01` and a descriptive kebab-case name, or update the existing specification for that feature. Report the path briefly.
