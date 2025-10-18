import "@/app/root.scss"
import { Metadata } from "next"
import { getLocale } from "next-intl/server"
import { ReactNode } from "react"

/**
 * Root layout component for the application.
 *
 * 1. Sets up HTML structure with language attribute.
 * 2. Provides metadata for SEO and accessibility.
 * 3. Supports locale with dynamic locale detection.
 * 4. Includes global styles and theme configuration.
 *
 * @param children The application content to render.
 * @returns The root HTML structure with proper language attribute.
 */
export default async function ({ children }: { children: ReactNode }) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Helene Helps",
  description: "Human-friendly Encapsulated Learnable Network for Eudemonia.",
}
