
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <div className="w-20 h-1 bg-highlands-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="w-16 h-1 bg-highlands-primary mb-8"></div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-highlands-light rounded-full mr-4">
                    <Mail className="h-6 w-6 text-highlands-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-700">contact@thehighlandsforum.com</p>
                    <p className="text-gray-500 text-sm">I'll respond as soon as possible</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-highlands-light rounded-full mr-4">
                    <Phone className="h-6 w-6 text-highlands-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-700">+254 (796) 890-417</p>
                    <p className="text-gray-500 text-sm">Monday - Friday, 9AM-6PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-highlands-light rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-highlands-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-700">Nairobi, KE 00100</p>
                    <p className="text-gray-500 text-sm">Available for remote work globally</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://x.com/LeeJoneske1" 
                    className="p-3 bg-gray-100 hover:bg-highlands-light text-gray-700 hover:text-highlands-primary rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/lee-jones-kenya-630a00347" 
                    className="p-3 bg-gray-100 hover:bg-highlands-light text-gray-700 hover:text-highlands-primary rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a 
                    href="https://github.com/Leejoneske" 
                    className="p-3 bg-gray-100 hover:bg-highlands-light text-gray-700 hover:text-highlands-primary rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a 
                    href="https://google.com" 
                    className="p-3 bg-gray-100 hover:bg-highlands-light text-gray-700 hover:text-highlands-primary rounded-full transition-colors"
                    aria-label="Dribbble"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <div className="w-16 h-1 bg-highlands-primary mb-8"></div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section - Updated with working embedded map for Nairobi */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="animate-on-scroll">
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.62791156896!2d36.765057399999996!3d-1.2972203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655c311541%3A0x9dd769ac19experienced7d842!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1715434223619!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy"
                title="Map Location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
