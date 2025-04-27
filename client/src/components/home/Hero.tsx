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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text animate-pulse-slow relative">
              <span className="relative z-10 animate-float">RUDRA 24 SECURE</span>
              <span className="absolute top-0 left-1 w-full h-full blur-sm bg-gradient-to-r from-yellow-400/40 to-yellow-600/40 bg-clip-text text-transparent z-0">RUDRA 24 SECURE</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-in-right relative" style={{ animationDelay: '0.2s' }}>
              <span className="animate-shimmer absolute h-12 w-2 left-0"></span>
              Professional Security & Housekeeping Services
            </h2>
            <p className="text-xl mb-6 font-medium italic animate-zoom-in border-l-2 border-yellow-400 pl-3" style={{ animationDelay: '0.3s' }}>
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
            <div className="flex flex-wrap gap-4 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
              <Button
                size="lg"
                variant="secondary"
                className="hover:bg-yellow-500 bg-yellow-400 text-blue-900 font-bold transition-all duration-300 shadow-md hover:shadow-xl animate-pulse-slow relative overflow-hidden group text-lg px-6 py-6"
                asChild
              >
                <a href="#" id="open-survey-btn">
                  <span className="relative z-10">START FREE SECURITY SURVEY</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500/0 via-yellow-200/30 to-yellow-500/0 -translate-x-full animate-shimmer group-hover:translate-x-full transition-transform duration-1000"></span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="default"
                className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 transition-all duration-500 shadow-md hover:shadow-xl animate-hover-scale"
                asChild
              >
                <a href="#contact" className="relative overflow-hidden">
                  <span className="relative z-10">Contact Security Expert</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white hover:text-primary transition-all duration-300 animate-hover-scale hover:rotate-1 overflow-hidden group"
                asChild
              >
                <a href="#services">
                  <span className="relative z-10">Our Services</span>
                  <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full -skew-x-12 transition-all duration-500"></span>
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <img
              src="/images/rudra-text-logo-new.jpg"
              alt="Rudra 24 Secure"
              className="rounded-lg shadow-xl mb-6 w-full max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300 animate-hover-scale"
            />
            <div className="bg-gradient-to-br from-blue-900/80 to-blue-800/80 rounded-lg p-6 backdrop-blur-sm shadow-xl border border-blue-600/40 animate-zoom-in card-transition-3d" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-semibold text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text mb-4 text-xl relative inline-block">
                Why Choose Rudra 24 Secure?
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300 to-transparent animate-shimmer"></span>
              </h3>
              <div className="grid gap-5">
                {features.map((feature, index) => (
                  <div key={index} className={`flex bg-blue-950/40 p-4 rounded-lg transform transition-all duration-500 hover:bg-blue-800/60 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] animate-slide-in-right`} style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                    <div className="mr-4 mt-1 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>{feature.icon}</div>
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
