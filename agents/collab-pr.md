# PR Submission Rules

## Rules:

1. Generate PR message only when user requests.
2. Write detailed messages explaining changes.
3. Include specific file changes.
4. Use present tense.
5. Separate subject from body with blank line.
6. No period at end of first line.
7. Prioritize conciseness over strict grammar.

## Message Format:

```
# <type>(<scope>): <subject>
# <type>: <subject>

<body>
```

## Types:

1. `feat`: new feature.
2. `fix`: bug fix.
3. `docs`: docs change.
4. `perf`: performance.
5. `test`: tests.
6. `rules`: agent rules.
7. `chore`: others.

## Description Rules:

1. Explain changes in each file.
2. Describe purpose of changes.
3. Mention breaking changes.
4. Include issue references.
5. Use ordered lists.
6. Add periods at end of items.
7. Keep lines under 60 chars.
8. Use numbered points first.

## Example:

```
# feat: add responsive layout component

1. Create `ResponsiveLayout` with mobile-first design.
2. Add breakpoint utilities.
3. Update layout styles.
4. Include Storybook stories.

Supports mobile, tablet, desktop layouts
with smooth transitions.
```

## Agent Guidelines:

1. Generate PR message only when user requests.
2. Generate commit message after every task completion.
3. Write to `.commit.md`.
4. Allow target branch specification.
5. Default to `main` branch.
6. Use git commands for diffs.
7. Base on actual file changes.
8. Include detailed description.
9. Use conventional format.
10. Review changes first.
11. AI only generates message, user executes commit.

## Git Commands:

1. `git diff <target> --name-only` - changed files.
2. `git diff <target> --stat` - file stats.
3. `git diff <target>` - detailed changes.
4. `git log <target>..HEAD --oneline` - commits.

## List Rules:

1. Avoid nested lists.
2. Use separate sections.
3. Keep lists flat.
4. Extract complex examples.
