
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

// Blog Post Pages
import FutureWebDevelopment from "./pages/BlogPosts/FutureWebDevelopment";
import ScalableReactApplications from "./pages/BlogPosts/ScalableReactApplications";
import ModernCSS from "./pages/BlogPosts/ModernCSS";
import OptimizingAPIPerformance from "./pages/BlogPosts/OptimizingAPIPerformance";
import TypeScriptGuide from "./pages/BlogPosts/TypeScriptGuide";
import GitWorkflows from "./pages/BlogPosts/GitWorkflows";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Blog Post Routes */}
          <Route path="/blog/future-web-development-2023" element={<FutureWebDevelopment />} />
          <Route path="/blog/building-scalable-react-applications" element={<ScalableReactApplications />} />
          <Route path="/blog/complete-guide-modern-css" element={<ModernCSS />} />
          <Route path="/blog/optimizing-api-performance" element={<OptimizingAPIPerformance />} />
          <Route path="/blog/getting-started-typescript" element={<TypeScriptGuide />} />
          <Route path="/blog/mastering-git-workflows" element={<GitWorkflows />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
