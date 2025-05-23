import { apiRequest } from "./queryClient";

/**
 * Generate a security survey report using our custom implementation
 * @param formData The form data to generate the report from
 */
export const generateSecurityReport = async (formData: any) => {
  try {
    const response = await apiRequest(
      "POST",
      "/api/generate-report",
      formData
    );
    return await response.json();
  } catch (error) {
    console.error("Error generating report:", error);
    throw error;
  }
};
