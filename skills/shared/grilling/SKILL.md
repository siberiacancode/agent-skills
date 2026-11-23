---
name: grilling
description: Challenge assumptions, expose gaps, and resolve decisions through structured grilling.
---

# Grilling

Grill the user until the important decisions are resolved. Challenge assumptions, expose contradictions, and push back on weak decisions. Model the topic as a **decision tree**: some decisions depend on others.

## Rounds and frontier

- The **frontier** is the set of unanswered decisions whose prerequisites are already resolved.
- Ask the whole actionable frontier in one round, but never place dependent questions in the same round.
- Number questions continuously across rounds. Recommend an approach when a meaningful trade-off exists.
- After each round, update the decision tree, challenge contradictions, and move to the next frontier.
- Skip questions that become irrelevant after earlier answers.
- Avoid trivial questions and decisions already established by the codebase or documentation.

## Question format

Use this compact Markdown format:

### R1 · Core decisions

**1. Who can publish projects?**
> 💡 Authenticated users — each project can be linked to its author.

**2. How should moderation work?**
> 💡 Publish immediately with the ability to hide projects later. This avoids blocking submissions.

Rules:
- Start rounds with `### R1 · <short topic>`, `### R2 · <short topic>`, etc.
- Number questions continuously across rounds (`1.`, `2.`, ...); do not use `Q1`.
- Ask **open questions**. Do not generate multiple-choice options unless requested.
- Render questions in **bold** and recommendations immediately below as blockquotes beginning `> 💡`.
- Keep recommendations concise and explain the main trade-off. Omit them when unnecessary.
- No horizontal separators, ornamental badges, or verbose preambles.
- Prefer 2–4 consequential questions per round without artificial limits.
- Accept terse answers and do not repeat resolved decisions.

## Responsibilities

- **Facts are the agent's job.** Inspect available code, documentation, and supplied materials before asking factual questions. Never invent missing facts.
- **Decisions belong to the user.** Challenge weak assumptions and recommend alternatives, but never silently resolve material trade-offs.
- Distinguish observed facts, assumptions, and unresolved decisions.
- Push back on contradictions, unnecessary complexity, and solutions that conflict with existing architecture.
- Do not write code or create files unless the invoking workflow requires it.
- Stop when material decisions are resolved. The calling workflow controls artifact creation and approval.
