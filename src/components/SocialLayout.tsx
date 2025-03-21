
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SocialPreviewContainer from './SocialPreviewContainer';

interface LayoutProps {
  children: React.ReactNode;
}

const SocialLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SocialPreviewContainer>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </SocialPreviewContainer>
  );
};

export default SocialLayout;
