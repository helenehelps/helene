import consola from "consola"
import { run } from "./common"

const devEnv = ".env.development"
const services = ["cache", "storage", "objects"]
await run(`docker compose --env-file ${devEnv} up -d ${services.join(" ")}`)
consola.success("database for dev started")
