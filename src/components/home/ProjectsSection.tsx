
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'Finance Management App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    link: '/projects/2'
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    link: '/projects/3'
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="animate-on-scroll mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-highlands-primary mb-6"></div>
            <p className="text-gray-700 max-w-xl">
              Explore some of my recent work. Each project represents a unique challenge 
              and showcases my skills in different areas of development.
            </p>
          </div>
          
          <Link to="/projects" className="animate-on-scroll">
            <Button variant="outline" className="border-highlands-primary text-highlands-primary hover:bg-highlands-light">
              View All Projects
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              to={project.link}
              className="animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-highlight h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-highlands-secondary font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-4 group-hover:text-highlands-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-highlands-primary font-medium">
                    <span>View Project</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
