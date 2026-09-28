import { index, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const contactMessagesTable = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  requestId: varchar("request_id", { length: 36 }).notNull().unique(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 254 }).notNull(),
  company: varchar("company", { length: 160 }),
  message: text("message").notNull(),
  ipHash: varchar("ip_hash", { length: 64 }).notNull(),
  emailHash: varchar("email_hash", { length: 64 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  notificationSentAt: timestamp("notification_sent_at", { withTimezone: true }),
}, (table) => [
  index("contact_messages_ip_created_idx").on(table.ipHash, table.createdAt),
  index("contact_messages_email_created_idx").on(table.emailHash, table.createdAt),
]);

export const insertContactMessageSchema = createInsertSchema(contactMessagesTable).omit({
  id: true,
  createdAt: true,
  notificationSentAt: true,
});
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessagesTable.$inferSelect;