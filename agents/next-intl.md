# Locale Guidelines

When coding with next-intl for locale support:

## You must follow those rules:

1. Use next-intl for all locale needs.
2. Support all locales defined in the supported locales list.
3. All UI text must be translated using next-intl hooks.
4. Use nested structure for organizing translations by feature areas.
5. Follow the schema defined in `src/lang.schema.json`.
6. Validate translation files against the schema before deployment.
7. Update the schema when adding new translation namespaces.

## Supported locales:

The application supports the following locales:

- `en` - English
- `zh` - Chinese (Simplified)

This list may be expanded in the future. When adding new locales, ensure all translation files are updated accordingly.

## Translation structure rules:

1. Create nested objects for different areas (e.g., `sidebar`, `settings`).
2. Use meaningful keys that describe the content.
3. Keep translations concise and context-appropriate.
4. Update all locale files simultaneously when adding new translations.

## Code usage examples:

```tsx
import { useTranslations } from "next-intl"

export function ExampleComponent() {
  const t = useTranslations("sidebar")

  return <div>{t("settings")}</div>
}

// In layout.tsx
export default function Layout({ children }: { children: ReactNode }) {
  const t = useTranslations("sidebar")

  return (
    <nav>
      <a href="/settings">{t("settings")}</a>
    </nav>
  )
}
```

## File structure:

```
src/locales/
├── en.json          # English translations
├── zh.json          # Chinese translations
└── (other languages)
```

## Translation file structure:

```json
{
  "meta": {
    "code": "en",
    "name": "English"
  },
  "sidebar": {
    "settings": "Settings",
    "dashboard": "Dashboard"
  },
  "settings": {
    "title": "Settings",
    "language": "Language"
  }
}
```
