import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import Markets from "./pages/Markets";
import Insights from "./pages/Insights";
import Perspectives from "./pages/Perspectives";
import SellYourBusiness from "./pages/SellYourBusiness";
import Investors from "./pages/Investors";
import About from "./pages/About";
import DealSources from "./pages/DealSources";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/perspectives" element={<Perspectives />} />
          <Route path="/sell" element={<SellYourBusiness />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/about" element={<About />} />
          <Route path="/deal-sources" element={<DealSources />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Legacy redirects */}
          <Route path="/global" element={<Markets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
