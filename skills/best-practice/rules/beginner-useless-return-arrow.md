# Avoid unnecessary return in arrow functions

Arrow functions with a single expression do not need braces or `return`:

```javascript
const multiply = (a, b) => {
  return a * b;
};

const multiply = (a, b) => a * b;
```

For async functions, avoid an extra `await` when you only return the value:

```javascript
const getUser = async (id) => {
  const response = await fetch(`/api/user/${id}`);
  return response;
};

const getUser = (id) => fetch(`/api/user/${id}`);
```
