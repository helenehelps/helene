# Storybook Guidelines

When coding Storybook stories:

## You must follow those rules:

1. Use `@storybook/nextjs-vite` framework, not `@storybook/react`.
2. Use TypeScript for all story files, don't use JavaScript.
3. Storybook files must use `.stories.tsx` extension, not `.stories.ts`.
4. Use Storybook Play for interaction testing with `storybook/internal/test`.
5. Tests should be written in Storybook stories, not separate `.test.tsx` files.
6. `.stories.tsx` can also alongside `.module.scss` for scss-module dev.
7. Don't write unnecessary tests that are obvious to succeed.
