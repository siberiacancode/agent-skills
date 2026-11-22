---
title: SVG assets
impact: LOW-MEDIUM
tags: assets, svg, icons
---

# SVG assets

When using SVGs in web apps, treating them as images causes scaling issues and limits CSS control. That often increases the number of SVG variants:

```tsx
import iceIcon from "../icons/ice.svg";

<img src={iceIcon} width={24} height={24} />;
```

A better approach is to use SVGs as React components:

```tsx
import type { ComponentProps } from "react";

const IceIcon = (props: ComponentProps<"svg">) => (
  <svg
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    {...props}
  >
    ...
  </svg>
);

<IceIcon width={24} height={24} fill="currentColor" />;
```

## Import automation

To automatically convert SVGs into React components, use SVGR. It provides a CLI and build tool integrations:

```tsx
import IceIcon from "../icons/logo.svg";

<IceIcon width={24} height={24} fill="currentColor" />;
```

You can also optimize SVGs by removing unnecessary attributes and cleaning paths. Use semantic icon names and correct viewBox values. Treat SVGs as vector graphics to keep them scalable and customizable.

## Sprites

If you have many icons on a page, SVG sprites can improve performance. A sprite is one SVG file with all icons:

```svg
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="iceIcon" viewBox="0 0 24 24">
    // ice icon
  </symbol>
</svg>
```

You can inline it in HTML or load it as a separate file:

```tsx
import type { ComponentProps } from "react";

const IceIcon = (props: ComponentProps<"svg">) => (
  <svg
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    {...props}
  >
    <use href="#iceIcon" />
  </svg>
);
```
