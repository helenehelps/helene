# TypeScript Guidelines

When coding TypeScript:

## You must follow those rules:

1. Don't add name for default export functions.
2. Don't add `.ts` or `.js` extension when `import`.
3. Do add documentation comments for all exported APIs.
4. Use sync `node:fs` interfaces (readFileSync, writeFileSync, etc.).

## Import rules for different files:

1. Use import aliases in the `src` folder, don't use relative imports.
2. Use relative import for files outside the `src` folder.
3. Avoid dynamic import unless you have to.
4. For node imports, add `node:` prefix.
