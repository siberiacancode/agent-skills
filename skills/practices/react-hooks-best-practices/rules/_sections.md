# Sections

This file defines all sections, their ordering, impact levels, and descriptions.
The section ID in parentheses is the filename prefix used to group rules.

---

## 1. DX (dx)

**Impact:** HIGH  
**Description:** Hook APIs should be easy to discover, compose, type, and consume. DX rules cover naming, overloads, return shapes, targets, callbacks, and the mental model a developer sees first.

## 2. Optimization (optimization)

**Impact:** HIGH  
**Description:** Hook implementations should avoid unnecessary renders, broad subscriptions, listener churn, memory leaks, and baked-in timing decisions. Optimization rules cover render boundaries, snapshots, throttling strategy, cleanup, and hot-path browser events.

## 3. Logic (logic)

**Impact:** HIGH  
**Description:** Hook logic should preserve correct behavior across lifecycle, SSR, stale closures, targets, cleanup, and state transitions. Logic rules cover invariants, edge cases, and correctness of the hook's internal model.
