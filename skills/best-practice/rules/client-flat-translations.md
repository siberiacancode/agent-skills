# Flat translation keys

When organizing translations, developers often create deeply nested structures, which makes localization harder to maintain.

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

Nested structures create multiple problems: it is harder to find translations, identical phrases are duplicated, and changes become expensive. A flat structure helps:

```json
{
  "button.save": "Save",
  "button.cancel": "Cancel"
}
```

Translations are flexible. Start with shared entities and add specificity only when context is critical.

```json
{
  "page.login.legal": "I agree to the terms"
}
```
