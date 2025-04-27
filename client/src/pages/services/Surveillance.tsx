import { useTranslation } from "react-i18next";
import { Camera, Video, Eye, CheckCircle2, Monitor, Lock } from "lucide-react";

export default function SurveillancePage() {
  const { t } = useTranslation();

  return (
    <div className="responsive-container page-section">
      <div className="animate-slide-up">
        <h1 className="section-title text-center mb-4">Surveillance & Monitoring Systems</h1>
        <p className="section-subtitle text-center mb-12">
          Advanced surveillance solutions with AI-powered technology for comprehensive security monitoring
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 mb-12 shadow-xl text-white animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">State-of-the-Art Surveillance Technology</h2>
            <p className="mb-6 text-blue-100">
              Our surveillance systems utilize the latest in security technology to provide comprehensive monitoring for your property. From high-definition cameras to advanced motion detection, our systems ensure nothing goes unnoticed.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>AI-powered surveillance with object detection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>24/7 remote monitoring capabilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Secure cloud storage for footage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Mobile app for real-time viewing</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-800/50 p-6 rounded-lg shadow-inner border border-blue-700/50 max-w-md">
              <div className="h-24 w-24 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl text-yellow-300 font-semibold text-center mb-3">Complete Surveillance Solutions</h3>
              <p className="text-blue-100 text-center">
                We provide end-to-end surveillance systems that integrate perfectly with your existing security infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Advanced Surveillance Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Camera className="h-10 w-10 text-blue-700" />,
              title: "HD & 4K Cameras",
              description: "High-definition cameras with night vision, wide-angle views, and weatherproof exteriors for clear footage in any condition."
            },
            {
              icon: <Monitor className="h-10 w-10 text-blue-700" />,
              title: "Intelligent Monitoring",
              description: "AI-powered systems that can identify suspicious activity, detect intrusions, and alert security personnel in real-time."
            },
            {
              icon: <Lock className="h-10 w-10 text-blue-700" />,
              title: "Secure Storage",
              description: "Encrypted data storage with secure cloud backup for all surveillance footage, ensuring your security data is always protected."
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
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Surveillance Packages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Basic Monitoring",
              description: "Essential surveillance setup for small properties. Includes HD cameras and basic monitoring capabilities.",
              features: ["HD cameras", "Motion detection", "Local storage", "Mobile app access"]
            },
            {
              title: "Advanced Surveillance",
              description: "Comprehensive surveillance system with AI capabilities for medium to large properties.",
              features: ["4K cameras", "Facial recognition", "Cloud storage", "Real-time alerts", "Intruder detection"]
            },
            {
              title: "Premium Security Suite",
              description: "Enterprise-grade surveillance system with full integration capabilities and 24/7 monitoring.",
              features: ["4K PTZ cameras", "Advanced analytics", "Access control integration", "24/7 monitoring service", "Unlimited cloud storage"]
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

      {/* Applications Section */}
      <div className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Surveillance Applications</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { title: "Residential", icon: <Home className="h-6 w-6" /> },
            { title: "Commercial", icon: <Building className="h-6 w-6" /> },
            { title: "Industrial", icon: <Factory className="h-6 w-6" /> },
            { title: "Retail", icon: <ShoppingBag className="h-6 w-6" /> },
            { title: "Banking", icon: <CreditCard className="h-6 w-6" /> },
            { title: "Healthcare", icon: <Stethoscope className="h-6 w-6" /> },
            { title: "Education", icon: <GraduationCap className="h-6 w-6" /> },
            { title: "Hospitality", icon: <Hotel className="h-6 w-6" /> }
          ].map((app, index) => (
            <div 
              key={index}
              className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center animate-hover-scale"
            >
              <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-700">
                {app.icon}
              </div>
              <h3 className="font-medium text-blue-800">{app.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center p-8 bg-blue-50 rounded-lg shadow-inner animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Enhance Your Security with Modern Surveillance</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-600">
          Contact us today to discuss your surveillance needs and get a customized solution for your property.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-medium animate-hover-scale"
          >
            Request a Quote
          </a>
          <a 
            href="#demo" 
            className="px-6 py-3 bg-white text-blue-700 border border-blue-700 rounded-md shadow-sm hover:shadow-md transition-all duration-300 font-medium animate-hover-scale"
          >
            See Demo
          </a>
        </div>
      </div>
    </div>
  );
}

// Additional icons for the applications section
function Home(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}

function Building(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <path d="M9 22v-4h6v4"></path>
      <path d="M8 6h.01"></path>
      <path d="M16 6h.01"></path>
      <path d="M12 6h.01"></path>
      <path d="M12 10h.01"></path>
      <path d="M12 14h.01"></path>
      <path d="M16 10h.01"></path>
      <path d="M16 14h.01"></path>
      <path d="M8 10h.01"></path>
      <path d="M8 14h.01"></path>
    </svg>
  );
}

function Factory(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
      <path d="M17 18h1"></path>
      <path d="M12 18h1"></path>
      <path d="M7 18h1"></path>
    </svg>
  );
}

function ShoppingBag(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
      <path d="M3 6h18"></path>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
}

function CreditCard(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
      <line x1="2" x2="22" y1="10" y2="10"></line>
    </svg>
  );
}

function Stethoscope(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
      <circle cx="20" cy="10" r="2"></circle>
    </svg>
  );
}

function GraduationCap(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  );
}

function Hotel(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"></path>
      <path d="M8 7h.01"></path>
      <path d="M16 7h.01"></path>
      <path d="M12 7h.01"></path>
      <path d="M12 11h.01"></path>
      <path d="M16 11h.01"></path>
      <path d="M8 11h.01"></path>
      <path d="M10 22v-6.5m4 0V22"></path>
    </svg>
  );
}