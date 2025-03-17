
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Home, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(true);
    // Reset to form view after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-highlands-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have a project in mind or need consulting? Feel free to reach out and let's discuss how I can help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-highlands-light p-3 rounded-full">
                    <Mail className="h-5 w-5 text-highlands-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a href="mailto:contact@highlandsforum.com" className="text-gray-600 hover:text-highlands-primary transition">
                      contact@highlandsforum.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-highlands-light p-3 rounded-full">
                    <Phone className="h-5 w-5 text-highlands-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <a href="tel:+254796890417" className="text-gray-600 hover:text-highlands-primary transition">
                      +254 (796) 890-417
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-highlands-light p-3 rounded-full">
                    <Home className="h-5 w-5 text-highlands-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">
                      Nairobi, KE 00100
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Leejoneske" className="bg-gray-100 hover:bg-highlands-light p-3 rounded-full text-gray-600 hover:text-highlands-primary transition">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://google.com" className="bg-gray-100 hover:bg-highlands-light p-3 rounded-full text-gray-600 hover:text-highlands-primary transition">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://x.com/LeeJoneske1" className="bg-gray-100 hover:bg-highlands-light p-3 rounded-full text-gray-600 hover:text-highlands-primary transition">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://google.com" className="bg-gray-100 hover:bg-highlands-light p-3 rounded-full text-gray-600 hover:text-highlands-primary transition">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 7.08c.84-.52 1.84-.81 2.91-.81.81 0 1.54.2 2.09.51.7.36 1.25.97 1.51 1.73.33.99.17 2.09-.42 2.92-.44.62-1.1 1.07-1.85 1.25-.26.06-.53.1-.8.1-.59 0-1.14-.15-1.61-.41-.57-.31-.99-.8-1.18-1.37-.25-.76-.13-1.62.36-2.24.41-.52.99-.86 1.64-.92.27-.03.54 0 .79.06.36.11.63.35.75.7.12.35.05.75-.21 1.03-.29.34-.73.51-1.18.51-.32 0-.6-.08-.84-.23-.15-.09-.26-.22-.31-.37-.04-.13-.03-.27.03-.39.09-.21.3-.34.52-.34.09 0 .17.03.24.07.03.02.07.05.09.09.03.04.03.09.01.13 0 .02-.01.04-.03.06-.01.02-.03.03-.04.03h-.03c-.04 0-.07-.01-.1-.02-.07-.02-.13-.06-.16-.12-.05-.1-.03-.21.04-.3.13-.13.29-.21.48-.21.26 0 .49.11.65.29.18.22.23.51.13.77-.12.36-.44.63-.83.7-.14.03-.29.04-.44.03-.38-.03-.72-.21-.95-.5-.3-.4-.35-.93-.12-1.37.29-.56.85-.92 1.45-.92.05 0 .11 0 .16.01.45.05.84.3 1.06.67.32.52.33 1.17.02 1.71-.24.42-.66.73-1.12.8-.13.02-.25.03-.38.03-.49 0-.93-.18-1.26-.5-.43-.41-.6-1.02-.44-1.57.2-.71.8-1.21 1.5-1.25.13-.01.26 0 .38.02.46.1.83.43.98.88.19.54.04 1.13-.38 1.49-.31.27-.71.4-1.12.36-.42-.04-.78-.31-.92-.69-.2-.55.01-1.16.51-1.47z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 text-highlands-primary">
                    <CheckCircle size={64} />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <ContactForm onSuccess={handleSuccess} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
