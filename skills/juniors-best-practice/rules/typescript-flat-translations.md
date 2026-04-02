---
title: Flat translation keys
impact: MEDIUM
tags: typescript, i18n, l10n, json
---

# Flat translation keys

Deeply nested translation objects make keys harder to find and often duplicate common labels like `save` or `cancel`.

```json
{
  "pages": {
    "content": {
      "button": {
        "save": "Save"
      }
    }
  },
  "users": {
    "actions": {
      "button": {
        "save": "Save",
        "cancel": "Cancel"
      }
    }
  }
}
```

Prefer flat keys and introduce context only when the string meaning is truly different.

```json
{
  "button.save": "Save",
  "button.cancel": "Cancel",
  "page.login.legal": "I agree to the terms"
}
```

This keeps key naming predictable, reduces duplication, and simplifies i18n maintenance.
