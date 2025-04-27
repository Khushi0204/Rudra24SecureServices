import { useTranslation } from "react-i18next";
import { 
  FileSearch, 
  CheckCircle2, 
  Shield, 
  Search, 
  ClipboardList,
  AlertTriangle,
  Lock,
  FileText,
  BarChart3,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SecurityAuditForm from "@/components/audit/SecurityAuditForm";

export default function SecurityAuditPage() {
  const { t } = useTranslation();

  return (
    <div className="page-section">
      <div className="responsive-container">
        <div className="animate-slide-up">
          <h1 className="section-title text-center mb-4">Security Audit & Assessment</h1>
          <p className="section-subtitle text-center mb-12">
            Comprehensive security evaluations to identify vulnerabilities and improve protection
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 mb-12 shadow-xl text-white animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Security Assessment</h2>
              <p className="mb-6 text-blue-100">
                Our security audit service provides a detailed assessment of your property's security measures, identifying vulnerabilities and providing actionable recommendations to enhance your security posture.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Comprehensive evaluation of physical and operational security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Detailed report with vulnerability assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Customized security improvement recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Priority-based implementation strategy</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-blue-800/50 p-6 rounded-lg shadow-inner border border-blue-700/50 max-w-md">
                <div className="h-24 w-24 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FileSearch className="h-12 w-12 text-yellow-400" />
                </div>
                <h3 className="text-xl text-yellow-300 font-semibold text-center mb-3">Identify & Address Security Gaps</h3>
                <p className="text-blue-100 text-center">
                  Our expert security professionals will conduct a thorough assessment to identify vulnerabilities and provide actionable solutions to strengthen your security measures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Process */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Security Audit Process</h2>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Initial Assessment",
                  description: "Gather information about your property and existing security measures",
                  icon: <ClipboardList className="h-8 w-8 text-blue-600" />
                },
                {
                  number: "02",
                  title: "On-Site Inspection",
                  description: "Thorough examination of physical security elements and procedures",
                  icon: <Search className="h-8 w-8 text-blue-600" />
                },
                {
                  number: "03",
                  title: "Vulnerability Analysis",
                  description: "Identify security gaps and potential risks to your property",
                  icon: <AlertTriangle className="h-8 w-8 text-blue-600" />
                },
                {
                  number: "04",
                  title: "Detailed Reporting",
                  description: "Comprehensive report with actionable recommendations",
                  icon: <FileText className="h-8 w-8 text-blue-600" />
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md relative z-10 animate-hover-scale"
                >
                  <div className="absolute -top-4 -left-4 bg-blue-700 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex justify-center mb-4 mt-4">
                    <div className="bg-blue-50 p-3 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-blue-800 mb-2 text-lg text-center">{step.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{step.description}</p>
                </div>
              ))}
            </div>
            
            {/* Connecting Line (visible on desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 z-0"></div>
          </div>
        </div>

        {/* Areas of Assessment */}
        <div className="mb-12 bg-blue-50 p-8 rounded-lg shadow-inner animate-fade-in">
          <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Areas of Security Assessment</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Lock className="h-8 w-8 text-blue-700" />,
                title: "Physical Security",
                items: [
                  "Access control systems",
                  "Perimeter security",
                  "Lock and key management",
                  "Barrier effectiveness",
                  "Critical asset protection"
                ]
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-700" />,
                title: "Technical Security",
                items: [
                  "Surveillance systems",
                  "Alarm systems",
                  "Lighting assessment",
                  "Communication systems",
                  "Security technology integration"
                ]
              },
              {
                icon: <FileSearch className="h-8 w-8 text-blue-700" />,
                title: "Operational Security",
                items: [
                  "Security procedures",
                  "Emergency response plans",
                  "Staff security awareness",
                  "Incident reporting protocols",
                  "Security policy evaluation"
                ]
              }
            ].map((area, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {area.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-blue-800 mb-3 text-xl text-center">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Benefits of Security Audits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <AlertTriangle className="h-10 w-10 text-blue-700" />,
                title: "Identify Vulnerabilities",
                description: "Discover security gaps before they can be exploited by detecting weaknesses in your current security measures."
              },
              {
                icon: <Shield className="h-10 w-10 text-blue-700" />,
                title: "Enhance Protection",
                description: "Implement targeted security improvements based on expert recommendations tailored to your specific needs."
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-blue-700" />,
                title: "Optimize Resources",
                description: "Allocate security resources more effectively by focusing on areas that provide the greatest risk reduction."
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-blue-700" />,
                title: "Measure Effectiveness",
                description: "Establish benchmarks to evaluate security improvements and track progress over time."
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale"
              >
                <div className="mr-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Types */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Types of Security Audits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Basic Security Survey",
                price: "Free Online Assessment",
                description: "Initial evaluation of security needs with basic recommendations",
                features: [
                  "Online questionnaire",
                  "Basic security assessment",
                  "General recommendations",
                  "Email delivery of report"
                ]
              },
              {
                title: "Standard Security Audit",
                price: "Starting at ₹15,000",
                description: "Comprehensive on-site evaluation of security measures",
                features: [
                  "On-site physical inspection",
                  "Technical security evaluation",
                  "Detailed vulnerability report",
                  "Prioritized recommendations",
                  "Implementation guidance"
                ]
              },
              {
                title: "Advanced Security Assessment",
                price: "Starting at ₹35,000",
                description: "In-depth security analysis with custom solutions",
                features: [
                  "Comprehensive security analysis",
                  "Risk profiling and threat assessment",
                  "Security policy development",
                  "Custom security strategy",
                  "Implementation planning",
                  "Follow-up evaluations"
                ]
              }
            ].map((type, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col animate-hover-scale"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{type.title}</h3>
                <p className="text-blue-700 font-medium mb-2">{type.price}</p>
                <p className="text-gray-600 mb-4 text-sm">{type.description}</p>
                <div className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant={index === 0 ? "secondary" : "outline"}
                  className={index === 0 ? "" : "border-blue-700 text-blue-700 hover:bg-blue-50"}
                  asChild
                >
                  <a href={index === 0 ? "#audit-form" : "#contact"}>
                    {index === 0 ? "Start Free Assessment" : "Request Quote"}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white shadow-xl animate-slide-up">
          <h2 className="text-2xl font-bold mb-8 text-center">Industries We Serve</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              "Residential",
              "Commercial",
              "Retail",
              "Industrial",
              "Educational",
              "Healthcare",
              "Hospitality",
              "Banking",
              "Government",
              "Events",
              "Transportation",
              "Religious"
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-blue-800/50 p-4 rounded-lg shadow-md border border-blue-700/30 hover:bg-blue-800/70 transition-all duration-300 text-center animate-hover-scale"
              >
                <p className="text-white font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl text-white shadow-xl mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Enhance Your Security?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Take the first step toward stronger security. Complete our free online assessment or contact us for a personalized security audit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="animate-hover-scale"
              asChild
            >
              <a href="#audit-form">Start Free Assessment</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800 animate-hover-scale"
              asChild
            >
              <a href="#contact">Contact For Full Audit</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Audit Form Section */}
      <div id="audit-form">
        <SecurityAuditForm />
      </div>
    </div>
  );
}