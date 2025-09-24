import declareScssModules from "@scripts/scss-module-dts"
import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

function withPlugins(
  config: NextConfig & {
    preprocesses?: (() => void)[]
    functionPlugins?: ((nextConfig: NextConfig) => NextConfig)[]
  },
) {
  const { preprocesses, functionPlugins, ...rest } = config
  let nextConfig = rest
  const plugins = functionPlugins || []
  for (const plugin of plugins) nextConfig = plugin(nextConfig)
  for (const preprocess of preprocesses || []) preprocess()
  return nextConfig
}

// export default createNextIntlPlugin("./app/lang.request.ts")(nextConfig)
export default withPlugins({
  preprocesses: [declareScssModules],
  functionPlugins: [createNextIntlPlugin("./app/lang.request.ts")],
})
