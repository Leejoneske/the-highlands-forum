
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesSection from '@/components/home/ServicesSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
