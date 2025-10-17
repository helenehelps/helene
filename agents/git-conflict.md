# Git Conflict Resolution Rules

## Rules:

1. After resolving merge conflicts, generate commit message describing the resolution.
2. Include details about which changes were kept and which were resolved.
3. Write commit message to `.commit.md` file in project root.
4. Use `git status` and `git diff` to identify resolved conflicts.
5. Follow general commit guidelines from git-commit rules.

## Commit Message Format:

```
merge(conflict): <source-branch> into <target-branch>

<body>
```

## Example:

```
merge(conflict): feature-branch into main

1. Keep feature impl from `feature-branch` in `src/components/Button.tsx`.
2. Resolve merge markers in `src/utils/api.ts` by combining both impls.
3. Accept incoming changes in `package.json` for dependency updates.
4. Remove conflict markers from `src/styles/layout.module.scss`.

The resolution preserves new feature functionality while
maintaining compatibility with recent dependency updates.
```

## Agent Guidelines:

1. After resolving merge conflicts, generate commit message to `.commit.md`.
2. Include specific details about conflict resolution decisions.
3. User can run `pnpm commit:as` to commit using `.commit.md` content.
