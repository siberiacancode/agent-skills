Hey @debabin 👋

I ran your skills through `tessl skill review` at work and found some targeted improvements. Here's the full before/after:

![score_card](./score_card.png)

| Skill | Before | After | Change |
|-------|--------|-------|--------|
| reactuse | 64% | 94% | +30% |
| web-design-guidelines | 73% | 97% | +24% |
| juniors-best-practice | 63% | 86% | +23% |
| vercel-react-best-practices | 69% | 89% | +20% |

<details>
<summary>Changes made</summary>

**Description improvements (biggest impact):**
- **reactuse**: Rewrote description with specific hook names (useLocalStorage, useQuery, useClickOutside, useDebounceCallback, etc.), added "VueUse-style hooks for React" phrasing, and explicit trigger guidance for replacing hand-rolled hooks
- **web-design-guidelines**: Added specific concrete actions (checks color contrast, validates semantic HTML, audits keyboard navigation, reviews responsive design), clarified source as Vercel's Web Interface Guidelines
- **juniors-best-practice**: Added specific patterns (early-return guards, const-by-default, nullish coalescing, component composition) and natural trigger terms (code review, linting, refactoring, hooks, props, CSS)
- **vercel-react-best-practices**: Listed concrete techniques (code splitting with next/dynamic, waterfall elimination via Promise.all, barrel import avoidance, React.cache()) and performance-specific trigger conditions

**Content improvements:**
- **reactuse**: Added 4 executable code examples (useLocalStorage, useQuery, useClickOutside, useDebounceValue), fixed invocation terminology mismatch (unified HIGH/MEDIUM/LOW), added hook selection decision-tree for similar hooks (debounce family, storage family, boolean state), trimmed tables to HIGH-invocation hooks only with category overview for MEDIUM/LOW
- **web-design-guidelines**: Consolidated redundant How It Works/Usage sections into single workflow, added concrete input/output example with `file:line` format, added fallback guidance for when the guidelines URL is unreachable
- **juniors-best-practice**: Added 3 inline code examples for highest-priority rules (early return, nullish coalescing, const vs let), added 7-step code review workflow checklist, removed unnecessary "When to Apply" section
- **vercel-react-best-practices**: Added 4 concrete BAD/GOOD code examples for critical rules (async-parallel, bundle-barrel-imports, bundle-dynamic-imports, server-cache-react), added 4-step optimization workflow, removed redundant "When to Apply" section

</details>

Honest disclosure — I work at @tesslio where we build tooling around skills like these. Not a pitch - just saw room for improvement and wanted to contribute.

Want to self-improve your skills? Just point your agent (Claude Code, Codex, etc.) at [this Tessl guide](https://docs.tessl.io/evaluate/optimize-a-skill-using-best-practices) and ask it to optimize your skill. Ping me - [@yogesh-tessl](https://github.com/yogesh-tessl) - if you hit any snags.

Thanks in advance 🙏
