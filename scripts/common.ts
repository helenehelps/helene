import { spawn, SpawnOptionsWithoutStdio } from "node:child_process"
import { resolve } from "node:path"
import { stdout } from "node:process"

/**
 * Run a shell command, redirect stdout and stderr.
 *
 * The `shell` mode will be enabled by default.
 * You can disable it by
 * setting the {@link options}'s `shell` to `false`,
 * but it is not recommended.
 *
 * @param command the command to run.
 * @param options the options to pass to spawn
 * @returns the exit code of the command.
 */
export function run(
  command: string,
  options?: SpawnOptionsWithoutStdio,
): Promise<number> {
  return new Promise((resolve, reject) => {
    const p = spawn(command, { shell: true, cwd: root, ...options })
    p.stdout.on("data", (data) => stdout.write(data))
    p.stderr.on("data", (data) => stdout.write(data))
    p.on("disconnect", () => reject(new Error(`disconnected: ${command}`)))
    p.on("close", (code) => {
      return code === 0
        ? resolve(code)
        : reject(new Error(`command failed (${code}): ${command}`))
    })
  })
}

/** Root of current package (workspace). */
export const root = resolve(import.meta.dirname, "..")
