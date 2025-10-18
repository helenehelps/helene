import { getRequestConfig } from "next-intl/server"
import { headers } from "next/headers"

/**
 * Configure next-intl with dynamic locale detection.
 *
 * 1. Detects locale from Accept-Language header.
 * 2. Falls back to English if no supported locale is detected.
 * 3. Supports both Chinese (zh) and English (en) locales.
 * 4. Loads appropriate translation messages for the detected locale.
 *
 * @returns Configuration object with locale and messages.
 */
export default getRequestConfig(async () => {
  const headersList = await headers()
  const acceptLanguage = headersList.get("accept-language")
  let locale = "en"

  // Detect locale from Accept-Language header
  if (acceptLanguage?.includes("zh")) {
    locale = "zh"
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  }
})
