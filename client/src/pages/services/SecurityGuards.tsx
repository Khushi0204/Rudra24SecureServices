import { useTranslation } from "react-i18next";
import { Users, CheckCircle2, Shield, Clock, UserCheck, Calendar, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SecurityGuardsPage() {
  const { t } = useTranslation();

  return (
    <div className="responsive-container page-section">
      <div className="animate-slide-up">
        <h1 className="section-title text-center mb-4">Security Guard Services</h1>
        <p className="section-subtitle text-center mb-12">
          Professional security personnel for residential, commercial, and industrial properties
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 mb-12 shadow-xl text-white animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted Security Guards</h2>
            <p className="mb-6 text-blue-100">
              Our security guards are professionally trained, meticulously vetted, and equipped with the latest technology to ensure maximum protection for your property and people.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Rigorous background verification of all guards</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Regular security training and skill upgrades</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>24/7 monitoring and strict quality control</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>State-of-the-art security equipment</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-800/50 p-6 rounded-lg shadow-inner border border-blue-700/50 max-w-md">
              <div className="h-24 w-24 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl text-yellow-300 font-semibold text-center mb-3">Qualified Security Personnel</h3>
              <p className="text-blue-100 text-center">
                All our guards undergo extensive background checks and training to ensure the highest standards of security and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Guard Types */}
      <div className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Security Personnel Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-10 w-10 text-blue-700" />,
              title: "Static Guards",
              description: "Stationed at specific entry/exit points to monitor access and provide visible security presence."
            },
            {
              icon: <Clock className="h-10 w-10 text-blue-700" />,
              title: "Patrol Guards",
              description: "Mobile security that covers larger areas through regular patrols on foot or with patrol vehicles."
            },
            {
              icon: <UserCheck className="h-10 w-10 text-blue-700" />,
              title: "Personal Security",
              description: "Specialized bodyguards providing personal protection for executives, VIPs, and individuals."
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

      {/* Industries We Serve */}
      <div className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Industries We Serve</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { title: "Residential", description: "Gated communities, apartments, villas" },
            { title: "Commercial", description: "Offices, retail shops, malls" },
            { title: "Industrial", description: "Factories, warehouses, plants" },
            { title: "Educational", description: "Schools, colleges, universities" },
            { title: "Healthcare", description: "Hospitals, clinics, medical centers" },
            { title: "Events", description: "Conferences, weddings, concerts" },
            { title: "Banking", description: "Banks, ATMs, financial institutions" },
            { title: "Hospitality", description: "Hotels, resorts, restaurants" }
          ].map((industry, index) => (
            <div 
              key={index}
              className="bg-blue-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale"
            >
              <h3 className="font-semibold text-blue-800 mb-2">{industry.title}</h3>
              <p className="text-gray-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Plans */}
      <div className="mb-12 bg-blue-50 p-8 rounded-lg shadow-inner animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Security Service Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Basic Security",
              price: "Starting at ₹20,000/month",
              features: [
                "Trained security guards",
                "8-hour shifts",
                "Basic reporting",
                "Uniform and equipment",
                "Supervision"
              ]
            },
            {
              title: "Advanced Security",
              price: "Starting at ₹35,000/month",
              features: [
                "Highly trained personnel",
                "24/7 coverage",
                "Advanced reporting system",
                "Communication devices",
                "Regular security audits",
                "Emergency response protocol"
              ]
            },
            {
              title: "Premium Security",
              title2: "Customized Solution",
              features: [
                "Elite security team",
                "24/7 dedicated coverage",
                "Specialized training",
                "Advanced equipment",
                "Threat assessment",
                "Digital reporting",
                "Dedicated account manager"
              ]
            }
          ].map((plan, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{plan.title}</h3>
              {plan.price ? (
                <p className="text-blue-700 font-medium mb-4">{plan.price}</p>
              ) : (
                <p className="text-blue-700 font-medium mb-4">{plan.title2}</p>
              )}
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

      {/* Key Benefits */}
      <div className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Benefits of Our Security Guard Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <UserCog className="h-6 w-6 text-blue-700" />,
              title: "Professionally Trained Guards",
              description: "All security personnel undergo rigorous training in security protocols, emergency response, and customer service."
            },
            {
              icon: <Calendar className="h-6 w-6 text-blue-700" />,
              title: "Flexible Scheduling",
              description: "Customized security schedules based on your specific needs, including 24/7 coverage, event-based, or temporary security."
            },
            {
              icon: <Shield className="h-6 w-6 text-blue-700" />,
              title: "Comprehensive Protection",
              description: "From access control and visitor management to emergency response and loss prevention, our guards provide full-spectrum security."
            },
            {
              icon: <Clock className="h-6 w-6 text-blue-700" />,
              title: "Rapid Response",
              description: "Swift and efficient response to security incidents, with direct communication lines to local law enforcement when needed."
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="flex bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale"
            >
              <div className="bg-blue-50 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4 flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl text-white shadow-xl animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Enhance Your Security?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100">
          Contact us today to discuss your security needs and get a customized guard service plan for your property.
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