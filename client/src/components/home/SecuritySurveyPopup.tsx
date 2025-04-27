import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, FileText, ClipboardList } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function SecuritySurveyPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  // Delay showing the popup when component mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      const wasDismissed = localStorage.getItem('surveyPopupDismissed') === 'true';
      if (!wasDismissed) {
        setIsOpen(true);
      }
    }, 5000); // Show popup after 5 seconds

    // Add event listener for the survey button
    const openSurveyBtn = document.getElementById('open-survey-btn');
    if (openSurveyBtn) {
      openSurveyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setIsOpen(true);
      });
    }

    return () => {
      clearTimeout(timeout);
      // Clean up event listener
      const openSurveyBtn = document.getElementById('open-survey-btn');
      if (openSurveyBtn) {
        openSurveyBtn.removeEventListener('click', (e) => {
          e.preventDefault();
          setIsOpen(true);
        });
      }
    };
  }, []);

  // Store dismiss state in localStorage to avoid showing the popup repeatedly
  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('surveyPopupDismissed', 'true');
  };

  // Function to open the popup (exposed for external use)
  const openPopup = () => {
    setIsOpen(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full relative overflow-hidden">
        {/* Close button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>
        
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-white">
          <div className="flex items-center mb-2">
            <ClipboardList className="h-7 w-7 text-yellow-300 mr-2" />
            <h2 className="text-xl font-bold">Free Security Survey & Audit</h2>
          </div>
          <p className="text-blue-100">
            Identify vulnerabilities in your property's security with our comprehensive assessment
          </p>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">What You'll Get:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
                  <FileText className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-gray-700 text-sm">Detailed security assessment report</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
                  <FileText className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-gray-700 text-sm">Professional recommendations for security improvements</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
                  <FileText className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-gray-700 text-sm">Priority areas for security enhancements</span>
              </li>
            </ul>
          </div>
          
          <p className="text-sm text-gray-600 mb-6">
            Our security experts will evaluate your property's vulnerabilities and provide tailored recommendations to enhance your security measures.
          </p>
          
          <div className="flex gap-3">
            <Button 
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link to="/services/security-audit" onClick={handleDismiss}>
                START FREE SURVEY NOW
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-700 text-blue-700 hover:bg-blue-50"
              onClick={handleDismiss}
            >
              Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}