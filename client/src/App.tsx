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
import SecurityAuditPage from "@/pages/services/SecurityAudit";
import AboutPage from "@/pages/About";
import CareersPage from "@/pages/Careers";
import ClientFeedbackPage from "@/pages/ClientFeedback";
import Gallery from "@/pages/Gallery";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButton from "@/components/shared/FloatingContactButton";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/security-guards" component={SecurityGuardsPage} />
      <Route path="/services/surveillance" component={SurveillancePage} />
      <Route path="/services/facility-management" component={FacilityManagementPage} />
      <Route path="/services/security-audit" component={SecurityAuditPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/feedback" component={ClientFeedbackPage} />
      <Route path="/gallery" component={Gallery} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
