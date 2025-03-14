
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Smartphone, LayoutGrid, BadgeCheck, Headphones, Database, Server, Globe } from 'lucide-react';

const servicesData = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies. I specialize in creating responsive, high-performance sites that provide exceptional user experiences.',
    features: [
      'Responsive design for all devices',
      'Frontend development with React, Vue, or Angular',
      'Backend development with Node.js, Express',
      'E-commerce solutions',
      'Content management systems'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. I build intuitive, feature-rich apps that engage users and solve real problems.',
    features: [
      'Cross-platform development with React Native',
      'Native iOS development with Swift',
      'Native Android development with Kotlin',
      'App Store & Google Play deployment',
      'App maintenance and updates'
    ]
  },
  {
    icon: LayoutGrid,
    title: 'UI/UX Design',
    description: 'User-centered design that enhances the user experience and engagement. I create intuitive interfaces that are visually appealing and easy to navigate.',
    features: [
      'User interface design',
      'User experience strategy',
      'Wireframing and prototyping',
      'Design systems',
      'Usability testing'
    ]
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient and scalable database architectures that ensure data integrity and optimal performance for your applications.',
    features: [
      'Database schema design',
      'SQL and NoSQL solutions',
      'Data migration and integration',
      'Performance optimization',
      'Backup and recovery systems'
    ]
  },
  {
    icon: Server,
    title: 'API Development',
    description: 'Robust and well-documented APIs that facilitate seamless integration between different systems and services.',
    features: [
      'RESTful API design and development',
      'GraphQL implementation',
      'Authentication and authorization',
      'Rate limiting and caching',
      'Comprehensive documentation'
    ]
  },
  {
    icon: BadgeCheck,
    title: 'Code Review & Optimization',
    description: 'Expert review of your codebase to identify issues, improve performance, and ensure best practices are followed.',
    features: [
      'Performance analysis',
      'Code quality assessment',
      'Security vulnerability detection',
      'Refactoring recommendations',
      'Implementation of best practices'
    ]
  },
  {
    icon: Globe,
    title: 'Web Hosting & Deployment',
    description: 'Secure and reliable hosting solutions with continuous deployment pipelines to ensure your applications are always available.',
    features: [
      'Server configuration and management',
      'SSL certificate installation',
      'CI/CD pipeline setup',
      'Performance monitoring',
      'Backup and disaster recovery'
    ]
  },
  {
    icon: Headphones,
    title: 'Technical Consultation',
    description: 'Professional advice on technology choices and implementation strategies. I help you make informed decisions that align with your business goals.',
    features: [
      'Technology stack evaluation',
      'Architecture planning',
      'Project scoping and estimation',
      'Technical roadmap development',
      'Team structure and staffing advice'
    ]
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Services</h1>
            <div className="w-20 h-1 bg-highlands-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive development services tailored to meet your specific needs and help you achieve your digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className="card-highlight p-8 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-highlands-light text-highlands-primary">
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h4 className="font-medium text-lg mb-3">What's Included:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-highlands-primary mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">My Development Process</h2>
            <div className="w-20 h-1 bg-highlands-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I follow a structured and collaborative approach to ensure your project is delivered on time, within budget, and to your complete satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin with a thorough understanding of your needs, goals, and target audience through in-depth discussions."
              },
              {
                step: "02",
                title: "Planning",
                description: "Based on our discovery, I create a detailed project plan outlining scope, timeline, and technical requirements."
              },
              {
                step: "03",
                title: "Development",
                description: "I bring your project to life with clean, efficient code, keeping you updated throughout the process."
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "After thorough testing, I deploy your project and provide ongoing support to ensure everything runs smoothly."
              }
            ].map((phase, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 relative animate-on-scroll overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-highlands-light z-0">
                  {phase.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Pricing Approach</h2>
            <div className="w-20 h-1 bg-highlands-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I offer flexible pricing options to accommodate different project sizes and requirements. 
              Each project is unique, and I work with you to find a pricing structure that fits your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Project-Based",
                description: "A fixed price based on your project requirements and scope. Ideal for well-defined projects with clear deliverables.",
                features: [
                  "Clearly defined scope",
                  "Fixed timeline",
                  "Predictable budget",
                  "Milestone-based payments"
                ]
              },
              {
                type: "Hourly Rate",
                description: "Pay for the exact time spent on your project. Perfect for ongoing development, maintenance, or projects with evolving requirements.",
                features: [
                  "Flexible scope",
                  "Transparent billing",
                  "Weekly time reports",
                  "No long-term commitment"
                ],
                highlighted: true
              },
              {
                type: "Retainer",
                description: "Reserve a set number of hours each month for ongoing work. Great for consistent support, updates, and regular development needs.",
                features: [
                  "Priority scheduling",
                  "Discounted hourly rate",
                  "Unused hours rollover",
                  "Regular progress updates"
                ]
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`animate-on-scroll rounded-xl overflow-hidden shadow-md flex flex-col h-full ${
                  plan.highlighted 
                    ? 'border-2 border-highlands-primary relative' 
                    : 'border border-gray-100'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-highlands-primary text-white py-1 px-3 text-xs font-medium">
                    Popular Choice
                  </div>
                )}
                
                <div className={`p-6 ${plan.highlighted ? 'bg-highlands-light' : 'bg-white'}`}>
                  <h3 className="text-xl font-semibold mb-2">{plan.type}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <div className="p-6 flex-grow bg-white">
                  <h4 className="font-medium mb-4">Features:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-highlands-primary mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 bg-white border-t border-gray-100">
                  <Link to="/contact" className="block">
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-highlands-primary hover:bg-highlands-dark' 
                          : 'bg-white border border-highlands-primary text-highlands-primary hover:bg-highlands-light'
                      }`}
                    >
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-highlands-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Answers to common questions about my services, process, and how we can work together.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. During our initial consultation, I'll provide a more accurate timeline based on your specific requirements."
              },
              {
                question: "Do you provide ongoing support after the project is completed?",
                answer: "Yes, I offer maintenance and support packages to ensure your project continues to run smoothly after launch. These can include regular updates, bug fixes, security patches, and feature enhancements based on your needs."
              },
              {
                question: "What is your payment structure?",
                answer: "For project-based work, I typically require a 30% deposit upfront, with the remaining balance divided into milestone payments throughout the project. For hourly work, I bill weekly or bi-weekly. All payment terms are clearly outlined in our agreement before work begins."
              },
              {
                question: "Can you work with my existing team or developers?",
                answer: "Absolutely! I'm experienced in collaborating with existing teams and can adapt to your workflows and communication processes. Whether I'm augmenting your team or leading a specific aspect of development, I ensure smooth integration and knowledge sharing."
              },
              {
                question: "Do you sign NDAs or confidentiality agreements?",
                answer: "Yes, I'm happy to sign NDAs or confidentiality agreements before discussing your project in detail. I respect the confidential nature of your ideas and business information and take the protection of your intellectual property seriously."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm p-6 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-highlands-primary text-white">
        <div className="section-container text-center animate-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Contact me today to schedule a free consultation and learn how I can help bring your ideas to life.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-highlands-primary hover:bg-highlands-light">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
