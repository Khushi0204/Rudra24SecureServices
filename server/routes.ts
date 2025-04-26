import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSchema, insertSecurityReportSchema, insertCareerApplicationSchema } from "@shared/schema";
import { generateSecurityAuditReport } from "./services/openai";
import { sendEmail } from "./services/email";
import { upload } from "./services/upload";
import path from "path";
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

  // Career application form with resume upload
  app.post("/api/careers/apply", upload.single('resume'), async (req, res) => {
    try {
      // Resume file is available as req.file
      const file = req.file;
      const formData = req.body;
      
      if (!formData.fullName || !formData.email || !formData.phone || !formData.position) {
        // If there's a file uploaded and validation fails, delete it
        if (file) {
          await import('fs').then(fs => fs.promises.unlink(file.path));
        }
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Create application data object
      const applicationData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience ? parseInt(formData.experience) : null,
        resumePath: file ? file.path : null,
        coverLetter: formData.coverLetter || null
      };
      
      // Validate using Zod schema
      const validatedData = insertCareerApplicationSchema.parse(applicationData);
      
      // Store the application in the database
      const application = await storage.createCareerApplication(validatedData);
      
      // Send email notification about the career application
      await sendEmail({
        to: "careers@secureguardservices.com", // Company's careers email address
        subject: `New Career Application: ${applicationData.position}`,
        text: `
          Name: ${applicationData.fullName}
          Email: ${applicationData.email}
          Phone: ${applicationData.phone}
          Position: ${applicationData.position}
          Experience: ${applicationData.experience || "Not specified"} years
          Cover Letter: ${applicationData.coverLetter || "Not provided"}
          Resume: ${file ? "Attached" : "Not provided"}
        `,
        html: `
          <div>
            <h2>New Career Application</h2>
            <p><strong>Name:</strong> ${applicationData.fullName}</p>
            <p><strong>Email:</strong> ${applicationData.email}</p>
            <p><strong>Phone:</strong> ${applicationData.phone}</p>
            <p><strong>Position:</strong> ${applicationData.position}</p>
            <p><strong>Experience:</strong> ${applicationData.experience || "Not specified"} years</p>
            ${applicationData.coverLetter ? `
              <p><strong>Cover Letter:</strong></p>
              <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
                ${applicationData.coverLetter}
              </div>
            ` : ''}
            <p><strong>Resume:</strong> ${file ? "Attached" : "Not provided"}</p>
          </div>
        `,
      });
      
      res.status(201).json({ message: "Application submitted successfully" });
    } catch (error) {
      console.error("Error submitting career application:", error);
      
      // Clean up uploaded file if there was an error
      if (req.file && req.file.path) {
        await import('fs').then(fs => fs.promises.unlink(req.file!.path).catch(() => {}));
      }
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid form data", errors: error.flatten() });
      }
      res.status(500).json({ message: "Failed to submit application" });
    }
  });

  // Serve uploaded files
  app.get("/uploads/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(process.cwd(), 'uploads', filename);
    res.sendFile(filePath);
  });

  const httpServer = createServer(app);

  return httpServer;
}
