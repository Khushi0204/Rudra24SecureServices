import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show button after scrolling 300px
      if (scrollPosition > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
      <Button
        size="lg"
        variant="default"
        className="bg-green-600 hover:bg-green-700 rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-bold text-lg"
        onClick={() => {
          // Scroll to contact section
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <PhoneCall className="h-6 w-6 mr-1" />
        <span>Contact Expert</span>
      </Button>
    </div>
  );
}