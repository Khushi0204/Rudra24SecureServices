import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { CircularProgress } from "@/components/ui/loading-spinner";

interface InitialLoaderProps {
  onLoadComplete: () => void;
}

export default function InitialLoader({ onLoadComplete }: InitialLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            setAnimationComplete(true);
            setTimeout(() => {
              onLoadComplete();
            }, 500);
          }, 500);
          return 100;
        }
        
        // Calculate how much to increment (faster at beginning, slower at end)
        const increment = 100 - oldProgress > 50 ? 3 : 1;
        return Math.min(oldProgress + increment, 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${
        animationComplete ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center p-8">
        <div className="relative mb-8">
          <Shield className="text-yellow-400 h-20 w-20 mx-auto mb-4 animate-float" />
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <CircularProgress progress={progress} />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-2 animate-pulse-slow">RUDRA 24 SECURE</h1>
        <p className="text-blue-200 mb-8">Precision Protection, Powered by Technology</p>
        
        <div className="max-w-sm mx-auto">
          <div className="mb-2 flex justify-between text-xs text-blue-200">
            <span>Loading assets...</span>
            <span>{progress}%</span>
          </div>
          
          <div className="w-full h-1 bg-blue-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}