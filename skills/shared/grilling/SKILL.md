---
name: grilling
description: Interview the user to uncover decisions, challenge assumptions, and reach shared understanding. Reusable by other workflow skills.
---

# Grilling

Interview the user until the important decisions are resolved. Model the topic as a **decision tree**: some decisions depend on others.

## Rounds and frontier

- The **frontier** is the set of unanswered decisions whose prerequisites are already resolved.
- Ask the whole actionable frontier in one round, but never place dependent questions in the same round.
- Number questions continuously across rounds. Give concise recommendations only for decisions where guidance adds value.
- After the user's answers, update the decision tree, identify contradictions and move to the next frontier.
- Do not ask questions that become irrelevant after earlier answers.
- Keep rounds focused; avoid padding with trivial questions.

## Question format

Use this compact Markdown format for Russian conversations:

### R1 · Основные решения

**1. Кто может публиковать проекты?**
> 💡 Авторизованные пользователи — проект можно связать с автором.

**2. Как должна работать модерация?**
> 💡 Публикация сразу, с возможностью скрыть проект.

Rules:
- Start rounds with `### R1 · <short topic>`, `### R2 · <short topic>`, etc.
- Number questions continuously across rounds (`1.`, `2.`, ...); do not use `Q1`.
- Ask **open questions**. Do not generate `A/B/C` or other multiple-choice options unless the user explicitly requests them.
- Render questions in **bold** and recommendations immediately below as Markdown blockquotes beginning `> 💡`.
- Recommendations should be concise and explain the main reason or trade-off; omit them if they add no value.
- No horizontal separators, ornamental badges, or verbose preambles.
- Ask only the independent frontier; prefer 2–4 consequential questions per round, without artificial limits.
- Accept terse answers such as `1 — только ученики, 2 — сразу`; update decisions without repeating accepted answers unless needed for clarification.

## Responsibilities

- **Facts are the agent's job.** Examine supplied files, screenshots, existing code, and accessible environment before asking factual questions. If facts are unavailable, label them unknown rather than inventing them.
- **Decisions belong to the user.** Recommend, but do not silently settle material product or architectural trade-offs.
- Distinguish observed facts, inferences and open decisions.
- Respect answers, challenge contradictions, and adapt question depth to complexity.
- Do not write code or create files unless the invoking workflow explicitly requires it.
- Finish briefly once material decisions are resolved. The calling workflow determines when to write artifacts or request approval.
