
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ui/theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-highlands-primary">The HighLands Forum</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>
              Projects
            </Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              Services
            </Link>
            <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>
              Blog
            </Link>
            
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com/Leejoneske" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-highlands-primary transition"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/lee-jones-kenya-630a00347" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-highlands-primary transition"
              >
                <Linkedin size={18} />
              </a>
              <ThemeToggle />
              <Link to="/contact">
                <Button className="bg-highlands-primary hover:bg-highlands-dark">Hire Me</Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-highlands-primary focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link
              to="/"
              className={`block py-2 ${isActive('/') ? 'text-highlands-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 ${isActive('/about') ? 'text-highlands-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`block py-2 ${isActive('/projects') ? 'text-highlands-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/services"
              className={`block py-2 ${isActive('/services') ? 'text-highlands-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className={`block py-2 ${isActive('/blog') ? 'text-highlands-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <Button className="w-full bg-highlands-primary hover:bg-highlands-dark">Hire Me</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
