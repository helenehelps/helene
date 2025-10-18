import consola from "consola"
import { run } from "./common"
import { prepareAgents } from "./gen-rules"

async function main() {
  consola.start("running postinstall script...")

  // Prepare agent files for AI coding tools.
  prepareAgents({
    sourcePattern: "agents/**/*.md",
    targetDirs: [".roo/rules"],
    outputFiles: ["CLAUDE.md", "QWEN.md"],
    showBox: false,
  })

  // Install playwright browsers.
  consola.start("installing playwright browsers...")
  await run("playwright install")
  consola.success("playwright browsers installed")

  consola.success("postinstall script completed")
}

await main()
