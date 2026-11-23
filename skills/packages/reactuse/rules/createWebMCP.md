---
name: createWebMCP
category: Helpers
usage: low
---

# createWebMCP

Creates an imperative registry for WebMCP tools exposed by the current document.

## Usage

```ts
import { createWebMCP } from "@siberiacancode/reactuse";

const webMCP = createWebMCP();
await webMCP.register({
  name: "get-theme",
  description: "Returns the current color theme",
  execute: () => ({ theme: "dark" })
});
```

## Example

```tsx
const [webMCP] = useState(createWebMCP);

useEffect(() => {
  if (!webMCP.supported) return;
  void webMCP.register({
    name: "get-status",
    description: "Returns the current application status",
    annotations: { readOnlyHint: true },
    execute: () => ({ status: "ready" })
  });
  return webMCP.clear;
}, [webMCP]);
```

## Notes

- Helper uses the experimental [WebMCP API](https://github.com/webmachinelearning/webmcp).

## Type Declarations

```ts
export interface RegisterWebMCPTool {
  (
    tool: WebMCPModelContextTool,
    options?: WebMCPModelContextRegisterToolOptions
  ): Promise<boolean>;
}
export interface createWebMCPReturn {
  register: RegisterWebMCPTool;
  readonly supported: boolean;
  clear: () => void;
  unregister: (name: string) => void;
}
export declare const createWebMCP: () => createWebMCPReturn;
```
