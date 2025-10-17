# Comment Rules

## Rules:

1. Comments must be in English.
2. Keep English clear and concise, grammar not strict.
3. Use doc comments, not inline comments in functions.
4. End all sentences with dots.
5. `@param` and `@returns` descriptions start lowercase.

## Example:

```ts
/**
 * Brief description in first line.
 *
 * 1. Use ordered lists for details.
 * 2. All sentences end with dots.
 * 3. Minimum 3 list items, else use plain text.
 * 4. Break long lines for readability.
 * 5. Use {@link values} not `values`.
 * 6. Wrap keywords in backticks: `unknown`, `true`.
 *
 * @param values no "-" before description.
 * @returns lowercase first letter with dot.
 */
export function example(...values: unknown[]) { ... }

/**
 * ... (Default exports commented similarly)
 */
export default function() { ... }
```
