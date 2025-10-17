# Framework Guidelines

1. NextJS application using `app` router inside `src` dir.
2. Use TypeScript as possible, don't use JavaScript.
3. Use scss and scss-module for styling, don't use original css.
4. Use vitest for testing.
5. Use storybook for component preview and UI testing.
6. Use `pnpm` to run commands, don't use other package managers.

## How agent guideline works:

1. Agent guidelines are inside `agents/**/*.md`.
2. The `scripts/prepare-agents.ts` script will copy all rules into
   config files of many AI coding tools,
   that those tools will load those files before coding.
3. When user requested, you may update those rules in `agents/**/*.md`.
4. After updating those rules, you need to run `pnpm prepare-agents` to update.
