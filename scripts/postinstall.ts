import consola from "consola"
import { run } from "./common"
import { prepareAgents, defaultAgentConfig } from "./gen-rules"

async function main() {
  consola.start("running postinstall script...")

  // Prepare agent files for AI coding tools.
  prepareAgents({
    ...defaultAgentConfig,
    showBox: false,
  })

  // Install playwright browsers.
  consola.start("installing playwright browsers...")
  await run("playwright install")
  consola.success("playwright browsers installed")

  consola.success("postinstall script completed")
}

await main()
