
import { Code, Smartphone, LayoutGrid, BadgeCheck, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies.',
    icon: Code,
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that enhances the user experience and engagement.',
    icon: LayoutGrid,
  },
  {
    title: 'Code Review',
    description: 'Expert review of your codebase to identify issues and improvements.',
    icon: BadgeCheck,
  },
  {
    title: 'Technical Consultation',
    description: 'Professional advice on technology choices and implementation strategies.',
    icon: Headphones,
  },
  {
    title: 'View All Services',
    description: 'Explore the full range of development services I offer.',
    icon: ArrowRight,
    isLink: true,
    link: '/services'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
          <div className="w-20 h-1 bg-highlands-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I provide a comprehensive range of development services to help bring your digital vision to life,
            from initial concept to final implementation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`animate-on-scroll card-highlight p-6 ${
                service.isLink ? 'bg-highlands-primary text-white hover:bg-highlands-dark' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.isLink ? (
                <Link to={service.link || '#'} className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <p className="text-white/90">{service.description}</p>
                </Link>
              ) : (
                <>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-highlands-light text-highlands-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <Link to="/contact">
            <Button className="bg-highlands-primary hover:bg-highlands-dark">
              Discuss Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
