
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Check, Briefcase, ArrowRight, Download } from 'lucide-react';

const skills = [
  'JavaScript/TypeScript', 'React', 'Node.js', 'Express', 'Next.js', 'React Native',
  'HTML/CSS', 'Tailwind CSS', 'GraphQL', 'RESTful APIs', 'MongoDB', 'PostgreSQL',
  'Git/GitHub', 'Docker', 'AWS', 'Firebase', 'UI/UX Design', 'Responsive Design'
];

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2021 - Present',
    description: 'Lead development of multiple web applications using React, TypeScript, and modern frontend technologies. Implemented CI/CD pipelines and mentored junior developers.'
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    period: '2019 - 2021',
    description: 'Built and maintained MERN stack applications. Designed and implemented RESTful APIs, managed database schemas, and created responsive UIs.'
  },
  {
    title: 'Web Developer',
    company: 'Creative Agency Co.',
    period: '2017 - 2019',
    description: 'Developed custom websites for clients across various industries. Collaborated with designers to implement visually appealing and functional websites.'
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <div className="w-20 h-1 bg-highlands-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Getting to know the developer behind The HighLands Forum - my journey, skills, and what drives me to create exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="w-20 h-1 bg-highlands-primary mb-6"></div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  With over 5 years of experience in web and application development, I've had the privilege of working 
                  on diverse projects that have sharpened my skills and broadened my perspective.
                </p>
                <p>
                  My journey began with a deep curiosity about how digital products work and how they can be optimized
                  to provide the best possible user experience. This curiosity led me to pursue a degree in Computer Science,
                  where I built a solid foundation in programming principles and software development.
                </p>
                <p>
                  Over the years, I've worked with startups, mid-sized companies, and enterprise clients, helping them
                  bring their ideas to life through clean, efficient, and maintainable code. I believe in writing code
                  that not only works well today but remains adaptable for tomorrow's challenges.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or mentoring aspiring developers. I'm passionate about continuous learning and staying at the forefront
                  of technological advancements.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-highlands-primary hover:bg-highlands-dark">
                    Let's Work Together <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Circle Favicon Image */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                <img 
                  src="/favicon.png" 
                  alt="The HighLands Forum" 
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-highlands-accent rounded-full opacity-50 z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-highlands-primary rounded-full opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
            <div className="w-20 h-1 bg-highlands-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I specialize in modern web technologies and frameworks, focusing on creating scalable, 
              maintainable, and user-centered applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-on-scroll">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center justify-center text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-highlands-primary mb-2">
                  <Check size={20} />
                </div>
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
          
            <div className="mt-12 text-center animate-on-scroll">
            <a 
              href="/resume.pdf" 
              download="Lee_Jones_Resume.pdf"
              className="inline-flex items-center text-highlands-primary font-medium hover:underline"
            >
              <Download className="mr-2 h-5 w-5" />
              Download My Resume
            </a>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-highlands-primary mb-6"></div>
            <p className="text-gray-700 max-w-2xl">
              My professional journey has provided me with diverse experiences across different roles and industries.
            </p>
          </div>
          
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="text-sm text-highlands-secondary font-medium mb-1 flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="text-gray-600 mt-1">{exp.company}</div>
                  </div>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-highlands-primary text-white">
        <div className="section-container text-center animate-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Let's collaborate to bring your vision to life. Whether you need a new website, mobile app,
            or technical consultation, I'm here to help.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-highlands-primary hover:bg-highlands-light">
              Contact Me Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
