
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Reduced number of projects and simplified data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop',
    link: '/projects'
  },
  {
    id: 2,
    title: 'Finance Management App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop',
    link: '/projects'
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Featured Projects</h2>
            <div className="w-16 h-1 bg-rapidway-dark mb-4"></div>
            <p className="text-gray-700 max-w-md">
              Explore some of my recent work showcasing my development skills.
            </p>
          </div>
          
          <Link to="/projects">
            <Button variant="outline" className="border-rapidway-dark text-rapidway-dark hover:bg-rapidway-light">
              View All Projects
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              to={project.link}
              className="group"
            >
              <div className="card-highlight h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <span className="text-sm text-rapidway-dark font-medium">{project.category}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-rapidway-dark transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-rapidway-dark font-medium">
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
