import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FullPageLoader } from '@/components/ui/loading-spinner';

interface LoadingContextType {
  isLoading: boolean;
  loadingText: string | null;
  showLoading: (text?: string) => void;
  hideLoading: () => void;
  setLoadingProgress: (progress: number) => void;
  loadingProgress: number;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const showLoading = (text?: string) => {
    setLoadingText(text || null);
    setIsLoading(true);
    setLoadingProgress(0);
  };

  const hideLoading = () => {
    setIsLoading(false);
    setLoadingText(null);
    setLoadingProgress(0);
  };

  const value = {
    isLoading,
    loadingText,
    showLoading,
    hideLoading,
    loadingProgress,
    setLoadingProgress
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {isLoading && <FullPageLoader text={loadingText || undefined} />}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

// Helper component for showing loading states in specific parts of the UI
export function LoadingWrapper({ 
  loading, 
  children, 
  skeleton 
}: { 
  loading: boolean; 
  children: ReactNode; 
  skeleton: ReactNode;
}) {
  return loading ? <>{skeleton}</> : <>{children}</>;
}