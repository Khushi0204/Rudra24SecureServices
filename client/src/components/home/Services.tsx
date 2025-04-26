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
  Bell
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Providing top-tier security and facility management services tailored to
            your specific needs with customizable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition hover:shadow-xl border-t-4 border-blue-600"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white rounded-xl p-8 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Customizable Security Plans</h3>
            <p className="max-w-2xl mx-auto">
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
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="h-10 w-10 mx-auto mb-2 text-yellow-400">
                  {item.icon}
                </div>
                <h4 className="font-medium text-yellow-200 mb-1">{item.title}</h4>
                <p className="text-sm text-blue-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityOperations.map((op, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-blue-800 mb-2">{op.title}</h3>
              <p className="text-gray-600 text-sm">{op.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-blue-800 font-medium mb-6">
            "FOR MOST RELIABLE AND PROFESSIONAL SECURITY AT REASONABLE COST"
          </p>
          <Button
            size="lg"
            variant="default"
            className="bg-blue-700 hover:bg-blue-800"
            asChild
          >
            <a href="#audit">Start Free Security Audit</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
