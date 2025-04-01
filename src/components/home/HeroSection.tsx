
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-rapidway-light to-white pt-12 md:pt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Welcome to <span className="gradient-text">Rapidway</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Professional developer crafting beautiful, functional, and user-centered digital experiences
              that help businesses achieve their goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-rapidway-dark hover:bg-opacity-90 text-white">
                  Hire Me <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="border-rapidway-dark text-rapidway-dark hover:bg-rapidway-light">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Developer workspace" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rapidway-medium rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-rapidway-dark rounded-full opacity-30 z-0"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
