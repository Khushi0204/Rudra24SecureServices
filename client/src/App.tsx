import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/services";
import SecurityGuardsPage from "@/pages/services/SecurityGuards";
import SurveillancePage from "@/pages/services/Surveillance";
import FacilityManagementPage from "@/pages/services/FacilityManagement";
import SecuritySurveyPage from "@/pages/services/SecuritySurvey";
import SpecializedSecurity from "@/pages/services/SpecializedSecurity";
import EmergencyResponse from "@/pages/services/EmergencyResponse";
import AboutPage from "@/pages/About";
import CareersPage from "@/pages/Careers";
import ClientFeedbackPage from "@/pages/ClientFeedback";
import ContactPage from "@/pages/Contact";
import ReferralAndRewards from "@/pages/ReferralAndRewards";
import Gallery from "@/pages/Gallery";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButton from "@/components/shared/FloatingContactButton";
import InitialLoader from "@/components/shared/InitialLoader";
import PageTransition from "@/components/shared/PageTransition";
import { LoadingProvider } from "@/context/LoadingContext";

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/services/security-guards" component={SecurityGuardsPage} />
        <Route path="/services/surveillance" component={SurveillancePage} />
        <Route path="/services/facility-management" component={FacilityManagementPage} />
        <Route path="/services/security-survey" component={SecuritySurveyPage} />
        <Route path="/services/specialized-security" component={SpecializedSecurity} />
        <Route path="/services/emergency-response" component={EmergencyResponse} />
        <Route path="/about" component={AboutPage} />
        <Route path="/careers" component={CareersPage} />
        <Route path="/feedback" component={ClientFeedbackPage} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/referral-rewards" component={ReferralAndRewards} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  
  // Simulate checking if it's the first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (hasVisited) {
      // Skip loader if user has visited before
      setInitialLoading(false);
    } else {
      // Don't immediately set hasVisitedBefore - let the loader complete first
      // It will be set when the loader completes
    }
  }, []);
  
  const handleLoadComplete = () => {
    localStorage.setItem('hasVisitedBefore', 'true');
    setInitialLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <TooltipProvider>
          {initialLoading ? (
            <InitialLoader onLoadComplete={handleLoadComplete} />
          ) : (
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Router />
              </main>
              <Footer />
              <FloatingContactButton />
              <Toaster />
            </div>
          )}
        </TooltipProvider>
      </LoadingProvider>
    </QueryClientProvider>
  );
}

export default App;
