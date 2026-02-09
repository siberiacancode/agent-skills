# const vs let

Use `const` by default. It makes immutability explicit, protects against accidental reassignment, and makes code easier to read. Switch to `let` only when the variable actually changes, usually inside loops.

```ts
const apiUrl = "/api";
const options = { timeout: 5000 };

for (let i = 0; i < users.length; i++) {
  // ...
}
```

Always start with `const`. Use `let` only for truly mutable variables.
