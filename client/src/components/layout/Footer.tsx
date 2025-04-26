import { Shield, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary-light text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About SecureGuard</h3>
            <p className="text-gray-300 mb-4">
              Providing professional security and housekeeping services to
              residential and commercial clients for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Security Guards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Surveillance Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Access Control
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Housekeeping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Property Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Security Audits
                </a>
              </li>
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
