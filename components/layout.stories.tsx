import layout from "@components/layout.module.scss"
import { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect, within } from "storybook/internal/test"

const meta = {} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const text = "Placeholder"

export const Default: Story = {
  render: () => (
    <div className={[layout.container, layout.center].join(" ")}>{text}</div>
  ),
}

Default.play = async function ({
  canvasElement,
}: Readonly<{ canvasElement: HTMLElement }>) {
  const canvas = within(canvasElement)
  const placeholder = canvas.getByText(text)
  expect(placeholder).toBeInTheDocument()
}
