import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {}

export default createNextIntlPlugin("./app/lang.request.ts")(nextConfig)
