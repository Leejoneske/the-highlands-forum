
import Layout from '@/components/Layout';
import { CalendarIcon, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  author: string;
  coverImage: string;
  content: React.ReactNode;
}

const BlogPost = ({ title, date, readTime, author, coverImage, content }: BlogPostProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-highlands-primary hover:text-highlands-dark">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to All Articles
            </Link>
          </div>
          
          <div className="animate-on-scroll max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1 text-gray-500" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-gray-500" />
                <span>{readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{title}</h1>
            
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-highlands-primary/20 flex items-center justify-center text-highlands-primary font-bold mr-3">
                {author.split(' ').map(name => name[0]).join('')}
              </div>
              <span className="font-medium">{author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <div className="relative h-[400px] md:h-[500px] mb-12">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <section className="py-10">
        <div className="section-container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
            {content}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container text-center animate-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            If you're looking for a developer who can help bring your ideas to life, let's connect and discuss your project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-highlands-primary hover:bg-highlands-dark">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
