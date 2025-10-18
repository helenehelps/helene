# TypeScript Rules

## Rules:

1. No names for default export functions.
2. No `.ts` or `.js` extensions in imports.
3. Add doc comments for all exported APIs.
4. Use sync `node:fs` interfaces.

## Import Rules:

1. Use aliases in `src`, no relative imports.
2. Use relative imports outside `src`.
3. Avoid dynamic imports unless necessary.
4. Add `node:` prefix for node imports.
