---
name: useWebMCP
category: Browser
usage: low
---

# useWebMCP

Registers a browser WebMCP tool for a component's lifecycle.

## Usage

```ts
import { useWebMCP } from "@siberiacancode/reactuse";

const webMCP = useWebMCP({
  name: "get-theme",
  description: "Returns the current color theme",
  inputSchema: { type: "object", properties: {} },
  annotations: { readOnlyHint: true },
  execute: () => ({ theme })
});
```

## Example

```tsx
const { supported, registered, error, register, unregister } = useWebMCP({
  name: "add-todo",
  description: "Adds a todo item",
  inputSchema: {
    type: "object",
    properties: { text: { type: "string" } },
    required: ["text"]
  },
  execute: ({ text }) => addTodo(String(text))
});

if (!supported) return <p>WebMCP is not supported.</p>;
if (error) return <button onClick={() => void register()}>Retry</button>;
return <button onClick={registered ? unregister : () => void register()}>{registered ? "Disable" : "Enable"}</button>;
```

## Notes

- Hook uses the experimental [WebMCP API](https://github.com/webmachinelearning/webmcp).

## Type Declarations

```ts
export interface WebMCPToolExecuteOptions { signal: AbortSignal }
export type WebMCPToolExecuteCallback = (
  input: Record<string, unknown>,
  options: WebMCPToolExecuteOptions
) => unknown | Promise<unknown>;
export interface WebMCPToolAnnotations {
  consequentialHint?: boolean;
  debugging?: boolean;
  readOnlyHint?: boolean;
  untrustedContentHint?: boolean;
}
export interface WebMCPModelContextTool {
  annotations?: WebMCPToolAnnotations;
  description: string;
  execute: WebMCPToolExecuteCallback;
  inputSchema?: object;
  name: string;
  title?: string;
}
export type UseWebMCPOptions = WebMCPModelContextTool & {
  exposedTo?: string[];
  immediately?: boolean;
};
export interface UseWebMCPReturn {
  error?: Error;
  registered: boolean;
  supported: boolean;
  register: () => Promise<void>;
  unregister: () => void;
}
export declare const useWebMCP: (options: UseWebMCPOptions) => UseWebMCPReturn;
```
