---
title: Sorting imports
impact: MEDIUM
tags: devtools, imports, formatting
---

# Sorting imports

Consistent import ordering improves navigation and reduces merge conflicts. When imports follow a common structure, it is easier to find dependencies and understand module boundaries.

```tsx
import { Button } from "./Button";
import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
```

```tsx
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import clsx from "clsx";

import { Button } from "./Button";

import styles from "./Button.module.css";
```

Automating routine tasks lets the team focus on more important work. Tools and plugins can sort imports on save or during builds. A common practice is to group imports by origin (framework, third-party, local) and separate groups with blank lines for readability.
