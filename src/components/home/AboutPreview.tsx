
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const skills = [
  'Frontend Development', 
  'Backend Development',
  'React & React Native',
  'Node.js & Express'
];

const AboutPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative animate-on-scroll">
            <div className="aspect-square max-w-sm mx-auto lg:mx-0 bg-gray-100 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-highlands-primary mb-4"></div>
            
            <p className="text-gray-700 mb-4">
              I'm a passionate developer with over 5 years of experience building web applications
              and digital solutions for clients across various industries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <Check className="text-highlands-primary mr-2" size={16} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <Button variant="outline" className="border-highlands-primary text-highlands-primary hover:bg-highlands-light">
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
