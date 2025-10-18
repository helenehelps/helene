# Language Guidelines

## General Language Rules:

1. Code and comments must be written in English.
2. Use bilingual format for issue, PR, and commit messages.
3. Detect user's language from input automatically.
4. Use `---` separator between language versions.

## Bilingual Output Rules:

1. **When to generate bilingual output**:
   - Generate bilingual output only when user's input language is not English
   - When user input is in English, generate only English version
   - AI must detect user's input language from the actual request content
   - Do not use tool configuration or default language settings

2. **Format requirements**:
   - Write content in English first
   - Append user's input language version after `---` separator
   - Do not use section headers for language versions
   - Use only `---` as separator between versions

3. **Language detection**:
   - AI must analyze user's input language automatically from request content
   - Do not rely on configuration files, settings, or tool defaults
   - Base detection on the actual language used in user's request
   - When user request uses English → Generate English only output
   - When user request uses non-English language
     → Generate English + user input language output
   - Use `---` separator between English and user input language versions
