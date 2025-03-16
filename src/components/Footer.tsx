
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-highlands-primary">The HighLands Forum</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Professional developer delivering high-quality web applications and software solutions 
              to help businesses achieve their digital goals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Leejoneske" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-highlands-primary transition"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/lee-jones-kenya-630a00347" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-highlands-primary transition"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@highlandsforum.com" 
                className="text-gray-600 hover:text-highlands-primary transition"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+254796890417" 
                className="text-gray-600 hover:text-highlands-primary transition"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-highlands-primary transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-highlands-primary transition">About</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-highlands-primary transition">Projects</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-highlands-primary transition">Services</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-highlands-primary transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-highlands-primary transition">Web Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-highlands-primary transition">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-600 hover:text-highlands-primary transition">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-highlands-primary transition">Technical Consultation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-highlands-primary transition">Code Review</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} The HighLands Forum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
