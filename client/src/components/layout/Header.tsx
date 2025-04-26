import { useState } from "react";
import { Link } from "wouter";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Security Audit", href: "#audit" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className="hover:text-secondary-light transition"
            onClick={isMobile ? closeSheet : undefined}
          >
            {item.name}
          </a>
        </li>
      ))}
      <li>
        <Button
          variant="secondary"
          size="sm"
          className="hover:bg-secondary-light transition"
          asChild
        >
          <a href="#login" onClick={isMobile ? closeSheet : undefined}>
            Client Login
          </a>
        </Button>
      </li>
    </>
  );

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-3 bg-white p-2 rounded-lg">
            <Shield className="text-primary text-2xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold">SecureGuard Services</h1>
            <p className="text-sm text-gray-300">
              Professional Security & Housekeeping
            </p>
          </div>
        </div>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-secondary"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-primary text-white">
              <nav className="mt-8">
                <ul className="flex flex-col space-y-6">
                  <NavLinks />
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav>
            <ul className="flex space-x-6 items-center">
              <NavLinks />
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
