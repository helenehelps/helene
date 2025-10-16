import type { StorybookConfig } from "@storybook/nextjs-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
}

export default config
