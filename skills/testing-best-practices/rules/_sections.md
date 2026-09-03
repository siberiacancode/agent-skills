# Sections

This file defines all sections, their ordering, impact levels, and descriptions.
The section ID in parentheses is the filename prefix used to group rules.

---

## 1. Unit Test (unit-test)

**Impact:** HIGH
**Description:** How to write and review Vitest unit tests for the three kinds of subject: plain functions, React hooks, and React components (standalone and compound). Unit-test rules cover test naming, ordering, cross-test consistency, coverage of branches/params/props, SSR-by-default, explicit imports, `forEach` parametrization, and keeping simple tests flat.

## 2. Integration Locator (integration-locator)

**Impact:** HIGH
**Description:** How to design stable semantic `data-testid` locators for application integration tests without coupling them to pages, modules, visual placement, or DOM structure.
