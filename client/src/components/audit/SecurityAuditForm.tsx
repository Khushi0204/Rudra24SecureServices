import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";
import FormProgress from "@/components/ui/form-progress";
import SuccessModal from "./SuccessModal";
import { useToast } from "@/hooks/use-toast";
import { generateSecurityReport } from "@/lib/openai";
import { sendReportEmail } from "@/lib/email";

const steps = [
  "Basic Information",
  "Property Details",
  "Security Concerns",
  "Service Interests",
  "Review & Submit",
];

export default function SecurityAuditForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reportId, setReportId] = useState("");
  const { toast } = useToast();

  const handleNextStep = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (data: any) => {
    const finalData = { ...formData, ...data };
    setFormData(finalData);
    setIsSubmitting(true);
    
    try {
      // Generate AI report
      const report = await generateSecurityReport(finalData);
      setReportId(report.reportId);
      
      // Send email with report
      await sendReportEmail({
        to: finalData.email,
        subject: "Your SecureGuard Security Audit Report",
        reportId: report.reportId,
        name: finalData.fullName,
      });
      
      setShowModal(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate or send your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit" className="py-16 bg-background-dark">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Security & Audit Assessment</h2>
              <p className="text-gray-600">
                Complete the form below to receive an AI-generated security report based on your input.
              </p>
            </div>

            <FormProgress steps={steps} currentStep={currentStep} />

            {currentStep === 0 && <FormStep1 onNext={handleNextStep} data={formData} />}
            {currentStep === 1 && (
              <FormStep2 onNext={handleNextStep} onPrev={handlePrevStep} data={formData} />
            )}
            {currentStep === 2 && (
              <FormStep3 onNext={handleNextStep} onPrev={handlePrevStep} data={formData} />
            )}
            {currentStep === 3 && (
              <FormStep4 onNext={handleNextStep} onPrev={handlePrevStep} data={formData} />
            )}
            {currentStep === 4 && (
              <FormStep5 
                onSubmit={handleSubmit} 
                onPrev={handlePrevStep} 
                data={formData} 
                isSubmitting={isSubmitting} 
              />
            )}
          </CardContent>
        </Card>
      </div>

      <SuccessModal 
        isOpen={showModal} 
        onClose={() => {
          setShowModal(false);
          setCurrentStep(0);
          setFormData({});
        }} 
        email={formData.email || ""}
      />
    </section>
  );
}
