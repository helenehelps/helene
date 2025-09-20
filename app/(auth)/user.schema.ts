import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

const userState = ["active", "banned", "deactivated"] as const
export type UserState = (typeof userState)[number]

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  email: text("state", { enum: userState }).notNull().default("active"),
  createTime: timestamp("create_time").notNull().defaultNow(),
  updateTime: timestamp("update_time").notNull().defaultNow(),
})
