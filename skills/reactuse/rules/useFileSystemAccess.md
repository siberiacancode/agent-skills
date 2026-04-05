---
name: useFileSystemAccess
category: Browser
usage: low
---

# useFileSystemAccess

Hook for reading and writing local files via the File System Access API.

## Usage

```ts
import { useFileSystemAccess } from "@siberiacancode/reactuse";

const fileSystemAccess = useFileSystemAccess();
```

## Example

```tsx
import { useFileSystemAccess } from "@siberiacancode/reactuse";

export const FileEditor = () => {
  const fileSystemAccess = useFileSystemAccess({ dataType: "Text" });

  return (
    <div>
      <button type="button" onClick={() => fileSystemAccess.open()}>
        Open
      </button>
      <pre>{fileSystemAccess.data}</pre>
    </div>
  );
};
```

`dataType`:

```tsx
const buf = useFileSystemAccess({ dataType: "ArrayBuffer" });
const blob = useFileSystemAccess({ dataType: "Blob" });
```

## Notes

- Hook uses the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API).

## Type Declarations

```ts
export interface FileSystemAccessShowOpenFileOptions {
  excludeAcceptAllOption?: boolean;
  multiple?: boolean;
  types?: Array<{
    description?: string;
    accept: Record<string, string[]>;
  }>;
}
export interface FileSystemAccessShowSaveFileOptions {
  excludeAcceptAllOption?: boolean;
  suggestedName?: string;
  types?: Array<{
    description?: string;
    accept: Record<string, string[]>;
  }>;
}
export type UseFileSystemAccessCommonOptions = Pick<
  FileSystemAccessShowOpenFileOptions,
  "excludeAcceptAllOption" | "types"
>;
export type UseFileSystemAccessShowSaveOptions = Pick<
  FileSystemAccessShowSaveFileOptions,
  "suggestedName"
>;
export type UseFileSystemAccessOptions = UseFileSystemAccessCommonOptions & {
  dataType?: "ArrayBuffer" | "Blob" | "Text";
};
export interface UseFileSystemAccessReturn<Data = string | ArrayBuffer | Blob> {
  data?: Data;
  file?: File;
  lastModified: number;
  name: string;
  size: number;
  supported: boolean;
  type: string;
  create: (createOptions?: UseFileSystemAccessShowSaveOptions) => Promise<void>;
  open: (openOptions?: UseFileSystemAccessCommonOptions) => Promise<void>;
  save: (saveOptions?: UseFileSystemAccessShowSaveOptions) => Promise<void>;
  saveAs: (saveOptions?: UseFileSystemAccessShowSaveOptions) => Promise<void>;
  set: (data: Data) => void;
  update: () => Promise<void>;
}
export interface UseFileSystemAccess {
  (): UseFileSystemAccessReturn<string | ArrayBuffer | Blob>;
  (
    options: UseFileSystemAccessOptions & { dataType: "ArrayBuffer" }
  ): UseFileSystemAccessReturn<ArrayBuffer>;
  (
    options: UseFileSystemAccessOptions & { dataType: "Blob" }
  ): UseFileSystemAccessReturn<Blob>;
  (
    options: UseFileSystemAccessOptions & { dataType: "Text" }
  ): UseFileSystemAccessReturn<string>;
  (options?: UseFileSystemAccessOptions): UseFileSystemAccessReturn<
    string | ArrayBuffer | Blob
  >;
}
export declare const useFileSystemAccess: UseFileSystemAccess;
```
