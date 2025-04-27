import { useTranslation } from "react-i18next";
import { 
  Building, 
  CheckCircle2, 
  Wrench, 
  Paintbrush, 
  Leaf, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  ClipboardCheck,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FacilityManagementPage() {
  const { t } = useTranslation();

  return (
    <div className="responsive-container page-section">
      <div className="animate-slide-up">
        <h1 className="section-title text-center mb-4">Facility Management Services</h1>
        <p className="section-subtitle text-center mb-12">
          Comprehensive facility maintenance and management solutions for all properties
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 mb-12 shadow-xl text-white animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Complete Facility Management</h2>
            <p className="mb-6 text-blue-100">
              Our facility management services provide comprehensive solutions for property maintenance, cleaning, and operational support to ensure your facilities operate smoothly and efficiently.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Experienced and trained facility management personnel</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Customized services based on your specific requirements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Regular quality audits and performance reports</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Latest equipment and eco-friendly cleaning solutions</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-800/50 p-6 rounded-lg shadow-inner border border-blue-700/50 max-w-md">
              <div className="h-24 w-24 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Building className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl text-yellow-300 font-semibold text-center mb-3">One-Stop Facility Solutions</h3>
              <p className="text-blue-100 text-center">
                From building maintenance to janitorial services, we provide a single point of contact for all your facility management needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Facility Management Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Wrench className="h-10 w-10 text-blue-700" />,
              title: "Building Maintenance",
              description: "Preventive and corrective maintenance services for building systems including electrical, plumbing, and HVAC."
            },
            {
              icon: <Sparkles className="h-10 w-10 text-blue-700" />,
              title: "Housekeeping & Cleaning",
              description: "Comprehensive cleaning services including daily housekeeping, deep cleaning, and specialized floor treatments."
            },
            {
              icon: <Leaf className="h-10 w-10 text-blue-700" />,
              title: "Landscaping & Grounds",
              description: "Professional landscape maintenance, gardening services, and exterior property management."
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
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Comprehensive Facility Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Building Maintenance */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 p-3 rounded-full mr-4">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Building Maintenance</h3>
            </div>
            <ul className="space-y-2">
              {[
                "HVAC system maintenance and repair",
                "Electrical system upkeep and emergency repairs",
                "Plumbing system maintenance and leak detection",
                "Preventive maintenance programs",
                "Building inspections and compliance checks",
                "Minor construction and renovation work"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Housekeeping & Cleaning */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 p-3 rounded-full mr-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Housekeeping & Cleaning</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Daily janitorial services and office cleaning",
                "Floor maintenance (carpet cleaning, hard floor care)",
                "Window and facade cleaning",
                "Upholstery and furniture cleaning",
                "Washroom sanitation and supplies management",
                "Waste management and recycling services"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Landscaping & Grounds */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 p-3 rounded-full mr-4">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Landscaping & Grounds</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Lawn care and garden maintenance",
                "Tree and shrub pruning and care",
                "Seasonal planting and flower bed maintenance",
                "Irrigation system management",
                "Outdoor common area maintenance",
                "Snow and ice removal (seasonal)"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Support Services */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 p-3 rounded-full mr-4">
                <ClipboardCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Support Services</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Reception and front desk management",
                "Mail room and courier services",
                "Conference room setup and management",
                "Office support services",
                "Event setup and coordination assistance",
                "Inventory management and procurement support"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white shadow-xl animate-slide-up">
        <h2 className="text-2xl font-bold mb-8 text-center">Benefits of Professional Facility Management</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="h-10 w-10 text-yellow-400" />,
              title: "Increased Efficiency",
              description: "Streamlined operations and optimized resource allocation"
            },
            {
              icon: <ShieldCheck className="h-10 w-10 text-yellow-400" />,
              title: "Regulatory Compliance",
              description: "Stay compliant with all relevant building codes and regulations"
            },
            {
              icon: <Users className="h-10 w-10 text-yellow-400" />,
              title: "Improved Occupant Experience",
              description: "Enhanced comfort and satisfaction for building occupants"
            },
            {
              icon: <Paintbrush className="h-10 w-10 text-yellow-400" />,
              title: "Asset Preservation",
              description: "Extended lifespan of building systems and infrastructure"
            },
            {
              icon: <Building className="h-10 w-10 text-yellow-400" />,
              title: "Single Point of Contact",
              description: "One vendor for all facility management needs"
            },
            {
              icon: <CheckCircle2 className="h-10 w-10 text-yellow-400" />,
              title: "Quality Assurance",
              description: "Regular inspections and quality control measures"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="bg-blue-800/50 p-5 rounded-lg shadow-md border border-blue-700/30 hover:bg-blue-800/70 transition-all duration-300 flex flex-col items-center animate-hover-scale"
            >
              <div className="mb-3">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-yellow-300 mb-2 text-lg text-center">{benefit.title}</h3>
              <p className="text-blue-100 text-sm text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Industries We Serve</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { title: "Commercial", icon: <Building className="h-8 w-8 text-blue-700" /> },
            { title: "Residential", icon: <Building className="h-8 w-8 text-blue-700" /> },
            { title: "Retail", icon: <Building className="h-8 w-8 text-blue-700" /> },
            { title: "Educational", icon: <Building className="h-8 w-8 text-blue-700" /> },
            { title: "Healthcare", icon: <Building className="h-8 w-8 text-blue-700" /> },
            { title: "Industrial", icon: <Building className="h-8 w-8 text-blue-700" /> },
          ].map((industry, index) => (
            <div 
              key={index}
              className="bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center animate-hover-scale"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                {industry.icon}
              </div>
              <h3 className="font-semibold text-blue-800 text-center">{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Service Plans */}
      <div className="mb-12 bg-blue-50 p-8 rounded-lg shadow-inner animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Management Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Basic Maintenance",
              price: "Starting at ₹25,000/month",
              features: [
                "Essential building maintenance",
                "Regular housekeeping",
                "Basic grounds maintenance",
                "Monthly quality inspections",
                "8-hour support (business hours)"
              ]
            },
            {
              title: "Comprehensive Management",
              price: "Starting at ₹45,000/month",
              features: [
                "Complete preventive maintenance",
                "Daily housekeeping and cleaning",
                "Full landscape and grounds care",
                "Dedicated facility coordinator",
                "Weekly quality inspections",
                "12-hour support coverage"
              ]
            },
            {
              title: "Premium Facility Solutions",
              price: "Custom Pricing",
              features: [
                "All-inclusive maintenance package",
                "Enhanced cleaning protocols",
                "Comprehensive landscaping services",
                "Dedicated management team",
                "24/7 emergency support",
                "Advanced reporting and analytics",
                "Sustainability initiatives"
              ]
            }
          ].map((plan, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{plan.title}</h3>
              <p className="text-blue-700 font-medium mb-4">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                asChild
              >
                <a href="#contact">Request Quote</a>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl text-white shadow-xl animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Optimize Your Facility Management?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100">
          Contact us today to discuss your facility management needs and get a customized solution for your property.
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
            <a href="#services">View All Services</a>
          </Button>
        </div>
      </div>
    </div>
  );
}