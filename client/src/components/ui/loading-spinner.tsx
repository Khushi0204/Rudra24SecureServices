import React from "react";
import { cn } from "@/lib/utils";
import { Shield, Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "ghost";
  className?: string;
  logoLoader?: boolean;
}

export function LoadingSpinner({
  size = "md",
  variant = "default",
  className,
  logoLoader = false,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const variantClasses = {
    default: "text-gray-400",
    primary: "text-blue-600",
    secondary: "text-yellow-500",
    ghost: "text-gray-300",
  };

  if (logoLoader) {
    return (
      <div className={cn("relative", className)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield className={cn("animate-pulse text-blue-700 opacity-80", sizeClasses[size])} />
        </div>
        <svg
          className={cn(
            "animate-spin",
            sizeClasses[size],
            variantClasses[variant]
          )}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("animate-spin", className)}>
      <Loader2 className={cn(sizeClasses[size], variantClasses[variant])} />
    </div>
  );
}

interface FullPageLoaderProps {
  text?: string;
  className?: string;
}

export function FullPageLoader({ text, className }: FullPageLoaderProps) {
  return (
    <div className={cn("fixed inset-0 bg-white/80 flex flex-col items-center justify-center z-50", className)}>
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center animate-fade-in">
        <div className="p-4 bg-blue-50 rounded-full mb-4">
          <LoadingSpinner size="lg" variant="primary" logoLoader={true} />
        </div>
        {text && <p className="text-blue-800 font-medium mt-4 animate-pulse">{text}</p>}
      </div>
    </div>
  );
}

export function LoadingDots() {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div 
          key={i}
          className="h-2 w-2 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        ></div>
      ))}
    </div>
  );
}

export function LoadingBar({ progress }: { progress: number }) {
  return (
    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export function CircularProgress({ progress }: { progress: number }) {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <div className="relative inline-flex">
      <svg className="w-16 h-16">
        <circle
          className="text-gray-200"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50%"
          cy="50%"
        />
        <circle
          className="text-blue-600 transform -rotate-90 origin-center transition-all duration-300 ease-out"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50%"
          cy="50%"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-blue-600 font-medium text-sm">
        {progress}%
      </span>
    </div>
  );
}