---
title: Test case file structure
impact: HIGH
impactDescription: keeps coverage ownership unambiguous so cases are findable and not duplicated across folders
tags: testing, test-cases, qa, structure, ownership
---

# Test case file structure

For choosing the folder and file that owns a test case.

> **First read [testcase-conventions](./testcase-conventions.md).** This rule adds only what is specific to structure and ownership.

Choose folders and files by user-facing interface structure and coverage ownership, not by internal implementation.

## Folder

- Choose the target folder by interface structure: a root page or a reusable major system block.
- Put reusable system block checks in the reusable block folder.
- Put child pages and screens inside the parent feature folder when they are reached only through that feature, such as order details inside purchase history.

## File

- Choose the target file by the main semantic element, for example `Шаг Телефон`, `Шаг Проверочный код`, `Хэдер`, or `Футер`.
- Prefer one file per user-facing page block or workflow; do not split files by internal React components.
- Keep child elements and their validation, loading, empty, error, selected, and disabled states in the file of the block or form they belong to.
- Create a separate file for a child element only when it is a major reusable block or has enough independent scenarios to justify its own file.
- Design cases belong in the relevant page or block file by default.

## Ownership and duplication

- Avoid duplicating coverage already owned by another folder or file. Navigation checks belong to layout and navigation files; page files cover behavior inside the target page.
- Do not duplicate reusable setup across page files. A small, explicitly agreed check of a shared element may be repeated on different pages when moving it to a shared location would make coverage less clear, such as checking a return-to-catalog button in each page's empty state.
- Checking that a parent-page button opens a popup and checking the opened popup's content or behavior are different scenarios. An opened-popup precondition does not duplicate a case that checks opening the popup.
- For reusable overlays and system blocks, check confirmed close controls as separate atomic cases, such as `Отмена` and `Кнопка закрытия`, accounting for viewport-specific control availability.
