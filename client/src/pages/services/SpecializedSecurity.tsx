import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Users, Shield, UserCheck, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageFadeIn } from "@/components/shared/PageTransition";
import { Link } from "wouter";

export default function SpecializedSecurity() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specializedServices = [
    {
      title: "VIP Protection",
      description: "Professional bodyguards and security detail for high-profile individuals and executives",
      icon: <Shield className="h-6 w-6" />,
      features: ["24/7 close protection", "Threat assessment", "Secure transportation", "Advanced training"]
    },
    {
      title: "Event Security",
      description: "Comprehensive security for weddings, corporate gatherings, concerts, and public events",
      icon: <Users className="h-6 w-6" />,
      features: ["Crowd management", "Access control", "Emergency response", "Plainclothes officers"]
    },
    {
      title: "Female Security Guards",
      description: "Specialized female security personnel for gender-sensitive environments and VIP protection",
      icon: <UserCheck className="h-6 w-6" />,
      features: ["Gender-sensitive", "Professionally trained", "Residential security", "Executive protection"]
    },
    {
      title: "Quick Response Team",
      description: "Rapid response security teams available 24/7 for emergencies and urgent security needs",
      icon: <Clock className="h-6 w-6" />,
      features: ["30-60 min response", "Armed personnel", "Crisis management", "Tactical training"]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageFadeIn>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Specialized Security Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced security solutions for unique requirements, delivered by our elite security personnel.
            </p>
          </div>
        </PageFadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {specializedServices.map((service, index) => (
            <PageFadeIn key={index} delay={index * 100}>
              <Card className="h-full border-blue-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 relative">
                  <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-blue-800 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="bg-blue-50 text-blue-700 border-blue-200 transition-all duration-300 hover:bg-blue-100"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <Button
                      variant="outline"
                      className="w-full text-blue-700 border-blue-300 hover:bg-blue-50"
                      asChild
                    >
                      <Link to="/contact" className="flex items-center justify-center">
                        <Phone className="mr-2 h-4 w-4" />
                        Get a Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </PageFadeIn>
          ))}
        </div>
        
        <PageFadeIn delay={400}>
          <div className="bg-blue-800 text-white rounded-xl p-8 shadow-xl mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/security-pattern.png')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20 -ml-32 -mb-32"></div>
            
            <div className="relative">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Elite Security Personnel</h2>
                
                <p className="text-blue-100 mb-6">
                  Our specialized security services are provided by highly trained professionals with diverse backgrounds, including:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    "Ex-military personnel",
                    "Former police officers",
                    "Martial arts experts",
                    "Crisis management specialists",
                    "Certified security professionals",
                    "Executive protection experts"
                  ].map((personnel, index) => (
                    <div key={index} className="bg-blue-700/30 rounded-lg p-3 text-center border border-blue-700/40">
                      {personnel}
                    </div>
                  ))}
                </div>
                
                <Button 
                  asChild
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-6"
                >
                  <Link to="/contact">
                    Request Specialized Security Service
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </PageFadeIn>
        
        <PageFadeIn delay={600}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Our Specialized Security</h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Elite Personnel Selection",
                    description: "Our specialized security officers undergo a rigorous selection process, with only 1 in 20 applicants making it through our standards."
                  },
                  {
                    title: "Advanced Training Programs",
                    description: "Regular training in combat techniques, threat assessment, defensive driving, and emergency response protocols."
                  },
                  {
                    title: "Customized Security Plans",
                    description: "Each client receives a tailor-made security plan based on a comprehensive risk assessment of their unique requirements."
                  },
                  {
                    title: "State-of-the-Art Equipment",
                    description: "Our specialized security teams are equipped with the latest technology in communication, surveillance, and protective gear."
                  }
                ].map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-700 mb-1">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Client Testimonials</h2>
              
              {[
                {
                  quote: "Their VIP protection team was exceptional during our high-profile corporate event. Discreet yet vigilant - exactly what we needed.",
                  author: "Rajiv M., Corporate Event Manager"
                },
                {
                  quote: "I've worked with several security companies, but Rudra 24's specialized team stands out for their professionalism and attention to detail.",
                  author: "Priya S., Hotel Security Director"
                },
                {
                  quote: "The female security team provided for our women's conference was both highly skilled and perfectly suited for our requirements.",
                  author: "Anjali K., Event Coordinator"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <p className="italic text-gray-700 mb-3">"{testimonial.quote}"</p>
                  <p className="text-blue-800 font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </PageFadeIn>
        
        <PageFadeIn delay={800}>
          <div className="text-center p-10 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl shadow-lg border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Ready to Discuss Your Specialized Security Requirements?</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Our security experts are standing by to discuss your unique needs and design a customized security solution that provides peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-700 hover:bg-blue-800"
              >
                <Link to="/contact">
                  Contact Security Expert
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-blue-700 border-blue-300 hover:bg-blue-50"
              >
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </PageFadeIn>
      </div>
    </div>
  );
}