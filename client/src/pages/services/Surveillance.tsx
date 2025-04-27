import { useTranslation } from "react-i18next";
import { 
  Camera, 
  CheckCircle2, 
  Shield, 
  Eye, 
  Bell, 
  Fingerprint, 
  HardDrive, 
  Wifi, 
  VideoIcon,
  ArrowRightCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SurveillancePage() {
  const { t } = useTranslation();

  return (
    <div className="responsive-container page-section">
      <div className="animate-slide-up">
        <h1 className="section-title text-center mb-4">Surveillance Systems</h1>
        <p className="section-subtitle text-center mb-12">
          Advanced surveillance equipment and monitoring solutions for enhanced security
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 mb-12 shadow-xl text-white animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">State-of-the-Art Surveillance</h2>
            <p className="mb-6 text-blue-100">
              Our comprehensive surveillance systems provide 24/7 monitoring, real-time alerts, and crystal-clear footage to protect your property, people, and assets.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>High-definition cameras with night vision capabilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Intelligent motion detection and facial recognition</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Remote access and mobile monitoring</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Professional installation and maintenance</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-800/50 p-6 rounded-lg shadow-inner border border-blue-700/50 max-w-md">
              <div className="h-24 w-24 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl text-yellow-300 font-semibold text-center mb-3">End-to-End Surveillance Solutions</h3>
              <p className="text-blue-100 text-center">
                From camera installation to monitoring services, we provide complete surveillance solutions tailored to your specific security needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Surveillance System Types */}
      <div className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Surveillance Systems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <VideoIcon className="h-10 w-10 text-blue-700" />,
              title: "CCTV Systems",
              description: "High-definition closed-circuit television systems with advanced recording capabilities and remote viewing access."
            },
            {
              icon: <Wifi className="h-10 w-10 text-blue-700" />,
              title: "Wireless Camera Networks",
              description: "Flexible wireless surveillance systems ideal for locations where wired installations are challenging."
            },
            {
              icon: <Eye className="h-10 w-10 text-blue-700" />,
              title: "AI-Powered Monitoring",
              description: "Intelligent systems with behavior analysis, facial recognition, and automated alert capabilities."
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600 animate-hover-scale"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-12 bg-blue-50 p-8 rounded-lg shadow-inner animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Key Features & Benefits</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <HardDrive className="h-8 w-8 text-blue-700" />,
              title: "Secure Storage",
              description: "Cloud and local storage options with encryption for all surveillance footage"
            },
            {
              icon: <Bell className="h-8 w-8 text-blue-700" />,
              title: "Real-time Alerts",
              description: "Instant notifications for detected motion or security breaches"
            },
            {
              icon: <Fingerprint className="h-8 w-8 text-blue-700" />,
              title: "Access Control",
              description: "Integration with access control systems for comprehensive security"
            },
            {
              icon: <Shield className="h-8 w-8 text-blue-700" />,
              title: "Deterrence",
              description: "Visible security cameras significantly reduce the risk of criminal activity"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center animate-hover-scale"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-blue-800 mb-2 text-lg text-center">{feature.title}</h3>
              <p className="text-gray-600 text-sm text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Installation Process */}
      <div className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Installation Process</h2>
        
        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Security Assessment",
                description: "Thorough evaluation of your property and specific security needs"
              },
              {
                number: "02",
                title: "Custom Design",
                description: "Tailored surveillance system design based on assessment findings"
              },
              {
                number: "03",
                title: "Professional Installation",
                description: "Expert installation by certified security technicians"
              },
              {
                number: "04",
                title: "Training & Support",
                description: "Comprehensive training and ongoing technical support"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md relative z-10 animate-hover-scale"
              >
                <div className="absolute -top-4 -left-4 bg-blue-700 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-semibold text-blue-800 mb-2 mt-4 text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Connecting Line (visible on desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 z-0"></div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Industries We Serve</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Residential", 
              desc: "Protect your home with state-of-the-art surveillance",
              points: ["Home security cameras", "Doorbell cameras", "Indoor & outdoor monitoring"] 
            },
            { 
              title: "Commercial", 
              desc: "Comprehensive security for businesses of all sizes",
              points: ["Office building surveillance", "Retail security cameras", "Warehouse monitoring"] 
            },
            { 
              title: "Industrial", 
              desc: "Heavy-duty surveillance for industrial facilities",
              points: ["Factory floor monitoring", "Perimeter security", "Equipment surveillance"] 
            },
            { 
              title: "Educational", 
              desc: "Creating safer learning environments",
              points: ["Campus-wide monitoring", "Classroom security", "Entry point surveillance"] 
            },
            { 
              title: "Healthcare", 
              desc: "Specialized solutions for medical facilities",
              points: ["Patient area monitoring", "Medication room security", "Parking area surveillance"] 
            },
            { 
              title: "Hospitality", 
              desc: "Discreet security for hotels and restaurants",
              points: ["Common area monitoring", "Entrance surveillance", "Staff area security"] 
            }
          ].map((industry, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale"
            >
              <h3 className="font-bold text-blue-800 mb-2 text-lg">{industry.title}</h3>
              <p className="text-gray-700 mb-4 text-sm">{industry.desc}</p>
              <ul className="space-y-1">
                {industry.points.map((point, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <ArrowRightCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance & Support */}
      <div className="mb-12 bg-blue-900 p-8 rounded-xl text-white shadow-xl animate-slide-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Maintenance & Support</h2>
            <p className="mb-6 text-blue-100">
              We provide comprehensive maintenance and support services to ensure your surveillance system functions optimally at all times.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Regular system health checks and preventive maintenance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Software updates and security patches</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>24/7 technical support and emergency response</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Equipment repair and replacement services</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-800/50 p-6 rounded-lg shadow-inner border border-blue-700/50">
            <h3 className="text-xl text-yellow-300 font-semibold mb-4">Support Plans</h3>
            <div className="grid gap-4">
              {[
                {
                  name: "Basic Support",
                  features: ["Business hours support", "Software updates", "Annual maintenance check"]
                },
                {
                  name: "Premium Support",
                  features: ["24/7 support hotline", "Priority service response", "Quarterly maintenance visits", "Equipment warranty extension"]
                }
              ].map((plan, index) => (
                <div key={index} className="bg-blue-950/30 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">{plan.name}</h4>
                  <ul className="space-y-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl text-white shadow-xl animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Enhance Your Security?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100">
          Contact us today for a free consultation and learn how our surveillance systems can protect your property and provide peace of mind.
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
            <a href="#audit">Security Assessment</a>
          </Button>
        </div>
      </div>
    </div>
  );
}