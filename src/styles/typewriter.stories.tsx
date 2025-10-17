import { typewriter } from "@/styles/typewriter.module.scss"
import { capitalCase } from "@/utils/format"
import { Meta, StoryObj } from "@storybook/nextjs-vite"
import { CSSProperties } from "react"

const meta = {} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const text = capitalCase("typewriter example")

export const Default: Story = {
  render: () => {
    const styles: CSSProperties = { "--typewriter-steps": text.length }
    return (
      <div className={typewriter} style={styles}>
        {text}
      </div>
    )
  },
}

export const FastTyping: Story = {
  render: () => {
    const styles: CSSProperties = {
      "--typewriter-steps": 20,
      "--typewriter-duration": "1s",
    }
    return (
      <div className={typewriter} style={styles}>
        Fast typing animation
      </div>
    )
  },
}

export const SlowTyping: Story = {
  render: () => {
    const styles: CSSProperties = {
      "--typewriter-steps": 20,
      "--typewriter-duration": "5s",
    }
    return (
      <div className={typewriter} style={styles}>
        Slow typing animation
      </div>
    )
  },
}

export const DelayedStart: Story = {
  render: () => {
    const styles: CSSProperties = {
      "--typewriter-steps": 20,
      "--typewriter-delay": "2s",
    }
    return (
      <div className={typewriter} style={styles}>
        Delayed start animation
      </div>
    )
  },
}

export const SlowFadeIn: Story = {
  render: () => {
    const styles: CSSProperties = {
      "--typewriter-steps": 20,
      "--typewriter-fade-duration": "2s",
    }
    return (
      <div className={typewriter} style={styles}>
        Slow fade-in animation
      </div>
    )
  },
}

export const LongText: Story = {
  render: () => {
    const styles: CSSProperties = { "--typewriter-steps": 100 }
    return (
      <div className={typewriter} style={styles}>
        This is a much longer text that demonstrates how the typewriter effect
        works with multiple lines of content and shows the smooth animation flow
        on more than a single line.
      </div>
    )
  },
}
