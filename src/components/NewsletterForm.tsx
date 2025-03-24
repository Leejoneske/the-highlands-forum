
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { subscribeToNewsletter } from '@/services/newsletterService';

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm = ({ className }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const success = await subscribeToNewsletter(email);
      
      if (success) {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        });
        setEmail('');
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      const errorMessage = error.message || "Failed to subscribe. Please try again.";
      
      if (errorMessage.includes("already subscribed")) {
        toast({
          title: "Already subscribed",
          description: "This email is already subscribed to our newsletter.",
        });
      } else {
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className || ''}`}>
      <div className="relative flex-grow">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="email"
          placeholder="Your email address"
          className="pl-10 h-10"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit" 
        className="bg-highlands-primary hover:bg-highlands-dark text-white font-medium transition-colors"
        disabled={isLoading}
      >
        {isLoading ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
};

export default NewsletterForm;
