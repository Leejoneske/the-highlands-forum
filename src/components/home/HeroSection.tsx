
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white pt-10 md:pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Welcome to <span className="gradient-text">The HighLands Forum</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-lg leading-relaxed">
              Professional developer crafting beautiful, functional, and user-centered digital experiences
              that help businesses achieve their goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" aria-label="Contact for hiring">
                <Button className="bg-highlands-primary hover:bg-highlands-dark transition-colors duration-300">
                  Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/projects" aria-label="View portfolio projects">
                <Button variant="outline" className="border-highlands-primary text-highlands-primary hover:bg-highlands-light transition-colors duration-300">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              {!imageLoaded && (
                <div className="w-full h-[300px] bg-gray-200 animate-pulse rounded-lg"></div>
              )}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Modern developer workspace with multiple monitors and clean setup" 
                width="500"
                height="300"
                className={`w-full h-auto object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-highlands-accent rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-highlands-primary rounded-full opacity-30 z-0"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
