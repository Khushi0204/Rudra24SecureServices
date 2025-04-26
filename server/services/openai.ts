import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "sk-placeholder-for-dev-mode" });

/**
 * Generates a security audit report based on the provided form data using OpenAI
 * @param formData The form data from the security audit form
 * @returns A security audit report
 */
export async function generateSecurityAuditReport(formData: any): Promise<string> {
  try {
    const propertyTypeMap: Record<string, string> = {
      residential: "Residential",
      commercial: "Commercial",
      industrial: "Industrial",
      retail: "Retail",
      other: "Other",
    };

    const securityConcernsMap: Record<string, string> = {
      theft: "Theft/Burglary",
      vandalism: "Vandalism",
      trespassing: "Trespassing",
      violence: "Violence/Assault",
      fire: "Fire Safety",
      cyber: "Cybersecurity",
      access: "Unauthorized Access",
      other: "Other Concerns",
    };

    const servicesMap: Record<string, string> = {
      guards: "Security Guards",
      surveillance: "Surveillance Systems",
      access: "Access Control Systems",
      alarm: "Alarm Systems",
      housekeeping: "Housekeeping Services",
      maintenance: "Property Maintenance",
      consulting: "Security Consulting",
      training: "Security Training",
    };

    // Map values to human-readable format
    const propertyType = propertyTypeMap[formData.propertyType] || formData.propertyType;
    const concerns = formData.concerns?.map((c: string) => securityConcernsMap[c] || c).join(", ") || "None specified";
    const services = formData.services?.map((s: string) => servicesMap[s] || s).join(", ") || "None specified";

    // Create a prompt for the OpenAI API
    const prompt = `
      Generate a professional security audit report for ${formData.fullName} based on the following information:
      
      PROPERTY INFORMATION:
      - Property Type: ${propertyType}
      - Property Size: ${formData.propertySize || "Not specified"} sq ft/m²
      - Address: ${formData.address}
      - Number of Regular Occupants: ${formData.occupants || "Not specified"}
      - Existing Security Systems: ${formData.existingSecurity || "None"}
      
      SECURITY CONCERNS:
      - Security Concerns: ${concerns}
      - Past Security Incidents: ${formData.securityIncidents || "None reported"}
      - Neighborhood Security Level: ${formData.neighborhoodSecurity || "Not specified"}
      
      SERVICE INTERESTS:
      - Services Interested In: ${services}
      - Budget Range: ${formData.budget || "Not specified"}
      - Implementation Timeline: ${formData.timeline || "Not specified"}
      
      FORMAT THE REPORT IN THE FOLLOWING SECTIONS:
      1. Executive Summary - Brief overview of key findings
      2. Property Security Assessment - Detailed analysis of current security status
      3. Vulnerabilities and Risks - Identification of security gaps and potential threats
      4. Recommendations - Specific, actionable recommendations prioritized by importance
      5. Implementation Plan - Suggested timeline and approach for implementing recommendations
      
      The report should be professional, detailed, and provide realistic, practical security recommendations based on the provided information. Use technical security terminology where appropriate.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Using the latest model
      messages: [
        { role: "system", content: "You are a professional security consultant with expertise in physical security, surveillance systems, and security auditing. Your task is to generate a comprehensive security audit report based on the provided information." },
        { role: "user", content: prompt }
      ],
      max_tokens: 2000,
    });

    return response.choices[0].message.content || "Unable to generate report. Please try again.";
  } catch (error) {
    console.error("Error generating security report:", error);
    throw new Error("Failed to generate security report");
  }
}
