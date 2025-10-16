import { withThemeByDataAttribute } from "@storybook/addon-themes"
import type { Preview } from "@storybook/nextjs-vite"
import "../src/app/root.scss"
import "./decorator.scss"

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: { system: "system", light: "light", dark: "dark" },
      defaultTheme: "system",
      attributeName: "data-theme",
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "todo" },
  },
}

export default preview
