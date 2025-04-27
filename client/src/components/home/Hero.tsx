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
    <section id="home" className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 md:py-20 lg:py-24">
      <div className="responsive-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text animate-fade-in">
              RUDRA 24 SECURE
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              Professional Security & Housekeeping Services
            </h2>
            <p className="text-xl mb-6 font-medium italic animate-slide-in" style={{ animationDelay: '0.3s' }}>
              "FOR MOST RELIABLE AND PROFESSIONAL SECURITY AT REASONABLE COST"
            </p>
            <div className="mb-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg mb-1 text-blue-100">All Types of Outsourcing Solution Under One Roof:</p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1 animate-slide-in" style={{ animationDelay: '0.5s' }}>
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Security Services & Surveillance Equipment</span>
                </li>
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Facility & Building Maintenance Services</span>
                </li>
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1 animate-slide-in" style={{ animationDelay: '0.7s' }}>
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Office Support & Staffing Services</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 animate-slide-in" style={{ animationDelay: '0.8s' }}>
              <Button
                size="lg"
                variant="secondary"
                className="hover:bg-secondary-light transition-all duration-300 shadow-md hover:shadow-lg animate-hover-scale"
                asChild
              >
                <a href="#audit">Start Security Audit</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white hover:text-primary transition-all duration-300 animate-hover-scale"
                asChild
              >
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <img
              src="/images/rudra-text-logo-new.jpg"
              alt="Rudra 24 Secure"
              className="rounded-lg shadow-xl mb-6 w-full max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300 animate-hover-scale"
            />
            <div className="bg-gradient-to-br from-blue-900/70 to-blue-800/70 rounded-lg p-6 backdrop-blur-sm shadow-lg border border-blue-700/30 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-semibold text-yellow-400 mb-4 text-xl">Why Choose Rudra 24 Secure?</h3>
              <div className="grid gap-5">
                {features.map((feature, index) => (
                  <div key={index} className="flex bg-blue-950/40 p-3 rounded-lg hover:bg-blue-900/50 transition-colors duration-300 animate-hover-scale">
                    <div className="mr-4 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-medium text-yellow-200 text-lg">{feature.title}</h4>
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
