import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  plan: text("plan").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Schemas for insertion
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  name: true,
  email: true,
  plan: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export const insertNewsletterSchema = createInsertSchema(newsletters).pick({
  email: true,
});

// Types for insertion
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;

// Types for selection
export type User = typeof users.$inferSelect;
export type Subscriber = typeof subscribers.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type Newsletter = typeof newsletters.$inferSelect;
