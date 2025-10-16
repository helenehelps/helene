import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
}

export default createNextIntlPlugin("./src/lang.request.ts")(nextConfig)
