import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import { join } from "node:path"
import { defineConfig, defineProject } from "vitest/config"

const root = import.meta.dirname

const storybookProject = defineProject({
  plugins: [storybookTest({ configDir: join(root, ".storybook") })],
  test: {
    name: "storybook",
    browser: {
      enabled: true,
      headless: true,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
    },
    setupFiles: [".storybook/vitest.setup.ts"],
  },
})

export default defineConfig({
  test: { projects: [{ extends: true, ...storybookProject }] },
})
