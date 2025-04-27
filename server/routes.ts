import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSchema, insertSecurityReportSchema, insertCareerApplicationSchema, insertClientFeedbackSchema } from "@shared/schema";
import { generateSecuritySurveyReport } from "./services/openai";
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
      const reportContent = await generateSecuritySurveyReport(formData);
      
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
        subject: subject || "Your Rudra 24 Security Survey Report",
        text: `Hello ${name},\n\nThank you for completing the security survey. Here is your personalized security report:\n\n${report.reportContent}\n\nBest regards,\nRudra 24 Secure`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
            <div style="background-color: #0f2b5b; padding: 20px; text-align: center;">
              <h1 style="color: #f0c14b; margin: 0;">Your Security Survey Report</h1>
            </div>
            <div style="padding: 20px; border: 1px solid #e0e0e0; border-top: none;">
              <h2 style="color: #0f2b5b;">Hello ${name},</h2>
              <p>Thank you for completing the security survey. Here is your personalized security report:</p>
              <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                ${report.reportContent.split('\n').map(line => `<p>${line}</p>`).join('')}
              </div>
              <p>Best regards,<br>Rudra 24 Secure Team</p>
            </div>
            <div style="background-color: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #666;">
              <p>Rudra 24 Secure Services Private Limited</p>
              <p>Professional Security & Housekeeping</p>
            </div>
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
      const adminEmails = req.body.adminEmails || ["rudra24securegroup@gmail.com", "rudra24securepl@gmail.com"];
      
      // Store the contact submission
      const contact = await storage.createContact(contactData);
      
      // Send email notification about the contact to admin emails
      for (const adminEmail of adminEmails) {
        await sendEmail({
          to: adminEmail,
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
      }
      
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
      const adminEmails = formData.adminEmails ? 
        JSON.parse(formData.adminEmails) : 
        ["rudra24securegroup@gmail.com", "rudra24securepl@gmail.com"];
      
      for (const adminEmail of adminEmails) {
        await sendEmail({
          to: adminEmail,
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
      }
      
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

  // Client feedback submission
  app.post("/api/submit-feedback", async (req, res) => {
    try {
      const feedbackData = insertClientFeedbackSchema.parse(req.body);
      
      // Store the feedback in the database
      const feedback = await storage.createClientFeedback(feedbackData);
      
      // If feedback is associated with a report, find the report
      let reportOwnerEmail = null;
      let reportOwnerName = null;
      
      if (feedbackData.reportId) {
        const report = await storage.getReportByReportId(feedbackData.reportId);
        if (report) {
          reportOwnerEmail = report.email;
          reportOwnerName = report.fullName;
        }
      }
      
      // Send email notification about the feedback to company
      const adminEmails = req.body.adminEmails || ["rudra24securegroup@gmail.com", "rudra24securepl@gmail.com"];
      
      for (const adminEmail of Array.isArray(adminEmails) ? adminEmails : [adminEmails]) {
        await sendEmail({
          to: adminEmail,
          subject: `New Client Feedback: ${feedbackData.rating}/5 Stars`,
          text: `
            Name: ${feedbackData.name}
            Email: ${feedbackData.email}
            Overall Rating: ${feedbackData.rating}/5
            Service Quality: ${feedbackData.serviceQuality}/5
            Report Quality: ${feedbackData.reportQuality}/5
            Report ID: ${feedbackData.reportId || "Not specified"}
            Comments: ${feedbackData.comment}
          `,
          html: `
            <div>
              <h2>New Client Feedback</h2>
              <p><strong>Name:</strong> ${feedbackData.name}</p>
              <p><strong>Email:</strong> ${feedbackData.email}</p>
              <p><strong>Overall Rating:</strong> ${feedbackData.rating}/5</p>
              <p><strong>Service Quality:</strong> ${feedbackData.serviceQuality}/5</p>
              <p><strong>Report Quality:</strong> ${feedbackData.reportQuality}/5</p>
              <p><strong>Report ID:</strong> ${feedbackData.reportId || "Not specified"}</p>
              <p><strong>Comments:</strong></p>
              <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
                ${feedbackData.comment}
              </div>
            </div>
          `,
        });
      }
      
      // If we found the report owner, thank them for their feedback
      if (reportOwnerEmail && reportOwnerName) {
        await sendEmail({
          to: reportOwnerEmail,
          subject: "Thank You for Your Feedback - Rudra 24 Secure",
          text: `
            Dear ${reportOwnerName},
            
            Thank you for providing feedback on our security survey services. We greatly appreciate your input as it helps us improve our services.
            
            Your feedback has been recorded and our team will review it shortly. If you have additional comments or questions, please feel free to contact us.
            
            Best regards,
            The Rudra 24 Secure Team
          `,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #0f2b5b; padding: 20px; text-align: center;">
                <h1 style="color: #f0c14b; margin: 0;">Thank You for Your Feedback</h1>
              </div>
              <div style="padding: 20px; border: 1px solid #e0e0e0; border-top: none;">
                <p>Dear ${reportOwnerName},</p>
                <p>Thank you for providing feedback on our security survey services. We greatly appreciate your input as it helps us improve our services.</p>
                <p>Your feedback has been recorded and our team will review it shortly. If you have additional comments or questions, please feel free to contact us.</p>
                <p>Best regards,<br>The Rudra 24 Secure Team</p>
              </div>
              <div style="background-color: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #666;">
                <p>Rudra 24 Secure Services Private Limited</p>
                <p>Professional Security & Housekeeping</p>
              </div>
            </div>
          `,
        });
      }
      
      res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid form data", errors: error.flatten() });
      }
      res.status(500).json({ message: "Failed to submit feedback" });
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
