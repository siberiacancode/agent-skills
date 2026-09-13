# Sections

This file defines all sections, their ordering, impact levels, and descriptions.
The section ID in parentheses is the filename prefix used to group rules.

---

## 1. Unit Test (unit-test)

**Impact:** HIGH
**Description:** How to write and review Vitest unit tests for the three kinds of subject: plain functions, React hooks, and React components (standalone and compound). Unit-test rules cover test naming, ordering, cross-test consistency, coverage of branches/params/props, SSR-by-default, explicit imports, `forEach` parametrization, and keeping simple tests flat.

## 2. Integration Test (integration-test)

**Impact:** HIGH
**Description:** How to design and maintain application integration-test conventions, starting with stable semantic `data-testid` locators that avoid coupling tests to pages, modules, visual placement, or DOM structure.

## 3. Test Cases (testcase)

**Impact:** HIGH
**Description:** How to generate, revise, review, and reorganize structured product test cases stored in a repository's case catalog, without assuming a fixed catalog layout. Test case rules cover project evidence and confirmed behavior, folder and file ownership, the dot-separated naming hierarchy, atomic case content with concrete observable expected results, the separation of design, functional, and data checks, precondition scope, and a planning mode that lists cases with their owning files before they are written.
