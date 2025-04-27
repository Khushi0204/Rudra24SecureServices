import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import CompanyProfile from "@/components/home/CompanyProfile";
import SecurityOperations from "@/components/home/SecurityOperations";
import RecruitmentTraining from "@/components/home/RecruitmentTraining";
import ContactInfo from "@/components/home/ContactInfo";
import SecurityAuditForm from "@/components/audit/SecurityAuditForm";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import SecuritySurveyPopup from "@/components/home/SecuritySurveyPopup";

export default function Home() {
  // Update the document title when the component mounts
  useEffect(() => {
    document.title = "Rudra 24 Secure | Professional Security & Housekeeping Services";
  }, []);
  
  return (
    <>
      <Hero />
      <CompanyProfile />
      <Services />
      <SecurityOperations />
      <RecruitmentTraining />
      <SecurityAuditForm />
      <Testimonials />
      <ContactInfo />
      <Contact />
      <SecuritySurveyPopup />
    </>
  );
}
