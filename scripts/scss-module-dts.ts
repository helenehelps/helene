import { GlobOptionsWithFileTypesUnset, globSync } from "glob"
import { createWriteStream, writeFileSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { cwd } from "node:process"
import { compile } from "sass"

/**
 * 1. It will not resolve comments.
 * 2. It will only resolve classes.
 * 3. "-" in classname is not supported.
 */
export function generateCssModuleDeclare(
  css: string,
  path: string,
  aliases: Record<string, string> = {},
) {
  const classes = css.match(/\.([a-zA-Z0-9]+)/g)?.map((m) => m.slice(1)) || []
  const content = classes.map((c) => `export const ${c}: string; `)
  for (const alias of Object.keys(aliases)) {
    if (path.startsWith(alias)) path = path.replace(alias, aliases[alias])
  }
  return `declare module "${path}" { ${content.join("")}}`
}

export function declareScssModules(
  pattern: string | string[],
  options?: GlobOptionsWithFileTypesUnset & {
    dts?: string
    encoding?: BufferEncoding
    aliases?: Record<string, string>
  },
) {
  const root = options?.root || cwd()
  const dts = options?.dts ?? join(root, "scss.d.ts")

  writeFileSync(dts, "")
  const out = createWriteStream(dts, {
    flags: "a",
    encoding: options?.encoding ?? "utf8",
  })

  for (const file of globSync(pattern, options)) {
    const path = join(root, file)
    const relativePath = relative(dirname(dts), path)
    const code = generateCssModuleDeclare(
      compile(path).css,
      relativePath,
      options?.aliases,
    )
    out.write(code + "\n")
  }
  out.close()
}

export default function () {
  const root = cwd()
  const files = ["app", "components"].map((name) => `${name}/**/*.module.scss`)
  declareScssModules(files, {
    root,
    dts: join(root, "next-scss.d.ts"),
    aliases: { app: "@app", components: "@components" },
  })
}
