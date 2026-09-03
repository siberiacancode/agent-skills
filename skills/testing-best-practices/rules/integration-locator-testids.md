---
title: Integration locator test IDs
impact: HIGH
impactDescription: keeps integration-test locators stable by treating test IDs as a small semantic UI API
tags: testing, integration-tests, component-tests, locators, data-testid
---

# Integration locator test IDs

For semantic `data-testid` locators used by application integration tests.

This rule is not an E2E-testing convention and does not define local test IDs for isolated UI-kit unit tests.

## Source of truth

- **Current scenarios** — add IDs required by the integration behavior being tested, not for every JSX node or possible future scenario.
- **Relevant UI** — inspect the integration scenarios, schema, and rendered JSX before changing an ID.
- **Existing conventions** — preserve the project's attribute name, exported constant style, separator, and serializer. When redesigning an inconsistent schema, do not treat its existing semantic names as authoritative.

## When to add an ID

- **Interaction** — add an ID when a scenario must operate an element through a stable locator.
- **Assertion** — add an ID when a scenario must observe an important result that has no sufficiently stable existing locator.
- **Scoping** — add an ID when a stable container is needed to distinguish or narrow another locator.
- **No speculative IDs** — being clickable, editable, or visible does not by itself require an ID when no current integration scenario addresses the element.

## Semantic groups

Every ID starts with one group:

- **`CLICKABLE`** — actions activated by clicking, such as buttons, links, cards, tabs, menu items, and clickable rows.
- **`CHANGEABLE`** — values or states changed by the user, such as inputs, selects, checkboxes, radios, switches, and editable content.
- **`STATIC`** — stable assertion or scoping targets, such as pages, sections, fields, messages, errors, headings, and text.

Classify the element by how the user or test interacts with it, not by its appearance or HTML tag.

## Naming

- **Tree direction** — build paths from general to specific: `GROUP -> ELEMENT -> SEMANTIC_NAME`.
- **Element** — use a stable UI kind from the existing schema vocabulary; do not invent synonyms for the same role.
- **Semantic name** — describe the action, value, or assertion target itself.
- **No placement namespace** — do not add a page, form, modal, sidebar, layout, or wrapper when it only describes where the element appears.
- **Page IDs** — a page name belongs under the page element itself; it is not a namespace for actions inside that page.
- **Export style** — keep schema segments uppercase unless the codebase already uses another convention.

```text
CLICKABLE.BUTTON.SIGN_IN
CLICKABLE.BUTTON.RETRY_OTP
CLICKABLE.LINK.HOME

CHANGEABLE.INPUT.PHONE
CHANGEABLE.INPUT.OTP

STATIC.PAGE.LOGIN
STATIC.FIELD.PHONE
STATIC.ERROR.PHONE
STATIC.TEXT.LEGAL
```

Avoid placement-based paths:

```text
CLICKABLE.BUTTON.LOGIN.SIGN_IN
CLICKABLE.BUTTON.HEADER.SIGN_IN
CLICKABLE.BUTTON.MODAL.SIGN_IN
```

## Reuse and instances

- **Base ID reuse** — use the same base ID whenever the application meaning is the same, regardless of page or visual container.
- **Duplicate instances** — when multiple instances with the same base ID exist in one test scope, append a stable domain or component identifier in JSX.
- **No instance constants** — a duplicate suffix does not create another schema path.
- **Stable suffixes** — do not use array positions, `FIRST`/`SECOND`, CSS state, or DOM placement as identifiers.

```tsx
<button data-testid={TESTIDS.CLICKABLE.BUTTON.SIGN_IN}>Sign in</button>

<button data-testid={`${TESTIDS.CLICKABLE.BUTTON.CART_ITEM_REMOVE}-${item.id}`}>
  Remove
</button>
```

## Meaning and state

- **Same action** — keep one ID when loading, disabled state, presentation, or placement changes but the logical action remains the same.
- **Different action** — change the base ID when the same JSX node performs a different application action.

```tsx
<Button
  data-testid={
    isCodeStep
      ? TESTIDS.CLICKABLE.BUTTON.SIGN_IN
      : TESTIDS.CLICKABLE.BUTTON.SUBMIT_PHONE
  }
/>
```

## Assertion targets and schema shape

- **Independent semantics** — give fields, errors, messages, and other independently asserted elements their own paths instead of deriving suffixes from another element's ID.
- **Leaf-only paths** — keep every schema path a leaf. Do not add `$ID`, `SELF_ID`, or another synthetic segment to make one node both a value and a container.
- **Element separation** — place related UI concepts under their own element types rather than nesting them below a page or input path.

```tsx
<section data-testid={TESTIDS.STATIC.PAGE.LOGIN}>
  <Field data-testid={TESTIDS.STATIC.FIELD.EMAIL}>
    <Input data-testid={TESTIDS.CHANGEABLE.INPUT.EMAIL} />
    <FieldError data-testid={TESTIDS.STATIC.ERROR.EMAIL} />
  </Field>
  <Button data-testid={TESTIDS.CLICKABLE.BUTTON.SIGN_IN}>Sign in</Button>
</section>
```

## Apply changes

- **Reuse first** — check whether an existing base ID already represents the same application meaning before adding a path.
- **Change together** — update the schema, generated constants, JSX, and affected integration locators as one change.
- **Preserve scope** — do not rename unrelated IDs or tests outside the requested feature.
- **Validate** — run the schema generator or validator and the narrowest relevant integration checks.
- **Report ambiguity** — surface semantic choices that cannot be determined consistently from the scenarios and UI.
