# Language Guidelines

## General Language Rules:

1. Code and comments must be written in English.
2. Use bilingual format for issue, PR, and commit messages.
3. Detect user's language from input automatically.
4. Use `---` separator between language versions.

## Bilingual Output Rules:

1. **When to generate bilingual output**:
   - Generate bilingual output only when user's language is not English
   - When user uses English, generate only English version
   - AI must automatically detect user's language from their input

2. **Format requirements**:
   - Write content in English first
   - Append user's language version after `---` separator
   - Do not use section headers like "中文版本" or similar
   - Use only `---` as separator between versions

3. **Language detection**:
   - AI must analyze user's input language automatically
   - Do not rely on configuration files or settings
   - Base detection on the actual language used in user's request
