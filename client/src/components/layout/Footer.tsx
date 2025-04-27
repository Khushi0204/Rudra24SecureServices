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

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-4">
              <ExternalLink className="text-yellow-400 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
            </div>
            <ul className="space-y-2">
              {[
                { name: t('nav.home'), href: "/" },
                { name: t('nav.services'), href: "/services" },
                { name: t('nav.about'), href: "/about" },
                { name: t('nav.careers'), href: "/careers" },
                { name: t('nav.gallery'), href: "/gallery" },
                { name: t('nav.feedback'), href: "/feedback" },
                { name: "Client Portal", href: "#", badge: "Coming Soon" }
              ].map((link, index) => (
                <li key={index} className="group">
                  <Link
                    to={link.href}
                    className="text-blue-100 hover:text-yellow-300 transition-all duration-300 flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1 text-blue-400 group-hover:text-yellow-300 transition-all duration-300 group-hover:translate-x-1" />
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="ml-2 text-xs bg-blue-800 text-yellow-300 px-1.5 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-4">
              <Mail className="text-yellow-400 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-400">Contact Us</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                <MapPin className="mt-1 mr-2 text-yellow-400 h-5 w-5 flex-shrink-0" />
                <span className="text-blue-100 group-hover:text-yellow-300 transition-colors duration-300">
                  <strong>Head Office:</strong><br />
                  Rudra House Plot No.72, Street No.2, Sunita Vihar,<br />
                  (Near Indira Puri 2 No) Loni, Ghaziabad (UP) 201102<br />
                  <strong>Branch Offices:</strong> Delhi, Noida, Ghaziabad, Faridabad, Gurugram, Sonipat
                </span>
              </li>
              <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                <Phone className="mt-1 mr-2 text-yellow-400 h-5 w-5 flex-shrink-0" />
                <span className="text-blue-100 group-hover:text-yellow-300 transition-colors duration-300">
                  <strong>Main Numbers:</strong><br />
                  9625785431, 9625729177, 9625724855<br />
                  <strong>Branch Office:</strong> 8860430007, 9999881949
                </span>
              </li>
              <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                <Mail className="mt-1 mr-2 text-yellow-400 h-5 w-5 flex-shrink-0" />
                <span className="text-blue-100 group-hover:text-yellow-300 transition-colors duration-300">
                  <a 
                    href="mailto:Rudra24securegroup@gmail.com"
                    className="text-blue-100 hover:text-yellow-300 transition-colors duration-300"
                  >
                    Rudra24securegroup@gmail.com
                  </a>
                  <br />
                  <a 
                    href="mailto:rudra24securepl@gmail.com"
                    className="text-blue-100 hover:text-yellow-300 transition-colors duration-300"
                  >
                    rudra24securepl@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/50 pt-6 mt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 mb-4 md:mb-0 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-yellow-300">Rudra 24 Secure</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="#"
                className="text-blue-200 hover:text-yellow-300 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-yellow-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="text-blue-200 hover:text-yellow-300 transition-colors duration-300"
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
