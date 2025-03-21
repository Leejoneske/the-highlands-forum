
import React from 'react';

/**
 * This component renders a more visually appealing layout when screenshots are captured
 * for social media previews. It's not directly used in the UI, but wraps the page
 * content when the URL contains ?socialPreview=true.
 */
const SocialPreviewContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Only apply special styling for social preview mode
  const isSocialPreview = new URLSearchParams(window.location.search).get('socialPreview') === 'true';
  
  if (!isSocialPreview) {
    return <>{children}</>;
  }
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Social preview overlay with optimized layout */}
      <div className="fixed inset-0 bg-highlands-primary bg-opacity-95 z-50 flex items-center justify-center p-8">
        <div className="max-w-5xl w-full rounded-xl overflow-hidden shadow-2xl bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-poppins font-bold text-highlands-primary mb-4">
                The HighLands Forum
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6">
                Professional Web Development Solutions
              </p>
              <div className="flex gap-2 mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-gray-600">
                5+ years of expertise in React, TypeScript, and modern web technologies
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-highlands-light p-8 md:p-12 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'API Integration'].map((service, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <span className="w-8 h-8 rounded-full bg-highlands-accent flex items-center justify-center text-white mr-3">
                      ✓
                    </span>
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Original content (hidden in preview mode) */}
      <div className={isSocialPreview ? "opacity-0" : ""}>{children}</div>
    </div>
  );
};

export default SocialPreviewContainer;
