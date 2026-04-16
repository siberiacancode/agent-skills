---
name: vercel-react-best-practices
description: "Applies Vercel's React and Next.js performance optimization rules during code writing, review, and refactoring. Implements code splitting with next/dynamic, eliminates request waterfalls via Promise.all, optimizes bundle size by avoiding barrel imports, configures server-side caching with React.cache(), and enforces re-render minimization patterns. Triggers on React component authoring, Next.js page/route creation, data fetching implementation, bundle analysis, and performance-focused code review."
license: MIT
metadata:
  author: vercel
  version: "1.0.0"
---

# Vercel React Best Practices

Comprehensive performance optimization guide for React and Next.js applications, maintained by Vercel. Contains 69 rules across 8 categories, prioritized by impact to guide automated refactoring and code generation.

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Eliminating Waterfalls | CRITICAL | `async-` |
| 2 | Bundle Size Optimization | CRITICAL | `bundle-` |
| 3 | Server-Side Performance | HIGH | `server-` |
| 4 | Client-Side Data Fetching | MEDIUM-HIGH | `client-` |
| 5 | Re-render Optimization | MEDIUM | `rerender-` |
| 6 | Rendering Performance | MEDIUM | `rendering-` |
| 7 | JavaScript Performance | LOW-MEDIUM | `js-` |
| 8 | Advanced Patterns | LOW | `advanced-` |

## Optimization Workflow

1. **Audit**: Identify performance bottlenecks by category priority (waterfalls and bundle size first)
2. **Apply**: Use the concrete patterns below for CRITICAL/HIGH rules; reference individual rule files for others
3. **Verify**: Confirm changes don't break SSR/hydration, check bundle size delta, test data fetching behavior
4. **Review**: During code review, flag sequential awaits, barrel imports, missing dynamic imports, and inline object args to cache functions

## High-Impact Patterns with Examples

### Eliminate Request Waterfalls with Promise.all (`async-parallel`) — CRITICAL

Sequential awaits on independent operations create cascading round trips. Use `Promise.all()` to parallelize them.

```typescript
// BAD: 3 sequential round trips (~900ms total)
const user = await fetchUser()
const posts = await fetchPosts()
const comments = await fetchComments()

// GOOD: 1 parallel round trip (~300ms total)
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
])
```

### Avoid Barrel File Imports (`bundle-barrel-imports`) — CRITICAL

Barrel files (`index.js` re-exporting everything) force loading thousands of unused modules, adding 200-800ms to cold starts.

```tsx
// BAD: loads 1,583 modules from lucide-react barrel file
import { Check, X, Menu } from 'lucide-react'

// GOOD (Next.js 13.5+): configure optimizePackageImports
// next.config.js
module.exports = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@mui/material']
  }
}

// GOOD (non-Next.js): import directly from source path
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
```

Commonly affected libraries: `lucide-react`, `@mui/material`, `@mui/icons-material`, `@tabler/icons-react`, `react-icons`, `lodash`, `date-fns`.

### Lazy-Load Heavy Components (`bundle-dynamic-imports`) — CRITICAL

Use `next/dynamic` to code-split components not needed on initial render, directly improving TTI and LCP.

```tsx
// BAD: Monaco (~300KB) bundles into main chunk
import { MonacoEditor } from './monaco-editor'

// GOOD: Monaco loads on demand
import dynamic from 'next/dynamic'
const MonacoEditor = dynamic(
  () => import('./monaco-editor').then(m => m.MonacoEditor),
  { ssr: false }
)
```

### Deduplicate Server Requests with React.cache (`server-cache-react`) — HIGH

Wrap async functions in `React.cache()` so multiple components calling the same function within a single request execute the query only once.

```typescript
import { cache } from 'react'

export const getCurrentUser = cache(async () => {
  const session = await auth()
  if (!session?.user?.id) return null
  return await db.user.findUnique({ where: { id: session.user.id } })
})

// Multiple components call getCurrentUser() — query runs once per request
```

Use primitive arguments (not inline objects) to ensure cache hits. `React.cache()` uses `Object.is` for equality — new object references always miss.

## Quick Reference

### 1. Eliminating Waterfalls (CRITICAL)

- `async-cheap-condition-before-await` - Check cheap sync conditions before awaiting flags or remote values
- `async-defer-await` - Move await into branches where actually used
- `async-parallel` - Use Promise.all() for independent operations
- `async-dependencies` - Use better-all for partial dependencies
- `async-api-routes` - Start promises early, await late in API routes
- `async-suspense-boundaries` - Use Suspense to stream content

### 2. Bundle Size Optimization (CRITICAL)

- `bundle-barrel-imports` - Import directly, avoid barrel files
- `bundle-dynamic-imports` - Use next/dynamic for heavy components
- `bundle-defer-third-party` - Load analytics/logging after hydration
- `bundle-conditional` - Load modules only when feature is activated
- `bundle-preload` - Preload on hover/focus for perceived speed

### 3. Server-Side Performance (HIGH)

- `server-auth-actions` - Authenticate server actions like API routes
- `server-cache-react` - Use React.cache() for per-request deduplication
- `server-cache-lru` - Use LRU cache for cross-request caching
- `server-dedup-props` - Avoid duplicate serialization in RSC props
- `server-hoist-static-io` - Hoist static I/O (fonts, logos) to module level
- `server-no-shared-module-state` - Avoid module-level mutable request state in RSC/SSR
- `server-serialization` - Minimize data passed to client components
- `server-parallel-fetching` - Restructure components to parallelize fetches
- `server-parallel-nested-fetching` - Chain nested fetches per item in Promise.all
- `server-after-nonblocking` - Use after() for non-blocking operations

### 4. Client-Side Data Fetching (MEDIUM-HIGH)

- `client-swr-dedup` - Use SWR for automatic request deduplication
- `client-event-listeners` - Deduplicate global event listeners
- `client-passive-event-listeners` - Use passive listeners for scroll
- `client-localstorage-schema` - Version and minimize localStorage data

### 5. Re-render Optimization (MEDIUM)

- `rerender-defer-reads` - Don't subscribe to state only used in callbacks
- `rerender-memo` - Extract expensive work into memoized components
- `rerender-memo-with-default-value` - Hoist default non-primitive props
- `rerender-dependencies` - Use primitive dependencies in effects
- `rerender-derived-state` - Subscribe to derived booleans, not raw values
- `rerender-derived-state-no-effect` - Derive state during render, not effects
- `rerender-functional-setstate` - Use functional setState for stable callbacks
- `rerender-lazy-state-init` - Pass function to useState for expensive values
- `rerender-simple-expression-in-memo` - Avoid memo for simple primitives
- `rerender-split-combined-hooks` - Split hooks with independent dependencies
- `rerender-move-effect-to-event` - Put interaction logic in event handlers
- `rerender-transitions` - Use startTransition for non-urgent updates
- `rerender-use-deferred-value` - Defer expensive renders to keep input responsive
- `rerender-use-ref-transient-values` - Use refs for transient frequent values
- `rerender-no-inline-components` - Don't define components inside components

### 6. Rendering Performance (MEDIUM)

- `rendering-animate-svg-wrapper` - Animate div wrapper, not SVG element
- `rendering-content-visibility` - Use content-visibility for long lists
- `rendering-hoist-jsx` - Extract static JSX outside components
- `rendering-svg-precision` - Reduce SVG coordinate precision
- `rendering-hydration-no-flicker` - Use inline script for client-only data
- `rendering-hydration-suppress-warning` - Suppress expected mismatches
- `rendering-activity` - Use Activity component for show/hide
- `rendering-conditional-render` - Use ternary, not && for conditionals
- `rendering-usetransition-loading` - Prefer useTransition for loading state
- `rendering-resource-hints` - Use React DOM resource hints for preloading
- `rendering-script-defer-async` - Use defer or async on script tags

### 7. JavaScript Performance (LOW-MEDIUM)

- `js-batch-dom-css` - Group CSS changes via classes or cssText
- `js-index-maps` - Build Map for repeated lookups
- `js-cache-property-access` - Cache object properties in loops
- `js-cache-function-results` - Cache function results in module-level Map
- `js-cache-storage` - Cache localStorage/sessionStorage reads
- `js-combine-iterations` - Combine multiple filter/map into one loop
- `js-length-check-first` - Check array length before expensive comparison
- `js-early-exit` - Return early from functions
- `js-hoist-regexp` - Hoist RegExp creation outside loops
- `js-min-max-loop` - Use loop for min/max instead of sort
- `js-set-map-lookups` - Use Set/Map for O(1) lookups
- `js-tosorted-immutable` - Use toSorted() for immutability
- `js-flatmap-filter` - Use flatMap to map and filter in one pass
- `js-request-idle-callback` - Defer non-critical work to browser idle time

### 8. Advanced Patterns (LOW)

- `advanced-effect-event-deps` - Don't put `useEffectEvent` results in effect deps
- `advanced-event-handler-refs` - Store event handlers in refs
- `advanced-init-once` - Initialize app once per app load
- `advanced-use-latest` - useLatest for stable callback refs

## Detailed Rule Files

Read individual rule files for full explanations and extended code examples:

```
rules/async-parallel.md
rules/bundle-barrel-imports.md
rules/server-cache-react.md
```

Each rule file contains the problem explanation, incorrect and correct code examples, and additional context. For the complete compiled guide with all rules expanded, see `AGENTS.md`.
