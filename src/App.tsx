
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Use lazy loading for all pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Import blog post components
const FutureWebDevelopment = lazy(() => import("./pages/BlogPosts/FutureWebDevelopment"));
const ScalableReactApplications = lazy(() => import("./pages/BlogPosts/ScalableReactApplications"));
const ModernCSS = lazy(() => import("./pages/BlogPosts/ModernCSS"));
const TypeScriptGuide = lazy(() => import("./pages/BlogPosts/TypeScriptGuide"));
const GitWorkflows = lazy(() => import("./pages/BlogPosts/GitWorkflows"));
const OptimizingAPIPerformance = lazy(() => import("./pages/BlogPosts/OptimizingAPIPerformance"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            {/* Blog post routes */}
            <Route path="/blog/future-web-development-2023" element={<FutureWebDevelopment />} />
            <Route path="/blog/building-scalable-react-applications" element={<ScalableReactApplications />} />
            <Route path="/blog/complete-guide-modern-css" element={<ModernCSS />} />
            <Route path="/blog/typescript-guide" element={<TypeScriptGuide />} />
            <Route path="/blog/git-workflows" element={<GitWorkflows />} />
            <Route path="/blog/optimizing-api-performance" element={<OptimizingAPIPerformance />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
