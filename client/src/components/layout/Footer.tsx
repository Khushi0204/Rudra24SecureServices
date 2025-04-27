import { Shield, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-12 pb-6">
      <div className="responsive-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="animate-slide-up">
            <div className="flex items-center mb-4">
              <Shield className="text-yellow-400 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-400">About Rudra 24 Secure</h3>
            </div>
            <img 
              src="/images/rudra-text-logo-new.jpg" 
              alt="Rudra 24 Secure" 
              className="h-16 object-contain mb-4 rounded-md"
            />
            <p className="text-blue-100 mb-6 text-sm">
              Providing comprehensive security and facility management services to
              residential, commercial, and industrial clients since 2018.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 text-white hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 text-white hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 text-white hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 text-white hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-4">
              <Shield className="text-yellow-400 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-400">Our Services</h3>
            </div>
            <ul className="space-y-2">
              {[
                { name: "Security Guards", href: "/services" },
                { name: "Surveillance Systems", href: "/services" },
                { name: "Access Control", href: "/services" },
                { name: "Housekeeping", href: "/services" },
                { name: "Property Maintenance", href: "/services" },
                { name: "Security Audits", href: "#audit" }
              ].map((service, index) => (
                <li key={index} className="group">
                  <Link
                    to={service.href}
                    className="text-blue-100 hover:text-yellow-300 transition-all duration-300 flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1 text-blue-400 group-hover:text-yellow-300 transition-all duration-300 group-hover:translate-x-1" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#audit"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Security Audit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 text-secondary h-4 w-4" />
                <span className="text-gray-300">
                  1234 Security Avenue, Suite 500
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-2 text-secondary h-4 w-4" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-2 text-secondary h-4 w-4" />
                <span className="text-gray-300">info@secureguardservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SecureGuard Services. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
