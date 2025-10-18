import { unlinkSync, writeFileSync } from "node:fs"
import { describe, expect, test } from "vitest"
import { resolveCssModuleClasses } from "./declare-css-modules"

describe("resolveCssModuleClasses", () => {
  test("should remove duplicate class names", () => {
    // Create test SCSS content with duplicate class names.
    const testScssContent =
      ".container { display: flex; }\n" +
      ".container { width: 100%; }\n" +
      ".button { background: blue; }\n" +
      ".button:hover { background: darkblue; }\n" +
      ".button { color: white; }"

    // Create temporary file for testing.
    const testFile = "test-duplicate.module.scss"
    writeFileSync(testFile, testScssContent)

    try {
      const classes = resolveCssModuleClasses(testFile)

      // Verify the results.
      expect(classes).toHaveLength(2)
      expect(classes).toContain("container")
      expect(classes).toContain("button")
      expect(classes).toEqual(["container", "button"])
    } finally {
      // Clean up temporary file.
      unlinkSync(testFile)
    }
  })

  test("should handle empty CSS content", () => {
    const testFile = "test-empty.module.scss"
    writeFileSync(testFile, "")

    try {
      const classes = resolveCssModuleClasses(testFile)
      expect(classes).toHaveLength(0)
      expect(classes).toEqual([])
    } finally {
      unlinkSync(testFile)
    }
  })

  test("should handle CSS with no classes", () => {
    const testScssContent =
      "/* This is a comment */\n" +
      ":root { --primary-color: #007bff; }\n" +
      "@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }"

    const testFile = "test-no-classes.module.scss"
    writeFileSync(testFile, testScssContent)

    try {
      const classes = resolveCssModuleClasses(testFile)
      expect(classes).toHaveLength(0)
      expect(classes).toEqual([])
    } finally {
      unlinkSync(testFile)
    }
  })
})
