# Issue Generation Rules

## Rules:

1. Generate issue content only when user requests.
2. Write detailed issue descriptions based on user's problem
   and current code structure.
3. Output to `.message.md` file for easy copy-paste to issue platforms.
4. Use markdown format with level 1 heading for issue title.
5. Include relevant code context and project structure analysis.
6. Provide clear problem description and suggested solutions.
7. No additional operations beyond generating the issue content.
8. **MANDATORY**: follow language guidelines.

## Issue Format:

```
# <Issue Title>

## Description

<Detailed description of the problem or feature request>

## Current Context

<Analysis of relevant code structure and current implementation>

## Expected Behavior

<What should happen>

## Suggested Solution

<Proposed approach or implementation details>

## Related Files

<List of files that may be affected or relevant to this issue>

## Additional Context

<Any other relevant information>
```

## Issue Types:

1. **Bug Report**: For unexpected behavior or errors
2. **Feature Request**: For new functionality
3. **Improvement**: For enhancing existing features
4. **Documentation**: For documentation updates
5. **Refactoring**: For code structure improvements

## Analysis Guidelines:

1. Examine current project structure and relevant code files
2. Identify affected components, utilities, or modules
3. Consider existing patterns and conventions in the codebase
4. Suggest solutions that align with project architecture
5. Include specific file paths and code examples when relevant

## Example Issue:

````
# Bug: User email field incorrectly mapped to state enum

## Description

The user schema in `src/database/user.schema.ts` incorrectly maps the email field to the user state enum, causing type errors and database inconsistencies.

## Current Context

In `src/database/user.schema.ts` line 8:
```ts
email: text("state", { enum: userState }).notNull().default("active"),
````

The email field is using the user state enum instead of a proper text field for email addresses.

## Expected Behavior

The email field should be a text field for storing email addresses, not an enum field for user states.

## Suggested Solution

1. Change the email field definition to use text type without enum
2. Add proper email validation if needed
3. Update any related database migrations

## Related Files

- `src/database/user.schema.ts`
- Database migration files (if any)

## Additional Context

This appears to be a copy-paste error from the user state field definition.

```

## Agent Guidelines:

1. Generate issue content only when explicitly requested by user
2. Write to `.message.md` file in project root
3. Base analysis on actual code structure and user's problem description
4. Provide actionable and specific issue content
5. **MANDATORY**: Write issue content in English first, then append user's language version
6. **MANDATORY**: Use clear section separator between English and user language versions
7. User can copy content from `.message.md` to issue tracking platforms
8. No automatic creation of issues in external systems

## Bilingual Format Example:

```

# Bug: User email field incorrectly mapped to state enum

## Description

The user schema in `src/database/user.schema.ts` incorrectly maps the email field to the user state enum, causing type errors and database inconsistencies.

## Current Context

In `src/database/user.schema.ts` line 8:

```ts
email: text("state", { enum: userState }).notNull().default("active"),
```

The email field is using the user state enum instead of a proper text field for email addresses.

## Expected Behavior

The email field should be a text field for storing email addresses, not an enum field for user states.

## Suggested Solution

1. Change the email field definition to use text type without enum
2. Add proper email validation if needed
3. Update any related database migrations

## Related Files

- `src/database/user.schema.ts`
- Database migration files (if any)

## Additional Context

This appears to be a copy-paste error from the user state field definition.

---

# Bug: 用户邮箱字段错误映射到状态枚举

## 描述

`src/database/user.schema.ts` 中的用户模式错误地将邮箱字段映射到用户状态枚举，导致类型错误和数据库不一致。

## 当前上下文

在 `src/database/user.schema.ts` 第 8 行：

```ts
email: text("state", { enum: userState }).notNull().default("active"),
```

邮箱字段使用了用户状态枚举，而不是用于邮箱地址的适当文本字段。

## 预期行为

邮箱字段应该是用于存储邮箱地址的文本字段，而不是用于用户状态的枚举字段。

## 建议解决方案

1. 将邮箱字段定义更改为使用无枚举的文本类型
2. 如果需要，添加适当的邮箱验证
3. 更新相关的数据库迁移文件

## 相关文件

- `src/database/user.schema.ts`
- 数据库迁移文件（如果有）

## 附加上下文

这似乎是用户状态字段定义的复制粘贴错误。

```

```
