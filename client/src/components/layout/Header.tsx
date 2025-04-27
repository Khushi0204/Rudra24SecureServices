import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Shield, ChevronDown, Users, Camera, ClipboardList, Award, Siren, Contact, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Custom Mop icon since it's not in Lucide React
function MopIcon(props: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <path d="M12 22v-5" />
      <path d="M9 22h6" />
      <path d="M12 11v6" />
      <path d="M5 8v4h14V8" />
      <path d="M5 8h14" />
      <path d="M15 8a3 3 0 1 0-6 0" />
      <path d="M2 11h20" />
    </svg>
  );
}

const navItems = [
  { name: "nav.home", href: "/" },
  { 
    name: "nav.services", 
    href: "/services",
    dropdown: true,
    items: [
      { name: "Security Guards", href: "/services/security-guards", icon: <Users className="h-4 w-4 mr-2" /> },
      { name: "Surveillance Systems", href: "/services/surveillance", icon: <Camera className="h-4 w-4 mr-2" /> },
      { name: "Facility Management", href: "/services/facility-management", icon: <MopIcon className="h-4 w-4 mr-2" /> },
      { name: "Security Survey", href: "/services/security-survey", icon: <ClipboardList className="h-4 w-4 mr-2" /> },
      { name: "Specialized Security", href: "/services/specialized-security", icon: <Shield className="h-4 w-4 mr-2" /> },
      { name: "Emergency Response", href: "/services/emergency-response", icon: <Siren className="h-4 w-4 mr-2" /> },
    ]
  },
  { name: "nav.about", href: "/about" },
  { name: "nav.careers", href: "/careers" },
  { name: "nav.gallery", href: "/gallery" },
  { name: "nav.clientFeedback", href: "/feedback" },
  { name: "Referral & Rewards", href: "/referral-rewards", icon: <Gift className="h-4 w-4 mr-2" /> },
  { name: "Contact Us", href: "/contact", icon: <Contact className="h-4 w-4 mr-2" /> },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const closeSheet = () => setIsOpen(false);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setDropdownOpen(prev => prev === name ? null : name);
  };

  const NavLinks = () => (
    <>
      {navItems.map((item, index) => (
        <li key={item.name} className="animate-fade-in relative" style={{ animationDelay: `${index * 0.1}s` }}>
          {item.dropdown ? (
            <div ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown(item.name)}
                className="flex items-center hover:text-yellow-300 transition-all duration-300 relative group py-1 px-2"
              >
                <span className="font-medium">{t(item.name)}</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === item.name ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {dropdownOpen === item.name && (
                <div className={`absolute top-full left-0 mt-2 w-64 rounded-md shadow-lg bg-blue-900 ring-1 ring-black ring-opacity-5 z-50 ${isMobile ? 'relative w-full' : ''}`}>
                  <div className="py-1">
                    {item.items?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-blue-800 flex items-center"
                        onClick={() => {
                          setDropdownOpen(null);
                          if (isMobile) closeSheet();
                        }}
                      >
                        {subItem.icon}
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to={item.href}
              className="hover:text-yellow-300 transition-all duration-300 relative group py-1 px-2"
              onClick={isMobile ? closeSheet : undefined}
            >
              <span className="font-medium">{t(item.name)}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
        </li>
      ))}
      <li className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <LanguageSwitcher />
      </li>
    </>
  );

  return (
    <header className="bg-gradient-to-r from-blue-950 to-blue-900 text-white shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="responsive-container py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center animate-slide-in">
          <Link to="/">
            <div className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              <img 
                src="/images/rudra-text-logo-new.jpg" 
                alt="Rudra 24 Secure" 
                className="h-12 md:h-14 object-contain rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
              />
              <div className="mt-1">
                <p className="text-sm text-yellow-400 font-medium">
                  Precision Protection, Powered by Technology
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="flex gap-1 md:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300 animate-hover-scale shadow-sm hover:shadow-md px-2 md:px-4 font-medium text-xs md:text-sm whitespace-nowrap"
              asChild
            >
              <Link to="/careers">
                Job Portal
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="hover:bg-yellow-400 transition-all duration-300 animate-hover-scale shadow-sm hover:shadow-md px-2 md:px-4 font-medium text-xs md:text-sm whitespace-nowrap"
              asChild
            >
              <a href="#login">
                {t('nav.clientLogin')}
              </a>
            </Button>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-400 animate-hover-scale ml-1"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-b from-blue-950 to-blue-900 text-white border-blue-900">
              <div className="flex justify-center mb-8 mt-4">
                <img 
                  src="/images/rudra-text-logo-new.jpg" 
                  alt="Rudra 24 Secure" 
                  className="h-12 object-contain rounded-md"
                />
              </div>
              <nav>
                <ul className="flex flex-col space-y-6">
                  <NavLinks />
                </ul>
              </nav>
              <div className="mt-auto absolute bottom-8 left-0 right-0 px-6">
                <div className="border-t border-blue-800 pt-4 text-center">
                  <p className="text-sm text-blue-200">
                    © {new Date().getFullYear()} Rudra 24 Secure
                  </p>
                  <p className="text-xs text-blue-300 mt-1">
                    For most reliable and professional security
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
