import { useState, useEffect } from "react";
import { 
  UserCheck, 
  Camera, 
  Fan, 
  ClipboardCheck, 
  Home, 
  DoorClosed,
  Shield,
  Users,
  Eye,
  Clock,
  Bot,
  User,
  Building,
  Bell,
  CheckCircle2
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceGridSkeleton } from "@/components/ui/skeleton";

const mainServices = [
  {
    icon: <Shield className="text-2xl" />,
    title: "Security Guard Services",
    description:
      "Professionally trained security guards for residential, corporate, industrial, and commercial properties with 24/7 coverage options.",
    features: ["Ex-servicemen", "Trained personnel", "Uniformed & equipped"]
  },
  {
    icon: <Users className="text-2xl" />,
    title: "Specialized Security",
    description:
      "Security officers, managers, gunmen, crowd managers, bouncers, and personal security officers for varied security scenarios.",
    features: ["PSO services", "Female guards", "VIP protection"]
  },
  {
    icon: <Camera className="text-2xl" />,
    title: "Smart Security Integration",
    description:
      "AI-powered surveillance, motion sensors, facial recognition, and mobile app monitoring to enhance traditional security.",
    features: ["CCTV systems", "Intrusion detection", "Remote monitoring"]
  },
  {
    icon: <Eye className="text-2xl" />,
    title: "Security Audit & Consultation",
    description:
      "Free comprehensive security assessments to identify vulnerabilities and recommend tailored improvements.",
    features: ["Free assessment", "Detailed reports", "Implementation plans"]
  },
  {
    icon: <Fan className="text-2xl" />,
    title: "Facility Management",
    description:
      "Professional housekeeping, pantry staff, hardware inspection & maintenance, and sanitization services.",
    features: ["Cleaning", "Maintenance", "Sanitization"]
  },
  {
    icon: <Clock className="text-2xl" />,
    title: "Emergency Response",
    description:
      "Quick Response Team (QRT) with guaranteed rapid response within 30-60 minutes to any emergency situation.",
    features: ["30-60 min response", "24/7 availability", "Trained response team"]
  },
  {
    icon: <Bell className="text-2xl" />,
    title: "24x7 Control Room",
    description:
      "Round-the-clock monitoring and supervision through our centralized control room for comprehensive security management.",
    features: ["24/7 monitoring", "Instant alerts", "Command center"]
  },
  {
    icon: <Bot className="text-2xl" />,
    title: "Tech-Equipped Guards",
    description:
      "Security personnel equipped with smart uniforms, body cams, communication devices, and emergency response training.",
    features: ["Body cams", "Smart equipment", "Communication devices"]
  }
];

const securityOperations = [
  {
    title: "Guarding Services",
    description: "24/7 protection to prevent losses from burglary, arson, vandalism and other security threats"
  },
  {
    title: "Inspections & Surprise Checks",
    description: "Regular and irregular interval security checks with detailed monitoring and reporting"
  },
  {
    title: "Access Control",
    description: "Visitor vetting, traffic management, and precise control of entry/exit points"
  },
  {
    title: "Round-the-Clock Supervision",
    description: "Continuous quality supervision to ensure comprehensive security coverage"
  }
];

export default function Services() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  
  // Simulate loading delay for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="services" className="page-section bg-gradient-to-b from-gray-50 to-white">
      <div className="responsive-container">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="section-title relative inline-block">
            <span className="relative z-10">Our Services</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-transparent rounded animate-shimmer"></span>
          </h2>
          <p className="section-subtitle relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent font-semibold">Providing top-tier security</span> and facility management services tailored to
            your specific needs with customizable solutions.
          </p>
        </div>

        {loading ? (
          <ServiceGridSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:shadow-xl border-t-4 border-blue-600 card-transition-3d group animate-zoom-in overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 rounded-full flex items-center justify-center mb-4 shadow-inner group-hover:shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 transform-gpu">
                  <div className="animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-blue-800 group-hover:text-blue-700 transition-colors duration-300 relative">
                  {service.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 transition-all duration-500 ease-out"></span>
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="bg-blue-50 text-blue-700 border-blue-200 transition-all duration-300 hover:bg-blue-100 hover:scale-105 group-hover:translate-y-0 translate-y-0 hover:shadow-sm"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl p-8 shadow-xl mb-16 animate-fade-in relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/security-pattern.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 -mr-32 -mt-32 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10 -ml-32 -mb-32 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative">
            <div className="text-center mb-8 animate-slide-up">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent inline-block">
                Customizable Security Plans
              </h3>
              <p className="max-w-2xl mx-auto text-blue-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Instead of offering generic security services, we provide tailor-made solutions for your specific needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  title: "Residential",
                  description: "Villas, gated communities, apartments",
                  icon: <Home />
                },
                {
                  title: "Corporate",
                  description: "Banks, IT firms, offices",
                  icon: <Building />
                },
                {
                  title: "Event",
                  description: "Concerts, weddings, gatherings",
                  icon: <Users />
                },
                {
                  title: "Retail & Mall",
                  description: "Shops, supermarkets, malls",
                  icon: <Building />
                },
                {
                  title: "Personal",
                  description: "VIPs, executives, celebrities",
                  icon: <User />
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center border border-blue-700/30 hover:bg-white/20 transition-all duration-500 animate-slide-in-right group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="h-12 w-12 mx-auto mb-3 text-yellow-400 bg-blue-950/60 rounded-full flex items-center justify-center p-2.5 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-inner group-hover:shadow-yellow-500/20">
                    <div className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {item.icon}
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-yellow-200 mb-1 text-lg group-hover:text-yellow-100 transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  <p className="text-sm text-blue-100 group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityOperations.map((op, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-xl transition-all duration-500 animate-slide-in-right group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-24 -right-24 w-32 h-32 bg-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-150 transform"></div>
              
              <h3 className="font-semibold text-blue-800 mb-2 text-lg group-hover:text-blue-700 transition-colors duration-300 relative">
                <span className="relative z-10">{op.title}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-1/3 transition-all duration-500 ease-out"></span>
              </h3>
              
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                {op.description}
              </p>
              
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-blue-100 scale-0 group-hover:scale-100 transition-transform duration-500 flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-10 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl shadow-lg animate-fade-in overflow-hidden relative border border-blue-200 card-transition-3d">
          <div className="absolute inset-0 bg-[url('/images/shield-pattern.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 -mr-32 -mt-32 animate-pulse-slow"></div>
          
          <p className="text-xl md:text-2xl font-medium mb-8 relative animate-float">
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-bold">
              "FOR MOST RELIABLE AND PROFESSIONAL SECURITY AT REASONABLE COST"
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></span>
          </p>
          
          <div className="transform hover:scale-105 transition-all duration-500 inline-block">
            <Button
              size="lg"
              variant="default"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-500 px-8 py-6 relative overflow-hidden group"
              asChild
            >
              <a href="#" id="open-survey-btn" className="relative z-10">
                <span className="relative z-10 inline-flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 animate-pulse-slow" />
                  Start Free Security Audit
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500/0 via-yellow-200/30 to-yellow-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </a>
            </Button>
          </div>
          
          <p className="text-blue-600 text-sm mt-4 opacity-80 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Identify vulnerabilities in your property with our comprehensive assessment and receive a detailed security report with recommendations
          </p>
        </div>
      </div>
    </section>
  );
}
