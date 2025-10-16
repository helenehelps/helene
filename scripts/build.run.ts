import consola from "consola"
import { existsSync, rmSync } from "node:fs"
import { resolve } from "node:path"
import {
  aliases,
  declareFile as cssModuleDeclareFile,
  declareCssModules,
  pattern,
} from "./declare-css-modules"
import { run } from "./utils"

/**
 * Declare css modules before build,
 * and remove after build to avoid conflict with the
 * `typescript-plugin-css-modules` plugin for code analysis.
 */
async function main() {
  const root = resolve(import.meta.dirname, "..")
  declareCssModules(pattern, cssModuleDeclareFile, aliases)
  await run("next build --turbo", { cwd: root })
  if (existsSync(cssModuleDeclareFile)) {
    rmSync(cssModuleDeclareFile)
    consola.success(`css module declare file removed: ${cssModuleDeclareFile}`)
  }
}
main()
