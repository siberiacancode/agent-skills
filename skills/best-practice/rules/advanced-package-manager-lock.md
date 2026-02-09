# Single package manager

In our projects we usually use a package manager such as _npm_, _yarn_, _pnpm_, or _bun_. It is important to stick to only one. Do not allow multiple lock files in the same repository, for example _package-lock.json_ and _yarn.lock_. Multiple lock files lead to inconsistent installs and hard-to-debug issues.

```
...
package.json
package-lock.json - npm
```

When working in a team, keep scripts consistent with the chosen package manager:

```json
"scripts": {
  "dev": "npm run dev",
  "build": "npm run build"
}
```
