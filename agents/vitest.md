# Vitest Guidelines

When coding tests with Vitest:

## You must follow those rules:

1. Use `test` instead of `it` for test cases.
2. All comments in tests must be in English.
3. All sentences in comments must have a dot at the end.
4. Use descriptive test names that explain the expected behavior.
5. Follow the project's TypeScript and import rules.
6. Use proper cleanup for temporary files and resources.

## Test structure rules:

1. Use `describe` blocks to group related tests.
2. Use `test` for individual test cases.
3. Use meaningful test descriptions that start with "should".
4. Follow the Arrange-Act-Assert pattern.
5. Use proper error handling and cleanup in tests.

## Code style examples as guidelines:

```ts
import { unlinkSync, writeFileSync } from "node:fs"
import { describe, expect, test } from "vitest"
import { exampleFunction } from "./example"

describe("exampleFunction", () => {
  test("should handle normal case correctly", () => {
    const input = "test input"
    const result = exampleFunction(input)
    expect(result).toBe("expected output")
  })

  test("should handle edge cases properly", () => {
    const edgeCaseInput = ""
    const result = exampleFunction(edgeCaseInput)
    expect(result).toBe("")
  })

  test("should clean up temporary resources", () => {
    const testFile = "test-temp.module.scss"
    const testContent = ".test { color: red; }"
    writeFileSync(testFile, testContent)

    try {
      const result = exampleFunction(testFile)
      expect(result).toContain("test")
    } finally {
      unlinkSync(testFile)
    }
  })
})
```

## Import and setup rules:

1. Import from `"vitest"` for testing utilities.
2. Use `node:fs` for file system operations in tests.
3. Follow the project's import alias rules.
4. Set up proper test isolation and cleanup.

## String template usage rules:

1. For long string templates used multiple times, define them as global const.
2. For short string templates, use plus operator to concat with proper newlines.
3. Avoid multi-line string templates that break code indentation structure.
4. Ensure proper spacing and newlines when concatenating strings.
5. Simplify testing code strings content by compressing multi-lines into single.
6. Ensure syntax correctness when simplifying CSS content.

## Test file naming:

1. Use `.test.ts` extension for test files.
2. Place test files alongside the code they test.
3. Follow the project's file structure conventions.
