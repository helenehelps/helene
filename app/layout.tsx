import "@app/root.scss"
import { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Helene",
  description: "Helene helps you to focus on your idea flow.",
}

export default function ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
