import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import ClientFeedbackForm from "@/components/audit/ClientFeedbackForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareHeart, StarIcon } from "lucide-react";

export default function ClientFeedbackPage() {
  const { t } = useTranslation();
  const [location] = useLocation();
  
  // Extract reportId from URL if present
  // Example: /feedback?reportId=abc123
  const params = new URLSearchParams(location.split("?")[1]);
  const reportId = params.get("reportId") || "";
  
  // Update page title
  useEffect(() => {
    document.title = `${t('feedback.title')} | Rudra 24 Secure`;
  }, [t]);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2 flex items-center justify-center">
            <MessageSquareHeart className="mr-2 text-yellow-500" />
            {t('feedback.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('feedback.subtitle')}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <ClientFeedbackForm reportId={reportId} />
        </div>
        
        <Card className="border-t-4 border-t-blue-700 shadow-md">
          <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <CardTitle className="flex items-center">
              <StarIcon className="mr-2 text-yellow-500" />
              Why Your Feedback Matters
            </CardTitle>
            <CardDescription className="text-gray-200">
              Help us continue improving our services
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <h3 className="text-lg font-medium mb-2 text-blue-800">Service Improvement</h3>
                <p className="text-gray-600">
                  Your feedback helps us identify areas where we can enhance our security and housekeeping services to better meet your needs.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-medium mb-2 text-blue-800">Quality Assurance</h3>
                <p className="text-gray-600">
                  We're committed to maintaining the highest standards of service. Your feedback is essential for our quality control process.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-medium mb-2 text-blue-800">Team Recognition</h3>
                <p className="text-gray-600">
                  Positive feedback allows us to recognize and reward our team members who've provided exceptional service.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-medium mb-2 text-blue-800">Building Relationships</h3>
                <p className="text-gray-600">
                  Your feedback helps us build stronger, more responsive relationships with our clients and better understand your unique needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}