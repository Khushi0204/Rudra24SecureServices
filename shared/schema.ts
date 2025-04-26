import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  phone: true,
  subject: true,
  message: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Security audit reports
export const securityReports = pgTable("security_reports", {
  id: serial("id").primaryKey(),
  reportId: text("report_id").notNull().unique(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  formData: jsonb("form_data").notNull(),
  reportContent: text("report_content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSecurityReportSchema = createInsertSchema(securityReports).pick({
  reportId: true,
  fullName: true,
  email: true,
  phone: true,
  formData: true,
  reportContent: true,
});

export type InsertSecurityReport = z.infer<typeof insertSecurityReportSchema>;
export type SecurityReport = typeof securityReports.$inferSelect;

// Career application schema
export const careerApplications = pgTable("career_applications", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  position: text("position").notNull(),
  experience: integer("experience"),
  resumePath: text("resume_path"),
  coverLetter: text("cover_letter"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCareerApplicationSchema = createInsertSchema(careerApplications).pick({
  fullName: true,
  email: true,
  phone: true,
  position: true,
  experience: true,
  resumePath: true,
  coverLetter: true,
});

export type InsertCareerApplication = z.infer<typeof insertCareerApplicationSchema>;
export type CareerApplication = typeof careerApplications.$inferSelect;

// Client feedback schema
export const clientFeedback = pgTable("client_feedback", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  rating: text("rating").notNull(),
  serviceQuality: text("service_quality").notNull(),
  reportQuality: text("report_quality").notNull(),
  comment: text("comment").notNull(),
  reportId: text("report_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertClientFeedbackSchema = createInsertSchema(clientFeedback).pick({
  name: true,
  email: true,
  rating: true,
  serviceQuality: true,
  reportQuality: true,
  comment: true,
  reportId: true,
});

export type InsertClientFeedback = z.infer<typeof insertClientFeedbackSchema>;
export type ClientFeedback = typeof clientFeedback.$inferSelect;
