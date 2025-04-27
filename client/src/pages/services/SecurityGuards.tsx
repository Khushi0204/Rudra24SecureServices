import { useTranslation } from "react-i18next";
import { Shield, CheckCircle2, Users, Clock } from "lucide-react";

export default function SecurityGuardsPage() {
  const { t } = useTranslation();

  return (
    <div className="responsive-container page-section">
      <div className="animate-slide-up">
        <h1 className="section-title text-center mb-4">Security Guard Services</h1>
        <p className="section-subtitle text-center mb-12">
          Professional security personnel for residential, commercial, and industrial properties with 24/7 coverage options
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 mb-12 shadow-xl text-white animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Expert Security Guards For Every Need</h2>
            <p className="mb-6 text-blue-100">
              Our security guards are extensively trained professionals with backgrounds in military, law enforcement, and specialized security operations. Each guard undergoes rigorous vetting and continuous training to ensure the highest level of security service.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Trained in emergency response and first aid</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>24/7 monitoring with real-time reporting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Equipped with modern communication devices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Strict adherence to security protocols</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-800/50 p-6 rounded-lg shadow-inner border border-blue-700/50 max-w-md">
              <div className="h-24 w-24 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl text-yellow-300 font-semibold text-center mb-3">Trusted Security Service</h3>
              <p className="text-blue-100 text-center">
                We prioritize reliability, professionalism, and comprehensive security coverage for all our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Key Features of Our Security Guard Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-10 w-10 text-blue-700" />,
              title: "Professional Personnel",
              description: "Ex-servicemen and highly trained security professionals with extensive experience in both regular and specialized security operations."
            },
            {
              icon: <Users className="h-10 w-10 text-blue-700" />,
              title: "Specialized Security Teams",
              description: "Dedicated security officers, managers, bouncers, and personal security officers specially trained for various security scenarios."
            },
            {
              icon: <Clock className="h-10 w-10 text-blue-700" />,
              title: "Round-the-Clock Coverage",
              description: "24/7 security coverage with shift management, surveillance monitoring, and immediate response to security incidents."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600 animate-hover-scale"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Tiers */}
      <div className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Security Guard Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Regular Guards",
              description: "Trained security personnel for basic security needs. Ideal for residential buildings, small offices, and retail stores.",
              features: ["Access control", "Regular patrols", "Visitor management", "Basic incident reporting"]
            },
            {
              title: "Specialized Guards",
              description: "Advanced security personnel with specialized training. Perfect for banks, jewelry stores, and high-security facilities.",
              features: ["Advanced threat assessment", "Emergency response", "Surveillance operation", "Detailed security logs"]
            },
            {
              title: "Event Security",
              description: "Temporary security teams for events, conferences, and gatherings. Ensures smooth event operations and guest safety.",
              features: ["Crowd management", "VIP protection", "Entry screening", "Quick response team"]
            },
            {
              title: "Executive Protection",
              description: "Personal security officers for executives, VIPs, and celebrities. Provides dedicated protection and privacy.",
              features: ["Risk assessment", "Secure transport", "Close protection", "Advance location scouting"]
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 animate-hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-800">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center p-8 bg-blue-50 rounded-lg shadow-inner animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Need Professional Security Guards?</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-600">
          Contact us today to discuss your security requirements and get a customized security solution for your property or event.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-medium animate-hover-scale"
          >
            Contact Us
          </a>
          <a 
            href="#audit" 
            className="px-6 py-3 bg-white text-blue-700 border border-blue-700 rounded-md shadow-sm hover:shadow-md transition-all duration-300 font-medium animate-hover-scale"
          >
            Free Security Audit
          </a>
        </div>
      </div>
    </div>
  );
}