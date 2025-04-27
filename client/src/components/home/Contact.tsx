import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss your security and
              housekeeping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-secondary mr-3 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-medium">Head Office</h4>
                    <p className="text-gray-300">
                      Rudra House Plot No.72, Street No.2, Sunita Vihar
                      <br />
                      (Near Indira Puri 2 No) Loni, Ghaziabad (UP) 201102
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-secondary mr-3 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-medium">Branch Offices</h4>
                    <p className="text-gray-300">
                      Delhi, Noida, Ghaziabad, Faridabad, Gurugram, Sonipat, etc.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-secondary mr-3 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-300">
                      9625785431, 9625729177, 9625724855
                      <br />
                      Branch: 8860430007, 9999881949
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-secondary mr-3 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-300">
                      <a href="mailto:Rudra24securegroup@gmail.com" className="hover:text-yellow-300">
                        Rudra24securegroup@gmail.com
                      </a>
                      <br />
                      <a href="mailto:rudra24securepl@gmail.com" className="hover:text-yellow-300">
                        rudra24securepl@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-secondary mr-3 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <p className="text-gray-300">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      24/7 Security Services Available
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-white hover:text-secondary transition"
                    >
                      <i className="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-secondary transition"
                    >
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-secondary transition"
                    >
                      <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-secondary transition"
                    >
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 rounded-lg p-8 shadow-lg flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-6 text-center">Need to Get in Touch?</h3>
              <p className="text-gray-300 mb-8 text-center">
                Visit our contact page to send us a message. Our team is ready to assist you with any questions or concerns you may have.
              </p>
              
              <div className="w-full flex justify-center">
                <Button 
                  asChild
                  size="lg"
                  variant="secondary"
                  className="px-8 py-6 text-lg font-semibold animate-pulse-slow hover:animate-none transition-all duration-300"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us Now <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}