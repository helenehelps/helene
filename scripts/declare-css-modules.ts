import chalk from "chalk"
import consola from "consola"
import { glob } from "glob"
import { SpawnOptionsWithoutStdio } from "node:child_process"
import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { compile as compileSass } from "sass"
import { root, run } from "./common"
import { aliasesFromTSConfig } from "./tsconfig-paths"

export function resolveCssModuleCode(file: string): string {
  if (file.endsWith(".module.css")) {
    return readFileSync(file, "utf-8").replace(/\/\*.*?\*\/|\/\/.*$/gs, "")
  } else if (file.endsWith(".module.scss") || file.endsWith(".module.sass")) {
    return compileSass(file).css.toString()
  }
  throw new Error(`unsupported css module file: ${file}`)
}

export function resolveCssModuleClasses(file: string): string[] {
  const code = resolveCssModuleCode(file)
  const classes = code.match(/\.([a-z][a-zA-Z0-9_]*)/g) || []
  return classes.map((match) => match.slice(1))
}

export function declareCssModules(
  pattern: string | string[],
  outfile: string,
  aliases?: Record<string, string>,
) {
  const codes = glob.sync(pattern, { absolute: true }).map((file) => {
    let relativePath = relative(dirname(outfile), file)
    if (aliases) {
      for (const [alias, path] of Object.entries(aliases)) {
        if (relativePath.startsWith(path)) {
          relativePath = relativePath.replace(path, alias)
          break
        }
      }
    }
    const classes = resolveCssModuleClasses(file)
    consola.success(`css module resolved: ${chalk.dim(relativePath)}`)
    return (
      `declare module "${relativePath}" {\n` +
      classes.map((name) => `  export const ${name}: string`).join("\n") +
      "\n}"
    )
  })
  writeFileSync(outfile, codes.join("\n\n") + "\n")
  consola.success(`all css modules declared: ${chalk.dim(outfile)}`)
}

export function cleanCssModuleDeclare(file: string) {
  if (existsSync(file)) {
    consola.warn(`clean existing css module declare file: ${chalk.dim(file)}`)
    rmSync(file)
  }
}

export const defaultPattern = join(root, "src/**/*.module.scss")
export const defaultDeclareFile = join(root, "next-css.d.ts")

export async function runWithCssModuleDeclare(
  command: string,
  {
    pattern = defaultPattern,
    outfile = defaultDeclareFile,
    aliases = aliasesFromTSConfig(root, "tsconfig.json"),
    ...options
  }: SpawnOptionsWithoutStdio & {
    pattern?: string | string[]
    outfile?: string
    aliases?: Record<string, string>
  },
) {
  if (existsSync(outfile)) {
    consola.warn(`override existing css module declare: ${chalk.dim(outfile)}`)
  }
  declareCssModules(pattern, outfile, aliases)
  await run(command, options)
  if (existsSync(outfile)) {
    rmSync(outfile)
    consola.success(`css module declare file removed: ${chalk.dim(outfile)}`)
  }
}
