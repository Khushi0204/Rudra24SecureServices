import { useState } from "react";
import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientFeedbackForm from "./ClientFeedbackForm";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  reportId?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  email,
  reportId = "",
}: SuccessModalProps) {
  const [activeTab, setActiveTab] = useState("confirmation");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg p-6 max-w-4xl mx-4">
        <DialogTitle className="text-xl font-bold text-center mb-4">
          Your Security Assessment
        </DialogTitle>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="confirmation">Confirmation</TabsTrigger>
            <TabsTrigger value="feedback">Provide Feedback</TabsTrigger>
          </TabsList>
          
          <TabsContent value="confirmation" className="pt-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Form Submitted Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Your security assessment is being processed. You will receive your
                AI-generated report shortly.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                A copy has been sent to:{" "}
                <span className="font-medium">{email}</span>
              </p>
              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
                <Button 
                  variant="default" 
                  onClick={() => setActiveTab("feedback")}
                  className="bg-blue-800 hover:bg-blue-700"
                >
                  Leave Feedback
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="feedback" className="pt-4">
            <ClientFeedbackForm reportId={reportId} />
            <div className="flex justify-between mt-4">
              <Button 
                variant="outline" 
                onClick={() => setActiveTab("confirmation")}
              >
                Back
              </Button>
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
