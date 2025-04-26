import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import SecurityAuditForm from "@/components/audit/SecurityAuditForm";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SecurityAuditForm />
      <Testimonials />
      <Contact />
    </>
  );
}
