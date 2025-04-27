import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Shield, Camera, CheckCircle2, ClipboardList, ArrowRight } from "lucide-react";

// Custom Mop icon since it's not in Lucide React
function Mop(props: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <path d="M12 22v-5" />
      <path d="M9 22h6" />
      <path d="M12 11v6" />
      <path d="M5 8v4h14V8" />
      <path d="M5 8h14" />
      <path d="M15 8a3 3 0 1 0-6 0" />
      <path d="M2 11h20" />
    </svg>
  );
}
import { Button } from "@/components/ui/button";

export default function ServicesIndexPage() {
  const { t } = useTranslation();

  const services = [
    {
      title: "Security Guard Services",
      description: "Professional security personnel for residential, commercial, and industrial properties.",
      icon: <Shield className="h-10 w-10 text-blue-700" />,
      path: "/services/security-guards",
      features: ["Trained professionals", "24/7 coverage", "Emergency response"]
    },
    {
      title: "Surveillance Systems",
      description: "Advanced monitoring solutions with AI-powered technology and remote access.",
      icon: <Camera className="h-10 w-10 text-blue-700" />,
      path: "/services/surveillance",
      features: ["HD cameras", "Motion detection", "Cloud storage"]
    },
    {
      title: "Facility Management",
      description: "Comprehensive housekeeping and maintenance services for clean, well-maintained properties.",
      icon: <Mop className="h-10 w-10 text-blue-700" />,
      path: "/services/facility-management",
      features: ["Housekeeping", "Maintenance", "Sanitization"]
    },
    {
      title: "Security Audits",
      description: "Thorough security assessments to identify vulnerabilities and improve security.",
      icon: <ClipboardList className="h-10 w-10 text-blue-700" />,
      path: "/services/security-audit",
      features: ["Risk assessment", "Recommendations", "Implementation"]
    }
  ];

  return (
    <div className="responsive-container page-section">
      <div className="animate-slide-up">
        <h1 className="section-title text-center mb-4">Our Services</h1>
        <p className="section-subtitle text-center mb-12">
          Comprehensive security and facility management solutions for your property and organization
        </p>
      </div>

      {/* Services Hero */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 mb-12 shadow-xl text-white animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Security & Facility Solutions</h2>
            <p className="mb-6 text-blue-100">
              From security guards to facility management, we provide comprehensive services to protect your people, property, and assets. Our tailored solutions ensure you receive exactly the services you need.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Customized security plans for your specific needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Trained and experienced security professionals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Advanced technology integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>24/7 monitoring and support</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-800/50 p-4 rounded-lg animate-hover-scale">
              <Shield className="h-8 w-8 text-yellow-400 mb-2" />
              <h3 className="text-lg font-medium text-yellow-200">Security</h3>
              <p className="text-sm text-blue-200">Protection for your property and people</p>
            </div>
            <div className="bg-blue-800/50 p-4 rounded-lg animate-hover-scale">
              <Camera className="h-8 w-8 text-yellow-400 mb-2" />
              <h3 className="text-lg font-medium text-yellow-200">Monitoring</h3>
              <p className="text-sm text-blue-200">24/7 surveillance and alerting</p>
            </div>
            <div className="bg-blue-800/50 p-4 rounded-lg animate-hover-scale">
              <Mop className="h-8 w-8 text-yellow-400 mb-2" />
              <h3 className="text-lg font-medium text-yellow-200">Facility</h3>
              <p className="text-sm text-blue-200">Cleaning and maintenance services</p>
            </div>
            <div className="bg-blue-800/50 p-4 rounded-lg animate-hover-scale">
              <ClipboardList className="h-8 w-8 text-yellow-400 mb-2" />
              <h3 className="text-lg font-medium text-yellow-200">Assessment</h3>
              <p className="text-sm text-blue-200">Security audits and recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="mb-16 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Core Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-hover-scale"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-end">
                <Link to={service.path}>
                  <Button 
                    variant="outline" 
                    className="text-blue-700 border-blue-700 hover:bg-blue-50 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry-Specific Solutions */}
      <div className="mb-16 animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Industry-Specific Solutions</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { title: "Residential", description: "Security for apartments, villas, and communities" },
            { title: "Commercial", description: "Protection for offices and business premises" },
            { title: "Retail", description: "Security for shops, malls, and retail chains" },
            { title: "Industrial", description: "Solutions for factories and industrial complexes" },
            { title: "Education", description: "Safety measures for schools and universities" },
            { title: "Healthcare", description: "Security for hospitals and medical facilities" },
            { title: "Events", description: "Temporary security for events and gatherings" },
            { title: "Hospitality", description: "Protection for hotels and hospitality venues" }
          ].map((industry, index) => (
            <div 
              key={index}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-2 border-blue-600 animate-hover-scale"
            >
              <h3 className="font-semibold text-blue-800 mb-2">{industry.title}</h3>
              <p className="text-gray-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Services */}
      <div className="mb-16 bg-blue-50 p-8 rounded-lg shadow-inner animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Specialized Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "VIP Protection",
              description: "Personalized security services for executives, celebrities, and VIPs requiring discreet and comprehensive protection."
            },
            {
              title: "Event Security",
              description: "Specialized security planning and personnel for corporate events, weddings, concerts, and public gatherings."
            },
            {
              title: "Emergency Response",
              description: "Rapid response team available 24/7 to address security emergencies with a guaranteed arrival time of 30-60 minutes."
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale"
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl text-white shadow-xl animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100">
          Contact us today to discuss your security and facility management needs. We'll create a customized solution for your property.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="animate-hover-scale"
            asChild
          >
            <a href="#contact">Request a Quote</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-800 animate-hover-scale"
            asChild
          >
            <a href="#audit">Free Security Audit</a>
          </Button>
        </div>
      </div>
    </div>
  );
}