import { useTranslation } from "react-i18next";
import { CheckCircle2, FileText, Shield, Eye, Clock, ClipboardList, AlertTriangle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SecurityAuditPage() {
  const { t } = useTranslation();

  return (
    <div className="responsive-container page-section">
      <div className="animate-slide-up">
        <h1 className="section-title text-center mb-4">Security Audit & Assessment</h1>
        <p className="section-subtitle text-center mb-12">
          Comprehensive security assessment to identify vulnerabilities and improve your security posture
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 mb-12 shadow-xl text-white animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Security Assessments</h2>
            <p className="mb-6 text-blue-100">
              Our security audit service provides a thorough assessment of your property's security strengths and vulnerabilities. Our expert team conducts comprehensive evaluations to identify potential risks and recommend targeted improvements.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Detailed security vulnerability assessment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Customized security recommendations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Compliance with industry standards</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Implementation assistance and follow-up</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-800/50 p-6 rounded-lg shadow-inner border border-blue-700/50 max-w-md">
              <div className="h-24 w-24 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ClipboardList className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl text-yellow-300 font-semibold text-center mb-3">Expert Security Evaluation</h3>
              <p className="text-blue-100 text-center">
                Our security audits identify vulnerabilities before they can be exploited, helping you protect your people, property, and assets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Process */}
      <div className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Our Security Audit Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              icon: <ClipboardList className="h-10 w-10 text-blue-700" />,
              title: "Initial Assessment",
              description: "Thorough evaluation of current security measures, practices, and potential vulnerabilities."
            },
            {
              icon: <AlertTriangle className="h-10 w-10 text-blue-700" />,
              title: "Risk Identification",
              description: "Detailed analysis to identify security gaps, weaknesses, and potential threats to your property."
            },
            {
              icon: <FileText className="h-10 w-10 text-blue-700" />,
              title: "Recommendations",
              description: "Custom security improvement plan with prioritized actions based on risk level and implementation complexity."
            },
            {
              icon: <Shield className="h-10 w-10 text-blue-700" />,
              title: "Implementation",
              description: "Assistance with implementing security improvements and ongoing support for maximum protection."
            }
          ].map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600 animate-hover-scale"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Areas */}
      <div className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Key Areas We Evaluate</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Lock className="h-8 w-8 text-blue-600" />,
              title: "Physical Security",
              items: [
                "Entry points and access control",
                "Perimeter security measures",
                "Lighting and visibility",
                "Lock and key management"
              ]
            },
            {
              icon: <Eye className="h-8 w-8 text-blue-600" />,
              title: "Security Systems",
              items: [
                "Surveillance equipment",
                "Alarm systems",
                "Motion detection",
                "Security monitoring"
              ]
            },
            {
              icon: <Shield className="h-8 w-8 text-blue-600" />,
              title: "Security Procedures",
              items: [
                "Emergency response plans",
                "Staff security training",
                "Security policy review",
                "Incident reporting protocols"
              ]
            }
          ].map((area, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 animate-hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  {area.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800 text-center">{area.title}</h3>
              <ul className="space-y-2">
                {area.items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-12 bg-blue-50 p-8 rounded-lg shadow-inner animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Benefits of Security Audits</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "Risk Reduction",
              description: "Identify and address vulnerabilities before they can be exploited",
              icon: <AlertTriangle className="h-6 w-6 text-blue-700" />
            },
            {
              title: "Compliance",
              description: "Ensure adherence to industry standards and regulations",
              icon: <ClipboardList className="h-6 w-6 text-blue-700" />
            },
            {
              title: "Cost Savings",
              description: "Prevent costly security incidents and optimize security spending",
              icon: <DollarSign className="h-6 w-6 text-blue-700" />
            },
            {
              title: "Peace of Mind",
              description: "Confidence in your security measures and emergency preparedness",
              icon: <Shield className="h-6 w-6 text-blue-700" />
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-hover-scale"
            >
              <div className="flex justify-center mb-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="font-semibold text-blue-800 text-center text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-center text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-xl p-8 shadow-xl mb-12 animate-fade-in">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Enhance Your Security?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Start with a free security audit and take the first step toward comprehensive protection for your property and people.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="animate-hover-scale"
              asChild
            >
              <a href="#audit">Start Free Security Audit</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800 animate-hover-scale"
              asChild
            >
              <a href="#contact">Contact Security Experts</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Sample Report Preview */}
      <div className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Sample Audit Report</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-3xl mx-auto">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-700 mr-2" />
            <h3 className="text-xl font-semibold text-blue-800">Security Assessment Report</h3>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Property:</p>
                <p className="font-medium">Commercial Office Building</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date:</p>
                <p className="font-medium">January 15, 2023</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium text-blue-700 mb-2">Executive Summary</h4>
              <p className="text-gray-700 text-sm">
                This security assessment identified 12 potential vulnerabilities across physical security, 
                surveillance systems, and security procedures. Key recommendations include upgrading access 
                control systems, enhancing perimeter security, and implementing staff security training.
              </p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium text-blue-700 mb-2">Risk Level Distribution</h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-red-100 p-2 rounded">
                  <p className="text-sm font-medium text-red-700">High Risk</p>
                  <p className="text-xl font-bold text-red-800">3</p>
                </div>
                <div className="bg-yellow-100 p-2 rounded">
                  <p className="text-sm font-medium text-yellow-700">Medium Risk</p>
                  <p className="text-xl font-bold text-yellow-800">5</p>
                </div>
                <div className="bg-green-100 p-2 rounded">
                  <p className="text-sm font-medium text-green-700">Low Risk</p>
                  <p className="text-xl font-bold text-green-800">4</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>This is a sample report preview. Actual reports include detailed findings and recommendations.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

function DollarSign(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <line x1="12" x2="12" y1="2" y2="22"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
}