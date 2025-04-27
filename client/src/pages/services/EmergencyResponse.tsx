import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Siren, Clock, Shield, Radio, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageFadeIn } from "@/components/shared/PageTransition";
import { Link } from "wouter";

export default function EmergencyResponse() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageFadeIn>
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="h-20 w-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto animate-pulse-slow">
                <Siren className="h-10 w-10" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Emergency Response Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick Response Team (QRT) with guaranteed rapid response within 30-60 minutes to any emergency situation.
            </p>
          </div>
        </PageFadeIn>
        
        <PageFadeIn delay={200}>
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl p-8 shadow-xl mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/security-pattern.png')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full filter blur-3xl opacity-30 -mr-32 -mt-32"></div>
            
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">24/7 Emergency Security Response</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
                  <Clock className="h-10 w-10 mx-auto mb-4 text-yellow-300" />
                  <h3 className="font-semibold text-xl mb-2">Rapid Response</h3>
                  <p className="text-white/80">Guaranteed arrival within 30-60 minutes of your emergency call</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
                  <Shield className="h-10 w-10 mx-auto mb-4 text-yellow-300" />
                  <h3 className="font-semibold text-xl mb-2">Trained Personnel</h3>
                  <p className="text-white/80">Elite security officers with crisis management expertise</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
                  <Radio className="h-10 w-10 mx-auto mb-4 text-yellow-300" />
                  <h3 className="font-semibold text-xl mb-2">24/7 Monitoring</h3>
                  <p className="text-white/80">Constant communication with our control room for real-time coordination</p>
                </div>
              </div>
              
              <Button 
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-6 text-lg"
              >
                <a href="tel:+911234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Hotline: +91 1234 567 890
                </a>
              </Button>
            </div>
          </div>
        </PageFadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <PageFadeIn delay={400}>
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <Clock className="mr-2 h-6 w-6 text-red-600" />
                How Our Emergency Response Works
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Immediate Alert Reception",
                    description: "Your emergency call is instantly received by our 24/7 control room and logged in our system."
                  },
                  {
                    title: "QRT Deployment",
                    description: "The nearest Quick Response Team is immediately dispatched to your location with real-time navigation."
                  },
                  {
                    title: "Situation Assessment & Action",
                    description: "Upon arrival, our team quickly assesses the situation and takes appropriate security measures."
                  },
                  {
                    title: "Authorities Coordination",
                    description: "If needed, we coordinate with police, fire, or medical services to ensure a comprehensive response."
                  },
                  {
                    title: "Continuous Monitoring",
                    description: "Our control room maintains constant communication with the QRT throughout the incident resolution."
                  },
                  {
                    title: "Post-Incident Report",
                    description: "A detailed report is provided for insurance purposes and future security enhancement."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-700 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PageFadeIn>
          
          <PageFadeIn delay={600}>
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <MapPin className="mr-2 h-6 w-6 text-red-600" />
                QRT Coverage Areas
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our strategically positioned Quick Response Teams provide rapid emergency response across major metropolitan areas and surrounding regions.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-6">
                <h3 className="font-semibold text-blue-800 mb-4">Major Coverage Regions</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    "Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata", 
                    "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Indore"
                  ].map((city, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Premium Response Service</h3>
                  <p className="text-gray-600 mb-4">
                    For clients with our premium security packages, we offer enhanced emergency response with:
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span>Dedicated QRT on standby</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span>15-30 minute guaranteed response time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span>Priority dispatch protocol</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span>Direct access to control room commander</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full"
                    >
                      <Link to="/contact">
                        Inquire About Premium Response
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </PageFadeIn>
        </div>
        
        <PageFadeIn delay={800}>
          <div className="bg-blue-800 text-white rounded-xl p-8 shadow-xl mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/security-pattern.png')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
            
            <div className="relative">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Emergency Response Team Equipment</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Communication",
                      items: ["Two-way radios", "Satellite phones", "Body cameras", "Mobile tracking devices"]
                    },
                    {
                      title: "Vehicle Equipment",
                      items: ["Specialized response vehicles", "GPS navigation", "First aid kits", "Vehicle dash cameras"]
                    },
                    {
                      title: "Personnel Gear",
                      items: ["Protective vests", "Tactical flashlights", "Non-lethal self-defense equipment", "Emergency medical kits"]
                    }
                  ].map((category, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-6 border border-white/20">
                      <h3 className="font-semibold text-yellow-300 mb-3">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-blue-700 text-yellow-300 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                            <span className="text-blue-100">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageFadeIn>
        
        <PageFadeIn delay={1000}>
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-16">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Client Testimonials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote: "When our facility's alarm was triggered at 2 AM, Rudra 24's emergency team arrived within 25 minutes. Their professionalism and quick action prevented what could have been a major theft.",
                  author: "Manish P., Warehouse Manager"
                },
                {
                  quote: "During a security incident at our residential complex, their QRT responded immediately and handled the situation with remarkable efficiency. I feel much safer knowing they're just a call away.",
                  author: "Sunita R., Residential Society President"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <p className="italic text-gray-700 mb-3">"{testimonial.quote}"</p>
                  <p className="text-blue-800 font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </PageFadeIn>
        
        <PageFadeIn delay={1200}>
          <div className="text-center p-10 bg-gradient-to-b from-red-50 to-red-100 rounded-xl shadow-lg border border-red-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Ready to Secure Your Emergency Response Plan?</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Contact our security experts today to discuss how our Emergency Response Services can be integrated into your security plan for immediate protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700"
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Emergency Response Team
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