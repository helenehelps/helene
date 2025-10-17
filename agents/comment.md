# Comment Guidelines

When coding comments in any file format:

## You must follow those rules:

1. All comments in code must be in English.
2. Don't insist on strict English grammars, make it clear and concise.
3. Don't add any comment inside a function, use comment documentations.
4. All sentences in comments must have a dot at the end.
5. `@param` and `@returns` descriptions should start with lowercase letter.

## Comment style examples:

```ts
/**
 * Brief description shortly in the first line.
 *
 * 1. You may use ordered list to describe details.
 * 2. All sentences must have a dot at the end.
 * 3. There must be at least 3 items in the list, otherwise use plain text.
 * 4. Don't write a single line too long, add line breaks when necessary.
 * 5. Use links like: {@link values} instead of `values`.
 * 6. Wrap keywords with backticks, like: `unknown`, `true`.
 *
 * @param values don't add a "-" before the description.
 * @returns lower the first letter, and also have dot at end.
 */
export function example(...values: unknown[]) { ... }

/**
 * Default exports can also be commented like this.
 *
 * ... (omit the details)
 */
export default function() { ... }
```
