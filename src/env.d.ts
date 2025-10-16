import { formats } from "@/lang.request"
import messages from "@locales/en.json"

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof messages
    Formats: typeof formats
  }
}

declare module "react" {
  // Allow custom css variables in React CSS in TSX.
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

export {}
