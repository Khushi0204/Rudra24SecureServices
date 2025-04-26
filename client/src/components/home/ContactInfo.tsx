import { Building, Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactInfo() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Contact Information</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Please call or contact us if you have any suggestions, queries, or complaints
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="border-t-4 border-blue-600 shadow-md">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Building className="text-blue-600" />
                <CardTitle>Corporate Office</CardTitle>
              </div>
              <CardDescription>
                Our main headquarters location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <address className="not-italic">
                <p className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Rudra House Plot No.72, Street No.2, Sunita Vihar, 
                    (Near Indira Puri 2 No) Loni, Ghaziabad (UP) 201102
                  </span>
                </p>
                <p className="flex items-center mb-3">
                  <Phone className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span>9625785431, 9625729177, 9625724855</span>
                </p>
              </address>
              
              <div className="pt-4 mt-4 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 mb-2">Online Presence</h4>
                <p className="flex items-center mb-2">
                  <Mail className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <a href="mailto:Rudra24securegroup@gmail.com" className="text-blue-600 hover:underline">
                    Rudra24securegroup@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <a href="mailto:rudra24securepl@gmail.com" className="text-blue-600 hover:underline">
                    rudra24securepl@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-blue-600 shadow-md">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Building className="text-blue-600" />
                <CardTitle>Branch Locations</CardTitle>
              </div>
              <CardDescription>
                Our presence across the region
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Branch Offices
                </h4>
                <p className="ml-7 text-gray-700">
                  Delhi, Noida, Ghaziabad, Faridabad, Gurugram, Sonipat, etc.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Branch Contact
                </h4>
                <p className="ml-7 text-gray-700">
                  8860430007, 9999881949
                </p>
              </div>
              
              <div className="pt-4 mt-4 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 mb-2">Website</h4>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <a href="https://www.rudra24secure.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.rudra24secure.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            "FOR MOST RELIABLE AND PROFESSIONAL SECURITY AT REASONABLE COST"
          </p>
        </div>
      </div>
    </section>
  );
}