# Sections

This file defines all sections, their ordering, impact levels, and descriptions.
Each section maps to the matching category folder under `rules/`; existing filename prefixes remain part of the rule names.

---

## 1. Unit Test (unit-test)

**Impact:** HIGH
**Description:** How to write and review Vitest unit tests for the three kinds of subject: plain functions, React hooks, and React components (standalone and compound). Unit-test rules cover test naming, ordering, cross-test consistency, coverage of branches/params/props, SSR-by-default, explicit imports, `forEach` parametrization, and keeping simple tests flat.

## 2. Integration Test (integration-test)

**Impact:** HIGH
**Description:** How to design, plan, write, and review Playwright application integration tests from confirmed product cases. Integration rules cover browser-versus-component boundaries, realistic wrappers, scenario-owned mocks and case IDs, async synchronization, project-provided testing utilities, and stable semantic `data-testid` locators.

## 3. Test Cases (testcase)

**Impact:** HIGH
**Description:** How to generate, revise, review, and reorganize structured product test cases stored in a repository's case catalog, without assuming a fixed catalog layout. Test case rules cover project evidence and confirmed behavior, folder and file ownership, the dot-separated naming hierarchy, atomic case content with concrete observable expected results, the separation of design, functional, and data checks, precondition scope, and a planning mode that lists cases with their owning files before they are written.
