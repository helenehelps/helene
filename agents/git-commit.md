# Git Commit Rules

## Rules:

1. Generate commit message suggestions after completing tasks.
2. Write detailed commit messages explaining what changed.
3. Include specific file changes in commit description.
4. Use present tense for commit messages.
5. Separate subject from body with blank line.
6. Do not add period at the end of the first line.
7. Prioritize conciseness over strict English grammar.
8. **MANDATORY**: follow language guidelines.

## Commit Message Format:

```
<type>(<scope>): <subject>
<type>: <subject>

<body>
```

**Format Rules:**

- Use `type(scope): subject` when scope is present
- Use `type: subject` when scope is not present
- Do not use empty parentheses like `type(): subject`

## Commit Types:

1. `feat`: new feature for users.
2. `fix`: bug fix for users.
3. `docs`: docs change only.
4. `perf`: improve performance.
5. `test`: add or modify tests.
6. `rules`: update agent rules.
7. `merge`: merge branches or resolve conflicts.
8. `chore`: others.

## Detailed Description Rules:

1. Explain what was changed in each file.
2. Describe the purpose of changes.
3. Mention any breaking changes.
4. Include references to issues if applicable.
5. Use ordered lists instead of unordered lists.
6. Add periods at the end of all ordered list items and detailed descriptions.
7. Keep lines under 60 characters for better readability.
8. Use numbered points first, then add details if needed.
9. Prioritize conciseness - avoid listing obvious details.
10. Use abbreviations for common terms when appropriate.
11. Combine related changes into single points.

## Example:

**With scope:**

```
feat(components): add responsive layout component

1. Create `ResponsiveLayout` with mobile-first design.
2. Add breakpoint utilities and responsive styles.
3. Include Storybook stories for testing.

Supports mobile, tablet, and desktop layouts.
```

**Without scope:**

```
rules: update git commit format guidelines

1. Clarify commit message format for cases without scope.
2. Add explicit rules about empty parentheses usage.
3. Update examples to demonstrate both formats.

The changes ensure consistent commit message formatting.
```

## Agent Guidelines:

1. **MANDATORY**: Generate commit message suggestions after EVERY task completion.
2. **MANDATORY**: Write commit message to `.commit.md` file in project root.
3. **MANDATORY**: Write commit message in English first, then append user's language version
4. **MANDATORY**: Use clear section separator between English and user language versions
5. **MANDATORY**: Keep all lines under 60 characters for readability.
6. Use `git status` and `git diff` to identify actual file changes.
7. Base commit message on actual file modifications, not conversation context.
8. Include detailed description of all changes made.
9. Use conventional commit format for consistency.
10. Review git changes before generating commit message.
11. User can run `pnpm commit:as` to commit using `.commit.md` content.
12. **FAILURE TO GENERATE COMMIT MESSAGE IS A RULE VIOLATION**.
13. Commit message generation must be the final step before `attempt_completion`.

## Bilingual Format Example:

```
feat(components): add responsive layout component

1. Create `ResponsiveLayout` with mobile-first design.
2. Add breakpoint utilities and responsive styles.
3. Include Storybook stories for testing.

Supports mobile, tablet, and desktop layouts.

---

feat(components): 添加响应式布局组件

1. 创建具有移动优先设计的 `ResponsiveLayout`。
2. 添加断点工具和响应式样式。
3. 包含用于测试的 Storybook 故事。

支持移动端、平板端和桌面端布局。
```
