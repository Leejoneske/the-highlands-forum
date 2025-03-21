import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { sendEmail, openEmailClient, EmailFormData } from '@/services/emailService';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters long' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

const ContactForm = ({ className, onSuccess }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      openEmailClient(data as EmailFormData);
      
      try {
        await sendEmail(data as EmailFormData);
      } catch (error) {
        console.log('EmailJS backup failed, but user redirected to email client');
      }
      
      toast({
        title: "Email client opened",
        description: "Continue in your email application to send your message.",
      });
      
      reset();
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Failed to process email:', error);
      toast({
        title: "Failed to open email client",
        description: "There was an error processing your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
            {...register('name')}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          className={`mt-1 ${errors.subject ? 'border-red-500' : ''}`}
          {...register('subject')}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={6}
          className={`w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-highlands-primary ${errors.message ? 'border-red-500' : ''}`}
          {...register('message')}
        ></Textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-highlands-primary hover:bg-highlands-dark w-full md:w-auto"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center">
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
