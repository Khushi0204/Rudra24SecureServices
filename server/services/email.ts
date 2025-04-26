import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

/**
 * Configures and returns a nodemailer transporter
 * In production, you would use real SMTP credentials
 */
function getTransporter() {
  // For development/testing, use a test account or console output
  if (process.env.NODE_ENV === "development" || !process.env.SMTP_HOST) {
    console.log("Email sending is simulated in development environment");
    
    // Create a preview-only transporter that logs to console
    return nodemailer.createTransport({
      streamTransport: true,
      newline: "unix",
      buffer: true,
    });
  }
  
  // For production, use real SMTP credentials
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

/**
 * Sends an email using nodemailer
 * @param options Email options including recipient, subject, and content
 */
export async function sendEmail(options: EmailOptions): Promise<void> {
  try {
    const transporter = getTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || "info@secureguardservices.com",
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    // Log info for development environments
    if (process.env.NODE_ENV === "development") {
      console.log("Email sent (development mode):");
      console.log("----- Email Content -----");
      console.log(`To: ${options.to}`);
      console.log(`Subject: ${options.subject}`);
      console.log(options.text);
      console.log("----- End Email Content -----");
    } else {
      console.log("Email sent:", info.messageId);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
