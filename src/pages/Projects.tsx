
import { useState } from 'react';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Consulting'];

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A fully responsive e-commerce platform with product management, cart functionality, and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'Finance Management App',
    category: 'Mobile Development',
    description: 'A cross-platform mobile application for personal finance tracking, budgeting, and investment monitoring.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    link: '/projects/2'
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    category: 'UI/UX Design',
    description: 'A comprehensive dashboard for healthcare professionals to monitor patient data, appointments, and medical records.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    link: '/projects/3'
  },
  {
    id: 4,
    title: 'Telegram Star Store',
    category: 'Mobile Development',
    description: 'A Telegram mini-app marketplace where users can buy and sell Telegram Stars and premium features, with secure payment processing and user verification.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    link: '/projects/4'
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    category: 'Web Development',
    description: 'An online reservation system for restaurants, featuring real-time availability, table management, and customer profiles.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    link: '/projects/5'
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description: 'A mobile app for tracking workouts, nutrition, and progress with personalized recommendations and social features.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    link: '/projects/6'
  },
  {
    id: 7,
    title: 'Travel Experience Platform',
    category: 'UI/UX Design',
    description: 'A platform connecting travelers with local experiences, featuring intuitive search, booking, and review systems.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    link: '/projects/7'
  },
  {
    id: 8,
    title: 'Tech Startup Consultation',
    category: 'Consulting',
    description: 'Strategic technical consultation for a startup, including architecture planning, tech stack selection, and development roadmap.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    link: '/projects/8'
  },
  {
    id: 9,
    title: 'Educational Platform',
    category: 'Web Development',
    description: 'An interactive learning platform with courses, quizzes, progress tracking, and instructor-student communication tools.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    link: '/projects/9'
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <div className="w-20 h-1 bg-highlands-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore my portfolio of projects spanning web development, mobile apps, UI/UX design, and technical consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3 animate-on-scroll">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category 
                  ? "bg-highlands-primary hover:bg-highlands-dark" 
                  : "border-highlands-primary text-highlands-primary hover:bg-highlands-light"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link 
                key={project.id} 
                to={project.link}
                className="animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-highlight h-full flex flex-col">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-highlands-secondary font-medium">{project.category}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-highlands-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    <div className="flex items-center text-highlands-primary font-medium mt-auto">
                      <span>View Details</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No projects found in this category. Please check back later!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container text-center animate-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Let's discuss how I can help bring your vision to life with the perfect blend of functionality and design.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-highlands-primary hover:bg-highlands-dark">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
