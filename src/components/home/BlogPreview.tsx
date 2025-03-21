
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarIcon, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2023',
    excerpt: 'Exploring the most impactful trends and technologies shaping the web development landscape in 2023 and beyond.',
    date: 'June 15, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    slug: 'future-web-development-2023'
  },
  {
    id: 2,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices and architectural patterns for building React applications that can scale with your business needs.',
    date: 'May 28, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    slug: 'building-scalable-react-applications'
  },
  {
    id: 3,
    title: 'The Complete Guide to Modern CSS',
    excerpt: 'Discover modern CSS techniques including Flexbox, Grid, and CSS variables to create responsive and maintainable designs.',
    date: 'April 12, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    slug: 'complete-guide-modern-css'
  }
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4">Latest from My Blog</h2>
          <div className="w-20 h-1 bg-highlands-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Read my thoughts, tutorials, and insights on web development, design, and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden animate-on-scroll">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-gray-800 hover:text-highlands-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-highlands-primary hover:text-highlands-dark font-medium"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Link to="/blog">
            <Button className="bg-transparent hover:bg-highlands-light border border-highlands-primary text-highlands-primary hover:text-highlands-primary">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
