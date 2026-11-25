---
name: tickets
description: Turn an approved feature specification into vertical-slice tickets. Grill, draft, and approve each ticket one at a time before writing it.
disable-model-invocation: true
---

# Tickets

> Before starting, locate, read, and apply these skills:
> - `language`
> - `documentation`
> - `grilling`

## Process

### 1. Gather context

Read the selected `.ai/features/NN-feature-name/spec.md`, relevant files under `documentations/`, existing tasks for the feature, and the implementation where needed. Read `ai/config/tickets.md` if present. Treat the specification as the source of agreed product behavior, documentation as the source of documented contracts and scenarios, and code as the source of existing implementation conventions.

Investigate relevant scope across data and integrations, UI and responsive behavior, localization, mocks, testing, analytics, and infrastructure. Do not invent requirements or resolve product decisions by assumption. Use `grilling` to resolve decisions that block the decomposition before presenting the plan.

### 2. Plan and approve the decomposition

Break the feature into **tracer-bullet** tickets: each delivers a narrow but complete, demoable path through the necessary layers (data, API, UI, tests). Do not split work by layer, specification heading, component, or file. Each ticket should fit into a fresh implementation session. Combine small related work; separate groundwork only when it genuinely unblocks later slices ("make the change easy, then make the easy change"). For unusually wide mechanical refactors, prefer expand–migrate–contract rather than forcing vertical slices.

<ticket-boundaries>
- Each ticket owns an observable outcome and its meaningful acceptance checks.
- Name only actual blockers; independent tickets have no dependencies.
- Include relevant documentation, mocks, and tests within the slice unless they are independent outcomes.
- A ticket must not rely on a different ticket to satisfy its own acceptance checks, except for explicitly approved blocking prerequisites.
</ticket-boundaries>

Keep ticket titles short and outcome-focused, ideally 2–6 words. Name the deliverable or capability, not the implementation steps; put details in the ticket body. Avoid long titles, multiple clauses, and redundant prefixes.

Present the complete numbered plan with each ticket’s **title**, **what it delivers** (observable end-to-end behavior), and **blocked by** (real dependencies). Ask whether the granularity is right, blockers are genuine, and any items should merge or split. Check coverage against the specification and keep independent work independent. Ask for explicit approval or corrections. **Do not create or update any task files before the decomposition is approved.** If the plan changes, present the revised plan and obtain approval again.

### 3. Grill, review, and write one task at a time

Process tasks **strictly one at a time**, in the approved order. For each task:

1. **Investigate.** Re-read the task's scope and relevant specification, code, contracts, scenarios, test cases, and decisions already agreed for earlier tasks. Do not repeat questions that existing evidence or prior answers already resolve.
2. **Grill.** Apply `grilling/rules/interview.md` to clarify material unresolved decisions about the task's behavior, implementation boundaries, integrations, dependencies, and verification. Ask the actionable questions in rounds, following that rule. Do not ask questions just to prolong the interview; if no material decisions remain, proceed directly to the draft.
3. **Draft.** Show the **complete proposed task** in the conversation, with a short title following the naming rule above and these sections:
   - **Описание** — the outcome and relevant behavior, without repeating the full specification.
   - **Реализация** — the agreed **technical concept**: architecture, data flow, integration contracts, and how the main parts interact. Name concrete technologies and important implementation decisions established by the codebase or grilling, but **not** a file-by-file plan, component inventory, or step-by-step coding instructions.
   - **Тестирование** — observable, falsifiable acceptance checks owned by this ticket, plus relevant automated or manual verification; reference existing test cases when available.
   - **Зависимости** — only real blockers, using task numbers and full titles.
4. **Approve.** Ask for explicit approval or corrections **for this task only**. Revise and show the updated draft when corrections are requested. **Do not write the task file or start grilling the next task until the current draft is approved.**
5. **Write.** Only after approval, create or update `.ai/features/NN-feature-name/tasks/N.md`. Preserve previously approved files and unrelated content. Report the saved path briefly, then proceed to the next task.

<ticket-writing-rules>
- Describe **what must work** and the agreed **technical direction**, not exactly how to type the code.
- Prefer concepts and relationships over lists of files, functions, or components. Mention a route like `/projects`, an external API, or an existing abstraction when it is a genuine architectural decision.
- Describe data flow clearly (for example: server component fetches GitHub data via an `apicraft` client, then provides it to the page context).
- Do not invent technical choices to fill a template: grill unresolved decisions, and keep low-level implementation details with the implementer.
- Every acceptance check must be possible to fail before implementation and pass after this ticket alone, given its blockers.
- A fresh agent session should understand the outcome and constraints without needing the original conversation.
</ticket-writing-rules>

Keep drafts concise, self-contained, and implementation-ready. Never silently change an approved task. If grilling reveals a change to the agreed decomposition or specification, explain the impact, pause the current task, obtain approval for the revised plan (and return product decisions to `refinement` as needed), then resume the affected task. Carry forward approved decisions so later tasks remain consistent.

### 4. Finalize the roadmap

After **all tasks have been individually approved and written**, create or update `tasks/roadmap.md` with a compact Mermaid Gantt showing actual task dependencies and parallel work. When dates or estimates are not agreed, label the timeline as illustrative rather than a delivery commitment. Validate coverage, numbering, references, and acyclic dependencies. Do not change approved task content to make the roadmap fit; ask before any material adjustment.

### 5. Publish when configured

If `ai/config/tickets.md` does not configure a publication target, finish with local files only. Otherwise inspect existing remote epics, tasks, and artifacts; prepare a compact publication preview **after all task approvals** and obtain separate explicit approval before any remote changes.

Publish or update the parent epic and approved child tasks, preserving supported dependency links and avoiding duplicates using recorded IDs or stable matches. Publish ZIP artifacts only through the configured supported method. Link the epic to the specification, roadmap, and available artifacts. Verify every successful upload and link before reporting it.

Report the created or updated local paths and, if published, verified remote URLs.
