import { useEffect, useRef } from "react";

interface FormProgressProps {
  steps: string[];
  currentStep: number;
}

export default function FormProgress({ steps, currentStep }: FormProgressProps) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      const progressPercentage = ((currentStep) / (steps.length - 1)) * 100;
      progressBarRef.current.style.width = `${progressPercentage}%`;
    }
  }, [currentStep, steps.length]);

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-between mb-4">
        {steps.map((step, index) => (
          <div className="flex items-center mb-2" key={index}>
            <div
              className={`w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mr-2 font-medium form-progress-item ${
                index === currentStep
                  ? "active"
                  : index < currentStep
                  ? "completed"
                  : ""
              }`}
            >
              {index + 1}
            </div>
            <span className="text-sm">{step}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          ref={progressBarRef}
          className="bg-secondary h-2 rounded-full"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
}
