---
title: Keep state at the narrowest useful boundary
impact: HIGH
impactDescription: keeps ownership explicit and prevents unnecessary global state, prop drilling, and coupling
tags: frontend, React, state, context, react-query, reactuse
---

# State Management

Choose the state boundary from where the value must be read or changed. Start with the narrowest boundary; do not promote state merely to avoid passing one or two props.

## 1. One feature: local state or feature-owned server state

When a value belongs to one component or feature, keep it in that feature. Use `useState` for UI state, `useForm` for form state, and a feature query hook (`useQuery`) for server state. React Query owns the cache: do not copy query data into another state container without a concrete editing or synchronization need.

## 2. Several React levels: context

When descendants at several levels of one React subtree need the same state, provide it through React context. Keep the provider close to the subtree that owns the state; use an application-level provider only for genuinely application-wide concerns such as the existing query, theme, and i18n providers.

Read the context through a `use{Name}` hook and keep its value as a named object (`const projectContext = useProject()`), without destructuring.

## 3. Code outside React: store

If state must be read or changed outside React—for example by an HTTP interceptor, router callback, or a standalone helper—use a store created with `createStore` from `@siberiacancode/reactuse`. A context and React hook cannot safely be consumed there.

Use the store's React subscription hook/API in components, and keep direct `getState`/`setState` access at non-React boundaries. Do not use a store as a replacement for local, form, query, or subtree state.
