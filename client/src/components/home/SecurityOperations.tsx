import { Shield, Eye, Clock, User, Building, BellRing } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SecurityOperations() {
  const { t } = useTranslation();
  
  const operations = [
    {
      title: "Guarding Services",
      description: "Rudra 24 Secure Services Pvt Ltd. Provides highly trained personnel who are responsible for security and safety of individuals and premises. Our guards help prevent losses caused by burglary, arson, fire flooding, vandalism and careless accidents.",
      icon: <Shield className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Inspections & Surprise Checks",
      description: "These are carried out at pre-determined and preplanned frequencies at irregular intervals in daytime as well as in night by a team of mobile supervisors. Each round of inspection is monitored and recorded.",
      icon: <Eye className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Round the Clock Supervision",
      description: "Rudra 24 Secure Services Pvt Ltd. Places great importance on the quality and depth of supervision. It gives the company, the required edge to pre-empt threats of any kinds to security, ensuring safety to personal and business assets.",
      icon: <Clock className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Access Control & Reception",
      description: "Vetting all visitor, ensure smooth flow of authorized ones and intercepting unwanted ones and monitoring, recording and control of activities at the gate or reception is an important function which, Rudra 24 Secure Services Pvt Ltd. Guards are specially trained for.",
      icon: <User className="h-10 w-10 text-blue-600" />
    },
    {
      title: "24X7 Connect Control Room",
      description: "To support quality service, the Rudra 24 Secure Services Pvt Ltd. has developed a concept of 24 hrs. control room. Located at regional offices and branches, the control room acts as a one-point communication, command & response center after regular office hours.",
      icon: <BellRing className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Rapid Emergency Response",
      description: "Offering a guaranteed rapid response team that reaches any emergency site within 30-60 minutes. This feature is available as a premium service for high-risk areas.",
      icon: <Building className="h-10 w-10 text-blue-600" />
    }
  ];
  
  const additionalServices = [
    {
      title: "Smart Security Integration",
      description: "AI-powered surveillance cameras, motion sensors, and facial recognition technology with mobile app monitoring and alerts",
      features: ["Business Centered BI Dashboards", "CCTV Surveillance Systems", "Intrusion detection Systems"]
    },
    {
      title: "Security Guard Training Academy",
      description: "Professional training institute that certifies security personnel, ensuring clients receive guards with verified professional credentials",
      features: ["PASARA Guided Training", "OJT- On Job Training", "First-aid & emergency response"]
    },
    {
      title: "Value Added Services",
      description: "Going beyond traditional security with specialized solutions for comprehensive protection",
      features: ["QRT- Quick Response Team", "24X7 Virtual Supervisor", "24X7 Control Room"]
    },
    {
      title: "Women Security Guard Services",
      description: "Specially trained female security personnel for environments requiring additional sensitivity",
      features: ["For schools and hospitals", "Corporate offices", "Women-focused events"]
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">SECURITY Operations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rudra 24 Secure Services Pvt Ltd provides Trained Security Guards, Reception Guards, Supervisors and Gun men for 
            handling Operations related to security in a factory, institute or any other area.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {operations.map((op, index) => (
            <Card key={index} className="border-t-4 border-blue-600 hover:shadow-lg transition">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-2">
                  {op.icon}
                  <CardTitle className="text-xl">{op.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{op.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-lg p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Professional & Tech-Equipped Security Guards</h3>
            <p className="max-w-2xl mx-auto">
              Our security guards are equipped with professional tools and technology to ensure maximum effectiveness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Smart uniforms with body cams and communication devices",
              "First-aid & emergency response training",
              "Customer service skills training",
              "Professional equipment including detectors, batons, traffic cones, and walkie-talkies"
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-800 to-blue-700 text-white">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-blue-100">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}