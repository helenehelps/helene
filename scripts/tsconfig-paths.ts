import { readFileSync } from "node:fs"
import { dirname, join, normalize, relative, resolve } from "node:path"
import stripJsonComments from "strip-json-comments"

export function aliasesFromTSConfig(root: string, file: string) {
  file = resolve(root, file)
  const manifest = JSON.parse(stripJsonComments(readFileSync(file, "utf-8")))
  const paths = manifest.compilerOptions.paths as Record<string, string[]>
  const baseUri = resolve(dirname(file), manifest.compilerOptions.baseUrl)
  const base = relative(root, baseUri)
  return Object.fromEntries(
    Object.entries(paths)
      .map(([k, v]) => [k.replace("/*", ""), v[0].replace("/*", "")])
      .map(([k, v]) => [k, normalize(join(base, v))]),
  )
}
