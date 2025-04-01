
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rapidway-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white">Rapidway</span>
            </Link>
            <p className="text-rapidway-light mb-4 max-w-md">
              Professional developer delivering high-quality web applications and software solutions 
              to help businesses achieve their digital goals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/rapidway" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rapidway-medium hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rapidway" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rapidway-medium hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@rapidway.com" 
                className="text-rapidway-medium hover:text-white transition"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+1234567890" 
                className="text-rapidway-medium hover:text-white transition"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-rapidway-medium tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-rapidway-light hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-rapidway-light hover:text-white transition">About</Link></li>
              <li><Link to="/projects" className="text-rapidway-light hover:text-white transition">Projects</Link></li>
              <li><Link to="/services" className="text-rapidway-light hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="text-rapidway-light hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-rapidway-medium border-opacity-30">
          <p className="text-rapidway-light text-sm text-center">
            &copy; {currentYear} Rapidway. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
