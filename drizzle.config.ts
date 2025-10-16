import { config } from "dotenv"
import { defineConfig } from "drizzle-kit"

config({ path: ".env.development" })
config()

export default defineConfig({
  dialect: "postgresql",
  schema: "src/database/**/*.schema.ts",
  out: ".migrate",
  dbCredentials: { url: process.env["DATABASE_URL"]! },
})
