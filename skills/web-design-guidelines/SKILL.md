---
name: web-design-guidelines
description: "Review UI code for compliance with Vercel's Web Interface Guidelines (vercel-labs/web-interface-guidelines). Checks color contrast, validates semantic HTML, audits keyboard navigation, reviews responsive design patterns, and verifies accessibility best practices. Use when asked to 'review my UI', 'check accessibility', 'audit design', 'review UX', or 'check my site against best practices'."
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
---

# Web Design Guidelines

Review files for compliance with the [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) maintained by Vercel Labs. The guidelines cover accessibility, semantic HTML, keyboard navigation, color contrast, responsive design, and general UI/UX best practices.

## Workflow

1. **Fetch guidelines** — Use `WebFetch` to retrieve the latest rules from the source URL below.
2. **Resolve target files** — If the user provided a file path or glob pattern as the argument, read those files. If no files were specified, ask the user which files or directories to review.
3. **Apply every rule** — Walk through each rule in the fetched guidelines and check the target files for violations.
4. **Report findings** — Output results in the terse `file:line` format specified by the fetched guidelines document.

### Guidelines Source URL

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

### Fetching with WebFetch

Invoke the tool like this before every review:

```
WebFetch(url="https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md")
```

The returned content contains all rules and the expected output format. Parse it in full — do not skip or summarize rules.

### Fallback When the URL Is Unreachable

If `WebFetch` fails (network error, timeout, non-200 status):

1. Inform the user that the live guidelines could not be fetched.
2. Fall back to these core checks so the review is still useful:
   - **Semantic HTML** — Verify use of `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>` instead of generic `<div>` wrappers.
   - **Accessibility** — Confirm images have `alt` attributes, form inputs have associated `<label>` elements, ARIA roles are used correctly.
   - **Keyboard navigation** — Ensure interactive elements are focusable and focus order is logical.
   - **Color contrast** — Flag hard-coded color values that may not meet WCAG AA contrast ratios.
   - **Responsive design** — Check for viewport meta tag, relative units, and media query usage.
3. Note in the output that results are based on fallback rules, not the full live guidelines.

## Example

### Input

```
/web-design-guidelines src/components/Header.tsx
```

### Sample Output

```
src/components/Header.tsx:12  Missing alt attribute on <img> element
src/components/Header.tsx:25  <div> used as navigation container — use <nav> instead
src/components/Header.tsx:38  Click handler on <div> without keyboard equivalent — add onKeyDown and tabIndex
src/components/Header.tsx:44  Hard-coded color #aaa on white background may not meet WCAG AA contrast ratio
```

Each finding follows the `file:line  description` format. When no violations are found, confirm that the file passes all checked rules.
