export const generateResumeData = () => {
  const resumeData = {
    personalInfo: {
      name: "Lee Jones",
      title: "Senior Frontend Developer",
      email: "contact@thehighlandsforum.com",
      website: "thehighlandsforum.com",
      location: "Remote",
    },
    summary: "Experienced frontend developer with 5+ years of expertise in React, TypeScript, and modern web technologies. Passionate about creating scalable, maintainable applications and mentoring junior developers.",
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "Tech Innovations Inc.",
        period: "2021 - Present",
        description: "Lead development of multiple web applications using React, TypeScript, and modern frontend technologies. Implemented CI/CD pipelines and mentored junior developers."
      },
      {
        title: "Full Stack Developer", 
        company: "Digital Solutions LLC",
        period: "2019 - 2021",
        description: "Built and maintained MERN stack applications. Designed and implemented RESTful APIs, managed database schemas, and created responsive UIs."
      },
      {
        title: "Web Developer",
        company: "Creative Agency Co.",
        period: "2017 - 2019", 
        description: "Developed custom websites for clients across various industries. Collaborated with designers to implement visually appealing and functional websites."
      }
    ],
    skills: [
      "JavaScript/TypeScript", "React", "Node.js", "Express", "Next.js", "React Native",
      "HTML/CSS", "Tailwind CSS", "GraphQL", "RESTful APIs", "MongoDB", "PostgreSQL", 
      "Git/GitHub", "Docker", "AWS", "Firebase", "UI/UX Design", "Responsive Design"
    ],
    projects: [
      {
        name: "Telegram StarStore App",
        description: "A Telegram Mini App for buying and selling Telegram Stars with secure payment integration and real-time notifications."
      },
      {
        name: "Task Management Dashboard", 
        description: "A comprehensive project management tool with real-time collaboration features built with React and Node.js."
      },
      {
        name: "Responsive Landing Page",
        description: "Modern, SEO-optimized landing page with advanced animations and mobile-first design approach."
      }
    ]
  };
  
  return resumeData;
};

export const downloadResume = () => {
  const resumeData = generateResumeData();
  
  // Create resume content as text
  const resumeContent = `
${resumeData.personalInfo.name}
${resumeData.personalInfo.title}
Email: ${resumeData.personalInfo.email}
Website: ${resumeData.personalInfo.website}
Location: ${resumeData.personalInfo.location}

SUMMARY
${resumeData.summary}

EXPERIENCE
${resumeData.experience.map(exp => `
${exp.title} | ${exp.company} | ${exp.period}
${exp.description}
`).join('')}

SKILLS
${resumeData.skills.join(', ')}

PROJECTS
${resumeData.projects.map(project => `
${project.name}
${project.description}
`).join('')}
  `.trim();

  // Create and download file
  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Lee_Jones_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};