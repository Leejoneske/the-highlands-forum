
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "next-themes";

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

// Create query client with improved default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

// Improved loading component
const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-highlands-primary mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
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
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
