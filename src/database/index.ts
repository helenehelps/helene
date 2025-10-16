import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

function loadDatabaseURL(envName: string): string {
  // Don't explicitly import "node:process", only process.env can be replaced.
  const databaseURL = process.env[envName]
  if (!databaseURL) {
    throw new Error(`cannot find ${envName} in env`)
  }
  return databaseURL
}

export const database = drizzle(postgres(loadDatabaseURL("DATABASE_URL")))
export type Database = typeof database
