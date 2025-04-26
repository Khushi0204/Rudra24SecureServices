import { Shield, CheckCircle, UserCheck, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CompanyProfile() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Group Profile</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            "FOR MOST RELIABLE AND PROFESSIONAL SECURITY AT REASONABLE COST"
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Welcome to Rudra 24 Secure</h3>
            <p className="text-gray-700 mb-6">
              Growing greed, rising urge to splurge increasing lawlessness in our society, protection
              of resources and movable & immovable assets, is becoming an area of strategic concern.
              Sound security, therefore is emerging as a vital area of concern and need of the day in
              the conduct of the business, be it in the private or in the public sector.
            </p>
            <p className="text-gray-700 mb-6">
              Rudra 24 Secure Services Pvt Ltd. established in 2025 with dream to become one of the biggest & 
              most quality conscious organization offering world class products and services to improve the 
              quality of life in India and Indian subcontinent.
            </p>
            <div className="flex items-center text-primary mb-4">
              <Shield className="mr-2" /> 
              <h4 className="text-xl font-medium">All Types of Outsourcing Solution Under One Roof</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Cleaning Equipment's, Security Surveillance Equipment's Facility Services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Security Services, Building, Maintenance Services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Office Supporting Services, Staffing Services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Nursing and Patient Care Services</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/images/rudra-text-logo-new.jpg" 
              alt="Rudra 24 Secure Services" 
              className="w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-2">Customizable Security Plans</h3>
            <p className="text-gray-600">
              Instead of offering generic security services, we provide tailor-made solutions for your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Residential Security",
                description: "Villas, gated communities",
                icon: <Shield className="text-blue-600" />
              },
              {
                title: "Corporate Security",
                description: "Banks, IT firms, offices",
                icon: <Shield className="text-indigo-600" />
              },
              {
                title: "Event Security",
                description: "Concerts, weddings, VIP gatherings",
                icon: <Shield className="text-purple-600" />
              },
              {
                title: "Retail & Mall Security",
                description: "Shops, supermarkets",
                icon: <Shield className="text-pink-600" />
              },
              {
                title: "Personal Bodyguard",
                description: "For celebrities, businessmen",
                icon: <UserCheck className="text-red-600" />
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-lg hover:bg-blue-50 transition">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-3" />
              Our Mission
            </h3>
            <p className="mb-4">
              We will strive towards delighting our customers by providing committed ethical, efficient and cost-effective 
              service while constantly adding value through innovations in our services and up graduation of our skills.
            </p>
            <p>
              We will offer our human assets a challenging and healthy work environment where individual's natured 
              performance is rewarded and opportunities are provided for continuous growth and development.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-amber-400 text-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-3" />
              Our Vision
            </h3>
            <p>
              To establish "Rudra 24 Secure Services Pvt Ltd" as a No.1 'Security and Facility Management Solution 
              provider in India and 'Rudra 24 Secure Services Pvt Ltd' as an India brand in international security industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}