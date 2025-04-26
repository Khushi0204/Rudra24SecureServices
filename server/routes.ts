import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSchema, insertSecurityReportSchema } from "@shared/schema";
import { generateSecurityAuditReport } from "./services/openai";
import { sendEmail } from "./services/email";
import { nanoid } from "nanoid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Generate security report using OpenAI
  app.post("/api/generate-report", async (req, res) => {
    try {
      const formData = req.body;
      
      // Validate required fields
      if (!formData.fullName || !formData.email || !formData.phone) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Generate report
      const reportContent = await generateSecurityAuditReport(formData);
      
      // Create a unique report ID
      const reportId = nanoid(10);
      
      // Store the report in the database
      const report = await storage.createSecurityReport({
        reportId,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        formData,
        reportContent,
      });
      
      res.status(201).json({ 
        message: "Report generated successfully", 
        reportId: report.reportId,
      });
    } catch (error) {
      console.error("Error generating report:", error);
      res.status(500).json({ message: "Failed to generate report" });
    }
  });

  // Send email with report
  app.post("/api/send-report", async (req, res) => {
    try {
      const { to, subject, reportId, name } = req.body;
      
      // Validate required fields
      if (!to || !reportId || !name) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Get the report from the database
      const report = await storage.getReportByReportId(reportId);
      
      if (!report) {
        return res.status(404).json({ message: "Report not found" });
      }
      
      // Send email with the report
      await sendEmail({
        to,
        subject: subject || "Your SecureGuard Security Audit Report",
        text: `Hello ${name},\n\nThank you for completing the security audit. Here is your personalized security report:\n\n${report.reportContent}\n\nBest regards,\nSecureGuard Services`,
        html: `
          <div>
            <h2>Hello ${name},</h2>
            <p>Thank you for completing the security audit. Here is your personalized security report:</p>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
              ${report.reportContent.split('\n').map(line => `<p>${line}</p>`).join('')}
            </div>
            <p>Best regards,<br>SecureGuard Services</p>
          </div>
        `,
      });
      
      res.status(200).json({ message: "Report sent successfully" });
    } catch (error) {
      console.error("Error sending report:", error);
      res.status(500).json({ message: "Failed to send report" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const contact = await storage.createContact(contactData);
      
      // Send email notification about the contact
      await sendEmail({
        to: "info@secureguardservices.com", // Company's email address
        subject: `New Contact Form Submission: ${contactData.subject}`,
        text: `
          Name: ${contactData.name}
          Email: ${contactData.email}
          Phone: ${contactData.phone || "Not provided"}
          Subject: ${contactData.subject}
          Message: ${contactData.message}
        `,
        html: `
          <div>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Phone:</strong> ${contactData.phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${contactData.message}</p>
          </div>
        `,
      });
      
      res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid form data", errors: error.flatten() });
      }
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
