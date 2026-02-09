# Avoid double negation

Sometimes variables are named with a negative and then negated in conditions. This creates double negation and is hard to read.

```tsx
const App = () => {
  const [isNotVisible] = useState(false);

  return <div>{!isNotVisible && <div>content</div>}</div>;
};
```

`!isNotVisible` reads as "not not visible". Use a positive name instead:

```tsx
const App = () => {
  const [isVisible] = useState(true);

  return <div>{isVisible && <div>content</div>}</div>;
};
```

Positive names improve readability and remove the mental translation step.
