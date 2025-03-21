
import SocialLayout from '@/components/SocialLayout';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesSection from '@/components/home/ServicesSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import BlogPreview from '@/components/home/BlogPreview';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <SocialLayout>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <ProjectsSection />
      <BlogPreview />
      <ContactSection />
    </SocialLayout>
  );
};

export default Index;
