
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { CalendarIcon, Clock, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2023',
    excerpt: 'Exploring the most impactful trends and technologies shaping the web development landscape in 2023 and beyond.',
    author: 'Lee Jones',
    date: 'June 15, 2023',
    readTime: '5 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    slug: 'future-web-development-2023'
  },
  {
    id: 2,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices and architectural patterns for building React applications that can scale with your business needs.',
    author: 'Lee Jones',
    date: 'May 28, 2023',
    readTime: '8 min read',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    slug: 'building-scalable-react-applications'
  },
  {
    id: 3,
    title: 'The Complete Guide to Modern CSS',
    excerpt: 'Discover modern CSS techniques including Flexbox, Grid, and CSS variables to create responsive and maintainable designs.',
    author: 'Lee Jones',
    date: 'April 12, 2023',
    readTime: '6 min read',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    slug: 'complete-guide-modern-css'
  },
  {
    id: 4,
    title: 'Optimizing API Performance',
    excerpt: 'Strategies and techniques for optimizing your API performance, from caching to database optimization.',
    author: 'Lee Jones',
    date: 'March 5, 2023',
    readTime: '7 min read',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    slug: 'optimizing-api-performance'
  },
  {
    id: 5,
    title: 'Getting Started with TypeScript',
    excerpt: 'A comprehensive guide to getting started with TypeScript in your JavaScript projects for better type safety.',
    author: 'Lee Jones',
    date: 'February 22, 2023',
    readTime: '9 min read',
    category: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    slug: 'getting-started-typescript'
  },
  {
    id: 6,
    title: 'Mastering Git Workflows for Teams',
    excerpt: 'Learn how to implement effective Git workflows that improve collaboration and productivity in development teams.',
    author: 'Lee Jones',
    date: 'January 15, 2023',
    readTime: '6 min read',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    slug: 'mastering-git-workflows'
  },
];

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const postsPerPage = 4;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  const displayedPosts = blogPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <div className="w-20 h-1 bg-highlands-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Insights, tutorials, and thought leadership on web development, design, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {displayedPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                {page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setPage(page - 1)} 
                      href="#" 
                    />
                  </PaginationItem>
                )}
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      href="#" 
                      isActive={page === i + 1}
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {page < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setPage(page + 1)} 
                      href="#" 
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
            <p className="text-gray-700 mb-8">
              Get the latest articles, tutorials, and insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md border border-gray-300 px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-highlands-primary"
              />
              <button className="bg-highlands-primary hover:bg-highlands-dark text-white font-medium py-2 px-6 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    slug: string;
  };
}

const BlogPostCard = ({ post }: BlogPostProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow animate-on-scroll">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-highlands-primary">{post.category}</span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <CardTitle className="text-xl">
          <Link to={`/blog/${post.slug}`} className="hover:text-highlands-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{post.excerpt.substring(0, 120)}...</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1 text-gray-500" />
          <span className="text-sm text-gray-600">{post.author}</span>
        </div>
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 mr-1 text-gray-500" />
          <span className="text-sm text-gray-600">{post.date}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogPage;
