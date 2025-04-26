import { 
  UserCheck, 
  Camera, 
  Fan, 
  ClipboardCheck, 
  Home, 
  DoorClosed 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <UserCheck className="text-2xl" />,
    title: "Security Personnel",
    description:
      "Professionally trained security guards for residential and commercial properties with 24/7 coverage options.",
  },
  {
    icon: <Camera className="text-2xl" />,
    title: "Surveillance Systems",
    description:
      "State-of-the-art surveillance equipment installation, monitoring and maintenance services.",
  },
  {
    icon: <Fan className="text-2xl" />,
    title: "Housekeeping",
    description:
      "Professional cleaning and maintenance services for residential and commercial properties.",
  },
  {
    icon: <ClipboardCheck className="text-2xl" />,
    title: "Security Audits",
    description:
      "Comprehensive security assessments to identify vulnerabilities and recommend improvements.",
  },
  {
    icon: <Home className="text-2xl" />,
    title: "Smart Home Security",
    description:
      "Integration of smart security systems with existing home automation for enhanced protection.",
  },
  {
    icon: <DoorClosed className="text-2xl" />,
    title: "Access Control",
    description:
      "Implementation of access control systems to restrict entry to authorized personnel only.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Providing top-tier security and housekeeping services tailored to
            your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-primary-light text-white rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            size="lg"
            variant="secondary"
            className="hover:bg-secondary-light"
            asChild
          >
            <a href="#contact">Request Custom Service</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
