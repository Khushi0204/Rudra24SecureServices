import { Users, UserCheck, Ruler, BookOpen, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function RecruitmentTraining() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Recruitment & Training</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Human Resource is the one of the most abundant natural resources on the earth. 
            The difference is of Trained Humans and untrained ones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
              <Users className="mr-3 text-blue-600" />
              Selection & Recruitment
            </h3>
            <p className="text-gray-700 mb-6">
              Rudra 24 Secure Services Pvt Ltd. Training Programs are designed to improve skill and knowledge of 
              Each individual, with the Objectives of providing smart, motivated and effective guards. 
            </p>
            <p className="text-gray-700 mb-6">
              Our strength of having good presence in Hills and States adjoining Hills like Uttaranchal, Himachal 
              play an important role in having good percentage Ex-serviceman and people from Hills as trainees at 
              our training institute, which in turn results in more dedicated and honest individuals as guards or 
              Supervisors.
            </p>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-3">Composition of Our Recruitment</h4>
              <p className="text-gray-700">
                We recruit mostly Ex-servicemen and train them to perform security duties to the satisfaction 
                level of client. Apart from this, we also recruit NCC, Home Guards, & Civil Defense trained 
                individuals and civilians with aptitude after verification from our own investigator and give 
                them rigorous training at Vishwakarma Vansaj International Federation (NGO) before selection for 
                performing security duties.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-blue-700 text-white rounded-xl shadow-md p-6 flex-1">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Ruler className="mr-2" />
                Physical Parameters
              </h3>
              <p className="mb-2">
                Personnel recruited by us are of height minimum 5'7" for General category and 5'5" for Gorkhas, 
                Garhwali, Kumauni and weight proportionate to height.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-xl shadow-md p-6 flex-1">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2" />
                Educational Parameters
              </h3>
              <p className="mb-2">
                Personnel recruited by us are minimum matriculate and minimum ARMY 11, 11 for Ex-servicemen. 
                Personnel recruited for specialized jobs are on the basis of requirement for that specific job.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-xl shadow-md p-6 flex-1">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="mr-2" />
                Age Parameters
              </h3>
              <p className="mb-2">
                Personnel recruited by us are of minimum 20 years of age and maximum 45 years of age. 
                For Ex-servicemen we have relaxation up to 50 years for supervisors and above ranks.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/3">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <UserCheck className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Security Guard Training Academy</h3>
              <p className="text-gray-700 mb-4">
                We've established a professional training institute that certifies security personnel. Our clients trust our 
                guards more knowing they have received thorough professional training.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {["PASARA Guided Training", "On-Job Training (OJT)", "Emergency Response Training"].map((item, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded text-center text-blue-800 text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}