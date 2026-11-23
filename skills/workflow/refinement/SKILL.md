---
name: refinement
description: Turn materials in ai/inputs and the existing codebase into a concise feature specification.
disable-model-invocation: true
---

# Refinement

> Before starting, locate, read, and apply these skills:
> - `language`
> - `grilling`

Read relevant materials in .ai/inputs/, including text, images, documents, and links. Explore the codebase and project conventions, and account for decisions already made in the conversation. Use grilling to resolve meaningful differences between inputs, agreed requirements, and existing implementation.

Before drafting, investigate overlooked scope in SEO and analytics, mocks and development data, automated and manual testing, design assets, responsive layout, themes, and interactions. Use discovery to identify unresolved decisions for grilling, not as requirements to add on your own. Complete the interview before writing.

Write a concise, natural feature specification grounded in supplied requirements and agreed decisions. Start with the feature title and a brief introduction, then organize the specification around cohesive parts of the feature rather than technical concerns. Describe related behavior, appearance, responsiveness, analytics, accessibility, and SEO together where they belong, without creating separate sections for cross-cutting details. State concrete behavior and decisions in plain prose, using real project names and links where helpful. Use tables for data contracts and short lists for checks or other naturally enumerable details. Include essential architectural constraints without turning the specification into an implementation walkthrough, and avoid repeating requirements in verification.

Save the result to .ai/features/NN-feature-name/spec.md, using the next available two-digit number from 01 and a descriptive kebab-case name, or update the existing specification for that feature. Report the path briefly.
