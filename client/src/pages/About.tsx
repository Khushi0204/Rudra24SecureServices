import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Users, Star, Award } from 'lucide-react';

// Team members data
const teamMembers = [
  {
    name: "Rajesh Kumar",
    position: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Rajesh has over 20 years of experience in security management and founded SecureGuard Services in 2005."
  },
  {
    name: "Priya Sharma",
    position: "Operations Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Priya oversees all security operations and ensures that our clients receive the highest level of service."
  },
  {
    name: "Ankit Patel",
    position: "Housekeeping Manager",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    bio: "Ankit manages our professional housekeeping team and ensures all cleaning services meet our high standards."
  },
  {
    name: "Deepa Gupta",
    position: "Training Manager",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Deepa develops and implements comprehensive training programs for our security and housekeeping staff."
  }
];

// Company values
const values = [
  {
    icon: ShieldCheck,
    title: "Security Excellence",
    description: "We are committed to providing the highest level of security services through continuous improvement and innovation."
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Our clients' needs are at the center of everything we do. We listen, understand, and deliver solutions that exceed expectations."
  },
  {
    icon: Star,
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical standards that build trust with our clients and employees."
  },
  {
    icon: Award,
    title: "Professional Development",
    description: "We invest in our team's growth and development to ensure they have the skills and knowledge to excel in their roles."
  }
];

export default function AboutPage() {
  const { t } = useTranslation();
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        
        {/* Company History */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {t('about.history')}
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Founded in 2005, SecureGuard Services has grown from a small team of dedicated security professionals to one of India's leading security and housekeeping service providers.
                </p>
                <p className="text-gray-700 mb-4">
                  Our journey began when our founder, Rajesh Kumar, recognized the need for a security service that combined professional excellence with a deep understanding of local security challenges.
                </p>
                <p className="text-gray-700">
                  Today, we operate across major cities in India, serving residential complexes, commercial properties, industrial facilities, and retail establishments with our comprehensive security and housekeeping solutions.
                </p>
              </div>
              <div className="relative h-80 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-700 opacity-90"></div>
                <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">15+ Years</h3>
                  <p className="text-xl mb-2">Of Excellence</p>
                  <p className="text-xl mb-2">1000+ Satisfied Clients</p>
                  <p className="text-xl mb-2">500+ Security Professionals</p>
                  <p className="text-xl">Pan-India Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-t-4 border-primary shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Team Members */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {t('about.team')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mission */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {t('about.mission')}
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 mb-6">
              Our mission is to provide peace of mind through exceptional security and housekeeping services that protect and maintain our clients' properties, assets, and people.
            </p>
            <p className="text-xl text-gray-700">
              We strive to be India's most trusted security and housekeeping service provider by delivering consistent excellence, fostering innovation, and maintaining the highest standards of integrity and professionalism in all our operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}