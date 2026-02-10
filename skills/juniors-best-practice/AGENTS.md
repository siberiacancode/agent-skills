# Juniors Best Practice

**Version 1.0.0**  
siberiacancode  
February 2026

> **Note:**  
> This document is optimized for agents and LLMs working on junior-friendly React and TypeScript codebases. It emphasizes clarity, consistency, and practical guidance.

---

## Abstract

Juniors-focused best practices for React and TypeScript projects, organized by practical scopes (JS, React, styling, devtools, and more). Each guide includes concise guidance and examples that help early-career developers write clear, consistent, and maintainable code.

---

## Table of Contents

1. [Beginner Foundations](#1-beginner-foundations)

   - 1.1 [Early return](#11-early-return)
   - 1.2 [Avoid double negation](#12-avoid-double-negation)
   - 1.3 [Avoid unnecessary destructuring](#13-avoid-unnecessary-destructuring)

2. [TypeScript](#2-typescript)

   - 2.1 [TypeScript path alias naming](#21-typescript-path-alias-naming)

3. [React](#3-react)

   - 3.1 [React string props](#31-react-string-props)
   - 3.2 [Children prop](#32-children-prop)
   - 3.3 [Scalable components](#33-scalable-components)
   - 3.4 [Props typing](#34-props-typing)

4. [Styling](#4-styling)

   - 4.1 [Classnames helper](#41-classnames-helper)
   - 4.2 [CSS selectors for component states](#42-css-selectors-for-component-states)

5. [Devtools](#5-devtools)

   - 5.1 [Formatter and linter](#51-formatter-and-linter)
   - 5.2 [Sorting imports](#52-sorting-imports)
   - 5.3 [Single package manager](#53-single-package-manager)

6. [Assets](#6-assets)

   - 6.1 [SVG assets](#61-svg-assets)

7. [Git](#7-git)
   - 7.1 [Commit conventions](#71-commit-conventions)

---

## 1. Beginner Foundations

### 1.1 Early return

Use early returns to reduce nesting and keep control flow easy to read.

### 1.2 Avoid double negation

Prefer positive names to avoid confusing `!isNotX` conditions.

### 1.3 Avoid unnecessary destructuring

Avoid destructuring when it hurts clarity or creates renaming noise.

### 1.4 const vs let

Default to `const` and use `let` only for real mutation.

### 1.5 Nullish vs OR (?? vs ||)

Prefer `??` when falsy values like `0` or `false` are valid.

### 1.6 Avoid unnecessary return in arrow functions

Keep arrow functions concise by removing redundant `return`.

### 1.7 Uppercase constants

Use UPPER_CASE only for stable, application-level constants.

## 2. TypeScript

### 2.1 TypeScript path alias naming

Use aliases that avoid collisions with external packages.

## 3. React

### 3.1 React string props

Use string literals directly when no expression is needed.

### 3.2 Children prop

Use `children` for flexible composition and typing clarity.

### 3.3 Scalable components

Extend native element props to keep components flexible.

### 3.4 Props typing

Keep prop types nearby and readable.

## 4. Styling

### 4.1 Classnames helper

Use a helper like `clsx` for conditional class names.

### 4.2 CSS selectors for component states

Prefer CSS selectors for hover/disabled/focus styling.

## 5. Devtools

### 5.1 Formatter and linter

Use formatters and linters to keep code consistent.

### 5.2 Sorting imports

Keep imports ordered and grouped for readability.

### 5.3 Single package manager

Use one package manager and a single lock file.

## 6. Assets

### 6.1 SVG assets

Use SVGs as components for scalable, themeable icons.

## 7. Git

### 7.1 Commit conventions

Use a consistent commit message format across the team.
