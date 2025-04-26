import { apiRequest } from "./queryClient";

/**
 * Send an email with the security report
 * @param emailData The data to send in the email
 */
export const sendReportEmail = async (emailData: {
  to: string;
  subject: string;
  reportId: string;
  name: string;
}) => {
  try {
    const response = await apiRequest(
      "POST",
      "/api/send-report",
      emailData
    );
    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
