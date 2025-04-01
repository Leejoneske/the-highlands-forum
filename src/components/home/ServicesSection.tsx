
import { CodeSquare, Layers, LineChart, Smartphone, Globe, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <CodeSquare className="h-12 w-12 text-highlands-primary" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Vue.js, and Node.js.'
  },
  {
    icon: <Smartphone className="h-12 w-12 text-highlands-primary" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.'
  },
  {
    icon: <Layers className="h-12 w-12 text-highlands-primary" />,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development services from database design to frontend implementation.'
  },
  {
    icon: <Globe className="h-12 w-12 text-highlands-primary" />,
    title: 'E-Commerce Solutions',
    description: 'Custom online stores and marketplace platforms with secure payment integration.'
  },
  {
    icon: <LineChart className="h-12 w-12 text-highlands-primary" />,
    title: 'Performance Optimization',
    description: 'Enhancing the speed and efficiency of existing web applications and websites.'
  },
  {
    icon: <PenTool className="h-12 w-12 text-highlands-primary" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that balance aesthetics with functionality.'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-highlands-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I offer a comprehensive range of development services to help businesses build powerful digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 animate-on-scroll"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-14 animate-on-scroll">
          <Link to="/services">
            <Button className="bg-highlands-primary hover:bg-highlands-dark text-white font-medium">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
