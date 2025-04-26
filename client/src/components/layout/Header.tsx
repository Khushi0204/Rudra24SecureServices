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
];

export default function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const closeSheet = () => setIsOpen(false);

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.href}
            className="hover:text-secondary-light transition"
            onClick={isMobile ? closeSheet : undefined}
          >
            {t(item.name)}
          </Link>
        </li>
      ))}
      <li>
        <LanguageSwitcher />
      </li>
      <li>
        <Button
          variant="secondary"
          size="sm"
          className="hover:bg-secondary-light transition"
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
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-3">
            <Avatar className="h-14 w-14 border-2 border-yellow-500">
              <AvatarImage src="/images/rudra-logo.jpg" alt="Rudra 24 Secure Logo" />
              <AvatarFallback className="bg-blue-900 text-yellow-500">R24</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-xl font-bold">Rudra 24 Secure</h1>
            <p className="text-sm text-yellow-400">
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
