import "@app/root.scss"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Helene",
  description: "Helene helps you to focus on your idea flow.",
}

export default function ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
