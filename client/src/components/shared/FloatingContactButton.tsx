import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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
      <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full opacity-70 blur-sm animate-pulse-slow"></div>
      <Button
        size="lg"
        variant="default"
        className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-500 flex items-center gap-2 font-bold text-lg relative z-10"
        asChild
      >
        <Link to="/contact">
          <PhoneCall className="h-6 w-6 mr-1 animate-pulse" />
          <span className="animate-shimmer bg-clip-text relative">
            <span className="animate-shimmer absolute inset-0 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full animate-shimmer"></span>
            Contact Expert
          </span>
        </Link>
      </Button>
    </div>
  );
}