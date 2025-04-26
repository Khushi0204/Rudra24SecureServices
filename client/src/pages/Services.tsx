import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Shield, Video, Brush, Wrench } from 'lucide-react';
import LocationMap from '@/components/shared/LocationMap';

// Service locations data
const serviceLocations = [
  {
    id: 1,
    name: "SecureGuard HQ",
    address: "123 Security Avenue, Bangalore, Karnataka 560001",
    coordinates: [12.9716, 77.5946] as [number, number], // Bangalore coordinates
  },
  {
    id: 2,
    name: "SecureGuard Delhi Branch",
    address: "456 Protection Road, Delhi, 110001",
    coordinates: [28.6139, 77.2090] as [number, number], // Delhi coordinates
  },
  {
    id: 3,
    name: "SecureGuard Mumbai Office",
    address: "789 Safety Street, Mumbai, Maharashtra 400001",
    coordinates: [19.0760, 72.8777] as [number, number], // Mumbai coordinates
  },
  {
    id: 4,
    name: "SecureGuard Chennai Center",
    address: "101 Guard Lane, Chennai, Tamil Nadu 600001",
    coordinates: [13.0827, 80.2707] as [number, number], // Chennai coordinates
  }
];

// Service details
const services = [
  {
    icon: Shield,
    title: "services.guards.title",
    description: "services.guards.description",
    color: "bg-blue-100 text-blue-700"
  },
  {
    icon: Video,
    title: "services.surveillance.title",
    description: "services.surveillance.description",
    color: "bg-green-100 text-green-700"
  },
  {
    icon: Brush,
    title: "services.housekeeping.title",
    description: "services.housekeeping.description",
    color: "bg-amber-100 text-amber-700"
  },
  {
    icon: Wrench,
    title: "services.maintenance.title",
    description: "services.maintenance.description",
    color: "bg-purple-100 text-purple-700"
  }
];

export default function ServicesPage() {
  const { t } = useTranslation();
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">{t('services.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-t-4 border-primary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{t(service.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {t(service.description)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Service Locations
          </h2>
          <LocationMap locations={serviceLocations} height="500px" zoom={5} />
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow mb-20">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Why Choose SecureGuard Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Highly Trained Personnel</h3>
              <p className="text-gray-600">
                Our security guards and housekeeping staff undergo rigorous training to ensure the highest standards of service.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
              <p className="text-gray-600">
                We tailor our services to meet your specific needs and requirements, ensuring optimal protection and cleanliness.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our team is available around the clock to address any concerns or emergencies that may arise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}