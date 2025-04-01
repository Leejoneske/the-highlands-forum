
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const skills = [
  'Frontend Development', 
  'Backend Development',
  'React & React Native',
  'Node.js & Express',
  'UI/UX Design',
  'Database Design'
];

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 bg-rapidway-light rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-rapidway-dark mb-6"></div>
            
            <p className="text-gray-700 mb-6">
              I'm a passionate developer with over 5 years of experience building web applications
              and digital solutions for clients across various industries. My approach combines
              technical expertise with a deep understanding of user needs to create products that
              not only work flawlessly but also provide exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <Check className="text-rapidway-dark mr-2" size={20} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <Button variant="outline" className="border-rapidway-dark text-rapidway-dark hover:bg-rapidway-light">
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
