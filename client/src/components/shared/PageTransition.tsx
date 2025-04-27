import React, { useState, useEffect, ReactNode } from "react";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
      setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 300);
    } else {
      setIsVisible(true);
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`
        ${className}
        transition-opacity duration-300 ease-in-out
        ${transitionStage === "fadeIn" ? "opacity-100" : "opacity-0"}
        ${isVisible ? "block" : "hidden"}
      `}
    >
      {children}
    </div>
  );
}

export function PageFadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`
        transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}