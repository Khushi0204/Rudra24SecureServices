import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  
  const features = [
    { 
      title: "Customizable Security Plans",
      description: "Tailor-made solutions for residential, corporate, event, retail and personal security.",
      icon: <Shield className="h-8 w-8 text-yellow-400" />
    },
    { 
      title: "Rapid Emergency Response",
      description: "Guaranteed rapid response team reaches any emergency site within 30-60 minutes.",
      icon: <Clock className="h-8 w-8 text-yellow-400" />
    },
    { 
      title: "Tech-Equipped Security",
      description: "Professional guards with smart equipment, communication devices, and emergency response training.",
      icon: <CheckCircle2 className="h-8 w-8 text-yellow-400" />
    }
  ];
  
  return (
    <section id="home" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
              RUDRA 24 SECURE
            </h1>
            <h2 className="text-3xl font-bold mb-4">
              Professional Security & Housekeeping Services
            </h2>
            <p className="text-xl mb-6">
              "FOR MOST RELIABLE AND PROFESSIONAL SECURITY AT REASONABLE COST"
            </p>
            <div className="mb-8">
              <p className="text-lg mb-1 text-blue-100">All Types of Outsourcing Solution Under One Roof:</p>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Security Services & Surveillance Equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Facility & Building Maintenance Services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Office Support & Staffing Services</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="hover:bg-secondary-light"
                asChild
              >
                <a href="#audit">Start Security Audit</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/rudra-text-logo-new.jpg"
              alt="Rudra 24 Secure"
              className="rounded-lg shadow-xl mb-6 w-full max-w-md mx-auto"
            />
            <div className="bg-blue-900/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold text-yellow-400 mb-3 text-lg">Why Choose Rudra 24 Secure?</h3>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="mr-3 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-medium text-yellow-200">{feature.title}</h4>
                      <p className="text-sm text-blue-100">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
