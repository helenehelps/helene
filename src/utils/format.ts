export function capitalCase(raw: string): string {
  if (raw.length === 0) return ""
  return raw.charAt(0).toUpperCase() + raw.slice(1)
}
