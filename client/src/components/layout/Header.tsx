import { useState } from "react";
import { Link } from "wouter";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const navItems = [
  { name: "nav.home", href: "/" },
  { name: "nav.services", href: "/services" },
  { name: "nav.about", href: "/about" },
  { name: "nav.careers", href: "/careers" },
  { name: "nav.gallery", href: "/gallery" },
  { name: "nav.feedback", href: "/feedback" },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const closeSheet = () => setIsOpen(false);

  const NavLinks = () => (
    <>
      {navItems.map((item, index) => (
        <li key={item.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <Link
            to={item.href}
            className="hover:text-yellow-300 transition-all duration-300 relative group"
            onClick={isMobile ? closeSheet : undefined}
          >
            <span>{t(item.name)}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      ))}
      <li className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <LanguageSwitcher />
      </li>
      <li className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <Button
          variant="secondary"
          size="sm"
          className="hover:bg-yellow-400 transition-all duration-300 animate-hover-scale shadow-sm hover:shadow-md"
          asChild
        >
          <a href="#login" onClick={isMobile ? closeSheet : undefined}>
            {t('nav.clientLogin')}
          </a>
        </Button>
      </li>
    </>
  );

  return (
    <header className="bg-gradient-to-r from-blue-950 to-blue-900 text-white shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="responsive-container py-3 md:py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0 animate-slide-in">
          <Link to="/">
            <div className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              <img 
                src="/images/rudra-text-logo-new.jpg" 
                alt="Rudra 24 Secure" 
                className="h-14 md:h-16 object-contain rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
              />
              <div className="mt-1">
                <p className="text-sm text-yellow-400 font-medium">
                  Precision Protection, Powered by Technology
                </p>
                <p className="text-xs text-yellow-300">
                  An ISO 9001:2015 Certified Company
                </p>
              </div>
            </div>
          </Link>
        </div>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-400 animate-hover-scale"
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
        ) : (
          <nav className="animate-fade-in">
            <ul className="flex space-x-6 items-center">
              <NavLinks />
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
