import { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect, within } from "storybook/internal/test"
import utils from "./utils.module.scss"

const meta = {} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const text = "Placeholder"

export const Default: Story = {
  render: () => <div className={utils.placeholder}>{text}</div>,
}

Default.play = async function ({
  canvasElement,
}: Readonly<{ canvasElement: HTMLElement }>) {
  const canvas = within(canvasElement)
  const placeholder = canvas.getByText(text)
  expect(placeholder).toBeInTheDocument()
}
