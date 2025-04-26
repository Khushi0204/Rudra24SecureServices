import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShieldCheck, 
  Users, 
  Star, 
  Award, 
  Clock, 
  BadgeCheck,
  ClipboardCheck,
  Briefcase,
  FileCheck,
  UserCheck,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Leadership team data
const leadershipTeam = [
  {
    name: "Vipan Kumar",
    position: "Managing Director",
    image: "/images/team/director.jpg",
    bio: "Leads Rudra 24 Secure with extensive industry experience and a vision for comprehensive security and facility management services."
  },
  {
    name: "Security Operations",
    position: "Head Office Team",
    image: "/images/team/operations.jpg",
    bio: "Expert team managing our security operations across Delhi NCR and ensuring the highest standards of service delivery."
  }
];

// Company values
const values = [
  {
    icon: ShieldCheck,
    title: "Security Excellence",
    description: "We are committed to providing the highest level of security services through professional training and meticulous selection of personnel."
  },
  {
    icon: UserCheck,
    title: "Trusted Personnel",
    description: "We recruit mostly ex-servicemen and train them to perform security duties to the highest satisfaction of our clients."
  },
  {
    icon: Clock,
    title: "Responsiveness",
    description: "Our Quick Response Team (QRT) ensures rapid response within 30-60 minutes to any emergency situation."
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "We maintain stringent quality controls and provide continuous supervision to ensure comprehensive security coverage."
  }
];

// Certifications
const certifications = [
  {
    icon: FileCheck,
    title: "ISO 9001:2015 Certified",
    description: "Recognized for our quality management systems that consistently provide services meeting customer and regulatory requirements."
  },
  {
    icon: Briefcase,
    title: "MSME Registered",
    description: "Registered under the Micro, Small & Medium Enterprises Development Act, supporting local business development."
  },
  {
    icon: Building,
    title: "PSARA Licensed",
    description: "Licensed under the Private Security Agencies Regulation Act, ensuring we meet all legal requirements for security services."
  },
  {
    icon: ClipboardCheck,
    title: "Professional Certification",
    description: "Our guards are trained and certified through our professional security guard training academy."
  }
];

export default function AboutPage() {
  const { t } = useTranslation();
  
  useEffect(() => {
    document.title = "About Us | Rudra 24 Secure";
  }, []);
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precision Protection, Powered by Technology.<br />
            An ISO 9001:2015 Certified Company
          </p>
        </div>
        
        {/* Company Overview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Company Overview
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Rudra 24 Secure Services Pvt. Ltd. is a professionally managed security service organization, 
                  providing comprehensive security solutions across Delhi NCR region to individuals and businesses alike.
                </p>
                <p className="text-gray-700 mb-4">
                  We follow the philosophy of "Precision Protection, Powered by Technology" in our approach to security, 
                  combining well-trained personnel with modern security technologies to provide reliable protection and peace of mind.
                </p>
                <p className="text-gray-700">
                  As an ISO 9001:2015 certified company, we maintain rigorous quality standards in all our operations, 
                  ensuring you receive consistent, professional service that meets the highest industry standards.
                </p>
                <div className="mt-6">
                  <Button
                    variant="default"
                    className="bg-blue-700 hover:bg-blue-800"
                    asChild
                  >
                    <a href="/Rudra24-Secure-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                      Download Company Brochure
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Why Choose Rudra 24 Secure?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>ISO 9001:2015 certified security and facility management company</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Round-the-clock 24/7 control room for continuous monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ex-servicemen and professionally trained security personnel</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quick Response Team with 30-60 minute emergency response time</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customized security solutions for residential, corporate, retail and personal security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-t-4 border-blue-600 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mb-20 bg-gray-50 py-12 px-4 rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-600"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-800">{cert.title}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Leadership */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mission & Vision */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-8 rounded-lg shadow-md text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                Our Mission
              </h2>
              <div>
                <p className="mb-4">
                  To provide reliable and professional security services at reasonable costs, ensuring peace of mind 
                  for our clients through comprehensive protection of their assets and personnel.
                </p>
                <p>
                  We aim to set the industry standard for excellence in security services through continuous improvement, 
                  professional development, and adoption of the latest security technologies and methodologies.
                </p>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                Our Vision
              </h2>
              <div>
                <p className="mb-4">
                  To become the most trusted name in security services across India, known for our reliability, 
                  professionalism, and customer-focused approach to comprehensive security solutions.
                </p>
                <p>
                  We envision a future where every client receives tailored security services that perfectly match 
                  their specific needs, delivered by highly trained professionals using the most effective security practices.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-blue-600">
            <p className="text-lg font-medium">
              "FOR MOST RELIABLE AND PROFESSIONAL SECURITY AT REASONABLE COST"
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}