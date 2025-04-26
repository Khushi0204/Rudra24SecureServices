import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  email,
}: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg p-8 max-w-md mx-4">
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
          <DialogFooter>
            <Button variant="secondary" className="w-full" onClick={onClose}>
              Close
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
