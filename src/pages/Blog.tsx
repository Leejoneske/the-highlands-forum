
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterForm from '@/components/NewsletterForm';

// Reduced to only 2 blog posts to simplify
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2023',
    excerpt: 'Exploring the most impactful trends and technologies shaping the web development landscape.',
    author: 'Lee Jones',
    date: 'June 15, 2023',
    readTime: '5 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop',
    slug: 'future-web-development-2023'
  },
  {
    id: 2,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices and architectural patterns for building React applications.',
    author: 'Lee Jones',
    date: 'May 28, 2023',
    readTime: '8 min read',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e475?w=600&auto=format&fit=crop',
    slug: 'building-scalable-react-applications'
  }
];

const BlogPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <div className="w-16 h-1 bg-highlands-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Insights and tutorials on web development and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Subscribe to My Newsletter</h2>
            <p className="text-gray-700 mb-6">
              Get the latest articles and insights delivered to your inbox.
            </p>
            <NewsletterForm className="max-w-md mx-auto" />
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
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-40 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
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
        <CardTitle className="text-lg">
          <Link to={`/blog/${post.slug}`} className="hover:text-highlands-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-3">{post.excerpt}</p>
        <div className="flex items-center text-gray-600 text-sm">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPage;
