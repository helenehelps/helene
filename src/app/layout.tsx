import "@app/root.scss"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Helene Helps",
  description: "Human-friendly Encapsulated Learnable Network for Eudemonia.",
}

export default function ({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
