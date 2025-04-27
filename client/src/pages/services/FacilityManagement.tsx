import { useTranslation } from "react-i18next";
import { CheckCircle2, Trash2, Hammer, Leaf, Wrench, Droplet, Sparkles } from "lucide-react";

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

export default function FacilityManagementPage() {
  const { t } = useTranslation();

  return (
    <div className="responsive-container page-section">
      <div className="animate-slide-up">
        <h1 className="section-title text-center mb-4">Facility Management Services</h1>
        <p className="section-subtitle text-center mb-12">
          Professional housekeeping, pantry staff, and maintenance services for clean and well-maintained properties
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 mb-12 shadow-xl text-white animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Complete Facility Management Solutions</h2>
            <p className="mb-6 text-blue-100">
              Our facility management services provide comprehensive solutions for keeping your property clean, sanitized, and well-maintained. From routine cleaning to specialized maintenance, we ensure your facility operates at peak condition.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Experienced and trained housekeeping staff</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Eco-friendly cleaning products and methods</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Customized cleaning schedules to fit your needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Regular inspection and quality control</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-800/50 p-6 rounded-lg shadow-inner border border-blue-700/50 max-w-md">
              <div className="h-24 w-24 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sparkles className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl text-yellow-300 font-semibold text-center mb-3">Professional Cleaning Services</h3>
              <p className="text-blue-100 text-center">
                We maintain the highest standards of cleanliness, hygiene, and property maintenance for all our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Services */}
      <div className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Facility Management Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Mop className="h-10 w-10 text-blue-700" />,
              title: "Housekeeping Services",
              description: "Regular cleaning and sanitization of all areas including floors, restrooms, workspaces, and common areas."
            },
            {
              icon: <Wrench className="h-10 w-10 text-blue-700" />,
              title: "Maintenance Services",
              description: "Preventive and corrective maintenance for electrical, plumbing, HVAC, and general building repairs."
            },
            {
              icon: <Leaf className="h-10 w-10 text-blue-700" />,
              title: "Landscaping & Grounds",
              description: "Maintenance of outdoor areas including lawn care, plant maintenance, and seasonal landscaping services."
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

      {/* Detailed Services */}
      <div className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Detailed Cleaning & Maintenance Offerings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Cleaning Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: <Mop className="h-4 w-4" />, label: "Daily office cleaning" },
                { icon: <Sparkles className="h-4 w-4" />, label: "Deep cleaning services" },
                { icon: <Droplet className="h-4 w-4" />, label: "Sanitization services" },
                { icon: <Trash2 className="h-4 w-4" />, label: "Waste management" },
                { icon: <Sparkles className="h-4 w-4" />, label: "Window cleaning" },
                { icon: <Mop className="h-4 w-4" />, label: "Carpet & upholstery cleaning" },
                { icon: <Sparkles className="h-4 w-4" />, label: "Restroom sanitation" },
                { icon: <Trash2 className="h-4 w-4" />, label: "Recycling programs" }
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="text-blue-600 mr-2">{item.icon}</div>
                  <span className="text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Maintenance Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: <Wrench className="h-4 w-4" />, label: "Electrical maintenance" },
                { icon: <Droplet className="h-4 w-4" />, label: "Plumbing services" },
                { icon: <Hammer className="h-4 w-4" />, label: "Carpentry repairs" },
                { icon: <Wrench className="h-4 w-4" />, label: "HVAC maintenance" },
                { icon: <Hammer className="h-4 w-4" />, label: "Paint touch-ups" },
                { icon: <Wrench className="h-4 w-4" />, label: "Lighting replacement" },
                { icon: <Hammer className="h-4 w-4" />, label: "Door & lock repairs" },
                { icon: <Wrench className="h-4 w-4" />, label: "Preventive maintenance" }
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="text-blue-600 mr-2">{item.icon}</div>
                  <span className="text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Packages */}
      <div className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Service Packages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Basic Package",
              description: "Essential cleaning and maintenance services for small businesses and offices.",
              features: ["Weekly cleaning", "Waste management", "Basic maintenance", "Quarterly deep cleaning"]
            },
            {
              title: "Standard Package",
              description: "Comprehensive services for medium-sized facilities with regular maintenance needs.",
              features: ["Daily cleaning", "Restroom sanitation", "General repairs", "Monthly deep cleaning", "Landscaping"]
            },
            {
              title: "Premium Package",
              description: "Complete facility management for large properties requiring extensive services.",
              features: ["24/7 maintenance support", "Daily thorough cleaning", "Emergency repairs", "Specialized cleaning services", "Full grounds maintenance"]
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

      {/* Special Services */}
      <div className="mb-12 bg-blue-50 p-8 rounded-lg shadow-inner animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Specialized Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale">
            <h3 className="text-lg font-semibold mb-3 text-blue-800">COVID-19 Sanitization</h3>
            <p className="text-gray-600 mb-3 text-sm">
              Specialized deep cleaning and sanitization services following CDC guidelines to ensure your premises remain safe during public health concerns.
            </p>
            <ul className="space-y-1">
              <li className="flex items-start text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>EPA-approved disinfectants</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Electrostatic spraying</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>High-touch surface focus</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale">
            <h3 className="text-lg font-semibold mb-3 text-blue-800">Event Cleaning</h3>
            <p className="text-gray-600 mb-3 text-sm">
              Pre and post-event cleaning services to ensure your venue is pristine before guests arrive and thoroughly cleaned after the event concludes.
            </p>
            <ul className="space-y-1">
              <li className="flex items-start text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Pre-event setup cleaning</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>During-event maintenance</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Post-event thorough cleaning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-sm animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Ready for Pristine Facilities?</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-600">
          Contact us today to discuss your facility management needs and get a customized service plan for your property.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-medium animate-hover-scale"
          >
            Request a Quote
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 bg-white text-blue-700 border border-blue-700 rounded-md shadow-sm hover:shadow-md transition-all duration-300 font-medium animate-hover-scale"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
}